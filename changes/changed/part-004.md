# Changed — Bundle Modifications Report (Part 004 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `4 / 132` (**383** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2652 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1060. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14215-L14217` → after: `L14215-L14217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14215-L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14215-L14217) · [Before (L14215-L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14215-L14217)

```diff
-         function QK(bb, ub) {
-           const hb = new Set(ub.flatMap((ub => "" !== ub.category && bb.has(MK(ub.category)) ? [ub.category] : [])));
-           return 1 === hb.size ? [...hb][0] : null
+         function AG(dd, Jd) {
+           const kd = new Set(Jd.flatMap((Jd => "" !== Jd.category && dd.has(yG(Jd.category)) ? [Jd.category] : [])));
+           return 1 === kd.size ? [...kd][0] : null
```

#### 1061. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14220-L14222` → after: `L14220-L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14220-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14220-L14222) · [Before (L14220-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14220-L14222)

```diff
-         function RK(bb) {
-           const ub = "" === bb.category ? "" : ` in ${bb.category}`;
-           return null === bb.event ? `players spend time${ub}` : `\`${bb.event}\` events${ub} happen`
+         function dv(dd) {
+           const Jd = "" === dd.category ? "" : ` in ${dd.category}`;
+           return null === dd.event ? `players spend time${Jd}` : `\`${dd.event}\` events${Jd} happen`
```

#### 1062. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14225-L14226` → after: `L14225-L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14225-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14225-L14226) · [Before (L14225-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14225-L14226)

```diff
-         function bW(bb) {
-           return `x ${bb.x} to ${bb.x+no-1}, z ${bb.z} to ${bb.z+no-1}`
+         function Jv(dd) {
+           return `x ${dd.x} to ${dd.x+ae-1}, z ${dd.z} to ${dd.z+ae-1}`
```

#### 1063. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14228` → after: `L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14228) · [Before (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14228)

```diff
-         const uW = 4e3;
+         const kv = 4e3;
```

#### 1064. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14230-L14238` → after: `L14230-L14238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14230-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14230-L14238) · [Before (L14230-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14230-L14238)

```diff
-         function hW(bb) {
-           const ub = [];
-           let hb = 0;
-           for (const Bb of bb.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
-             const Ob = Bb.index + 1;
-             ub.push({
-               sentence: bb.slice(hb, Ob),
-               start: hb
-             }), hb = Ob
+         function pv(dd) {
+           const Jd = [];
+           let kd = 0;
+           for (const pd of dd.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
+             const Nd = pd.index + 1;
+             Jd.push({
+               sentence: dd.slice(kd, Nd),
+               start: kd
+             }), kd = Nd
```

#### 1065. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14240-L14243` → after: `L14240-L14243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14240-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14240-L14243) · [Before (L14240-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14240-L14243)

```diff
-           return hb < bb.length && ub.push({
-             sentence: bb.slice(hb),
-             start: hb
-           }), ub
+           return kd < dd.length && Jd.push({
+             sentence: dd.slice(kd),
+             start: kd
+           }), Jd
```

#### 1066. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14246-L14249` → after: `L14246-L14249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14246-L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14246-L14249) · [Before (L14246-L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14246-L14249)

```diff
-         function BW(bb, ub, hb) {
-           if (bb.length > uW || 0 === ub.length) return [];
-           const Bb = [...bb.matchAll(/`[^`\n]*`/g)].map((bb => [bb.index, bb.index + bb[0].length])),
-             Ob = [];
+         function Nv(dd, Jd, kd) {
+           if (dd.length > kv || 0 === Jd.length) return [];
+           const pd = [...dd.matchAll(/`[^`\n]*`/g)].map((dd => [dd.index, dd.index + dd[0].length])),
+             Nd = [];
```

#### 1067. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14251-L14252` → after: `L14251-L14252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14251-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14251-L14252) · [Before (L14251-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14251-L14252)

```diff
-               sentence: Gb,
-               start: Ub
+               sentence: Wd,
+               start: Pd
```

#### 1068. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14254-L14265` → after: `L14254-L14265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14254-L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14254-L14265) · [Before (L14254-L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14254-L14265)

```diff
-             of hW(bb)) {
-             const bb = fK(Gb);
-             if (0 === bb.length) continue;
-             const Lb = TK(Gb.replace(/\[\[[^\]\n]*\]\]/g, " ")),
-               Yb = mK.test(Gb),
-               Sb = QK(Lb, ub),
-               ab = Ub + Gb.replace(/[\s*_]+$/, "").length;
-             for (const Hb of bb) {
-               const bb = Ub + Hb.start;
-               if (Bb.some((ub => {
-                   let [hb, Bb] = ub;
-                   return bb >= hb && bb < Bb
+             of pv(dd)) {
+             const dd = VG(Wd);
+             if (0 === dd.length) continue;
+             const Zd = HG(Wd.replace(/\[\[[^\]\n]*\]\]/g, " ")),
+               gd = DG.test(Wd),
+               Cd = AG(Zd, Jd),
+               Kd = Pd + Wd.replace(/[\s*_]+$/, "").length;
+             for (const od of dd) {
+               const dd = Pd + od.start;
+               if (pd.some((Jd => {
+                   let [kd, pd] = Jd;
+                   return dd >= kd && dd < pd
```

#### 1069. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14267-L14272` → after: `L14267-L14272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14267-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14267-L14272) · [Before (L14267-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14267-L14272)

```diff
-               const wb = GW(Hb, Lb, Yb && !OW(Gb.slice(0, Hb.start)), Sb, ub, hb);
-               null !== wb && Ob.push({
-                 claim: wb,
-                 start: bb,
-                 end: Ub + Hb.end,
-                 at: ab
+               const ld = Pv(od, Zd, gd && !Wv(Wd.slice(0, od.start)), Cd, Jd, kd);
+               null !== ld && Nd.push({
+                 claim: ld,
+                 start: dd,
+                 end: Pd + od.end,
+                 at: Kd
```

#### 1070. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14276` → after: `L14276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14276) · [Before (L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14276)

```diff
-           return Ob
+           return Nd
```

#### 1071. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14279-L14281` → after: `L14279-L14281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14279-L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14279-L14281) · [Before (L14279-L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14279-L14281)

```diff
-         function OW(bb) {
-           const ub = IK.exec(bb);
-           return null !== ub && !mK.test(ub[0].replace(/^\S+/, ""))
+         function Wv(dd) {
+           const Jd = TG.exec(dd);
+           return null !== Jd && !DG.test(Jd[0].replace(/^\S+/, ""))
```

#### 1072. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14284` → after: `L14284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14284) · [Before (L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14284)

```diff
-         function GW(bb, ub, hb, Bb, Ob, Gb) {
+         function Pv(dd, Jd, kd, pd, Nd, Wd) {
```

#### 1073. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14286-L14293` → after: `L14286-L14293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14286-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14286-L14293) · [Before (L14286-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14286-L14293)

```diff
-             x: Ub,
-             z: Lb
-           } = bb, Yb = function(bb, ub, hb) {
-             return hb.flatMap((hb => {
-               const Bb = hb.spots.find((hb => kK(bb, ub, hb)));
-               return void 0 === Bb ? [] : [{
-                 layer: hb,
-                 share: Bb.share
+             x: Pd,
+             z: Zd
+           } = dd, gd = function(dd, Jd, kd) {
+             return kd.flatMap((kd => {
+               const pd = kd.spots.find((kd => zG(dd, Jd, kd)));
+               return void 0 === pd ? [] : [{
+                 layer: kd,
+                 share: pd.share
```

#### 1074. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14295-L14297` → after: `L14295-L14297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14295-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14295-L14297) · [Before (L14295-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14295-L14297)

```diff
-             })).sort(((bb, ub) => ub.share - bb.share))
-           }(Ub, Lb, Ob);
-           if (0 === Yb.length) return null === Gb || tK(Ub, Lb, Gb) ? null : {
+             })).sort(((dd, Jd) => Jd.share - dd.share))
+           }(Pd, Zd, Nd);
+           if (0 === gd.length) return null === Wd || jG(Pd, Zd, Wd) ? null : {
```

#### 1075. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14300` → after: `L14300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14300) · [Before (L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14300)

```diff
-           const Sb = Yb.filter((bb => {
+           const Cd = gd.filter((dd => {
```

#### 1076. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14302-L14304` → after: `L14302-L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14302-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14302-L14304) · [Before (L14302-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14302-L14304)

```diff
-               layer: ub
-             } = bb;
-             return !ub.isLoggingOnly
+               layer: Jd
+             } = dd;
+             return !Jd.isLoggingOnly
```

#### 1077. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14306` → after: `L14306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14306) · [Before (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14306)

```diff
-           if (0 === Sb.length) return {
+           if (0 === Cd.length) return {
```

#### 1078. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14308` → after: `L14308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14308) · [Before (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14308)

```diff
-             event: Yb[0].layer.event
+             event: gd[0].layer.event
```

#### 1079. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14310-L14311` → after: `L14310-L14311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14310-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14310-L14311) · [Before (L14310-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14310-L14311)

```diff
-           if (!hb) return null;
-           if (Sb.some((bb => {
+           if (!kd) return null;
+           if (Cd.some((dd => {
```

#### 1080. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14313-L14315` → after: `L14313-L14315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14313-L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14313-L14315) · [Before (L14313-L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14313-L14315)

```diff
-                 layer: hb
-               } = bb;
-               return null !== hb.event && cK(ub, hb)
+                 layer: kd
+               } = dd;
+               return null !== kd.event && wG(Jd, kd)
```

#### 1081. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14317-L14320` → after: `L14317-L14320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14317-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14317-L14320) · [Before (L14317-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14317-L14320)

```diff
-           const ab = Ob.filter((bb => bb.isDeath && !bb.isLoggingOnly)),
-             Hb = ab.filter((bb => cK(ub, bb))),
-             wb = Hb.length > 0 ? Hb : ab;
-           if (Sb.some((bb => {
+           const Kd = Nd.filter((dd => dd.isDeath && !dd.isLoggingOnly)),
+             od = Kd.filter((dd => wG(Jd, dd))),
+             ld = od.length > 0 ? od : Kd;
+           if (Cd.some((dd => {
```

#### 1082. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14322-L14324` → after: `L14322-L14324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14322-L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14322-L14324) · [Before (L14322-L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14322-L14324)

```diff
-                 layer: ub
-               } = bb;
-               return wb.includes(ub)
+                 layer: Jd
+               } = dd;
+               return ld.includes(Jd)
```

#### 1083. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14326-L14329` → after: `L14326-L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14326-L14329) · [Before (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14326-L14329)

```diff
-           const Zb = Sb[0].layer,
-             Xb = (bb, ub) => null === ub ? [] : bb.filter((bb => bb.category === ub)),
-             pb = [Xb(wb, Bb), Xb(wb, Zb.category), wb].find((bb => bb.length > 0)),
-             ob = void 0 === pb ? null : pb.reduce(((bb, ub) => ub.total > bb.total ? ub : bb));
+           const Qd = Cd[0].layer,
+             Ld = (dd, Jd) => null === Jd ? [] : dd.filter((dd => dd.category === Jd)),
+             Od = [Ld(ld, pd), Ld(ld, Qd.category), ld].find((dd => dd.length > 0)),
+             ed = void 0 === Od ? null : Od.reduce(((dd, Jd) => Jd.total > dd.total ? Jd : dd));
```

#### 1084. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14332-L14336` → after: `L14332-L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14332-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14332-L14336) · [Before (L14332-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14332-L14336)

```diff
-             other: RK(Zb),
-             subject: null === ob ? null : {
-               event: ob.event,
-               category: ob.category,
-               text: (Ab = ob.spots[0], lb = bb.isRange, lb ? bW(Ab) : `x ${Ab.x}, z ${Ab.z}`),
+             other: dv(Qd),
+             subject: null === ed ? null : {
+               event: ed.event,
+               category: ed.category,
+               text: (Rd = ed.spots[0], Id = dd.isRange, Id ? Jv(Rd) : `x ${Rd.x}, z ${Rd.z}`),
```

#### 1085. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14338-L14339` → after: `L14338-L14339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14338-L14339) · [Before (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14338-L14339)

```diff
-                 x: ob.spots[0].x,
-                 z: ob.spots[0].z
+                 x: ed.spots[0].x,
+                 z: ed.spots[0].z
```

#### 1086. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14343` → after: `L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14343) · [Before (L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14343)

```diff
-           var Ab, lb
+           var Rd, Id
```

#### 1087. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14346-L14349` → after: `L14346-L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14346-L14349) · [Before (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14346-L14349)

```diff
-         function UW(bb) {
-           var ub, hb, Bb;
-           const Ob = null === (ub = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(bb)) || void 0 === ub ? void 0 : ub[1];
-           return null !== (hb = null !== Ob && void 0 !== Ob ? Ob : null === (Bb = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(bb)) || void 0 === Bb ? void 0 : Bb[0]) && void 0 !== hb ? hb : nul … [truncated]
+         function Zv(dd) {
+           var Jd, kd, pd;
+           const Nd = null === (Jd = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(dd)) || void 0 === Jd ? void 0 : Jd[1];
+           return null !== (kd = null !== Nd && void 0 !== Nd ? Nd : null === (pd = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(dd)) || void 0 === pd ? void 0 : pd[0]) && void 0 !== kd ? kd : nul … [truncated]
```

#### 1088. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14352-L14354` → after: `L14352-L14354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14352-L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14352-L14354) · [Before (L14352-L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14352-L14354)

```diff
-         function LW(bb, ub, hb, Bb) {
-           if (0 === ub.length) return {
-             markdown: bb,
+         function gv(dd, Jd, kd, pd) {
+           if (0 === Jd.length) return {
+             markdown: dd,
```

#### 1089. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14357-L14367` → after: `L14357-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14357-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14357-L14367) · [Before (L14357-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14357-L14367)

```diff
-           const Ob = [],
-             Gb = bK(bb, (bb => function(bb, ub, hb, Bb, Ob) {
-               const Gb = BW(bb, ub, hb);
-               if (0 === Gb.length) return bb;
-               let Ub = bb;
-               const Lb = [],
-                 Yb = (bb, ub, hb) => {
-                   Lb.push({
-                     start: bb,
-                     shift: hb.length - (ub - bb)
-                   }), Ub = Ub.slice(0, bb) + hb + Ub.slice(ub)
+           const Nd = [],
+             Wd = JG(dd, (dd => function(dd, Jd, kd, pd, Nd) {
+               const Wd = Nv(dd, Jd, kd);
+               if (0 === Wd.length) return dd;
+               let Pd = dd;
+               const Zd = [],
+                 gd = (dd, Jd, kd) => {
+                   Zd.push({
+                     start: dd,
+                     shift: kd.length - (Jd - dd)
+                   }), Pd = Pd.slice(0, dd) + kd + Pd.slice(Jd)
```

#### 1090. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14369-L14370` → after: `L14369-L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14369-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14369-L14370) · [Before (L14369-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14369-L14370)

```diff
-               for (const Zb of [...Gb].reverse()) {
-                 var Sb, ab, Hb;
+               for (const Qd of [...Wd].reverse()) {
+                 var Cd, Kd, od;
```

#### 1091. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14372-L14377` → after: `L14372-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14372-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14372-L14377) · [Before (L14372-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14372-L14377)

```diff
-                   claim: bb
-                 } = Zb, ub = Ub.slice(Zb.end), hb = null !== (Sb = null === (ab = VK.exec(ub)) || void 0 === ab ? void 0 : ab[0]) && void 0 !== Sb ? Sb : "", Gb = FK.exec(ub.slice(hb.length)), Xb = null !== (Hb = null === Gb || void 0 === Gb ? void 0 : Gb[0]) && void 0 !== Hb ? H … [truncated]
-                 if ("otherLayer" === bb.kind) {
-                   var wb;
-                   if (null === bb.subject) continue;
-                   const ub = Lb.reduce(((bb, ub) => {
+                   claim: dd
+                 } = Qd, Jd = Pd.slice(Qd.end), kd = null !== (Cd = null === (Kd = uG.exec(Jd)) || void 0 === Kd ? void 0 : Kd[0]) && void 0 !== Cd ? Cd : "", Wd = tG.exec(Jd.slice(kd.length)), Ld = null !== (od = null === Wd || void 0 === Wd ? void 0 : Wd[0]) && void 0 !== od ? o … [truncated]
+                 if ("otherLayer" === dd.kind) {
+                   var ld;
+                   if (null === dd.subject) continue;
+                   const Jd = Zd.reduce(((dd, Jd) => {
```

#### 1092. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14379-L14403` → after: `L14379-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14379-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14379-L14403) · [Before (L14379-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14379-L14403)

```diff
-                         start: hb,
-                         shift: Bb
-                       } = ub;
-                       return hb < Zb.at ? bb + Bb : bb
-                     }), Zb.at),
-                     hb = Ub.slice(0, ub),
-                     Bb = hb.slice(0, Zb.start) + hb.slice(Zb.end + pb);
-                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(Bb) || qK.test(Bb)) continue;
-                   const Sb = "" === bb.subject.category ? "" : ` in ${bb.subject.category}`,
-                     ab = void 0 !== (null === Gb || void 0 === Gb ? void 0 : Gb[3]),
-                     Hb = null === Gb ? "" : `${null!==(wb=Gb[1])&&void 0!==wb?wb:""}${ab?" (":", "}where the most \`${bb.subject.event}\` events${Sb} happen${ab&&Gb[0].endsWith(")")?")":""}`,
-                     Xb = null !== Gb && !ab && /^\s+[a-z]/i.test(Ub.slice(Zb.end + pb)),
-                     ob = bb.subject.text + Hb + (Xb ? "," : "");
-                   Ob.push({
-                     from: Ub.slice(Zb.start, Zb.end + pb),
-                     to: ob,
- ... (9 more removed lines; see GitHub link above)
+                         start: kd,
+                         shift: pd
+                       } = Jd;
+                       return kd < Qd.at ? dd + pd : dd
+                     }), Qd.at),
+                     kd = Pd.slice(0, Jd),
+                     pd = kd.slice(0, Qd.start) + kd.slice(Qd.end + Od);
+                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(pd) || cG.test(pd)) continue;
+                   const Cd = "" === dd.subject.category ? "" : ` in ${dd.subject.category}`,
+                     Kd = void 0 !== (null === Wd || void 0 === Wd ? void 0 : Wd[3]),
+                     od = null === Wd ? "" : `${null!==(ld=Wd[1])&&void 0!==ld?ld:""}${Kd?" (":", "}where the most \`${dd.subject.event}\` events${Cd} happen${Kd&&Wd[0].endsWith(")")?")":""}`,
+                     Ld = null !== Wd && !Kd && /^\s+[a-z]/i.test(Pd.slice(Qd.end + Od)),
+                     ed = dd.subject.text + od + (Ld ? "," : "");
+                   Nd.push({
+                     from: Pd.slice(Qd.start, Qd.end + Od),
+                     to: ed,
+ ... (9 more added lines; see GitHub link above)
```

#### 1093. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14406` → after: `L14406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14406) · [Before (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14406)

```diff
-                   }), Yb(ub, Zb.end + pb + hb, "")
+                   }), gd(Jd, Qd.end + Od + kd, "")
```

#### 1094. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14409-L14410` → after: `L14409-L14410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14409-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14409-L14410) · [Before (L14409-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14409-L14410)

```diff
-               return Ub
-             }(bb, ub, hb, Bb, Ob)));
+               return Pd
+             }(dd, Jd, kd, pd, Nd)));
```

#### 1095. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14412-L14413` → after: `L14412-L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14412-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14412-L14413) · [Before (L14412-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14412-L14413)

```diff
-             markdown: 0 === Ob.length ? bb : Gb,
-             repairs: Ob
+             markdown: 0 === Nd.length ? dd : Wd,
+             repairs: Nd
```

#### 1096. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14416` → after: `L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14416) · [Before (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14416)

```diff
-         const YW = "\\d{1,3}(?:,\\d{3})+|\\d+", SW = new RegExp(`\\bof (${YW}) players(?: \\([^)]*\\))? at (.+?), (${YW}) reached (.+?)(?: or a later one)? \\(`, "g"), aW = new RegExp(`^- (.+?) \u2192 (.+?): (${YW}) of (${YW}) players\\b`), HW = /\bsince logging began\b|\ball[- ] … [truncated]
+         const Cv = "\\d{1,3}(?:,\\d{3})+|\\d+", Kv = new RegExp(`\\bof (${Cv}) players(?: \\([^)]*\\))? at (.+?), (${Cv}) reached (.+?)(?: or a later one)? \\(`, "g"), ov = new RegExp(`^- (.+?) \u2192 (.+?): (${Cv}) of (${Cv}) players\\b`), lv = /\bsince logging began\b|\ball[- ] … [truncated]
```

#### 1097. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14418-L14419` → after: `L14418-L14419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14418-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14418-L14419) · [Before (L14418-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14418-L14419)

```diff
-         function XW(bb) {
-           return Number(bb.replace(/,/g, ""))
+         function Ov(dd) {
+           return Number(dd.replace(/,/g, ""))
```

#### 1098. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14422-L14423` → after: `L14422-L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14422-L14423) · [Before (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14422-L14423)

```diff
-         function pW(bb) {
-           return dY(bb).trim().toLowerCase()
+         function ev(dd) {
+           return ig(dd).trim().toLowerCase()
```

#### 1099. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14426-L14431` → after: `L14426-L14431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14426-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14426-L14431) · [Before (L14426-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14426-L14431)

```diff
-         function oW(bb, ub) {
-           var hb, Bb, Ob, Gb, Ub;
-           const Lb = null === (hb = bb[ub.event]) || void 0 === hb ? void 0 : hb.trim(),
-             Yb = -1 === ub.value ? "" : null !== (Bb = null === (Ob = bb[ub.value]) || void 0 === Ob ? void 0 : Ob.trim()) && void 0 !== Bb ? Bb : "",
-             Sb = new RegExp(`^(${YW})\\b`).exec(null !== (Gb = null === (Ub = bb[ub.players]) || void 0 === Ub ? void 0 : Ub.trim()) && void 0 !== Gb ? Gb : "");
-           return void 0 === Lb || "" === Lb || null === Sb ? null : [XW(Sb[1]), "" === Yb ? Lb : `${Lb}: ${Yb}`]
+         function Rv(dd, Jd) {
+           var kd, pd, Nd, Wd, Pd;
+           const Zd = null === (kd = dd[Jd.event]) || void 0 === kd ? void 0 : kd.trim(),
+             gd = -1 === Jd.value ? "" : null !== (pd = null === (Nd = dd[Jd.value]) || void 0 === Nd ? void 0 : Nd.trim()) && void 0 !== pd ? pd : "",
+             Cd = new RegExp(`^(${Cv})\\b`).exec(null !== (Wd = null === (Pd = dd[Jd.players]) || void 0 === Pd ? void 0 : Pd.trim()) && void 0 !== Wd ? Wd : "");
+           return void 0 === Zd || "" === Zd || null === Cd ? null : [Ov(Cd[1]), "" === gd ? Zd : `${Zd}: ${gd}`]
```

#### 1100. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14434-L14441` → after: `L14434-L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14434-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14434-L14441) · [Before (L14434-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14434-L14441)

```diff
-         function AW(bb) {
-           const ub = new Map,
-             hb = new Map,
-             Bb = new Set,
-             Ob = (bb, ub) => {
-               var Bb;
-               const Ob = null !== (Bb = hb.get(bb)) && void 0 !== Bb ? Bb : [];
-               Ob.includes(ub) || hb.set(bb, [...Ob, ub])
+         function Iv(dd) {
+           const Jd = new Map,
+             kd = new Map,
+             pd = new Set,
+             Nd = (dd, Jd) => {
+               var pd;
+               const Nd = null !== (pd = kd.get(dd)) && void 0 !== pd ? pd : [];
+               Nd.includes(Jd) || kd.set(dd, [...Nd, Jd])
```

#### 1101. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14443-L14444` → after: `L14443-L14444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14443-L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14443-L14444) · [Before (L14443-L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14443-L14444)

```diff
-             Gb = bb => {
-               ub.set(`${pW(bb.from)} > ${pW(bb.to)}`, bb)
+             Wd = dd => {
+               Jd.set(`${ev(dd.from)} > ${ev(dd.to)}`, dd)
```

#### 1102. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14446-L14457` → after: `L14446-L14457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14446-L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14446-L14457) · [Before (L14446-L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14446-L14457)

```diff
-           let Ub = null;
-           for (const Lb of bb.split(/\r?\n/)) {
-             for (const ub of (0, wU.f)(Lb, ZW, wU.p)) Bb.add(Number(ub[1]));
-             if (Lb.startsWith("|")) {
-               const bb = Lb.split("|"),
-                 ub = bb.findIndex((bb => HW.test(bb))),
-                 hb = bb.findIndex((bb => /^\s*event\s*$/i.test(bb)));
-               if (-1 !== ub && -1 !== hb) {
-                 Ub = {
-                   event: hb,
-                   value: bb.findIndex((bb => /^\s*value\s*$/i.test(bb))),
-                   players: ub
+           let Pd = null;
+           for (const Zd of dd.split(/\r?\n/)) {
+             for (const Jd of (0, OP.f)(Zd, Lv, OP.q)) pd.add(Number(Jd[1]));
+             if (Zd.startsWith("|")) {
+               const dd = Zd.split("|"),
+                 Jd = dd.findIndex((dd => lv.test(dd))),
+                 kd = dd.findIndex((dd => /^\s*event\s*$/i.test(dd)));
+               if (-1 !== Jd && -1 !== kd) {
+                 Pd = {
+                   event: kd,
+                   value: dd.findIndex((dd => /^\s*value\s*$/i.test(dd))),
+                   players: Jd
```

#### 1103. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14461-L14462` → after: `L14461-L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14461-L14462) · [Before (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14461-L14462)

```diff
-               const Bb = null === Ub ? null : oW(bb, Ub);
-               null !== Bb && Ob(...Bb);
+               const pd = null === Pd ? null : Rv(dd, Pd);
+               null !== pd && Nd(...pd);
```

#### 1104. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14465-L14471` → after: `L14465-L14471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14465-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14465-L14471) · [Before (L14465-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14465-L14471)

```diff
-             Ub = null;
-             const bb = aW.exec(Lb);
-             null !== bb && Gb({
-               from: bb[1],
-               to: bb[2],
-               fromPlayers: XW(bb[4]),
-               toPlayers: XW(bb[3])
+             Pd = null;
+             const dd = ov.exec(Zd);
+             null !== dd && Wd({
+               from: dd[1],
+               to: dd[2],
+               fromPlayers: Ov(dd[4]),
+               toPlayers: Ov(dd[3])
```

#### 1105. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14473-L14477` → after: `L14473-L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14473-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14473-L14477) · [Before (L14473-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14473-L14477)

```diff
-             for (const ub of Lb.matchAll(SW)) Gb({
-               from: ub[2],
-               to: ub[4],
-               fromPlayers: XW(ub[1]),
-               toPlayers: XW(ub[3])
+             for (const Jd of Zd.matchAll(Kv)) Wd({
+               from: Jd[2],
+               to: Jd[4],
+               fromPlayers: Ov(Jd[1]),
+               toPlayers: Ov(Jd[3])
```

#### 1106. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14479-L14481` → after: `L14479-L14481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14479-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14479-L14481) · [Before (L14479-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14479-L14481)

```diff
-             for (const ub of (0, wU.z)(Lb, /\s+(?=[A-Z])/g, (0, wU.r)(".;")))
-               if (HW.test(ub))
-                 for (const bb of ub.matchAll(wW)) Ob(XW(bb[2]), bb[1].trim())
+             for (const Jd of (0, OP.u)(Zd, /\s+(?=[A-Z])/g, (0, OP.r)(".;")))
+               if (lv.test(Jd))
+                 for (const dd of Jd.matchAll(Qv)) Nd(Ov(dd[2]), dd[1].trim())
```

#### 1107. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14484-L14486` → after: `L14484-L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14484-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14484-L14486) · [Before (L14484-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14484-L14486)

```diff
-             steps: [...ub.values()],
-             allTimeEvents: hb,
-             ratios: Bb
+             steps: [...Jd.values()],
+             allTimeEvents: kd,
+             ratios: pd
```

#### 1108. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14490-L14496` → after: `L14490-L14496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14490-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14490-L14496) · [Before (L14490-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14490-L14496)

```diff
-         function lW(bb) {
-           const ub = dY(bb).trim(),
-             hb = ub.lastIndexOf(": ");
-           if (hb <= 0) return [ub];
-           const Bb = ub.slice(0, hb),
-             Ob = ub.slice(hb + 2);
-           return /^-?\d+$/.test(Ob) ? [ub, ...(0, HU.J)(Bb, Ob)] : /[a-z]{3}/i.test(Ob) ? [ub, Ob] : [ub]
+         function Gv(dd) {
+           const Jd = ig(dd).trim(),
+             kd = Jd.lastIndexOf(": ");
+           if (kd <= 0) return [Jd];
+           const pd = Jd.slice(0, kd),
+             Nd = Jd.slice(kd + 2);
+           return /^-?\d+$/.test(Nd) ? [Jd, ...(0, LP.L)(pd, Nd)] : /[a-z]{3}/i.test(Nd) ? [Jd, Nd] : [Jd]
```

#### 1109. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14499-L14500` → after: `L14499-L14500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14499-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14499-L14500) · [Before (L14499-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14499-L14500)

```diff
-         function KW(bb, ub) {
-           return lW(ub).some((ub => (0, wU.f)(bb, new RegExp(`\`?${(0,HU.H)(ub)}(?![\\w]|\\.\\d)`, "i"), (0, wU.j)("\\w")).length > 0))
+         function vv(dd, Jd) {
+           return Gv(Jd).some((Jd => (0, OP.f)(dd, new RegExp(`\`?${(0,LP.G)(Jd)}(?![\\w]|\\.\\d)`, "i"), (0, OP.k)("\\w")).length > 0))
```

#### 1110. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14502` → after: `L14502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14502) · [Before (L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14502)

```diff
-         const WW = new RegExp(`(${YW})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), CW = (0, wU.j)("\\w.,:%$#-"), dW = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${YW})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), rW = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
+         const xv = new RegExp(`(${Cv})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), qv = (0, OP.k)("\\w.,:%$#-"), Bv = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${Cv})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), sv = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
```

#### 1111. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14504-L14511` → after: `L14504-L14511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14504-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14504-L14511) · [Before (L14504-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14504-L14511)

```diff
-         function nW(bb, ub, hb, Bb) {
-           return 0 === ub.size || 0 === hb.steps.length ? [] : (0, wU.f)(bb, WW, CW).flatMap((Ob => {
-             const Gb = Ob.index,
-               Ub = Gb + Ob[0].length,
-               Lb = XW(Ob[1]),
-               Yb = Bb.every((bb => {
-                 let [ub, hb] = bb;
-                 return hb <= Gb || ub >= Ub
+         function av(dd, Jd, kd, pd) {
+           return 0 === Jd.size || 0 === kd.steps.length ? [] : (0, OP.f)(dd, xv, qv).flatMap((Nd => {
+             const Wd = Nd.index,
+               Pd = Wd + Nd[0].length,
+               Zd = Ov(Nd[1]),
+               gd = pd.every((dd => {
+                 let [Jd, kd] = dd;
+                 return kd <= Wd || Jd >= Pd
```

#### 1112. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14513-L14519` → after: `L14513-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14513-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14513-L14519) · [Before (L14513-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14513-L14519)

```diff
-               Sb = hb.allTimeEvents.get(Lb);
-             if (!Yb || !ub.has(Lb) || void 0 === Sb) return [];
-             const ab = bb.slice(...(0, HU.N)(bb, Gb)),
-               Hb = new Set((0, wU.f)(ab, WW, CW).flatMap((bb => {
-                 var Bb;
-                 const Ob = XW(bb[1]);
-                 return ub.has(Ob) ? (null !== (Bb = hb.allTimeEvents.get(Ob)) && void 0 !== Bb ? Bb : []).map(pW) : []
+               Cd = kd.allTimeEvents.get(Zd);
+             if (!gd || !Jd.has(Zd) || void 0 === Cd) return [];
+             const Kd = dd.slice(...(0, LP.M)(dd, Wd)),
+               od = new Set((0, OP.f)(Kd, xv, qv).flatMap((dd => {
+                 var pd;
+                 const Nd = Ov(dd[1]);
+                 return Jd.has(Nd) ? (null !== (pd = kd.allTimeEvents.get(Nd)) && void 0 !== pd ? pd : []).map(ev) : []
```

#### 1113. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14521-L14524` → after: `L14521-L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14521-L14524) · [Before (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14521-L14524)

```diff
-               wb = new Set(Sb.map(pW)),
-               Zb = hb.steps.find((bb => {
-                 const ub = KW(ab, bb.to) && !Hb.has(pW(bb.to));
-                 return wb.has(pW(bb.from)) && (ub || (0, wU.f)(ab, new RegExp(`${bb.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, wU.j)("\\d,")).length > 0)
+               ld = new Set(Cd.map(ev)),
+               Qd = kd.steps.find((dd => {
+                 const Jd = vv(Kd, dd.to) && !od.has(ev(dd.to));
+                 return ld.has(ev(dd.from)) && (Jd || (0, OP.f)(Kd, new RegExp(`${dd.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, OP.k)("\\d,")).length > 0)
```

#### 1114. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14526-L14529` → after: `L14526-L14529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14526-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14526-L14529) · [Before (L14526-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14526-L14529)

```diff
-             if (void 0 !== Zb) return Zb.fromPlayers === Lb ? [] : [{
-               start: Gb,
-               end: Ub,
-               text: Zb.fromPlayers.toLocaleString("en-US")
+             if (void 0 !== Qd) return Qd.fromPlayers === Zd ? [] : [{
+               start: Wd,
+               end: Pd,
+               text: Qd.fromPlayers.toLocaleString("en-US")
```

#### 1115. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14531-L14543` → after: `L14531-L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14531-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14531-L14543) · [Before (L14531-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14531-L14543)

```diff
-             const Xb = hb.steps.some((bb => [bb.from, bb.to].some((bb => function(bb, ub) {
-                 return lW(ub).some((ub => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,HU.H)(ub)}(?![\\w]|\\.\\d)`, "i").test(bb)))
-               }(ab, bb))))),
-               pb = hb.steps.some((bb => [bb.from, bb.to].some((bb => Hb.has(pW(bb)) && KW(ab, bb)))));
-             if (!Xb || pb || /\bthan\b/i.test(ab)) return [];
-             const ob = function(bb, ub, hb) {
-               const Bb = bb.lastIndexOf("(", ub),
-                 Ob = bb.indexOf(")", hb);
-               if (-1 !== Bb && -1 !== Ob && !bb.slice(Bb, Ob).includes(")")) {
-                 const ub = dW.exec(bb.slice(0, Ob + 1));
-                 if (null !== ub && ub.index <= Bb && ub.index + ub[0].length === Ob + 1) return {
-                   start: ub.index,
-                   end: Ob + 1,
+             const Ld = kd.steps.some((dd => [dd.from, dd.to].some((dd => function(dd, Jd) {
+                 return Gv(Jd).some((Jd => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,LP.G)(Jd)}(?![\\w]|\\.\\d)`, "i").test(dd)))
+               }(Kd, dd))))),
+               Od = kd.steps.some((dd => [dd.from, dd.to].some((dd => od.has(ev(dd)) && vv(Kd, dd)))));
+             if (!Ld || Od || /\bthan\b/i.test(Kd)) return [];
+             const ed = function(dd, Jd, kd) {
+               const pd = dd.lastIndexOf("(", Jd),
+                 Nd = dd.indexOf(")", kd);
+               if (-1 !== pd && -1 !== Nd && !dd.slice(pd, Nd).includes(")")) {
+                 const Jd = Bv.exec(dd.slice(0, Nd + 1));
+                 if (null !== Jd && Jd.index <= pd && Jd.index + Jd[0].length === Nd + 1) return {
+                   start: Jd.index,
+                   end: Nd + 1,
```

#### 1116. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14547-L14556` → after: `L14547-L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14547-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14547-L14556) · [Before (L14547-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14547-L14556)

```diff
-               if (!rW.test(bb.slice(hb))) return null;
-               const Gb = jW.exec(bb.slice(0, ub)),
-                 Ub = null === Gb ? ub : Gb.index,
-                 Lb = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(bb.slice(0, Ub)),
-                 Yb = bb.slice(hb).replace(/^\s+(?:of\s+)?/i, ""),
-                 Sb = bb.length - Yb.length;
-               return Lb ? {
-                 start: Ub,
-                 end: Sb + 1,
-                 text: Yb.charAt(0).toUpperCase()
+               if (!sv.test(dd.slice(kd))) return null;
+               const Wd = iv.exec(dd.slice(0, Jd)),
+                 Pd = null === Wd ? Jd : Wd.index,
+                 Zd = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(dd.slice(0, Pd)),
+                 gd = dd.slice(kd).replace(/^\s+(?:of\s+)?/i, ""),
+                 Cd = dd.length - gd.length;
+               return Zd ? {
+                 start: Pd,
+                 end: Cd + 1,
+                 text: gd.charAt(0).toUpperCase()
```

#### 1117. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14558-L14559` → after: `L14558-L14559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14558-L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14558-L14559) · [Before (L14558-L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14558-L14559)

```diff
-                 start: Ub,
-                 end: Sb,
+                 start: Pd,
+                 end: Cd,
```

#### 1118. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14562-L14563` → after: `L14562-L14563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14562-L14563) · [Before (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14562-L14563)

```diff
-             }(bb, Gb, Ub);
-             return null === ob ? [] : [ob]
+             }(dd, Wd, Pd);
+             return null === ed ? [] : [ed]
```

#### 1119. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14566` → after: `L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14566) · [Before (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14566)

```diff
-         const DW = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, xW = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
+         const Mv = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, Fv = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
```

#### 1120. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14568-L14575` → after: `L14568-L14575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14568-L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14568-L14575) · [Before (L14568-L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14568-L14575)

```diff
-         function zW(bb, ub, hb) {
-           return 0 === ub.ratios.size ? [] : (0, wU.f)(bb, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, wU.p).flatMap((Bb => {
-             var Ob;
-             const Gb = Bb.index + Bb[0].length,
-               Ub = DW.exec(bb.slice(Gb)),
-               Lb = hb.every((bb => {
-                 let [ub, hb] = bb;
-                 return hb <= Bb.index || ub >= Gb
+         function Yv(dd, Jd, kd) {
+           return 0 === Jd.ratios.size ? [] : (0, OP.f)(dd, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, OP.q).flatMap((pd => {
+             var Nd;
+             const Wd = pd.index + pd[0].length,
+               Pd = Mv.exec(dd.slice(Wd)),
+               Zd = kd.every((dd => {
+                 let [Jd, kd] = dd;
+                 return kd <= pd.index || Jd >= Wd
```

#### 1121. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14577-L14582` → after: `L14577-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14577-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14577-L14582) · [Before (L14577-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14577-L14582)

```diff
-             if (null === Ub || !Lb || !ub.ratios.has(Number(Bb[1]))) return [];
-             const Yb = null !== (Ob = Ub[2]) && void 0 !== Ob ? Ob : "";
-             return ("" === Yb || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(Yb)) && ("" !== Yb || xW.test(bb.slice(Math.max(0, Bb.index - 80), Bb.index))) ? [{
-               start: Gb,
-               end: Gb + Ub[0].length,
-               text: `${Ub[1]}as many${Yb} as`
+             if (null === Pd || !Zd || !Jd.ratios.has(Number(pd[1]))) return [];
+             const gd = null !== (Nd = Pd[2]) && void 0 !== Nd ? Nd : "";
+             return ("" === gd || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(gd)) && ("" !== gd || Fv.test(dd.slice(Math.max(0, pd.index - 80), pd.index))) ? [{
+               start: Wd,
+               end: Wd + Pd[0].length,
+               text: `${Pd[1]}as many${gd} as`
```

#### 1122. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14586-L14602` → after: `L14586-L14602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14586-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14586-L14602) · [Before (L14586-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14586-L14602)

```diff
-         const gW = 50, iW = HH, vW = 3, tW = .1, JW = .05, eW = 2, NW = 7, sW = 7, MW = 14, mW = 7, IW = 2;
- 
-         function PW(bb) {
-           var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb;
-           const Zb = oo(bb),
-             Xb = bb.stats,
-             pb = null === Xb ? null : yu(Xb.rankingWindow),
-             ob = null !== (ub = null === (hb = bb.baseline) || void 0 === hb ? void 0 : hb.rankingWindow) && void 0 !== ub ? ub : null,
-             Ab = null !== (Bb = null === Xb || void 0 === Xb ? void 0 : Xb.sessionDurationHistogram) && void 0 !== Bb ? Bb : null,
-             lb = null === Ab ? null : eu(Ab.sessionCounts, Ab.maxBucketMinute),
-             Kb = Zb.biggestProblem,
-             Wb = (null !== (Ob = null === (Gb = Zb.flow) || void 0 === Gb ? void 0 : Gb.steps) && void 0 !== Ob ? Ob : []).flatMap((bb => bb.isPastNearer ? [] : [{
-               from: dY(bb.from),
-               to: dY(bb.to),
-               fromPlayers: bb.fromPlayers,
-               toPlayers: bb.players,
- ... (1 more removed lines; see GitHub link above)
+         const mv = 50, bv = eo, Sv = 3, jv = .1, Xv = .05, fv = 2, nv = 7, Uv = 7, yv = 14, Dv = 7, Tv = 2;
+ 
+         function Ev(dd) {
+           var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld;
+           const Qd = Ge(dd),
+             Ld = dd.stats,
+             Od = null === Ld ? null : rJ(Ld.rankingWindow),
+             ed = null !== (Jd = null === (kd = dd.baseline) || void 0 === kd ? void 0 : kd.rankingWindow) && void 0 !== Jd ? Jd : null,
+             Rd = null !== (pd = null === Ld || void 0 === Ld ? void 0 : Ld.sessionDurationHistogram) && void 0 !== pd ? pd : null,
+             Id = null === Rd ? null : fJ(Rd.sessionCounts, Rd.maxBucketMinute),
+             Gd = Qd.biggestProblem,
+             vd = (null !== (Nd = null === (Wd = Qd.flow) || void 0 === Wd ? void 0 : Wd.steps) && void 0 !== Nd ? Nd : []).flatMap((dd => dd.isPastNearer ? [] : [{
+               from: ig(dd.from),
+               to: ig(dd.to),
+               fromPlayers: dd.fromPlayers,
+               toPlayers: dd.players,
+ ... (1 more added lines; see GitHub link above)
```

#### 1123. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14604-L14605` → after: `L14604-L14605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14604-L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14604-L14605) · [Before (L14604-L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14604-L14605)

```diff
-               isBranch: !bb.isChain,
-               isOrLater: bb.isOrLater,
+               isBranch: !dd.isChain,
+               isOrLater: dd.isOrLater,
```

#### 1124. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14608-L14616` → after: `L14608-L14616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14608-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14608-L14616) · [Before (L14608-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14608-L14616)

```diff
-             Cb = Zb.progressions.flatMap((bb => {
-               const ub = ub => rY(bb.eventType, ub);
-               return bb.steps.flatMap((hb => hb.reached !== hb.to.players ? [] : [{
-                 from: ub(hb.from.value),
-                 to: ub(hb.to.value),
-                 fromPlayers: hb.from.players,
-                 toPlayers: hb.to.players,
-                 share: 100 * hb.share,
-                 group: `${bb.gameCategory}/${bb.eventType}`,
+             xd = Qd.progressions.flatMap((dd => {
+               const Jd = Jd => ag(dd.eventType, Jd);
+               return dd.steps.flatMap((kd => kd.reached !== kd.to.players ? [] : [{
+                 from: Jd(kd.from.value),
+                 to: Jd(kd.to.value),
+                 fromPlayers: kd.from.players,
+                 toPlayers: kd.to.players,
+                 share: 100 * kd.share,
+                 group: `${dd.gameCategory}/${dd.eventType}`,
```

#### 1125. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14620-L14621` → after: `L14620-L14621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14620-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14620-L14621) · [Before (L14620-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14620-L14621)

```diff
-                   gameCategory: bb.gameCategory,
-                   eventType: bb.eventType,
+                   gameCategory: dd.gameCategory,
+                   eventType: dd.eventType,
```

#### 1126. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14626-L14627` → after: `L14626-L14627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14626-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14626-L14627) · [Before (L14626-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14626-L14627)

```diff
-           let db = null;
-           if ("dropoff" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind)) db = {
+           let qd = null;
+           if ("dropoff" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind)) qd = {
```

#### 1127. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14629` → after: `L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14629) · [Before (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14629)

```diff
-             minute: Kb.minute.minute
+             minute: Gd.minute.minute
```

#### 1128. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14631` → after: `L14631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14631) · [Before (L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14631)

```diff
-           else if ("flowStep" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind)) db = {
+           else if ("flowStep" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind)) qd = {
```

#### 1129. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14633-L14634` → after: `L14633-L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14633-L14634) · [Before (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14633-L14634)

```diff
-             from: dY(Kb.step.from),
-             to: dY(Kb.step.to)
+             from: ig(Gd.step.from),
+             to: ig(Gd.step.to)
```

#### 1130. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14636` → after: `L14636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14636) · [Before (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14636)

```diff
-           else if ("progressStep" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind)) {
+           else if ("progressStep" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind)) {
```

#### 1131. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14638-L14640` → after: `L14638-L14640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14638-L14640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14638-L14640) · [Before (L14638-L14640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14638-L14640)

```diff
-               eventType: bb
-             } = Kb.progression;
-             db = {
+               eventType: dd
+             } = Gd.progression;
+             qd = {
```

#### 1132. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14642-L14643` → after: `L14642-L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14642-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14642-L14643) · [Before (L14642-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14642-L14643)

```diff
-               from: rY(bb, Kb.step.from.value),
-               to: rY(bb, Kb.step.to.value)
+               from: ag(dd, Gd.step.from.value),
+               to: ag(dd, Gd.step.to.value)
```

#### 1133. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14645` → after: `L14645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14645) · [Before (L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14645)

```diff
-           } else "playsFalling" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind) && (db = {
+           } else "playsFalling" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind) && (qd = {
```

#### 1134. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14648-L14651` → after: `L14648-L14651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14648-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14648-L14651) · [Before (L14648-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14648-L14651)

```diff
-           const rb = null === Xb ? [] : Cu(Xb).slice(-MW),
-             jb = null !== (Ub = null === pb || void 0 === pb ? void 0 : pb.avgSessionMs) && void 0 !== Ub ? Ub : null,
-             nb = null !== (Lb = null === pb || void 0 === pb ? void 0 : pb.sessionsPerPlayer) && void 0 !== Lb ? Lb : null,
-             Db = null !== (Yb = null === pb || void 0 === pb ? void 0 : pb.avgDailyPlays) && void 0 !== Yb ? Yb : null;
+           const Bd = null === Ld ? [] : qJ(Ld).slice(-yv),
+             sd = null !== (Pd = null === Od || void 0 === Od ? void 0 : Od.avgSessionMs) && void 0 !== Pd ? Pd : null,
+             ad = null !== (Zd = null === Od || void 0 === Od ? void 0 : Od.sessionsPerPlayer) && void 0 !== Zd ? Zd : null,
+             Md = null !== (gd = null === Od || void 0 === Od ? void 0 : Od.avgDailyPlays) && void 0 !== gd ? gd : null;
```

#### 1135. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14653-L14658` → after: `L14653-L14658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14653-L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14653-L14658) · [Before (L14653-L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14653-L14658)

```diff
-             dailyPlays: Db,
-             weeklyPlayers: null === Xb || Xb.rankingWindow.days !== sW ? null : Xb.rankingWindow.uniquePlayers,
-             sessions: null === Ab || null === lb ? null : {
-               days: Ab.days,
-               percents: lb.points.map((bb => bb.percent)),
-               typicalPercents: null !== (Sb = null === (ab = bb.baseline) || void 0 === ab ? void 0 : ab.dropoffCurve.survivalPercents.map((bb => bb.p50))) && void 0 !== Sb ? Sb : []
+             dailyPlays: Md,
+             weeklyPlayers: null === Ld || Ld.rankingWindow.days !== Uv ? null : Ld.rankingWindow.uniquePlayers,
+             sessions: null === Rd || null === Id ? null : {
+               days: Rd.days,
+               percents: Id.points.map((dd => dd.percent)),
+               typicalPercents: null !== (Cd = null === (Kd = dd.baseline) || void 0 === Kd ? void 0 : Kd.dropoffCurve.survivalPercents.map((dd => dd.p50))) && void 0 !== Cd ? Cd : []
```

#### 1136. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14660-L14662` → after: `L14660-L14662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14660-L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14660-L14662) · [Before (L14660-L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14660-L14662)

```diff
-             averageSessionMinutes: null === jb ? null : {
-               now: jb / 6e4,
-               typical: null === ob ? null : ob.sessionMs.p50 / 6e4
+             averageSessionMinutes: null === sd ? null : {
+               now: sd / 6e4,
+               typical: null === ed ? null : ed.sessionMs.p50 / 6e4
```

#### 1137. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14664-L14667` → after: `L14664-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14664-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14664-L14667) · [Before (L14664-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14664-L14667)

```diff
-             sessionsPerPlayer: null === nb || null === Xb ? null : {
-               now: nb,
-               typical: null !== (Hb = null === ob || void 0 === ob ? void 0 : ob.sessionsPerPlayer.p50) && void 0 !== Hb ? Hb : null,
-               days: Xb.sessionsPerPlayerWindowDays
+             sessionsPerPlayer: null === ad || null === Ld ? null : {
+               now: ad,
+               typical: null !== (od = null === ed || void 0 === ed ? void 0 : ed.sessionsPerPlayer.p50) && void 0 !== od ? od : null,
+               days: Ld.sessionsPerPlayerWindowDays
```

#### 1138. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14669-L14671` → after: `L14669-L14671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14669-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14669-L14671) · [Before (L14669-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14669-L14671)

```diff
-             playsPerDay: null === Db ? null : {
-               now: Db,
-               typical: "playsFalling" === (null === Kb || void 0 === Kb ? void 0 : Kb.kind) ? Kb.previous : null !== (wb = null === ob || void 0 === ob ? void 0 : ob.dailyPlays.p50) && void 0 !== wb ? wb : null
+             playsPerDay: null === Md ? null : {
+               now: Md,
+               typical: "playsFalling" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind) ? Gd.previous : null !== (ld = null === ed || void 0 === ed ? void 0 : ed.dailyPlays.p50) && void 0 !== ld ? ld : null
```

#### 1139. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14674-L14675` → after: `L14674-L14675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14674-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14674-L14675) · [Before (L14674-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14674-L14675)

```diff
-               plays: rb.flatMap((bb => null === bb.plays ? [] : [bb.plays])),
-               sessionMinutes: rb.flatMap((bb => null === bb.avgSessionMs ? [] : [bb.avgSessionMs / 6e4]))
+               plays: Bd.flatMap((dd => null === dd.plays ? [] : [dd.plays])),
+               sessionMinutes: Bd.flatMap((dd => null === dd.avgSessionMs ? [] : [dd.avgSessionMs / 6e4]))
```

#### 1140. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14677-L14683` → after: `L14677-L14683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14677-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14677-L14683) · [Before (L14677-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14677-L14683)

```diff
-             flowSteps: Wb,
-             progressSteps: Cb,
-             problem: db,
-             deaths: jp(bb),
-             heatmapEvents: bb.heatmaps.map((bb => ({
-               gameCategory: bb.gameCategoryId,
-               eventTypes: [...new Set(bb.events.map((bb => bb.eventType)))]
+             flowSteps: vd,
+             progressSteps: xd,
+             problem: qd,
+             deaths: MO(dd),
+             heatmapEvents: dd.heatmaps.map((dd => ({
+               gameCategory: dd.gameCategoryId,
+               eventTypes: [...new Set(dd.events.map((dd => dd.eventType)))]
```

#### 1141. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14685-L14686` → after: `L14685-L14686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14685-L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14685-L14686) · [Before (L14685-L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14685-L14686)

```diff
-             places: sK(bb),
-             loggedValues: XU(bb)
+             places: UG(dd),
+             loggedValues: RP(dd)
```

#### 1142. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14690-L14693` → after: `L14690-L14693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14690-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14690-L14693) · [Before (L14690-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14690-L14693)

```diff
-         function qW(bb) {
-           return [...bb.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((bb => {
-             const ub = GB(bb[1]);
-             return null === ub ? [] : [ub.key]
+         function cv(dd) {
+           return [...dd.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((dd => {
+             const Jd = Zp(dd[1]);
+             return null === Jd ? [] : [Jd.key]
```

#### 1143. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14697-L14699` → after: `L14697-L14699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14697-L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14697-L14699) · [Before (L14697-L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14697-L14699)

```diff
-         function EW(bb) {
-           const ub = bb => bb.flatMap((bb => [bb.text, ...ub(bb.children)]));
-           return bb.blocks.flatMap((bb => "paragraph" === bb.kind ? [bb.text] : "list" === bb.kind ? ub(bb.items) : []))
+         function hv(dd) {
+           const Jd = dd => dd.flatMap((dd => [dd.text, ...Jd(dd.children)]));
+           return dd.blocks.flatMap((dd => "paragraph" === dd.kind ? [dd.text] : "list" === dd.kind ? Jd(dd.items) : []))
```

#### 1144. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14702-L14704` → after: `L14702-L14704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14702-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14702-L14704) · [Before (L14702-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14702-L14704)

```diff
-         function yW(bb, ub) {
-           const hb = (0, HU.i)(ub.toLowerCase());
-           return (0, wU.f)(bb.toLowerCase(), new RegExp(`${hb}(?![\\w])`), (0, wU.j)("\\w")).length > 0
+         function rv(dd, Jd) {
+           const kd = (0, LP.h)(Jd.toLowerCase());
+           return (0, OP.f)(dd.toLowerCase(), new RegExp(`${kd}(?![\\w])`), (0, OP.k)("\\w")).length > 0
```

#### 1145. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14707-L14711` → after: `L14707-L14711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14707-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14707-L14711) · [Before (L14707-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14707-L14711)

```diff
-         function VW(bb, ub, hb) {
-           var Bb;
-           const Ob = bb.filter((bb => yW(ub, bb.from) && yW(ub, bb.to))).sort(((bb, ub) => ub.fromPlayers - bb.fromPlayers)),
-             Gb = null === hb || "flowStep" !== hb.kind && "progressStep" !== hb.kind ? void 0 : bb.find((bb => bb.from === hb.from && bb.to === hb.to));
-           return void 0 === Gb || 0 !== Ob.length && !Ob.includes(Gb) ? null !== (Bb = Ob[0]) && void 0 !== Bb ? Bb : null : Gb
+         function uv(dd, Jd, kd) {
+           var pd;
+           const Nd = dd.filter((dd => rv(Jd, dd.from) && rv(Jd, dd.to))).sort(((dd, Jd) => Jd.fromPlayers - dd.fromPlayers)),
+             Wd = null === kd || "flowStep" !== kd.kind && "progressStep" !== kd.kind ? void 0 : dd.find((dd => dd.from === kd.from && dd.to === kd.to));
+           return void 0 === Wd || 0 !== Nd.length && !Nd.includes(Wd) ? null !== (pd = Nd[0]) && void 0 !== pd ? pd : null : Wd
```

#### 1146. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14714-L14715` → after: `L14714-L14715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14714-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14714-L14715) · [Before (L14714-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14714-L14715)

```diff
-         function FW(bb) {
-           return bb < 100 ? Math.max(10, 10 * Math.round(bb / 10)) : Number(bb.toPrecision(2))
+         function tv(dd) {
+           return dd < 100 ? Math.max(10, 10 * Math.round(dd / 10)) : Number(dd.toPrecision(2))
```

#### 1147. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14718-L14719` → after: `L14718-L14719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14718-L14719) · [Before (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14718-L14719)

```diff
-         function fW(bb) {
-           return bb < 1e3 ? Math.round(bb) : Number(bb.toPrecision(2))
+         function Vv(dd) {
+           return dd < 1e3 ? Math.round(dd) : Number(dd.toPrecision(2))
```

#### 1148. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14722-L14724` → after: `L14722-L14724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14722-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14722-L14724) · [Before (L14722-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14722-L14724)

```diff
-         function kW(bb, ub) {
-           const hb = Math.max(vW, null === ub ? 0 : (ub - bb) * tW);
-           return Math.min(99, Math.round(bb + hb))
+         function zv(dd, Jd) {
+           const kd = Math.max(Sv, null === Jd ? 0 : (Jd - dd) * jv);
+           return Math.min(99, Math.round(dd + kd))
```

#### 1149. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14727-L14728` → after: `L14727-L14728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14727-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14727-L14728) · [Before (L14727-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14727-L14728)

```diff
-         function TW(bb, ub, hb) {
-           return bb + Math.max(bb * JW, null === ub ? 0 : (ub - bb) * tW, hb)
+         function Hv(dd, Jd, kd) {
+           return dd + Math.max(dd * Xv, null === Jd ? 0 : (Jd - dd) * jv, kd)
```

#### 1150. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14730` → after: `L14730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14730) · [Before (L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14730)

```diff
-         const cW = {
+         const wv = {
```

#### 1151. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14740` → after: `L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14740) · [Before (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14740)

```diff
-         }, QW = `(\\d{1,2}|${Object.keys(cW).join("|")})`, RW = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${QW}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${QW}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
+         }, Av = `(\\d{1,2}|${Object.keys(wv).join("|")})`, dx = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${Av}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${Av}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
```

#### 1152. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14742-L14744` → after: `L14742-L14744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14742-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14742-L14744) · [Before (L14742-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14742-L14744)

```diff
-         function BC(bb) {
-           var ub;
-           return null !== (ub = cW[bb.toLowerCase()]) && void 0 !== ub ? ub : Number(bb)
+         function Nx(dd) {
+           var Jd;
+           return null !== (Jd = wv[dd.toLowerCase()]) && void 0 !== Jd ? Jd : Number(dd)
```

#### 1153. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14747-L14748` → after: `L14747-L14748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14747-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14747-L14748) · [Before (L14747-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14747-L14748)

```diff
-         function OC(bb, ub) {
-           return null === ub || ub * bb < gW ? null : {
+         function Wx(dd, Jd) {
+           return null === Jd || Jd * dd < mv ? null : {
```

#### 1154. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14750-L14751` → after: `L14750-L14751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14750-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14750-L14751) · [Before (L14750-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14750-L14751)

```diff
-             days: bb,
-             count: FW(ub * bb),
+             days: dd,
+             count: tv(Jd * dd),
```

#### 1155. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14756-L14759` → after: `L14756-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14756-L14759) · [Before (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14756-L14759)

```diff
-         function GC(bb) {
-           if (bb.length < mW) return null;
-           const ub = bb.slice(1).reduce(((ub, hb, Bb) => ub + (hb - bb[Bb]) ** 2), 0) / (2 * (bb.length - 1)),
-             hb = bb.slice(-NW);
+         function Px(dd) {
+           if (dd.length < Dv) return null;
+           const Jd = dd.slice(1).reduce(((Jd, kd, pd) => Jd + (kd - dd[pd]) ** 2), 0) / (2 * (dd.length - 1)),
+             kd = dd.slice(-nv);
```

#### 1156. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14761-L14763` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14761-L14763) · [Before (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14761-L14763)

```diff
-             low: Math.min(...hb),
-             high: Math.max(...hb),
-             averageMargin: IW * Math.sqrt(ub / NW)
+             low: Math.min(...kd),
+             high: Math.max(...kd),
+             averageMargin: Tv * Math.sqrt(Jd / nv)
```

#### 1157. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14767-L14768` → after: `L14767-L14768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14767-L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14767-L14768) · [Before (L14767-L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14767-L14768)

```diff
-         function UC(bb, ub) {
-           return null === bb || bb <= 0 || bb * NW < gW ? null : null !== ub ? {
+         function Zx(dd, Jd) {
+           return null === dd || dd <= 0 || dd * nv < mv ? null : null !== Jd ? {
```

#### 1158. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14770` → after: `L14770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14770) · [Before (L14770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14770)

```diff
-             days: NW,
+             days: nv,
```

#### 1159. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14772-L14773` → after: `L14772-L14773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14772-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14772-L14773) · [Before (L14772-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14772-L14773)

```diff
-               low: ub.low,
-               high: ub.high
+               low: Jd.low,
+               high: Jd.high
```

#### 1160. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14777` → after: `L14777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14777) · [Before (L14777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14777)

```diff
-             days: Math.min(NW, Math.max(eW, Math.ceil(gW / bb))),
+             days: Math.min(nv, Math.max(fv, Math.ceil(mv / dd))),
```

#### 1161. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14782-L14792` → after: `L14782-L14792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14782-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14782-L14792) · [Before (L14782-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14782-L14792)

```diff
-         function LC(bb, ub) {
-           var hb, Bb;
-           const Ob = (null !== bb && void 0 !== bb ? bb : "").split("\n").filter((bb => "" !== bb.trim())),
-             Gb = 1 === Ob.length ? kS(Ob[0]) : null;
-           if (null === Gb || null === ub) return null;
-           let Ub = Gb.path,
-             Lb = null !== (hb = ub.get(Ub)) && void 0 !== hb ? hb : null;
-           if (null === Lb && !Ub.includes(".")) {
-             const bb = [...ub].filter((bb => {
-               let [ub] = bb;
-               return ub.endsWith(`.${Gb.path}`)
+         function gx(dd, Jd) {
+           var kd, pd;
+           const Nd = (null !== dd && void 0 !== dd ? dd : "").split("\n").filter((dd => "" !== dd.trim())),
+             Wd = 1 === Nd.length ? wC(Nd[0]) : null;
+           if (null === Wd || null === Jd) return null;
+           let Pd = Wd.path,
+             Zd = null !== (kd = Jd.get(Pd)) && void 0 !== kd ? kd : null;
+           if (null === Zd && !Pd.includes(".")) {
+             const dd = [...Jd].filter((dd => {
+               let [Jd] = dd;
+               return Jd.endsWith(`.${Wd.path}`)
```

#### 1162. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14794` → after: `L14794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14794) · [Before (L14794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14794)

```diff
-             Ub = 1 === bb.length ? bb[0][0] : Ub, Lb = 1 === bb.length ? bb[0][1] : null
+             Pd = 1 === dd.length ? dd[0][0] : Pd, Zd = 1 === dd.length ? dd[0][1] : null
```

#### 1163. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14796-L14799` → after: `L14796-L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14796-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14796-L14799) · [Before (L14796-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14796-L14799)

```diff
-           const Yb = null === Lb ? null : null === (Bb = kS(Lb)) || void 0 === Bb ? void 0 : Bb.value,
-             Sb = bb => bb.replace(/\s+/g, "");
-           if (null === Lb || void 0 === Yb || null === Yb || Sb(Yb) === Sb(Gb.value)) return null;
-           const ab = Ub.lastIndexOf(".");
+           const gd = null === Zd ? null : null === (pd = wC(Zd)) || void 0 === pd ? void 0 : pd.value,
+             Cd = dd => dd.replace(/\s+/g, "");
+           if (null === Zd || void 0 === gd || null === gd || Cd(gd) === Cd(Wd.value)) return null;
+           const Kd = Pd.lastIndexOf(".");
```

#### 1164. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14801-L14802` → after: `L14801-L14802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14801-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14801-L14802) · [Before (L14801-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14801-L14802)

```diff
-             line: Lb,
-             inside: -1 === ab ? null : Ub.slice(0, ab)
+             line: Zd,
+             inside: -1 === Kd ? null : Pd.slice(0, Kd)
```

#### 1165. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14806-L14811` → after: `L14806-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14806-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14806-L14811) · [Before (L14806-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14806-L14811)

```diff
-         function YC(bb) {
-           var ub, hb;
-           const Bb = null === bb ? null : null !== (ub = null !== (hb = (0, wU.f)(bb, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, wU.j)("\\w.,"))[0]) && void 0 !== hb ? hb : (0, wU.f)(bb, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
-           return null === Bb ? null : {
-             now: Number(Bb[1].replace(/,/g, "")),
-             target: Number(Bb[2].replace(/,/g, ""))
+         function Cx(dd) {
+           var Jd, kd;
+           const pd = null === dd ? null : null !== (Jd = null !== (kd = (0, OP.f)(dd, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, OP.k)("\\w.,"))[0]) && void 0 !== kd ? kd : (0, OP.f)(dd, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
+           return null === pd ? null : {
+             now: Number(pd[1].replace(/,/g, "")),
+             target: Number(pd[2].replace(/,/g, ""))
```

#### 1166. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14815-L14816` → after: `L14815-L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14815-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14815-L14816) · [Before (L14815-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14815-L14816)

```diff
-         function SC(bb) {
-           return "playersStillPlaying" === bb ? "sessionDropoff" : bb
+         function Kx(dd) {
+           return "playersStillPlaying" === dd ? "sessionDropoff" : dd
```

#### 1167. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14819-L14821` → after: `L14819-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14819-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14819-L14821) · [Before (L14819-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14819-L14821)

```diff
-         function aC(bb, ub, hb, Bb) {
-           let Ob = null;
-           if (null !== ub) Ob = SC(ub.statKey) === SC(hb) ? YC(ub.change) : null;
+         function ox(dd, Jd, kd, pd) {
+           let Nd = null;
+           if (null !== Jd) Nd = Kx(Jd.statKey) === Kx(kd) ? Cx(Jd.change) : null;
```

#### 1168. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14823-L14843` → after: `L14823-L14843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14823-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14823-L14843) · [Before (L14823-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14823-L14843)

```diff
-             var Gb;
-             const ub = EW(bb).find((bb => /\b(check|target|aim)\b/i.test(bb) && null !== YC(bb)));
-             Ob = null !== (Gb = YC(bb.target)) && void 0 !== Gb ? Gb : YC(null !== ub && void 0 !== ub ? ub : null)
-           }
-           return null === Ob || ! function(bb, ub) {
-             return Math.abs(bb - ub) <= (ub >= 10 ? Math.max(.5, .01 * ub) : .05) + 1e-9
-           }(Ob.now, Bb) || Ob.target <= Bb ? null : Ob.target
-         }
- 
-         function HC(bb, ub, hb, Bb) {
-           var Ob, Gb, Ub;
-           const Lb = function(bb, ub) {
-             const hb = null === bb.target ? void 0 : qW(bb.target)[0];
-             if (void 0 !== hb) return hb;
-             if (null !== ub) return ub.statKey;
-             const Bb = EW(bb).find((bb => /\b(check|target|aim)\b/i.test(bb) && qW(bb).length > 0));
- ... (5 more removed lines; see GitHub link above)
+             var Wd;
+             const Jd = hv(dd).find((dd => /\b(check|target|aim)\b/i.test(dd) && null !== Cx(dd)));
+             Nd = null !== (Wd = Cx(dd.target)) && void 0 !== Wd ? Wd : Cx(null !== Jd && void 0 !== Jd ? Jd : null)
+           }
+           return null === Nd || ! function(dd, Jd) {
+             return Math.abs(dd - Jd) <= (Jd >= 10 ? Math.max(.5, .01 * Jd) : .05) + 1e-9
+           }(Nd.now, pd) || Nd.target <= pd ? null : Nd.target
+         }
+ 
+         function lx(dd, Jd, kd, pd) {
+           var Nd, Wd, Pd;
+           const Zd = function(dd, Jd) {
+             const kd = null === dd.target ? void 0 : cv(dd.target)[0];
+             if (void 0 !== kd) return kd;
+             if (null !== Jd) return Jd.statKey;
+             const pd = hv(dd).find((dd => /\b(check|target|aim)\b/i.test(dd) && cv(dd).length > 0));
+ ... (5 more added lines; see GitHub link above)
```

#### 1169. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14846-L14865` → after: `L14846-L14865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14846-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14846-L14865) · [Before (L14846-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14846-L14865)

```diff
-                 var Ob, Gb, Ub;
-                 const bb = Bb.sessions;
-                 if (null === bb) return null;
-                 const hb = function(bb) {
-                     var ub;
-                     if (null === bb) return null;
-                     if (/\bfirst minute\b/i.test(bb)) return 1;
-                     const hb = bb.replace(/\[\[[^\]]*\]\]/g, ""),
-                       Bb = null !== (ub = (0, wU.f)(hb, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, wU.j)("\\w."))[0]) && void 0 !== ub ? ub : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(hb);
-                     return null === Bb ? null : Number(Bb[1])
-                   }(ub.target),
-                   Lb = null === hb ? function(bb, ub) {
-                     var hb;
-                     if (null === bb) return null;
-                     const Bb = bb => bb >= 1 && void 0 !== ub[bb],
-                       Ob = uC.exec(bb);
- ... (4 more removed lines; see GitHub link above)
+                 var Nd, Wd, Pd;
+                 const dd = pd.sessions;
+                 if (null === dd) return null;
+                 const kd = function(dd) {
+                     var Jd;
+                     if (null === dd) return null;
+                     if (/\bfirst minute\b/i.test(dd)) return 1;
+                     const kd = dd.replace(/\[\[[^\]]*\]\]/g, ""),
+                       pd = null !== (Jd = (0, OP.f)(kd, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, OP.k)("\\w."))[0]) && void 0 !== Jd ? Jd : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(kd);
+                     return null === pd ? null : Number(pd[1])
+                   }(Jd.target),
+                   Zd = null === kd ? function(dd, Jd) {
+                     var kd;
+                     if (null === dd) return null;
+                     const pd = dd => dd >= 1 && void 0 !== Jd[dd],
+                       Nd = kx.exec(dd);
+ ... (4 more added lines; see GitHub link above)
```

#### 1170. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14869-L14876` → after: `L14869-L14876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14869-L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14869-L14876) · [Before (L14869-L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14869-L14876)

```diff
-                     for (const Lb of RW) {
-                       const ub = Lb.exec(bb);
-                       if (null !== ub) {
-                         const bb = BC(ub[1]),
-                           hb = hC.find((ub => ub > bb && Bb(ub)));
-                         return void 0 === hb ? null : {
-                           minutes: hb,
-                           after: bb
+                     for (const Zd of dx) {
+                       const Jd = Zd.exec(dd);
+                       if (null !== Jd) {
+                         const dd = Nx(Jd[1]),
+                           kd = px.find((Jd => Jd > dd && pd(Jd)));
+                         return void 0 === kd ? null : {
+                           minutes: kd,
+                           after: dd
```

#### 1171. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14880-L14883` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14880-L14883) · [Before (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14880-L14883)

```diff
-                     const Gb = bC.exec(bb),
-                       Ub = null === Gb ? null : BC(null !== (hb = Gb[1]) && void 0 !== hb ? hb : Gb[2]);
-                     return null !== Ub && Bb(Ub) ? {
-                       minutes: Ub,
+                     const Wd = Jx.exec(dd),
+                       Pd = null === Wd ? null : Nx(null !== (kd = Wd[1]) && void 0 !== kd ? kd : Wd[2]);
+                     return null !== Pd && pd(Pd) ? {
+                       minutes: Pd,
```

#### 1172. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14886-L14891` → after: `L14886-L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14886-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14886-L14891) · [Before (L14886-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14886-L14891)

```diff
-                   }(ub.title, bb.percents) : null,
-                   Yb = null !== (Ob = null !== hb && void 0 !== hb ? hb : null === Lb || void 0 === Lb ? void 0 : Lb.minutes) && void 0 !== Ob ? Ob : "dropoff" === (null === (Gb = Bb.problem) || void 0 === Gb ? void 0 : Gb.kind) ? Bb.problem.minute : Nu,
-                   Sb = bb.percents[Yb],
-                   ab = OC(bb.days, Bb.dailyPlays);
-                 return void 0 === Sb || Yb < 1 || null === ab ? null : {
-                   measure: null === Lb || null === Lb.after ? {
+                   }(Jd.title, dd.percents) : null,
+                   gd = null !== (Nd = null !== kd && void 0 !== kd ? kd : null === Zd || void 0 === Zd ? void 0 : Zd.minutes) && void 0 !== Nd ? Nd : "dropoff" === (null === (Wd = pd.problem) || void 0 === Wd ? void 0 : Wd.kind) ? pd.problem.minute : nJ,
+                   Cd = dd.percents[gd],
+                   Kd = Wx(dd.days, pd.dailyPlays);
+                 return void 0 === Cd || gd < 1 || null === Kd ? null : {
+                   measure: null === Zd || null === Zd.after ? {
```

#### 1173. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14893` → after: `L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14893) · [Before (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14893)

```diff
-                     minutes: Yb
+                     minutes: gd
```

#### 1174. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14896-L14897` → after: `L14896-L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14896-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14896-L14897) · [Before (L14896-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14896-L14897)

```diff
-                     minutes: Yb,
-                     after: Lb.after
+                     minutes: gd,
+                     after: Zd.after
```

#### 1175. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14899-L14901` → after: `L14899-L14901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14899-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14899-L14901) · [Before (L14899-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14899-L14901)

```diff
-                   now: Math.round(Sb),
-                   helped: kW(Sb, null !== (Ub = bb.typicalPercents[Yb]) && void 0 !== Ub ? Ub : null),
-                   wait: ab
+                   now: Math.round(Cd),
+                   helped: zv(Cd, null !== (Pd = dd.typicalPercents[gd]) && void 0 !== Pd ? Pd : null),
+                   wait: Kd
```

#### 1176. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14905-L14910` → after: `L14905-L14910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14905-L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14905-L14910) · [Before (L14905-L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14905-L14910)

```diff
-                 const bb = VW(Bb.flowSteps, hb, Bb.problem);
-                 if (null === bb || bb.fromPlayers < iW) return null;
-                 const ub = function(bb, ub, hb) {
-                     const Bb = Math.max(ub.fromPlayers, ...bb.filter((bb => bb.group === ub.group)).map((bb => bb.fromPlayers)));
-                     return null === hb || hb <= 0 || Bb <= hb ? {
-                       players: ub.fromPlayers,
+                 const dd = uv(pd.flowSteps, kd, pd.problem);
+                 if (null === dd || dd.fromPlayers < bv) return null;
+                 const Jd = function(dd, Jd, kd) {
+                     const pd = Math.max(Jd.fromPlayers, ...dd.filter((dd => dd.group === Jd.group)).map((dd => dd.fromPlayers)));
+                     return null === kd || kd <= 0 || pd <= kd ? {
+                       players: Jd.fromPlayers,
```

#### 1177. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14913` → after: `L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14913) · [Before (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14913)

```diff
-                       players: ub.fromPlayers * hb / Bb,
+                       players: Jd.fromPlayers * kd / pd,
```

#### 1178. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14916-L14918` → after: `L14916-L14918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14916-L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14916-L14918) · [Before (L14916-L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14916-L14918)

```diff
-                   }(Bb.flowSteps, bb, Bb.weeklyPlayers),
-                   Ob = ub.isScaled && ub.players < 100 ? Math.round(ub.players) : FW(ub.players),
-                   Gb = {
+                   }(pd.flowSteps, dd, pd.weeklyPlayers),
+                   Nd = Jd.isScaled && Jd.players < 100 ? Math.round(Jd.players) : tv(Jd.players),
+                   Wd = {
```

#### 1179. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14920-L14921` → after: `L14920-L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14920-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14920-L14921) · [Before (L14920-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14920-L14921)

```diff
-                     days: sW,
-                     count: Ob,
+                     days: Uv,
+                     count: Nd,
```

#### 1180. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14927-L14929` → after: `L14927-L14929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14927-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14927-L14929) · [Before (L14927-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14927-L14929)

```diff
-                     from: bb.from,
-                     to: bb.to,
-                     isOrLater: bb.isOrLater
+                     from: dd.from,
+                     to: dd.to,
+                     isOrLater: dd.isOrLater
```

#### 1181. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14931-L14933` → after: `L14931-L14933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14931-L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14931-L14933) · [Before (L14931-L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14931-L14933)

```diff
-                   now: Math.round(bb.share),
-                   helped: kW(bb.share, ZC(Bb.flowSteps, bb)),
-                   wait: Gb
+                   now: Math.round(dd.share),
+                   helped: zv(dd.share, Lx(pd.flowSteps, dd)),
+                   wait: Wd
```

#### 1182. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14937-L14941` → after: `L14937-L14941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14937-L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14937-L14941) · [Before (L14937-L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14937-L14941)

```diff
-                 const bb = VW(Bb.progressSteps, hb, Bb.problem);
-                 if (null === bb || bb.fromPlayers < iW) return null;
-                 const ub = kW(bb.share, ZC(Bb.progressSteps, bb)),
-                   Ob = null !== Bb.weeklyPlayers ? 2 * Bb.weeklyPlayers / sW : null === Bb.dailyPlays ? 1 / 0 : 2 * Bb.dailyPlays,
-                   Gb = FW(Math.max(gW, Math.min(.1 * bb.fromPlayers, Ob)));
+                 const dd = uv(pd.progressSteps, kd, pd.problem);
+                 if (null === dd || dd.fromPlayers < bv) return null;
+                 const Jd = zv(dd.share, Lx(pd.progressSteps, dd)),
+                   Nd = null !== pd.weeklyPlayers ? 2 * pd.weeklyPlayers / Uv : null === pd.dailyPlays ? 1 / 0 : 2 * pd.dailyPlays,
+                   Wd = tv(Math.max(mv, Math.min(.1 * dd.fromPlayers, Nd)));
```

#### 1183. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14945-L14948` → after: `L14945-L14948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14945-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14945-L14948) · [Before (L14945-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14945-L14948)

```diff
-                     from: bb.from,
-                     to: bb.to,
-                     fromPlayers: bb.fromPlayers,
-                     toPlayers: bb.toPlayers
+                     from: dd.from,
+                     to: dd.to,
+                     fromPlayers: dd.fromPlayers,
+                     toPlayers: dd.toPlayers
```

#### 1184. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14950-L14952` → after: `L14950-L14952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14950-L14952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14950-L14952) · [Before (L14950-L14952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14950-L14952)

```diff
-                   selection: bb.selection,
-                   now: Math.round(bb.share),
-                   helped: ub,
+                   selection: dd.selection,
+                   now: Math.round(dd.share),
+                   helped: Jd,
```

#### 1185. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14955-L14959` → after: `L14955-L14959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14955-L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14955-L14959) · [Before (L14955-L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14955-L14959)

```diff
-                     at: bb.from,
-                     players: bb.fromPlayers + Gb,
-                     more: Gb,
-                     helpedAt: bb.to,
-                     helpedPlayers: wC(bb.toPlayers, ub, Gb)
+                     at: dd.from,
+                     players: dd.fromPlayers + Wd,
+                     more: Wd,
+                     helpedAt: dd.to,
+                     helpedPlayers: Qx(dd.toPlayers, Jd, Wd)
```

#### 1186. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14964-L14969` → after: `L14964-L14969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14964-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14964-L14969) · [Before (L14964-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14964-L14969)

```diff
-                 var Lb;
-                 const bb = Bb.playsPerDay,
-                   ub = GC(Bb.dailySeries.plays),
-                   hb = UC(Bb.dailyPlays, ub);
-                 if (null === bb || null === hb) return null;
-                 const Ob = Math.max(TW(bb.now, bb.typical, 1), bb.now + (null !== (Lb = null === ub || void 0 === ub ? void 0 : ub.averageMargin) && void 0 !== Lb ? Lb : 0));
+                 var Zd;
+                 const dd = pd.playsPerDay,
+                   Jd = Px(pd.dailySeries.plays),
+                   kd = Zx(pd.dailyPlays, Jd);
+                 if (null === dd || null === kd) return null;
+                 const Nd = Math.max(Hv(dd.now, dd.typical, 1), dd.now + (null !== (Zd = null === Jd || void 0 === Jd ? void 0 : Jd.averageMargin) && void 0 !== Zd ? Zd : 0));
```

#### 1187. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14974-L14977` → after: `L14974-L14977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14974-L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14974-L14977) · [Before (L14974-L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14974-L14977)

```diff
-                   now: Math.round(bb.now),
-                   helped: Ob < 1e3 ? Math.round(Ob) : Number(Ob.toPrecision(3)),
-                   wait: "days" === hb.kind && null !== hb.swing ? {
-                     ...hb,
+                   now: Math.round(dd.now),
+                   helped: Nd < 1e3 ? Math.round(Nd) : Number(Nd.toPrecision(3)),
+                   wait: "days" === kd.kind && null !== kd.swing ? {
+                     ...kd,
```

#### 1188. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14979-L14980` → after: `L14979-L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14979-L14980) · [Before (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14979-L14980)

```diff
-                       low: fW(hb.swing.low),
-                       high: fW(hb.swing.high)
+                       low: Vv(kd.swing.low),
+                       high: Vv(kd.swing.high)
```

#### 1189. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14982` → after: `L14982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14982) · [Before (L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14982)

```diff
-                   } : hb
+                   } : kd
```

#### 1190. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14986-L14991` → after: `L14986-L14991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14986-L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14986-L14991) · [Before (L14986-L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14986-L14991)

```diff
-                 var Yb;
-                 const bb = Bb.averageSessionMinutes,
-                   ub = GC(Bb.dailySeries.sessionMinutes),
-                   hb = UC(Bb.dailyPlays, ub);
-                 if (null === bb || null === hb) return null;
-                 const Ob = bb => Math.round(10 * bb) / 10;
+                 var gd;
+                 const dd = pd.averageSessionMinutes,
+                   Jd = Px(pd.dailySeries.sessionMinutes),
+                   kd = Zx(pd.dailyPlays, Jd);
+                 if (null === dd || null === kd) return null;
+                 const Nd = dd => Math.round(10 * dd) / 10;
```

#### 1191. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14996-L14999` → after: `L14996-L14999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14996-L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L14996-L14999) · [Before (L14996-L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L14996-L14999)

```diff
-                   now: Ob(bb.now),
-                   helped: Ob(Math.max(TW(bb.now, bb.typical, .1), bb.now + (null !== (Yb = null === ub || void 0 === ub ? void 0 : ub.averageMargin) && void 0 !== Yb ? Yb : 0))),
-                   wait: "days" === hb.kind && null !== hb.swing ? {
-                     ...hb,
+                   now: Nd(dd.now),
+                   helped: Nd(Math.max(Hv(dd.now, dd.typical, .1), dd.now + (null !== (gd = null === Jd || void 0 === Jd ? void 0 : Jd.averageMargin) && void 0 !== gd ? gd : 0))),
+                   wait: "days" === kd.kind && null !== kd.swing ? {
+                     ...kd,
```

#### 1192. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15001-L15002` → after: `L15001-L15002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15001-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15001-L15002) · [Before (L15001-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15001-L15002)

```diff
-                       low: Ob(hb.swing.low),
-                       high: Ob(hb.swing.high)
+                       low: Nd(kd.swing.low),
+                       high: Nd(kd.swing.high)
```

#### 1193. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15004` → after: `L15004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15004) · [Before (L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15004)

```diff
-                   } : hb
+                   } : kd
```

#### 1194. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15008-L15011` → after: `L15008-L15011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15008-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15008-L15011) · [Before (L15008-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15008-L15011)

```diff
-                 const bb = Bb.sessionsPerPlayer,
-                   ub = null === bb ? null : OC(bb.days, Bb.dailyPlays);
-                 if (null === bb || null === ub) return null;
-                 const hb = bb => Math.round(100 * bb) / 100;
+                 const dd = pd.sessionsPerPlayer,
+                   Jd = null === dd ? null : Wx(dd.days, pd.dailyPlays);
+                 if (null === dd || null === Jd) return null;
+                 const kd = dd => Math.round(100 * dd) / 100;
```

#### 1195. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15015` → after: `L15015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15015) · [Before (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15015)

```diff
-                     days: bb.days
+                     days: dd.days
```

#### 1196. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15017-L15019` → after: `L15017-L15019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15017-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15017-L15019) · [Before (L15017-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15017-L15019)

```diff
-                   now: hb(bb.now),
-                   helped: hb(bb.now + Math.max(.05, null === bb.typical ? 0 : (bb.typical - bb.now) * tW)),
-                   wait: ub
+                   now: kd(dd.now),
+                   helped: kd(dd.now + Math.max(.05, null === dd.typical ? 0 : (dd.typical - dd.now) * jv)),
+                   wait: Jd
```

#### 1197. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15025-L15029` → after: `L15025-L15029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15025-L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15025-L15029) · [Before (L15025-L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15025-L15029)

```diff
-           }(Lb, bb, [null !== (Ob = bb.title) && void 0 !== Ob ? Ob : "", ...EW(bb), null !== (Gb = bb.target) && void 0 !== Gb ? Gb : ""].join("\n"), ub);
-           if (null === Yb) return null;
-           const Sb = aC(bb, hb, Lb, Yb.now);
-           let ab = null === Sb ? Yb.helped : Math.min(Yb.helped, Sb);
-           if (null !== Sb && Sb - ab < (ab - Yb.now) / 2 && (ab = Sb), ab <= Yb.now) return null;
+           }(Zd, dd, [null !== (Nd = dd.title) && void 0 !== Nd ? Nd : "", ...hv(dd), null !== (Wd = dd.target) && void 0 !== Wd ? Wd : ""].join("\n"), Jd);
+           if (null === gd) return null;
+           const Cd = ox(dd, kd, Zd, gd.now);
+           let Kd = null === Cd ? gd.helped : Math.min(gd.helped, Cd);
+           if (null !== Cd && Cd - Kd < (Kd - gd.now) / 2 && (Kd = Cd), Kd <= gd.now) return null;
```

#### 1198. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15031-L15035` → after: `L15031-L15035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15031-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15031-L15035) · [Before (L15031-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15031-L15035)

```diff
-             measure: Hb
-           } = Yb, wb = "players" === Yb.wait.kind && "progressStep" === Hb.kind ? {
-             ...Yb.wait,
-             helpedPlayers: wC(Hb.toPlayers, ab, Yb.wait.more)
-           } : Yb.wait;
+             measure: od
+           } = gd, ld = "players" === gd.wait.kind && "progressStep" === od.kind ? {
+             ...gd.wait,
+             helpedPlayers: Qx(od.toPlayers, Kd, gd.wait.more)
+           } : gd.wait;
```

#### 1199. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15037-L15043` → after: `L15037-L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15037-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15037-L15043) · [Before (L15037-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15037-L15043)

```diff
-             statKey: Lb,
-             ...Yb,
-             selection: null !== (Ub = Yb.selection) && void 0 !== Ub ? Ub : null,
-             helped: ab,
-             goal: Sb,
-             wait: wb,
-             undo: LC(bb.code, Bb)
+             statKey: Zd,
+             ...gd,
+             selection: null !== (Pd = gd.selection) && void 0 !== Pd ? Pd : null,
+             helped: Kd,
+             goal: Cd,
+             wait: ld,
+             undo: gx(dd.code, pd)
```

#### 1200. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15047-L15048` → after: `L15047-L15048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15047-L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15047-L15048) · [Before (L15047-L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15047-L15048)

```diff
-         function wC(bb, ub, hb) {
-           return Math.round(bb + ub / 100 * hb)
+         function Qx(dd, Jd, kd) {
+           return Math.round(dd + Jd / 100 * kd)
```

#### 1201. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15051-L15057` → after: `L15051-L15057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15051-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15051-L15057) · [Before (L15051-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15051-L15057)

```diff
-         function ZC(bb, ub) {
-           return function(bb) {
-             if (0 === bb.length) return null;
-             const ub = [...bb].sort(((bb, ub) => bb - ub)),
-               hb = Math.floor(ub.length / 2);
-             return ub.length % 2 === 1 ? ub[hb] : (ub[hb - 1] + ub[hb]) / 2
-           }(bb.filter((bb => bb !== ub && bb.group === ub.group && !bb.isBranch && bb.fromPlayers >= iW)).map((bb => bb.share)))
+         function Lx(dd, Jd) {
+           return function(dd) {
+             if (0 === dd.length) return null;
+             const Jd = [...dd].sort(((dd, Jd) => dd - Jd)),
+               kd = Math.floor(Jd.length / 2);
+             return Jd.length % 2 === 1 ? Jd[kd] : (Jd[kd - 1] + Jd[kd]) / 2
+           }(dd.filter((dd => dd !== Jd && dd.group === Jd.group && !dd.isBranch && dd.fromPlayers >= bv)).map((dd => dd.share)))
```

#### 1202. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15060-L15061` → after: `L15060-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15060-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15060-L15061) · [Before (L15060-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15060-L15061)

```diff
-         function XC(bb) {
-           return bb.toLocaleString("en-US", {
+         function Ox(dd) {
+           return dd.toLocaleString("en-US", {
```

#### 1203. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15066-L15067` → after: `L15066-L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15066-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15066-L15067) · [Before (L15066-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15066-L15067)

```diff
-         function pC(bb, ub) {
-           return 1 === bb ? ub("last 1 minute or more") : `${ub("last")} ${bb} ${ub("minutes or more")}`
+         function ex(dd, Jd) {
+           return 1 === dd ? Jd("last 1 minute or more") : `${Jd("last")} ${dd} ${Jd("minutes or more")}`
```

#### 1204. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15070` → after: `L15070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15070) · [Before (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15070)

```diff
-         function oC(bb) {
+         function Rx(dd) {
```

#### 1205. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15072-L15073` → after: `L15072-L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15072-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15072-L15073) · [Before (L15072-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15072-L15073)

```diff
-             stat: bb.statKey,
-             selection: bb.selection
+             stat: dd.statKey,
+             selection: dd.selection
```

#### 1206. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15077` → after: `L15077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15077) · [Before (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15077)

```diff
-         function AC(bb, ub) {
+         function Ix(dd, Jd) {
```

#### 1207. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15079-L15084` → after: `L15079-L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15079-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15079-L15084) · [Before (L15079-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15079-L15084)

```diff
-             measure: hb,
-             now: Bb,
-             wait: Ob
-           } = bb, Gb = "players" === Ob.kind || 7 === Ob.days ? ub("in a week") : `${ub("in")} ${Ob.days} ${ub("days")}`;
-           let Ub;
-           switch (hb.kind) {
+             measure: kd,
+             now: pd,
+             wait: Nd
+           } = dd, Wd = "players" === Nd.kind || 7 === Nd.days ? Jd("in a week") : `${Jd("in")} ${Nd.days} ${Jd("days")}`;
+           let Pd;
+           switch (kd.kind) {
```

#### 1208. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15086` → after: `L15086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15086) · [Before (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15086)

```diff
-               Ub = [`${ub("if more than")} ${Bb} ${ub("in 100")} ${ub("sessions")} ${pC(hb.minutes,ub)}`];
+               Pd = [`${Jd("if more than")} ${pd} ${Jd("in 100")} ${Jd("sessions")} ${ex(kd.minutes,Jd)}`];
```

#### 1209. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15089-L15093` → after: `L15089-L15093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15089-L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15089-L15093) · [Before (L15089-L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15089-L15093)

```diff
-               Ub = [`${ub("if more players at")} `, {
-                 code: hb.from
-               }, ` ${ub("reach")} `, {
-                 code: hb.to
-               }, hb.isOrLater ? ` ${ub("or a later one")}` : "", ` ${ub("than now")} (${Bb} ${ub("in 100")})`];
+               Pd = [`${Jd("if more players at")} `, {
+                 code: kd.from
+               }, ` ${Jd("reach")} `, {
+                 code: kd.to
+               }, kd.isOrLater ? ` ${Jd("or a later one")}` : "", ` ${Jd("than now")} (${pd} ${Jd("in 100")})`];
```

#### 1210. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15096` → after: `L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15096) · [Before (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15096)

```diff
-               Ub = [`${ub("if more players at")} ${hb.from} ${ub("reach")} ${hb.to} ${ub("than now")} (${Bb} ${ub("in 100")})`];
+               Pd = [`${Jd("if more players at")} ${kd.from} ${Jd("reach")} ${kd.to} ${Jd("than now")} (${pd} ${Jd("in 100")})`];
```

#### 1211. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15099` → after: `L15099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15099) · [Before (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15099)

```diff
-               Ub = [ub("if most days have more plays than now")];
+               Pd = [Jd("if most days have more plays than now")];
```

#### 1212. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15102` → after: `L15102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15102) · [Before (L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15102)

```diff
-               Ub = [`${ub("if sessions last longer than now")} (${XC(Bb)} ${ub("minutes")})`];
+               Pd = [`${Jd("if sessions last longer than now")} (${Ox(pd)} ${Jd("minutes")})`];
```

#### 1213. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15105` → after: `L15105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15105) · [Before (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15105)

```diff
-               Ub = [ub("if players come back more often than now")]
+               Pd = [Jd("if players come back more often than now")]
```

#### 1214. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15107` → after: `L15107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15107) · [Before (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15107)

```diff
-           return [`${ub("Check")} `, oC(bb), ` ${Gb}: `, ...Ub, `, ${ub("it helped")}.`]
+           return [`${Jd("Check")} `, Rx(dd), ` ${Wd}: `, ...Pd, `, ${Jd("it helped")}.`]
```

#### 1215. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15109` → after: `L15109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15109) · [Before (L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15109)

```diff
-         const lC = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, KC = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, WC = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
+         const Gx = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, vx = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, xx = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
```

#### 1216. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15111-L15112` → after: `L15111-L15112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15111-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15111-L15112) · [Before (L15111-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15111-L15112)

```diff
-         function CC(bb) {
-           return lC.test(bb) || KC.test(bb) && !WC.test(bb)
+         function qx(dd) {
+           return Gx.test(dd) || vx.test(dd) && !xx.test(dd)
```

#### 1217. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15115-L15126` → after: `L15115-L15126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15115-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15115-L15126) · [Before (L15115-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15115-L15126)

```diff
-         function dC(bb) {
-           let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const hb = bb.steps.filter((bb => CC(bb.text))),
-             Bb = new Set(ub ? hb.slice(1) : hb);
-           if (0 === Bb.size) return bb;
-           const Ob = bb => !Bb.has(bb),
-             Gb = bb.blocks.flatMap((bb => {
-               if ("list" !== bb.kind) return [bb];
-               const ub = bb.items.filter(Ob);
-               return 0 === ub.length ? [] : [{
-                 ...bb,
-                 items: ub
+         function Bx(dd) {
+           let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           const kd = dd.steps.filter((dd => qx(dd.text))),
+             pd = new Set(Jd ? kd.slice(1) : kd);
+           if (0 === pd.size) return dd;
+           const Nd = dd => !pd.has(dd),
+             Wd = dd.blocks.flatMap((dd => {
+               if ("list" !== dd.kind) return [dd];
+               const Jd = dd.items.filter(Nd);
+               return 0 === Jd.length ? [] : [{
+                 ...dd,
+                 items: Jd
```

#### 1218. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15130-L15132` → after: `L15130-L15132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15130-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15130-L15132) · [Before (L15130-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15130-L15132)

```diff
-             ...bb,
-             blocks: Gb,
-             steps: bb.steps.filter(Ob)
+             ...dd,
+             blocks: Wd,
+             steps: dd.steps.filter(Nd)
```

#### 1219. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15135` → after: `L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15135) · [Before (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15135)

```diff
-         const rC = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, jC = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, nC = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, DC = new Set(["Math", "Date", "JSON", "cons … [truncated]
+         const sx = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, ix = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, ax = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, Mx = new Set(["Math", "Date", "JSON", "cons … [truncated]
```

#### 1220. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15137-L15140` → after: `L15137-L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15137-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15137-L15140) · [Before (L15137-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15137-L15140)

```diff
-         function zC(bb, ub) {
-           for (const [hb] of(null !== ub && void 0 !== ub ? ub : "").matchAll(rC)) {
-             bb.add(hb);
-             for (const ub of hb.split(".")) bb.add(ub)
+         function Yx(dd, Jd) {
+           for (const [kd] of(null !== Jd && void 0 !== Jd ? Jd : "").matchAll(sx)) {
+             dd.add(kd);
+             for (const Jd of kd.split(".")) dd.add(Jd)
```

#### 1221. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15144-L15150` → after: `L15144-L15150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15144-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15144-L15150) · [Before (L15144-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15144-L15150)

```diff
-         function gC(bb) {
-           if (null === bb.worldCode || void 0 === bb.worldCode) return null;
-           const ub = [];
-           for (const Ob of [null === (hb = bb.customEvents) || void 0 === hb ? void 0 : hb.byEvent, null === (Bb = bb.playerTotals) || void 0 === Bb ? void 0 : Bb.playerTotals]) {
-             var hb, Bb;
-             jY(null !== Ob && void 0 !== Ob ? Ob : {}, ((bb, hb, Bb) => {
-               ub.push(hb, ...Object.keys(Bb))
+         function mx(dd) {
+           if (null === dd.worldCode || void 0 === dd.worldCode) return null;
+           const Jd = [];
+           for (const Nd of [null === (kd = dd.customEvents) || void 0 === kd ? void 0 : kd.byEvent, null === (pd = dd.playerTotals) || void 0 === pd ? void 0 : pd.playerTotals]) {
+             var kd, pd;
+             Mg(null !== Nd && void 0 !== Nd ? Nd : {}, ((dd, kd, pd) => {
+               Jd.push(kd, ...Object.keys(pd))
```

#### 1222. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15153-L15163` → after: `L15153-L15163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15153-L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15153-L15163) · [Before (L15153-L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15153-L15163)

```diff
-           return function(bb) {
-             let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-             const hb = new Set(na.keys());
-             for (const Gb of [...MS, ...xC]) hb.add(`api.${Gb}`);
-             for (const Gb of bb.constants)
-               for (const bb of [Gb.name, Gb.value, Gb.where, Gb.usedIn]) zC(hb, bb);
-             for (const Gb of bb.callbacks) {
-               zC(hb, Gb.name);
-               for (const bb of null !== (Bb = Gb.params) && void 0 !== Bb ? Bb : []) {
-                 var Bb;
-                 zC(hb, bb)
+           return function(dd) {
+             let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             const kd = new Set(FK.keys());
+             for (const Wd of [...TC, ...Fx]) kd.add(`api.${Wd}`);
+             for (const Wd of dd.constants)
+               for (const dd of [Wd.name, Wd.value, Wd.where, Wd.usedIn]) Yx(kd, dd);
+             for (const Wd of dd.callbacks) {
+               Yx(kd, Wd.name);
+               for (const dd of null !== (pd = Wd.params) && void 0 !== pd ? pd : []) {
+                 var pd;
+                 Yx(kd, dd)
```

#### 1223. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15166-L15169` → after: `L15166-L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15166-L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15166-L15169) · [Before (L15166-L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15166-L15169)

```diff
-             for (const Gb of bb.analyticsHelpers) zC(hb, Gb);
-             for (const Gb of null !== (Ob = bb.messages) && void 0 !== Ob ? Ob : []) {
-               var Ob;
-               zC(hb, Gb.where), zC(hb, Gb.line)
+             for (const Wd of dd.analyticsHelpers) Yx(kd, Wd);
+             for (const Wd of null !== (Nd = dd.messages) && void 0 !== Nd ? Nd : []) {
+               var Nd;
+               Yx(kd, Wd.where), Yx(kd, Wd.line)
```

#### 1224. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15171-L15175` → after: `L15171-L15175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15171-L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15171-L15175) · [Before (L15171-L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15171-L15175)

```diff
-             for (const Gb of bb.events)
-               for (const bb of [Gb.eventType, Gb.valueExpression, Gb.numberExpression, Gb.where, Gb.guard, ...Gb.values]) zC(hb, bb);
-             for (const Gb of ub) zC(hb, Gb);
-             return hb
-           }(bb.worldCode, ub)
+             for (const Wd of dd.events)
+               for (const dd of [Wd.eventType, Wd.valueExpression, Wd.numberExpression, Wd.where, Wd.guard, ...Wd.values]) Yx(kd, dd);
+             for (const Wd of Jd) Yx(kd, Wd);
+             return kd
+           }(dd.worldCode, Jd)
```

#### 1225. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15178-L15180` → after: `L15178-L15180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15178-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15178-L15180) · [Before (L15178-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15178-L15180)

```diff
-         function iC(bb, ub, hb, Bb) {
-           const Ob = bb.split(".");
-           return "api" === Ob[0] && Ob.length > 1 ? null !== Bb ? Bb.has(Ob[1]) : "pasteCode" !== hb || ub.has(`api.${Ob[1]}`) : !(!DC.has(Ob[0]) && !ub.has(bb)) || Ob.length > 1 && Ob.every((bb => ub.has(bb)))
+         function bx(dd, Jd, kd, pd) {
+           const Nd = dd.split(".");
+           return "api" === Nd[0] && Nd.length > 1 ? null !== pd ? pd.has(Nd[1]) : "pasteCode" !== kd || Jd.has(`api.${Nd[1]}`) : !(!Mx.has(Nd[0]) && !Jd.has(dd)) || Nd.length > 1 && Nd.every((dd => Jd.has(dd)))
```

#### 1226. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15183-L15184` → after: `L15183-L15184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15183-L15184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15183-L15184) · [Before (L15183-L15184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15183-L15184)

```diff
-         function vC(bb) {
-           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(bb)
+         function Sx(dd) {
+           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(dd)
```

#### 1227. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15187-L15189` → after: `L15187-L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15187-L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15187-L15189) · [Before (L15187-L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15187-L15189)

```diff
-         function tC(bb, ub) {
-           return ub.startsWith("api.") ? {
-             text: bb,
+         function jx(dd, Jd) {
+           return Jd.startsWith("api.") ? {
+             text: dd,
```

#### 1228. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15193` → after: `L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15193) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15193)

```diff
-             text: bb,
+             text: dd,
```

#### 1229. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15197` → after: `L15197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15197) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15197)

```diff
-         const JC = IH, eC = 10, NC = 3, sC = 8, MC = /tutorial|onboarding/i, mC = /event|flow|heatmap|order players/i, IC = .15, PC = .1, qC = 3, EC = .25, yC = .1, VC = 2, FC = 3, fC = .7, kC = 5;
+         const Xx = ro, fx = 10, nx = 3, Ux = 8, yx = /tutorial|onboarding/i, Dx = /event|flow|heatmap|order players/i, Tx = .15, Ex = .1, cx = 3, hx = .25, rx = .1, ux = 2, tx = 3, Vx = .7, zx = 5;
```

#### 1230. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15199-L15200` → after: `L15199-L15200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15199-L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15199-L15200) · [Before (L15199-L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15199-L15200)

```diff
-         function TC(bb, ub) {
-           return "" === ub ? bb : /^-?\d+$/.test(ub) ? `${bb} ${ub}` : /\d/.test(ub) ? ub : `${bb}: ${ub}`
+         function Hx(dd, Jd) {
+           return "" === Jd ? dd : /^-?\d+$/.test(Jd) ? `${dd} ${Jd}` : /\d/.test(Jd) ? Jd : `${dd}: ${Jd}`
```

#### 1231. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15203-L15206` → after: `L15203-L15206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15203-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15203-L15206) · [Before (L15203-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15203-L15206)

```diff
-         function cC(bb) {
-           const ub = dY(bb),
-             hb = ub.lastIndexOf(": ");
-           return -1 === hb ? ub : TC(ub.slice(0, hb), ub.slice(hb + 2))
+         function wx(dd) {
+           const Jd = ig(dd),
+             kd = Jd.lastIndexOf(": ");
+           return -1 === kd ? Jd : Hx(Jd.slice(0, kd), Jd.slice(kd + 2))
```

#### 1232. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15209-L15218` → after: `L15209-L15218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15209-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15209-L15218) · [Before (L15209-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15209-L15218)

```diff
-         function QC(bb, ub, hb) {
-           var Bb, Ob;
-           const Gb = Wp(ub.flow, ub.progressions, null, null, hb),
-             Ub = null !== (Bb = null === (Ob = bb.stats) || void 0 === Ob ? void 0 : Ob.rankingWindow.uniquePlayers) && void 0 !== Bb ? Bb : 0;
-           if ("flowStep" === (null === Gb || void 0 === Gb ? void 0 : Gb.kind)) {
-             const bb = ub.flow,
-               hb = Math.max(0, ...bb.steps.map((bb => bb.fromPlayers))),
-               Bb = bb.steps.filter((bb => {
-                 var ub, Bb;
-                 return bb.isChain && bb.fromPlayers >= (null !== (ub = null === (Bb = bb.start) || void 0 === Bb ? void 0 : Bb.players) && void 0 !== ub ? ub : hb) * PC
+         function Ax(dd, Jd, kd) {
+           var pd, Nd;
+           const Wd = BO(Jd.flow, Jd.progressions, null, null, kd),
+             Pd = null !== (pd = null === (Nd = dd.stats) || void 0 === Nd ? void 0 : Nd.rankingWindow.uniquePlayers) && void 0 !== pd ? pd : 0;
+           if ("flowStep" === (null === Wd || void 0 === Wd ? void 0 : Wd.kind)) {
+             const dd = Jd.flow,
+               kd = Math.max(0, ...dd.steps.map((dd => dd.fromPlayers))),
+               pd = dd.steps.filter((dd => {
+                 var Jd, pd;
+                 return dd.isChain && dd.fromPlayers >= (null !== (Jd = null === (pd = dd.start) || void 0 === pd ? void 0 : pd.players) && void 0 !== Jd ? Jd : kd) * Ex
```

#### 1233. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15220` → after: `L15220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15220) · [Before (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15220)

```diff
-               Ob = (bb, ub) => {
+               Nd = (dd, Jd) => {
```

#### 1234. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15222-L15226` → after: `L15222-L15226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15222-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15222-L15226) · [Before (L15222-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15222-L15226)

```diff
-                   from: cC(bb.from),
-                   to: cC(bb.to),
-                   isOrLater: bb.isOrLater,
-                   fromPlayers: bb.fromPlayers,
-                   lost: bb.lost,
+                   from: wx(dd.from),
+                   to: wx(dd.to),
+                   isOrLater: dd.isOrLater,
+                   fromPlayers: dd.fromPlayers,
+                   lost: dd.lost,
```

#### 1235. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15230-L15232` → after: `L15230-L15232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15230-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15230-L15232) · [Before (L15230-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15230-L15232)

```diff
-                   share: bb.share,
-                   players: (hb = bb.fromPlayers, Ub > 0 ? Math.min(hb, Ub) : hb),
-                   later: ub
+                   share: dd.share,
+                   players: (kd = dd.fromPlayers, Pd > 0 ? Math.min(kd, Pd) : kd),
+                   later: Jd
```

#### 1236. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15234` → after: `L15234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15234) · [Before (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15234)

```diff
-                 var hb
+                 var kd
```

#### 1237. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15236-L15243` → after: `L15236-L15243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15236-L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15236-L15243) · [Before (L15236-L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15236-L15243)

```diff
-               Lb = [Gb.step, Gb.mostLost, bb.lowestShare].filter((bb => null !== bb && Bb.includes(bb)));
-             return [...new Set(Lb)].map((ub => {
-               const hb = function(bb, ub) {
-                   const hb = new Set([ub]),
-                     Bb = [ub];
-                   for (; Bb.length > 0;) {
-                     const ub = Bb.shift();
-                     for (const Ob of bb) Ob.from !== ub || hb.has(Ob.to) || (hb.add(Ob.to), Bb.push(Ob.to))
+               Zd = [Wd.step, Wd.mostLost, dd.lowestShare].filter((dd => null !== dd && pd.includes(dd)));
+             return [...new Set(Zd)].map((Jd => {
+               const kd = function(dd, Jd) {
+                   const kd = new Set([Jd]),
+                     pd = [Jd];
+                   for (; pd.length > 0;) {
+                     const Jd = pd.shift();
+                     for (const Nd of dd) Nd.from !== Jd || kd.has(Nd.to) || (kd.add(Nd.to), pd.push(Nd.to))
```

#### 1238. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15245-L15248` → after: `L15245-L15248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15245-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15245-L15248) · [Before (L15245-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15245-L15248)

```diff
-                   return hb
-                 }(bb.steps, ub.to),
-                 Gb = Bb.filter((bb => bb !== ub && hb.has(bb.from)));
-               return Ob(ub, Gb.map((bb => Ob(bb, []))))
+                   return kd
+                 }(dd.steps, Jd.to),
+                 Wd = pd.filter((dd => dd !== Jd && kd.has(dd.from)));
+               return Nd(Jd, Wd.map((dd => Nd(dd, []))))
```

#### 1239. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15251` → after: `L15251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15251) · [Before (L15251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15251)

```diff
-           if ("progressStep" === (null === Gb || void 0 === Gb ? void 0 : Gb.kind)) {
+           if ("progressStep" === (null === Wd || void 0 === Wd ? void 0 : Wd.kind)) {
```

#### 1240. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15253-L15259` → after: `L15253-L15259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15253-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15253-L15259) · [Before (L15253-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15253-L15259)

```diff
-               progression: bb
-             } = Gb, ub = bb.values[0].players, hb = bb.steps.filter((bb => bb.from.players >= ub * PC)), Bb = (hb, Bb) => ({
-               from: TC(bb.eventType, hb.from.value),
-               to: TC(bb.eventType, hb.to.value),
-               isOrLater: hb.reached > hb.to.players,
-               fromPlayers: hb.from.players,
-               lost: hb.lost,
+               progression: dd
+             } = Wd, Jd = dd.values[0].players, kd = dd.steps.filter((dd => dd.from.players >= Jd * Ex)), pd = (kd, pd) => ({
+               from: Hx(dd.eventType, kd.from.value),
+               to: Hx(dd.eventType, kd.to.value),
+               isOrLater: kd.reached > kd.to.players,
+               fromPlayers: kd.from.players,
+               lost: kd.lost,
```

#### 1241. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15263-L15264` → after: `L15263-L15264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15263-L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15263-L15264) · [Before (L15263-L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15263-L15264)

```diff
-                 gameCategory: bb.gameCategory,
-                 eventType: bb.eventType,
+                 gameCategory: dd.gameCategory,
+                 eventType: dd.eventType,
```

#### 1242. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15267-L15271` → after: `L15267-L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15267-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15267-L15271) · [Before (L15267-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15267-L15271)

```diff
-               share: hb.share,
-               players: hb.from.players * Math.min(1, ub > 0 && Ub > 0 ? Ub / ub : 1),
-               later: Bb
-             }), Ob = [Gb.step, Gb.mostLost, bb.lowestShare].filter((bb => null !== bb && hb.includes(bb)));
-             return [...new Set(Ob)].map((bb => Bb(bb, hb.slice(hb.indexOf(bb) + 1).map((bb => Bb(bb, []))))))
+               share: kd.share,
+               players: kd.from.players * Math.min(1, Jd > 0 && Pd > 0 ? Pd / Jd : 1),
+               later: pd
+             }), Nd = [Wd.step, Wd.mostLost, dd.lowestShare].filter((dd => null !== dd && kd.includes(dd)));
+             return [...new Set(Nd)].map((dd => pd(dd, kd.slice(kd.indexOf(dd) + 1).map((dd => pd(dd, []))))))
```

#### 1243. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15276-L15293` → after: `L15276-L15293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15276-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15276-L15293) · [Before (L15276-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15276-L15293)

```diff
-         function RC(bb, ub) {
-           const hb = dY(bb);
-           return hb.startsWith(`${ub}: `) ? hb.slice(ub.length + 2) : null
-         }
- 
-         function bd(bb, ub) {
-           var hb, Bb;
-           const Ob = function(bb) {
-             var ub, hb, Bb, Ob;
-             const Gb = null !== (ub = null === (hb = bb.playerTotals) || void 0 === hb ? void 0 : hb.playerTotals) && void 0 !== ub ? ub : {},
-               Ub = null !== (Bb = null === (Ob = bb.flow) || void 0 === Ob ? void 0 : Ob.edges) && void 0 !== Bb ? Bb : [];
-             let Lb = null;
-             return jY(Gb, ((ub, hb, Bb) => {
-               var Ob;
-               const Gb = null === (Ob = bb.worldCode) || void 0 === Ob ? void 0 : Ob.events.find((bb => bb.isLiteralType && bb.eventType === hb));
-               if (!MC.test(hb) || void 0 === Gb || null !== Gb.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function dq(dd, Jd) {
+           const kd = ig(dd);
+           return kd.startsWith(`${Jd}: `) ? kd.slice(Jd.length + 2) : null
+         }
+ 
+         function Jq(dd, Jd) {
+           var kd, pd;
+           const Nd = function(dd) {
+             var Jd, kd, pd, Nd;
+             const Wd = null !== (Jd = null === (kd = dd.playerTotals) || void 0 === kd ? void 0 : kd.playerTotals) && void 0 !== Jd ? Jd : {},
+               Pd = null !== (pd = null === (Nd = dd.flow) || void 0 === Nd ? void 0 : Nd.edges) && void 0 !== pd ? pd : [];
+             let Zd = null;
+             return Mg(Wd, ((Jd, kd, pd) => {
+               var Nd;
+               const Wd = null === (Nd = dd.worldCode) || void 0 === Nd ? void 0 : Nd.events.find((dd => dd.isLiteralType && dd.eventType === kd));
+               if (!yx.test(kd) || void 0 === Wd || null !== Wd.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1244. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15295-L15296` → after: `L15295-L15296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15295-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15295-L15296) · [Before (L15295-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15295-L15296)

```diff
-                     value: ub,
-                     players: hb
+                     value: Jd,
+                     players: kd
```

#### 1245. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15298-L15299` → after: `L15298-L15299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15298-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15298-L15299) · [Before (L15298-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15298-L15299)

```diff
-                 })).sort(((bb, ub) => ub.players - bb.players)),
-                 Sb = new Map(Yb.map(((bb, ub) => {
+                 })).sort(((dd, Jd) => Jd.players - dd.players)),
+                 Cd = new Map(gd.map(((dd, Jd) => {
```

#### 1246. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15301-L15303` → after: `L15301-L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15301-L15303) · [Before (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15301-L15303)

```diff
-                     value: hb
-                   } = bb;
-                   return [hb, ub]
+                     value: kd
+                   } = dd;
+                   return [kd, Jd]
```

#### 1247. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15305` → after: `L15305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15305) · [Before (L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15305)

```diff
-                 ab = Yb.every((bb => {
+                 Kd = gd.every((dd => {
```

#### 1248. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15307-L15309` → after: `L15307-L15309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15307-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15307-L15309) · [Before (L15307-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15307-L15309)

```diff
-                     value: ub
-                   } = bb;
-                   return Gb.values.includes(ub)
+                     value: Jd
+                   } = dd;
+                   return Wd.values.includes(Jd)
```

#### 1249. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15311` → after: `L15311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15311) · [Before (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15311)

```diff
-                 Hb = Yb.slice(1).every(((bb, ub) => {
+                 od = gd.slice(1).every(((dd, Jd) => {
```

#### 1250. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15313-L15315` → after: `L15313-L15315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15313-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15313-L15315) · [Before (L15313-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15313-L15315)

```diff
-                     players: hb
-                   } = bb;
-                   return hb < Yb[ub].players
+                     players: kd
+                   } = dd;
+                   return kd < gd[Jd].players
```

#### 1251. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15317-L15321` → after: `L15317-L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15317-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15317-L15321) · [Before (L15317-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15317-L15321)

```diff
-                 wb = Ub.some((bb => {
-                   var ub, Bb;
-                   const Ob = Sb.get(null !== (ub = RC(bb.from, hb)) && void 0 !== ub ? ub : ""),
-                     Gb = Sb.get(null !== (Bb = RC(bb.to, hb)) && void 0 !== Bb ? Bb : "");
-                   return void 0 !== Ob && void 0 !== Gb && Ob > Gb
+                 ld = Pd.some((dd => {
+                   var Jd, pd;
+                   const Nd = Cd.get(null !== (Jd = dq(dd.from, kd)) && void 0 !== Jd ? Jd : ""),
+                     Wd = Cd.get(null !== (pd = dq(dd.to, kd)) && void 0 !== pd ? pd : "");
+                   return void 0 !== Nd && void 0 !== Wd && Nd > Wd
```

#### 1252. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15323-L15327` → after: `L15323-L15327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15323-L15327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15323-L15327) · [Before (L15323-L15327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15323-L15327)

```diff
-                 Zb = null === Lb || Yb[0].players > Lb.values[0].players;
-               Yb.length >= NC && ab && Hb && !wb && Zb && (Lb = {
-                 gameCategory: ub,
-                 eventType: hb,
-                 values: Yb
+                 Qd = null === Zd || gd[0].players > Zd.values[0].players;
+               gd.length >= nx && Kd && od && !ld && Qd && (Zd = {
+                 gameCategory: Jd,
+                 eventType: kd,
+                 values: gd
```

#### 1253. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15329-L15332` → after: `L15329-L15332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15329-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15329-L15332) · [Before (L15329-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15329-L15332)

```diff
-             })), Lb
-           }(bb);
-           if (null === Ob) return [];
-           const Gb = null !== (hb = null === (Bb = bb.stats) || void 0 === Bb ? void 0 : Bb.rankingWindow.uniquePlayers) && void 0 !== hb ? hb : 0,
+             })), Zd
+           }(dd);
+           if (null === Nd) return [];
+           const Wd = null !== (kd = null === (pd = dd.stats) || void 0 === pd ? void 0 : pd.rankingWindow.uniquePlayers) && void 0 !== kd ? kd : 0,
```

#### 1254. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15334-L15340` → after: `L15334-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15334-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15334-L15340) · [Before (L15334-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15334-L15340)

```diff
-               values: Ub,
-               eventType: Lb
-             } = Ob,
-             Yb = Ub[0].players,
-             Sb = {
-               gameCategory: Ob.gameCategory,
-               eventType: Lb,
+               values: Pd,
+               eventType: Zd
+             } = Nd,
+             gd = Pd[0].players,
+             Cd = {
+               gameCategory: Nd.gameCategory,
+               eventType: Zd,
```

#### 1255. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15343-L15348` → after: `L15343-L15348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15343-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15343-L15348) · [Before (L15343-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15343-L15348)

```diff
-             ab = Ub.slice(1).flatMap(((bb, hb) => {
-               const Bb = Ub[hb];
-               return Bb.players >= ub && Bb.players >= Yb * PC ? [{
-                 from: Bb,
-                 to: bb,
-                 lost: Bb.players - bb.players
+             Kd = Pd.slice(1).flatMap(((dd, kd) => {
+               const pd = Pd[kd];
+               return pd.players >= Jd && pd.players >= gd * Ex ? [{
+                 from: pd,
+                 to: dd,
+                 lost: pd.players - dd.players
```

#### 1256. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15351-L15353` → after: `L15351-L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15351-L15353) · [Before (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15351-L15353)

```diff
-             Hb = (bb, ub) => ({
-               from: bb.from.value,
-               to: bb.to.value,
+             od = (dd, Jd) => ({
+               from: dd.from.value,
+               to: dd.to.value,
```

#### 1257. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15355-L15356` → after: `L15355-L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15355-L15356) · [Before (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15355-L15356)

```diff
-               fromPlayers: bb.from.players,
-               lost: bb.lost,
+               fromPlayers: dd.from.players,
+               lost: dd.lost,
```

#### 1258. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15359-L15363` → after: `L15359-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15359-L15363) · [Before (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15359-L15363)

```diff
-               selection: Sb,
-               group: Lb,
-               share: bb.to.players / bb.from.players,
-               players: bb.from.players * Math.min(1, Yb > 0 && Gb > 0 ? Gb / Yb : 1),
-               later: ub
+               selection: Cd,
+               group: Zd,
+               share: dd.to.players / dd.from.players,
+               players: dd.from.players * Math.min(1, gd > 0 && Wd > 0 ? Wd / gd : 1),
+               later: Jd
```

#### 1259. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15365-L15370` → after: `L15365-L15370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15365-L15370) · [Before (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15365-L15370)

```diff
-             wb = [...ab].sort(((bb, ub) => ub.lost - bb.lost))[0],
-             Zb = [...ab].sort(((bb, ub) => bb.to.players / bb.from.players - ub.to.players / ub.from.players))[0];
-           return [...new Set([wb, Zb])].flatMap((bb => {
-             if (void 0 === bb) return [];
-             const ub = ab.slice(ab.indexOf(bb) + 1).map((bb => Hb(bb, [])));
-             return [Hb(bb, ub)]
+             ld = [...Kd].sort(((dd, Jd) => Jd.lost - dd.lost))[0],
+             Qd = [...Kd].sort(((dd, Jd) => dd.to.players / dd.from.players - Jd.to.players / Jd.from.players))[0];
+           return [...new Set([ld, Qd])].flatMap((dd => {
+             if (void 0 === dd) return [];
+             const Jd = Kd.slice(Kd.indexOf(dd) + 1).map((dd => od(dd, [])));
+             return [od(dd, Jd)]
```

#### 1260. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15374` → after: `L15374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15374) · [Before (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15374)

```diff
-         function ud(bb, ub) {
+         function kq(dd, Jd) {
```

#### 1261. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15376-L15382` → after: `L15376-L15382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15376-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15376-L15382) · [Before (L15376-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15376-L15382)

```diff
-             share: hb,
-             players: Bb,
-             later: Ob,
-             ...Gb
-           } = bb, Ub = 1 - hb - IC;
-           return Ub > 0 && Bb >= ub && Gb.fromPlayers >= ub ? {
-             ...Gb,
+             share: kd,
+             players: pd,
+             later: Nd,
+             ...Wd
+           } = dd, Pd = 1 - kd - Tx;
+           return Pd > 0 && pd >= Jd && Wd.fromPlayers >= Jd ? {
+             ...Wd,
```

#### 1262. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15384` → after: `L15384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15384) · [Before (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15384)

```diff
-             score: Ub * Bb
+             score: Pd * pd
```

#### 1263. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15388-L15393` → after: `L15388-L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15388-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15388-L15393) · [Before (L15388-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15388-L15393)

```diff
-         function hd(bb, ub, hb, Bb, Ob, Gb) {
-           if (hb.length < NC || hb[0].players < Bb) return null;
-           const Ub = hb.slice(1).flatMap(((bb, ub) => {
-             const Gb = hb[ub],
-               Ub = Ob > 0 ? Math.min(Gb.players, Ob) : Gb.players;
-             return Gb.players >= Bb ? [(1 - Math.min(1, bb.players / Gb.players) - IC) * Ub] : []
+         function pq(dd, Jd, kd, pd, Nd, Wd) {
+           if (kd.length < nx || kd[0].players < pd) return null;
+           const Pd = kd.slice(1).flatMap(((dd, Jd) => {
+             const Wd = kd[Jd],
+               Pd = Nd > 0 ? Math.min(Wd.players, Nd) : Wd.players;
+             return Wd.players >= pd ? [(1 - Math.min(1, dd.players / Wd.players) - Tx) * Pd] : []
```

#### 1264. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15397-L15414` → after: `L15397-L15414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15397-L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15397-L15414) · [Before (L15397-L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15397-L15414)

```diff
-             eventType: bb,
-             order: ub,
-             values: hb.slice(0, sC),
-             hasMore: hb.length > sC,
-             selection: Gb,
-             score: Math.max(0, ...Ub)
-           }
-         }
- 
-         function Bd(bb, ub, hb) {
-           var Bb, Ob, Gb, Ub;
-           const Lb = null !== (Bb = null === (Ob = bb.stats) || void 0 === Ob ? void 0 : Ob.rankingWindow.uniquePlayers) && void 0 !== Bb ? Bb : 0,
-             Yb = null !== (Gb = null === (Ub = ub.dropoff) || void 0 === Ub ? void 0 : Ub.mostAboveMedian) && void 0 !== Gb ? Gb : null;
-           if (null === Yb || Lb < hb) return null;
-           const Sb = Yp(Yb);
-           if (null === Sb.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: dd,
+             order: Jd,
+             values: kd.slice(0, Ux),
+             hasMore: kd.length > Ux,
+             selection: Wd,
+             score: Math.max(0, ...Pd)
+           }
+         }
+ 
+         function Nq(dd, Jd, kd) {
+           var pd, Nd, Wd, Pd;
+           const Zd = null !== (pd = null === (Nd = dd.stats) || void 0 === Nd ? void 0 : Nd.rankingWindow.uniquePlayers) && void 0 !== pd ? pd : 0,
+             gd = null !== (Wd = null === (Pd = Jd.dropoff) || void 0 === Pd ? void 0 : Pd.mostAboveMedian) && void 0 !== Wd ? Wd : null;
+           if (null === gd || Zd < kd) return null;
+           const Cd = oO(gd);
+           if (null === Cd.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1265. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15416-L15419` → after: `L15416-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15416-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15416-L15419) · [Before (L15416-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15416-L15419)

```diff
-             minute: Sb.minute,
-             ended: Sb.endedPercent,
-             typicalEnded: Sb.medianEndedPercent,
-             score: ab / 100 * Lb
+             minute: Cd.minute,
+             ended: Cd.endedPercent,
+             typicalEnded: Cd.medianEndedPercent,
+             score: Kd / 100 * Zd
```

#### 1266. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15423-L15424` → after: `L15423-L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15423-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15423-L15424) · [Before (L15423-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15423-L15424)

```diff
-         function Od(bb, ub) {
-           const hb = 1 === bb.events.filter((bb => bb.eventType === ub.eventType)).length;
+         function Wq(dd, Jd) {
+           const kd = 1 === dd.events.filter((dd => dd.eventType === Jd.eventType)).length;
```

#### 1267. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15426-L15428` → after: `L15426-L15428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15426-L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15426-L15428) · [Before (L15426-L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15426-L15428)

```diff
-             gameCategory: bb.gameCategoryId,
-             eventType: ub.eventType,
-             eventValue: hb ? null : ub.eventValue
+             gameCategory: dd.gameCategoryId,
+             eventType: Jd.eventType,
+             eventValue: kd ? null : Jd.eventValue
```

#### 1268. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15432-L15436` → after: `L15432-L15436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15432-L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15432-L15436) · [Before (L15432-L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15432-L15436)

```diff
-         function Gd(bb, ub) {
-           var hb, Bb;
-           const Ob = null !== (hb = null === (Bb = bb.stats) || void 0 === Bb ? void 0 : Bb.rankingWindow.uniquePlayers) && void 0 !== hb ? hb : 0,
-             Gb = [...bb.heatmaps].sort(((bb, ub) => ub.players.totalCount - bb.players.totalCount))[0];
-           if (void 0 === Gb || Ob < ub) return null;
+         function Pq(dd, Jd) {
+           var kd, pd;
+           const Nd = null !== (kd = null === (pd = dd.stats) || void 0 === pd ? void 0 : pd.rankingWindow.uniquePlayers) && void 0 !== kd ? kd : 0,
+             Wd = [...dd.heatmaps].sort(((dd, Jd) => Jd.players.totalCount - dd.players.totalCount))[0];
+           if (void 0 === Wd || Nd < Jd) return null;
```

#### 1269. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15438-L15445` → after: `L15438-L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15438-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15438-L15445) · [Before (L15438-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15438-L15445)

```diff
-             areas: Ub,
-             total: Lb
-           } = go(Gb.players), Yb = Ub[0];
-           if (void 0 === Yb || Lb <= 0 || Yb.count / Lb < EC) return null;
-           const Sb = bb => ({
-               x: bb.x,
-               z: bb.z,
-               y: bb.busiestY
+             areas: Pd,
+             total: Zd
+           } = me(Wd.players), gd = Pd[0];
+           if (void 0 === gd || Zd <= 0 || gd.count / Zd < hx) return null;
+           const Cd = dd => ({
+               x: dd.x,
+               z: dd.z,
+               y: dd.busiestY
```

#### 1270. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15447` → after: `L15447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15447) · [Before (L15447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15447)

```diff
-             ab = Yb.count / Lb;
+             Kd = gd.count / Zd;
```

#### 1271. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15450-L15455` → after: `L15450-L15455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15450-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15450-L15455) · [Before (L15450-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15450-L15455)

```diff
-             category: Gb.gameCategoryId,
-             square: Sb(Yb),
-             share: ab,
-             next: Ub.slice(1, 1 + VC).filter((bb => bb.count / Lb >= yC)).map((bb => ({
-               square: Sb(bb),
-               share: bb.count / Lb
+             category: Wd.gameCategoryId,
+             square: Cd(gd),
+             share: Kd,
+             next: Pd.slice(1, 1 + ux).filter((dd => dd.count / Zd >= rx)).map((dd => ({
+               square: Cd(dd),
+               share: dd.count / Zd
```

#### 1272. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15458` → after: `L15458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15458) · [Before (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15458)

```diff
-               gameCategory: Gb.gameCategoryId,
+               gameCategory: Wd.gameCategoryId,
```

#### 1273. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15462-L15477` → after: `L15462-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15462-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15462-L15477) · [Before (L15462-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15462-L15477)

```diff
-             score: (ab - EC) * Ob
-           }
-         }
-         const Ud = /^(?:checkpoint|wave|island|zone|level)s?$/, Ld = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function Yd(bb, ub) {
-           var hb, Bb, Ob, Gb;
-           if (! function(bb) {
-               var ub, hb, Bb, Ob;
-               const Gb = bb.worldCode;
-               return [...(null !== (ub = null === Gb || void 0 === Gb ? void 0 : Gb.functions) && void 0 !== ub ? ub : []).map((bb => bb.name)), ...(null !== (hb = null === Gb || void 0 === Gb ? void 0 : Gb.constants) && void 0 !== hb ? hb : []).map((bb => bb.name)), ...(null !== … [truncated]
-             }(bb)) return null;
-           const Ub = bb.heatmaps.some((bb => bb.players.totalCount > 0 || bb.events.some((bb => bb.heatmap.totalCount > 0)))),
-             Lb = bb.missing.some((bb => mC.test(bb)));
-           if ((null !== (hb = null === (Bb = bb.flow) || void 0 === Bb ? void 0 : Bb.edges.length) && void 0 !== hb ? hb : 0) > 0 || ub.progressions.length > 0 || Ub || Lb) return null;
-           const Yb = Object.values(null !== (Ob = null === (Gb = bb.playerTotals) || void 0 === Gb ? void 0 : Gb.playerTotals) && void 0 !== Ob ? Ob : {}).flatMap((bb => Object.keys(bb)));
+             score: (Kd - hx) * Nd
+           }
+         }
+         const Zq = /^(?:checkpoint|wave|island|zone|level)s?$/, gq = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function Cq(dd, Jd) {
+           var kd, pd, Nd, Wd;
+           if (! function(dd) {
+               var Jd, kd, pd, Nd;
+               const Wd = dd.worldCode;
+               return [...(null !== (Jd = null === Wd || void 0 === Wd ? void 0 : Wd.functions) && void 0 !== Jd ? Jd : []).map((dd => dd.name)), ...(null !== (kd = null === Wd || void 0 === Wd ? void 0 : Wd.constants) && void 0 !== kd ? kd : []).map((dd => dd.name)), ...(null !== … [truncated]
+             }(dd)) return null;
+           const Pd = dd.heatmaps.some((dd => dd.players.totalCount > 0 || dd.events.some((dd => dd.heatmap.totalCount > 0)))),
+             Zd = dd.missing.some((dd => Dx.test(dd)));
+           if ((null !== (kd = null === (pd = dd.flow) || void 0 === pd ? void 0 : pd.edges.length) && void 0 !== kd ? kd : 0) > 0 || Jd.progressions.length > 0 || Pd || Zd) return null;
+           const gd = Object.values(null !== (Nd = null === (Wd = dd.playerTotals) || void 0 === Wd ? void 0 : Wd.playerTotals) && void 0 !== Nd ? Nd : {}).flatMap((dd => Object.keys(dd)));
```

#### 1274. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15480` → after: `L15480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15480) · [Before (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15480)

```diff
-             line: PX(bb.worldCode, Yb),
+             line: rL(dd.worldCode, gd),
```

#### 1275. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15485-L15498` → after: `L15485-L15498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15485-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15485-L15498) · [Before (L15485-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15485-L15498)

```diff
-         function Sd(bb) {
-           var ub, hb, Bb, Ob;
-           const Gb = oo(bb),
-             Ub = null !== (ub = null === (hb = bb.stats) || void 0 === hb ? void 0 : hb.rankingWindow.uniquePlayers) && void 0 !== ub ? ub : 0,
-             Lb = Ub >= eC && Ub < JC,
-             Yb = Lb ? eC : JC,
-             Sb = function(bb, ub) {
-               return bb.flatMap((bb => {
-                 const hb = ud(bb, ub);
-                 if (null === hb) return [];
-                 const Bb = bb.later.map((bb => ud(bb, ub))).filter((bb => null !== bb && bb.lost >= hb.lost * fC)).sort(((bb, ub) => ub.lost - bb.lost))[0];
-                 return [void 0 === Bb ? hb : {
-                   ...hb,
-                   next: Bb
+         function Kq(dd) {
+           var Jd, kd, pd, Nd;
+           const Wd = Ge(dd),
+             Pd = null !== (Jd = null === (kd = dd.stats) || void 0 === kd ? void 0 : kd.rankingWindow.uniquePlayers) && void 0 !== Jd ? Jd : 0,
+             Zd = Pd >= fx && Pd < Xx,
+             gd = Zd ? fx : Xx,
+             Cd = function(dd, Jd) {
+               return dd.flatMap((dd => {
+                 const kd = kq(dd, Jd);
+                 if (null === kd) return [];
+                 const pd = dd.later.map((dd => kq(dd, Jd))).filter((dd => null !== dd && dd.lost >= kd.lost * Vx)).sort(((dd, Jd) => Jd.lost - dd.lost))[0];
+                 return [void 0 === pd ? kd : {
+                   ...kd,
+                   next: pd
```

#### 1276. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15500-L15505` → after: `L15500-L15505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15500-L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15500-L15505) · [Before (L15500-L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15500-L15505)

```diff
-               })).sort(((bb, ub) => ub.score - bb.score)).slice(0, FC)
-             }([...QC(bb, Gb, Yb), ...bd(bb, Yb)], Yb),
-             ab = null !== (Bb = Lb ? function(bb, ub, hb) {
-               var Bb, Ob;
-               const Gb = Lp(null !== (Bb = null === (Ob = bb.playerTotals) || void 0 === Ob ? void 0 : Ob.playerTotals) && void 0 !== Bb ? Bb : {}, ub)[0];
-               if (void 0 === Gb) return null;
+               })).sort(((dd, Jd) => Jd.score - dd.score)).slice(0, tx)
+             }([...Ax(dd, Wd, gd), ...Jq(dd, gd)], gd),
+             Kd = null !== (pd = Zd ? function(dd, Jd, kd) {
+               var pd, Nd;
+               const Wd = KO(null !== (pd = null === (Nd = dd.playerTotals) || void 0 === Nd ? void 0 : Nd.playerTotals) && void 0 !== pd ? pd : {}, Jd)[0];
+               if (void 0 === Wd) return null;
```

#### 1277. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15507-L15508` → after: `L15507-L15508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15507-L15508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15507-L15508) · [Before (L15507-L15508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15507-L15508)

```diff
-                 eventType: Ub
-               } = Gb, Lb = Gb.values.map((bb => {
+                 eventType: Pd
+               } = Wd, Zd = Wd.values.map((dd => {
```

#### 1278. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15510-L15512` → after: `L15510-L15512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15510-L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15510-L15512) · [Before (L15510-L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15510-L15512)

```diff
-                   value: ub,
-                   players: hb
-                 } = bb;
+                   value: Jd,
+                   players: kd
+                 } = dd;
```

#### 1279. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15514-L15515` → after: `L15514-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15514-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15514-L15515) · [Before (L15514-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15514-L15515)

```diff
-                   name: TC(Ub, ub),
-                   players: hb
+                   name: Hx(Pd, Jd),
+                   players: kd
```

#### 1280. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15517-L15519` → after: `L15517-L15519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15517-L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15517-L15519) · [Before (L15517-L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15517-L15519)

```diff
-               })), Yb = {
-                 gameCategory: Gb.gameCategory,
-                 eventType: Ub,
+               })), gd = {
+                 gameCategory: Wd.gameCategory,
+                 eventType: Pd,
```

#### 1281. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15521-L15523` → after: `L15521-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15521-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15521-L15523) · [Before (L15521-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15521-L15523)

```diff
-               }, Sb = hd(Ub, "number", Lb, ub, hb, Yb), ab = Gb.steps.filter((bb => bb.from.players >= kC && 1 - bb.share > IC)).sort(((bb, ub) => bb.share - ub.share || ub.lost - bb.lost))[0];
-               return "ladder" !== (null === Sb || void 0 === Sb ? void 0 : Sb.kind) || void 0 === ab ? Sb : {
-                 ...Sb,
+               }, Cd = pq(Pd, "number", Zd, Jd, kd, gd), Kd = Wd.steps.filter((dd => dd.from.players >= zx && 1 - dd.share > Tx)).sort(((dd, Jd) => dd.share - Jd.share || Jd.lost - dd.lost))[0];
+               return "ladder" !== (null === Cd || void 0 === Cd ? void 0 : Cd.kind) || void 0 === Kd ? Cd : {
+                 ...Cd,
```

#### 1282. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15525-L15529` → after: `L15525-L15529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15525-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15525-L15529) · [Before (L15525-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15525-L15529)

```diff
-                   from: TC(Ub, ab.from.value),
-                   to: TC(Ub, ab.to.value),
-                   fromPlayers: ab.from.players,
-                   reached: ab.reached,
-                   isOrLater: ab.reached > ab.to.players
+                   from: Hx(Pd, Kd.from.value),
+                   to: Hx(Pd, Kd.to.value),
+                   fromPlayers: Kd.from.players,
+                   reached: Kd.reached,
+                   isOrLater: Kd.reached > Kd.to.players
```

#### 1283. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15532-L15538` → after: `L15532-L15538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15532-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15532-L15538) · [Before (L15532-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15532-L15538)

```diff
-             }(bb, Yb, Ub) : null) && void 0 !== Bb ? Bb : 0 === Sb.length ? function(bb, ub, hb) {
-               var Bb, Ob;
-               let Gb = null;
-               return jY(null !== (Bb = null === (Ob = bb.playerTotals) || void 0 === Ob ? void 0 : Ob.playerTotals) && void 0 !== Bb ? Bb : {}, ((bb, Bb, Ob) => {
-                 if (!MC.test(Bb)) return;
-                 const Ub = hd(Bb, "players", Object.entries(Ob).map((bb => {
-                   let [ub, hb] = bb;
+             }(dd, gd, Pd) : null) && void 0 !== pd ? pd : 0 === Cd.length ? function(dd, Jd, kd) {
+               var pd, Nd;
+               let Wd = null;
+               return Mg(null !== (pd = null === (Nd = dd.playerTotals) || void 0 === Nd ? void 0 : Nd.playerTotals) && void 0 !== pd ? pd : {}, ((dd, pd, Nd) => {
+                 if (!yx.test(pd)) return;
+                 const Pd = pq(pd, "players", Object.entries(Nd).map((dd => {
+                   let [Jd, kd] = dd;
```

#### 1284. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15540-L15541` → after: `L15540-L15541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15540-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15540-L15541) · [Before (L15540-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15540-L15541)

```diff
-                     name: ub,
-                     players: hb
+                     name: Jd,
+                     players: kd
```

#### 1285. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15543-L15545` → after: `L15543-L15545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15543-L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15543-L15545) · [Before (L15543-L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15543-L15545)

```diff
-                 })).sort(((bb, ub) => ub.players - bb.players)), ub, hb, {
-                   gameCategory: bb,
-                   eventType: Bb,
+                 })).sort(((dd, Jd) => Jd.players - dd.players)), Jd, kd, {
+                   gameCategory: dd,
+                   eventType: pd,
```

#### 1286. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15548-L15560` → after: `L15548-L15560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15548-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15548-L15560) · [Before (L15548-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15548-L15560)

```diff
-                 "ladder" === (null === Ub || void 0 === Ub ? void 0 : Ub.kind) && (null === Gb || Ub.values[0].players > Gb.values[0].players) && (Gb = Ub)
-               })), Gb
-             }(bb, Yb, Ub) : null,
-             Hb = null === ab ? Sb : [ab],
-             wb = Bd(bb, Gb, Yb),
-             Zb = null !== (Ob = function(bb, ub) {
-               var hb, Bb;
-               const Ob = null !== (hb = null === (Bb = bb.stats) || void 0 === Bb ? void 0 : Bb.rankingWindow.uniquePlayers) && void 0 !== hb ? hb : 0;
-               if (Ob < ub) return null;
-               let Gb = null;
-               for (const Ub of bb.heatmaps)
-                 for (const hb of Ub.events) {
-                   if (!rZ(hb.eventType) || null !== sa(hb.eventType, hb.eventValue, bb.worldCode)) continue;
+                 "ladder" === (null === Pd || void 0 === Pd ? void 0 : Pd.kind) && (null === Wd || Pd.values[0].players > Wd.values[0].players) && (Wd = Pd)
+               })), Wd
+             }(dd, gd, Pd) : null,
+             od = null === Kd ? Cd : [Kd],
+             ld = Nq(dd, Wd, gd),
+             Qd = null !== (Nd = function(dd, Jd) {
+               var kd, pd;
+               const Nd = null !== (kd = null === (pd = dd.stats) || void 0 === pd ? void 0 : pd.rankingWindow.uniquePlayers) && void 0 !== kd ? kd : 0;
+               if (Nd < Jd) return null;
+               let Wd = null;
+               for (const Pd of dd.heatmaps)
+                 for (const kd of Pd.events) {
+                   if (!MQ(kd.eventType) || null !== DK(kd.eventType, kd.eventValue, dd.worldCode)) continue;
```

#### 1287. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15562-L15565` → after: `L15562-L15565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15562-L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15562-L15565) · [Before (L15562-L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15562-L15565)

```diff
-                     areas: Bb,
-                     total: Ob
-                   } = go(hb.heatmap), Lb = Bb[0];
-                   void 0 === Lb || Ob < ub || Lb.count / Ob < EC || null !== Gb && Lb.count <= Gb.count || (Gb = {
+                     areas: pd,
+                     total: Nd
+                   } = me(kd.heatmap), Zd = pd[0];
+                   void 0 === Zd || Nd < Jd || Zd.count / Nd < hx || null !== Wd && Zd.count <= Wd.count || (Wd = {
```

#### 1288. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15567` → after: `L15567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15567) · [Before (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15567)

```diff
-                     category: Ub.gameCategoryId,
+                     category: Pd.gameCategoryId,
```

#### 1289. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15569-L15571` → after: `L15569-L15571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15569-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15569-L15571) · [Before (L15569-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15569-L15571)

```diff
-                       x: Lb.x,
-                       z: Lb.z,
-                       y: Lb.busiestY
+                       x: Zd.x,
+                       z: Zd.z,
+                       y: Zd.busiestY
```

#### 1290. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15573-L15576` → after: `L15573-L15576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15573-L15576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15573-L15576) · [Before (L15573-L15576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15573-L15576)

```diff
-                     count: Lb.count,
-                     total: Ob,
-                     death: "" === hb.eventValue ? null : `${hb.eventType}: ${hb.eventValue}`,
-                     selection: Od(Ub, hb)
+                     count: Zd.count,
+                     total: Nd,
+                     death: "" === kd.eventValue ? null : `${kd.eventType}: ${kd.eventValue}`,
+                     selection: Wq(Pd, kd)
```

#### 1291. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15579-L15581` → after: `L15579-L15581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15579-L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15579-L15581) · [Before (L15579-L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15579-L15581)

```diff
-               return null === Gb ? null : {
-                 ...Gb,
-                 score: (Gb.count / Gb.total - EC) * Ob
+               return null === Wd ? null : {
+                 ...Wd,
+                 score: (Wd.count / Wd.total - hx) * Nd
```

#### 1292. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15583-L15594` → after: `L15583-L15594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15583-L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15583-L15594) · [Before (L15583-L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15583-L15594)

```diff
-             }(bb, Yb)) && void 0 !== Ob ? Ob : Gd(bb, Yb),
-             Xb = null !== wb && (0 === Hb.length || wb.score > Hb[0].score) ? [wb, ...Hb] : Hb,
-             pb = (null === Zb ? Xb : [...Xb, Zb]).map((bb => Lb ? {
-               ...bb,
-               fewPlayers: Ub
-             } : bb)),
-             ob = Yd(bb, Gb);
-           return null === ob ? pb : [...pb, ob]
-         }
- 
-         function ad(bb) {
-           return ` ${bb.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const Hd=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function wd(bb,ub){const hb=ad(ub);switch(bb.kind){case"step":{const ub=function(bb){var ub,hb;return null!==(ub … [truncated]
+             }(dd, gd)) && void 0 !== Nd ? Nd : Pq(dd, gd),
+             Ld = null !== ld && (0 === od.length || ld.score > od[0].score) ? [ld, ...od] : od,
+             Od = (null === Qd ? Ld : [...Ld, Qd]).map((dd => Zd ? {
+               ...dd,
+               fewPlayers: Pd
+             } : dd)),
+             ed = Cq(dd, Wd);
+           return null === ed ? Od : [...Od, ed]
+         }
+ 
+         function oq(dd) {
+           return ` ${dd.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const lq=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function Qq(dd,Jd){const kd=oq(Jd);switch(dd.kind){case"step":{const Jd=function(dd){var Jd,kd;return null!==(Jd … [truncated]
```

#### 1293. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15596` → after: `L15596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15596) · [Before (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15596)

```diff
-             ub[1]
+             Jd[1]
```

#### 1294. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15599` → after: `L15599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15599) · [Before (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15599)

```diff
-             ub[2]
+             Jd[2]
```

#### 1295. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15601` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15601) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15601)

```diff
-           `]}(bb).some((bb=>function(bb,ub){const hb=ad(ub).trim();return""!==hb&&bb.includes(`
+           `]}(dd).some((dd=>function(dd,Jd){const kd=oq(Jd).trim();return""!==kd&&dd.includes(`
```

#### 1296. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15603` → after: `L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15603) · [Before (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15603)

```diff
-             hb
+             kd
```

#### 1297. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15605` → after: `L15605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15605) · [Before (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15605)

```diff
-           `)}(hb,bb)));return Bb(bb.to)||Bb(bb.from)&&null!==ub&&hb.includes(`
+           `)}(kd,dd)));return pd(dd.to)||pd(dd.from)&&null!==Jd&&kd.includes(`
```

#### 1298. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15607` → after: `L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15607) · [Before (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15607)

```diff
-             ub
+             Jd
```

#### 1299. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15609` → after: `L15609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15609) · [Before (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15609)

```diff
-           `)}case"deaths":case"place":{const{square:hb}=bb;return function(bb){return[...bb.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((bb=>({x:Number(bb[1]),z:Number(bb[2])})))}(ub).some((bb=>function(bb,ub){return bb.x>=ub.x&&bb.x<ub.x+no&&bb.z>=u … [truncated]
+           `)}case"deaths":case"place":{const{square:kd}=dd;return function(dd){return[...dd.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((dd=>({x:Number(dd[1]),z:Number(dd[2])})))}(Jd).some((dd=>function(dd,Jd){return dd.x>=Jd.x&&dd.x<Jd.x+ae&&dd.z>=J … [truncated]
```

#### 1300. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15611` → after: `L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15611) · [Before (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15611)

```diff
-             Bb
+             pd
```

#### 1301. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15615` → after: `L15615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15615) · [Before (L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15615)

```diff
-             Bb
+             pd
```

#### 1302. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15619` → after: `L15619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15619) · [Before (L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15619)

```diff
-             Bb
+             pd
```

#### 1303. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15623` → after: `L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15623) · [Before (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15623)

```diff
-             Bb
+             pd
```

#### 1304. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15627` → after: `L15627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15627) · [Before (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15627)

```diff
-             bb
+             dd
```

#### 1305. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15629` → after: `L15629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15629) · [Before (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15629)

```diff
-           `)))}}}function Zd(bb,ub,hb){if("young"===hb){var Bb;const hb=[bb.reduce(((bb,ub)=>"unseen"!==ub.kind&&(null===bb||ub.score>bb.score)?ub:bb),null),null!==(Bb=bb.find((bb=>"unseen"===bb.kind)))&&void 0!==Bb?Bb:null].find((bb=>null!==bb&&!wd(bb,ub)));return void 0===hb||n … [truncated]
+           `)))}}}function Lq(dd,Jd,kd){if("young"===kd){var pd;const kd=[dd.reduce(((dd,Jd)=>"unseen"!==Jd.kind&&(null===dd||Jd.score>dd.score)?Jd:dd),null),null!==(pd=dd.find((dd=>"unseen"===dd.kind)))&&void 0!==pd?pd:null].find((dd=>null!==dd&&!Qq(dd,Jd)));return void 0===kd||n … [truncated]
```

#### 1306. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15631` → after: `L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15631) · [Before (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15631)

```diff
-             bb
+             dd
```

#### 1307. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15634` → after: `L15634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15634) · [Before (L15634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15634)

```diff
-             Bb[2]
+             pd[2]
```

#### 1308. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15638` → after: `L15638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15638) · [Before (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15638)

```diff
-             bb
+             dd
```

#### 1309. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15641)

```diff
-             ub
+             Jd
```

#### 1310. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15645` → after: `L15645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15645) · [Before (L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15645)

```diff
-             bb.x
+             dd.x
```

#### 1311. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15648` → after: `L15648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15648) · [Before (L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15648)

```diff
-             bb.x + hb
+             dd.x + kd
```

#### 1312. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15650` → after: `L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15650) · [Before (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15650)

```diff
-             bb.z
+             dd.z
```

#### 1313. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15653` → after: `L15653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15653) · [Before (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15653)

```diff
-             bb.z + hb
+             dd.z + kd
```

#### 1314. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15656` → after: `L15656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15656) · [Before (L15656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15656)

```diff
-             ub ? ` (height y ${bb.y})` : ""
+             Jd ? ` (height y ${dd.y})` : ""
```

#### 1315. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15660` → after: `L15660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15660) · [Before (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15660)

```diff
-             bb.x + ub
+             dd.x + Jd
```

#### 1316. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15662` → after: `L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15662) · [Before (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15662)

```diff
-             bb.z + ub
+             dd.z + Jd
```

#### 1317. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15666` → after: `L15666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15666) · [Before (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15666)

```diff
-             ub("deaths")
+             Jd("deaths")
```

#### 1318. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15668` → after: `L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15668) · [Before (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15668)

```diff
-           `];const hb=bb.indexOf(": "),Bb=-1===hb?null:function(bb){const ub=bb.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((bb=>""!==bb));return ub.length>0&&ub.length<=3&&ub.every((bb=>/^[A-Za-z]+$/.test(bb)&&!/^[a-z]{3,}ed$/i.test(bb)&&!ld.test(bb.toLowerCase()) … [truncated]
+           `];const kd=dd.indexOf(": "),pd=-1===kd?null:function(dd){const Jd=dd.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((dd=>""!==dd));return Jd.length>0&&Jd.length<=3&&Jd.every((dd=>/^[A-Za-z]+$/.test(dd)&&!/^[a-z]{3,}ed$/i.test(dd)&&!Gq.test(dd.toLowerCase()) … [truncated]
```

#### 1319. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15670` → after: `L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15670) · [Before (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15670)

```diff
-             ub("deaths logged as")
+             Jd("deaths logged as")
```

#### 1320. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15674` → after: `L15674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15674) · [Before (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15674)

```diff
-             Bb
+             pd
```

#### 1321. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15677` → after: `L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15677) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15677)

```diff
-             ub("deaths")
+             Jd("deaths")
```

#### 1322. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15681` → after: `L15681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15681) · [Before (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15681)

```diff
-             bb.to
+             dd.to
```

#### 1323. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15684` → after: `L15684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15684) · [Before (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15684)

```diff
-             hb("or later")
+             kd("or later")
```

#### 1324. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15688` → after: `L15688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15688) · [Before (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15688)

```diff
-             (0, HU.b)(bb.group)
+             (0, LP.d)(dd.group)
```

#### 1325. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15690` → after: `L15690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15690) · [Before (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15690)

```diff
-             bb.from
+             dd.from
```

#### 1326. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15693` → after: `L15693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15693) · [Before (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15693)

```diff
-             bb.to
+             dd.to
```

#### 1327. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15697)

```diff
-             (0, HU.l)(bb.lost)
+             (0, LP.l)(dd.lost)
```

#### 1328. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15700` → after: `L15700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15700) · [Before (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15700)

```diff
-             hb("of the")
+             kd("of the")
```

#### 1329. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15703` → after: `L15703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15703) · [Before (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15703)

```diff
-             (0, HU.l)(bb.fromPlayers)
+             (0, LP.l)(dd.fromPlayers)
```

#### 1330. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15706` → after: `L15706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15706) · [Before (L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15706)

```diff
-             hb("players who reached")
+             kd("players who reached")
```

#### 1331. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15709` → after: `L15709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15709) · [Before (L15709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15709)

```diff
-             bb.from
+             dd.from
```

#### 1332. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15712` → after: `L15712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15712) · [Before (L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15712)

```diff
-             hb("didn't reach")
+             kd("didn't reach")
```

#### 1333. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15715` → after: `L15715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15715) · [Before (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15715)

```diff
-             Ob
+             Nd
```

#### 1334. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15717` → after: `L15717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15717) · [Before (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15717)

```diff
-             Yb
+             gd
```

#### 1335. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15720` → after: `L15720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15720) · [Before (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15720)

```diff
-             Gb
+             Wd
```

#### 1336. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15723` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15723) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15723)

```diff
-             hb("in 100 players who get to")
+             kd("in 100 players who get to")
```

#### 1337. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15726` → after: `L15726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15726) · [Before (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15726)

```diff
-             bb.from
+             dd.from
```

#### 1338. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15729` → after: `L15729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15729) · [Before (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15729)

```diff
-             hb("don't get to")
+             kd("don't get to")
```

#### 1339. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15732` → after: `L15732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15732) · [Before (L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15732)

```diff
-             Ob
+             Nd
```

#### 1340. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15736` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15736) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15736)

```diff
-             Gb
+             Wd
```

#### 1341. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15739` → after: `L15739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15739) · [Before (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15739)

```diff
-             hb("of every 100 players who reach")
+             kd("of every 100 players who reach")
```

#### 1342. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15742)

```diff
-             bb.from
+             dd.from
```

#### 1343. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15744` → after: `L15744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15744) · [Before (L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15744)

```diff
-             (0, HU.l)(bb.fromPlayers)
+             (0, LP.l)(dd.fromPlayers)
```

#### 1344. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15746` → after: `L15746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15746) · [Before (L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15746)

```diff
-             hb("don't reach")
+             kd("don't reach")
```

#### 1345. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15749` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15749) · [Before (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15749)

```diff
-             Ob
+             Nd
```

#### 1346. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15751` → after: `L15751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15751) · [Before (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15751)

```diff
-             (0, HU.l)(bb.fromPlayers - bb.lost)
+             (0, LP.l)(dd.fromPlayers - dd.lost)
```

#### 1347. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15753` → after: `L15753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15753) · [Before (L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15753)

```diff
-             Yb
+             gd
```

#### 1348. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15757` → after: `L15757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15757) · [Before (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15757)

```diff
-             Gb
+             Wd
```

#### 1349. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15760)

```diff
-             hb("of every 100 players who reach")
+             kd("of every 100 players who reach")
```

#### 1350. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15763` → after: `L15763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15763) · [Before (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15763)

```diff
-             bb.from
+             dd.from
```

#### 1351. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15766)

```diff
-             hb("don't reach")
+             kd("don't reach")
```

#### 1352. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15769` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15769) · [Before (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15769)

```diff
-             Ob
+             Nd
```

#### 1353. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15771` → after: `L15771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15771) · [Before (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15771)

```diff
-               (0, HU.l)(bb.lost)
+               (0, LP.l)(dd.lost)
```

#### 1354. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15774` → after: `L15774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15774) · [Before (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15774)

```diff
-               hb("of")
+               kd("of")
```

#### 1355. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15777` → after: `L15777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15777) · [Before (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15777)

```diff
-               (0, HU.l)(bb.fromPlayers)
+               (0, LP.l)(dd.fromPlayers)
```

#### 1356. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15779` → after: `L15779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15779) · [Before (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15779)

```diff
-               Yb
+               gd
```

#### 1357. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15782` → after: `L15782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15782) · [Before (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15782)

```diff
-             hb("in")
+             kd("in")
```

#### 1358. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15785` → after: `L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15785) · [Before (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15785)

```diff
-             bb.category
+             dd.category
```

#### 1359. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15789)

```diff
-             (0, HU.l)(bb.count)
+             (0, LP.l)(dd.count)
```

#### 1360. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15792` → after: `L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15792) · [Before (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15792)

```diff
-             hb("of")
+             kd("of")
```

#### 1361. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15795` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15795) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15795)

```diff
-             (0, HU.l)(bb.total)
+             (0, LP.l)(dd.total)
```

#### 1362. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15797` → after: `L15797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15797) · [Before (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15797)

```diff
-           `:null,Ub=Xd(bb.count,bb.total),Lb=Kd(bb.death,hb);return ub?{label:2*bb.count>bb.total?hb("Most deaths"):hb("Many deaths"),parts:[null!==Gb&&void 0!==Gb?Gb:`
+           `:null,Pd=Oq(dd.count,dd.total),Zd=vq(dd.death,kd);return Jd?{label:2*dd.count>dd.total?kd("Most deaths"):kd("Many deaths"),parts:[null!==Wd&&void 0!==Wd?Wd:`
```

#### 1363. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15799` → after: `L15799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15799) · [Before (L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15799)

```diff
-             Ub
+             Pd
```

#### 1364. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15802` → after: `L15802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15802) · [Before (L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15802)

```diff
-             hb("in 100")
+             kd("in 100")
```

#### 1365. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15806` → after: `L15806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15806) · [Before (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15806)

```diff
-             hb("happen near")
+             kd("happen near")
```

#### 1366. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15809)

```diff
-             Ad(bb.square)
+             Iq(dd.square)
```

#### 1367. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15812` → after: `L15812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15812) · [Before (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15812)

```diff
-             Ob
+             Nd
```

#### 1368. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15816` → after: `L15816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15816) · [Before (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15816)

```diff
-             hb("Death hotspot")
+             kd("Death hotspot")
```

#### 1369. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15819` → after: `L15819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15819) · [Before (L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15819)

```diff
-             Ob
+             Nd
```

#### 1370. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15821)

```diff
-           `,parts:[null!==Gb&&void 0!==Gb?Gb:`
+           `,parts:[null!==Wd&&void 0!==Wd?Wd:`
```

#### 1371. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15823` → after: `L15823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15823) · [Before (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15823)

```diff
-             Ub
+             Pd
```

#### 1372. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15826` → after: `L15826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15826) · [Before (L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15826)

```diff
-             hb("of every 100")
+             kd("of every 100")
```

#### 1373. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15830` → after: `L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15830) · [Before (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15830)

```diff
-             Ob
+             Nd
```

#### 1374. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15833` → after: `L15833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15833) · [Before (L15833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15833)

```diff
-             hb("in the past week happened at")
+             kd("in the past week happened at")
```

#### 1375. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15836` → after: `L15836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15836) · [Before (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15836)

```diff
-             od(bb.square)
+             Rq(dd.square)
```

#### 1376. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15840` → after: `L15840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15840) · [Before (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15840)

```diff
-             hb("in")
+             kd("in")
```

#### 1377. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15843)

```diff
-             bb.category
+             dd.category
```

#### 1378. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15847` → after: `L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15847) · [Before (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15847)

```diff
-             hb("near")
+             kd("near")
```

#### 1379. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15850` → after: `L15850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15850) · [Before (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15850)

```diff
-             Ad(bb.square)
+             Iq(dd.square)
```

#### 1380. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15853` → after: `L15853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15853) · [Before (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15853)

```diff
-             Bb
+             pd
```

#### 1381. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15855` → after: `L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15855) · [Before (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15855)

```diff
-             Ob
+             Nd
```

#### 1382. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15858` → after: `L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15858) · [Before (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15858)

```diff
-             hb("in 100 minutes of play")
+             kd("in 100 minutes of play")
```

#### 1383. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15862` → after: `L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15862) · [Before (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15862)

```diff
-             od(ub, !1)
+             Rq(Jd, !1)
```

#### 1384. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15864` → after: `L15864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15864) · [Before (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15864)

```diff
-               Xd(Bb, 1)
+               Oq(pd, 1)
```

#### 1385. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15867` → after: `L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15867) · [Before (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15867)

```diff
-               hb("of 100")
+               kd("of 100")
```

#### 1386. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15870` → after: `L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15870) · [Before (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15870)

```diff
-             hb("Busiest place")
+             kd("Busiest place")
```

#### 1387. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15873` → after: `L15873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15873) · [Before (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15873)

```diff
-             Bb
+             pd
```

#### 1388. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15877` → after: `L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15877) · [Before (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15877)

```diff
-             od(bb.square)
+             Rq(dd.square)
```

#### 1389. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15879` → after: `L15879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15879) · [Before (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15879)

```diff
-             hb("with")
+             kd("with")
```

#### 1390. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15882` → after: `L15882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15882) · [Before (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15882)

```diff
-             Ob
+             Nd
```

#### 1391. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15885` → after: `L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15885) · [Before (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15885)

```diff
-             hb("of every 100 minutes played")
+             kd("of every 100 minutes played")
```

#### 1392. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15888` → after: `L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15888) · [Before (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15888)

```diff
-             0 === Gb.length ? "" : `; ${hb("next busiest")}: ${Gb.join(", ")}`
+             0 === Wd.length ? "" : `; ${kd("next busiest")}: ${Wd.join(", ")}`
```

#### 1393. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15892` → after: `L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15892) · [Before (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15892)

```diff
-             Bb
+             pd
```

#### 1394. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15894` → after: `L15894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15894) · [Before (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15894)

```diff
-             (0, HU.l)(Ob)
+             (0, LP.l)(Nd)
```

#### 1395. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15897` → after: `L15897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15897) · [Before (L15897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15897)

```diff
-             0 === ub ? ` ${hb("players")}` : ""
+             0 === Jd ? ` ${kd("players")}` : ""
```

#### 1396. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15901)

```diff
-             hb("Players per")
+             kd("Players per")
```

#### 1397. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15904` → after: `L15904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15904) · [Before (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15904)

```diff
-             bb.eventType
+             dd.eventType
```

#### 1398. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15907` → after: `L15907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15907) · [Before (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15907)

```diff
-             hb("event")
+             kd("event")
```

#### 1399. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15911` → after: `L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15911) · [Before (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15911)

```diff
-             hb("Players at each")
+             kd("Players at each")
```

#### 1400. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15914` → after: `L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15914) · [Before (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15914)

```diff
-             bb.eventType
+             dd.eventType
```

#### 1401. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15917` → after: `L15917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15917) · [Before (L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15917)

```diff
-             pd(Gb.from, Gb.to)
+             eq(Wd.from, Wd.to)
```

#### 1402. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15920` → after: `L15920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15920) · [Before (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15920)

```diff
-             Gb.isOrLater ? ` ${hb("or later")}` : ""
+             Wd.isOrLater ? ` ${kd("or later")}` : ""
```

#### 1403. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15923` → after: `L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15923) · [Before (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15923)

```diff
-             hb("loses the most")
+             kd("loses the most")
```

#### 1404. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15925` → after: `L15925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15925) · [Before (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15925)

```diff
-             (0, HU.l)(Gb.fromPlayers)
+             (0, LP.l)(Wd.fromPlayers)
```

#### 1405. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15928` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15928) · [Before (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15928)

```diff
-             (0, HU.l)(Gb.reached)
+             (0, LP.l)(Wd.reached)
```

#### 1406. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15931` → after: `L15931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15931) · [Before (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15931)

```diff
-             hb("players")
+             kd("players")
```

#### 1407. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15935` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15935) · [Before (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15935)

```diff
-             Ob
+             Nd
```

#### 1408. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15937` → after: `L15937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15937) · [Before (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15937)

```diff
-             ub.join(", ")
+             Jd.join(", ")
```

#### 1409. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15940` → after: `L15940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15940) · [Before (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15940)

```diff
-             bb.hasMore ? ", \u2026" : ""
+             dd.hasMore ? ", \u2026" : ""
```

#### 1410. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15943` → after: `L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15943) · [Before (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15943)

```diff
-             Ub
+             Pd
```

#### 1411. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15947` → after: `L15947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15947) · [Before (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15947)

```diff
-             Ob
+             Nd
```

#### 1412. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15950` → after: `L15950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15950) · [Before (L15950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15950)

```diff
-             hb("This line, first inside")
+             kd("This line, first inside")
```

#### 1413. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15953` → after: `L15953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15953) · [Before (L15953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15953)

```diff
-             hb("would log it")
+             kd("would log it")
```

#### 1414. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15956` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15956) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15956)

```diff
-             hb("between minute")
+             kd("between minute")
```

#### 1415. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15959` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15959) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15959)

```diff
-             bb.minute - 1
+             dd.minute - 1
```

#### 1416. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15962` → after: `L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15962) · [Before (L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15962)

```diff
-             hb("and")
+             kd("and")
```

#### 1417. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15965` → after: `L15965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15965) · [Before (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15965)

```diff
-             bb.minute
+             dd.minute
```

#### 1418. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15969` → after: `L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15969) · [Before (L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15969)

```diff
-             hb("Minute")
+             kd("Minute")
```

#### 1419. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15972` → after: `L15972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15972) · [Before (L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15972)

```diff
-             bb.minute
+             dd.minute
```

#### 1420. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15976` → after: `L15976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15976) · [Before (L15976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15976)

```diff
-             bb.ended
+             dd.ended
```

#### 1421. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15979` → after: `L15979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15979) · [Before (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15979)

```diff
-             hb("in 100 plays end")
+             kd("in 100 plays end")
```

#### 1422. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15982` → after: `L15982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15982) · [Before (L15982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15982)

```diff
-             Bb
+             pd
```

#### 1423. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15984` → after: `L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15984) · [Before (L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15984)

```diff
-             hb("most games")
+             kd("most games")
```

#### 1424. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15986` → after: `L15986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15986) · [Before (L15986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15986)

```diff
-             bb.typicalEnded
+             dd.typicalEnded
```

#### 1425. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15989` → after: `L15989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15989) · [Before (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15989)

```diff
-             bb.ended
+             dd.ended
```

#### 1426. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15992` → after: `L15992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15992) · [Before (L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15992)

```diff
-             hb("of every 100 sessions end")
+             kd("of every 100 sessions end")
```

#### 1427. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15995` → after: `L15995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15995) · [Before (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15995)

```diff
-             Bb
+             pd
```

#### 1428. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15998` → after: `L15998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L15998) · [Before (L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L15998)

```diff
-             hb("in a typical Bloxd game")
+             kd("in a typical Bloxd game")
```

#### 1429. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16000` → after: `L16000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16000) · [Before (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16000)

```diff
-             bb.typicalEnded
+             dd.typicalEnded
```

#### 1430. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16003` → after: `L16003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16003) · [Before (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16003)

```diff
-             hb("do")
+             kd("do")
```

#### 1431. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16007` → after: `L16007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16007) · [Before (L16007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16007)

```diff
-             hb("Only")
+             kd("Only")
```

#### 1432. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16010` → after: `L16010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16010) · [Before (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16010)

```diff
-             (0, HU.l)(bb.fewPlayers)
+             (0, LP.l)(dd.fewPlayers)
```

#### 1433. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16013` → after: `L16013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16013) · [Before (L16013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16013)

```diff
-             hb("players this week, so this is a hint.")
+             kd("players this week, so this is a hint.")
```

#### 1434. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16017` → after: `L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16017) · [Before (L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16017)

```diff
-             hb("Only")
+             kd("Only")
```

#### 1435. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16020` → after: `L16020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16020) · [Before (L16020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16020)

```diff
-             (0, HU.l)(bb.fewPlayers)
+             (0, LP.l)(dd.fewPlayers)
```

#### 1436. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16023` → after: `L16023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16023) · [Before (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16023)

```diff
-             hb("players this week, so this is a hint:")
+             kd("players this week, so this is a hint:")
```

#### 1437. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16027` → after: `L16027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16027) · [Before (L16027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16027)

```diff
-             Ub
+             Pd
```

#### 1438. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16030` → after: `L16030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16030) · [Before (L16030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16030)

```diff
-             Ob
+             Nd
```

#### 1439. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16032` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16032) · [Before (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16032)

```diff
-           `,...Gb]:[Ub,...Bb.parts]}}function dd(bb,ub){var hb,Bb;const Ob=null!==(hb=null===(Bb=bb.stats)||void 0===Bb?void 0:Bb.rankingWindow.uniquePlayers)&&void 0!==hb?hb:0;return bb.heatmaps.flatMap((hb=>hb.events.flatMap((Bb=>{if(!rZ(Bb.eventType)||null!==sa(Bb.eventType,Bb … [truncated]
+           `,...Wd]:[Pd,...pd.parts]}}function Bq(dd,Jd){var kd,pd;const Nd=null!==(kd=null===(pd=dd.stats)||void 0===pd?void 0:pd.rankingWindow.uniquePlayers)&&void 0!==kd?kd:0;return dd.heatmaps.flatMap((kd=>kd.events.flatMap((pd=>{if(!MQ(pd.eventType)||null!==DK(pd.eventType,pd … [truncated]
```

#### 1440. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16034` → after: `L16034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16034) · [Before (L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16034)

```diff
-             Bb.eventType
+             pd.eventType
```

#### 1441. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16036` → after: `L16036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16036) · [Before (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16036)

```diff
-             Bb.eventValue
+             pd.eventValue
```

#### 1442. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L16038` → after: `L16038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR16038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L16038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L16038) · [Before (L16038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L16038)

```diff
-           `,selection:Od(hb,Bb),score:(Lb.count/Ub-EC)*Ob}]}))))}function rd(bb){var ub,hb;if((null!==(ub=null===(hb=bb.stats)||void 0===hb?void 0:hb.rankingWindow.uniquePlayers)&&void 0!==ub?ub:0)<JC)return[];const Bb=Bd(bb,oo(bb),JC),Ob=Gd(bb,JC);return[...null===Bb?[]:[Bb],... … [truncated]
+           `,selection:Wq(kd,pd),score:(Zd.count/Pd-hx)*Nd}]}))))}function sq(dd){var Jd,kd;if((null!==(Jd=null===(kd=dd.stats)||void 0===kd?void 0:kd.rankingWindow.uniquePlayers)&&void 0!==Jd?Jd:0)<Xx)return[];const pd=Nq(dd,Ge(dd),Xx),Nd=Pq(dd,Xx);return[...null===pd?[]:[pd],... … [truncated]
```
