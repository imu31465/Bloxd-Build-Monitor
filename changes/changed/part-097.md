# Changed — Bundle Modifications Report (Part 097 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `97 / 142` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 096](part-096.md) · [Part 098 →](part-098.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (967 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6344-L6401` → after: `L6344-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6344-L6401) · [Before (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6344-L6401)

```diff
-     function Fo(pp) {
-       let ip = pp;
-       for (const [cp, Op] of no) ip = ip.replace(cp, (pp => pp.length > 1 && pp[0] !== pp[0].toLowerCase() && pp.slice(1) === pp.slice(1).toLowerCase() ? Op[0].toUpperCase() + Op.slice(1) : Op));
-       return ip
-     }
-     const go = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       Go = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       ro = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       Zo = 12e3,
-       zo = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function so(pp) {
-       var ip, cp, Op;
-       const op = null === (ip = /Safety:\s*(\w+)/.exec(pp)) || void 0 === ip ? void 0 : ip[1],
-         Ip = null !== (cp = null === (Op = /Categories:\s*(.+)/.exec(pp)) || void 0 === Op ? void 0 : Op[1]) && void 0 !== cp ? cp : "";
-       return /PII/.test(Ip) ? "personalInfo" : "Unsafe" === op || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(Ip) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function uz(TT) {
+       let UT = TT;
+       for (const [mT, WT] of Vz) UT = UT.replace(mT, (TT => TT.length > 1 && TT[0] !== TT[0].toLowerCase() && TT.slice(1) === TT.slice(1).toLowerCase() ? WT[0].toUpperCase() + WT.slice(1) : WT));
+       return UT
+     }
+     const Cz = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       rz = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       Kz = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       Sz = 12e3,
+       Gz = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function Nz(TT) {
+       var UT, mT, WT;
+       const zT = null === (UT = /Safety:\s*(\w+)/.exec(TT)) || void 0 === UT ? void 0 : UT[1],
+         MT = null !== (mT = null === (WT = /Categories:\s*(.+)/.exec(TT)) || void 0 === WT ? void 0 : WT[1]) && void 0 !== mT ? mT : "";
+       return /PII/.test(MT) ? "personalInfo" : "Unsafe" === zT || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(MT) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6403-L6406` → after: `L6403-L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6403-L6406) · [Before (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6403-L6406)

```diff
-           if ("\n" === ip) break;
-           if (cp) cp = "]" !== ip;
-           else if ("[" === ip) cp = !0;
-           else if ("/" === ip) return Op + 1
+           if ("\n" === UT) break;
+           if (mT) mT = "]" !== UT;
+           else if ("[" === UT) mT = !0;
+           else if ("/" === UT) return WT + 1
```

#### 261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6409-L6430` → after: `L6409-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6409-L6430) · [Before (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6409-L6430)

```diff
-       return ip + 1
-     }
- 
-     function oI(pp, ip, cp, Op) {
-       let op = ip,
-         Ip = 0;
-       for (; op < pp.length;) {
-         const ip = pp[op],
-           Sp = pp[op + 1];
-         if ("/" === ip && "/" === Sp) {
-           const ip = pp.indexOf("\n", op);
-           Op.push(pp.slice(op + 2, -1 === ip ? pp.length : ip)), op = -1 === ip ? pp.length : ip
-         } else if ("/" === ip && "*" === Sp) {
-           const ip = pp.indexOf("*/", op + 2);
-           Op.push(pp.slice(op + 2, -1 === ip ? pp.length : ip)), op = -1 === ip ? pp.length : ip + 2
-         } else if ("/" === ip && cI(pp, op)) op = OI(pp, op);
- ... (6 more removed lines; see GitHub link above)
+       return UT + 1
+     }
+ 
+     function TM(TT, UT, mT, WT) {
+       let zT = UT,
+         MT = 0;
+       for (; zT < TT.length;) {
+         const UT = TT[zT],
+           gT = TT[zT + 1];
+         if ("/" === UT && "/" === gT) {
+           const UT = TT.indexOf("\n", zT);
+           WT.push(TT.slice(zT + 2, -1 === UT ? TT.length : UT)), zT = -1 === UT ? TT.length : UT
+         } else if ("/" === UT && "*" === gT) {
+           const UT = TT.indexOf("*/", zT + 2);
+           WT.push(TT.slice(zT + 2, -1 === UT ? TT.length : UT)), zT = -1 === UT ? TT.length : UT + 2
+         } else if ("/" === UT && Az(TT, zT)) zT = Rz(TT, zT);
+ ... (6 more added lines; see GitHub link above)
```

#### 262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6432-L6435` → after: `L6432-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6432-L6435) · [Before (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6432-L6435)

```diff
-           if (cp && "{" === ip) Ip++;
-           else if (cp && "}" === ip) {
-             if (0 === Ip) return op + 1;
-             Ip--
+           if (mT && "{" === UT) MT++;
+           else if (mT && "}" === UT) {
+             if (0 === MT) return zT + 1;
+             MT--
```

#### 263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6437` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6437) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6437)

```diff
-           op++
+           zT++
```

#### 264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6440` → after: `L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6440) · [Before (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6440)

```diff
-       return op
+       return zT
```

#### 265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6442-L6446` → after: `L6442-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6442-L6446) · [Before (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6442-L6446)

```diff
-     const II = 4e5;
-     var SI = cp(41726);
-     let xI = [],
-       LI = 0,
-       YI = null;
+     const UM = 4e5;
+     var mM = mT(41614);
+     let WM = [],
+       zM = 0,
+       MM = null;
```

#### 266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6448-L6449` → after: `L6448-L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6448-L6449) · [Before (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6448-L6449)

```diff
-     function DI(pp) {
-       return Math.ceil(pp.length / 4)
+     function gM(TT) {
+       return Math.ceil(TT.length / 4)
```

#### 267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6452-L6453` → after: `L6452-L6453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6452-L6453) · [Before (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6452-L6453)

```diff
-     function AI(pp) {
-       return "number" === typeof pp && Number.isInteger(pp) && pp >= 0
+     function nM(TT) {
+       return "number" === typeof TT && Number.isInteger(TT) && TT >= 0
```

#### 268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6456-L6459` → after: `L6456-L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6456-L6459) · [Before (L6456-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6456-L6459)

```diff
-     function PI(pp, ip, cp) {
-       var Op;
-       let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(pp) {
+     function HM(TT, UT, mT) {
+       var WT;
+       let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(TT) {
```

#### 269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6461-L6464` → after: `L6461-L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6461-L6464) · [Before (L6461-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6461-L6464)

```diff
-         if (xI.push(pp), xI.length >= 40) return void yI();
-         WI()
-       }(null !== (Op = function(pp) {
-         if (null === pp || "object" !== typeof pp) return null;
+         if (WM.push(TT), WM.length >= 40) return void jM();
+         kM()
+       }(null !== (WT = function(TT) {
+         if (null === TT || "object" !== typeof TT) return null;
```

#### 270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6466-L6471` → after: `L6466-L6471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6466-L6471) · [Before (L6466-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6466-L6471)

```diff
-           prompt_tokens: ip,
-           completion_tokens: cp,
-           prompt_tokens_details: Op
-         } = pp;
-         if (!AI(ip) || !AI(cp)) return null;
-         const op = null !== Op && "object" === typeof Op ? Op.cached_tokens : void 0;
+           prompt_tokens: UT,
+           completion_tokens: mT,
+           prompt_tokens_details: WT
+         } = TT;
+         if (!nM(UT) || !nM(mT)) return null;
+         const zT = null !== WT && "object" === typeof WT ? WT.cached_tokens : void 0;
```

#### 271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6473-L6475` → after: `L6473-L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6473-L6475) · [Before (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6473-L6475)

```diff
-           sent: ip,
-           cached: AI(op) ? op : 0,
-           received: cp
+           sent: UT,
+           cached: nM(zT) ? zT : 0,
+           received: mT
```

#### 272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6477-L6478` → after: `L6477-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6477-L6478) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6477-L6478)

```diff
-       }(pp)) && void 0 !== Op ? Op : {
-         sent: DI(JSON.stringify(ip)),
+       }(TT)) && void 0 !== WT ? WT : {
+         sent: gM(JSON.stringify(UT)),
```

#### 273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6480` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6480) · [Before (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6480)

```diff
-         received: DI(cp) + op
+         received: gM(mT) + zT
```

#### 274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6484-L6486` → after: `L6484-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6484-L6486) · [Before (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6484-L6486)

```diff
-     function WI() {
-       YI ??= setTimeout((() => {
-         yI()
+     function kM() {
+       MM ??= setTimeout((() => {
+         jM()
```

#### 275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6489-L6493` → after: `L6489-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6489-L6493) · [Before (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6489-L6493)

```diff
-     async function yI() {
-       null !== YI && (clearTimeout(YI), YI = null);
-       const pp = xI.slice(0, 40);
-       xI = xI.slice(40), xI.length > 0 && (YI = setTimeout((() => {
-         yI()
+     async function jM() {
+       null !== MM && (clearTimeout(MM), MM = null);
+       const TT = WM.slice(0, 40);
+       WM = WM.slice(40), WM.length > 0 && (MM = setTimeout((() => {
+         jM()
```

#### 276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6495-L6499` → after: `L6495-L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6495-L6499) · [Before (L6495-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6495-L6499)

```diff
-       const ip = LI;
-       if (LI = 0, 0 !== pp.length || 0 !== ip) try {
-         await (0, SI.postToGameServer)("/ai-helper/usage", {
-           calls: pp,
-           pastes: ip
+       const UT = zM;
+       if (zM = 0, 0 !== TT.length || 0 !== UT) try {
+         await (0, mM.postToGameServer)("/ai-helper/usage", {
+           calls: TT,
+           pastes: UT
```

#### 277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6503-L6504` → after: `L6503-L6504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6503-L6504) · [Before (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6503-L6504)

```diff
-     const UI = 6e4;
-     const wI = new class {
+     const lM = 6e4;
+     const LM = new class {
```

#### 278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6508-L6510` → after: `L6508-L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6508-L6510) · [Before (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6508-L6510)

```diff
-       record(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(pp, [...this.recent(pp, ip), ip])
+       record(TT) {
+         let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(TT, [...this.recent(TT, UT), UT])
```

#### 279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6512-L6516` → after: `L6512-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6512-L6516) · [Before (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6512-L6516)

```diff
-       markFull(pp) {
-         var ip;
-         let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(pp, Math.max(null !== (ip = this.fullUntil.get(pp)) && void 0 !== ip ? ip : 0, cp + Math.max(Op, UI)))
+       markFull(TT) {
+         var UT;
+         let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(TT, Math.max(null !== (UT = this.fullUntil.get(TT)) && void 0 !== UT ? UT : 0, mT + Math.max(WT, lM)))
```

#### 280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6518-L6520` → after: `L6518-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6518-L6520) · [Before (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6518-L6520)

```diff
-       callsInLastMinute(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(pp, ip).length
+       callsInLastMinute(TT) {
+         let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(TT, UT).length
```

#### 281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6522-L6527` → after: `L6522-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6522-L6527) · [Before (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6522-L6527)

```diff
-       freeAt(pp) {
-         var ip;
-         let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const Op = this.recent(pp, cp),
-           op = Op.length < 2 ? cp : Op[Op.length - 2] + UI;
-         return Math.max(op, null !== (ip = this.fullUntil.get(pp)) && void 0 !== ip ? ip : 0, cp)
+       freeAt(TT) {
+         var UT;
+         let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const WT = this.recent(TT, mT),
+           zT = WT.length < 2 ? mT : WT[WT.length - 2] + lM;
+         return Math.max(zT, null !== (UT = this.fullUntil.get(TT)) && void 0 !== UT ? UT : 0, mT)
```

#### 282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6529-L6531` → after: `L6529-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6529-L6531) · [Before (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6529-L6531)

```diff
-       firstFreeAt(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...pp.map((pp => this.freeAt(pp, ip))))
+       firstFreeAt(TT) {
+         let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...TT.map((TT => this.freeAt(TT, UT))))
```

#### 283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6536-L6538` → after: `L6536-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6536-L6538) · [Before (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6536-L6538)

```diff
-       recent(pp, ip) {
-         var cp;
-         return (null !== (cp = this.calls.get(pp)) && void 0 !== cp ? cp : []).filter((pp => ip - pp < UI))
+       recent(TT, UT) {
+         var mT;
+         return (null !== (mT = this.calls.get(TT)) && void 0 !== mT ? mT : []).filter((TT => UT - TT < lM))
```

#### 284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6542-L6543` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6542-L6543) · [Before (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6542-L6543)

```diff
-     function vI(pp) {
-       return pp > 36e5
+     function pM(TT) {
+       return TT > 36e5
```

#### 285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6546-L6549` → after: `L6546-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6546-L6549) · [Before (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6546-L6549)

```diff
-     function tI(pp, ip) {
-       var cp;
-       const Op = null === (cp = pp.headers.get(ip)) || void 0 === cp ? void 0 : cp.trim();
-       return void 0 !== Op && /^\d+$/.test(Op) ? Number(Op) : null
+     function BM(TT, UT) {
+       var mT;
+       const WT = null === (mT = TT.headers.get(UT)) || void 0 === mT ? void 0 : mT.trim();
+       return void 0 !== WT && /^\d+$/.test(WT) ? Number(WT) : null
```

#### 286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6552-L6555` → after: `L6552-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6552-L6555) · [Before (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6552-L6555)

```diff
-     function HI(pp) {
-       var ip;
-       const cp = null !== (ip = tI(pp, "retry-after")) && void 0 !== ip ? ip : tI(pp, "ratelimit-reset");
-       return null === cp ? null : 1e3 * cp
+     function ZM(TT) {
+       var UT;
+       const mT = null !== (UT = BM(TT, "retry-after")) && void 0 !== UT ? UT : BM(TT, "ratelimit-reset");
+       return null === mT ? null : 1e3 * mT
```

#### 287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6558-L6561` → after: `L6558-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6558-L6561) · [Before (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6558-L6561)

```diff
-     function dI(pp, ip) {
-       var cp;
-       const Op = null !== (cp = HI(ip)) && void 0 !== cp ? cp : 0;
-       (429 === ip.status || vI(Op) && 0 === tI(ip, "ratelimit-remaining")) && wI.markFull(pp, Date.now(), Op)
+     function cM(TT, UT) {
+       var mT;
+       const WT = null !== (mT = ZM(UT)) && void 0 !== mT ? mT : 0;
+       (429 === UT.status || pM(WT) && 0 === BM(UT, "ratelimit-remaining")) && LM.markFull(TT, Date.now(), WT)
```

#### 288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6564-L6567` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6564-L6567) · [Before (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6564-L6567)

```diff
-     function eI(pp) {
-       const ip = Date.now(),
-         cp = wI.freeAt(pp, ip) - ip;
-       return cp <= 0 ? null : vI(cp) ? "unavailable" : "busy"
+     function vM(TT) {
+       const UT = Date.now(),
+         mT = LM.freeAt(TT, UT) - UT;
+       return mT <= 0 ? null : pM(mT) ? "unavailable" : "busy"
```

#### 289. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6570-L6571` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6570-L6571) · [Before (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6570-L6571)

```diff
-     function uI(pp, ip) {
-       return `${function(pp){var ip;if("string"===typeof pp)return pp;if(429!==pp.status)return`http-${pp.status}`;if(vI(null!==(ip=HI(pp))&&void 0!==ip?ip:0))return"yearly-limit";const cp=tI(pp,"retry-after");return null===cp?"busy":`busy-ra${cp}`}(ip)}__${pp.replace(/[^A-Za-z0- … [truncated]
+     function fM(TT, UT) {
+       return `${function(TT){var UT;if("string"===typeof TT)return TT;if(429!==TT.status)return`http-${TT.status}`;if(pM(null!==(UT=ZM(TT))&&void 0!==UT?UT:0))return"yearly-limit";const mT=BM(TT,"retry-after");return null===mT?"busy":`busy-ra${mT}`}(UT)}__${TT.replace(/[^A-Za-z0- … [truncated]
```

#### 290. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6573-L6575` → after: `L6573-L6575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6573-L6575) · [Before (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6573-L6575)

```diff
-     const jI = new class {
-         constructor(pp) {
-           this.loadReporter = pp, this.reportedCodes = new Set
+     const qM = new class {
+         constructor(TT) {
+           this.loadReporter = TT, this.reportedCodes = new Set
```

#### 291. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6577-L6579` → after: `L6577-L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6577-L6579) · [Before (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6577-L6579)

```diff
-         Yy(pp, ip) {
-           const cp = uI(pp, ip);
-           "undefined" === typeof window || this.reportedCodes.has(cp) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(cp), this.loadReporter().then((ip => {
+         Gp(TT, UT) {
+           const mT = fM(TT, UT);
+           "undefined" === typeof window || this.reportedCodes.has(mT) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(mT), this.loadReporter().then((UT => {
```

#### 292. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6581-L6585` → after: `L6581-L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6581-L6585) · [Before (L6581-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6581-L6585)

```diff
-               reportCappedWasmFailure: Op
-             } = ip;
-             Op("ai_helper_failed", `World Code AI: ${pp} failed`, cp)
-           })).catch((pp => {
-             console.error("World Code AI: couldn't report a failure", pp)
+               reportCappedWasmFailure: WT
+             } = UT;
+             WT("ai_helper_failed", `World Code AI: ${TT} failed`, mT)
+           })).catch((TT => {
+             console.error("World Code AI: couldn't report a failure", TT)
```

#### 293. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6588-L6600` → after: `L6588-L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6588-L6600) · [Before (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6588-L6600)

```diff
-       }((() => cp.e(213).then((() => cp(36469))))),
-       kI = /\n{3,}/,
-       mI = /<tool_call\b|<function=/;
- 
-     function RI(pp) {
-       const ip = pp.trimStart(),
-         cp = kI.exec(ip),
-         Op = mI.exec(ip);
-       if (null === cp || null !== Op && Op.index < cp.index) return null;
-       const op = ip.slice(cp.index + cp[0].length);
-       return "" === op.trim() ? null : op
-     }
-     const qI = [{
+       }((() => mT.e(213).then((() => mT(36341))))),
+       iM = /\n{3,}/,
+       bM = /<tool_call\b|<function=/;
+ 
+     function OM(TT) {
+       const UT = TT.trimStart(),
+         mT = iM.exec(UT),
+         WT = bM.exec(UT);
+       if (null === mT || null !== WT && WT.index < mT.index) return null;
+       const zT = UT.slice(mT.index + mT[0].length);
+       return "" === zT.trim() ? null : zT
+     }
+     const eM = [{
```

#### 294. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6619` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6619) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6619)

```diff
-     const MI = {
+     const YM = {
```

#### 295. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6626-L6627` → after: `L6626-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6626-L6627) · [Before (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6626-L6627)

```diff
-     function CI(pp) {
-       return [...qI, MI].find((ip => ip.name === pp))
+     function JM(TT) {
+       return [...eM, YM].find((UT => UT.name === TT))
```

#### 296. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6630-L6632` → after: `L6630-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6630-L6632) · [Before (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6630-L6632)

```diff
-     function EI(pp) {
-       var ip, cp;
-       return null !== (ip = null === (cp = CI(pp)) || void 0 === cp ? void 0 : cp.callFormat) && void 0 !== ip ? ip : "simple"
+     function xM(TT) {
+       var UT, mT;
+       return null !== (UT = null === (mT = JM(TT)) || void 0 === mT ? void 0 : mT.callFormat) && void 0 !== UT ? UT : "simple"
```

#### 297. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6635-L6636` → after: `L6635-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6635-L6636) · [Before (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6635-L6636)

```diff
-     function XI(pp) {
-       var ip;
+     function dM(TT) {
+       var UT;
```

#### 298. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6638-L6639` → after: `L6638-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6638-L6639) · [Before (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6638-L6639)

```diff
-         format: null !== (ip = pp.callFormat) && void 0 !== ip ? ip : "simple",
-         nativeTools: !0 === pp.nativeTools
+         format: null !== (UT = TT.callFormat) && void 0 !== UT ? UT : "simple",
+         nativeTools: !0 === TT.nativeTools
```

#### 299. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6643-L6644` → after: `L6643-L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6643-L6644) · [Before (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6643-L6644)

```diff
-     function lI(pp, ip) {
-       return "function" === typeof pp ? pp(ip) : pp
+     function wM(TT, UT) {
+       return "function" === typeof TT ? TT(UT) : TT
```

#### 300. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6646-L6652` → after: `L6646-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6646-L6652) · [Before (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6646-L6652)

```diff
-     const QI = "TOO_COMPLEX",
-       JI = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${QI} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       BI = 24e4,
-       NI = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class TI extends Error {
-       constructor(pp) {
-         super(`World Code AI ${pp}`), this.reason = pp
+     const tM = "TOO_COMPLEX",
+       aM = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${tM} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       yM = 24e4,
+       XM = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class IM extends Error {
+       constructor(TT) {
+         super(`World Code AI ${TT}`), this.reason = TT
```

#### 301. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6656-L6658` → after: `L6656-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6656-L6658) · [Before (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6656-L6658)

```diff
-     function fI(pp, ip) {
-       var cp, Op, op, Ip, Sp;
-       const xp = pp[null !== (cp = ip.index) && void 0 !== cp ? cp : 0] ??= {
+     function QM(TT, UT) {
+       var mT, WT, zT, MT, gT;
+       const nT = TT[null !== (mT = UT.index) && void 0 !== mT ? mT : 0] ??= {
```

#### 302. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6662` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6662) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6662)

```diff
-       xp.name += null !== (Op = null === (op = ip.function) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : "", xp.args += null !== (Ip = null === (Sp = ip.function) || void 0 === Sp ? void 0 : Sp.arguments) && void 0 !== Ip ? Ip : ""
+       nT.name += null !== (WT = null === (zT = UT.function) || void 0 === zT ? void 0 : zT.name) && void 0 !== WT ? WT : "", nT.args += null !== (MT = null === (gT = UT.function) || void 0 === gT ? void 0 : gT.arguments) && void 0 !== MT ? MT : ""
```

#### 303. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6665-L6666` → after: `L6665-L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6665-L6666) · [Before (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6665-L6666)

```diff
-     function bI(pp) {
-       return "mcp" === pp ? "simple" : pp
+     function sM(TT) {
+       return "mcp" === TT ? "simple" : TT
```

#### 304. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6669-L6671` → after: `L6669-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6669-L6671) · [Before (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6669-L6671)

```diff
-     function hI(pp, ip, cp, Op) {
-       let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return aI(pp, ip, cp, bI(Op), op).answer
+     function FM(TT, UT, mT, WT) {
+       let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return PM(TT, UT, mT, sM(WT), zT).answer
```

#### 305. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6674-L6677` → after: `L6674-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6674-L6677) · [Before (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6674-L6677)

```diff
-     function aI(pp, ip, cp, Op, op) {
-       const Ip = cp.flatMap((pp => {
-         const ip = Uc(pp.name, pp.args);
-         return null === ip ? [] : [Yo(Sc(Op), ip.name, ip.args)]
+     function PM(TT, UT, mT, WT, zT) {
+       const MT = mT.flatMap((TT => {
+         const UT = Lm(TT.name, TT.args);
+         return null === UT ? [] : [nz(Wm(WT), UT.name, UT.args)]
```

#### 306. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6679-L6686` → after: `L6679-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6679-L6686) · [Before (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6679-L6686)

```diff
-       let Sp = !1;
-       return 0 !== Ip.length || 0 !== vc(pp, Op).length || pp.includes("```") || (Ip.push(...op ? [] : function(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const Op = new Map;
-         for (const xp of wc(pp, ip)) {
-           const pp = Object.values(xp.args).some((pp => void 0 !== pp && cp.includes(pp.trim())));
-           var op, Ip, Sp;
-           "export_game" === xp.name || "switch_to_world_code" === xp.name || Ri(xp.name) || pp || Op.set(`${xp.name} ${null!==(op=xp.args.path)&&void 0!==op?op:""} ${null!==(Ip=xp.args.search)&&void 0!==Ip?Ip:""} ${null!==(Sp=xp.args.name)&&void 0!==Sp?Sp:""}`, xp.source)
+       let gT = !1;
+       return 0 !== MT.length || 0 !== Bm(TT, WT).length || TT.includes("```") || (MT.push(...zT ? [] : function(TT, UT) {
+         let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const WT = new Map;
+         for (const nT of pm(TT, UT)) {
+           const TT = Object.values(nT.args).some((TT => void 0 !== TT && mT.includes(TT.trim())));
+           var zT, MT, gT;
+           "export_game" === nT.name || "switch_to_world_code" === nT.name || YU(nT.name) || TT || WT.set(`${nT.name} ${null!==(zT=nT.args.path)&&void 0!==zT?zT:""} ${null!==(MT=nT.args.search)&&void 0!==MT?MT:""} ${null!==(gT=nT.args.name)&&void 0!==gT?gT:""}`, nT.source)
```

#### 307. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6688-L6691` → after: `L6688-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6688-L6691) · [Before (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6688-L6691)

```diff
-         return [...new Set(Op.values())]
-       }(ip, Op, uo)), Sp = Ip.length > 0), {
-         answer: [pp, ...Ip].join("\n\n").trim(),
-         hasCallsFromReasoning: Sp
+         return [...new Set(WT.values())]
+       }(UT, WT, qz)), gT = MT.length > 0), {
+         answer: [TT, ...MT].join("\n\n").trim(),
+         hasCallsFromReasoning: gT
```

#### 308. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6694-L6697` → after: `L6694-L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6694-L6697) · [Before (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6694-L6697)

```diff
-     async function nI(pp, ip) {
-       const cp = pp.getReader(),
-         Op = new TextDecoder;
-       let op = "";
+     async function VM(TT, UT) {
+       const mT = TT.getReader(),
+         WT = new TextDecoder;
+       let zT = "";
```

#### 309. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6700-L6704` → after: `L6700-L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6700-L6704) · [Before (L6700-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6700-L6704)

```diff
-           done: pp,
-           value: Ip
-         } = await cp.read();
-         if (pp) break;
-         op += Op.decode(Ip, {
+           done: TT,
+           value: MT
+         } = await mT.read();
+         if (TT) break;
+         zT += WT.decode(MT, {
```

#### 310. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6707-L6713` → after: `L6707-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6707-L6713) · [Before (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6707-L6713)

```diff
-         let Sp = op.indexOf("\n");
-         for (; - 1 !== Sp;) {
-           const pp = op.slice(0, Sp).trim();
-           if (op = op.slice(Sp + 1), Sp = op.indexOf("\n"), !pp.startsWith("data:")) continue;
-           const cp = pp.slice(5).trim();
-           if ("[DONE]" === cp) return;
-           let Op;
+         let gT = zT.indexOf("\n");
+         for (; - 1 !== gT;) {
+           const TT = zT.slice(0, gT).trim();
+           if (zT = zT.slice(gT + 1), gT = zT.indexOf("\n"), !TT.startsWith("data:")) continue;
+           const mT = TT.slice(5).trim();
+           if ("[DONE]" === mT) return;
+           let WT;
```

#### 311. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6715` → after: `L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6715) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6715)

```diff
-             Op = JSON.parse(cp)
+             WT = JSON.parse(mT)
```

#### 312. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6719` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6719) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6719)

```diff
-           ip(Op)
+           UT(WT)
```

#### 313. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6724-L6725` → after: `L6724-L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6724-L6725) · [Before (L6724-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6724-L6725)

```diff
-     function FI(pp) {
-       return pp.map((pp => ({
+     function uM(TT) {
+       return TT.map((TT => ({
```

#### 314. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6728-L6730` → after: `L6728-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6728-L6730) · [Before (L6728-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6728-L6730)

```diff
-           name: pp.name,
-           description: pp.description,
-           parameters: pp.inputSchema
+           name: TT.name,
+           description: TT.description,
+           parameters: TT.inputSchema
```

#### 315. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6735-L6736` → after: `L6735-L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6735-L6736) · [Before (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6735-L6736)

```diff
-     function gI(pp) {
-       return "object" === typeof pp
+     function CM(TT) {
+       return "object" === typeof TT
```

#### 316. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6738-L6743` → after: `L6738-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6738-L6743) · [Before (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6738-L6743)

```diff
-     async function GI(pp, ip, cp, Op) {
-       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const Ip = eI(pp.name);
-       if (null !== Ip) return Ip;
-       wI.record(pp.name);
-       const Sp = await fetch(go, {
+     async function rM(TT, UT, mT, WT) {
+       let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const MT = vM(TT.name);
+       if (null !== MT) return MT;
+       LM.record(TT.name);
+       const gT = await fetch(Cz, {
```

#### 317. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6749-L6750` → after: `L6749-L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6749-L6750) · [Before (L6749-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6749-L6750)

```diff
-           model: pp.name,
-           messages: ip,
+           model: TT.name,
+           messages: UT,
```

#### 318. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6752-L6753` → after: `L6752-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6752-L6753) · [Before (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6752-L6753)

```diff
-           temperature: pp.temperature,
-           reasoning_effort: pp.reasoningEffort,
+           temperature: TT.temperature,
+           reasoning_effort: TT.reasoningEffort,
```

#### 319. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6758-L6759` → after: `L6758-L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6758-L6759) · [Before (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6758-L6759)

```diff
-           ...pp.nativeTools && op.length > 0 ? {
-             tools: FI(op)
+           ...TT.nativeTools && zT.length > 0 ? {
+             tools: uM(zT)
```

#### 320. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6764)

```diff
-         signal: cp
+         signal: mT
```

#### 321. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6766-L6774` → after: `L6766-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6766-L6774) · [Before (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6766-L6774)

```diff
-       if (dI(pp.name, Sp), 429 === Sp.status) return jI.Yy(pp.name, Sp), "unavailable" === eI(pp.name) ? "unavailable" : "busy";
-       if (!Sp.ok || !Sp.body) return console.warn(`World Code AI: ${pp.name} answered ${Sp.status}`), jI.Yy(pp.name, Sp.ok ? "empty" : Sp), Sp.ok ? "failed" : 429 === (xp = Sp.status) ? "busy" : 400 === xp || 413 === xp ? "tooLarge" : 401 === xp || 403 === xp ? "turnedAway" : "fa … [truncated]
-       var xp;
-       let Lp = "",
-         Yp = "";
-       const Dp = [];
-       let Ap = !1,
-         Pp = !1,
-         Wp = null;
+       if (cM(TT.name, gT), 429 === gT.status) return qM.Gp(TT.name, gT), "unavailable" === vM(TT.name) ? "unavailable" : "busy";
+       if (!gT.ok || !gT.body) return console.warn(`World Code AI: ${TT.name} answered ${gT.status}`), qM.Gp(TT.name, gT.ok ? "empty" : gT), gT.ok ? "failed" : 429 === (nT = gT.status) ? "busy" : 400 === nT || 413 === nT ? "tooLarge" : 401 === nT || 403 === nT ? "turnedAway" : "fa … [truncated]
+       var nT;
+       let HT = "",
+         kT = "";
+       const jT = [];
+       let lT = !1,
+         LT = !1,
+         pT = null;
```

#### 322. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6776-L6782` → after: `L6776-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6776-L6782) · [Before (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6776-L6782)

```diff
-         await async function(pp, ip, cp) {
-           await nI(pp, (pp => {
-             var Op;
-             const op = pp,
-               Ip = null === (Op = op.choices) || void 0 === Op ? void 0 : Op[0];
-             var Sp, xp;
-             Ip && ip(null !== (Sp = Ip.delta) && void 0 !== Sp ? Sp : {}, null !== (xp = Ip.finish_reason) && void 0 !== xp ? xp : null), op.usage && (null === cp || void 0 === cp || cp(op.usage))
+         await async function(TT, UT, mT) {
+           await VM(TT, (TT => {
+             var WT;
+             const zT = TT,
+               MT = null === (WT = zT.choices) || void 0 === WT ? void 0 : WT[0];
+             var gT, nT;
+             MT && UT(null !== (gT = MT.delta) && void 0 !== gT ? gT : {}, null !== (nT = MT.finish_reason) && void 0 !== nT ? nT : null), zT.usage && (null === mT || void 0 === mT || mT(zT.usage))
```

#### 323. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6784-L6789` → after: `L6784-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6784-L6789) · [Before (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6784-L6789)

```diff
-         }(Sp.body, ((ip, cp) => {
-           var op, Ip, Sp, xp;
-           Ap ||= "length" === cp, Yp += null !== (op = null !== (Ip = ip.reasoning) && void 0 !== Ip ? Ip : ip.reasoning_content) && void 0 !== op ? op : "", Lp += null !== (Sp = ip.content) && void 0 !== Sp ? Sp : "";
-           for (const pp of null !== (Wp = ip.tool_calls) && void 0 !== Wp ? Wp : []) {
-             var Wp;
-             Pp ||= "" !== Yp && "" === Lp.trim(), fI(Dp, pp)
+         }(gT.body, ((UT, mT) => {
+           var zT, MT, gT, nT;
+           lT ||= "length" === mT, kT += null !== (zT = null !== (MT = UT.reasoning) && void 0 !== MT ? MT : UT.reasoning_content) && void 0 !== zT ? zT : "", HT += null !== (gT = UT.content) && void 0 !== gT ? gT : "";
+           for (const TT of null !== (pT = UT.tool_calls) && void 0 !== pT ? pT : []) {
+             var pT;
+             LT ||= "" !== kT && "" === HT.trim(), QM(jT, TT)
```

#### 324. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6791-L6796` → after: `L6791-L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6791-L6796) · [Before (L6791-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6791-L6796)

```diff
-           const yp = pp.nativeTools && Pp ? null !== (xp = RI(Lp)) && void 0 !== xp ? xp : "" : Lp;
-           null === Op || void 0 === Op || Op({
-             model: pp.name,
-             reasoningChars: Yp.length,
-             answer: yp,
-             isCalling: Dp.length > 0
+           const BT = TT.nativeTools && LT ? null !== (nT = OM(HT)) && void 0 !== nT ? nT : "" : HT;
+           null === WT || void 0 === WT || WT({
+             model: TT.name,
+             reasoningChars: kT.length,
+             answer: BT,
+             isCalling: jT.length > 0
```

#### 325. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6798-L6799` → after: `L6798-L6799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6798-L6799) · [Before (L6798-L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6798-L6799)

```diff
-         }), (pp => {
-           Wp = pp
+         }), (TT => {
+           pT = TT
```

#### 326. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6802` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6802) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6802)

```diff
-         PI(Wp, ip, Lp + Yp, 20 * Dp.length)
+         HM(pT, UT, HT + kT, 20 * jT.length)
```

#### 327. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6804-L6821` → after: `L6804-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6804-L6821) · [Before (L6804-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6804-L6821)

```diff
-       const yp = rI(pp, Lp, Yp, Dp, Ap, Pp);
-       return null === yp ? (jI.Yy(pp.name, "empty"), "failed") : yp
-     }
- 
-     function rI(pp, ip, cp, Op, op) {
-       var Ip;
-       let Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         xp = ip;
-       var Lp;
-       pp.nativeTools && Sp && (xp = null !== (Lp = RI(xp)) && void 0 !== Lp ? Lp : xp);
-       xp = xp.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const Yp = aI(xp, cp, Op, null !== (Ip = pp.callFormat) && void 0 !== Ip ? Ip : "simple", op);
-       return "" === Yp.answer ? null : {
-         model: pp.name,
-         answer: Yp.answer,
-         reasoning: cp,
- ... (2 more removed lines; see GitHub link above)
+       const BT = KM(TT, HT, kT, jT, lT, LT);
+       return null === BT ? (qM.Gp(TT.name, "empty"), "failed") : BT
+     }
+ 
+     function KM(TT, UT, mT, WT, zT) {
+       var MT;
+       let gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         nT = UT;
+       var HT;
+       TT.nativeTools && gT && (nT = null !== (HT = OM(nT)) && void 0 !== HT ? HT : nT);
+       nT = nT.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const kT = PM(nT, mT, WT, null !== (MT = TT.callFormat) && void 0 !== MT ? MT : "simple", zT);
+       return "" === kT.answer ? null : {
+         model: TT.name,
+         answer: kT.answer,
+         reasoning: mT,
+ ... (2 more added lines; see GitHub link above)
```

#### 328. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6825-L6826` → after: `L6825-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6825-L6826) · [Before (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6825-L6826)

```diff
-     function ZI(pp) {
-       return pp.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function SM(TT) {
+       return TT.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 329. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6829-L6830` → after: `L6829-L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6829-L6830) · [Before (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6829-L6830)

```diff
-     function zI(pp) {
-       return gI(pp) && !pp.isCutShort
+     function GM(TT) {
+       return CM(TT) && !TT.isCutShort
```

#### 330. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6832-L6835` → after: `L6832-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6832-L6835) · [Before (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6832-L6835)

```diff
-     async function sI(pp, ip, cp, Op, op) {
-       const Ip = pp.map((() => new AbortController)),
-         Sp = () => {
-           for (const pp of Ip) pp.abort()
+     async function NM(TT, UT, mT, WT, zT) {
+       const MT = TT.map((() => new AbortController)),
+         gT = () => {
+           for (const TT of MT) TT.abort()
```

#### 331. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6837` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6837) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6837)

```diff
-       null !== cp && void 0 !== cp && cp.aborted && Sp(), null === cp || void 0 === cp || cp.addEventListener("abort", Sp, {
+       null !== mT && void 0 !== mT && mT.aborted && gT(), null === mT || void 0 === mT || mT.addEventListener("abort", gT, {
```

#### 332. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6840-L6854` → after: `L6840-L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6840-L6854) · [Before (L6840-L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6840-L6854)

```diff
-       const xp = pp.map((() => {})),
-         Lp = pp.map((() => {}));
-       let Yp = null;
-       const Dp = pp => void 0 !== pp && ("" !== ZI(pp.answer).trim() || !0 === pp.isCalling);
-       let Ap = () => {};
-       pp.forEach(((pp, cp) => {
-         const Sp = (0, tp.b)(BI, Ip[cp].signal);
-         GI(pp, lI(ip, pp), Sp.signal, (pp => {
-           Lp[cp] = pp, null === Yp && Dp(pp) && (Yp = cp), Yp === cp && (null === Op || void 0 === Op || Op(pp))
-         }), op).catch((ip => {
-           if (Ip[cp].signal.aborted) return "failed";
-           const Op = Sp.signal.aborted;
-           return console.warn(`World Code AI: ${pp.name} ${Op?"took longer than 240 s":"couldn't be reached"}`, ip), jI.Yy(pp.name, Op ? "timeout" : "network"), Op ? "timeout" : "failed"
-         })).then((pp => {
-           Sp.clear(), xp[cp] = pp, Yp !== cp || zI(pp) || (Yp = null), Ap()
+       const nT = TT.map((() => {})),
+         HT = TT.map((() => {}));
+       let kT = null;
+       const jT = TT => void 0 !== TT && ("" !== SM(TT.answer).trim() || !0 === TT.isCalling);
+       let lT = () => {};
+       TT.forEach(((TT, mT) => {
+         const gT = (0, fT.c)(yM, MT[mT].signal);
+         rM(TT, wM(UT, TT), gT.signal, (TT => {
+           HT[mT] = TT, null === kT && jT(TT) && (kT = mT), kT === mT && (null === WT || void 0 === WT || WT(TT))
+         }), zT).catch((UT => {
+           if (MT[mT].signal.aborted) return "failed";
+           const WT = gT.signal.aborted;
+           return console.warn(`World Code AI: ${TT.name} ${WT?"took longer than 240 s":"couldn't be reached"}`, UT), qM.Gp(TT.name, WT ? "timeout" : "network"), WT ? "timeout" : "failed"
+         })).then((TT => {
+           gT.clear(), nT[mT] = TT, kT !== mT || GM(TT) || (kT = null), lT()
```

#### 333. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6857-L6862` → after: `L6857-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6857-L6862) · [Before (L6857-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6857-L6862)

```diff
-       const Pp = () => {
-         var pp;
-         if (null !== Yp) {
-           const pp = xp[Yp];
-           return zI(pp) ? {
-             reply: pp
+       const LT = () => {
+         var TT;
+         if (null !== kT) {
+           const TT = nT[kT];
+           return GM(TT) ? {
+             reply: TT
```

#### 334. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6865-L6867` → after: `L6865-L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6865-L6867) · [Before (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6865-L6867)

```diff
-         const ip = xp.find(zI);
-         if (ip) return {
-           reply: ip
+         const UT = nT.find(GM);
+         if (UT) return {
+           reply: UT
```

#### 335. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6869-L6870` → after: `L6869-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6869-L6870) · [Before (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6869-L6870)

```diff
-         if (!xp.includes(void 0)) return {
-           reply: null !== (pp = xp.find(gI)) && void 0 !== pp ? pp : null
+         if (!nT.includes(void 0)) return {
+           reply: null !== (TT = nT.find(CM)) && void 0 !== TT ? TT : null
```

#### 336. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6873-L6877` → after: `L6873-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6873-L6877) · [Before (L6873-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6873-L6877)

```diff
-           const pp = xp.findIndex(((pp, ip) => void 0 === pp && Dp(Lp[ip])));
-           if (-1 !== pp) {
-             Yp = pp;
-             const ip = Lp[pp];
-             ip && (null === Op || void 0 === Op || Op(ip))
+           const TT = nT.findIndex(((TT, UT) => void 0 === TT && jT(HT[UT])));
+           if (-1 !== TT) {
+             kT = TT;
+             const UT = HT[TT];
+             UT && (null === WT || void 0 === WT || WT(UT))
```

#### 337. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6883-L6886` → after: `L6883-L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6883-L6886) · [Before (L6883-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6883-L6886)

```diff
-           if (null !== cp && void 0 !== cp && cp.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const pp = Pp();
-           if (pp) {
-             const ip = xp.filter((pp => "string" === typeof pp));
+           if (null !== mT && void 0 !== mT && mT.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const TT = LT();
+           if (TT) {
+             const UT = nT.filter((TT => "string" === typeof TT));
```

#### 338. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6888-L6889` → after: `L6888-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6888-L6889) · [Before (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6888-L6889)

```diff
-               reply: pp.reply,
-               failures: ip
+               reply: TT.reply,
+               failures: UT
```

#### 339. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6892-L6893` → after: `L6892-L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6892-L6893) · [Before (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6892-L6893)

```diff
-           await new Promise((pp => {
-             Ap = pp
+           await new Promise((TT => {
+             lT = TT
```

#### 340. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6897` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6897) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6897)

```diff
-         null === cp || void 0 === cp || cp.removeEventListener("abort", Sp), Sp()
+         null === mT || void 0 === mT || mT.removeEventListener("abort", gT), gT()
```

#### 341. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6901-L6916` → after: `L6901-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6901-L6916) · [Before (L6901-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6901-L6916)

```diff
-     function KI() {
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const ip = wI.firstFreeAt(qI.map((pp => pp.name)), pp);
-       return vI(ip - pp) ? pp : ip
-     }
-     async function VI(pp) {
-       var ip;
-       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const Op = Date.now(),
-         op = null !== (ip = cp.models) && void 0 !== ip ? ip : qI,
-         Ip = void 0 === cp.models ? function(pp, ip) {
-           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const Op = pp.map((pp => ({
-               model: pp,
-               key: cp()
-             }))).sort(((pp, ip) => pp.key - ip.key)).map((pp => {
+     function EM() {
+       let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const UT = LM.firstFreeAt(eM.map((TT => TT.name)), TT);
+       return pM(UT - TT) ? TT : UT
+     }
+     async function hM(TT) {
+       var UT;
+       let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const WT = Date.now(),
+         zT = null !== (UT = mT.models) && void 0 !== UT ? UT : eM,
+         MT = void 0 === mT.models ? function(TT, UT) {
+           let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const WT = TT.map((TT => ({
+               model: TT,
+               key: mT()
+             }))).sort(((TT, UT) => TT.key - UT.key)).map((TT => {
```

#### 342. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6918-L6920` → after: `L6918-L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6918-L6920) · [Before (L6918-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6918-L6920)

```diff
-                 model: ip
-               } = pp;
-               return ip
+                 model: UT
+               } = TT;
+               return UT
```

#### 343. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6922-L6933` → after: `L6922-L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6922-L6933) · [Before (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6922-L6933)

```diff
-             op = [...Op.filter((pp => ip(pp))), ...Op.filter((pp => !ip(pp)))],
-             Ip = [];
-           for (let Sp = 0; Sp < op.length; Sp += 2) Ip.push(op.slice(Sp, Sp + 2));
-           return Ip
-         }(op, (pp => wI.freeAt(pp.name) <= Op)) : op.map((pp => [pp])),
-         Sp = [];
-       for (const Lp of Ip) {
-         const ip = await sI(Lp, pp, cp.signal, cp.onProgress, cp.tools);
-         if (null !== ip.reply) {
-           const op = Lp.find((pp => {
-             var cp;
-             return pp.name === (null === (cp = ip.reply) || void 0 === cp ? void 0 : cp.model)
+             zT = [...WT.filter((TT => UT(TT))), ...WT.filter((TT => !UT(TT)))],
+             MT = [];
+           for (let gT = 0; gT < zT.length; gT += 2) MT.push(zT.slice(gT, gT + 2));
+           return MT
+         }(zT, (TT => LM.freeAt(TT.name) <= WT)) : zT.map((TT => [TT])),
+         gT = [];
+       for (const HT of MT) {
+         const UT = await NM(HT, TT, mT.signal, mT.onProgress, mT.tools);
+         if (null !== UT.reply) {
+           const zT = HT.find((TT => {
+             var mT;
+             return TT.name === (null === (mT = UT.reply) || void 0 === mT ? void 0 : mT.model)
```

#### 344. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6936-L6937` → after: `L6936-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6936-L6937) · [Before (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6936-L6937)

```diff
-             ...op && !1 !== cp.canNudge ? await cS(op, lI(pp, op), ip.reply, cp.signal, cp.onProgress, cp.tools) : ip.reply,
-             ms: Date.now() - Op
+             ...zT && !1 !== mT.canNudge ? await AM(zT, wM(TT, zT), UT.reply, mT.signal, mT.onProgress, mT.tools) : UT.reply,
+             ms: Date.now() - WT
```

#### 345. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6940)

```diff
-         Sp.push(...ip.failures)
+         gT.push(...UT.failures)
```

#### 346. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6942-L6943` → after: `L6942-L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6942-L6943) · [Before (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6942-L6943)

```diff
-       const xp = NI.find((pp => Sp.includes(pp)));
-       throw new TI(null !== xp && void 0 !== xp ? xp : "failed")
+       const nT = XM.find((TT => gT.includes(TT)));
+       throw new IM(null !== nT && void 0 !== nT ? nT : "failed")
```

#### 347. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6945)

```diff
-     const pS = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const DM = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 348. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6947-L6949` → after: `L6947-L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6947-L6949) · [Before (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6947-L6949)

```diff
-     function iS(pp) {
-       const ip = pp.trim();
-       return ip.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(ip) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(ip) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function oM(TT) {
+       const UT = TT.trim();
+       return UT.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(UT) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(UT) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6956` → after: `L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6956) · [Before (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6956)

```diff
-         }(cp, null !== (Sp = pp.callFormat) && void 0 !== Sp ? Sp : "simple")) return cp;
+         }(mT, null !== (gT = TT.callFormat) && void 0 !== gT ? gT : "simple")) return mT;
```

#### 350. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6964` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6964) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6964)

```diff
-         Yp = (0, tp.b)(xp, Op);
+         kT = (0, fT.c)(nT, WT);
```

#### 351. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6967)

```diff
-         return gI(ip) && "" !== ip.answer.trim() ? ip : cp
+         return CM(UT) && "" !== UT.answer.trim() ? UT : mT
```

#### 352. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L6970)

```diff
-         return jI.Yy(pp.name, Yp.signal.aborted ? "timeout" : "network"), cp
+         return qM.Gp(TT.name, kT.signal.aborted ? "timeout" : "network"), mT
```

#### 353. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7005` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7005) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7005)

```diff
-       const Op = (0, tp.b)(2e4, cp);
+       const WT = (0, fT.c)(2e4, mT);
```

#### 354. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7023-L7024` → after: `L7023-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7023-L7024) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7023-L7024)

```diff
-         if (dI(pp, cp), 429 === cp.status) return jI.Yy(pp, cp), "busy";
-         if (!cp.ok) return jI.Yy(pp, cp), null;
+         if (cM(TT, mT), 429 === mT.status) return qM.Gp(TT, mT), "busy";
+         if (!mT.ok) return qM.Gp(TT, mT), null;
```

#### 355. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7026)

```diff
-           Yp = String(null !== (op = null === (Ip = Lp.choices) || void 0 === Ip || null === (Sp = Ip[0]) || void 0 === Sp || null === (xp = Sp.message) || void 0 === xp ? void 0 : xp.content) && void 0 !== op ? op : "");
+           kT = String(null !== (zT = null === (MT = HT.choices) || void 0 === MT || null === (gT = MT[0]) || void 0 === gT || null === (nT = gT.message) || void 0 === nT ? void 0 : nT.content) && void 0 !== zT ? zT : "");
```

#### 356. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7030)

```diff
-           }(Yp) ? Yp : null
+           }(kT) ? kT : null
```

#### 357. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7033)

```diff
-         return jI.Yy(pp, Op.signal.aborted ? "timeout" : "network"), null
+         return qM.Gp(TT, WT.signal.aborted ? "timeout" : "network"), null
```

#### 358. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7042-L7043` → after: `L7042-L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7042-L7043) · [Before (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7042-L7043)

```diff
-       const pp = LS.h.getItem(YS);
-       return null !== pp && "object" === typeof pp ? pp : {}
+       const TT = zg.l.getItem(Mg);
+       return null !== TT && "object" === typeof TT ? TT : {}
```

#### 359. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7053` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7053) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7053)

```diff
-         return null === this.player ? null : null !== (pp = null !== (ip = this.unsaved.get(this.player)) && void 0 !== ip ? ip : DS()[this.player]) && void 0 !== pp ? pp : null
+         return null === this.player ? null : null !== (TT = null !== (UT = this.unsaved.get(this.player)) && void 0 !== UT ? UT : gg()[this.player]) && void 0 !== TT ? TT : null
```

#### 360. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7064-L7065` → after: `L7064-L7065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7064-L7065) · [Before (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7064-L7065)

```diff
-           } = await Promise.resolve().then((() => cp(1149)));
-           return null !== (pp = null === (ip = Op.peekCurrentUserContext()) || void 0 === ip ? void 0 : ip.whamm) && void 0 !== pp ? pp : null
+           } = await Promise.resolve().then((() => mT(1231)));
+           return null !== (TT = null === (UT = WT.peekCurrentUserContext()) || void 0 === UT ? void 0 : UT.whamm) && void 0 !== TT ? TT : null
```

#### 361. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7070` → after: `L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7070) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7070)

```diff
-         null !== this.player && (LS.h.setItem(YS, {
+         null !== this.player && (zg.l.setItem(Mg, {
```

#### 362. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7093` → after: `L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7093) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7093)

```diff
-       const cp = `\n[... ${pp.length-ip} more characters cut]`;
+       const mT = `\n[... ${TT.length-UT} more characters cut]`;
```

#### 363. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7098-L7099` → after: `L7098-L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7098-L7099) · [Before (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7098-L7099)

```diff
-     var HS = cp(643),
-       dS = cp(4478);
+     var Zg = mT(662),
+       cg = mT(4489);
```

#### 364. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7121)

```diff
-         clientVersion: String(HS.c),
+         clientVersion: String(Zg.d),
```

#### 365. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7136` → after: `L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7136) · [Before (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7136)

```diff
-         this.Yy = pp, this.chatId = (0, dS.b)(12), this.open = new Map
+         this.Gp = TT, this.chatId = (0, cg.b)(12), this.open = new Map
```

#### 366. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7140` → after: `L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7140) · [Before (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7140)

```diff
-         cp && (clearTimeout(cp.timer), ip || (this.open.delete(pp), this.send(cp.Yy)))
+         mT && (clearTimeout(mT.timer), UT || (this.open.delete(TT), this.send(mT.Gp)))
```

#### 367. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7145` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7145) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7145)

```diff
-         if (Op) return void(Op.Yy.responses.length < wS && Op.Yy.responses.push(jS(cp)));
+         if (WT) return void(WT.Gp.responses.length < Lg && WT.Gp.responses.push(qg(mT)));
```

#### 368. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7148` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7148) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7148)

```diff
-           Yy: op
+           Gp: zT
```

#### 369. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7158` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7158) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7158)

```diff
-           this.open.delete(pp), this.send(ip.Yy)
+           this.open.delete(TT), this.send(UT.Gp)
```

#### 370. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7164` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7164) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7164)

```diff
-         })(pp) && this.Yy(pp)
+         })(TT) && this.Gp(TT)
```

#### 371. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7179` → after: `L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7179) · [Before (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7179)

```diff
-             Yy: ip
+             Gp: UT
```

#### 372. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7190` → after: `L7190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7190) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7190)

```diff
-       "yes" === pp && cp.length > 0 && ES(cp.map((pp => pp.Yy)))
+       "yes" === TT && mT.length > 0 && xg(mT.map((TT => TT.Gp)))
```

#### 373. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7193` → after: `L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7193) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7193)

```diff
-       const ip = Promise.resolve().then((() => cp(41726)));
+       const UT = Promise.resolve().then((() => mT(41614)));
```

#### 374. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7203-L7204` → after: `L7203-L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7203-L7204) · [Before (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7203-L7204)

```diff
-     var XS = cp(337),
-       lS = cp(156);
+     var dg = mT(366),
+       wg = mT(166);
```

#### 375. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7261` → after: `L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7261) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7261)

```diff
-       return "https:" !== ip.protocol && ("http:" !== ip.protocol || !cp) || ip.username || ip.password || ip.search ? null : `${ip.origin}${ip.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== UT.protocol && ("http:" !== UT.protocol || !mT) || UT.username || UT.password || UT.search ? null : `${UT.origin}${UT.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 376. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7270)

```diff
-         super(`AI key request: ${pp}`), this.problem = pp, this.retryAfterMs = ip, this.status = cp, this.detail = Op
+         super(`AI key request: ${TT}`), this.problem = TT, this.retryAfterMs = UT, this.status = mT, this.detail = WT
```

#### 377. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7275)

```diff
-       return ("" === ip ? pp : pp.split(ip).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === UT ? TT : TT.split(UT).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 378. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7282)

```diff
-           return `${cp} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${mT} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 379. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7286` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7286) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7286)

```diff
-           return `${cp} can't find that model. Check its name.`;
+           return `${mT} can't find that model. Check its name.`;
```

#### 380. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7288` → after: `L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7288) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7288)

```diff
-           return "anthropic" === ip ? "Claude didn't accept your key: check it, or make a new one." : "custom" === ip ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === UT ? "Claude didn't accept your key: check it, or make a new one." : "custom" === UT ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 381. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7290` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7290) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7290)

```diff
-           return "custom" === ip ? "That server stopped your key for now: it has used all it can." : `${cp} stopped your key for now: it has used all it can. Check it on ${cp}'s website.`;
+           return "custom" === UT ? "That server stopped your key for now: it has used all it can." : `${mT} stopped your key for now: it has used all it can. Check it on ${mT}'s website.`;
```

#### 382. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7292` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7292) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7292)

```diff
-           return `${cp} doesn't work from where you are.`;
+           return `${mT} doesn't work from where you are.`;
```

#### 383. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7296)

```diff
-           return `${cp} had a problem with that. Try again in a minute.`
+           return `${mT} had a problem with that. Try again in a minute.`
```

#### 384. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7322` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7322) · [Before (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7322)

```diff
-         }(ip)) throw new Error(`AI key request to an unknown host for ${pp}`);
+         }(UT)) throw new Error(`AI key request to an unknown host for ${TT}`);
```

#### 385. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7331)

```diff
-         throw console.warn(`AI key request: ${pp} answered ${op.status}`), new hS(function(pp, ip, cp) {
+         throw console.warn(`AI key request: ${TT} answered ${zT.status}`), new Fg(function(TT, UT, mT) {
```

#### 386. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7338)

```diff
-           return Number.isFinite(cp) ? 1e3 * cp : Math.max(0, Date.parse(ip) - Date.now()) || void 0
+           return Number.isFinite(mT) ? 1e3 * mT : Math.max(0, Date.parse(UT) - Date.now()) || void 0
```

#### 387. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7345` → after: `L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7345) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7345)

```diff
-             cp = "string" === typeof op ? op : pp
+             mT = "string" === typeof zT ? zT : TT
```

#### 388. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7359` → after: `L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7359) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7359)

```diff
-       const Op = (0, tp.b)(pp, ip);
+       const WT = (0, fT.c)(TT, UT);
```

#### 389. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7394)

```diff
-         hOp: Sp,
+         bWT: gT,
```

#### 390. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7402` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7402) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7402)

```diff
-         const Sp = null !== (cp = null === (Op = pp.match(/```/g)) || void 0 === Op ? void 0 : Op.length) && void 0 !== cp ? cp : 0,
+         const gT = null !== (mT = null === (WT = TT.match(/```/g)) || void 0 === WT ? void 0 : WT.length) && void 0 !== mT ? mT : 0,
```

#### 391. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7415)

```diff
-         written: xp ? Ap : void 0,
+         written: nT ? lT : void 0,
```

#### 392. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7427` → after: `L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7427) · [Before (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7427)

```diff
-       const Op = null !== (cp = ip.tools) && void 0 !== cp ? cp : [];
+       const WT = null !== (mT = UT.tools) && void 0 !== mT ? mT : [];
```

#### 393. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7478` → after: `L7478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7478) · [Before (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7478)

```diff
-             models: (null !== (ip = (await cp.json()).data) && void 0 !== ip ? ip : []).map((pp => ({
+             models: (null !== (UT = (await mT.json()).data) && void 0 !== UT ? UT : []).map((TT => ({
```

#### 394. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7505` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7505) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7505)

```diff
-           return await nI(null !== (op = Ip.body) && void 0 !== op ? op : new ReadableStream, (ip => {
+           return await VM(null !== (zT = MT.body) && void 0 !== zT ? zT : new ReadableStream, (UT => {
```

#### 395. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7510-L7511)

```diff
-             xp += null !== (op = null !== (Ip = null === vp || void 0 === vp || null === (Ap = vp.delta) || void 0 === Ap ? void 0 : Ap.reasoning) && void 0 !== Ip ? Ip : null === vp || void 0 === vp || null === (Pp = vp.delta) || void 0 === Pp ? void 0 : Pp.reasoning_content) && … [truncated]
-             for (const pp of null !== (tp = null === vp || void 0 === vp || null === (Hp = vp.delta) || void 0 === Hp ? void 0 : Hp.tool_calls) && void 0 !== tp ? tp : []) {
+             nT += null !== (zT = null !== (MT = null === vT || void 0 === vT || null === (lT = vT.delta) || void 0 === lT ? void 0 : lT.reasoning) && void 0 !== MT ? MT : null === vT || void 0 === vT || null === (LT = vT.delta) || void 0 === LT ? void 0 : LT.reasoning_content) && … [truncated]
+             for (const TT of null !== (fT = null === vT || void 0 === vT || null === (qT = vT.delta) || void 0 === qT ? void 0 : qT.tool_calls) && void 0 !== fT ? fT : []) {
```

#### 396. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7524` → after: `L7524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7524) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7524)

```diff
-             hOp: Lp,
+             bWT: HT,
```

#### 397. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7544)

```diff
-         return await zS(gS, pp, (async pp => ZS("openrouter", `${QS.openrouter.baseUrl}/key`, {
+         return await Gg(Cg, TT, (async TT => Sg("openrouter", `${tg.openrouter.baseUrl}/key`, {
```

#### 398. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7565` → after: `L7565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7565) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7565)

```diff
-             models: (null !== (ip = (await cp.json()).data) && void 0 !== ip ? ip : []).map((pp => ({
+             models: (null !== (UT = (await mT.json()).data) && void 0 !== UT ? UT : []).map((TT => ({
```

#### 399. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7598` → after: `L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7598) · [Before (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7598)

```diff
-           await nI(null !== (Ip = Sp.body) && void 0 !== Ip ? Ip : new ReadableStream, (ip => {
+           await VM(null !== (MT = gT.body) && void 0 !== MT ? MT : new ReadableStream, (UT => {
```

#### 400. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7603-L7604` → after: `L7603-L7604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7603-L7604) · [Before (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7603-L7604)

```diff
-             if ("content_block_start" === Ip.type && "tool_use" === (null === (Op = Ip.content_block) || void 0 === Op ? void 0 : Op.type)) Ap.set(null !== (Wp = Ip.index) && void 0 !== Wp ? Wp : Ap.size, {
-               name: null !== (yp = Ip.content_block.name) && void 0 !== yp ? yp : "",
+             if ("content_block_start" === MT.type && "tool_use" === (null === (WT = MT.content_block) || void 0 === WT ? void 0 : WT.type)) lT.set(null !== (pT = MT.index) && void 0 !== pT ? pT : lT.size, {
+               name: null !== (BT = MT.content_block.name) && void 0 !== BT ? BT : "",
```

#### 401. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7609-L7610` → after: `L7609-L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7609-L7610) · [Before (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7609-L7610)

```diff
-               xp += null !== (Up = null === (wp = Ip.delta) || void 0 === wp ? void 0 : wp.text) && void 0 !== Up ? Up : "", Lp += null !== (vp = null === (tp = Ip.delta) || void 0 === tp ? void 0 : tp.thinking) && void 0 !== vp ? vp : "";
-               const pp = Ap.get(null !== (Hp = Ip.index) && void 0 !== Hp ? Hp : -1);
+               nT += null !== (ZT = null === (cT = MT.delta) || void 0 === cT ? void 0 : cT.text) && void 0 !== ZT ? ZT : "", HT += null !== (vT = null === (fT = MT.delta) || void 0 === fT ? void 0 : fT.thinking) && void 0 !== vT ? vT : "";
+               const TT = lT.get(null !== (qT = MT.index) && void 0 !== qT ? qT : -1);
```

#### 402. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7612` → after: `L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7612) · [Before (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7612)

```diff
-               if (pp && "input_json_delta" === (null === (dp = Ip.delta) || void 0 === dp ? void 0 : dp.type)) pp.args += null !== (ep = Ip.delta.partial_json) && void 0 !== ep ? ep : ""
+               if (TT && "input_json_delta" === (null === (iT = MT.delta) || void 0 === iT ? void 0 : iT.type)) TT.args += null !== (bT = MT.delta.partial_json) && void 0 !== bT ? bT : ""
```

#### 403. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7628)

```diff
-             hOp: Yp,
+             bWT: kT,
```

#### 404. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7654` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7654) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7654)

```diff
-             models: (null !== (ip = (await cp.json()).models) && void 0 !== ip ? ip : []).filter((pp => {
+             models: (null !== (UT = (await mT.json()).models) && void 0 !== UT ? UT : []).filter((TT => {
```

#### 405. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7677` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7677) · [Before (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7677)

```diff
-           const Sp = await ZS("gemini", `${this.baseUrl}/models/${encodeURIComponent(pp)}:streamGenerateContent?alt=sse`, {
+           const gT = await Sg("gemini", `${this.baseUrl}/models/${encodeURIComponent(TT)}:streamGenerateContent?alt=sse`, {
```

#### 406. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7696)

```diff
-           return await nI(null !== (Ip = Sp.body) && void 0 !== Ip ? Ip : new ReadableStream, (ip => {
+           return await VM(null !== (MT = gT.body) && void 0 !== MT ? MT : new ReadableStream, (UT => {
```

#### 407. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7700)

```diff
-             for (const pp of null !== (Wp = null === Pp || void 0 === Pp || null === (yp = Pp.content) || void 0 === yp ? void 0 : yp.parts) && void 0 !== Wp ? Wp : []) {
+             for (const TT of null !== (pT = null === LT || void 0 === LT || null === (BT = LT.content) || void 0 === BT ? void 0 : BT.parts) && void 0 !== pT ? pT : []) {
```

#### 408. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7703-L7704` → after: `L7703-L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7703-L7704) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7703-L7704)

```diff
-                 name: null !== (Up = pp.functionCall.name) && void 0 !== Up ? Up : "",
-                 args: JSON.stringify(null !== (wp = pp.functionCall.args) && void 0 !== wp ? wp : {})
+                 name: null !== (ZT = TT.functionCall.name) && void 0 !== ZT ? ZT : "",
+                 args: JSON.stringify(null !== (cT = TT.functionCall.args) && void 0 !== cT ? cT : {})
```

#### 409. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7708` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7708) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7708)

```diff
-                 Lp += null !== (vp = pp.text) && void 0 !== vp ? vp : ""
+                 HT += null !== (vT = TT.text) && void 0 !== vT ? vT : ""
```

#### 410. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7711` → after: `L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7711) · [Before (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7711)

```diff
-                 xp += null !== (tp = pp.text) && void 0 !== tp ? tp : ""
+                 nT += null !== (fT = TT.text) && void 0 !== fT ? fT : ""
```

#### 411. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7723` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7723) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7723)

```diff
-             hOp: Yp,
+             bWT: kT,
```

#### 412. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7748` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7748) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7748)

```diff
-           return new ix("custom", null !== cp && void 0 !== cp ? cp : "", ip)
+           return new og("custom", null !== mT && void 0 !== mT ? mT : "", UT)
```

#### 413. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7876)

```diff
-         name: null !== (Op = null === op || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : ip,
+         name: null !== (WT = null === zT || void 0 === zT ? void 0 : zT.name) && void 0 !== WT ? WT : UT,
```

#### 414. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7900` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7900) · [Before (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7900)

```diff
-       return null !== (ip = pp.find((pp => "smart" === pp.tier))) && void 0 !== ip ? ip : pp[0]
+       return null !== (UT = TT.find((TT => "smart" === TT.tier))) && void 0 !== UT ? UT : TT[0]
```

#### 415. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7906` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7906) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7906)

```diff
-       return null !== (ip = pp.name) && void 0 !== ip ? ip : bS(pp.provider, pp.baseUrl, cp)
+       return null !== (UT = TT.name) && void 0 !== UT ? UT : sg(TT.provider, TT.baseUrl, mT)
```

#### 416. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7923` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7923) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7923)

```diff
-         return new URL(null !== (ip = pp.baseUrl) && void 0 !== ip ? ip : "").protocol.startsWith("http")
+         return new URL(null !== (UT = TT.baseUrl) && void 0 !== UT ? UT : "").protocol.startsWith("http")
```

#### 417. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7933` → after: `L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7933) · [Before (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7933)

```diff
-         return console.warn(`AI Helper: no ${pp}`, ip), null
+         return console.warn(`AI Helper: no ${TT}`, UT), null
```

#### 418. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7945` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7945)

```diff
-         this.state = null !== Op && void 0 !== Op && Op.remember ? null !== op && void 0 !== op && op.remember ? op : {
+         this.state = null !== WT && void 0 !== WT && WT.remember ? null !== zT && void 0 !== zT && zT.remember ? zT : {
```

#### 419. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7948)

```diff
-         } : null !== (cp = null !== Op && void 0 !== Op ? Op : op) && void 0 !== cp ? cp : Ux, this.ownsRemembered = this.state.remember && null !== op
+         } : null !== (mT = null !== WT && void 0 !== WT ? WT : zT) && void 0 !== mT ? mT : Ln, this.ownsRemembered = this.state.remember && null !== zT
```

#### 420. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7965-L7966` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7965-L7966) · [Before (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7965-L7966)

```diff
-           xp = "custom" !== pp.provider ? pp.provider : null !== (Op = null === Sp || void 0 === Sp ? void 0 : Sp.id) && void 0 !== Op ? Op : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           Lp = void 0 === ip ? Px(pp.models) : null !== (op = pp.models.find((pp => pp.id === ip))) && void 0 !== op ? op : pp.models[0],
+           nT = "custom" !== TT.provider ? TT.provider : null !== (WT = null === gT || void 0 === gT ? void 0 : gT.id) && void 0 !== WT ? WT : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           HT = void 0 === UT ? Hn(TT.models) : null !== (zT = TT.models.find((TT => TT.id === UT))) && void 0 !== zT ? zT : TT.models[0],
```

#### 421. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7981` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L7981) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L7981)

```diff
-           Wp = Pp ? this.state.keys.filter((pp => pp.id !== xp)).map((pp => pp.id === cp ? Dp : pp)) : Ap ? [...this.state.keys, Dp] : this.state.keys.map((pp => pp.id === xp ? Dp : pp)),
+           pT = LT ? this.state.keys.filter((TT => TT.id !== nT)).map((TT => TT.id === mT ? jT : TT)) : lT ? [...this.state.keys, jT] : this.state.keys.map((TT => TT.id === nT ? jT : TT)),
```

#### 422. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8000` → after: `L8000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8000) · [Before (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8000)

```diff
-             return "" === cp ? op : {
+             return "" === mT ? zT : {
```

#### 423. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8095` → after: `L8095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8095) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8095)

```diff
-           Op = (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.keys) && void 0 !== ip ? ip : []).filter((pp => this.state.keys.every((ip => !wx(ip, pp)))));
+           WT = (null !== (UT = null === mT || void 0 === mT ? void 0 : mT.keys) && void 0 !== UT ? UT : []).filter((TT => this.state.keys.every((UT => !pn(UT, TT)))));
```

#### 424. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8139` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8139) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8139)

```diff
-           return Array.isArray(ip.keys) && ip.keys.every(vx) ? ip : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(UT.keys) && UT.keys.every(Bn) ? UT : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 425. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8181` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8181) · [Before (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8181)

```diff
-       const xp = null !== (cp = null === Sp || void 0 === Sp ? void 0 : Sp.trim()) && void 0 !== cp ? cp : "";
+       const nT = null !== (mT = null === gT || void 0 === gT ? void 0 : gT.trim()) && void 0 !== mT ? mT : "";
```

#### 426. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8211` → after: `L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8211) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8211)

```diff
-               return 0 !== (null !== (cp = null === (Op = ip.tools) || void 0 === Op ? void 0 : Op.length) && void 0 !== cp ? cp : 0) && pp instanceof hS && "failed" === pp.problem && (400 === pp.status || 404 === pp.status && /\btool/i.test(null !== (op = pp.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (mT = null === (WT = UT.tools) || void 0 === WT ? void 0 : WT.length) && void 0 !== mT ? mT : 0) && TT instanceof Fg && "failed" === TT.problem && (400 === TT.status || 404 === TT.status && /\btool/i.test(null !== (zT = TT.detail) && void 0 != … [truncated]
```

#### 427. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8226` → after: `L8226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8226) · [Before (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8226)

```diff
-         return await (Lp = Math.min(null !== (Sp = null !== (xp = Ap.retryAfterMs) && void 0 !== xp ? xp : cp.retryWaitMs) && void 0 !== Sp ? Sp : 3e3, 2e4), Yp = cp.signal, new Promise(((pp, ip) => {
+         return await (HT = Math.min(null !== (gT = null !== (nT = lT.retryAfterMs) && void 0 !== nT ? nT : mT.retryWaitMs) && void 0 !== gT ? gT : 3e3, 2e4), kT = mT.signal, new Promise(((TT, UT) => {
```

#### 428. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8238` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8238) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8238)

```diff
-     var jx = cp(3740);
+     var bn = mT(3748);
```

#### 429. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8355)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${hx((null!==(ip=pp.availableFrom)&&void 0!==ip?ip:cp)-cp)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${Vn((null!==(UT=TT.availableFrom)&&void 0!==UT?UT:mT)-mT)} to go.`;
```

#### 430. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8357` → after: `L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8357) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8357)

```diff
-           return pp.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(pp,ip){const cp=Math.ceil((pp-ip)/36e5);if(cp<=24)return cp<=1?"within the hour":`in ${cp} hours`;return`in ${hx(pp-ip)}`}(pp.resetsAt,cp)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return TT.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(TT,UT){const mT=Math.ceil((TT-UT)/36e5);if(mT<=24)return mT<=1?"within the hour":`in ${mT} hours`;return`in ${Vn(TT-UT)}`}(TT.resetsAt,mT)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8388` → after: `L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8388) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8388)

```diff
-       return `Usage left: ${pp.left}`
+       return `Usage left: ${TT.left}`
```

#### 432. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8392-L8393` → after: `L8392-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8392-L8393) · [Before (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8392-L8393)

```diff
-       const ip = Math.max(1, Math.ceil(pp / XS.i));
-       return 1 === ip ? "1 day" : `${ip} days`
+       const UT = Math.max(1, Math.ceil(TT / dg.k));
+       return 1 === UT ? "1 day" : `${UT} days`
```

#### 433. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8398` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8398) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8398)

```diff
-       if (cp) return `${cp} Bot.xd is answering instead.`;
+       if (mT) return `${mT} Bot.xd is answering instead.`;
```

#### 434. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8417` → after: `L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8417) · [Before (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8417)

```diff
-           return pp.messages.length > 12 || pp.messages.some((pp => pp.content.length > II)) || (null !== (ip = null === (cp = pp.toolsJson) || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0) > 1e5 || (null !== (Op = null === (op = pp.request) || void 0 === op ? vo … [truncated]
+           return TT.messages.length > 12 || TT.messages.some((TT => TT.content.length > UM)) || (null !== (UT = null === (mT = TT.toolsJson) || void 0 === mT ? void 0 : mT.length) && void 0 !== UT ? UT : 0) > 1e5 || (null !== (WT = null === (zT = TT.request) || void 0 === zT ? vo … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8424` → after: `L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8424) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8424)

```diff
-         if (ip instanceof lS.e && 413 === ip.httpCode) return {
+         if (UT instanceof wg.d && 413 === UT.httpCode) return {
```

#### 436. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8442` → after: `L8442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8442) · [Before (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8442)

```diff
-     var gx = cp(34),
+     var Kn = mT(31),
```

#### 437. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8444` → after: `L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8444) · [Before (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8444)

```diff
-       rx = cp(2314);
+       Gn = mT(2391);
```

#### 438. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8448` → after: `L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8448) · [Before (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8448)

```diff
-       Zx ??= Promise.resolve().then((() => cp(2320))), Zx.then((pp => {
+       Nn ??= Promise.resolve().then((() => mT(2395))), Nn.then((TT => {
```

#### 439. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8470` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8470) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8470)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => cp(1372))), cp.e(359).then((() => cp(61399)))]);
+         }] = await Promise.all([Promise.resolve().then((() => mT(1457))), mT.e(359).then((() => mT(61168)))]);
```

#### 440. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8477` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8477) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8477)

```diff
-                   gx.m.GA("OpenStoreFromCodeEditor"), (0, rx.r)({
+                   Kn.j.EZ("OpenStoreFromCodeEditor"), (0, Gn.p)({
```

#### 441. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8482-L8483` → after: `L8482-L8483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8482-L8483) · [Before (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8482-L8483)

```diff
-                   const pp = gx.m.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === Gx.c.get("openEverythingMenuName") && (gx.m.unsubscribe(pp), Ex.refresh())
+                   const TT = Kn.j.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === Sn.b.get("openEverythingMenuName") && (Kn.j.unsubscribe(TT), wn.refresh())
```

#### 442. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8666` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8666) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8666)

```diff
-       return pp.length > 4 && pp.endsWith("ies") ? `${pp.slice(0,-3)}y` : pp.length > 3 && pp.endsWith("s") && !pp.endsWith("ss") ? pp.slice(0, -1) : pp
+       return TT.length > 4 && TT.endsWith("ies") ? `${TT.slice(0,-3)}y` : TT.length > 3 && TT.endsWith("s") && !TT.endsWith("ss") ? TT.slice(0, -1) : TT
```

#### 443. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8682` → after: `L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8682) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8682)

```diff
-         op = YL(ip ? pp : (0, vi.r)(pp, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, vi.m, (() => "projectRequire"))),
+         zT = HH(UT ? TT : (0, ZU.s)(TT, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, ZU.n, (() => "projectRequire"))),
```

#### 444. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8685)

```diff
-         for (const op of (0, vi.f)(pp, /(global|window|document|process|require)\b\s*[.([]/g, vi.m)) Op.has(op[1]) || Ip.has(op[1]) || (Op.add(op[1]), cp.push(`Line ${ip+1} uses "${op[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const zT of (0, ZU.e)(TT, /(global|window|document|process|require)\b\s*[.([]/g, ZU.n)) WT.has(zT[1]) || MT.has(zT[1]) || (WT.add(zT[1]), mT.push(`Line ${UT+1} uses "${zT[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 445. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8700` → after: `L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8700) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8700)

```diff
-         const Wp = [null !== (Ip = ip[Op - 2]) && void 0 !== Ip ? Ip : "", null !== (Sp = ip[Op - 1]) && void 0 !== Sp ? Sp : "", pp.slice(0, Yp)].join(" ");
+         const pT = [null !== (MT = UT[WT - 2]) && void 0 !== MT ? MT : "", null !== (gT = UT[WT - 1]) && void 0 !== gT ? gT : "", TT.slice(0, kT)].join(" ");
```

#### 446. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8702-L8703` → after: `L8702-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8702-L8703) · [Before (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8702-L8703)

```diff
-         const yp = null !== (xp = null === (Lp = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Ap)) || void 0 === Lp ? void 0 : Lp[1]) && void 0 !== xp ? xp : "coins";
-         cp.push(`Line ${Op+1} sets the saved "${yp}" back to ${Pp} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${yp}") is null.`)
+         const BT = null !== (nT = null === (HT = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(lT)) || void 0 === HT ? void 0 : HT[1]) && void 0 !== nT ? nT : "coins";
+         mT.push(`Line ${WT+1} sets the saved "${BT}" back to ${LT} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${BT}") is null.`)
```

#### 447. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8709` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8709) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8709)

```diff
-       const Op = null !== (ip = null === (cp = pp.split("### Parameters:")[1]) || void 0 === cp ? void 0 : cp.split("###")[0]) && void 0 !== ip ? ip : "",
+       const WT = null !== (UT = null === (mT = TT.split("### Parameters:")[1]) || void 0 === mT ? void 0 : mT.split("###")[0]) && void 0 !== UT ? UT : "",
```

#### 448. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8757-L8759` → after: `L8757-L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8757-L8759) · [Before (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8757-L8759)

```diff
-         op = `\\((?:[^()]*[\\s,])?${Op}(?![\\w$])[^()]*\\)`,
-         Ip = new RegExp(`(?:const|let|var)\\s+${Op}(?![\\w$])|${Op}\\s*(?:\\+?=(?![=>])|=>)|${op}\\s*=>|function\\s*[\\w$]*\\s*${op}`, "g");
-       return 1 === (0, vi.f)(pp, Ip, vi.m).length ? null === (cp = new RegExp(`\\b(?:const|let|var)\\s+${Op}\\s*=\\s*${yL}\\s*(?:;|//|$)`, "m").exec(pp)) || void 0 === cp ? void 0 : cp[1] : void 0
+         zT = `\\((?:[^()]*[\\s,])?${WT}(?![\\w$])[^()]*\\)`,
+         MT = new RegExp(`(?:const|let|var)\\s+${WT}(?![\\w$])|${WT}\\s*(?:\\+?=(?![=>])|=>)|${zT}\\s*=>|function\\s*[\\w$]*\\s*${zT}`, "g");
+       return 1 === (0, ZU.e)(TT, MT, ZU.n).length ? null === (mT = new RegExp(`\\b(?:const|let|var)\\s+${WT}\\s*=\\s*${pH}\\s*(?:;|//|$)`, "m").exec(TT)) || void 0 === mT ? void 0 : mT[1] : void 0
```

#### 449. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8768-L8769` → after: `L8768-L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8768-L8769) · [Before (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8768-L8769)

```diff
-           Op = -1 === cp ? ip : ip.slice(0, cp + 1);
-         return Op.length > 110 ? `${Op.slice(0,107)}...` : Op
+           WT = -1 === mT ? UT : UT.slice(0, mT + 1);
+         return WT.length > 110 ? `${WT.slice(0,107)}...` : WT
```

#### 450. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8771` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8771) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8771)

```diff
-       return Op = "api" === pp ? `api.${ip}(${WL(cp).join(", ")})${op?` \u2014 ${op}`:""}` : "callback" === pp ? `${ip}(${WL(cp).join(", ")})${op?` \u2014 ${op}`:""}` : "clientOption" === pp ? `${ip}: ${function(pp){var ip,cp;return null!==(ip=null===(cp=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return WT = "api" === TT ? `api.${UT}(${LH(mT).join(", ")})${zT?` \u2014 ${zT}`:""}` : "callback" === TT ? `${UT}(${LH(mT).join(", ")})${zT?` \u2014 ${zT}`:""}` : "clientOption" === TT ? `${UT}: ${function(TT){var UT,mT;return null!==(UT=null===(mT=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8773` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8773) · [Before (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8773)

```diff
-         ip.map((pp => `"${pp}"`)).join(" or ")
+         UT.map((TT => `"${TT}"`)).join(" or ")
```

#### 452. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8775` → after: `L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8775) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8775)

```diff
-       The closest name is "${ip[0]}", which may be something
+       The closest name is "${UT[0]}", which may be something
```

#### 453. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8777)

```diff
-       `}function eL(pp){return pp.split("\n").slice(1).map((pp=>pp.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((pp=>""!==pp&&!pp.startsWith("#")))}class uL{constructor(pp){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function iH(TT){return TT.split("\n").slice(1).map((TT=>TT.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((TT=>""!==TT&&!TT.startsWith("#")))}class bH{constructor(TT){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8781)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();ip.push({name:cp,text:op})}return ip}(cp))ip.push(vL(pp,Op,op))};cp("api",pp.apiReference),cp("callback",pp.callbacks),cp("clientOption",pp.clientOptions),cp("snippet",pp.snippets),cp("howTo",pp.howTo);const Op=function(){const pp … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();UT.push({name:mT,text:zT})}return UT}(mT))UT.push(cH(TT,WT,zT))};mT("api",TT.apiReference),mT("callback",TT.callbacks),mT("clientOption",TT.clientOptions),mT("snippet",TT.snippets),mT("howTo",TT.howTo);const WT=function(){const TT … [truncated]
```

#### 455. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8792-L8793` → after: `L8792-L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8792-L8793) · [Before (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8792-L8793)

```diff
-       n\ nUsage: \`${pp.signature}\`\n\n\`\`\`js\n${pp.example}\n\`\`\``)),
-   ip = eO.map((pp => `## ${pp.name}\nPrefab (${pp.kind}, ${pp.category}): put in with use_prefab. ${NO(pp,!1)}`));
+       n\ nUsage: \`${TT.signature}\`\n\n\`\`\`js\n${TT.example}\n\`\`\``)),
+   UT = qW.map((TT => `## ${TT.name}\nPrefab (${TT.kind}, ${TT.category}): put in with use_prefab. ${QW(TT,!1)}`));
```

#### 456. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8795-L8796` → after: `L8795-L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8795-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8795-L8796) · [Before (L8795-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8795-L8796)

```diff
-     helpers: `# Ready-made functions\n\n${pp.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${ip.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${TT.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${UT.join("\n\n")}\n`
```

#### 457. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8804)

```diff
-     this.wordCounts.set(pp, (null !== (op = this.wordCounts.get(pp)) && void 0 !== op ? op : 0) + 1)
+     this.wordCounts.set(TT, (null !== (zT = this.wordCounts.get(TT)) && void 0 !== zT ? zT : 0) + 1)
```

#### 458. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8809` → after: `L8809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8809) · [Before (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8809)

```diff
-   const Op = null !== (ip = null === (cp = pp.split("## Mob Variations")[1]) || void 0 === cp ? void 0 : cp.split("```")[1]) && void 0 !== ip ? ip : "",
+   const WT = null !== (UT = null === (mT = TT.split("## Mob Variations")[1]) || void 0 === mT ? void 0 : mT.split("```")[1]) && void 0 !== UT ? UT : "",
```

#### 459. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8832` → after: `L8832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8832) · [Before (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8832)

```diff
-       return null !== (ip = pp[1]) && void 0 !== ip ? ip : pp[2]
+       return null !== (UT = TT[1]) && void 0 !== UT ? UT : TT[2]
```

#### 460. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8839)

```diff
-     for (const op of (0, vi.f)(pp, /([\w$]+)\s*\(/g, vi.m)) {
+     for (const zT of (0, ZU.e)(TT, /([\w$]+)\s*\(/g, ZU.n)) {
```

#### 461. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8843` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8843) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8843)

```diff
-       Ip.has(Sp) || Op.has(Sp) || xp || "api" !== (null === (cp = this.byName.get(Sp)) || void 0 === cp ? void 0 : cp.kind) || Ip.set(Sp, `Line ${ip+1} calls ${Sp} without "api.", so it throws there. Did you mean api.${Sp}?`)
+       MT.has(gT) || WT.has(gT) || nT || "api" !== (null === (mT = this.byName.get(gT)) || void 0 === mT ? void 0 : mT.kind) || MT.set(gT, `Line ${UT+1} calls ${gT} without "api.", so it throws there. Did you mean api.${gT}?`)
```

#### 462. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8852-L8853` → after: `L8852-L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8852-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8852-L8853) · [Before (L8852-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8852-L8853)

```diff
-     const ip = this.find(pp.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((pp => "api" === pp.kind)).slice(0, 2).map((pp => `api.${pp.name}`));
-     return `api.${pp} doesn't exist.${ip.length?` Did you mean ${ip.join(" or ")}?`:""}`
+     const UT = this.find(TT.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((TT => "api" === TT.kind)).slice(0, 2).map((TT => `api.${TT.name}`));
+     return `api.${TT} doesn't exist.${UT.length?` Did you mean ${UT.join(" or ")}?`:""}`
```

#### 463. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8873` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8873) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8873)

```diff
-         Pp = Ap ? null === (Lp = new RegExp(`(?:^|[{,])\\s*${Ap.replaceAll("$","\\$")}\\s*:\\s*${yL}`, "m").exec(pp)) || void 0 === Lp ? void 0 : Lp[1] : void 0,
+         LT = lT ? null === (HT = new RegExp(`(?:^|[{,])\\s*${lT.replaceAll("$","\\$")}\\s*:\\s*${pH}`, "m").exec(TT)) || void 0 === HT ? void 0 : HT[1] : void 0,
```

#### 464. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8875-L8876` → after: `L8875-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8875-L8876) · [Before (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8875-L8876)

```diff
-         yp = null !== (Yp = null === (Dp = new RegExp(`\\?\\s*${yL}\\s*:\\s*${yL}$`).exec(Op)) || void 0 === Dp ? void 0 : Dp.slice(1)) && void 0 !== Yp ? Yp : [];
-       for (const pp of [null !== (Up = null !== Pp && void 0 !== Pp ? Pp : Wp) && void 0 !== Up ? Up : Op, ...yp]) {
+         BT = null !== (kT = null === (jT = new RegExp(`\\?\\s*${pH}\\s*:\\s*${pH}$`).exec(WT)) || void 0 === jT ? void 0 : jT.slice(1)) && void 0 !== kT ? kT : [];
+       for (const TT of [null !== (ZT = null !== LT && void 0 !== LT ? LT : pT) && void 0 !== ZT ? ZT : WT, ...BT]) {
```

#### 465. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8884` → after: `L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8884) · [Before (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8884)

```diff
-   return [...cp].map((pp => `"${pp}" isn't an item or block name.${dL(this.suggestNames(pp))}`))
+   return [...mT].map((TT => `"${TT}" isn't an item or block name.${qH(this.suggestNames(TT))}`))
```

#### 466. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8897` → after: `L8897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8897) · [Before (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8897)

```diff
-     return `"${ip}" isn't an item or block name, so giving or selling it fails. Did you mean "${cp}"?`
+     return `"${UT}" isn't an item or block name, so giving or selling it fails. Did you mean "${mT}"?`
```

#### 467. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8913` → after: `L8913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8913) · [Before (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8913)

```diff
-       return `"${ip}" isn't a block or item name, so comparing with it is never true. Did you mean "${cp}"?`
+       return `"${UT}" isn't a block or item name, so comparing with it is never true. Did you mean "${mT}"?`
```

#### 468. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8918-L8919` → after: `L8918-L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8918-L8919) · [Before (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8918-L8919)

```diff
-       cp = this.blockNames.has(ip) || !this.itemAndBlockNames.includes(ip) ? void 0 : [`Block of ${ip}`, `${ip} Block`].find((pp => this.blockNames.has(pp)));
-     !cp || pp.includes(`"${cp}"`) || pp.includes(`'${cp}'`) || Sp.set(ip, cp)
+       mT = this.blockNames.has(UT) || !this.itemAndBlockNames.includes(UT) ? void 0 : [`Block of ${UT}`, `${UT} Block`].find((TT => this.blockNames.has(TT)));
+     !mT || TT.includes(`"${mT}"`) || TT.includes(`'${mT}'`) || gT.set(UT, mT)
```

#### 469. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8923` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8923) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8923)

```diff
-     return `"${ip}" is an item, not a block, so no block is ever called that. Did you mean "${cp}"?`
+     return `"${UT}" is an item, not a block, so no block is ever called that. Did you mean "${mT}"?`
```

#### 470. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8940-L8941` → after: `L8940-L8941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8940-L8941) · [Before (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8940-L8941)

```diff
-       } : Op.names.length > 0 || Op.isDecided ? Op : {
-         names: cp.length <= 2 ? cp : [],
+       } : WT.names.length > 0 || WT.isDecided ? WT : {
+         names: mT.length <= 2 ? mT : [],
```

#### 471. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8945` → after: `L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8945) · [Before (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8945)

```diff
-     return `"${pp}" isn't a block or item name, so comparing a block with it is never true.${dL(op)}`
+     return `"${TT}" isn't a block or item name, so comparing a block with it is never true.${qH(zT)}`
```

#### 472. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8960-L8961` → after: `L8960-L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8960-L8961) · [Before (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8960-L8961)

```diff
-           name: null !== (op = cp[1]) && void 0 !== op ? op : cp[2],
-           body: pp.slice(cp.index, null !== (Ip = null === (Sp = ip[Op + 1]) || void 0 === Sp ? void 0 : Sp.index) && void 0 !== Ip ? Ip : pp.length)
+           name: null !== (zT = mT[1]) && void 0 !== zT ? zT : mT[2],
+           body: TT.slice(mT.index, null !== (MT = null === (gT = UT[WT + 1]) || void 0 === gT ? void 0 : gT.index) && void 0 !== MT ? MT : TT.length)
```

#### 473. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8969` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8969) · [Before (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8969)

```diff
-         if (pp.text.includes(`"${Op}"`)) continue;
+         if (TT.text.includes(`"${WT}"`)) continue;
```

#### 474. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8971-L8972` → after: `L8971-L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8971-L8972) · [Before (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8971-L8972)

```diff
-           Sp = Ip.length > 0 ? `Did you mean ${Ip.map((pp=>`"${pp}"`)).join(" or ")}?` : /Return false/i.test(pp.text) ? `To stop it, return false instead of "${Op}".` : "Check Show Docs for what it can return.";
-         ip.add(`${cp} can't use "${Op}" to stop anything. ${Sp}`)
+           gT = MT.length > 0 ? `Did you mean ${MT.map((TT=>`"${TT}"`)).join(" or ")}?` : /Return false/i.test(TT.text) ? `To stop it, return false instead of "${WT}".` : "Check Show Docs for what it can return.";
+         UT.add(`${mT} can't use "${WT}" to stop anything. ${gT}`)
```

#### 475. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8982` → after: `L8982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8982) · [Before (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8982)

```diff
-     return !cp.some((pp => pp.startsWith(`${ip} `)))
+     return !mT.some((TT => TT.startsWith(`${UT} `)))
```

#### 476. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8998` → after: `L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L8998) · [Before (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L8998)

```diff
-     Ip = null !== (ip = this.namesByLowerCase.get(cp)) && void 0 !== ip ? ip : this.namesByLowerCase.get(op);
+     MT = null !== (UT = this.namesByLowerCase.get(mT)) && void 0 !== UT ? UT : this.namesByLowerCase.get(zT);
```

#### 477. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9030` → after: `L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9030) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9030)

```diff
-       pp && Op.set(pp, (null !== (cp = Op.get(pp)) && void 0 !== cp ? cp : 0) + ip)
+       TT && WT.set(TT, (null !== (mT = WT.get(TT)) && void 0 !== mT ? mT : 0) + UT)
```

#### 478. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9036` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9036) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9036)

```diff
-   for (const Ap of `${pp}\n${ip}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const lT of `${TT}\n${UT}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 479. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9038` → after: `L9038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9038) · [Before (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9038)

```diff
-     op(this.byName.get(null !== (xp = null !== (Lp = Ap[1]) && void 0 !== Lp ? Lp : Ap[2]) && void 0 !== xp ? xp : Ap[3]), Ap[1] || Ap[2] ? 4 : 2)
+     zT(this.byName.get(null !== (nT = null !== (HT = lT[1]) && void 0 !== HT ? HT : lT[2]) && void 0 !== nT ? nT : lT[3]), lT[1] || lT[2] ? 4 : 2)
```

#### 480. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9040` → after: `L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9040) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9040)

```diff
-   for (const Ap of (0, vi.f)(ip, /([A-Za-z_$][\w$]*)\s*\(/g, vi.m)) {
+   for (const lT of (0, ZU.e)(UT, /([A-Za-z_$][\w$]*)\s*\(/g, ZU.n)) {
```

#### 481. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9049-L9050` → after: `L9049-L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9049-L9050) · [Before (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9049-L9050)

```diff
-       const cp = 1 / Math.log2(2 + (null !== (Dp = this.wordCounts.get(ip)) && void 0 !== Dp ? Dp : 0));
-       Ap.nameWords.has(ip) ? pp += 3 * cp : Ap.textWords.has(ip) && (pp += cp)
+       const mT = 1 / Math.log2(2 + (null !== (jT = this.wordCounts.get(UT)) && void 0 !== jT ? jT : 0));
+       lT.nameWords.has(UT) ? TT += 3 * mT : lT.textWords.has(UT) && (TT += mT)
```

#### 482. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9066` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9066) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9066)

```diff
-   return null !== (ip = null !== (cp = this.byName.get(Op)) && void 0 !== cp ? cp : this.sections.find((pp => pp.name.toLowerCase() === op))) && void 0 !== ip ? ip : null
+   return null !== (UT = null !== (mT = this.byName.get(WT)) && void 0 !== mT ? mT : this.sections.find((TT => TT.name.toLowerCase() === zT))) && void 0 !== UT ? UT : null
```

#### 483. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9103` → after: `L9103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9103) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9103)

```diff
-         Op = new RegExp(`(^|[^\\w$.])${cp}\\s*\\(`),
+         WT = new RegExp(`(^|[^\\w$.])${mT}\\s*\\(`),
```

#### 484. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9129` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9129) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9129)

```diff
-         when: `in ${cp[1]}`,
+         when: `in ${mT[1]}`,
```

#### 485. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9136` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9136) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9136)

```diff
-     xp = Ip && ip ? ` ${Ip}` : "",
+     nT = MT && UT ? ` ${MT}` : "",
```

#### 486. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9140-L9141` → after: `L9140-L9141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9140-L9141) · [Before (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9140-L9141)

```diff
-     const pp = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Yp = null === (Dp = op[0]) || void 0 === Dp ? void 0 : Dp.trim()) && void 0 !== Yp ? Yp : ""),
-       ip = null === (Ap = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (Pp = null === (Wp = op[1]) || void 0 === Wp ? void 0 : Wp.trim()) && void 0 !== Pp ? Pp : "")) || void 0 === Ap ? void 0 : Ap[1],
+     const TT = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (kT = null === (jT = zT[0]) || void 0 === jT ? void 0 : jT.trim()) && void 0 !== kT ? kT : ""),
+       UT = null === (lT = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (LT = null === (pT = zT[1]) || void 0 === pT ? void 0 : pT.trim()) && void 0 !== LT ? LT : "")) || void 0 === lT ? void 0 : lT[1],
```

#### 487. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9144` → after: `L9144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9144) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9144)

```diff
-         return /^(a|an|the)\s/i.test(ip) || !/^[a-z]/i.test(ip) ? ip : `${/^[aeiou]/i.test(ip)?"an":"a"} ${ip}`
+         return /^(a|an|the)\s/i.test(UT) || !/^[a-z]/i.test(UT) ? UT : `${/^[aeiou]/i.test(UT)?"an":"a"} ${UT}`
```

#### 488. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9146` → after: `L9146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9146) · [Before (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9146)

```diff
-     return cp && null !== pp && void 0 !== pp && pp[3] ? `api.${Lp[1]} needs ${cp}, but it got ${pp[3]}${xp}.` : pp ? `api.${Lp[1]} couldn't use its ${yp=Number(pp[1]),1===yp?"first":2===yp?"second":3===yp?"third":4===yp?"fourth":`#${yp}`} argument${xp}.${cp?` It needs ${cp}.`:"" … [truncated]
+     return mT && null !== TT && void 0 !== TT && TT[3] ? `api.${HT[1]} needs ${mT}, but it got ${TT[3]}${nT}.` : TT ? `api.${HT[1]} couldn't use its ${BT=Number(TT[1]),1===BT?"first":2===BT?"second":3===BT?"third":4===BT?"fourth":`#${BT}`} argument${nT}.${mT?` It needs ${mT}.`:"" … [truncated]
```

#### 489. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9150` → after: `L9150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9150) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9150)

```diff
-   if (Up) return Up[1] ? `${Up[1]} isn't a function${xp}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${xp}. Check each name it calls is spelt exactly right.`;
+   if (ZT) return ZT[1] ? `${ZT[1]} isn't a function${nT}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${nT}. Check each name it calls is spelt exactly right.`;
```

#### 490. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9152)

```diff
-   if (wp) return `${wp[1]} isn't defined${xp}. Check the spelling, or create it before using it.`;
+   if (cT) return `${cT[1]} isn't defined${nT}. Check the spelling, or create it before using it.`;
```

#### 491. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9156-L9157` → after: `L9156-L9157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9156-L9157) · [Before (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9156-L9157)

```diff
-     const pp = null !== (tp = vp[1]) && void 0 !== tp ? tp : vp[3];
-     return `Your code tried to read${pp?` .${pp}`:" something"} from ${vp[2]}${xp}: a value it expected wasn't there.`
+     const TT = null !== (fT = vT[1]) && void 0 !== fT ? fT : vT[3];
+     return `Your code tried to read${TT?` .${TT}`:" something"} from ${vT[2]}${nT}: a value it expected wasn't there.`
```

#### 492. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9159` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9159) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9159)

```diff
-   return `Your code hit an error${xp}: ${Sp.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${nT}: ${gT.replace(/^\w*Error:\s*/,"")}`
```

#### 493. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9245` → after: `L9245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9245) · [Before (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9245)

```diff
-   return pp.replaceAll(`"${ip}"`, `"${cp}"`).replaceAll(`'${ip}'`, `'${cp}'`)
+   return TT.replaceAll(`"${UT}"`, `"${mT}"`).replaceAll(`'${UT}'`, `'${mT}'`)
```

#### 494. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9249` → after: `L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9249) · [Before (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9249)

```diff
-   const cp = pp => Rp().isIdentifier(pp) ? pp.text === ip : pp.elements.some((pp => !Rp().isOmittedExpression(pp) && cp(pp.name))),
+   const mT = TT => JT().isIdentifier(TT) ? TT.text === UT : TT.elements.some((TT => !JT().isOmittedExpression(TT) && mT(TT.name))),
```

#### 495. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9262` → after: `L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9262) · [Before (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9262)

```diff
-       return (null === pp || void 0 === pp || null === (cp = pp.name) || void 0 === cp ? void 0 : cp.text) === ip || void 0 !== Op && (Rp().isNamespaceImport(Op) ? Op.name.text === ip : Op.elements.some((pp => pp.name.text === ip)))
+       return (null === TT || void 0 === TT || null === (mT = TT.name) || void 0 === mT ? void 0 : mT.text) === UT || void 0 !== WT && (JT().isNamespaceImport(WT) ? WT.name.text === UT : WT.elements.some((TT => TT.name.text === UT)))
```

#### 496. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9276` → after: `L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9276) · [Before (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9276)

```diff
-             text: `${cp}${ip}${cp}`
+             text: `${mT}${UT}${mT}`
```

#### 497. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9288` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9288) · [Before (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9288)

```diff
-                 edit: Ip(op, Rp().isShorthandPropertyAssignment(pp) ? `${Op}: ${cp}` : Op),
+                 edit: MT(zT, JT().isShorthandPropertyAssignment(TT) ? `${WT}: ${mT}` : WT),
```

#### 498. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9290` → after: `L9290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9290) · [Before (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9290)

```diff
-                 aW: xp
+                 Jp: nT
```

#### 499. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9303)

```diff
-         return Jc(pp, Sp.flatMap((pp => pp.depth !== ip || pp.aW ? [] : [pp.edit])))
+         return Xm(TT, gT.flatMap((TT => TT.depth !== UT || TT.Jp ? [] : [TT.edit])))
```

#### 500. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9328` → after: `L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9328) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9328)

```diff
-           ip && Rp().isIdentifier(ip) ? (Rp().isVariableDeclaration(pp) && OO(pp.initializer, Op) ? op : Ip).add(ip.text) : Rp().isIdentifier(pp) && oO(pp) && Ip.add(pp.text), Rp().forEachChild(pp, Sp)
+           UT && JT().isIdentifier(UT) ? (JT().isVariableDeclaration(TT) && UW(TT.initializer, WT) ? zT : MT).add(UT.text) : JT().isIdentifier(TT) && mW(TT) && MT.add(TT.text), JT().forEachChild(TT, gT)
```

#### 501. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9337` → after: `L9337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9337) · [Before (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9337)

```diff
-           text: `{ customAttributes: ${ip.getText(Op)} }`
+           text: `{ customAttributes: ${UT.getText(WT)} }`
```

#### 502. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9360)

```diff
-               text: Rp().isShorthandPropertyAssignment(Yp) ? `${ip}: ${cp}` : cp
+               text: JT().isShorthandPropertyAssignment(kT) ? `${UT}: ${mT}` : mT
```

#### 503. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9370-L9371` → after: `L9370-L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9370-L9371) · [Before (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9370-L9371)

```diff
-       const ip = `(["'])${function(pp){return pp.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(cp)}\\1`;
-       return ("comparedBlock" === op ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${ip}`, `${ip}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${ip}`, `${ip}\\s*[!=]==?`, `\\bcase\\s+${ip}\\s*:`, `\\.includes\\(\\s*${ip}\\s*\\)`]).reduce(((pp, ip) => pp.replace(new RegExp(ip, "g"), … [truncated]
+       const UT = `(["'])${function(TT){return TT.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(mT)}\\1`;
+       return ("comparedBlock" === zT ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${UT}`, `${UT}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${UT}`, `${UT}\\s*[!=]==?`, `\\bcase\\s+${UT}\\s*:`, `\\.includes\\(\\s*${UT}\\s*\\)`]).reduce(((TT, UT) => TT.replace(new RegExp(UT, "g"), … [truncated]
```

#### 504. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9381` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9381) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9381)

```diff
-   return "export" === pp.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === pp.kind ? `The enchantment given to ${pp.method} is now in { customAttributes: ... }.` : "null" === pp.kind ? `The null given to ${pp.method} i … [truncated]
+   return "export" === TT.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === TT.kind ? `The enchantment given to ${TT.method} is now in { customAttributes: ... }.` : "null" === TT.kind ? `The null given to ${TT.method} i … [truncated]
```

#### 505. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9383)

```diff
- var FL = cp(41707);
+ var KH = mT(41599);
```

#### 506. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9443` → after: `L9443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9443) · [Before (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9443)

```diff
-       return op ? `${Op} didn't accept your key: it may be wrong or deleted.` : `${Op} didn't accept your key: it may be wrong or deleted. Check it on ${Op}'s website.`;
+       return zT ? `${WT} didn't accept your key: it may be wrong or deleted.` : `${WT} didn't accept your key: it may be wrong or deleted. Check it on ${WT}'s website.`;
```

#### 507. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9445` → after: `L9445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9445) · [Before (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9445)

```diff
-       return op ? `${Op} stopped your key for now: it has used all it can.` : `${Op} stopped your key for now: it has used all it can. Check it on ${Op}'s website.`;
+       return zT ? `${WT} stopped your key for now: it has used all it can.` : `${WT} stopped your key for now: it has used all it can. Check it on ${WT}'s website.`;
```

#### 508. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9447)

```diff
-       return `Too many requests to ${cp} right now. Wait a minute and try again.`;
+       return `Too many requests to ${mT} right now. Wait a minute and try again.`;
```

#### 509. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9449` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9449) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9449)

```diff
-       return `${Op} can't find ${cp}. Pick another model, or press Check for new models in AI settings.`;
+       return `${WT} can't find ${mT}. Pick another model, or press Check for new models in AI settings.`;
```

#### 510. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9451` → after: `L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9451) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9451)

```diff
-       return `${cp} took too long to answer.`;
+       return `${mT} took too long to answer.`;
```

#### 511. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9453)

```diff
-       return op ? `Couldn't reach ${Op}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${Op}. Check your internet and your key.`;
+       return zT ? `Couldn't reach ${WT}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${WT}. Check your internet and your key.`;
```

#### 512. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9455)

```diff
-       return `${Op} doesn't work from where you are.`;
+       return `${WT} doesn't work from where you are.`;
```

#### 513. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9459)

```diff
-       return `${cp} can't be used right now. Try again in a minute.`
+       return `${mT} can't be used right now. Try again in a minute.`
```

#### 514. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9477` → after: `L9477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9477) · [Before (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9477)

```diff
-       ...FL.f,
+       ...KH.g,
```

#### 515. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9553` → after: `L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9553) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9553)

```diff
-       }, ip] = await Promise.all([Promise.resolve().then((() => cp(1372))), this.popup.notice()]), Op = pp.showPromptPopup({
+       }, UT] = await Promise.all([Promise.resolve().then((() => mT(1457))), this.popup.notice()]), WT = TT.showPromptPopup({
```

#### 516. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9641` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9641) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9641)

```diff
-       return "" === pp ? "no key needed" : pp.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === ip ? `key \u2026${pp.slice(-4)}` : `${(null!==(cp=null===(Op=/^[a-zA-Z]+-/.exec(pp))||void 0===Op?void 0:Op[0])&&void 0!==cp?cp:pp.slice(0,4)).slice(0,6)}\u2026${pp.slice(-4)}`
+       return "" === TT ? "no key needed" : TT.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === UT ? `key \u2026${TT.slice(-4)}` : `${(null!==(mT=null===(WT=/^[a-zA-Z]+-/.exec(TT))||void 0===WT?void 0:WT[0])&&void 0!==mT?mT:TT.slice(0,4)).slice(0,6)}\u2026${TT.slice(-4)}`
```

#### 517. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9663` → after: `L9663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9663) · [Before (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9663)

```diff
-         "aria-label": `Edit ${Ip} key`,
+         "aria-label": `Edit ${MT} key`,
```

#### 518. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9668)

```diff
-         "aria-label": `Rename ${Ip} key`,
+         "aria-label": `Rename ${MT} key`,
```

#### 519. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9689)

```diff
-     vp = `${Pp}-${null!==(ip=null===Dp||void 0===Dp?void 0:Dp.keyId)&&void 0!==ip?ip:"botxd"}-${null!==(cp=null===Dp||void 0===Dp?void 0:Dp.modelId)&&void 0!==cp?cp:"botxd"}`.replace(/[^\w-]/g, "_"),
+     vT = `${LT}-${null!==(UT=null===jT||void 0===jT?void 0:jT.keyId)&&void 0!==UT?UT:"botxd"}-${null!==(mT=null===jT||void 0===jT?void 0:jT.modelId)&&void 0!==mT?mT:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 520. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9693-L9695` → after: `L9693-L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9693-L9695) · [Before (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9693-L9695)

```diff
-     "data-key-id": null !== (op = null === Dp || void 0 === Dp ? void 0 : Dp.keyId) && void 0 !== op ? op : "botxd",
-     "data-model-id": null !== (xp = null === Dp || void 0 === Dp ? void 0 : Dp.modelId) && void 0 !== xp ? xp : "botxd",
-     title: null !== Up && void 0 !== Up ? Up : void 0,
+     "data-key-id": null !== (zT = null === jT || void 0 === jT ? void 0 : jT.keyId) && void 0 !== zT ? zT : "botxd",
+     "data-model-id": null !== (nT = null === jT || void 0 === jT ? void 0 : jT.modelId) && void 0 !== nT ? nT : "botxd",
+     title: null !== ZT && void 0 !== ZT ? ZT : void 0,
```

#### 521. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9703` → after: `L9703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9703) · [Before (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9703)

```diff
-       "aria-describedby": Yp ? vp : void 0,
+       "aria-describedby": kT ? vT : void 0,
```

#### 522. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9730` → after: `L9730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9730) · [Before (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9730)

```diff
-     uE: xp,
+     yI: nT,
```

#### 523. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9753` → after: `L9753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9753) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9753)

```diff
-           at: null !== (cp = pp.usedAt) && void 0 !== cp ? cp : 0,
+           at: null !== (mT = TT.usedAt) && void 0 !== mT ? mT : 0,
```

#### 524. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9776` → after: `L9776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9776) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9776)

```diff
-     Cp = `${ip}-model`,
+     wT = `${UT}-model`,
```

#### 525. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9789` → after: `L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9789) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9789)

```diff
-       }, null !== (op = null === Op || void 0 === Op ? void 0 : Op.modelId) && void 0 !== op ? op : "botxd")
+       }, null !== (zT = null === WT || void 0 === WT ? void 0 : WT.modelId) && void 0 !== zT ? zT : "botxd")
```

#### 526. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9797` → after: `L9797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9797) · [Before (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9797)

```diff
-       hint: null !== wp && void 0 !== wp ? wp : `Bloxd's better AI. ${Up.status?bx(Up.status):""}`.trim(),
+       hint: null !== cT && void 0 !== cT ? cT : `Bloxd's better AI. ${ZT.status?Pn(ZT.status):""}`.trim(),
```

#### 527. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9803` → after: `L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9803) · [Before (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9803)

```diff
-         Mx(null !== (pp = null === (ip = Up.status) || void 0 === ip ? void 0 : ip.provider) && void 0 !== pp ? pp : "ovh") && Ex.SW()
+         xn(null !== (TT = null === (UT = ZT.status) || void 0 === UT ? void 0 : UT.provider) && void 0 !== TT ? TT : "ovh") && wn.VL()
```

#### 528. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9808)

```diff
-           if (Mx(null !== (ip = null === pp || void 0 === pp ? void 0 : pp.provider) && void 0 !== ip ? ip : "ovh") || await DY.ask()) return Ex.SW(), !0;
+           if (xn(null !== (UT = null === TT || void 0 === TT ? void 0 : TT.provider) && void 0 !== UT ? UT : "ovh") || await kk.ask()) return wn.VL(), !0;
```

#### 529. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9819-L9820` → after: `L9819-L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9819-L9820) · [Before (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9819-L9820)

```diff
-         Xp = Cp ? null !== (ip = pp.models.find((ip => ip.id === pp.usedModelId))) && void 0 !== ip ? ip : Px(pp.models) : void 0,
-         lp = null !== (cp = null === (Op = ep[pp.id]) || void 0 === Op ? void 0 : Op.trim().toLowerCase()) && void 0 !== cp ? cp : "",
+         aT = wT ? null !== (UT = TT.models.find((UT => UT.id === TT.usedModelId))) && void 0 !== UT ? UT : Hn(TT.models) : void 0,
+         yT = null !== (mT = null === (WT = bT[TT.id]) || void 0 === WT ? void 0 : WT.trim().toLowerCase()) && void 0 !== mT ? mT : "",
```

#### 530. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9833` → after: `L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9833) · [Before (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9833)

```diff
-             keyName: null !== (Wp = pp.name) && void 0 !== Wp ? Wp : "",
+             keyName: null !== (pT = TT.name) && void 0 !== pT ? pT : "",
```

#### 531. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9849` → after: `L9849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9849) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9849)

```diff
-             "aria-label": `Check ${wp} for new models`,
+             "aria-label": `Check ${cT} for new models`,
```

#### 532. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9857` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9857) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9857)

```diff
-             "aria-label": `Remove ${wp} key`,
+             "aria-label": `Remove ${cT} key`,
```

#### 533. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9865` → after: `L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9865) · [Before (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9865)

```diff
-             "aria-label": `Remove ${wp} key?`,
+             "aria-label": `Remove ${cT} key?`,
```

#### 534. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9871` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9871) · [Before (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9871)

```diff
-               "aria-label": `Yes, remove ${wp} key`,
+               "aria-label": `Yes, remove ${cT} key`,
```

#### 535. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9878` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9878) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9878)

```diff
-               "aria-label": `No, keep ${wp} key`,
+               "aria-label": `No, keep ${cT} key`,
```

#### 536. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9892-L9894` → after: `L9892-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9892-L9894) · [Before (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9892-L9894)

```diff
-           "aria-label": `Find a model from ${wp}`,
-           placeholder: `Find a model (${pp.models.length})`,
-           value: null !== (Up = ep[pp.id]) && void 0 !== Up ? Up : "",
+           "aria-label": `Find a model from ${cT}`,
+           placeholder: `Find a model (${TT.models.length})`,
+           value: null !== (ZT = bT[TT.id]) && void 0 !== ZT ? ZT : "",
```

#### 537. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9910` → after: `L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9910) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9910)

```diff
-           "aria-label": `Show all ${wp} models`,
+           "aria-label": `Show all ${cT} models`,
```

#### 538. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9934)

```diff
-     } = await cp.e(125).then((() => cp(6660)));
+     } = await mT.e(125).then((() => mT(6589)));
```

#### 539. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9958` → after: `L9958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L9958) · [Before (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L9958)

```diff
-         children: ip ? op : Ip
+         children: UT ? zT : MT
```

#### 540. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10078` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10078) · [Before (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10078)

```diff
-           children: [1 === xp.length ? "Forget your key" : `Forget all ${xp.length} keys`, " in this browser?", (0, Sp.jsx)("button", {
+           children: [1 === nT.length ? "Forget your key" : `Forget all ${nT.length} keys`, " in this browser?", (0, gT.jsx)("button", {
```

#### 541. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10142` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10142) · [Before (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10142)

```diff
-                 text: `${ip} listed no models, so your models stay as they were.`
+                 text: `${UT} listed no models, so your models stay as they were.`
```

#### 542. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10148` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10148) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10148)

```diff
-                 text: `${ip}'s models are up to date.`
+                 text: `${UT}'s models are up to date.`
```

#### 543. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10162` → after: `L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10162) · [Before (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10162)

```diff
-         uE: pp => {
+         yI: TT => {
```

#### 544. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10217)

```diff
-         null === (cp = null !== Op && void 0 !== Op ? Op : xp.current) || void 0 === cp || cp.scrollIntoView({
+         null === (mT = null !== WT && void 0 !== WT ? WT : nT.current) || void 0 === mT || mT.scrollIntoView({
```

#### 545. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10237)

```diff
-         children: Lp ? `An API key works like a password for ${Lp.shortName}'s AI (it isn't your ${Lp.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: HT ? `An API key works like a password for ${HT.shortName}'s AI (it isn't your ${HT.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 546. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10239` → after: `L10239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10239) · [Before (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10239)

```diff
-         children: ["You make it on ", Lp ? `${Lp.shortName}'s website` : (0, Sp.jsx)(vY, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", HT ? `${HT.shortName}'s website` : (0, gT.jsx)(ck, {}), ", and see how much you've used or delete it there."]
```

#### 547. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10241` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10241) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10241)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (ip = null === Lp || void 0 === Lp ? void 0 : Lp.shortName) && void 0 !== ip ? ip : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (UT = null === HT || void 0 === HT ? void 0 : HT.shortName) && void 0 !== UT ? UT : "that company", ", never to Bloxd."]
```

#### 548. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10300` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10300) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10300)

```diff
-   } = dx(), [Pp, Wp] = (0, Op.useState)(null !== (ip = null === Lp || void 0 === Lp ? void 0 : Lp.provider) && void 0 !== ip ? ip : null), [yp, Up] = (0, Op.useState)(!!Lp), [wp, vp] = (0, Op.useState)(""), tp = null !== (cp = null === Lp || void 0 === Lp ? void 0 : Lp.key) && vo … [truncated]
+   } = vn(), [LT, pT] = (0, WT.useState)(null !== (UT = null === HT || void 0 === HT ? void 0 : HT.provider) && void 0 !== UT ? UT : null), [BT, ZT] = (0, WT.useState)(!!HT), [cT, vT] = (0, WT.useState)(""), fT = null !== (mT = null === HT || void 0 === HT ? void 0 : HT.key) && vo … [truncated]
```

#### 549. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10302` → after: `L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10302) · [Before (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10302)

```diff
-     return pp === (null === Lp || void 0 === Lp ? void 0 : Lp.provider) && ("custom" !== pp || (null !== (ip = fS(ep)) && void 0 !== ip ? ip : "") === (null !== (cp = Lp.baseUrl) && void 0 !== cp ? cp : ""))
+     return TT === (null === HT || void 0 === HT ? void 0 : HT.provider) && ("custom" !== TT || (null !== (UT = Qg(bT)) && void 0 !== UT ? UT : "") === (null !== (mT = HT.baseUrl) && void 0 !== mT ? mT : ""))
```

#### 550. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10305-L10306` → after: `L10305-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10305-L10306) · [Before (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10305-L10306)

```diff
-     return "" === ip && "" !== tp && kp(pp) ? tp : ip
-   }, [qp, Mp] = (0, Op.useState)(""), [Cp, Ep] = (0, Op.useState)(null !== (Ip = null === Lp || void 0 === Lp ? void 0 : Lp.name) && void 0 !== Ip ? Ip : ""), [Xp, lp] = (0, Op.useState)(!1), [Qp, Jp] = (0, Op.useState)(null), [Bp, Np] = (0, Op.useState)(""), [Tp, fp] = (0, Op.us … [truncated]
+     return "" === UT && "" !== fT && eT(TT) ? fT : UT
+   }, [xT, dT] = (0, WT.useState)(""), [wT, tT] = (0, WT.useState)(null !== (MT = null === HT || void 0 === HT ? void 0 : HT.name) && void 0 !== MT ? MT : ""), [aT, yT] = (0, WT.useState)(!1), [XT, IT] = (0, WT.useState)(null), [QT, sT] = (0, WT.useState)(""), [FT, PT] = (0, WT.us … [truncated]
```

#### 551. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10337` → after: `L10337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10337) · [Before (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10337)

```diff
-           baseUrl: "custom" === Pp && null !== (pp = fS(ep)) && void 0 !== pp ? pp : void 0,
+           baseUrl: "custom" === LT && null !== (TT = Qg(bT)) && void 0 !== TT ? TT : void 0,
```

#### 552. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10344` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10344) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10344)

```diff
-         const cp = null !== Pp && void 0 !== Pp ? Pp : TS(ip),
+         const mT = null !== LT && void 0 !== LT ? LT : Ig(UT),
```

#### 553. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10359-L10360` → after: `L10359-L10360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10359-L10360) · [Before (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10359-L10360)

```diff
-             baseUrl: null !== op && void 0 !== op ? op : void 0,
-             modelName: Xp ? qp : void 0
+             baseUrl: null !== zT && void 0 !== zT ? zT : void 0,
+             modelName: aT ? xT : void 0
```

#### 554. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10366` → after: `L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10366) · [Before (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10366)

```diff
-           Np(null !== (Sp = null === (xp = null !== Yp && void 0 !== Yp ? Yp : Px(pp)) || void 0 === xp ? void 0 : xp.id) && void 0 !== Sp ? Sp : "")
+           sT(null !== (gT = null === (nT = null !== kT && void 0 !== kT ? kT : Hn(TT)) || void 0 === nT ? void 0 : nT.id) && void 0 !== gT ? gT : "")
```

#### 555. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10372-L10373` → after: `L10372-L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10372-L10373) · [Before (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10372-L10373)

```diff
-           const Sp = "badKey" !== op || yp ? "" : ` If it isn't from ${QS[cp].shortName}, pick the company it's from.`;
-           hp(`${nS(op,cp)}${Sp}`)
+           const gT = "badKey" !== zT || BT ? "" : ` If it isn't from ${tg[mT].shortName}, pick the company it's from.`;
+           uT(`${Vg(zT,mT)}${gT}`)
```

#### 556. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10383` → after: `L10383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10383) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10383)

```diff
-         value: null !== Pp && void 0 !== Pp ? Pp : "",
+         value: null !== LT && void 0 !== LT ? LT : "",
```

#### 557. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10411` → after: `L10411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10411) · [Before (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10411)

```diff
-       }), (!Lp || ep !== (null !== (xp = Lp.baseUrl) && void 0 !== xp ? xp : "")) && (0, Sp.jsx)(HY, {})]
+       }), (!HT || bT !== (null !== (nT = HT.baseUrl) && void 0 !== nT ? nT : "")) && (0, gT.jsx)(fk, {})]
```

#### 558. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10483` → after: `L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10483) · [Before (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10483)

```diff
-           keyId: null !== Pp && void 0 !== Pp ? Pp : "",
+           keyId: null !== LT && void 0 !== LT ? LT : "",
```

#### 559. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10507` → after: `L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10507) · [Before (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10507)

```diff
-         placeholder: Pp && "custom" !== Pp ? `Like My ${QS[Pp].shortName}` : "Like Home server",
+         placeholder: LT && "custom" !== LT ? `Like My ${tg[LT].shortName}` : "Like Home server",
```

#### 560. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10533` → after: `L10533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10533) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10533)

```diff
-         children: Tp ? Fp ? "Testing the connection\u2026" : "Testing your key\u2026" : zp ? `Save and use ${zp.name}` : Fp ? "Test connection" : "Test key"
+         children: FT ? KT ? "Testing the connection\u2026" : "Testing your key\u2026" : hT ? `Save and use ${hT.name}` : KT ? "Test connection" : "Test key"
```

#### 561. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10538-L10540` → after: `L10538-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10538-L10540) · [Before (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10538-L10540)

```diff
- var uY = cp(1201),
-   jY = cp(37089),
-   kY = cp(37084);
+ var bk = mT(1288),
+   Ok = mT(36982),
+   ek = mT(36974);
```

#### 562. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10551-L10552` → after: `L10551-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10551-L10552) · [Before (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10551-L10552)

```diff
-   } = (0, uY.H)();
-   return (0, Sp.jsx)(kY.k, {
+   } = (0, bk.z)();
+   return (0, gT.jsx)(ek.f, {
```

#### 563. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10555` → after: `L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10555) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10555)

```diff
-     text: Ip(`codeEditorAiTutorial:${ip}`),
+     text: MT(`codeEditorAiTutorial:${UT}`),
```

#### 564. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10603` → after: `L10603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10603) · [Before (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10603)

```diff
-   return pp.model.name.toLowerCase().startsWith(ip.toLowerCase()) ? pp.model.name : `${ip} \xb7 ${pp.model.name}`
+   return TT.model.name.toLowerCase().startsWith(UT.toLowerCase()) ? TT.model.name : `${UT} \xb7 ${TT.model.name}`
```

#### 565. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10653` → after: `L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10653) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10653)

```diff
-     Hp = tp ? "Bot.xd (free) \xb7 once" : Yp ? MY(Yp) : Ap ? kx : "Bot.xd (free)";
+     qT = fT ? "Bot.xd (free) \xb7 once" : kT ? dk(kT) : lT ? On : "Bot.xd (free)";
```

#### 566. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10665` → after: `L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10665) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10665)

```diff
-       "aria-label": `AI model: ${Hp}`,
+       "aria-label": `AI model: ${qT}`,
```

#### 567. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10683)

```diff
-         title: `Allow AI to make edits to my code is ${cp?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${mT?"on":"off"}, in AI settings`,
```

#### 568. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10751` → after: `L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10751) · [Before (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10751)

```diff
-       cp(null !== (ip = pp.error) && void 0 !== ip ? ip : new Error("IndexedDB transaction failed"))
+       mT(null !== (UT = TT.error) && void 0 !== UT ? UT : new Error("IndexedDB transaction failed"))
```

#### 569. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10754` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10754) · [Before (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10754)

```diff
-       cp(null !== (ip = pp.error) && void 0 !== ip ? ip : new Error("IndexedDB transaction aborted"))
+       mT(null !== (UT = TT.error) && void 0 !== UT ? UT : new Error("IndexedDB transaction aborted"))
```

#### 570. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10758` → after: `L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10758) · [Before (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10758)

```diff
- var lY = cp(37124);
+ var yk = mT(37012);
```

#### 571. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10789` → after: `L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10789) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10789)

```diff
-           if (ip) return pp.includes(`"${ip}"`) ? `"${ip}"` : pp.includes(ip) ? ip : void 0
+           if (UT) return TT.includes(`"${UT}"`) ? `"${UT}"` : TT.includes(UT) ? UT : void 0
```

#### 572. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10793)

```diff
-         className: Ip()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${pp.kind}`, Op && "WorldCodeAiDiff-marked"),
+         className: MT()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${TT.kind}`, WT && "WorldCodeAiDiff-marked"),
```

#### 573. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10856` → after: `L10856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10856) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10856)

```diff
-   return op(pp) === op(ip) ? Op : op(pp) === op(ip - 864e5) ? `yesterday ${Op}` : function(pp, ip) {
+   return zT(TT) === zT(UT) ? WT : zT(TT) === zT(UT - 864e5) ? `yesterday ${WT}` : function(TT, UT) {
```

#### 574. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10859)

```diff
-     if (cp < 60) return `${cp} min ago`;
+     if (mT < 60) return `${mT} min ago`;
```

#### 575. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10861` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10861) · [Before (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10861)

```diff
-     if (Op < 24) return `${Op} h ago`;
+     if (WT < 24) return `${WT} h ago`;
```

#### 576. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10863` → after: `L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10863) · [Before (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10863)

```diff
-     return 1 === op ? "1 day ago" : `${op} days ago`
+     return 1 === zT ? "1 day ago" : `${zT} days ago`
```

#### 577. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10870-L10871` → after: `L10870-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10870-L10871) · [Before (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10870-L10871)

```diff
-     const Ip = null !== (Op = pp.files[cp]) && void 0 !== Op ? Op : "";
-     return (null !== (op = ip[cp]) && void 0 !== op ? op : "") === Ip ? [] : [{
+     const MT = null !== (WT = TT.files[mT]) && void 0 !== WT ? WT : "";
+     return (null !== (zT = UT[mT]) && void 0 !== zT ? zT : "") === MT ? [] : [{
```

#### 578. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10883` → after: `L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10883) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10883)

```diff
-   return `${(Op>ip/2?cp.slice(0,Op):cp).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(WT>UT/2?mT.slice(0,WT):mT).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 579. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10894` → after: `L10894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10894) · [Before (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10894)

```diff
-   const [Yp, Dp] = (0, Op.useState)(!1), [Ap, Pp] = (0, Op.useState)(!1), Wp = ip.did ? `Before: ${ip.did}` : ip.label, yp = bY(Wp), Up = ip.did && ip.label.startsWith('Before "') ? ip.label.slice(7) : null, wp = null === Up ? null : bY(Up, 50), vp = null !== wp && null !== Up && … [truncated]
+   const [kT, jT] = (0, WT.useState)(!1), [lT, LT] = (0, WT.useState)(!1), pT = UT.did ? `Before: ${UT.did}` : UT.label, BT = Vk(pT), ZT = UT.did && UT.label.startsWith('Before "') ? UT.label.slice(7) : null, cT = null === ZT ? null : Vk(ZT, 50), vT = null !== cT && null !== ZT && … [truncated]
```

#### 580. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10919-L10920` → after: `L10919-L10920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10919-L10920) · [Before (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10919-L10920)

```diff
-     const Ip = null !== (Op = ip.files[pp]) && void 0 !== Op ? Op : "",
-       Sp = null !== (op = cp[pp]) && void 0 !== op ? op : "";
+     const MT = null !== (WT = UT.files[TT]) && void 0 !== WT ? WT : "",
+       gT = null !== (zT = mT[TT]) && void 0 !== zT ? zT : "";
```

#### 581. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10934` → after: `L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10934) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10934)

```diff
-         children: [Ap || !yp ? Wp : yp, (yp || vp) && (0, Sp.jsx)("button", {
+         children: [lT || !BT ? pT : BT, (BT || vT) && (0, gT.jsx)("button", {
```

#### 582. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10946` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L10946) · [Before (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L10946)

```diff
-           children: ["You asked: ", Ap || !vp ? Up : vp]
+           children: ["You asked: ", lT || !vT ? ZT : vT]
```

#### 583. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11027` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11027) · [Before (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11027)

```diff
-     Lk: op,
+     lY: zT,
```

#### 584. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11051)

```diff
-           "aria-label": `Delete note: ${pp}`,
+           "aria-label": `Delete note: ${TT}`,
```

#### 585. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11190` → after: `L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11190) · [Before (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11190)

```diff
-       }, `${ip}:${pp}`)))
+       }, `${UT}:${TT}`)))
```

#### 586. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11193` → after: `L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11193) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11193)

```diff
-       children: ["Apply ", cp - Op > 1 ? `steps ${Op+1} to ${cp}` : `step ${cp}`, " to your code and try it, then build step ", cp + 1, "."]
+       children: ["Apply ", mT - WT > 1 ? `steps ${WT+1} to ${mT}` : `step ${mT}`, " to your code and try it, then build step ", mT + 1, "."]
```

#### 587. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11195` → after: `L11195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11195) · [Before (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11195)

```diff
-       ...FL.f,
+       ...KH.g,
```

#### 588. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11200` → after: `L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11200) · [Before (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11200)

```diff
-       children: Op < cp ? `Build step ${cp+1} anyway` : `Build step ${cp+1}`
+       children: WT < mT ? `Build step ${mT+1} anyway` : `Build step ${mT+1}`
```

#### 589. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11212` → after: `L11212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11212) · [Before (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11212)

```diff
-   return `${pp}\n\nYou asked me: "${ip}" ${null===cp?"I don't mind: choose what works best.":`My answer: ${cp.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${TT}\n\nYou asked me: "${UT}" ${null===mT?"I don't mind: choose what works best.":`My answer: ${mT.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 590. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11231-L11232` → after: `L11231-L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11231-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11231-L11232) · [Before (L11231-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11231-L11232)

```diff
-           ...FL.f,
-           key: `${ip}:${pp}`,
+           ...KH.g,
+           key: `${UT}:${TT}`,
```

#### 591. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11265` → after: `L11265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11265) · [Before (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11265)

```diff
-         ...FL.f,
+         ...KH.g,
```

#### 592. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11438` → after: `L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11438) · [Before (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11438)

```diff
-       ep = null !== Hp && void 0 !== Hp ? Hp : op;
+       bT = null !== qT && void 0 !== qT ? qT : zT;
```

#### 593. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11442-L11444` → after: `L11442-L11444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11442-L11444) · [Before (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11442-L11444)

```diff
-       raw: null !== (Lp = null === dp || void 0 === dp ? void 0 : dp.text) && void 0 !== Lp ? Lp : "",
-       start: null !== (Yp = null === dp || void 0 === dp ? void 0 : dp.start) && void 0 !== Yp ? Yp : 0,
-       end: null !== (Dp = null === dp || void 0 === dp ? void 0 : dp.end) && void 0 !== Dp ? Dp : 0,
+       raw: null !== (HT = null === iT || void 0 === iT ? void 0 : iT.text) && void 0 !== HT ? HT : "",
+       start: null !== (kT = null === iT || void 0 === iT ? void 0 : iT.start) && void 0 !== kT ? kT : 0,
+       end: null !== (jT = null === iT || void 0 === iT ? void 0 : iT.end) && void 0 !== jT ? jT : 0,
```

#### 594. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11487` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11487) · [Before (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11487)

```diff
-     Ip = cp, op = `${Sp=cp.includes(pp)&&!cp.includes(Op)?Op:pp}${Ip.slice(0,200).replace(/\\/g,"\\\\").replace('"'===Sp?/"/g:/'/g,`\\${Sp}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     MT = mT, zT = `${gT=mT.includes(TT)&&!mT.includes(WT)?WT:TT}${MT.slice(0,200).replace(/\\/g,"\\\\").replace('"'===gT?/"/g:/'/g,`\\${gT}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 595. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11496` → after: `L11496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11496) · [Before (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11496)

```diff
-     const cp = Math.min(3, (null !== (ip = String(pp).split(".")[1]) && void 0 !== ip ? ip : "").length);
+     const mT = Math.min(3, (null !== (UT = String(TT).split(".")[1]) && void 0 !== UT ? UT : "").length);
```

#### 596. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11511` → after: `L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11511) · [Before (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11511)

```diff
-   return "boolean" === typeof pp ? pp ? "on" : "off" : "number" === typeof pp ? String(pp) : pp.length > 20 ? `\u201c${pp.slice(0,19)}\u2026\u201d` : `\u201c${pp}\u201d`
+   return "boolean" === typeof TT ? TT ? "on" : "off" : "number" === typeof TT ? String(TT) : TT.length > 20 ? `\u201c${TT.slice(0,19)}\u2026\u201d` : `\u201c${TT}\u201d`
```

#### 597. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11516` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11516) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11516)

```diff
-   if (0 === pp.length) return `Before ${ip} settings`;
+   if (0 === TT.length) return `Before ${UT} settings`;
```

#### 598. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11518-L11520` → after: `L11518-L11520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11518-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11518-L11520) · [Before (L11518-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11518-L11520)

```diff
-     Op = pp.slice(0, cp).map((pp => `${pp.name} ${pp.from} \u2192 ${pp.to}`)),
-     op = pp.length > cp ? ` and ${pp.length-cp} more` : "";
-   return `Before ${ip} settings: ${Op.join(", ")}${op}`
+     WT = TT.slice(0, mT).map((TT => `${TT.name} ${TT.from} \u2192 ${TT.to}`)),
+     zT = TT.length > mT ? ` and ${TT.length-mT} more` : "";
+   return `Before ${UT} settings: ${WT.join(", ")}${zT}`
```

#### 599. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11528` → after: `L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11528) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11528)

```diff
-     ip.add(null !== (cp = null !== (Op = op[1]) && void 0 !== Op ? Op : op[2]) && void 0 !== cp ? cp : op[3])
+     UT.add(null !== (mT = null !== (WT = zT[1]) && void 0 !== WT ? WT : zT[2]) && void 0 !== mT ? mT : zT[3])
```

#### 600. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11571` → after: `L11571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11571) · [Before (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11571)

```diff
-     const Ip = null !== (op = xD.get(ip)) && void 0 !== op ? op : [];
+     const MT = null !== (zT = nj.get(UT)) && void 0 !== zT ? zT : [];
```

#### 601. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11623` → after: `L11623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11623) · [Before (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11623)

```diff
-   return null !== (ip = PD.get(pp)) && void 0 !== ip ? ip : "CONFIG" === pp ? "Settings" : void 0
+   return null !== (UT = Lj.get(TT)) && void 0 !== UT ? UT : "CONFIG" === TT ? "Settings" : void 0
```

#### 602. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11649)

```diff
-         name: void 0 === Ip ? null : null !== (op = dD(Ip)) && void 0 !== op ? op : null,
+         name: void 0 === MT ? null : null !== (zT = ij(MT)) && void 0 !== zT ? zT : null,
```

#### 603. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11701` → after: `L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11701) · [Before (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11701)

```diff
-   return xp.every((pp => wD(pp.removed) && wD(pp.added))) ? xp : [pp]
+   return nT.every((TT => cj(TT.removed) && cj(TT.added))) ? nT : [TT]
```

#### 604. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11753` → after: `L11753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11753) · [Before (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11753)

```diff
-   return Op ? null !== (ip = null !== (cp = Op[1]) && void 0 !== cp ? cp : Op[2]) && void 0 !== ip ? ip : Op[3] : void 0
+   return WT ? null !== (UT = null !== (mT = WT[1]) && void 0 !== mT ? mT : WT[2]) && void 0 !== UT ? UT : WT[3] : void 0
```

#### 605. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11781` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11781) · [Before (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11781)

```diff
-   return pp.length <= 1 ? null !== (ip = pp[0]) && void 0 !== ip ? ip : "" : `${pp.slice(0,-1).join(", ")} and ${pp[pp.length-1]}`
+   return TT.length <= 1 ? null !== (UT = TT[0]) && void 0 !== UT ? UT : "" : `${TT.slice(0,-1).join(", ")} and ${TT[TT.length-1]}`
```

#### 606. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11796` → after: `L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11796) · [Before (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11796)

```diff
-     return (0, vi.f)(ip, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, vi.m).map((pp => pp[0])).filter((pp => !qD.has(pp)))
+     return (0, ZU.e)(UT, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, ZU.n).map((TT => TT[0])).filter((TT => !dj.has(TT)))
```

#### 607. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11802` → after: `L11802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11802) · [Before (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11802)

```diff
-   const Op = (null !== (cp = pp.parts) && void 0 !== cp ? cp : []).map((pp => {
+   const WT = (null !== (mT = TT.parts) && void 0 !== mT ? mT : []).map((TT => {
```

#### 608. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11850` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11850) · [Before (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11850)

```diff
-               return cp ? [null !== (ip = cp[1]) && void 0 !== ip ? ip : cp[2]] : []
+               return mT ? [null !== (UT = mT[1]) && void 0 !== UT ? UT : mT[2]] : []
```

#### 609. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11854` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11854) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11854)

```diff
-               return Ap.has(pp) ? `"${ip}"` : ip
+               return lT.has(TT) ? `"${UT}"` : UT
```

#### 610. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11862)

```diff
-                   return null !== (ip = Lp.get(pp)) && void 0 !== ip ? ip : pp
+                   return null !== (UT = HT.get(TT)) && void 0 !== UT ? UT : TT
```

#### 611. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11865` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11865) · [Before (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11865)

```diff
-               ip = [Ip.length > 0 ? `${pp(Ip)} \u2014 changed` : "", Sp.length > 0 ? `${pp(Sp)} \u2014 added` : "", xp.length > 0 ? `${pp(xp)} \u2014 taken out` : ""].filter(Boolean),
+               UT = [MT.length > 0 ? `${TT(MT)} \u2014 changed` : "", gT.length > 0 ? `${TT(gT)} \u2014 added` : "", nT.length > 0 ? `${TT(nT)} \u2014 taken out` : ""].filter(Boolean),
```

#### 612. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11876` → after: `L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11876) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11876)

```diff
-           const yp = [Ip.length > 0 ? `changes ${kD(Ip.map(Pp))}` : "", Sp.length > 0 ? `adds ${kD(Sp.map(Pp))}` : "", xp.length > 0 ? `takes out ${kD(xp.map(Pp))}` : ""].filter(Boolean);
+           const BT = [MT.length > 0 ? `changes ${Yj(MT.map(LT))}` : "", gT.length > 0 ? `adds ${Yj(gT.map(LT))}` : "", nT.length > 0 ? `takes out ${Yj(nT.map(LT))}` : ""].filter(Boolean);
```

#### 613. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11892)

```diff
-                 named: `${cp} \u2014 changed`,
+                 named: `${mT} \u2014 changed`,
```

#### 614. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11898` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11898) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11898)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(pp)?`"${mD(ip)}"`:mD(ip)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(TT)?`"${Jj(UT)}"`:Jj(UT)}`,
```

#### 615. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11907)

```diff
-             named: 0 === pp.added.length ? `Takes out lines from line ${cp}` : `Changes line ${cp}`,
+             named: 0 === TT.added.length ? `Takes out lines from line ${mT}` : `Changes line ${mT}`,
```

#### 616. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11932` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11932) · [Before (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11932)

```diff
-           return Op[ip] && null !== (cp = pp.uses) && void 0 !== cp ? cp : []
+           return WT[UT] && null !== (mT = TT.uses) && void 0 !== mT ? mT : []
```

#### 617. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11936` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11936) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11936)

```diff
-           return Op[ip] || (null !== (cp = pp.uses) && void 0 !== cp ? cp : []).some((pp => op.has(pp)))
+           return WT[UT] || (null !== (mT = TT.uses) && void 0 !== mT ? mT : []).some((TT => zT.has(TT)))
```

#### 618. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11943` → after: `L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11943) · [Before (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11943)

```diff
-           const Op = (null !== (xp = pp.takesOut) && void 0 !== xp ? xp : []).filter((pp => ("CONFIG" === pp || xD.has(pp)) && !Sp.has(pp)));
+           const WT = (null !== (nT = TT.takesOut) && void 0 !== nT ? nT : []).filter((TT => ("CONFIG" === TT || nj.has(TT)) && !gT.has(TT)));
```

#### 619. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11947` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11947) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11947)

```diff
-           }, ip, cp) || void 0 !== pp.why && DD(cp, YD(pp.why)) || (null !== (Lp = pp.removedUses) && void 0 !== Lp ? Lp : []).some((pp => op.has(pp))) ? void 0 : "takesOut"
+           }, UT, mT) || void 0 !== TT.why && jj(mT, kj(TT.why)) || (null !== (HT = TT.removedUses) && void 0 !== HT ? HT : []).some((TT => zT.has(TT))) ? void 0 : "takesOut"
```

#### 620. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11966` → after: `L11966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11966) · [Before (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11966)

```diff
-         Dp = !op && Yp ? Yp : cp,
+         jT = !zT && kT ? kT : mT,
```

#### 621. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11983` → after: `L11983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11983) · [Before (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11983)

```diff
-       return `${null!==(ip=pp.also)&&void 0!==ip?ip:""}|${pp.label}|${null!==(cp=pp.detail)&&void 0!==cp?cp:""}`
+       return `${null!==(UT=TT.also)&&void 0!==UT?UT:""}|${TT.label}|${null!==(mT=TT.detail)&&void 0!==mT?mT:""}`
```

#### 622. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11992` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L11992) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L11992)

```diff
-       label: `${cp.label} (line ${ip})`
+       label: `${mT.label} (line ${UT})`
```

#### 623. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12014` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12014) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12014)

```diff
-   return !/^['\u2018]/.test(pp[0]) || !(0, vi.c)(pp, "\\w\u2019'")
+   return !/^['\u2018]/.test(TT[0]) || !(0, ZU.d)(TT, "\\w\u2019'")
```

#### 624. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12020` → after: `L12020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12020) · [Before (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12020)

```diff
-       return (0, vi.f)(pp, JD, BD).map((pp => [pp.index, pp.index + pp[0].length]))
+       return (0, ZU.e)(TT, Qj, sj).map((TT => [TT.index, TT.index + TT[0].length]))
```

#### 625. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12027` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12027) · [Before (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12027)

```diff
-   for (const Ip of pp.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${XD})\\b`, "g"))) {
+   for (const MT of TT.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${yj})\\b`, "g"))) {
```

#### 626. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12037` → after: `L12037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12037) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12037)

```diff
-         words: `${Ip[2]?"It also":"This"} ${ED[Ip[3]]}`
+         words: `${MT[2]?"It also":"This"} ${aj[MT[3]]}`
```

#### 627. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12039` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12039) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12039)

```diff
-       for (const pp of Lp.matchAll(new RegExp(`\\b(and|then|also) (${XD})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) cp(op + pp.index) || Op.push({
+       for (const TT of HT.matchAll(new RegExp(`\\b(and|then|also) (${yj})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) mT(zT + TT.index) || WT.push({
```

#### 628. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12042` → after: `L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12042) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12042)

```diff
-         words: `${pp[1]} ${ED[pp[2]]}`
+         words: `${TT[1]} ${aj[TT[2]]}`
```

#### 629. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12055` → after: `L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12055) · [Before (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12055)

```diff
-       words: `will ${op=Ip[1],"has"===op?"have":op.endsWith("ies")?`${op.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(op)?op.slice(0,-2):op.slice(0,-1)}`
+       words: `will ${zT=MT[1],"has"===zT?"have":zT.endsWith("ies")?`${zT.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(zT)?zT.slice(0,-2):zT.slice(0,-1)}`
```

#### 630. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12093` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12093) · [Before (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12093)

```diff
-   }, vp = `WorldCodeAiSetting-${ip}-${cp.key}`;
+   }, vT = `WorldCodeAiSetting-${UT}-${mT.key}`;
```

#### 631. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12121` → after: `L12121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12121) · [Before (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12121)

```diff
-         "aria-label": `Less ${Ap}`,
+         "aria-label": `Less ${lT}`,
```

#### 632. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12133)

```diff
-         value: null !== xp && void 0 !== xp ? xp : String(cp.value),
+         value: null !== nT && void 0 !== nT ? nT : String(mT.value),
```

#### 633. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12144` → after: `L12144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12144) · [Before (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12144)

```diff
-         "aria-label": `More ${Ap}`,
+         "aria-label": `More ${lT}`,
```

#### 634. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12232` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12232) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12232)

```diff
-   if (pp > 9e4) return `It starts in about ${Math.ceil(pp/6e4)} minutes.`;
+   if (TT > 9e4) return `It starts in about ${Math.ceil(TT/6e4)} minutes.`;
```

#### 635. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12235` → after: `L12235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12235) · [Before (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12235)

```diff
-   return ip >= 60 ? "It starts in about a minute." : `It starts in about ${ip} seconds.`
+   return UT >= 60 ? "It starts in about a minute." : `It starts in about ${UT} seconds.`
```

#### 636. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12237` → after: `L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12237) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12237)

```diff
- var gD = cp(1216);
+ var Gj = mT(1308);
```

#### 637. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12243` → after: `L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12243) · [Before (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12243)

```diff
-     cp.set(op, (null !== (Op = cp.get(op)) && void 0 !== Op ? Op : 0) + 1)
+     mT.set(zT, (null !== (WT = mT.get(zT)) && void 0 !== WT ? WT : 0) + 1)
```

#### 638. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12247` → after: `L12247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12247) · [Before (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12247)

```diff
-     const Op = null !== (ip = cp.get(pp)) && void 0 !== ip ? ip : 0;
+     const WT = null !== (UT = mT.get(TT)) && void 0 !== UT ? UT : 0;
```

#### 639. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12254` → after: `L12254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12254) · [Before (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12254)

```diff
-     if (null !== ip && void 0 !== ip && ip.aborted) return void Op((0, gD.e)(ip));
+     if (null !== UT && void 0 !== UT && UT.aborted) return void WT((0, Gj.i)(UT));
```

#### 640. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12257` → after: `L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12257) · [Before (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12257)

```diff
-       clearTimeout(op), Op((0, gD.e)(ip))
+       clearTimeout(zT), WT((0, Gj.i)(UT))
```

#### 641. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12274` → after: `L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12274) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12274)

```diff
-     const Yp = null !== (Sp = xp.find((pp => wI.freeAt(pp) <= Date.now()))) && void 0 !== Sp ? Sp : xp[0],
+     const kT = null !== (gT = nT.find((TT => LM.freeAt(TT) <= Date.now()))) && void 0 !== gT ? gT : nT[0],
```

#### 642. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12291` → after: `L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12291) · [Before (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12291)

```diff
-       return [...null !== (ip = pp.why) && void 0 !== ip ? ip : [], ...(null !== (cp = pp.parts) && void 0 !== cp ? cp : []).map((pp => pp.why)), ...GD(pp.before, pp.after)]
+       return [...null !== (UT = TT.why) && void 0 !== UT ? UT : [], ...(null !== (mT = TT.parts) && void 0 !== mT ? mT : []).map((TT => TT.why)), ...Nj(TT.before, TT.after)]
```

#### 643. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12302` → after: `L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12302) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12302)

```diff
-           Op = pp > 6e3 ? pp : Zo;
+           WT = TT > 6e3 ? TT : Sz;
```

#### 644. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12316-L12318` → after: `L12316-L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12316-L12318) · [Before (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12316-L12318)

```diff
-   const Op = ip && null !== (cp = pp[ip]) && void 0 !== cp ? cp : [],
-     op = Op.length >= 2 ? Op : Object.values(pp).flat();
-   return op.length < 2 ? "Usually under a minute." : `Usually ${function(pp){const ip=Math.max(5,5*Math.round(pp/5e3));if(ip<60)return`about ${ip} seconds`;const cp=10*Math.round(pp/1e4),Op=Math.floor(cp/60),op=cp%60,Ip=`${Op} ${1===Op?"minute":"minutes"}`;return 0===op?`about ${ … [truncated]
+   const WT = UT && null !== (mT = TT[UT]) && void 0 !== mT ? mT : [],
+     zT = WT.length >= 2 ? WT : Object.values(TT).flat();
+   return zT.length < 2 ? "Usually under a minute." : `Usually ${function(TT){const UT=Math.max(5,5*Math.round(TT/5e3));if(UT<60)return`about ${UT} seconds`;const mT=10*Math.round(TT/1e4),WT=Math.floor(mT/60),zT=mT%60,MT=`${WT} ${1===WT?"minute":"minutes"}`;return 0===zT?`about ${ … [truncated]
```

#### 645. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12320-L12322` → after: `L12320-L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12320-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12320-L12322) · [Before (L12320-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12320-L12322)

```diff
- var VD = cp(1505),
-   pA = cp(4941);
- var iA = cp(6666);
+ var Rj = mT(1593),
+   Tl = mT(4923);
+ var Ul = mT(6591);
```

#### 646. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12325` → after: `L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12325) · [Before (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12325)

```diff
-     LS.h.setItem(cA, !0)
+     zg.l.setItem(ml, !0)
```

#### 647. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12332)

```diff
-       } = await cp.e(125).then((() => cp(6660)));
+       } = await mT.e(125).then((() => mT(6589)));
```

#### 648. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12372` → after: `L12372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12372) · [Before (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12372)

```diff
-             return !(0, Up.e)(ip)
+             return !(0, ZT.f)(UT)
```

#### 649. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12401-L12405` → after: `L12401-L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12401-L12405) · [Before (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12401-L12405)

```diff
-           Dp = cp ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${to}` : "It is World Code: JavaScript that runs on the game server for one world.",
-           Ap = [...new Set(Fp(null !== (ip = Op[Sp]) && void 0 !== ip ? ip : "").map((pp => pp.name)))],
-           Pp = xp ? `, except to add a new callback or function to ${Sp} by its name with replace_function${Ap.length>0?` (not ${Ap.join(", ")}, which it has already)`:""}` : "",
-           Wp = Ip ? `\nYou can see only the open file's code: change only that file${Pp}, and never write the other files listed.\n` : "";
-         return `Help me with the code of my game in Bloxd, a voxel game. ${Dp}\n\n${pA.k} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
+           jT = mT ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${cz}` : "It is World Code: JavaScript that runs on the game server for one world.",
+           lT = [...new Set(KT(null !== (UT = WT[gT]) && void 0 !== UT ? UT : "").map((TT => TT.name)))],
+           LT = nT ? `, except to add a new callback or function to ${gT} by its name with replace_function${lT.length>0?` (not ${lT.join(", ")}, which it has already)`:""}` : "",
+           pT = MT ? `\nYou can see only the open file's code: change only that file${LT}, and never write the other files listed.\n` : "";
+         return `Help me with the code of my game in Bloxd, a voxel game. ${jT}\n\n${Tl.m} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
```

#### 650. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12410` → after: `L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12410) · [Before (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12410)

```diff
-       } = (0, pA.h)(ip),
+       } = (0, Tl.i)(UT),
```

#### 651. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12436)

```diff
-         !0 !== LS.h.getItem(cA) ? OA.ask().then((pp => {
+         !0 !== zg.l.getItem(ml) ? Wl.ask().then((TT => {
```

#### 652. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12444)

```diff
-         children: [oA[xp.how].hint, " ", (0, Sp.jsx)(iA.c, {
+         children: [zl[nT.how].hint, " ", (0, gT.jsx)(Ul.b, {
```

#### 653. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12466)

```diff
-         }), (0, Sp.jsx)(Dp.o, {
+         }), (0, gT.jsx)(jT.l, {
```

#### 654. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12476` → after: `L12476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12476) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12476)

```diff
-           children: (0, Sp.jsx)(Pp.d, {
+           children: (0, gT.jsx)(LT.c, {
```

#### 655. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12484-L12485` → after: `L12484-L12485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12484-L12485) · [Before (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12484-L12485)

```diff
- var SA = cp(104),
-   xA = cp(37132);
+ var gl = mT(102),
+   nl = mT(37020);
```

#### 656. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12502` → after: `L12502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12502) · [Before (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12502)

```diff
-   return `Moving to ${pp} code\u2026`
+   return `Moving to ${TT} code\u2026`
```

#### 657. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12506` → after: `L12506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12506) · [Before (L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12506)

```diff
-   return pp.fromLine === pp.toLine ? `line ${pp.fromLine}` : `lines ${pp.fromLine}-${pp.toLine}`
+   return TT.fromLine === TT.toLine ? `line ${TT.fromLine}` : `lines ${TT.fromLine}-${TT.toLine}`
```

#### 658. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12510-L12511` → after: `L12510-L12511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12510-L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/92.js#L12510-L12511) · [Before (L12510-L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/92.js#L12510-L12511)

```diff
-   const ip = pp.text.length > 4e3 ? `${pp.text.slice(0,4e3)}\n...` : pp.text;
-   return `The part I picked (${pp.path}, ${AA(pp)}):\n\`\`\`\n${ip}\n\`\`\``
+   const UT = TT.text.length > 4e3 ? `${TT.text.slice(0,4e3)}\n...` : TT.text;
+   return `The part I picked (${TT.path}, ${ll(TT)}):\n\`\`\`\n${UT}\n\`\`\``
```
