# Changed — Bundle Modifications Report (Part 002 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `2 / 56` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 36. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L628-L631` → after: `L41075-L41102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41075-L41102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41075-L41102) · [Before (L628-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L628-L631)

```diff
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const wQ = {};
-       for (const qQ in XQ) wQ[qQ] = `\0${qQ}\0`;
-       return QQ(WQ, wQ).replace(/\0(\w+)\0/g, ((QQ, WQ) => XQ[WQ]))
+       if (null !== vM) return (0, SM.g)([]);
+       const iM = MM.filter((MM => !BM.has(MM.name))).map((MM => {
+         const iM = new AbortController,
+           OM = {
+             compiled: AM(MM, (0, jM.b)(MM.name), {
+               priority: rM,
+               Ti: iM.signal,
+               onDownloaded: () => {
+                 OM.downloaded = !0
+               },
+               retries: {
+                 onRetry: () => {
+                   OM.downloaded = !1, null !== vM && iM.abort()
+                 }
+               }
+             }),
+ ... (12 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L634-L635` → after: `L41105-L41127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41105-L41127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41105-L41127) · [Before (L634-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L634-L635)

```diff
-     function zQ(QQ) {
-       return null === QQ.file ? null : QQ.line > 0 ? `${QQ.file}:${QQ.line}` : QQ.file
+     function qM(MM, rM, iM) {
+       const jM = (0, OM.K)((async () => {
+         (0, aM.F)(), XM.clear();
+         const iM = VM(MM),
+           OM = rM.name === MM.name ? iM : VM(rM);
+         for (const {
+             cancel: MM
+           }
+           of BM.values()) MM.abort();
+         BM.clear(), await (0, SM.g)([iM, OM]);
+         const jM = await iM,
+           PM = await OM;
+         return (0, aM.F)(), {
+           module: jM,
+           workerModule: PM
+         }
+ ... (7 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L639-L642` → after: `L41131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41131) · [Before (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L639-L642)

```diff
-       const WQ = new Map(QQ.map((QQ => [FQ(QQ).join("."), QQ])));
-       if (0 === WQ.size) return [];
-       const XQ = gQ([...WQ.values()]);
-       return 0 === XQ[0].length ? [] : XQ
+       return XM.get(MM)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L646` → after: `L41135-L41158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41135-L41158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41135-L41158) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L646)

```diff
-       return qQ.map((WQ => WQ(QQ)))
+       const rM = performance.now(),
+         iM = BM.get(MM.name);
+       BM.delete(MM.name);
+       const OM = !0 === iM?.downloaded ? iM : void 0;
+       return void 0 !== iM && void 0 === OM && iM.cancel.abort(), (0, SM.i)(((iM, jM) => {
+         const aM = (OM, SM) => {
+             XM.set(MM.name, {
+               path: SM,
+               ms: performance.now() - rM
+             }), iM(OM)
+           },
+           PM = () => {
+             (0, SM.p)(Mr(MM), (MM => {
+               let {
+                 module: rM,
+                 path: iM
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L648-L660` → after: `L41160-L41165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41160-L41165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41160-L41165) · [Before (L648-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L648-L660)

```diff
-     const PQ = qQ.map((QQ => new Set(wQ.c.map(QQ)).size));
- 
-     function gQ(QQ) {
-       const WQ = qQ.map((WQ => new Set(QQ.map(WQ)))),
-         XQ = WQ.reduce(((QQ, WQ) => QQ * WQ.size), 1),
-         wQ = WQ.every(((QQ, WQ) => 1 === QQ.size || QQ.size === PQ[WQ]));
-       if (XQ === QQ.length && wQ) return [qQ.filter(((QQ, XQ) => 1 === WQ[XQ].size)).map((WQ => WQ(QQ[0])))];
-       let TQ = null;
-       for (let zQ = 0; zQ < qQ.length; zQ++) {
-         if (1 === WQ[zQ].size) continue;
-         const XQ = JQ(QQ, qQ[zQ]).flatMap(gQ);
-         (null === TQ || XQ.length < TQ.length) && (TQ = XQ)
-       }
+     async function cM(MM, rM) {
+       const {
+         module: iM
+       } = await Mr(MM, {
+         retries: rM
+       });
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L663-L671` → after: `L41168-L41170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41168-L41170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41168-L41170) · [Before (L663-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L663-L671)

```diff
- 
-     function JQ(QQ, WQ) {
-       const XQ = new Map;
-       for (const qQ of QQ) {
-         var wQ;
-         const QQ = WQ(qQ);
-         XQ.set(QQ, [...null !== (wQ = XQ.get(QQ)) && void 0 !== wQ ? wQ : [], qQ])
-       }
-       return [...XQ.values()]
+     async function Mr(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return await YM(MM, (0, jM.b)(MM.name), rM)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L674` → after: `L41173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41173) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L674)

```diff
-   5376: (QQ, WQ, XQ) => {
+   39771: (MM, rM, iM) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L676` → after: `L41175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41175) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L676)

```diff
-       d: () => zQ
+       e: () => jM
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L678-L680` → after: `L41177-L41178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41177-L41178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41177-L41178) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L678-L680)

```diff
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(1145);
+     var OM = iM(3185);
+     const SM = ["none", "idle", "now"];
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L682-L752` → after: `L41180-L41214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41180-L41214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41180-L41214) · [Before (L682-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L682-L752)

```diff
-     function zQ(QQ) {
-       let {
-         options: WQ,
-         value: XQ,
-         onChange: wQ,
-         ariaLabel: zQ,
-         className: sQ,
-         reselectable: FQ = !1,
-         keepsFocus: PQ = !1,
-         padTabs: gQ
-       } = QQ;
-       const JQ = void 0 !== gQ;
-       return (0, TQ.jsx)("div", {
-         className: qQ()("SegmentedToggle", sQ),
-         role: "group",
-         "aria-label": zQ,
- ... (55 more removed lines; see GitHub link above)
+     function jM() {
+       const MM = () => (0, OM.E)();
+       return {
+         memoryBytes: () => (0, OM.y)().buffer.byteLength,
+         reserveUpFront: rM => MM().RL(rM),
+         reserveAhead: rM => MM().SL(rM),
+         setCeiling: rM => {
+           MM().pL(rM)
+         },
+         lowWater: () => SM[MM().XQ()] ?? "none",
+         stats: () => function(MM) {
+           const rM = new Uint32Array((0, OM.y)().buffer, MM, 17),
+             iM = MM => rM[MM] ?? 0,
+             SM = MM => ({
+               upFront: iM(MM),
+               ahead: iM(MM + 1),
+ ... (19 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L784` → after: `L41218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41218) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L784)

```diff
-   5401: (QQ, WQ, XQ) => {
+   7116: (MM, rM, iM) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L786-L787` → after: `L41220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41220) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L786-L787)

```diff
-       c: () => zQ,
-       g: () => sQ
+       b: () => aM
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L789-L797` → after: `L41222-L41237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41222-L41237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41222-L41237) · [Before (L789-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L789-L797)

```diff
-     var wQ = XQ(2226),
-       qQ = XQ(5404);
-     let TQ = null;
- 
-     function zQ(QQ) {
-       TQ = {
-         pack: QQ.metaData.id === wQ.c ? null : QQ
-       }
-     }
+     var OM = iM(3188);
+     const SM = {
+       bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
+       bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
+       bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
+       bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
+       bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
+       bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
+       bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
+       bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
+       bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
+       bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
+       bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
+       bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
+     };
+     var jM = iM(5069);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L800` → after: `L41240-L41245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41240-L41245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41240-L41245) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L800)

```diff
-       return !(null === TQ || !(0, qQ.b)(TQ.pack, QQ)) && (TQ = null, !0)
+       const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
+       if (void 0 !== rM) return {
+         sha256: rM,
+         onMismatch: jM.B
+       };
+       throw new OM.f(`${MM} has no release digest, so this build refuses it`)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L803` → after: `L41248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41248) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L803)

```diff
-   5396: (QQ, WQ, XQ) => {
+   7131: (MM, rM, iM) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L805-L807` → after: `L41250-L41251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41250-L41251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41250-L41251) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L805-L807)

```diff
-       d: () => sQ,
-       f: () => zQ,
-       i: () => wQ,
+       e: () => OM,
+       h: () => aM,
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L810-L814` → after: `L41254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41254) · [Before (L810-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L810-L814)

```diff
-       n: () => qQ,
-       r: () => TQ,
-       t: () => PQ,
-       w: () => gQ,
-       z: () => rQ
+       o: () => jM
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L816-L820` → after: `L41256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41256) · [Before (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L816-L820)

```diff
-     const wQ = 5;
- 
-     function qQ(QQ) {
-       return QQ === wQ
-     }
+     const OM = ["terrain", "liquid", "model"];
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L822-L830` → after: `L41258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41258) · [Before (L822-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L822-L830)

```diff
-     function TQ(QQ) {
-       return [...QQ.features]
-     }
-     const zQ = 262144,
-       sQ = 256,
-       FQ = 256;
- 
-     function PQ(QQ) {
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
+     function SM() {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L832-L859` → after: `L41260-L41264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41260-L41264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41260-L41264) · [Before (L832-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L832-L859)

```diff
-       for (const [XQ, wQ] of Object.entries(QQ)) {
-         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
-         WQ.push({
-           path: XQ,
-           source: wQ
-         })
-       }
-       return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
-         function(QQ) {
-           if (0 === QQ.length) return "The pack has no .wgsl files.";
-           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
-           const WQ = new Set;
-           for (const {
-               path: XQ
-             }
-             of QQ) {
- ... (12 more removed lines; see GitHub link above)
+       for (const rM of [!1, !0])
+         for (const iM of OM) MM.push({
+           strict: rM,
+           program: iM
+         });
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L868-L874` → after: `L41269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41269) · [Before (L868-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L868-L874)

```diff
-       const WQ = new TextEncoder;
-       let XQ = 0;
-       for (const {
-           source: wQ
-         }
-         of QQ) XQ += WQ.encode(wQ).byteLength;
-       return XQ
+       return `${MM.strict?"strict":"allow"}.${MM.program}`
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L878-L881` → after: `L41273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41273) · [Before (L878-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L878-L881)

```diff
-       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
-       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
-       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
-       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
+       return !MM.hooks.vertex && !MM.hooks.surface && !MM.hooks.light
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L886-L982` → after: `L41277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R41277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L41277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/107.js#L41277) · [Before (L886-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/107.js#L886-L982)

```diff
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const wQ = new Map;
-       WQ.forEach(((QQ, WQ) => {
-         let {
-           numAnimStates: XQ,
-           animStartIdx: qQ
-         } = QQ;
-         for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
-       }));
-       const qQ = Object.entries(QQ),
-         TQ = new Map;
-       for (const [BQ, yQ] of qQ) {
-         const QQ = jQ.exec(BQ);
-         "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
-       }
-       const zQ = QQ => {
- ... (81 more removed lines; see GitHub link above)
+       return "off" !== rM && (null === MM || MM.some((MM => MM.key.strict === ("strict" === rM) && !aM(MM))))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/108.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/108.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L4-L254` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L4) · [Before (L4-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L4-L254)

```diff
-   6900: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => DQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(1507),
-       TQ = XQ(1548),
-       zQ = XQ(3736),
-       sQ = XQ(1162),
-       FQ = XQ(1391),
-       PQ = XQ(1416),
-       gQ = XQ(1094),
-       JQ = XQ(1081),
-       rQ = XQ.n(JQ),
-       IQ = XQ(6896),
-       jQ = XQ(1145);
- ... (235 more removed lines; see GitHub link above)
+   5265: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L256` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L6-L9) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L256)

```diff
-       default: () => YY
+       Howl: () => SM.Howl,
+       Howler: () => SM.Howler,
+       musicOutput: () => dM,
+       readyAudioContext: () => yM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L258-L501` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L11-L14) · [Before (L258-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L258-L501)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(1581),
-       TQ = XQ(1081),
-       zQ = XQ.n(TQ),
-       sQ = XQ(1057),
-       FQ = XQ(1257),
-       PQ = XQ(1049),
-       gQ = XQ(402),
-       JQ = XQ(1607),
-       rQ = XQ(1046),
-       IQ = XQ(1226),
-       jQ = XQ(1162),
-       BQ = XQ(382),
-       yQ = XQ(1548),
-       VQ = XQ(26),
-       DQ = XQ(2003),
- ... (228 more removed lines; see GitHub link above)
+     var OM, SM = iM(5269),
+       jM = iM(3839),
+       aM = iM(5026);
+     const PM = SM.Howler;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L503-L710` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L16) · [Before (L503-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L503-L710)

```diff
-     function zW(QQ) {
-       if (null === QQ) return "";
-       if ("number" === typeof QQ) return Number.isFinite(QQ) ? String(QQ) : "";
-       const WQ = TW.test(QQ) ? `'${QQ}` : QQ;
-       return /[",\r\n]/.test(WQ) ? `"${WQ.replace(/"/g,'""')}"` : WQ
-     }
- 
-     function sW(QQ, WQ) {
-       const XQ = new Date(QQ).toISOString();
-       return "1d" === WQ ? XQ.slice(0, 10) : XQ.replace(/\.\d{3}Z$/, "Z")
-     }
-     const FW = /[\\/:*?"<>|\u0000-\u001f]/g;
- 
-     function PW(QQ) {
-       return QQ.replace(FW, "").replace(/ {2,}/g, " ").trim()
-     }
- ... (192 more removed lines; see GitHub link above)
+     function nM() {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L712-L756` → after: `L18-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L18-L27) · [Before (L712-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L712-L756)

```diff
-       return null !== (XQ = null === (wQ = QQ[WQ]) || void 0 === wQ ? void 0 : wQ.percent) && void 0 !== XQ ? XQ : null
-     }
- 
-     function fW(QQ) {
-       const WQ = QQ.points.findIndex((QQ => QQ.percent <= 50));
-       return {
-         percentStayedSessions: kW(QQ.points, uW),
-         percentLongSessions: kW(QQ.points, LW),
-         medianMinute: -1 === WQ ? QQ.maxBucketMinute : WQ
-       }
-     }
- 
-     function SW(QQ) {
-       return `${Math.round(QQ)}%`
-     }
- 
- ... (29 more removed lines; see GitHub link above)
+       if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
+       const iM = navigator.audioSession;
+       let OM;
+       "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
+       try {
+         OM = new AudioContext({
+           sampleRate: 44100
+         })
+       } catch {
+         return
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L760-L866` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L42-L45) · [Before (L760-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L760-L866)

```diff
-     function YW(QQ) {
-       const WQ = Math.round(QQ / 1e3);
-       if (WQ < 60) return `${WQ}s`;
-       const XQ = Math.floor(WQ / 60);
-       if (XQ < 60) return `${XQ}m ${WQ%60}s`;
-       return `${Math.floor(XQ/60)}h ${XQ%60}m`
-     }
-     const NW = 864e5;
- 
-     function ZW(QQ, WQ) {
-       return "1d" === WQ ? yW(QQ, !0) : `${yW(QQ)}, ${VW(QQ)}`
-     }
- 
-     function OW(QQ) {
-       let {
-         point: WQ,
- ... (91 more removed lines; see GitHub link above)
+     function HM() {
+       for (; PM._html5AudioPool.length < PM.html5PoolSize;) {
+         const MM = new Audio;
+         MM._unlocked = !0, PM._releaseHtml5Audio(MM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L868-L911` → after: `L47-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L47-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L47-L52) · [Before (L868-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L868-L911)

```diff
-     }
- 
-     function XX(QQ) {
-       let {
-         viewBox: WQ,
-         text: XQ,
-         alignLeft: wQ
-       } = QQ;
-       return void 0 === (null === WQ || void 0 === WQ ? void 0 : WQ.x) || void 0 === WQ.y ? null : (0, JW.jsx)("text", {
-         className: "StudioStatsChartMarkerLabel",
-         x: WQ.x + (wQ ? -5 : 5),
-         y: WQ.y + 10,
-         textAnchor: wQ ? "end" : "start",
-         children: XQ
-       })
-     }
- ... (28 more removed lines; see GitHub link above)
+       for (const rM of PM._howls)
+         if (!rM._webAudio)
+           for (const iM of rM._getSoundIds()) {
+             var MM;
+             const OM = null === (MM = rM._soundById(iM)) || void 0 === MM ? void 0 : MM._node;
+             OM && !OM._unlocked && (OM._unlocked = !0, OM.load())
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1032-L1066` → after: `L55-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L55-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L55-L65) · [Before (L1032-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1032-L1066)

```diff
- 
-     function sX(QQ) {
-       let {
-         title: WQ,
-         hoverInfo: XQ,
-         anchorId: wQ,
-         status: qQ,
-         points: TQ,
-         interval: zQ,
-         colour: sQ,
-         formatValue: FQ,
-         headerActions: PQ,
-         markers: gQ,
-         comparisonLabel: JQ,
-         seriesLabel: rQ,
-         allowDecimals: jQ = !1,
- ... (19 more removed lines; see GitHub link above)
+     LM.init = function(MM) {
+       return nM(), mM.call(this, MM)
+     }, (0, aM.k)() && (PM._unlockAudio = () => {
+       const MM = PM.ctx;
+       if (PM._audioUnlocked || !MM) return;
+       PM.autoUnlock = !1;
+       const rM = MM.createBuffer(1, 1, 22050);
+       PM._scratchBuffer = rM;
+       const iM = new AbortController;
+       let OM = "afterPaint";
+       const SM = () => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1068-L1296` → after: `L67-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L67-L72) · [Before (L1068-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1068-L1296)

```diff
-           return null !== (XQ = QQ.values[WQ]) && void 0 !== XQ ? XQ : null
-         }))
-       }))));
-       const hQ = function(QQ, WQ, XQ, wQ) {
-         const qQ = (null !== QQ && void 0 !== QQ ? QQ : []).map((QQ => WX(QQ, WQ, XQ, wQ))).filter((QQ => null !== QQ)),
-           TQ = new Set;
-         return qQ.filter((QQ => {
-           const WQ = `${QQ.dateMs}-${QQ.label}`;
-           return !TQ.has(WQ) && (TQ.add(WQ), !0)
-         }))
-       }(gQ, zQ, TQ, HQ);
-       let iQ;
-       DQ.length > 0 ? iQ = (0, JW.jsx)(TX, {
-         seriesLabel: pQ > 0 ? rQ : void 0,
-         seriesColour: sQ,
-         comparisonLabel: UQ ? JQ : void 0,
- ... (213 more removed lines; see GitHub link above)
+           if (PM._audioUnlocked) return;
+           null === (OM = PM._autoResume) || void 0 === OM || OM.call(PM);
+           const SM = MM.createBufferSource();
+           SM.buffer = rM, SM.connect(MM.destination), SM.start(0), MM.resume().catch((() => {})), SM.onended = () => {
+             SM.disconnect(0), PM._audioUnlocked = !0, iM.abort();
+             for (const MM of PM._howls) MM._emit("unlock")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1399-L1640` → after: `L75-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L75-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L75-L84) · [Before (L1399-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1399-L1640)

```diff
-         children: null !== GQ && null !== IQ && (0, JW.jsxs)(MQ.d, {
-           width: DQ,
-           height: IQ.height,
-           data: qQ,
-           margin: VX,
-           barCategoryGap: "12%",
-           children: [(0, JW.jsx)(nQ.e, {
-             stroke: wW.grid,
-             strokeOpacity: .3,
-             strokeDasharray: "3 3",
-             vertical: !1
-           }), (0, JW.jsx)(xQ.c, {
-             dataKey: "label",
-             stroke: wW.axis,
-             interval: 0,
-             height: GQ.xAxisHeight,
- ... (226 more removed lines; see GitHub link above)
+         nM = () => {
+           HM(), SM()
+         },
+         QM = rM => {
+           if (HM(), "inTap" === OM) {
+             if ("running" === MM.state) return;
+             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SM()
+           } else "afterPaint" === OM && (OM = "queued", (0, jM.d)(rM.timeStamp, (() => {
+             OM = "inTap", SM()
+           })))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1642-L1661` → after: `L86-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L86-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L86-L92) · [Before (L1642-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1642-L1661)

```diff
-       return (0, JW.jsx)(zX, {
-         title: WQ,
-         hoverInfo: XQ,
-         anchorId: qQ,
-         status: TQ,
-         hasData: dQ.length > 0,
-         headerActions: iQ,
-         csvExport: cQ,
-         footerActions: lQ,
-         className: "StudioStatsBarChart",
-         children: (0, JW.jsx)(bX, {
-           points: HQ,
-           colour: FQ,
-           formatValue: PQ,
-           allowDecimals: gQ,
-           yAxisWidth: hQ,
- ... (4 more removed lines; see GitHub link above)
+       for (const jM of ["touchstart", "touchend"]) document.addEventListener(jM, nM, {
+         capture: !0,
+         signal: iM.signal
+       });
+       for (const jM of aM.e) document.addEventListener(jM, QM, {
+         capture: !0,
+         signal: iM.signal
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1663-L1678` → after: `L94-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L94-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L94-L96) · [Before (L1663-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1663-L1678)

```diff
-     }
-     const lX = 48,
-       hX = 22,
-       iX = 14;
- 
-     function cX(QQ, WQ) {
-       const XQ = QQ.filter((QQ => Math.round(QQ.position) === WQ)).map((QQ => Number.isInteger(QQ.position) ? QQ.key : `${QQ.key} (${QQ.position})`));
-       return XQ.length > 0 ? XQ.join("; ") : null
-     }
- 
-     function AX(QQ) {
-       const WQ = new Map;
-       return null === QQ || void 0 === QQ || QQ.points.forEach((QQ => {
-         WQ.set(QQ.minute, QQ)
-       })), WQ
-     }
+     });
+     let hM = 0;
+     const JM = null === (OM = PM._autoSuspend) || void 0 === OM ? void 0 : OM.bind(SM.Howler);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1680-L1688` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L98-L99) · [Before (L1680-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1680-L1688)

```diff
-     function RX(QQ) {
-       let {
-         active: WQ,
-         payload: XQ,
-         maxBucketMinute: wQ,
-         totalSessions: qQ,
-         comparisonLabel: TQ,
-         lines: zQ
-       } = QQ;
+     function dM() {
+       yM();
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1690-L1745` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L101-L102) · [Before (L1690-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1690-L1745)

```diff
-         t: sQ
-       } = (0, IQ.C)();
-       if (!WQ || !XQ || 0 === XQ.length) return null;
-       const PQ = XQ[0].payload;
-       return (0, JW.jsxs)("div", {
-         className: "StudioStatsChartTooltip",
-         children: [(0, JW.jsx)("div", {
-           className: "StudioStatsChartTooltipTitle SmallTextLight",
-           children: sQ("studio:dropoffTooltipMinute", {
-             minutes: oW(PQ.minute, wQ)
-           })
-         }), null !== PQ.percent && (0, JW.jsx)("div", {
-           className: "StudioStatsChartTooltipValue",
-           children: tW(PQ.percent)
-         }), zQ.map(((QQ, WQ) => {
-           const XQ = PQ.lineValues[WQ];
- ... (40 more removed lines; see GitHub link above)
+         ctx: MM,
+         masterGain: rM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1747-L1756` → after: `L104-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L104-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L104-L111) · [Before (L1747-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1747-L1756)

```diff
-       const {
-         t: DQ
-       } = (0, IQ.C)(), [pQ, GQ] = (0, wQ.useState)([]), UQ = (0, wQ.useMemo)((() => jQ.map((QQ => function(QQ, WQ) {
-         return QQ.map((QQ => "" === QQ.label ? {
-           value: QQ.value,
-           label: WQ
-         } : QQ))
-       }(QQ, DQ("general:default"))))), [jQ, DQ]), bQ = UQ.map(((QQ, WQ) => {
-         var XQ;
-         return function(QQ, WQ) {
+       return MM && rM ? {
+         ctx: MM,
+         destination: rM,
+         holdAwake: MM => {
+           var rM, iM;
+           (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
+         },
+         wake: () => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1758-L1768` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L113) · [Before (L1758-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1758-L1768)

```diff
-           const wQ = QQ.find((QQ => QQ.value === WQ));
-           return null !== (XQ = null !== wQ && void 0 !== wQ ? wQ : QQ[0]) && void 0 !== XQ ? XQ : null
-         }(QQ, null !== (XQ = pQ[WQ]) && void 0 !== XQ ? XQ : null)
-       })), vQ = [];
-       for (const wQ of bQ) null !== wQ && vQ.push(wQ.value);
-       const dQ = vQ.length === bQ.length ? function(QQ, WQ) {
-         let XQ = QQ;
-         for (const wQ of WQ) {
-           if (void 0 === XQ) return [];
-           if (Array.isArray(XQ)) return console.warn(`StudioDropoffChart got ${WQ.length} filters for vertical labels nested less deeply`), [];
-           XQ = XQ[wQ]
+           "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1770-L1969` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L115) · [Before (L1770-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1770-L1969)

```diff
-         return void 0 === XQ ? [] : Array.isArray(XQ) ? XQ : (console.warn(`StudioDropoffChart got ${WQ.length} filters for vertical labels nested more deeply`), [])
-       }(BQ, vQ) : [];
-       let HQ;
-       UQ.some((QQ => QQ.length > 0)) && (HQ = (0, JW.jsx)(HX, {
-         children: UQ.map(((QQ, WQ) => 0 === QQ.length ? null : (0, JW.jsx)(mQ.c, {
-           options: QQ,
-           value: bQ[WQ],
-           onChange: QQ => {
-             GQ((XQ => {
-               const wQ = [...XQ];
-               return wQ[WQ] = QQ.value, wQ
-             }))
-           }
-         }, WQ)))
-       }));
-       let aQ = null !== PQ && void 0 !== PQ ? PQ : HQ;
- ... (184 more removed lines; see GitHub link above)
+       } : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1972-L1973` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L118-L120) · [Before (L1972-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1972-L1973)

```diff
-     function CX(QQ, WQ) {
-       return "customGamePercentiles" === QQ.type || "customGamePercentiles" === WQ.type ? QQ.type === WQ.type : QQ.gameAnalyticsId === WQ.gameAnalyticsId
+     function yM() {
+       var MM;
+       (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L1975-L31561` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/108.js#L122) · [Before (L1975-L31561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/108.js#L1975-L31561)

```diff
- 
-     function uX(QQ) {
-       return {
-         p20: null,
-         p50: QQ,
-         p80: null
-       }
-     }
-     const LX = {
-         p20: null,
-         p50: null,
-         p80: null
-       },
-       kX = 864e5;
- 
-     function fX(QQ) {
- ... (29571 more removed lines; see GitHub link above)
+     JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/109.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/109.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L2)

```diff
- export const ids = [109];
+ export const ids = [108, 109, 110];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L4-L51` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L4-L6) · [Before (L4-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L4-L51)

```diff
-   5290: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => JQ,
-       h: () => gQ,
-       i: () => rQ
-     });
-     XQ(5299);
-     var wQ = XQ(1226),
-       qQ = XQ(1081),
-       TQ = XQ.n(qQ),
-       zQ = XQ(1416),
-       sQ = (XQ(61), XQ(4677)),
-       FQ = XQ(1094),
-       PQ = XQ(1145);
- 
-     function gQ(QQ) {
- ... (32 more removed lines; see GitHub link above)
+   37554: (MM, rM, iM) => {
+     function OM(MM, rM, iM, OM) {
+       return !(iM && !MM.aimable) && (!rM || MM.gun && "head" !== OM)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L55-L72` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L10) · [Before (L55-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L55-L72)

```diff
-       let {
-         checked: WQ,
-         setChecked: XQ
-       } = QQ;
-       return (0, PQ.jsx)("div", {
-         className: "OtherInput ClickableOtherInput",
-         "data-pad-focusable": !0,
-         onClick: QQ => {
-           XQ(!WQ)
-         },
-         children: (0, PQ.jsx)(sQ.b, {
-           checked: WQ,
-           onChange: QQ => {
-             XQ(QQ.target.checked)
-           },
-           disabled: !1
- ... (2 more removed lines; see GitHub link above)
+       return Math.max(.1 * MM, 1)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L75-L96` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L13-L14) · [Before (L75-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L75-L96)

```diff
-     function rQ(QQ) {
-       let {
-         checked: WQ,
-         setChecked: XQ,
-         disabled: wQ
-       } = QQ;
-       return (0, PQ.jsx)("div", {
-         className: TQ()("SwitchContainer", {
-           SwitchContainerDisabled: wQ
-         }),
-         onClick: () => {
-           wQ || XQ(!WQ)
-         },
-         children: (0, PQ.jsx)(sQ.b, {
-           className: "SwitchCheckbox",
-           checked: WQ,
- ... (6 more removed lines; see GitHub link above)
+     function jM(MM, rM) {
+       return !MM && rM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L99` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L22) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L99)

```diff
-   5304: (QQ, WQ, XQ) => {
+   37559: (MM, rM, iM) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L101` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L24-L25) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L101)

```diff
-       c: () => PQ
+       e: () => PM,
+       h: () => aM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L103-L180` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L27) · [Before (L103-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L103-L180)

```diff
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(4948),
-       zQ = XQ(1226),
-       sQ = XQ(1145);
-     const FQ = [...TQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
- 
-     function PQ(QQ) {
-       const {
-         disabled: WQ,
-         hideWrapper: XQ
-       } = QQ, {
-         t: wQ
-       } = (0, zQ.C)(), PQ = QQ.advancedMode ? FQ.map((WQ => [WQ, QQ.callbacks[WQ]])) : TQ.j.map((WQ => [WQ, QQ.callbacks[WQ]])), JQ = (0, sQ.jsx)("div", {
-         className: qQ()("PluginsGrid", {
-           SectionBody: !XQ
- ... (62 more removed lines; see GitHub link above)
+     let OM = null;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L182-L188` → after: `L29-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L29-L30) · [Before (L182-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L182-L188)

```diff
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
+         crosshairAccuracy: [],
+         turnDamageIndicators: []
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L191-L224` → after: `L33-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L33-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L33-L41) · [Before (L191-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L191-L224)

```diff
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
-       }
-   },
-   5283: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       h: () => qW,
-       d: () => wW,
-       f: () => XW,
-       j: () => TW
-     });
- ... (18 more removed lines; see GitHub link above)
+         crosshairAccuracy: MM => {
+           const rM = SM.crosshairAccuracy.at(-1);
+           rM ? rM.hook(MM) : OM = MM
+         },
+         turnDamageIndicators: MM => {
+           var rM;
+           null === (rM = SM.turnDamageIndicators.at(-1)) || void 0 === rM || rM.hook(MM)
+         }
+       };
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L226-L256` → after: `L43-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L43-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L43-L54) · [Before (L226-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L226-L256)

```diff
-     function UQ(QQ) {
-       let {
-         icon: WQ,
-         title: XQ,
-         disabled: wQ,
-         children: qQ
-       } = QQ;
-       return (0, GQ.jsxs)("div", {
-         className: IQ()("ManageCard", {
-           ManageCardDisabled: wQ
-         }),
-         children: [(0, GQ.jsxs)("div", {
-           className: "ManageCardHead",
-           children: [(0, GQ.jsx)("div", {
-             className: "ManageCardIcon",
-             children: (0, GQ.jsx)(gQ.d, {
- ... (15 more removed lines; see GitHub link above)
+     function aM(MM, rM) {
+       const iM = {
+           hook: rM
+         },
+         aM = SM[MM];
+       if (aM.push(iM), "crosshairAccuracy" === MM && null !== OM) {
+         const MM = OM;
+         OM = null, jM.crosshairAccuracy(MM)
+       }
+       return () => {
+         const MM = aM.indexOf(iM); - 1 !== MM && aM.splice(MM, 1)
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L259-L274` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L57-L58) · [Before (L259-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L259-L274)

```diff
-     function bQ(QQ) {
-       let {
-         label: WQ,
-         caption: XQ,
-         children: wQ
-       } = QQ;
-       return (0, GQ.jsxs)("div", {
-         className: "ManageStackedField",
-         children: [(0, GQ.jsx)("div", {
-           className: "ManageStackedFieldLabel",
-           children: WQ
-         }), wQ, XQ && (0, GQ.jsx)("div", {
-           className: "ManageStackedFieldCaption",
-           children: XQ
-         })]
-       })
+     function PM() {
+       return jM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L277-L301` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L78-L79) · [Before (L277-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L277-L301)

```diff
-     function vQ(QQ) {
-       let {
-         label: WQ,
-         caption: XQ,
-         disabled: wQ,
-         children: qQ
-       } = QQ;
-       return (0, GQ.jsxs)("div", {
-         className: IQ()("ManageField", {
-           ManageFieldDisabled: wQ
-         }),
-         children: [(0, GQ.jsxs)("div", {
-           className: "ManageFieldText",
-           children: [(0, GQ.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: WQ
- ... (9 more removed lines; see GitHub link above)
+     function LM(MM, rM) {
+       return QM.set(MM, rM), MM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L304-L525` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L82) · [Before (L304-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L304-L525)

```diff
-     function dQ(QQ) {
-       var WQ, XQ;
-       let {
-         schematicData: wQ,
-         updateSchematicData: qQ,
-         publishFormEnabled: TQ,
-         formEnabled: zQ
-       } = QQ;
-       const {
-         t: FQ
-       } = (0, sQ.C)(), PQ = !TQ, gQ = {
-         tpRequests: {
-           isEnabled: () => !wQ.disableTpRequests,
-           UH: QQ => qQ("disableTpRequests", !QQ)
-         },
-         spawnProtection: {
- ... (206 more removed lines; see GitHub link above)
+     function mM() {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L527-L528` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L84-L86) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L527-L528)

```diff
-         base64Jpg: qQ,
-         heavilyCompressed: TQ < CQ
+         bytes: PM,
+         songsDecoded: nM.song,
+         soundsDecoded: nM.sound
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L538-L560` → after: `L91-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L91-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L91-L97) · [Before (L538-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L538-L560)

```diff
-       var WQ;
-       let {
-         schematicId: XQ,
-         hasReadUploadPolicy: qQ,
-         onPolicyValidationError: FQ,
-         onThumbnailReady: PQ
-       } = QQ;
-       const {
-         t: rQ
-       } = (0, sQ.C)(), [jQ, BQ] = (0, wQ.useState)(null), [yQ, VQ] = (0, wQ.useState)(""), [DQ, pQ] = (0, wQ.useState)(""), [UQ, bQ] = (0, wQ.useState)(!0), [vQ, dQ] = (0, wQ.useState)(!1), HQ = (0, wQ.useRef)(!1), [aQ, lQ] = (0, wQ.useState)(null), [hQ, iQ] = (0, wQ.useState)(!1 … [truncated]
-         getRootProps: CQ,
-         getInputProps: fQ,
-         isDragActive: SQ
-       } = (0, AQ.c)({
-         accept: {
-           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
- ... (7 more removed lines; see GitHub link above)
+       if (zM.has(MM)) return;
+       zM.add(MM);
+       const rM = 1 === MM.decodeAudioData.length,
+         iM = MM.decodeAudioData.bind(MM);
+       MM.decodeAudioData = (MM, OM, SM) => {
+         const zM = MM => {
+           const rM = jM._howls.filter((MM => "loaded" !== MM._state));
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L562-L714` → after: `L99-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L99-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L99-L107) · [Before (L562-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L562-L714)

```diff
-             const QQ = await uQ(WQ);
-             if (XQ !== EQ.current) return;
-             BQ(QQ), iQ(QQ.heavilyCompressed)
-           } catch (wQ) {
-             if (XQ !== EQ.current) return;
-             lQ(rQ(wQ instanceof LQ ? "thumbnail:portraitImagesNotAllowed" : wQ instanceof kQ ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
-           }
-         },
-         useFsAccessApi: !1
-       }), tQ = yQ.length <= 30 ? yQ : `${yQ.slice(0,27)}...`, oQ = null !== (WQ = null === jQ || void 0 === jQ ? void 0 : jQ.base64Jpg) && void 0 !== WQ ? WQ : null, eQ = DQ.trim(), nQ = eQ.length >= JQ.l && eQ.length <= JQ.k, xQ = cQ && !jQ && !aQ, YQ = cQ && !nQ;
-       return (0, GQ.jsxs)("div", {
-         className: "ThumbnailUploadContainer",
-         children: [(0, GQ.jsxs)("div", {
-           ...CQ({
-             className: IQ()("ThumbnailUploadDropzone", {
-               ActiveDrag: SQ,
- ... (137 more removed lines; see GitHub link above)
+             null === OM || void 0 === OM || OM(MM)
+           } finally {
+             const iM = rM.find((MM => "loaded" === MM._state));
+             void 0 !== iM && "string" === typeof iM._src && function(MM, rM, iM) {
+               var OM;
+               PM += iM - (null !== (OM = aM.get(rM)) && void 0 !== OM ? OM : 0), aM.set(rM, iM);
+               const SM = QM.get(MM);
+               void 0 !== SM && nM[SM]++
+             }(iM, iM._src, MM.length * MM.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L717-L876` → after: `L111-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L111-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L111-L115) · [Before (L717-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L717-L876)

```diff
-         return (0, GQ.jsxs)("div", {
-           className: "ThumbnailUploaderInner",
-           children: [(0, GQ.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: zQ("thumbnail:cannotUploadThumbnail")
-           }), pQ.map(((WQ, XQ) => {
-             const wQ = QQ[WQ];
-             return (0, GQ.jsxs)("div", {
-               className: "CannotUploadThumbnailItem",
-               children: [(0, GQ.jsx)(gQ.d, {
-                 name: "triangle-exclamation"
-               }), (0, GQ.jsx)("span", {
-                 children: zQ(wQ.key, wQ.params)
-               })]
-             }, XQ)
-           }))]
- ... (144 more removed lines; see GitHub link above)
+         if (!rM) return iM(MM, zM, SM);
+         const LM = iM(MM).then(zM);
+         return LM.catch((MM => {
+           null === SM || void 0 === SM || SM(MM)
+         })), LM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L880` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L159) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L880)

```diff
-     function xQ(QQ) {
+     function nM() {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L882-L943` → after: `L161-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L161-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L161-L170) · [Before (L882-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L882-L943)

```diff
-       let {
-         schematicData: zQ,
-         updateSchematicData: PQ,
-         publishFormEnabled: JQ,
-         onClose: rQ
-       } = QQ;
-       const {
-         t: jQ
-       } = (0, sQ.C)(), {
-         userContext: BQ,
-         isUserContextUpdating: yQ
-       } = (0, iQ.c)(), VQ = (0, hQ.d)(), [DQ, pQ] = (0, wQ.useState)([]), [UQ, bQ] = (0, wQ.useState)([]), [vQ, dQ] = (0, wQ.useState)(!0), [HQ, aQ] = (0, wQ.useState)(null !== (WQ = zQ.customThumbnailId) && void 0 !== WQ ? WQ : null), [AQ, RQ] = (0, wQ.useState)(null), EQ = (0,  … [truncated]
- 
-       function SQ(QQ, WQ) {
-         kQ.current && (clearTimeout(kQ.current), kQ.current = null), RQ(QQ), null !== QQ && WQ && (kQ.current = setTimeout((() => {
-           RQ(null), kQ.current = null
- ... (46 more removed lines; see GitHub link above)
+       if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
+       const iM = navigator.audioSession;
+       let OM;
+       "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
+       try {
+         OM = new AudioContext({
+           sampleRate: 44100
+         })
+       } catch {
+         return
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L946-L954` → after: `L185-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L185-L188) · [Before (L946-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L946-L954)

```diff
-       function ZQ(QQ) {
-         aQ(QQ), uQ.current = QQ;
-         const WQ = Date.now() - CQ.current;
-         WQ >= 1e3 ? xQ() : (SQ({
-           text: jQ("thumbnail:settingThumbnail"),
-           type: "info"
-         }, !1), LQ.current || (LQ.current = setTimeout((() => {
-           xQ()
-         }), 1e3 - WQ)))
+     function HM() {
+       for (; PM._html5AudioPool.length < PM.html5PoolSize;) {
+         const MM = new Audio;
+         MM._unlocked = !0, PM._releaseHtml5Audio(MM)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L956-L1085` → after: `L190-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L190-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L190-L196) · [Before (L956-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L956-L1085)

```diff
-       return (0, wQ.useEffect)((() => {
-         !1 === yQ && tQ()
-       }), [yQ, tQ]), UQ.length > 0 ? (0, GQ.jsx)(YQ, {
-         rejectedThumbnails: UQ,
-         userContext: BQ,
-         isMountedRef: VQ,
-         onAcknowledged: tQ
-       }) : (0, GQ.jsxs)("div", {
-         className: "BloxdForm ThumbnailSection",
-         children: [(0, GQ.jsxs)("div", {
-           className: "SectionTitle",
-           children: [jQ("thumbnail:gameThumbnail"), AQ && (0, GQ.jsx)("span", {
-             className: IQ()("ThumbnailActionMsg", `ThumbnailActionMsg--${AQ.type}`),
-             children: AQ.text
-           })]
-         }), (0, GQ.jsx)("div", {
- ... (114 more removed lines; see GitHub link above)
+       for (const rM of PM._howls)
+         if (!rM._webAudio)
+           for (const iM of rM._getSoundIds()) {
+             var MM;
+             const OM = null === (MM = rM._soundById(iM)) || void 0 === MM ? void 0 : MM._node;
+             OM && !OM._unlocked && (OM._unlocked = !0, OM.load())
+           }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1087-L1173` → after: `L198-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L198-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L198-L235) · [Before (L1087-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1087-L1173)

```diff
- 
-     function YQ(QQ) {
-       let {
-         rejectedThumbnails: WQ,
-         userContext: XQ,
-         isMountedRef: qQ,
-         onAcknowledged: zQ
-       } = QQ;
-       const {
-         t: PQ
-       } = (0, sQ.C)(), [JQ, rQ] = (0, wQ.useState)(!1), [IQ, jQ] = (0, wQ.useState)(!1), BQ = function(QQ) {
-         const WQ = new Map;
-         for (const XQ of QQ) {
-           const QQ = XQ.rejectionPolicyId,
-             wQ = WQ.get(QQ);
-           wQ ? wQ.push(XQ) : WQ.set(QQ, [XQ])
- ... (71 more removed lines; see GitHub link above)
+     LM.init = function(MM) {
+       return nM(), mM.call(this, MM)
+     }, (0, aM.k)() && (PM._unlockAudio = () => {
+       const MM = PM.ctx;
+       if (PM._audioUnlocked || !MM) return;
+       PM.autoUnlock = !1;
+       const rM = MM.createBuffer(1, 1, 22050);
+       PM._scratchBuffer = rM;
+       const iM = new AbortController;
+       let OM = "afterPaint";
+       const SM = () => {
+           var OM;
+           if (PM._audioUnlocked) return;
+           null === (OM = PM._autoResume) || void 0 === OM || OM.call(PM);
+           const SM = MM.createBufferSource();
+           SM.buffer = rM, SM.connect(MM.destination), SM.start(0), MM.resume().catch((() => {})), SM.onended = () => {
+ ... (22 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1175` → after: `L237-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L237-L239) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1175)

```diff
-     }
+     });
+     let hM = 0;
+     const JM = null === (OM = PM._autoSuspend) || void 0 === OM ? void 0 : OM.bind(SM.Howler);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1177-L1182` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L241-L242) · [Before (L1177-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1177-L1182)

```diff
-     function NQ(QQ) {
-       let {
-         thumbnailId: WQ,
-         thumbnailName: XQ,
-         onClose: wQ
-       } = QQ;
+     function dM() {
+       yM();
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1184-L1230` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L244-L245) · [Before (L1184-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1184-L1230)

```diff
-         t: qQ
-       } = (0, sQ.C)();
-       return (0, GQ.jsxs)("div", {
-         className: "ThumbnailDeleteConfirm",
-         children: [(0, GQ.jsx)("div", {
-           className: "ThumbnailDeleteConfirmTitle",
-           children: qQ("thumbnail:deleteThumbnail")
-         }), (0, GQ.jsxs)("div", {
-           className: "ThumbnailDeleteConfirmImageContainer",
-           children: [(0, GQ.jsx)("img", {
-             className: "ThumbnailDeleteConfirmImage",
-             src: `${eQ.clientSideServerUrls.s3Url}/customThumbnails/${WQ}.jpg`,
-             alt: "Thumbnail to delete"
-           }), (0, GQ.jsx)("div", {
-             className: "ThumbnailGridItemLabel",
-             children: XQ
- ... (31 more removed lines; see GitHub link above)
+         ctx: MM,
+         masterGain: rM
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1232-L1241` → after: `L247-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L247-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L247-L254) · [Before (L1232-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1232-L1241)

```diff
-       const {
-         t: zQ
-       } = (0, sQ.C)(), [FQ, PQ] = (0, wQ.useState)(null), [gQ, JQ] = (0, wQ.useState)(null), [rQ, jQ] = (0, wQ.useState)(!1), BQ = (0, hQ.d)(), yQ = TQ && !rQ, VQ = WQ.customTexturePackKey;
- 
-       function DQ(QQ) {
-         var WQ;
-         PQ(QQ.metaData.id), JQ(null !== (WQ = QQ.metaData.fromFolderName) && void 0 !== WQ ? WQ : null), (QQ.metaData.id !== ZQ.i.CUSTOM || QQ.metaData.fromFolderName) && XQ(QQ)
-       }
-       return (0, wQ.useEffect)((() => {
-         VQ && (jQ(!0), (0, OQ.e)(VQ).then((QQ => {
+       return MM && rM ? {
+         ctx: MM,
+         destination: rM,
+         holdAwake: MM => {
+           var rM, iM;
+           (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
+         },
+         wake: () => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1243-L1281` → after: `L256-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L256-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L256-L258) · [Before (L1243-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1243-L1281)

```diff
-           BQ.current && (QQ ? (PQ(QQ.metaData.id), JQ(null !== (WQ = QQ.metaData.fromFolderName) && void 0 !== WQ ? WQ : null), qQ(QQ)) : console.error(`No texture pack at ${VQ}`))
-         })).catch((QQ => {
-           console.error("Error fetching texture pack: ", QQ)
-         })).finally((() => {
-           jQ(!1)
-         })))
-       }), [VQ, qQ, BQ]), (0, GQ.jsxs)("div", {
-         className: "BloxdForm TexturePackSection",
-         children: [(0, GQ.jsx)("div", {
-           className: "SectionTitle",
-           children: zQ("customTexturePack:customTexturePack")
-         }), (0, GQ.jsxs)("div", {
-           className: "TexturePackList",
-           children: [(0, GQ.jsx)("div", {
-             className: IQ()("TexturePack", {
-               Selected: null === FQ && !rQ,
- ... (23 more removed lines; see GitHub link above)
+           "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
+         }
+       } : null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1285` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L261) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1285)

```diff
-     function WW(QQ) {
+     function yM() {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1287-L1324` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L263) · [Before (L1287-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1287-L1324)

```diff
-       let {
-         gameCategory: XQ,
-         setGameCategory: wQ,
-         disabled: qQ
-       } = QQ;
-       const zQ = null !== (WQ = (0, jQ.jb)(XQ)) && void 0 !== WQ ? WQ : "other";
-       return (0, GQ.jsxs)("div", {
-         className: "GameCategoryPicker",
-         children: [(0, GQ.jsx)(VQ.h, {
-           label: "worldBuilder:gameCategoryGroup",
-           className: "GameCategoryGroup",
-           disabled: qQ,
-           children: (0, GQ.jsx)(DQ.c, {
-             options: jQ.$.map((QQ => ({
-               value: QQ,
-               label: jQ.Z[QQ]
- ... (22 more removed lines; see GitHub link above)
+       (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1326-L1327` → after: `L265-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L265-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L265-L268) · [Before (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1326-L1327)

```diff
- 
-     function XW(QQ) {
+     JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
+   },
+   37741: (MM, rM, iM) => {
+     function OM(MM, rM) {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1329-L1338` → after: `L270-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L270-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L270-L274) · [Before (L1329-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1329-L1338)

```diff
-         editor: WQ,
-         onClose: XQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, sQ.C)(), {
-         schematicData: qQ,
-         updateSchematicData: TQ,
-         publishFormEnabled: FQ,
-         formEnabled: PQ
+         afterJoin: iM,
+         joining: OM,
+         idle: SM,
+         fetchFile: jM,
+         Ti: aM = () => !1
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1340-L1393` → after: `L276-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L276-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L276-L285) · [Before (L1340-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1340-L1393)

```diff
-       return (0, GQ.jsxs)(GQ.Fragment, {
-         children: [(0, GQ.jsxs)(UQ, {
-           icon: "pen-to-square",
-           title: wQ("worldBuilder:basicsSection"),
-           disabled: !PQ,
-           children: [(0, GQ.jsx)(bQ, {
-             label: wQ("general:name"),
-             caption: wQ("worldBuilder:schematicNameTagsHint"),
-             children: (0, GQ.jsx)(zQ.e, {
-               className: "SchematicPageName",
-               defaultValue: qQ.name,
-               onValueChange: QQ => TQ("name", QQ),
-               placeholderText: wQ("worldBuilder:schematicNamePlaceholder"),
-               maxLength: JQ.mb
-             })
-           }), (0, GQ.jsx)(bQ, {
- ... (38 more removed lines; see GitHub link above)
+       const PM = rM => {
+         rM >= MM.length || aM() || iM((() => {
+           SM((() => {
+             aM() || (OM() ? PM(rM) : jM(MM[rM]).catch((() => {})).finally((() => {
+               PM(rM + 1)
+             })))
+           }))
+         }))
+       };
+       PM(0)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1395-L1430` → after: `L287-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L287-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L287-L346) · [Before (L1395-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1395-L1430)

```diff
- 
-     function wW(QQ) {
-       let {
-         editor: WQ
-       } = QQ;
-       const {
-         t: XQ
-       } = (0, sQ.C)(), {
-         schematicData: wQ,
-         formEnabled: qQ,
-         hasUnsavedChanges: zQ
-       } = WQ, JQ = qQ && zQ;
-       return (0, GQ.jsxs)("footer", {
-         className: "SchematicPageFooter",
-         children: [qQ && zQ && (0, GQ.jsxs)("div", {
-           className: "SchematicPageFooterStatus",
- ... (20 more removed lines; see GitHub link above)
+     iM.d(rM, {
+       c: () => OM
+     })
+   },
+   37737: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM
+     });
+     const OM = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
+   },
+   37744: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => zM,
+       c: () => LM
+     });
+     var OM = iM(19),
+ ... (44 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1432` → after: `L348-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L348-L354) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1432)

```diff
-     }
+   },
+   37730: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM,
+       f: () => SM,
+       i: () => OM
+     });
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1435-L1443` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L357-L358) · [Before (L1435-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1435-L1443)

```diff
-       let {
-         schematic: WQ,
-         onSchematicUpdate: XQ,
-         onClose: qQ,
-         inSourceWorld: zQ
-       } = QQ;
-       const {
-         t: FQ
-       } = (0, sQ.C)();
+       return MM.replace(/[_\-\s]*\d+$/, "") || MM
+     }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1445-L1475` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L360-L361) · [Before (L1445-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1445-L1475)

```diff
-       function PQ() {
-         null === qQ || void 0 === qQ || qQ()
-       }
-       const gQ = (0, QW.e)(WQ, {
-         onNavigateAway: PQ,
-         inSourceWorld: zQ
-       });
-       return (0, wQ.useEffect)((() => {
-         null === XQ || void 0 === XQ || XQ(gQ.schematicData)
-       }), [gQ.schematicData, XQ]), (0, GQ.jsxs)("div", {
-         className: "SchematicPage SchematicPagePopupVariant",
-         children: [(0, GQ.jsxs)("div", {
-           className: "SchematicPageBody",
-           children: [(0, GQ.jsx)(TQ.e, {
-             onClick: PQ,
-             children: FQ("worldBuilder:back")
- ... (15 more removed lines; see GitHub link above)
+     function SM(MM, rM, iM) {
+       return iM <= 0 ? 0 : MM * iM / Math.max(rM, iM)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1478-L1495` → after: `L364-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L364-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L364-L390) · [Before (L1478-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1478-L1495)

```diff
-     function TW(QQ) {
-       let {
-         schematic: WQ,
-         onSchematicUpdate: XQ,
-         onClose: wQ,
-         inSourceWorld: TQ
-       } = QQ;
-       qQ.NotificationProvider.showCustomPopup({
-         body: QQ => (0, GQ.jsx)(qW, {
-           schematic: WQ,
-           onSchematicUpdate: XQ,
-           onClose: QQ,
-           inSourceWorld: TQ
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: wQ,
- ... (2 more removed lines; see GitHub link above)
+     function jM(MM, rM) {
+       const iM = MM.getDurationMs();
+       return iM > 0 ? MM.loudness * Math.max(0, 1 - (rM - MM.startMs) / iM) : 0
+     }
+     class aM {
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
+         this.maxVoices = MM, this.maxPerGroup = rM, this.voices = []
+       }
+       admit(MM) {
+         if (this.voices = this.voices.filter((MM => MM.isAlive())), null !== MM.group) {
+           const rM = this.voices.filter((rM => rM.group === MM.group));
+           if (rM.length >= this.maxPerGroup && !this.dropLeastWorth(rM, MM)) return !1
+         }
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, MM)) && (this.voices.push(MM), !0)
+ ... (11 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1498` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L393) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1498)

```diff
-   5307: (QQ, WQ, XQ) => {
+   37529: (MM, rM, iM) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1500` → after: `L395-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L395-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L395-L397) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1500)

```diff
-       c: () => JQ
+       c: () => SM,
+       e: () => aM,
+       g: () => PM
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1502-L1509` → after: `L399-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L399-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L399-L405) · [Before (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1502-L1509)

```diff
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(1226),
-       zQ = XQ(1094),
-       sQ = XQ(1507),
-       FQ = XQ(1416),
-       PQ = XQ(1391),
-       gQ = XQ(1145);
+     var OM = iM(22);
+     const SM = "touchSprintChanged";
+     let jM = !0;
+ 
+     function aM() {
+       return jM
+     }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1512-L1570` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L408) · [Before (L1512-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1512-L1570)

```diff
-       let {
-         editor: WQ,
-         className: XQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, TQ.C)(), {
-         schematicData: JQ,
-         formEnabled: rQ,
-         publishFormEnabled: IQ
-       } = WQ, jQ = !rQ || !IQ;
-       return (0, gQ.jsxs)("div", {
-         className: qQ()("PublishButtonContainer", XQ),
-         children: [WQ.canEditSourceWorld && (0, gQ.jsxs)(sQ.h, {
-           onClick: WQ.editSourceWorld,
-           disabled: jQ,
- ... (43 more removed lines; see GitHub link above)
+       MM !== jM && (jM = MM, OM.i.Tz(SM, MM))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1573` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L411) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1573)

```diff
-   5340: (QQ, WQ, XQ) => {
+   37761: (MM, rM, iM) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1575` → after: `L413-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L413-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L413-L415) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1575)

```diff
-       e: () => qQ
+       d: () => jM,
+       g: () => aM,
+       h: () => OM
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1577-L1586` → after: `L417-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L417-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L417-L436) · [Before (L1577-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1577-L1586)

```diff
-     var wQ = XQ(1238);
-     async function qQ(QQ) {
-       const WQ = await fetch(`${wQ.clientSideServerUrls.s3Url}/${QQ}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === WQ.status || 403 === WQ.status) return null;
-       if (!WQ.ok) throw new Error(`Failed to download the texture pack (${WQ.status})`);
-       return await WQ.json()
+     class OM {
+       constructor(MM) {
+         this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = MM
+       }
+       setMultiplierType(MM, rM) {
+         var iM;
+         this.multipliers[MM] = rM, null === (iM = this._onUpdate) || void 0 === iM || iM.call(this)
+       }
+       removeMultiplier(MM) {
+         var rM;
+         delete this.multipliers[MM], null === (rM = this._onUpdate) || void 0 === rM || rM.call(this)
+       }
+       getMultiplierType(MM) {
+         return this.multipliers[MM]
+       }
+       getTotalMultipliedVal() {
+ ... (4 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1588-L1628` → after: `L438-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L438-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L438-L470) · [Before (L1588-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1588-L1628)

```diff
-   },
-   5411: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => yQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(1384),
-       TQ = XQ(1049),
-       zQ = XQ(193),
-       sQ = XQ(1607),
-       FQ = XQ(26),
-       PQ = XQ(2003),
-       gQ = XQ(1548),
-       JQ = XQ(4912),
-       rQ = XQ(1404),
-       IQ = XQ(1162),
- ... (25 more removed lines; see GitHub link above)
+     class SM {
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = MM
+       }
+       setBooleanType(MM, rM) {
+         const iM = this._getTotalBooleanVal();
+         this.booleans[MM] = !!rM;
+         const OM = this.getTotalBooleanVal();
+         var SM;
+         OM !== iM && (null === (SM = this._onUpdate) || void 0 === SM || SM.call(this, OM, this.booleans));
+         return OM
+       }
+       removeBoolean(MM) {
+         const rM = this._getTotalBooleanVal();
+         delete this.booleans[MM];
+ ... (17 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1631-L1647` → after: `L473-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L473-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L473-L477) · [Before (L1631-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1631-L1647)

```diff
- 
-     function yQ(QQ) {
-       let {
-         onNavigateAway: WQ,
-         inSourceWorld: XQ = !1
-       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const {
-         userContext: yQ
-       } = (0, IQ.c)(), VQ = (0, jQ.useNavigatePreserveSearch)(), [DQ, pQ] = (0, wQ.useState)({
-         ...QQ
-       }), [GQ, UQ] = (0, wQ.useState)("Enter"), [bQ, vQ] = (0, wQ.useState)(void 0), dQ = (0, wQ.useRef)(BQ(QQ, QQ.gamePublished)), HQ = (0, wQ.useRef)(void 0), aQ = "Enter" === GQ, lQ = yQ.playerHasRank("developer") || yQ.playerHasRank("admin") || "Enter" === GQ && !1 !== DQ.sch … [truncated]
- 
-       function iQ(QQ, WQ) {
-         pQ((XQ => ({
-           ...XQ,
-           [QQ]: WQ
- ... (1 more removed lines; see GitHub link above)
+     class jM extends SM {
+       getTotalBooleanVal() {
+         const MM = this._getTotalBooleanVal();
+         if (null === MM) throw new Error("Should not be gotten before at least 1 type has been initialised");
+         return MM
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1649-L1677` → after: `L479-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L479-L483) · [Before (L1649-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1649-L1677)

```diff
-       const cQ = (0, wQ.useCallback)((QQ => {
-         HQ.current = QQ, vQ(QQ)
-       }), []);
- 
-       function AQ(QQ) {
-         UQ("Loading");
-         const WQ = BQ(DQ, QQ),
-           XQ = bQ !== HQ.current ? bQ : void 0;
-         gQ.e.updateSchematic(yQ, WQ, XQ).then((XQ => {
-           let {
-             customTexturePackKey: wQ
-           } = XQ;
-           UQ("Success"), iQ("customTexturePackKey", wQ), dQ.current = WQ, HQ.current = void 0, vQ(void 0), setTimeout((() => {
-             iQ("gamePublished", QQ), UQ("Enter")
-           }), 1e3)
-         })).catch((QQ => {
- ... (13 more removed lines; see GitHub link above)
+       _getTotalBooleanVal() {
+         let MM = !1,
+           rM = !0;
+         for (const iM in this.booleans) MM = !0, rM &&= this.booleans[iM];
+         return MM ? rM : null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1679-L1717` → after: `L485-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L485-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L485-L496) · [Before (L1679-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1679-L1717)

```diff
-       return {
-         schematicData: DQ,
-         updateSchematicData: iQ,
-         setTexturePack: vQ,
-         initializeTexturePack: cQ,
-         updateState: GQ,
-         formEnabled: aQ,
-         publishFormEnabled: lQ,
-         hasUnsavedChanges: hQ,
-         canEditSourceWorld: !XQ,
-         saveSchematic: AQ,
-         unpublishSchematic: function() {
-           rQ.NotificationProvider.showPromptPopup({
-             icon: "rocket-launch",
-             title: "worldBuilder:unpublishAsGameConfirmTitle",
-             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
- ... (23 more removed lines; see GitHub link above)
+     }
+     class aM extends SM {
+       getTotalBooleanVal() {
+         const MM = this._getTotalBooleanVal();
+         if (null === MM) throw new Error("Should not be gotten before at least 1 type has been initialised");
+         return MM
+       }
+       _getTotalBooleanVal() {
+         let MM = !1,
+           rM = !1;
+         for (const iM in this.booleans) MM = !0, rM ||= this.booleans[iM];
+         return MM ? rM : null
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L1721` → after: `L500-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L500-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/109.js#L500-L542) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/109.js#L1721)

```diff
-   5299: () => {}
+   37758: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => jM,
+       i: () => OM,
+       l: () => SM
+     });
+     const OM = 15,
+       SM = 3,
+       jM = 30
+   },
+   6944: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM,
+       d: () => SM,
+       e: () => nM,
+       h: () => jM,
+ ... (27 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/110.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/110.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L2)

```diff
- export const ids = [110];
+ export const ids = [108, 110];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L4-L6)

```diff
-   36658: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => FQ
+   37390: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       countDecodesAs: () => LM,
+       decodedAudio: () => mM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L8-L12` → after: `L9-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L9-L19) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L8-L12)

```diff
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(61),
-       zQ = XQ(4894),
-       sQ = XQ(1145);
+     var OM = iM(3291),
+       SM = iM(5265);
+     const jM = SM.Howler,
+       aM = new Map;
+     let PM = 0;
+     const nM = {
+         song: 0,
+         sound: 0
+       },
+       QM = new WeakMap,
+       zM = new WeakSet;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L14-L29` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L21-L22) · [Before (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L14-L29)

```diff
-     function FQ(QQ) {
-       let {
-         locked: WQ,
-         children: XQ
-       } = QQ;
-       const wQ = (0, TQ.useRef)(null),
-         FQ = (0, zQ.b)(wQ, "y");
-       return (0, sQ.jsx)("div", {
-         ref: wQ,
-         className: qQ()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: FQ.before,
-           CreateCustomLobbyBodyMoreBelow: FQ.after
-         }),
-         "data-pad-ignore": WQ || void 0,
-         children: XQ
-       })
+     function LM(MM, rM) {
+       return QM.set(MM, rM), MM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L50-L65` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L25-L30) · [Before (L50-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L50-L65)

```diff
-     function BQ(QQ) {
-       const WQ = {
-         requested: !1,
-         closed: !1
-       };
-       sQ.NotificationProvider.showCustomPopup({
-         body: XQ => (0, jQ.jsx)(yQ, {
-           flow: WQ,
-           close: XQ,
-           ...QQ
-         }),
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           WQ.closed = !0, WQ.requested || (0, IQ.d)()
-         }
-       })
+     function mM() {
+       return {
+         bytes: PM,
+         songsDecoded: nM.song,
+         soundsDecoded: nM.sound
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L69-L167` → after: `L34-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L34-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L34-L74) · [Before (L69-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L69-L167)

```diff
-       let {
-         flow: WQ,
-         close: XQ,
-         onCreating: sQ,
-         onCreated: BQ,
-         onFailedClosed: yQ,
-         join: VQ
-       } = QQ;
-       const {
-         t: DQ
-       } = (0, zQ.C)(), [pQ, GQ] = (0, qQ.useState)(wQ.v), [UQ, bQ] = (0, qQ.useState)(!1), [vQ, dQ] = (0, qQ.useState)(""), HQ = (0, JQ.d)();
-       (0, qQ.useEffect)((() => {
-         (0, IQ.i)()
-       }), []);
-       const aQ = QQ => ({
-         isEnabled: () => pQ.plugins[QQ],
- ... (83 more removed lines; see GitHub link above)
+       if (zM.has(MM)) return;
+       zM.add(MM);
+       const rM = 1 === MM.decodeAudioData.length,
+         iM = MM.decodeAudioData.bind(MM);
+       MM.decodeAudioData = (MM, OM, SM) => {
+         const zM = MM => {
+           const rM = jM._howls.filter((MM => "loaded" !== MM._state));
+           try {
+             null === OM || void 0 === OM || OM(MM)
+           } finally {
+             const iM = rM.find((MM => "loaded" === MM._state));
+             void 0 !== iM && "string" === typeof iM._src && function(MM, rM, iM) {
+               var OM;
+               PM += iM - (null !== (OM = aM.get(rM)) && void 0 !== OM ? OM : 0), aM.set(rM, iM);
+               const SM = QM.get(MM);
+               void 0 !== SM && nM[SM]++
+ ... (25 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L170-L172` → after: `L77-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L77-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L77-L82) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L170-L172)

```diff
-   5304: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => PQ
+   5265: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       Howl: () => SM.Howl,
+       Howler: () => SM.Howler,
+       musicOutput: () => dM,
+       readyAudioContext: () => yM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L174-L179` → after: `L84-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L84-L87) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L174-L179)

```diff
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(4948),
-       zQ = XQ(1226),
-       sQ = XQ(1145);
-     const FQ = [...TQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+     var OM, SM = iM(5269),
+       jM = iM(3839),
+       aM = iM(5026);
+     const PM = SM.Howler;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L181` → after: `L89-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L89-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L89-L172) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L181)

```diff
-     function PQ(QQ) {
+     function nM() {
+       var MM, rM;
+       if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
+       const iM = navigator.audioSession;
+       let OM;
+       "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
+       try {
+         OM = new AudioContext({
+           sampleRate: 44100
+         })
+       } catch {
+         return
+       }
+       const SM = OM.createGain();
+       SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
+     }
+ ... (68 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L183-L206` → after: `L174-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L174-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L174-L188) · [Before (L183-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L183-L206)

```diff
-         disabled: WQ,
-         hideWrapper: XQ
-       } = QQ, {
-         t: wQ
-       } = (0, zQ.C)(), PQ = QQ.advancedMode ? FQ.map((WQ => [WQ, QQ.callbacks[WQ]])) : TQ.j.map((WQ => [WQ, QQ.callbacks[WQ]])), JQ = (0, sQ.jsx)("div", {
-         className: qQ()("PluginsGrid", {
-           SectionBody: !XQ
-         }),
-         children: PQ.map((QQ => {
-           let [XQ, wQ] = QQ;
-           return (0, sQ.jsx)(gQ, {
-             plugin: XQ,
-             callbacks: wQ,
-             disabled: WQ
-           }, XQ)
-         }))
- ... (8 more removed lines; see GitHub link above)
+         ctx: MM,
+         masterGain: rM
+       } = PM;
+       return MM && rM ? {
+         ctx: MM,
+         destination: rM,
+         holdAwake: MM => {
+           var rM, iM;
+           (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
+         },
+         wake: () => {
+           var rM;
+           "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
+         }
+       } : null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L209-L250` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L191-L193) · [Before (L209-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L209-L250)

```diff
-     function gQ(QQ) {
-       let {
-         plugin: WQ,
-         callbacks: {
-           isEnabled: XQ,
-           UH: wQ
-         },
-         disabled: TQ
-       } = QQ;
-       const {
-         t: FQ
-       } = (0, zQ.C)(), PQ = XQ();
-       return (0, sQ.jsxs)("div", {
-         className: qQ()("PluginCard", {
-           PluginCardEnabled: PQ,
-           PluginCardDisabledForm: TQ
- ... (26 more removed lines; see GitHub link above)
+     function yM() {
+       var MM;
+       (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L252-L361` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/110.js#L195-L196) · [Before (L252-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/110.js#L252-L361)

```diff
-     const JQ = {
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
-       },
-       rQ = {
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
- ... (94 more removed lines; see GitHub link above)
+     JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/111.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/111.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L4-L33` → after: `L5-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L5-L27) · [Before (L4-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L4-L33)

```diff
-   5336: (QQ, WQ) => {
-     WQ.b = function(QQ, WQ) {
-       if (QQ && WQ) {
-         var XQ = Array.isArray(WQ) ? WQ : WQ.split(","),
-           wQ = QQ.name || "",
-           qQ = (QQ.type || "").toLowerCase(),
-           TQ = qQ.replace(/\/.*$/, "");
-         return XQ.some((function(QQ) {
-           var WQ = QQ.trim().toLowerCase();
-           return "." === WQ.charAt(0) ? wQ.toLowerCase().endsWith(WQ) : WQ.endsWith("/*") ? TQ === WQ.replace(/\/.*$/, "") : qQ === WQ
-         }))
-       }
-       return !0
-     }
-   },
-   5310: (QQ, WQ, XQ) => {
- ... (14 more removed lines; see GitHub link above)
+   5269: (MM, rM, iM) => {
+     var OM;
+     ! function() {
+       var SM = function() {
+         this.init()
+       };
+       SM.prototype = {
+         init: function() {
+           var MM = this || jM;
+           return MM._counter = 1e3, MM._html5AudioPool = [], MM.html5PoolSize = 10, MM._codecs = {}, MM._howls = [], MM._muted = !1, MM._volume = 1, MM._canPlayEvent = "canplaythrough", MM._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, M … [truncated]
+         },
+         volume: function(MM) {
+           var rM = this || jM;
+           if (MM = parseFloat(MM), rM.ctx || HM(), "undefined" !== typeof MM && MM >= 0 && MM <= 1) {
+             if (rM._volume = MM, rM._muted) return rM;
+             rM.usingWebAudio && rM.masterGain.gain.setValueAtTime(MM, jM.ctx.currentTime);
+ ... (7 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L35-L37` → after: `L29-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L29-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L29-L60) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L35-L37)

```diff
-         }
- 
-         function sQ(QQ) {
+           return rM._volume
+         },
+         mute: function(MM) {
+           var rM = this || jM;
+           rM.ctx || HM(), rM._muted = MM, rM.usingWebAudio && rM.masterGain.gain.setValueAtTime(MM ? 0 : rM._volume, jM.ctx.currentTime);
+           for (var iM = 0; iM < rM._howls.length; iM++)
+             if (!rM._howls[iM]._webAudio)
+               for (var OM = rM._howls[iM]._getSoundIds(), SM = 0; SM < OM.length; SM++) {
+                 var aM = rM._howls[iM]._soundById(OM[SM]);
+                 aM && aM._node && (aM._node.muted = !!MM || aM._muted)
+               }
+           return rM
+         },
+         stop: function() {
+           for (var MM = this || jM, rM = 0; rM < MM._howls.length; rM++) MM._howls[rM].stop();
+           return MM
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L39` → after: `L62-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L62-L70) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L39)

```diff
-             FQ(wQ.throw(QQ))
+             (new Audio).muted && (MM.noAudio = !0)
+           } catch (rM) {}
+           return MM.noAudio || MM._setupCodecs(), MM
+         },
+         _setupCodecs: function() {
+           var MM = this || jM,
+             rM = null;
+           try {
+             rM = "undefined" !== typeof Audio ? new Audio : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L41` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L72) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L41)

```diff
-             TQ(WQ)
+             return MM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L43-L60` → after: `L74-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L74-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L74-L98) · [Before (L43-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L43-L60)

```diff
-         }
- 
-         function FQ(QQ) {
-           var WQ;
-           QQ.done ? qQ(QQ.value) : (WQ = QQ.value, WQ instanceof XQ ? WQ : new XQ((function(QQ) {
-             QQ(WQ)
-           }))).then(zQ, sQ)
-         }
-         FQ((wQ = wQ.apply(QQ, WQ || [])).next())
-       }))
-     }
- 
-     function sQ(QQ, WQ) {
-       var XQ, wQ, qQ, TQ, zQ = {
-         label: 0,
-         sent: function() {
- ... (2 more removed lines; see GitHub link above)
+           if (!rM || "function" !== typeof rM.canPlayType) return MM;
+           var iM = rM.canPlayType("audio/mpeg;").replace(/^no$/, ""),
+             OM = MM._navigator ? MM._navigator.userAgent : "",
+             SM = OM.match(/OPR\/([0-6].)/g),
+             aM = SM && parseInt(SM[0].split("/")[1], 10) < 33,
+             PM = -1 !== OM.indexOf("Safari") && -1 === OM.indexOf("Chrome"),
+             nM = OM.match(/Version\/(.*?) /),
+             QM = PM && nM && parseInt(nM[1], 10) < 15;
+           return MM._codecs = {
+             mp3: !(aM || !iM && !rM.canPlayType("audio/mp3;").replace(/^no$/, "")),
+             mpeg: !!iM,
+             opus: !!rM.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
+             ogg: !!rM.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             oga: !!rM.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             wav: !!(rM.canPlayType('audio/wav; codecs="1"') || rM.canPlayType("audio/wav")).replace(/^no$/, ""),
+             aac: !!rM.canPlayType("audio/aac;").replace(/^no$/, ""),
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L62-L110` → after: `L100-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L100-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L100-L116) · [Before (L62-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L62-L110)

```diff
-         trys: [],
-         ops: []
-       };
-       return TQ = {
-         next: sQ(0),
-         throw: sQ(1),
-         return: sQ(2)
-       }, "function" === typeof Symbol && (TQ[Symbol.iterator] = function() {
-         return this
-       }), TQ;
- 
-       function sQ(sQ) {
-         return function(FQ) {
-           return function(sQ) {
-             if (XQ) throw new TypeError("Generator is already executing.");
-             for (; TQ && (TQ = 0, sQ[0] && (zQ = 0)), zQ;) try {
- ... (33 more removed lines; see GitHub link above)
+         _unlockAudio: function() {
+           var MM = this || jM;
+           if (!MM._audioUnlocked && MM.ctx) {
+             MM._audioUnlocked = !1, MM.autoUnlock = !1, MM._mobileUnloaded || 44100 === MM.ctx.sampleRate || (MM._mobileUnloaded = !0, MM.unload()), MM._scratchBuffer = MM.ctx.createBuffer(1, 1, 22050);
+             var rM = function(iM) {
+               for (; MM._html5AudioPool.length < MM.html5PoolSize;) try {
+                 var OM = new Audio;
+                 OM._unlocked = !0, MM._releaseHtml5Audio(OM)
+               } catch (iM) {
+                 MM.noAudio = !0;
+                 break
+               }
+               for (var SM = 0; SM < MM._howls.length; SM++)
+                 if (!MM._howls[SM]._webAudio)
+                   for (var jM = MM._howls[SM]._getSoundIds(), aM = 0; aM < jM.length; aM++) {
+                     var PM = MM._howls[SM]._soundById(jM[aM]);
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L112` → after: `L118-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L118-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L118-L221) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L112)

```diff
-                   qQ[2] && zQ.ops.pop(), zQ.trys.pop();
+               MM._autoResume();
+               var nM = MM.ctx.createBufferSource();
+               nM.buffer = MM._scratchBuffer, nM.connect(MM.ctx.destination), "undefined" === typeof nM.start ? nM.noteOn(0) : nM.start(0), "function" === typeof MM.ctx.resume && MM.ctx.resume(), nM.onended = function() {
+                 nM.disconnect(0), MM._audioUnlocked = !0, document.removeEventListener("touchstart", rM, !0), document.removeEventListener("touchend", rM, !0), document.removeEventListener("click", rM, !0), document.removeEventListener("keydown", rM, !0);
+                 for (var iM = 0; iM < MM._howls.length; iM++) MM._howls[iM]._emit("unlock")
+               }
+             };
+             return document.addEventListener("touchstart", rM, !0), document.addEventListener("touchend", rM, !0), document.addEventListener("click", rM, !0), document.addEventListener("keydown", rM, !0), MM
+           }
+         },
+         _obtainHtml5Audio: function() {
+           var MM = this || jM;
+           if (MM._html5AudioPool.length) return MM._html5AudioPool.pop();
+           var rM = (new Audio).play();
+           return rM && "undefined" !== typeof Promise && (rM instanceof Promise || "function" === typeof rM.then) && rM.catch((function() {
+             console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
+ ... (88 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L121-L124` → after: `L230-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L230-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L230-L242) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L121-L124)

```diff
-             if (5 & sQ[0]) throw sQ[1];
-             return {
-               value: sQ[0] ? sQ[1] : void 0,
-               done: !0
+             if (rM) return MM._src = rM, MM._state = "loading", "https:" === window.location.protocol && "http:" === rM.slice(0, 5) && (MM._html5 = !0, MM._webAudio = !1), new PM(MM), MM._webAudio && QM(MM), MM;
+             MM._emit("loaderror", null, "No codec support for selected audio sources.")
+           }
+         },
+         play: function(MM, rM) {
+           var iM = this,
+             OM = null;
+           if ("number" === typeof MM) OM = MM, MM = null;
+           else {
+             if ("string" === typeof MM && "loaded" === iM._state && !iM._sprite[MM]) return null;
+             if ("undefined" === typeof MM && (MM = "__default", !iM._playLock)) {
+               for (var SM = 0, aM = 0; aM < iM._sounds.length; aM++) iM._sounds[aM].eL && !iM._sounds[aM]._ended && (SM++, OM = iM._sounds[aM]._id);
+               1 === SM ? MM = null : OM = null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L295-L313` → after: `L245-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L245-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L245-L255) · [Before (L295-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L295-L313)

```diff
-         }))
-       }))
-     }
- 
-     function yQ(QQ, WQ) {
-       return zQ(this, void 0, void 0, (function() {
-         var XQ;
-         return sQ(this, (function(wQ) {
-           switch (wQ.label) {
-             case 0:
-               return QQ.items ? (XQ = DQ(QQ.items).filter((function(QQ) {
-                 return "file" === QQ.kind
-               })), "drop" !== WQ ? [2, XQ] : [4, Promise.all(XQ.map(pQ))]) : [3, 2];
-             case 1:
-               return [2, VQ(GQ(wQ.sent()))];
-             case 2:
- ... (3 more removed lines; see GitHub link above)
+           var PM = OM ? iM._soundById(OM) : iM._inactiveSound();
+           if (!PM) return null;
+           if (OM && !MM && (MM = PM._sprite || "__default"), "loaded" !== iM._state) {
+             PM._sprite = MM, PM._ended = !1;
+             var nM = PM._id;
+             return iM._queue.push({
+               event: "play",
+               action: function() {
+                 iM.play(nM)
+               }
+             }), nM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L315-L386` → after: `L257-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L257-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L257-L293) · [Before (L315-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L315-L386)

```diff
-         }))
-       }))
-     }
- 
-     function VQ(QQ) {
-       return QQ.filter((function(QQ) {
-         return -1 === rQ.indexOf(QQ.name)
-       }))
-     }
- 
-     function DQ(QQ) {
-       if (null === QQ) return [];
-       for (var WQ = [], XQ = 0; XQ < QQ.length; XQ++) {
-         var wQ = QQ[XQ];
-         WQ.push(wQ)
-       }
- ... (56 more removed lines; see GitHub link above)
+           if (OM && !PM.eL) return rM || iM._loadQueue("play"), PM._id;
+           iM._webAudio && jM._autoResume();
+           var QM = Math.max(0, PM._seek > 0 ? PM._seek : iM._sprite[MM][0] / 1e3),
+             zM = Math.max(0, (iM._sprite[MM][0] + iM._sprite[MM][1]) / 1e3 - QM),
+             LM = 1e3 * zM / Math.abs(PM._rate),
+             mM = iM._sprite[MM][0] / 1e3,
+             HM = (iM._sprite[MM][0] + iM._sprite[MM][1]) / 1e3;
+           PM._sprite = MM, PM._ended = !1;
+           var hM = function() {
+             PM.eL = !1, PM._seek = QM, PM._start = mM, PM._stop = HM, PM._loop = !(!PM._loop && !iM._sprite[MM][2])
+           };
+           if (!(QM >= HM)) {
+             var JM = PM._node;
+             if (iM._webAudio) {
+               var dM = function() {
+                 iM._playLock = !1, hM(), iM._refreshBuffer(PM);
+ ... (21 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L388-L472` → after: `L295-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L295-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L295-L307) · [Before (L388-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L388-L472)

```diff
-               }))
-             }))
-           }), (function(QQ) {
-             XQ(QQ)
-           }))
-         }()
-       }))
-     }
- 
-     function dQ(QQ) {
-       return zQ(this, void 0, void 0, (function() {
-         return sQ(this, (function(WQ) {
-           return [2, new Promise((function(WQ, XQ) {
-             QQ.file((function(XQ) {
-               var wQ = JQ(XQ, QQ.fullPath);
-               WQ(wQ)
- ... (69 more removed lines; see GitHub link above)
+               };
+               "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === JM.src && (JM.src = iM._src, JM.load());
+               var lM = window && window.ejecta || !JM.readyState && jM._navigator.isCocoonJS;
+               if (JM.readyState >= 3 || lM) yM();
+               else {
+                 iM._playLock = !0, iM._state = "loading";
+                 var EM = function() {
+                   iM._state = "loaded", yM(), JM.removeEventListener(jM._canPlayEvent, EM, !1)
+                 };
+                 JM.addEventListener(jM._canPlayEvent, EM, !1), iM._clearTimer(PM._id)
+               }
+             }
+             return PM._id
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L474-L606` → after: `L309-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L309-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L309-L327) · [Before (L474-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L474-L606)

```diff
-         }
-         return TQ
-       }(QQ, WQ) || AQ(QQ, WQ) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function AQ(QQ, WQ) {
-       if (QQ) {
-         if ("string" === typeof QQ) return RQ(QQ, WQ);
-         var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
-         return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? RQ(QQ, WQ) : void 0
-       }
-     }
- 
-     function RQ(QQ, WQ) {
- ... (117 more removed lines; see GitHub link above)
+           iM._ended(PM)
+         },
+         pause: function(MM) {
+           var rM = this;
+           if ("loaded" !== rM._state || rM._playLock) return rM._queue.push({
+             event: "pause",
+             action: function() {
+               rM.pause(MM)
+             }
+           }), rM;
+           for (var iM = rM._getSoundIds(MM), OM = 0; OM < iM.length; OM++) {
+             rM._clearTimer(iM[OM]);
+             var SM = rM._soundById(iM[OM]);
+             if (SM && !SM.eL && (SM._seek = rM.seek(iM[OM]), SM._rateSeek = 0, SM.eL = !0, rM._stopFade(iM[OM]), SM._node))
+               if (rM._webAudio) {
+                 if (!SM._node.bufferSource) continue;
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L608-L835` → after: `L329-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L329-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L329-L342) · [Before (L608-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L608-L835)

```diff
-         }
-         return TQ
-       }(QQ, WQ) || qW(QQ, WQ) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function qW(QQ, WQ) {
-       if (QQ) {
-         if ("string" === typeof QQ) return TW(QQ, WQ);
-         var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
-         return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? TW(QQ, WQ) : void 0
-       }
-     }
- 
-     function TW(QQ, WQ) {
- ... (212 more removed lines; see GitHub link above)
+           return rM
+         },
+         stop: function(MM, rM) {
+           var iM = this;
+           if ("loaded" !== iM._state || iM._playLock) return iM._queue.push({
+             event: "stop",
+             action: function() {
+               iM.stop(MM)
+             }
+           }), iM;
+           for (var OM = iM._getSoundIds(MM), SM = 0; SM < OM.length; SM++) {
+             iM._clearTimer(OM[SM]);
+             var jM = iM._soundById(OM[SM]);
+             jM && (jM._seek = jM._start || 0, jM._rateSeek = 0, jM.eL = !0, jM._ended = !0, iM._stopFade(OM[SM]), jM._node && (iM._webAudio ? jM._node.bufferSource && ("undefined" === typeof jM._node.bufferSource.stop ? jM._node.bufferSource.noteOff(0) : jM._node.bufferSource.sto … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L837-L845` → after: `L344-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L344-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L344-L360) · [Before (L837-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L837-L845)

```diff
-       }), [LQ, MQ, CQ, qW]);
-       var zW = (0, wQ.useRef)([]),
-         gW = function(QQ) {
-           uQ.current && uQ.current.contains(QQ.target) || (QQ.preventDefault(), zW.current = [])
-         };
-       (0, wQ.useEffect)((function() {
-         return GQ && (document.addEventListener("dragover", NQ, !1), document.addEventListener("drop", gW, !1)),
-           function() {
-             GQ && (document.removeEventListener("dragover", NQ), document.removeEventListener("drop", gW))
+           return iM
+         },
+         mute: function(MM, rM) {
+           var iM = this;
+           if ("loaded" !== iM._state || iM._playLock) return iM._queue.push({
+             event: "mute",
+             action: function() {
+               iM.mute(MM, rM)
+             }
+           }), iM;
+           if ("undefined" === typeof rM) {
+             if ("boolean" !== typeof MM) return iM._muted;
+             iM._muted = MM
+           }
+           for (var OM = iM._getSoundIds(rM), SM = 0; SM < OM.length; SM++) {
+             var aM = iM._soundById(OM[SM]);
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L847-L886` → after: `L362-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L362-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L362-L372) · [Before (L847-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L847-L886)

```diff
-       }), [uQ, GQ]), (0, wQ.useEffect)((function() {
-         return !qQ && pQ && uQ.current && uQ.current.focus(),
-           function() {}
-       }), [uQ, pQ, qQ]);
-       var IW = (0, wQ.useCallback)((function(QQ) {
-           HQ ? HQ(QQ) : console.error(QQ)
-         }), [HQ]),
-         yW = (0, wQ.useCallback)((function(QQ) {
-           QQ.preventDefault(), QQ.persist(), iW(QQ), zW.current = [].concat(XW(zW.current), [QQ.target]), YQ(QQ) && Promise.resolve(TQ(QQ)).then((function(WQ) {
-             if (!xQ(QQ) || dQ) {
-               var XQ = WQ.length,
-                 wQ = XQ > 0 && function(QQ) {
-                   var WQ = QQ.files,
-                     XQ = QQ.accept,
-                     wQ = QQ.minSize,
-                     qQ = QQ.maxSize,
- ... (24 more removed lines; see GitHub link above)
+           return iM
+         },
+         volume: function() {
+           var MM, rM, iM, OM = this,
+             SM = arguments;
+           if (0 === SM.length) return OM._volume;
+           if (1 === SM.length || 2 === SM.length && "undefined" === typeof SM[1] ? OM._getSoundIds().indexOf(SM[0]) >= 0 ? rM = parseInt(SM[0], 10) : MM = parseFloat(SM[0]) : SM.length >= 2 && (MM = parseFloat(SM[0]), rM = parseInt(SM[1], 10)), !("undefined" !== typeof MM && MM > … [truncated]
+           if ("loaded" !== OM._state || OM._playLock) return OM._queue.push({
+             event: "volume",
+             action: function() {
+               OM.volume.apply(OM, SM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L888-L931` → after: `L374-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L374-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L374-L384) · [Before (L888-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L888-L931)

```diff
-           })).catch((function(QQ) {
-             return IW(QQ)
-           }))
-         }), [TQ, gQ, IW, dQ, AQ, sQ, zQ, FQ, PQ, lQ]),
-         VW = (0, wQ.useCallback)((function(QQ) {
-           QQ.preventDefault(), QQ.persist(), iW(QQ);
-           var WQ = YQ(QQ);
-           if (WQ && QQ.dataTransfer) try {
-             QQ.dataTransfer.dropEffect = "copy"
-           } catch (XQ) {}
-           return WQ && rQ && rQ(QQ), !1
-         }), [rQ, dQ]),
-         DW = (0, wQ.useCallback)((function(QQ) {
-           QQ.preventDefault(), QQ.persist(), iW(QQ);
-           var WQ = zW.current.filter((function(QQ) {
-               return uQ.current && uQ.current.contains(QQ)
- ... (28 more removed lines; see GitHub link above)
+           }), OM;
+           "undefined" === typeof rM && (OM._volume = MM), rM = OM._getSoundIds(rM);
+           for (var aM = 0; aM < rM.length; aM++)(iM = OM._soundById(rM[aM])) && (iM._volume = MM, SM[2] || OM._stopFade(rM[aM]), OM._webAudio && iM._node && !iM._muted ? iM._node.gain.setValueAtTime(MM, jM.ctx.currentTime) : iM._node && !iM._muted && (iM._node.volume = MM * jM.vo … [truncated]
+           return OM
+         },
+         fade: function(MM, rM, iM, OM) {
+           var SM = this;
+           if ("loaded" !== SM._state || SM._playLock) return SM._queue.push({
+             event: "fade",
+             action: function() {
+               SM.fade(MM, rM, iM, OM)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L933-L960` → after: `L386-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L386-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L386-L479) · [Before (L933-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L933-L960)

```diff
-           })), (!FQ && XQ.length > 1 || FQ && PQ >= 1 && XQ.length > PQ) && (XQ.forEach((function(QQ) {
-             wQ.push({
-               file: QQ,
-               errors: [tQ]
-             })
-           })), XQ.splice(0)), SQ({
-             acceptedFiles: XQ,
-             fileRejections: wQ,
-             type: "setFiles"
-           }), IQ && IQ(XQ, wQ, WQ), wQ.length > 0 && BQ && BQ(wQ, WQ), XQ.length > 0 && jQ && jQ(XQ, WQ)
-         }), [SQ, FQ, AQ, sQ, zQ, PQ, IQ, jQ, BQ, lQ]),
-         GW = (0, wQ.useCallback)((function(QQ) {
-           QQ.preventDefault(), QQ.persist(), iW(QQ), zW.current = [], YQ(QQ) && Promise.resolve(TQ(QQ)).then((function(WQ) {
-             xQ(QQ) && !dQ || pW(WQ, QQ)
-           })).catch((function(QQ) {
-             return IW(QQ)
- ... (12 more removed lines; see GitHub link above)
+           }), SM;
+           MM = Math.min(Math.max(0, parseFloat(MM)), 1), rM = Math.min(Math.max(0, parseFloat(rM)), 1), iM = parseFloat(iM), SM.volume(MM, OM);
+           for (var aM = SM._getSoundIds(OM), PM = 0; PM < aM.length; PM++) {
+             var nM = SM._soundById(aM[PM]);
+             if (nM) {
+               if (OM || SM._stopFade(aM[PM]), SM._webAudio && !nM._muted) {
+                 var QM = jM.ctx.currentTime,
+                   zM = QM + iM / 1e3;
+                 nM._volume = MM, nM._node.gain.setValueAtTime(MM, QM), nM._node.gain.linearRampToValueAtTime(rM, zM)
+               }
+               SM._startFadeInterval(nM, MM, rM, iM, aM[PM], "undefined" === typeof OM)
+             }
+           }
+           return SM
+         },
+         _startFadeInterval: function(MM, rM, iM, OM, SM, jM) {
+ ... (78 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L962-L1004` → after: `L481-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L481-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L481-L488) · [Before (L962-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L962-L1004)

```diff
-             window.showOpenFilePicker(QQ).then((function(QQ) {
-               return TQ(QQ)
-             })).then((function(QQ) {
-               pW(QQ, null), SQ({
-                 type: "closeDialog"
-               })
-             })).catch((function(QQ) {
-               var WQ;
-               (WQ = QQ) instanceof DOMException && ("AbortError" === WQ.name || WQ.code === WQ.ABORT_ERR) ? (CQ(QQ), SQ({
-                 type: "closeDialog"
-               })) : ! function(QQ) {
-                 return QQ instanceof DOMException && ("SecurityError" === QQ.name || QQ.code === QQ.SECURITY_ERR)
-               }(QQ) ? IW(QQ) : (qW.current = !1, LQ.current ? (LQ.current.value = null, LQ.current.click()) : IW(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided … [truncated]
-             }))
-           } else LQ.current && (SQ({
-             type: "openDialog"
- ... (27 more removed lines; see GitHub link above)
+             if (nM && !iM._webAudio) {
+               var zM = function() {
+                 iM._playLock ? setTimeout(zM, 0) : QM()
+               };
+               setTimeout(zM, 0)
+             } else QM()
+           }
+           return iM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1006-L1007` → after: `L490-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L490-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L490-L498) · [Before (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L1006-L1007)

```diff
-         lW = function(QQ) {
-           return bQ ? null : aW(QQ)
+         playing: function(MM) {
+           var rM = this;
+           if ("number" === typeof MM) {
+             var iM = rM._soundById(MM);
+             return !!iM && !iM.eL
+           }
+           for (var OM = 0; OM < rM._sounds.length; OM++)
+             if (!rM._sounds[OM].eL) return !0;
+           return !1
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1010` → after: `L674-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L674-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L674-L689) · [Before (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L1010)

```diff
-           return vQ ? null : aW(QQ)
+           var rM = MM._src;
+           if (nM[rM]) return MM._duration = nM[rM].duration, void mM(MM);
+           if (/^data:[^;]+;base64,/.test(rM)) {
+             for (var iM = atob(rM.split(",")[1]), OM = new Uint8Array(iM.length), SM = 0; SM < iM.length; ++SM) OM[SM] = iM.charCodeAt(SM);
+             LM(OM.buffer, MM)
+           } else {
+             var jM = new XMLHttpRequest;
+             jM.open(MM._xhr.method, rM, !0), jM.withCredentials = MM._xhr.withCredentials, jM.responseType = "arraybuffer", MM._xhr.headers && Object.keys(MM._xhr.headers).forEach((function(rM) {
+               jM.setRequestHeader(rM, MM._xhr.headers[rM])
+             })), jM.onload = function() {
+               var rM = (jM.status + "")[0];
+               "0" === rM || "2" === rM || "3" === rM ? LM(jM.response, MM) : MM._emit("loaderror", null, "Failed loading audio file with status: " + jM.status + ".")
+             }, jM.onerror = function() {
+               MM._webAudio && (MM._html5 = !0, MM._webAudio = !1, MM._sounds = [], delete nM[rM], MM.load())
+             }, zM(jM)
+           }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1013` → after: `L692-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L692-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L692-L710) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L1013)

```diff
-           dQ && QQ.stopPropagation()
+           try {
+             MM.send()
+           } catch (rM) {
+             MM.onerror()
+           }
+         },
+         LM = function(MM, rM) {
+           var iM = function() {
+               rM._emit("loaderror", null, "Decoding audio data failed.")
+             },
+             OM = function(MM) {
+               MM && rM._sounds.length > 0 ? (nM[rM._src] = MM, mM(rM, MM)) : iM()
+             };
+           "undefined" !== typeof Promise && 1 === jM.ctx.decodeAudioData.length ? jM.ctx.decodeAudioData(MM).then(OM).catch(iM) : jM.ctx.decodeAudioData(MM, OM, iM)
+         },
+         mM = function(MM, rM) {
+ ... (3 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1015-L1042` → after: `L712-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L712-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L712-L727) · [Before (L1015-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L1015-L1042)

```diff
-         cW = (0, wQ.useMemo)((function() {
-           return function() {
-             var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               WQ = QQ.refKey,
-               XQ = void 0 === WQ ? "ref" : WQ,
-               wQ = QQ.role,
-               TQ = QQ.onKeyDown,
-               zQ = QQ.onFocus,
-               sQ = QQ.onBlur,
-               FQ = QQ.onClick,
-               PQ = QQ.onDragEnter,
-               gQ = QQ.onDragOver,
-               JQ = QQ.onDragLeave,
-               rQ = QQ.onDrop,
-               IQ = PW(QQ, QW);
-             return sW(sW(FW({
- ... (12 more removed lines; see GitHub link above)
+         HM = function() {
+           if (jM.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? jM.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? jM.ctx = new webkitAudioContext : jM.usingWebAudio = !1
+             } catch (SM) {
+               jM.usingWebAudio = !1
+             }
+             jM.ctx || (jM.usingWebAudio = !1);
+             var MM = /iP(hone|od|ad)/.test(jM._navigator && jM._navigator.platform),
+               rM = jM._navigator && jM._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
+               iM = rM ? parseInt(rM[1], 10) : null;
+             if (MM && iM && iM < 9) {
+               var OM = /safari/.test(jM._navigator && jM._navigator.userAgent.toLowerCase());
+               jM._navigator && !OM && (jM.usingWebAudio = !1)
+             }
+             jM.usingWebAudio && (jM.masterGain = "undefined" === typeof jM.ctx.createGain ? jM.ctx.createGainNode() : jM.ctx.createGain(), jM.masterGain.gain.setValueAtTime(jM._muted ? 0 : jM._volume, jM.ctx.currentTime), jM.masterGain.connect(jM.ctx.destination)), jM._setup()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1044-L1066` → after: `L729-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L729-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L729-L776) · [Before (L1044-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L1044-L1066)

```diff
-         }), [uQ, bW, vW, dW, HW, yW, VW, DW, GW, bQ, vQ, qQ]),
-         AW = (0, wQ.useCallback)((function(QQ) {
-           QQ.stopPropagation()
-         }), []),
-         RW = (0, wQ.useMemo)((function() {
-           return function() {
-             var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               WQ = QQ.refKey,
-               XQ = void 0 === WQ ? "ref" : WQ,
-               wQ = QQ.onChange,
-               qQ = QQ.onClick,
-               TQ = PW(QQ, WW);
-             return sW(sW({}, FW({
-               accept: AQ,
-               multiple: FQ,
-               type: "file",
- ... (7 more removed lines; see GitHub link above)
+         };
+       void 0 === (OM = function() {
+         return {
+           Howler: jM,
+           Howl: aM
+         }
+       }.apply(rM, [])) || (MM.exports = OM), rM.Howler = jM, rM.Howl = aM, "undefined" !== typeof iM.g ? (iM.g.HowlerGlobal = SM, iM.g.Howler = jM, iM.g.Howl = aM, iM.g.Sound = PM) : "undefined" !== typeof window && (window.HowlerGlobal = SM, window.Howler = jM, window.Howl = aM, … [truncated]
+     }(),
+     function() {
+       var MM;
+       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(MM) {
+         var rM = this;
+         if (!rM.ctx || !rM.ctx.listener) return rM;
+         for (var iM = rM._howls.length - 1; iM >= 0; iM--) rM._howls[iM].stereo(MM);
+         return rM
+       }, HowlerGlobal.prototype.pos = function(MM, rM, iM) {
+ ... (32 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1068-L1111` → after: `L778-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L778-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L778-L891) · [Before (L1068-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L1068-L1111)

```diff
-         }), [LQ, XQ, FQ, GW, qQ]);
-       return sW(sW({}, fQ), {}, {
-         JR: mQ && !qQ,
-         getRootProps: cW,
-         getInputProps: RW,
-         rootRef: uQ,
-         inputRef: LQ,
-         open: aW(UW)
-       })
-     }
- 
-     function jW(QQ, WQ) {
-       switch (WQ.type) {
-         case "focus":
-           return sW(sW({}, QQ), {}, {
-             JR: !0
- ... (28 more removed lines; see GitHub link above)
+         }), OM;
+         var SM = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
+         if ("undefined" === typeof iM) {
+           if ("number" !== typeof MM) return OM._stereo;
+           OM._stereo = MM, OM._pos = [MM, 0, 0]
+         }
+         for (var jM = OM._getSoundIds(iM), aM = 0; aM < jM.length; aM++) {
+           var PM = OM._soundById(jM[aM]);
+           if (PM) {
+             if ("number" !== typeof MM) return PM._stereo;
+             PM._stereo = MM, PM._pos = [MM, 0, 0], PM._node && (PM._pannerAttr.panningModel = "equalpower", PM._panner && PM._panner.pan || rM(PM, SM), "spatial" === SM ? "undefined" !== typeof PM._panner.positionX ? (PM._panner.positionX.setValueAtTime(MM, Howler.ctx.currentTime … [truncated]
+           }
+         }
+         return OM
+       }, Howl.prototype.pos = function(MM, iM, OM, SM) {
+         var jM = this;
+ ... (98 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1113-L1115` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/111.js#L893) · [Before (L1113-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/111.js#L1113-L1115)

```diff
-     }
- 
-     function BW() {}
+     }()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/112.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/112.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295)

#### 1. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L4-L35` → after: `L4-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L4-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L4-L47) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L4-L35)

```diff
-   5359: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       return wQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
-         return typeof QQ
-       } : function(QQ) {
-         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
-       }, wQ(QQ)
-     }
-     Object.defineProperty(WQ, "__esModule", {
-       value: !0
-     }), WQ.default = void 0;
-     var qQ = JQ(XQ(1081)),
-       TQ = function(QQ, WQ) {
-         if (!WQ && QQ && QQ.__esModule) return QQ;
-         if (null === QQ || "object" !== wQ(QQ) && "function" !== typeof QQ) return {
-           default: QQ
- ... (16 more removed lines; see GitHub link above)
+   5278: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => vM
+     });
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(332),
+       aM = iM(1240),
+       PM = iM(1694),
+       nM = iM(1279),
+       QM = iM(1630),
+       zM = iM(1573),
+       LM = iM(2896);
+     const mM = {
+       retries: 2,
+       minTimeout: 2e3
+ ... (28 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L38-L43` → after: `L50-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L50-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L50-L70) · [Before (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L38-L43)

```diff
-       if ("function" !== typeof WeakMap) return null;
-       var WQ = new WeakMap,
-         XQ = new WeakMap;
-       return (gQ = function(QQ) {
-         return QQ ? XQ : WQ
-       })(QQ)
+       let {
+         icon: rM,
+         label: iM,
+         value: OM
+       } = MM;
+       return (0, YM.jsxs)("div", {
+         className: "PlayerProfileStat",
+         children: [(0, YM.jsx)(RM.b, {
+           name: rM,
+           className: "PlayerProfileStatIcon"
+         }), (0, YM.jsxs)("div", {
+           className: "PlayerProfileStatText",
+           children: [(0, YM.jsx)("div", {
+             className: "PlayerProfileStatLabel SmallTextLight",
+             children: iM
+           }), (0, YM.jsx)("div", {
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L47-L48` → after: `L74-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L74-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L74-L86) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L47-L48)

```diff
-       return QQ && QQ.__esModule ? QQ : {
-         default: QQ
+       let {
+         profile: rM
+       } = MM;
+       const {
+         t: iM,
+         selectedLanguage: OM
+       } = (0, yM.A)();
+       let SM = iM("homePage:profileUnknown");
+       if (rM.lastOnline) {
+         const MM = (0, yM.n)(OM.code, "homePage:profileTimeAgo");
+         SM = iM("homePage:profileTimeAgo", {
+           time: (0, jM.db)(MM, rM.lastOnline, Date.now())
+         })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L52-L80` → after: `L111-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L111-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L111-L129) · [Before (L52-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L52-L80)

```diff
-     function rQ(QQ, WQ) {
-       var XQ = "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
-       if (!XQ) {
-         if (Array.isArray(QQ) || (XQ = function(QQ, WQ) {
-             if (!QQ) return;
-             if ("string" === typeof QQ) return IQ(QQ, WQ);
-             var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
-             "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
-             if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
-             if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return IQ(QQ, WQ)
-           }(QQ)) || WQ && QQ && "number" === typeof QQ.length) {
-           XQ && (QQ = XQ);
-           var wQ = 0,
-             qQ = function() {};
-           return {
-             s: qQ,
- ... (13 more removed lines; see GitHub link above)
+     function vM() {
+       const {
+         t: MM
+       } = (0, yM.A)(), rM = (0, CM.useNavigatePreserveSearch)(), iM = (0, HM.i)(), {
+         playerName: wM,
+         playerUrlName: gM
+       } = (0, SM.D)(), DM = (0, SM.u)(), AM = (0, aM.c)(DM.pathname), vM = AM && ("urlId" in AM ? `urlId:${AM.urlId}` : `name:${AM.lowerCaseName}`), FM = (0, OM.useRef)(vM);
+       FM.current = vM;
+       const {
+         userContext: BM,
+         isUserContextUpdating: XM
+       } = (0, JM.b)(), IM = (0, OM.useRef)(null), KM = (0, OM.useRef)(null), qM = (0, OM.useRef)(null), TM = (0, OM.useRef)(!1), VM = (0, OM.useRef)((0, jM.ac)(NM)), [cM, Mr] = (0, OM.useState)((() => {
+         const MM = AM && bM.e.peek(BM, AM);
+         return MM ? {
+           status: "loaded",
+           profile: MM,
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L82-L97` → after: `L131-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L131-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L131-L166) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L82-L97)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var TQ, zQ = !0,
-         sQ = !1;
-       return {
-         s: function() {
-           XQ = XQ.call(QQ)
-         },
-         n: function() {
-           var QQ = XQ.next();
-           return zQ = QQ.done, QQ
-         },
-         e: function(QQ) {
-           sQ = !0, TQ = QQ
-         },
-         f: function() {
+       })), [rr, ir] = (0, OM.useState)(0);
+       (0, OM.useEffect)(eM.e, []), (0, OM.useEffect)((() => {
+         sM.gameBridge.send("leaveGame", {
+           reloadPath: null
+         }), WM.d.set({
+           gameState: "landingPage",
+           openEverythingMenuName: null,
+           openInGameMenuName: null
+         })
+       }), [DM.key]);
+       const Or = () => {
+         const MM = (0, CM.getPreviousLocation)();
+         null === MM || MM.startsWith("/play") ? (0, CM.navigateToHomePage)() : rM(-1)
+       };
+       (0, fM.e)(Or), (0, OM.useEffect)((() => {
+         var MM;
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L302-L304` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L169-L170) · [Before (L302-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L302-L304)

```diff
-               fill: "horizontal" === TQ ? FQ : wQ - FQ,
-               handle: FQ,
-               label: FQ
+               status: "loaded",
+               profile: await zM.c.getPlayerProfile(MM, rM, mM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L306-L312` → after: `L172-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L172-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L172-L176) · [Before (L306-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L306-L312)

```diff
-           })), pQ(VQ(XQ), "renderLabels", (function(QQ) {
-             return (0, PQ.jsx)("ul", {
-               ref: function(QQ) {
-                 XQ.labels = QQ
-               },
-               className: (0, qQ.default)("rangeslider__labels"),
-               children: QQ
+           } catch (iM) {
+             return (0, LM.c)(iM) ? {
+               status: "notFound"
+             } : (console.error("Failed to load user profile", iM), {
+               status: "failed"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L314-L318` → after: `L178-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L178-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L178-L185) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L314-L318)

```diff
-           })), XQ.state = {
-             active: !1,
-             limit: 0,
-             grab: 0
-           }, XQ
+           }
+         }(BM, AM).then((MM => {
+           OM || ("loaded" === MM.status && (qM.current = BM, TM.current = !0), Mr((rM => "failed" === MM.status && SM(rM) ? rM : {
+             ...MM,
+             playerKey: vM
+           })))
+         })), () => {
+           OM = !0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L320-L323` → after: `L187-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L187-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L187-L202) · [Before (L320-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L320-L323)

```diff
-         return WQ = zQ, (XQ = [{
-           key: "componentDidMount",
-           value: function() {
-             this.handleUpdate(), new sQ.default(this.handleUpdate).observe(this.slider)
+       }), [XM, vM, BM, rr]);
+       const Sr = "loading" === cM.status || cM.playerKey === vM || "loaded" === cM.status && !!AM && "urlId" in AM && cM.profile.urlId === AM.urlId ? cM : {
+           status: "loading"
+         },
+         jr = "loaded" === Sr.status ? Sr.profile : null,
+         ar = "loading" === Sr.status ? null : function(MM) {
+           if ("loaded" === MM.status) {
+             const {
+               profile: rM
+             } = MM;
+             return (0, QM.S)({
+               urlId: rM.urlId,
+               name: rM.player.name,
+               ranks: rM.player.ranks,
+               socialLinks: rM.socialLinks
+             })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L325-L373` → after: `L204-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L204-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L204-L252) · [Before (L325-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L325-L373)

```diff
-         }, {
-           key: "render",
-           value: function() {
-             var QQ = this,
-               WQ = this.props,
-               XQ = WQ.value,
-               wQ = WQ.orientation,
-               TQ = WQ.className,
-               zQ = WQ.tooltip,
-               sQ = WQ.reverse,
-               FQ = WQ.labels,
-               gQ = WQ.min,
-               JQ = WQ.max,
-               IQ = WQ.handleLabel,
-               jQ = this.state.active,
-               BQ = GQ.orientation[wQ].dimension,
- ... (33 more removed lines; see GitHub link above)
+           return "notFound" === MM.status ? (0, QM.ab)() : null
+         }(Sr),
+         Pr = null !== jr && void 0 !== jr && jr.urlId ? (0, aM.f)({
+           urlId: jr.urlId,
+           name: jr.player.name
+         }) : null;
+       (0, hM.g)(Pr);
+       const nr = null !== jr && void 0 !== jr && jr.player.cosmetics.profileEffect ? tM.f[jr.player.cosmetics.profileEffect] : void 0,
+         Qr = null !== jr && !XM && BM.getPlayerName().toLowerCase() === jr.player.name.toLowerCase(),
+         zr = (0, kM.c)(null === jr || void 0 === jr ? void 0 : jr.player.name),
+         Lr = Qr && BM.playerHasRank("youtuber");
+       KM.current = jr;
+       const mr = (0, OM.useCallback)((() => {
+           AM && (bM.e.invalidate(AM), bM.e.get(BM, AM).then((MM => {
+             FM.current === vM && (TM.current = !0, Mr({
+               status: "loaded",
+ ... (33 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L375-L389` → after: `L254-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L254-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L254-L320) · [Before (L375-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L375-L389)

```diff
-             return (0, PQ.jsxs)("div", {
-               ref: function(WQ) {
-                 QQ.slider = WQ
-               },
-               className: (0, qQ.default)("rangeslider", "rangeslider-".concat(wQ), {
-                 "rangeslider-reverse": sQ
-               }, TQ),
-               onMouseDown: this.handleDrag,
-               onMouseUp: this.handleEnd,
-               onTouchStart: this.handleStart,
-               onTouchEnd: this.handleEnd,
-               "aria-valuemin": gQ,
-               "aria-valuemax": JQ,
-               "aria-valuenow": XQ,
-               "aria-orientation": wQ,
+           })]
+         }), (0, YM.jsxs)("div", {
+           className: "PlayerProfileHeader",
+           children: [(0, YM.jsx)(GM.c, {
+             onClick: Or,
+             children: MM("general:back")
+           }), jr && !XM && !Qr && oM.featureFlags.useSocialFeatures && (0, YM.jsx)("div", {
+             className: "PlayerProfileExclusionActions",
+             children: (0, YM.jsx)(ZM.d, {
+               playerName: jr.player.name,
+               className: "SmallTextLight"
+             })
+           })]
+         }), "loading" === Sr.status && (0, YM.jsx)("div", {
+           className: "PlayerProfileCentredMessage",
+           children: (0, YM.jsx)(UM.d, {})
+ ... (51 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L391-L406` → after: `L322-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L322-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L322-L332) · [Before (L391-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L391-L406)

```diff
-                 className: "rangeslider__fill",
-                 style: UQ
-               }), (0, PQ.jsxs)("div", {
-                 ref: function(WQ) {
-                   QQ.handle = WQ
-                 },
-                 className: "rangeslider__handle",
-                 onMouseDown: this.handleStart,
-                 onTouchMove: this.handleDrag,
-                 onTouchEnd: this.handleEnd,
-                 onKeyDown: this.handleKeyDown,
-                 style: bQ,
-                 tabIndex: 0,
-                 children: [vQ && (0, PQ.jsx)("div", {
-                   ref: function(WQ) {
-                     QQ.tooltip = WQ
+                 className: "PlayerProfileGamesTitle SmallTextBold",
+                 children: MM("homePage:profileReleasedGames")
+               }), 0 === jr.releasedGames.length && (0, YM.jsx)("div", {
+                 className: "PlayerProfileNoGames",
+                 children: MM("homePage:profileNoReleasedGames")
+               }), jr.releasedGames.length > 0 && (0, YM.jsx)("div", {
+                 className: "PlayerProfileGamesGrid",
+                 children: jr.releasedGames.map((MM => (0, YM.jsx)(EM.h, {
+                   source: {
+                     type: "preview",
+                     preview: MM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L408-L509` → after: `L334-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L334-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L334-L343) · [Before (L408-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L408-L509)

```diff
-                   className: "rangeslider__handle-tooltip",
-                   children: (0, PQ.jsx)("span", {
-                     children: this.handleFormat(XQ)
-                   })
-                 }), (0, PQ.jsx)("div", {
-                   className: "rangeslider__handle-label",
-                   children: IQ
-                 })]
-               }), FQ && this.renderLabels(dQ)]
-             })
-           }
-         }]) && jQ(WQ.prototype, XQ), wQ && jQ(WQ, wQ), Object.defineProperty(WQ, "prototype", {
-           writable: !1
-         }), zQ
-       }(TQ.Component);
-     pQ(UQ, "propTypes", {
- ... (86 more removed lines; see GitHub link above)
+                   gameWidth: "100%",
+                   useLongRatio: !0,
+                   hideFavourites: !0,
+                   entrySource: "other"
+                 }, MM.schematicId)))
+               })]
+             })]
+           })]
+         })]
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L512-L520` → after: `L346-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L346-L348) · [Before (L512-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L512-L520)

```diff
-   5318: (QQ, WQ, XQ) => {
-     QQ.exports = XQ(5320)()
-   },
-   5328: QQ => {
-     QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
-   },
-   5368: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       default: () => dQ
+   5282: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => dM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L522-L644` → after: `L350-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L350-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L350-L369) · [Before (L522-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L522-L644)

```diff
-     var wQ = function() {
-         if ("undefined" !== typeof Map) return Map;
- 
-         function QQ(QQ, WQ) {
-           var XQ = -1;
-           return QQ.some((function(QQ, wQ) {
-             return QQ[0] === WQ && (XQ = wQ, !0)
-           })), XQ
-         }
-         return function() {
-           function WQ() {
-             this.__entries__ = []
-           }
-           return Object.defineProperty(WQ.prototype, "size", {
-             get: function() {
-               return this.__entries__.length
- ... (107 more removed lines; see GitHub link above)
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(5011),
+       aM = iM(1188),
+       PM = iM(1398),
+       nM = iM(1520),
+       QM = iM(1573),
+       zM = iM(1429),
+       LM = iM(2709),
+       mM = iM(1303);
+     const HM = {
+       youtube: {
+         icon: "youtube",
+         color: "#FF0033",
+         name: "YouTube"
+       },
+ ... (4 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L646-L647` → after: `L371-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L371-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L371-L374) · [Before (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L646-L647)

```diff
-       JQ = function(QQ) {
-         return QQ && QQ.ownerDocument && QQ.ownerDocument.defaultView || TQ
+       instagram: {
+         icon: "instagram",
+         color: "#E1306C",
+         name: "Instagram"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L649` → after: `L376-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L376-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L376-L386) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L649)

```diff
-       rQ = DQ(0, 0, 0, 0);
+       twitter: {
+         icon: "x-twitter",
+         color: "#0F0F0F",
+         name: "X"
+       },
+       twitch: {
+         icon: "twitch",
+         color: "#9146FF",
+         name: "Twitch"
+       }
+     };
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L652` → after: `L389-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L389-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L389-L403) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L652)

```diff
-       return parseFloat(QQ) || 0
+       let {
+         platform: rM
+       } = MM;
+       const iM = "youtube" === rM;
+       return (0, mM.jsxs)("span", {
+         className: SM()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: iM
+         }),
+         children: [iM && (0, mM.jsx)(LM.d, {
+           variant: "white"
+         }), !iM && (0, mM.jsx)(PM.b, {
+           name: HM[rM].icon,
+           kit: "brands"
+         })]
+       })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L656-L660` → after: `L407-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L407-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L407-L417) · [Before (L656-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L656-L660)

```diff
-       for (var WQ = [], XQ = 1; XQ < arguments.length; XQ++) WQ[XQ - 1] = arguments[XQ];
-       return WQ.reduce((function(WQ, XQ) {
-         return WQ + IQ(QQ["border-" + XQ + "-width"])
-       }), 0)
-     }
+       let {
+         platform: rM,
+         link: iM,
+         editable: OM,
+         userContext: SM,
+         onLinksUpdated: LM
+       } = MM;
+       const {
+         t: JM
+       } = (0, aM.A)(), dM = HM[rM];
+       if (!iM && !OM) return null;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L662-L671` → after: `L419-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L419-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L419-L442) · [Before (L662-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L662-L671)

```diff
-     function BQ(QQ) {
-       var WQ = QQ.clientWidth,
-         XQ = QQ.clientHeight;
-       if (!WQ && !XQ) return rQ;
-       var wQ = JQ(QQ).getComputedStyle(QQ),
-         qQ = function(QQ) {
-           for (var WQ = {}, XQ = 0, wQ = ["top", "right", "bottom", "left"]; XQ < wQ.length; XQ++) {
-             var qQ = wQ[XQ],
-               TQ = QQ["padding-" + qQ];
-             WQ[qQ] = IQ(TQ)
+       function yM() {
+         var MM;
+         if (!SM || !LM) return;
+         zM.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: dM.name
+             }
+           },
+           prefixText: jM.t[rM],
+           placeholderText: "playBloxd",
+           initialValue: null !== (MM = null === iM || void 0 === iM ? void 0 : iM.handle) && void 0 !== MM ? MM : "",
+           maxLength: 30,
+           submitText: "general:save",
+           secondaryButtonText: iM ? "general:remove" : void 0
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L673-L684` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L444) · [Before (L673-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L673-L684)

```diff
-           return WQ
-         }(wQ),
-         TQ = qQ.left + qQ.right,
-         zQ = qQ.top + qQ.bottom,
-         sQ = IQ(wQ.width),
-         FQ = IQ(wQ.height);
-       if ("border-box" === wQ.boxSizing && (Math.round(sQ + TQ) !== WQ && (sQ -= jQ(wQ, "left", "right") + TQ), Math.round(FQ + zQ) !== XQ && (FQ -= jQ(wQ, "top", "bottom") + zQ)), ! function(QQ) {
-           return QQ === JQ(QQ).document.documentElement
-         }(QQ)) {
-         var PQ = Math.round(sQ + TQ) - WQ,
-           gQ = Math.round(FQ + zQ) - XQ;
-         1 !== Math.abs(PQ) && (sQ -= PQ), 1 !== Math.abs(gQ) && (FQ -= gQ)
+         }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L686` → after: `L446-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L446-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L446-L514) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L686)

```diff
-       return DQ(qQ.left, qQ.top, sQ, FQ)
+       if (iM) {
+         const MM = `@${iM.handle}`;
+         return (0, mM.jsxs)("a", {
+           className: "PlayerProfileSocialLink",
+           style: {
+             background: dM.color
+           },
+           href: iM.profileUrl,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: [(0, mM.jsxs)("div", {
+             className: "PlayerProfileSocialLinkMain",
+             children: [(0, mM.jsx)(hM, {
+               platform: rM
+             }), (0, mM.jsx)("span", {
+               className: "PlayerProfileSocialLinkText",
+ ... (53 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L695-L742` → after: `L518-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L518-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L518-L537) · [Before (L695-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L695-L742)

```diff
-       return qQ ? yQ(QQ) ? function(QQ) {
-         var WQ = QQ.getBBox();
-         return DQ(0, 0, WQ.width, WQ.height)
-       }(QQ) : BQ(QQ) : rQ
-     }
- 
-     function DQ(QQ, WQ, XQ, wQ) {
-       return {
-         x: QQ,
-         y: WQ,
-         width: XQ,
-         height: wQ
-       }
-     }
-     var pQ = function() {
-         function QQ(QQ) {
- ... (32 more removed lines; see GitHub link above)
+       let {
+         socialLinks: rM,
+         editable: iM = !1,
+         userContext: OM,
+         onLinksUpdated: SM
+       } = MM;
+       if (!iM && 0 === rM.length) return null;
+       const aM = new Map(rM.map((MM => [MM.platform, MM]))),
+         PM = iM ? jM.s : rM.map((MM => MM.platform));
+       return (0, mM.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, mM.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: PM.map((MM => (0, mM.jsx)(JM, {
+             platform: MM,
+             link: aM.get(MM),
+ ... (4 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L744-L799` → after: `L539-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L539-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/112.js#L539-L543) · [Before (L744-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/112.js#L744-L799)

```diff
-       },
-       UQ = function() {
-         function QQ(QQ, WQ, XQ) {
-           if (this.activeObservations_ = [], this.observations_ = new wQ, "function" !== typeof QQ) throw new TypeError("The callback provided as parameter 1 is not a function.");
-           this.callback_ = QQ, this.controller_ = WQ, this.callbackCtx_ = XQ
-         }
-         return QQ.prototype.observe = function(QQ) {
-           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-           if ("undefined" !== typeof Element && Element instanceof Object) {
-             if (!(QQ instanceof JQ(QQ).Element)) throw new TypeError('parameter 1 is not of type "Element".');
-             var WQ = this.observations_;
-             WQ.has(QQ) || (WQ.set(QQ, new pQ(QQ)), this.controller_.addObserver(this), this.controller_.refresh())
-           }
-         }, QQ.prototype.unobserve = function(QQ) {
-           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
-           if ("undefined" !== typeof Element && Element instanceof Object) {
- ... (40 more removed lines; see GitHub link above)
+       })
+     }
+   },
+   5280: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/113.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/113.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L2)

```diff
- export const ids = [113, 406];
+ export const ids = [113];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L5` → after: `L4-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L116) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L5)

```diff
-   5320: (QQ, WQ, XQ) => {
-     var wQ = XQ(5328);
+   29407: (MM, rM, iM) => {
+     var OM = {
+       "./Player_Atlas.png": 28425,
+       "./astro_set_1_attachable.png": 28429,
+       "./astro_set_2_attachable.png": 28433,
+       "./astro_set_3_attachable.png": 28435,
+       "./astro_set_4_attachable.png": 28438,
+       "./beaver_lumberjack.png": 28447,
+       "./bee_set_1_attachable.png": 28449,
+       "./bee_set_2_attachable.png": 28457,
+       "./bee_set_3_attachable_blue.png": 28463,
+       "./bee_set_3_attachable_green.png": 28470,
+       "./bee_set_3_attachable_red.png": 28478,
+       "./bee_set_4_attachable.png": 28487,
+       "./capeTextures/cape_cow_cream.png": 28492,
+       "./capeTextures/cape_cow_normal.png": 28499,
+ ... (97 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L7-L45` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L118-L120) · [Before (L7-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L7-L45)

```diff
-     function qQ() {}
- 
-     function TQ() {}
-     TQ.resetWarningCache = qQ, QQ.exports = function() {
-       function QQ(QQ, WQ, XQ, qQ, TQ, zQ) {
-         if (zQ !== wQ) {
-           var sQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw sQ.name = "Invariant Violation", sQ
-         }
-       }
- 
-       function WQ() {
-         return QQ
-       }
-       QQ.isRequired = QQ;
-       var XQ = {
- ... (23 more removed lines; see GitHub link above)
+     function SM(MM) {
+       var rM = jM(MM);
+       return iM(rM)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L66-L91` → after: `L123-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L123-L128) · [Before (L66-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L66-L91)

```diff
-     function gQ() {
-       const {
-         t: QQ
-       } = (0, TQ.C)(), WQ = (0, wQ.useNavigatePreserveSearch)();
-       return (0, sQ.c)(), (0, PQ.jsxs)("div", {
-         className: "ShaderPackPublishPage AnimFadeIn",
-         children: [(0, PQ.jsx)("div", {
-           className: "ShaderPackPublishBack",
-           children: (0, PQ.jsx)(qQ.e, {
-             onClick: () => {
-               WQ(FQ.R)
-             },
-             children: QQ("shaderPackListing:backToPacks")
-           })
-         }), (0, PQ.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
- ... (10 more removed lines; see GitHub link above)
+     function jM(MM) {
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L94-L114` → after: `L134-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L134-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L134-L283) · [Before (L94-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L94-L114)

```diff
-   6957: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => rQ,
-       g: () => IQ,
-       j: () => JQ,
-       m: () => jQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(6952),
-       TQ = XQ(1548),
-       zQ = XQ(6946),
-       sQ = XQ(6960),
-       FQ = XQ(1162);
-     const PQ = "shaderPackListingView",
-       gQ = "shaderPackListingFilterOpen";
- 
- ... (5 more removed lines; see GitHub link above)
+   33831: (MM, rM, iM) => {
+     var OM = {
+       "./67/67_Model.glb": 33840,
+       "./67/67_Reconstructed.glb": 33842,
+       "./Armour Collector/Armour Collector_Model.glb": 33844,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33853,
+       "./Bear/Bear_Model.glb": 33860,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33865,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33871,
+       "./Camel/Camel_Model.glb": 33877,
+       "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 33885,
+       "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 33890,
+       "./Cave Golem/Cave Golem_Model.glb": 33894,
+       "./Cow/Cow_Model.glb": 33900,
+       "./Crone/Crone_Model.glb": 33903,
+       "./Deer/Deer_Model.glb": 33906,
+ ... (134 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L116-L123` → after: `L285-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L285-L287) · [Before (L116-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L116-L123)

```diff
-     function rQ() {
-       (0, wQ.useEffect)((() => () => {
-         window.location.pathname.startsWith(zQ.R) || (0, zQ.l)()
-       }), [])
-     }
- 
-     function IQ() {
-       return (0, sQ.d)(gQ, !1)
+     function SM(MM) {
+       var rM = jM(MM);
+       return iM(rM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L126-L159` → after: `L290-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L290-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L290-L293) · [Before (L126-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L126-L159)

```diff
-     function jQ() {
-       const {
-         userContext: QQ,
-         isUserContextUpdating: WQ
-       } = (0, FQ.c)(), [XQ, qQ] = (0, wQ.useState)(null), zQ = (0, wQ.useRef)(new Set);
- 
-       function sQ(QQ, WQ) {
-         qQ((XQ => {
-           const wQ = new Set(XQ);
-           return WQ ? wQ.add(QQ) : wQ.delete(QQ), wQ
-         }))
-       }
-       return (0, wQ.useEffect)((() => {
-         if (WQ) return;
-         let XQ = !1;
-         return TQ.e.getFavouriteShaderPacks(QQ).then((QQ => {
- ... (18 more removed lines; see GitHub link above)
+     function jM(MM) {
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L163-L195` → after: `L301-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L301-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L301-L620) · [Before (L163-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L163-L195)

```diff
-   6946: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       $: () => EQ,
-       A: () => jQ,
-       B: () => VQ,
-       D: () => lQ,
-       E: () => gQ,
-       H: () => iQ,
-       I: () => BQ,
-       L: () => kQ,
-       O: () => uQ,
-       R: () => zQ,
-       S: () => LQ,
-       V: () => FQ,
-       Z: () => sQ,
-       cb: () => CQ,
- ... (17 more removed lines; see GitHub link above)
+   27685: (MM, rM, iM) => {
+     var OM = {
+       "./67/67_Atlas.png": 27689,
+       "./67/variations/0_67_default.png": 27694,
+       "./Armour Collector/Armour Collector_Atlas.png": 27701,
+       "./Armour Collector/variations/0_armour collector_default.png": 27708,
+       "./Bear/BearSaddle_Atlas.png": 27710,
+       "./Bear/Bear_Atlas.png": 27712,
+       "./Bear/variations/0_bear_default.png": 27720,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27723,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 27726,
+       "./Camel/CamelSaddle_Atlas.png": 27735,
+       "./Camel/Camel_Armour.png": 27740,
+       "./Camel/Camel_Atlas.png": 27748,
+       "./Camel/variations/0_camel_default.png": 27755,
+       "./Camel/variations/1_camel_brown.png": 27760,
+ ... (304 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L198` → after: `L623-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L623-L624) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L198)

```diff
-       return `${zQ}/${encodeURIComponent(QQ)}`
+       var rM = jM(MM);
+       return iM(rM)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L203-L211` → after: `L628-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L628-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L628-L632) · [Before (L203-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L203-L211)

```diff
-       PQ = QQ
-     }
- 
-     function JQ() {
-       return PQ
-     }
- 
-     function rQ() {
-       PQ = null
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L215-L227` → after: `L1447-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L1447-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L1447-L1448) · [Before (L215-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L215-L227)

```diff
-       return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
-     }
-     const jQ = ["terrain", "water", "models", "sunShadows", "strict"],
-       BQ = {
-         terrain: "shaderPackListing:filterTerrain",
-         water: "shaderPackListing:filterWater",
-         models: "shaderPackListing:filterModels",
-         sunShadows: "shaderPackListing:filterShadows",
-         strict: "shaderPackListing:filterAllGames"
-       };
- 
-     function yQ(QQ, WQ) {
-       return QQ.withFeatures.includes(WQ) ? "with" : QQ.withoutFeatures.includes(WQ) ? "without" : null
+       var rM = jM(MM);
+       return iM(rM)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L231` → after: `L1452-L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L1452-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L1452-L1456) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L231)

```diff
-       return null === QQ ? "with" : "with" === QQ ? "without" : null
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L235-L244` → after: `L2881-L2882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2881-L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L2881-L2882) · [Before (L235-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L235-L244)

```diff
-       return "with" === QQ ? "only" : null === QQ ? "include" : void 0
-     }
- 
-     function pQ(QQ, WQ) {
-       const XQ = yQ(QQ, WQ),
-         wQ = QQ => QQ.filter((QQ => QQ !== WQ));
-       return {
-         withFeatures: null === XQ ? [...QQ.withFeatures, WQ] : wQ(QQ.withFeatures),
-         withoutFeatures: "with" === XQ ? [...QQ.withoutFeatures, WQ] : wQ(QQ.withoutFeatures)
-       }
+       var rM = jM(MM);
+       return iM(rM)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L255-L266` → after: `L2886-L2888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2886-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L2886-L2888) · [Before (L255-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L255-L266)

```diff
-       var WQ, XQ, qQ;
-       const zQ = QQ.get(GQ),
-         sQ = (null !== (WQ = QQ.get(bQ)) && void 0 !== WQ ? WQ : aQ).split(","),
-         FQ = QQ.get(dQ);
-       return {
-         section: "favourites" === zQ || "mine" === zQ ? zQ : "explore",
-         sort: null !== (XQ = wQ.u.find((WQ => WQ === QQ.get(UQ)))) && void 0 !== XQ ? XQ : HQ,
-         withFeatures: jQ.filter((QQ => sQ.includes(QQ) && !sQ.includes(`-${QQ}`))),
-         withoutFeatures: jQ.filter((QQ => sQ.includes(`-${QQ}`))),
-         searchQuery: (null === (qQ = QQ.get(vQ)) || void 0 === qQ ? void 0 : qQ.slice(0, wQ.G)) || null,
-         pageNumber: (0, TQ.f)(QQ.get(TQ.e)),
-         banned: "only" === FQ ? "with" : "include" === FQ ? null : "without"
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L269-L274` → after: `L2892-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2892-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L2892-L2994) · [Before (L269-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L269-L274)

```diff
- 
-     function hQ(QQ, WQ) {
-       var XQ;
-       const wQ = RQ(WQ);
-       (0, TQ.i)(QQ, GQ, "explore" === WQ.section ? null : WQ.section), (0, TQ.i)(QQ, UQ, WQ.sort === HQ ? null : WQ.sort), (0, TQ.i)(QQ, bQ, wQ === aQ ? null : wQ), (0, TQ.i)(QQ, vQ, WQ.searchQuery), (0, TQ.i)(QQ, dQ, null !== (XQ = DQ(WQ.banned)) && void 0 !== XQ ? XQ : null), ( … [truncated]
-     }
+     SM.keys = function() {
+       return Object.keys(OM)
+     }, SM.resolve = jM, MM.exports = SM, SM.id = 9938
+   },
+   27145: (MM, rM, iM) => {
+     var OM = {
+       "./Air Walk.png": 27147,
+       "./Antlers Bonus.png": 27155,
+       "./Arrow Damage Enchantment.png": 27157,
+       "./Arrow Speed Enchantment.png": 27160,
+       "./Attack Speed Enchantment.png": 27164,
+       "./Blindness.png": 27169,
+       "./Boating.png": 27174,
+       "./Bounciness.png": 27182,
+       "./Brain Rot.png": 27188,
+       "./Break Speed Enchantment.png": 27191,
+ ... (87 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L277-L286` → after: `L2997-L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2997-L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L2997-L2998) · [Before (L277-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L277-L286)

```diff
-       const WQ = new URLSearchParams;
-       return hQ(WQ, {
-         section: "explore",
-         sort: HQ,
-         withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${zQ}?${WQ.toString()}`
+       var rM = jM(MM);
+       return iM(rM)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L290` → after: `L3002-L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L3002-L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L3002-L3006) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L290)

```diff
-       return RQ(QQ) === aQ
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L294` → after: `L4742-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4742-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4742-L4743) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L294)

```diff
-       return null !== QQ.searchQuery || "with" === QQ.banned || RQ(QQ) !== aQ
+       var rM = jM(MM);
+       return iM(rM)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L298-L301` → after: `L4747-L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4747-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4747-L4751) · [Before (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L298-L301)

```diff
-       return jQ.flatMap((WQ => {
-         const XQ = yQ(QQ, WQ);
-         return "with" === XQ ? [WQ] : "without" === XQ ? [`-${WQ}`] : []
-       })).join(",")
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
+       }
+       return OM[MM]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L304-L318` → after: `L4771-L4773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4771-L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4771-L4773) · [Before (L304-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L304-L318)

```diff
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       CQ = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
-       };
- 
-     function uQ(QQ) {
-       return Math.round(100 * Math.max(0, 1 - 1 / QQ))
-     }
+       block: MM => iM(9938)(`./${MM}.png`),
+       item: MM => iM(17605)(`./${MM}.png`)
+     };
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L320-L348` → after: `L4775-L4802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4775-L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4775-L4802) · [Before (L320-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L320-L348)

```diff
-     function LQ(QQ, WQ, XQ, qQ) {
-       const TQ = [];
-       QQ.isBanned && TQ.push({
-         tone: "warning",
-         text: qQ("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: zQ
-       } = QQ;
-       if (null === QQ.brokenError || zQ && !zQ.error || TQ.push({
-           tone: "warning",
-           text: qQ("shaderPackListing:ownerBroken"),
-           detail: QQ.brokenError
-         }), null !== zQ && void 0 !== zQ && zQ.error) TQ.push({
-         tone: "warning",
- ... (13 more removed lines; see GitHub link above)
+     function QM(MM, rM) {
+       let SM;
+       try {
+         if (rM === OM.f.BLOCK) SM = {
+           type: OM.i.BASE64,
+           url: nM.block(MM)
+         };
+         else if (rM === OM.f.ITEM) SM = {
+           type: OM.i.BASE64,
+           url: nM.item(MM)
+         };
+         else if (rM === OM.f.ICON) SM = {
+           type: OM.i.BASE64,
+           url: iM(27145)(`./${MM}.png`)
+         };
+         else if (rM === OM.f.LIFEFORM_ATLAS) {
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L351-L363` → after: `L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4807) · [Before (L351-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L351-L363)

```diff
-       return QQ.listed || TQ.push({
-         tone: "info",
-         text: qQ("shaderPackListing:ownerUnlisted"),
-         detail: null
-       }), TQ
-     }
- 
-     function kQ(QQ) {
-       return Math.max(1, Math.round(QQ / 1024))
-     }
- 
-     function fQ(QQ, WQ, XQ) {
-       return QQ instanceof qQ.b && QQ.errorMessageForUser ? QQ.errorMessageForUser : WQ(XQ)
+       return SM
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L374-L378` → after: `L4811-L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4811-L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4811-L4833) · [Before (L374-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L374-L378)

```diff
-       var XQ;
-       const [TQ, zQ] = (0, wQ.useState)(null !== (XQ = qQ.i.getItem(QQ)) && void 0 !== XQ ? XQ : WQ);
-       return [TQ, WQ => {
-         qQ.i.setItem(QQ, WQ), zQ(WQ)
-       }]
+       let SM;
+       try {
+         if (rM === OM.c.BLOCK) {
+           const rM = iM(29414)(`./${MM}.glb`);
+           SM = {
+             type: OM.i.BASE64,
+             url: rM
+           }
+         } else if (rM === OM.c.ITEM) SM = {
+           type: OM.i.HTTP,
+           url: `${jM.clientSideServerUrls.staticUrl}/models/${MM}.glb`
+         };
+         else if (rM === OM.c.LIFEFORM) {
+           const rM = iM(33831)(`./${MM}.glb`);
+           SM = {
+             type: OM.i.BASE64,
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L380-L391` → after: `L4835-L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4835-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4835-L4837) · [Before (L380-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L380-L391)

```diff
-   },
-   7026: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => qQ,
-       f: () => TQ
-     });
-     var wQ = XQ(43);
-     const qQ = "shaderPack";
-     async function TQ() {
-       var QQ;
-       let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
+ 
+     function LM(MM) {
+       return SM.j[MM]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L394` → after: `L4840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4840) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L394)

```diff
-   6952: (QQ, WQ, XQ) => {
+   34611: (MM, rM, iM) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L403-L413` → after: `L4843-L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4843-L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4843-L4846) · [Before (L403-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L403-L413)

```diff
-       f: () => yQ,
-       i: () => BQ,
-       j: () => IQ,
-       l: () => pQ,
-       m: () => bQ,
-       o: () => FQ,
-       p: () => qQ,
-       r: () => UQ,
-       u: () => TQ,
-       w: () => sQ,
-       z: () => zQ
+       d: () => PM,
+       g: () => aM,
+       h: () => SM,
+       j: () => OM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L417-L419` → after: `L4849-L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4849-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4849-L4887) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L417-L419)

```diff
-         full: {
-           width: 3840,
-           height: 2160
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
+         },
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
+           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
+           px: "/textures/skyBoxes/gloomy/_px.jpg",
+           py: "/textures/skyBoxes/gloomy/_py.jpg",
+           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
+         },
+         interstellar: {
+           type: "custom",
+           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
+ ... (23 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L421-L423` → after: `L4889-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4889-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4889-L4896) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L421-L423)

```diff
-         large: {
-           width: 1920,
-           height: 1080
+         space_red: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red/_nz.jpg",
+           px: "/textures/skyBoxes/space_red/_px.jpg",
+           py: "/textures/skyBoxes/space_red/_py.jpg",
+           pz: "/textures/skyBoxes/space_red/_pz.jpg"
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L425-L427` → after: `L4898-L4932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4898-L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4898-L4932) · [Before (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L425-L427)

```diff
-         thumb: {
-           width: 640,
-           height: 360
+         underwater: {
+           type: "custom",
+           nx: "/textures/skyBoxes/underwater/water.jpg",
+           ny: "/textures/skyBoxes/underwater/water.jpg",
+           nz: "/textures/skyBoxes/underwater/water.jpg",
+           px: "/textures/skyBoxes/underwater/water.jpg",
+           py: "/textures/skyBoxes/underwater/water.jpg",
+           pz: "/textures/skyBoxes/underwater/water.jpg"
+         },
+         starry: {
+           type: "custom",
+           nx: "/textures/skyBoxes/starry/_nx.jpg",
+           ny: "/textures/skyBoxes/starry/_ny.jpg",
+           nz: "/textures/skyBoxes/starry/_nz.jpg",
+           px: "/textures/skyBoxes/starry/_px.jpg",
+           py: "/textures/skyBoxes/starry/_py.jpg",
+ ... (19 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L430-L471` → after: `L4935-L17043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4935-L17043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/113.js#L4935-L17043) · [Before (L430-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/113.js#L430-L471)

```diff
-       TQ = ["popular", "updated", "newest"],
-       zQ = 3,
-       sQ = 32,
-       FQ = 300;
- 
-     function PQ(QQ, WQ) {
-       return QQ.slice(0, WQ).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const gQ = 64,
-       JQ = 512,
-       rQ = 18e5;
- 
-     function IQ(QQ) {
-       const WQ = QQ,
-         XQ = null === WQ || void 0 === WQ ? void 0 : WQ.files;
-       return "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.apiVersion) && "string" === typeof WQ.name && (null === WQ.author || "string" === typeof WQ.author) && (void 0 === WQ.keepCircleShadows || "boolean" === typeof WQ.keepCircleShadows) && "object" === typeof … [truncated]
- ... (26 more removed lines; see GitHub link above)
+       SM = "/textures/dayNight/sun.png",
+       jM = "/textures/dayNight/moon.png",
+       aM = "/textures/dayNight/stars",
+       PM = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
+   },
+   29422: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29425: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29432: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29435: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAABsBwAA8AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+ ... (12093 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/114.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/114.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/114.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/114.js#L4)

```diff
-   9276: (QQ, WQ, XQ) => {
+   5286: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L8-L334` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/114.js#L8-L40) · [Before (L8-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/114.js#L8-L334)

```diff
-     var wQ = XQ(1581),
-       qQ = XQ(26),
-       TQ = XQ(4973),
-       zQ = XQ(61),
-       sQ = XQ(1498);
-     var FQ = XQ(2003),
-       PQ = XQ(1567),
-       gQ = XQ(1404),
-       JQ = XQ(1226),
-       rQ = XQ(193),
-       IQ = XQ(231),
-       jQ = XQ(1049),
-       BQ = XQ(1057),
-       yQ = XQ(1257),
-       VQ = XQ(2447),
-       DQ = XQ(1548),
- ... (311 more removed lines; see GitHub link above)
+     var OM = iM(1608),
+       SM = iM(44),
+       jM = iM(1188),
+       aM = iM(1142),
+       PM = iM(1130),
+       nM = iM(2201),
+       QM = iM(1591),
+       zM = iM(1396),
+       LM = iM(1123),
+       mM = iM(19),
+       HM = iM(1520),
+       hM = iM(1398),
+       JM = iM(2805),
+       dM = iM(1627),
+       yM = iM(1303);
+     const lM = [{
+ ... (17 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L339-L352` → after: `L45-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L45-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/114.js#L45-L47) · [Before (L339-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/114.js#L339-L352)

```diff
-       } = (0, JQ.C)(), WQ = (0, PQ.useNavigatePreserveSearch)(), XQ = (0, wQ.w)(), IQ = (0, wQ.E)(), BQ = (0, zQ.useRef)({
-         t: QQ,
-         navigate: WQ
-       });
-       BQ.current = {
-         t: QQ,
-         navigate: WQ
-       };
-       const GQ = (0, zQ.useRef)("");
-       GQ.current = XQ.pathname + XQ.search;
-       const {
-         gameState: UQ,
-         clientEscMenuOptions: vQ
-       } = (0, qQ.n)(["gameState", "clientEscMenuOptions"]), HQ = (0, zQ.useRef)(null), kQ = (0, zQ.useRef)(!1);
+       } = (0, jM.A)(), rM = (0, QM.useNavigatePreserveSearch)(), iM = (0, OM.u)(), {
+         isUserContextUpdating: UM
+       } = (0, aM.b)(), GM = (0, nM.e)(), CM = (0, PM.i)(), eM = (bM = iM.pathname).startsWith(dM.q) ? null : bM.startsWith(EM.docs) ? "docs" : bM.startsWith(EM.leaderboard) ? "leaderboard" : "myGames";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L354-L361` → after: `L49-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L49-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/114.js#L49-L59) · [Before (L354-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/114.js#L354-L361)

```diff
-       (0, zW.l)(), (0, zW.m)(), fQ = JW.x, (0, zQ.useEffect)((() => {
-         if (!fQ) return;
-         let QQ = !0;
-         return (0, nQ.g)().then((WQ => {
-           QQ && mQ(WQ)
-         })).catch((() => {})), () => {
-           var WQ;
-           QQ = !1, OQ.wanted = !1, null === (WQ = KQ) || void 0 === WQ || WQ.setGamePackConfirm(null), KQ = null
+       const wM = function(MM) {
+         if (!MM.startsWith(dM.q)) return {
+           title: "studio:leaveStudio",
+           icon: "left-from-bracket",
+           to: "/"
+         };
+         const rM = (0, QM.getPreviousLocation)();
+         return {
+           title: "general:back",
+           icon: "arrow-left",
+           to: null !== rM && rM.startsWith(EM.myGames) ? -1 : EM.myGames
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L363-L560` → after: `L61-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L61-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/114.js#L61-L93) · [Before (L363-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/114.js#L363-L560)

```diff
-       }), [fQ]), (0, zQ.useEffect)((() => {
-         var QQ, WQ, wQ;
-         (0, TQ.needGameClientNow)();
-         const {
-           t: zQ,
-           navigate: sQ
-         } = BQ.current, JQ = (0, WW.e)(IQ, XQ.search);
-         if (IQ.lobbyName && !new URLSearchParams(XQ.search).has("lobby")) return void sQ((0, uQ.c)(JQ.gameNameWithVariation, JQ.lobbyName), {
-           replace: !0
-         });
-         let UQ = Promise.resolve({
-           shouldMatchmake: !0
-         });
-         if ("/play/discord-custom-lobby" === XQ.pathname) {
-           const QQ = qQ.b.get("discordContext");
-           if (!QQ) return void sQ("/");
- ... (182 more removed lines; see GitHub link above)
+       }(iM.pathname);
+       return (0, SM.useEffect)((() => {
+         mM.d.set({
+           gameState: "studio",
+           openEverythingMenuName: null
+         })
+       }), []), (0, yM.jsxs)("div", {
+         className: "StudioLayout AnimFadeIn",
+         children: [GM && (0, yM.jsx)("aside", {
+           className: "StudioLayoutLeft",
+           children: (0, yM.jsx)(JM.e, {})
+         }), (0, yM.jsxs)("div", {
+           className: "StudioLayoutRight",
+           children: [(0, yM.jsxs)("div", {
+             className: "StudioTop",
+             children: [(0, yM.jsx)(LM.c, {
+ ... (17 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L562-L606` → after: `L95-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L95-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/114.js#L95-L111) · [Before (L562-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/114.js#L562-L606)

```diff
-                   children: (0, YQ.jsx)(AQ.d, {
-                     errorString: QQ.stack
-                   })
-                 })]
-               }),
-               confirmText: zQ("general:tryAgain"),
-               cancelText: zQ("general:cancel")
-             }).getResult().then((QQ => {
-               !0 === QQ && (0, lQ.reloadBloxd)((0, uQ.c)(JQ.gameNameWithVariation, JQ.lobbyName))
-             })), ZQ()
-           })) : sQ(-1))
-         }), wW), () => {
-           KQ = !0
-         }
-       }), [IQ, XQ.search, XQ.pathname]), (0, zQ.useEffect)((() => {
-         vQ.disableFullscreen && (0, cQ.g)() ? (0, cQ.o)() : !vQ.disableFullscreen && (0, cQ.k)() && (0, cQ.v)({
- ... (29 more removed lines; see GitHub link above)
+                   children: [(0, yM.jsx)(hM.b, {
+                     name: iM.icon
+                   }), !CM && MM(iM.title)]
+                 }, iM.id)))
+               })]
+             })]
+           }), (0, yM.jsxs)("main", {
+             className: "StudioBottom",
+             children: [UM && (0, yM.jsx)("div", {
+               className: "StudioCentredMessage",
+               children: (0, yM.jsx)(zM.d, {})
+             }), !UM && (0, yM.jsx)("div", {
+               className: "StudioContent",
+               children: (0, yM.jsx)(OM.h, {})
+             })]
+           })]
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/115.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/115.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L4)

```diff
-   5349: (QQ, WQ, XQ) => {
+   5306: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L6-L9)

```diff
-       e: () => jQ,
-       g: () => pQ,
-       h: () => BQ,
-       i: () => DQ
+       b: () => mM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L11-L16` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L8) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L11-L16)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(5351),
-       TQ = XQ(4677),
-       zQ = XQ(1416),
-       sQ = XQ(5376),
-       FQ = XQ(1081),
+     var OM = iM(1116),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L18-L21` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L10-L16) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L18-L21)

```diff
-       gQ = XQ(1404),
-       JQ = XQ(1802),
-       rQ = XQ(5378),
-       IQ = XQ(1145);
+       jM = iM(1398),
+       aM = iM(1396),
+       PM = iM(3902),
+       nM = iM(119),
+       QM = iM(3945),
+       zM = iM(3934),
+       LM = iM(1303);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L25-L31` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L20) · [Before (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L25-L31)

```diff
-         label: WQ,
-         onClick: XQ,
-         checked: wQ,
-         circleInfoText: qQ,
-         className: sQ,
-         disabled: FQ,
-         note: gQ
+         game: rM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L34-L65` → after: `L27-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L27-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L27-L42) · [Before (L34-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L34-L65)

```diff
-         "aria-disabled": FQ || void 0,
-         "data-pad-focusable": !0,
-         className: PQ()("SettingBox CheckboxContainer", {
-           [sQ]: sQ,
-           SettingBoxDisabled: FQ
-         }),
-         onClick: () => {
-           FQ || XQ(!wQ)
-         },
-         children: [(0, IQ.jsxs)("div", {
-           className: "CheckboxInputAndText",
-           children: [(0, IQ.jsx)("label", {
-             className: "CheckboxClickableLabel",
-             children: (0, IQ.jsx)(TQ.b, {
-               className: "SettingsCheckbox",
-               checked: wQ,
- ... (16 more removed lines; see GitHub link above)
+         className: "SchematicImageContainer",
+         children: [mM.isLoading && !HM && (0, LM.jsx)(aM.d, {
+           loaderType: "Secondary"
+         }), !mM.failed && (null !== mM.src || HM) && (0, LM.jsx)("div", {
+           className: SM()("SchematicImage", zM.k, {
+             SchematicImageFadeIn: mM.fadeIn && !HM
+           }),
+           style: (0, zM.h)(mM),
+           children: (0, LM.jsx)(zM.e, {
+             image: mM
+           })
+         }), mM.failed && (0, LM.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, LM.jsx)(jM.b, {
+             name: "face-dizzy"
+           })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L261` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L47) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L261)

```diff
-   7028: (QQ, WQ, XQ) => {
+   5295: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L265-L284` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L51-L53) · [Before (L265-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L265-L284)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(1581),
-       TQ = XQ(6952),
-       zQ = XQ(1257),
-       sQ = XQ(402),
-       FQ = XQ(1607),
-       PQ = XQ(1391),
-       gQ = XQ(1567),
-       JQ = XQ(1507),
-       rQ = XQ(1416),
-       IQ = XQ(1676),
-       jQ = XQ(2756),
-       BQ = XQ(2898),
-       yQ = XQ(4875),
-       VQ = XQ(1162),
-       DQ = XQ(1548),
- ... (4 more removed lines; see GitHub link above)
+     iM(5299);
+     var OM = iM(44),
+       SM = iM(1116),
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L286-L292` → after: `L55-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L55-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L55-L235) · [Before (L286-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L286-L292)

```diff
-       dQ = XQ(1094),
-       HQ = XQ(1404),
-       aQ = XQ(6946),
-       lQ = XQ(1145);
-     const hQ = (0, wQ.lazy)((() => Promise.all([XQ.e(111), XQ.e(80), XQ.e(138), XQ.e(137), XQ.e(116), XQ.e(406)]).then((() => XQ(6970))).then((QQ => ({
-       default: QQ.ShaderPackPublishForm
-     })))));
+       aM = iM(313),
+       PM = iM(1088),
+       nM = iM(1229),
+       QM = iM(1188),
+       zM = iM(1142),
+       LM = iM(1573),
+       mM = iM(5306),
+       HM = iM(1520),
+       hM = iM(5309),
+       JM = iM(1396),
+       dM = iM(1591),
+       yM = iM(5007),
+       lM = iM(1398),
+       EM = iM(1067),
+       UM = iM(2721),
+       GM = iM(5318),
+ ... (165 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L296-L298` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L239-L240) · [Before (L296-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L296-L298)

```diff
-         details: WQ,
-         owner: XQ,
-         onChanged: qQ
+         thumbnail: rM,
+         name: iM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L300-L347` → after: `L242-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L242-L245) · [Before (L300-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L300-L347)

```diff
-       const {
-         t: zQ
-       } = (0, GQ.C)(), sQ = (0, gQ.useNavigatePreserveSearch)(), {
-         userContext: FQ
-       } = (0, VQ.c)(), [rQ, IQ] = (0, wQ.useState)(!1), [jQ, BQ] = (0, wQ.useState)(null), [yQ, pQ] = (0, wQ.useState)(!1), {
-         packId: UQ,
-         name: bQ,
-         description: iQ,
-         live: cQ
-       } = WQ;
-       async function AQ(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
-         IQ(!0), BQ(null);
-         try {
-           await QQ(), WQ()
-         } catch (XQ) {
- ... (32 more removed lines; see GitHub link above)
+       return (0, SM.jsxs)("div", {
+         className: "StudioTableGameCell",
+         children: [(0, SM.jsx)("div", {
+           className: "StudioTableThumbnail",
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L349-L453` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L247-L249) · [Before (L349-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L349-L453)

```diff
-         }), (0, lQ.jsxs)("div", {
-           className: "ShaderPackOwnerActions",
-           children: [(0, lQ.jsxs)(JQ.T, {
-             disabled: rQ,
-             onClick: () => {
-               !async function() {
-                 const QQ = await HQ.NotificationProvider.showInputPopup({
-                   title: "shaderPackListing:renameTitle",
-                   initialValue: bQ,
-                   maxLength: TQ.w,
-                   submitText: "general:save",
-                   validate: QQ => QQ.trim().length < TQ.z ? zQ("shaderPackListing:nameTooShort", {
-                     min: String(TQ.z)
-                   }) : null
-                 }).getResult();
-                 "notificationTornDown" !== QQ && "submit" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && QQ.value.trim() !== bQ && await AQ((() => DQ.e.updateShaderPack(FQ, {
- ... (89 more removed lines; see GitHub link above)
+         }), (0, SM.jsx)("span", {
+           className: "StudioTableGameName",
+           children: iM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L468` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L256) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L468)

```diff
-         item: WQ
+         game: rM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L470-L541` → after: `L258-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L258-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L258-L272) · [Before (L470-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L470-L541)

```diff
-       const {
-         t: XQ
-       } = (0, GQ.C)(), [qQ] = (0, uQ.j)(), [zQ, sQ] = (0, wQ.useState)(qQ), [FQ, PQ] = (0, wQ.useState)(!1), [gQ, JQ] = (0, wQ.useState)(!1), {
-         s3Url: rQ
-       } = CQ.clientSideServerUrls, {
-         width: IQ,
-         height: jQ
-       } = TQ.p.large, BQ = (0, TQ.r)(rQ, WQ, zQ, "large"), {
-         renderVersion: yQ
-       } = WQ;
-       return (0, lQ.jsxs)("div", {
-         className: "ShaderPackPreviews",
-         children: [(0, lQ.jsx)(kQ.e, {
-           selected: zQ,
-           onSelect: QQ => {
-             sQ(QQ), PQ(!1)
- ... (56 more removed lines; see GitHub link above)
+       return (0, SM.jsx)("img", {
+         className: "StudioTableThumbnailImage",
+         src: (0, OM.j)(rM),
+         alt: ""
+       })
+     }
+   },
+   5309: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM
+     });
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1303);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L545-L548` → after: `L276-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L276-L280) · [Before (L545-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L545-L548)

```diff
-         fullUrl: WQ,
-         largeUrl: XQ,
-         alt: qQ,
-         onClose: TQ
+         columns: rM,
+         rows: iM,
+         getRowKey: SM,
+         renderRow: PM,
+         className: nM
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L550-L572` → after: `L282-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L282-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L282-L293) · [Before (L550-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L550-L572)

```diff
-       const zQ = (0, wQ.useRef)(null);
-       return (0, RQ.k)("popup", zQ, TQ), (0, wQ.useEffect)((() => {
-         function QQ(QQ) {
-           "Escape" === QQ.key && (QQ.stopPropagation(), TQ())
-         }
-         return window.addEventListener("keydown", QQ, !0), () => {
-           window.removeEventListener("keydown", QQ, !0)
-         }
-       }), [TQ]), (0, cQ.createPortal)((0, lQ.jsxs)("div", {
-         ref: zQ,
-         className: "ShaderPackFullSize",
-         onClick: TQ,
-         children: [(0, lQ.jsx)("img", {
-           className: "ShaderPackFullSizeImage",
-           src: WQ,
-           alt: qQ,
- ... (7 more removed lines; see GitHub link above)
+       return (0, aM.jsxs)("table", {
+         className: jM()("Table", nM),
+         children: [(0, aM.jsx)("thead", {
+           children: (0, aM.jsx)("tr", {
+             children: rM.map((MM => (0, aM.jsx)("th", {
+               children: MM.header
+             }, MM.key)))
+           })
+         }), (0, aM.jsx)("tbody", {
+           children: iM.map((MM => (0, aM.jsx)(OM.Fragment, {
+             children: PM(MM)
+           }, SM(MM))))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L990-L1083` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/115.js#L298) · [Before (L990-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/115.js#L990-L1083)

```diff
-   5376: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => zQ
-     });
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(1145);
- 
-     function zQ(QQ) {
-       let {
-         options: WQ,
-         value: XQ,
-         onChange: wQ,
-         ariaLabel: zQ,
-         className: sQ,
-         reselectable: FQ = !1,
- ... (78 more removed lines; see GitHub link above)
+   5299: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/116.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/116.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L4-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/116.js#L4-L398) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/116.js#L4)

```diff
-   5398: (QQ, WQ, XQ) => {
+   5306: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => mM
+     });
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1398),
+       aM = iM(1396),
+       PM = iM(3902),
+       nM = iM(119),
+       QM = iM(3945),
+       zM = iM(3934),
+       LM = iM(1303);
+ 
+     function mM(MM) {
+       let {
+ ... (379 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L9-L50` → after: `L438-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L438-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/116.js#L438-L472) · [Before (L9-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/116.js#L9-L50)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(1507),
-       TQ = XQ(1226),
-       zQ = XQ(105),
-       sQ = XQ(3408),
-       FQ = XQ(1145);
- 
-     function PQ() {
-       return !(0, zQ.isMobile)()
-     }
- 
-     function gQ(QQ) {
-       let {
-         disabled: WQ,
-         openFolderPicker: XQ,
-         onFiles: zQ
- ... (26 more removed lines; see GitHub link above)
+     const OM = {
+       1: iM(6874),
+       2: iM(6877),
+       3: iM(6883)
+     }
+   },
+   5309: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM
+     });
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1303);
+ 
+     function PM(MM) {
+ ... (19 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L55-L526` → after: `L477-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L477-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/116.js#L477-L485) · [Before (L55-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/116.js#L55-L526)

```diff
-   5386: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => sQ,
-       i: () => zQ,
-       l: () => TQ
-     });
-     var wQ = XQ(5394);
-     const qQ = [QQ => QQ.strict ? "strict" : "nonStrict", QQ => QQ.program];
- 
-     function TQ(QQ, WQ) {
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const wQ = {};
-       for (const qQ in XQ) wQ[qQ] = `\0${qQ}\0`;
-       return QQ(WQ, wQ).replace(/\0(\w+)\0/g, ((QQ, WQ) => XQ[WQ]))
-     }
- 
- ... (456 more removed lines; see GitHub link above)
+   5299: () => {},
+   6874: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
+   },
+   6877: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
+   },
+   6883: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L2)

```diff
- export const ids = [117, 120, 140, 141];
+ export const ids = [117];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L4)

```diff
-   5394: (QQ, WQ, XQ) => {
+   5306: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L6-L8)

```diff
-       b: () => wQ.i,
-       c: () => qQ,
-       g: () => wQ.n
+       b: () => mM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L10-L14` → after: `L8-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L8-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L8-L45) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L10-L14)

```diff
-     var wQ = XQ(5396);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
-       strict: QQ,
-       program: WQ
-     })))))
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1398),
+       aM = iM(1396),
+       PM = iM(3902),
+       nM = iM(119),
+       QM = iM(3945),
+       zM = iM(3934),
+       LM = iM(1303);
+ 
+     function mM(MM) {
+       let {
+         game: rM
+       } = MM;
+       const iM = (0, nM.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         OM = (0, QM.g)(rM, iM),
+ ... (22 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L16` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L47) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L16)

```diff
-   40743: (QQ, WQ, XQ) => {
+   5424: (MM, rM, iM) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L18-L19` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L49) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L18-L19)

```diff
-       b: () => JQ,
-       installListedShaderPack: () => gQ
+       e: () => dM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L21-L45` → after: `L51-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L51-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L51-L77) · [Before (L21-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L21-L45)

```diff
-     var wQ = XQ(6952),
-       qQ = XQ(5396),
-       TQ = XQ(1238),
-       zQ = XQ(6984),
-       sQ = XQ(5394),
-       FQ = XQ(7024),
-       PQ = XQ(7018);
-     async function gQ(QQ) {
-       const WQ = await (0, zQ.loadPageShaderPackCompiler)();
-       if (null === WQ) return {
-         kind: "failed",
-         reason: "compiler"
-       };
-       const XQ = await JQ(QQ, WQ);
-       return "failed" === XQ.kind ? XQ : await (0, FQ.saveShaderPack)(XQ.stored, WQ) ? ((0, FQ.markShaderPackChangePending)(), XQ) : {
-         kind: "failed",
- ... (9 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(5364),
+       PM = iM(1396),
+       nM = iM(1188),
+       QM = iM(3571),
+       zM = iM(3706),
+       LM = iM(1398),
+       mM = iM(3573),
+       HM = iM(5430),
+       hM = iM(5451),
+       JM = iM(1303);
+ 
+     function dM(MM) {
+       let {
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L47-L54` → after: `L79-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L79-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L79-L104) · [Before (L47-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L47-L54)

```diff
-           const QQ = await fetch(`${TQ.clientSideServerUrls.s3Url}/${(0,wQ.J)(WQ,XQ)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!QQ.ok) return console.error(`Failed to download shader pack ${WQ} (${QQ.status})`), null;
-           const qQ = await QQ.json();
-           return "object" !== typeof qQ || null === qQ ? (console.error(`Shader pack ${WQ}'s source isn't an object`), null) : qQ
+           const rM = await (0, QM.m)(MM);
+           if ("customGame" === lM && (0, zM.h)(rM)) return void eM(EM(zM.d));
+           if (void 0 !== yM) {
+             const MM = JSON.stringify(rM).length / 1048576;
+             if (MM > yM) return void eM(EM("customTexturePack:packTooBig", {
+               size: MM.toFixed(1),
+               max: yM
+             }))
+           }
+           eM(null), wM(null), SM(rM), tM.current = rM,
+             function(MM, rM) {
+               const OM = MM.modelOverrides;
+               OM && Promise.all([iM.e(230), iM.e(229)]).then((() => iM(35106))).then((iM => {
+                 let {
+                   packDisplayName: SM,
+                   refusedPackModels: jM,
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L56` → after: `L106-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L106-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L106-L111) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L56)

```diff
-           return console.error(`Failed to download shader pack ${WQ}`, qQ), null
+           if (rM instanceof mM.e) {
+             const MM = "customTexturePack:invalidPack" !== rM.translationKey || (0, hM.g)() ? rM.translationKey : "customTexturePack:invalidPackZip";
+             eM((0, HM.i)(EM, MM, rM.params))
+           } else console.error("Couldn't read the texture pack", rM), eM(EM("customTexturePack:errorTitle"))
+         } finally {
+           GM(!1)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L96-L111` → after: `L187-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L187-L190) · [Before (L96-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L96-L111)

```diff
-   7024: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       forgetShaderPackActiveHint: () => hQ,
-       isOtherApiVersion: () => dQ,
-       isShaderPackActive: () => GQ,
-       isShaderPackChangePending: () => vQ,
-       markShaderPackChangePending: () => bQ,
-       pageShaderPackValidationVersion: () => HQ,
-       reconcileStoredShaderPackHint: () => lQ,
-       removeShaderPack: () => pQ,
-       replaceShaderPack: () => yQ,
-       saveShaderPack: () => BQ,
-       shaderPackNeedsCheck: () => aQ,
-       storedPackOutcome: () => UQ,
-       storedShaderPackFiles: () => rQ,
-       toStoredShaderPack: () => JQ
+   5451: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => zM,
+       g: () => QM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L113-L120` → after: `L192-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L192-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L192-L197) · [Before (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L113-L120)

```diff
-     var wQ = XQ(5396),
-       qQ = XQ(5394),
-       TQ = XQ(43),
-       zQ = XQ(3716),
-       sQ = XQ(7026),
-       FQ = XQ(7002);
-     const PQ = "shaderPackChangePending";
-     let gQ = null;
+     var OM = iM(44),
+       SM = iM(1520),
+       jM = iM(1188),
+       aM = iM(83),
+       PM = iM(3540),
+       nM = iM(1303);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L122-L130` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L199-L200) · [Before (L122-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L122-L130)

```diff
-     function JQ(QQ, WQ, XQ) {
-       return {
-         manifest: QQ.manifest,
-         files: (0, wQ.w)(QQ.files),
-         validation: WQ,
-         ...XQ && {
-           listing: XQ
-         }
-       }
+     function QM() {
+       return !(0, aM.isMobile)()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L134-L137` → after: `L204-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L204-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L204-L235) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L134-L137)

```diff
-       return Object.keys(QQ.files).map((WQ => ({
-         path: WQ,
-         source: QQ.files[WQ]
-       })))
+       let {
+         disabled: rM,
+         openFolderPicker: iM,
+         onFiles: aM
+       } = MM;
+       const {
+         t: zM
+       } = (0, jM.A)(), LM = (0, OM.useRef)(null);
+       return (0, nM.jsxs)("div", {
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, nM.jsx)("input", {
+           ref: LM,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+ ... (16 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L139` → after: `L237-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L237-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L237-L255) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L139)

```diff
-     let IQ = Promise.resolve();
+   },
+   5401: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => hM,
+       f: () => UM,
+       h: () => JM,
+       j: () => EM
+     });
+     var OM = iM(44),
+       SM = iM(5403),
+       jM = iM(4720),
+       aM = iM(1440),
+       PM = iM(5417),
+       nM = iM(1116),
+       QM = iM.n(nM),
+       zM = iM(1429),
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L142-L143` → after: `L258-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L258-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L258-L301) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L142-L143)

```diff
-       const WQ = IQ.then(QQ);
-       return IQ = WQ.catch((() => {})), WQ
+       let {
+         label: rM,
+         onClick: iM,
+         checked: OM,
+         circleInfoText: SM,
+         className: PM,
+         disabled: nM,
+         note: zM
+       } = MM;
+       return (0, HM.jsxs)("div", {
+         "aria-disabled": nM || void 0,
+         "data-pad-focusable": !0,
+         className: QM()("SettingBox CheckboxContainer", {
+           [PM]: PM,
+           SettingBoxDisabled: nM
+         }),
+ ... (28 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L146-L148` → after: `L304-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L304-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L304-L367) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L146-L148)

```diff
-     function BQ(QQ, WQ) {
-       return jQ((() => VQ(QQ, WQ)))
-     }
+     function JM(MM) {
+       let {
+         name: rM,
+         onChange: iM,
+         min: SM,
+         max: jM,
+         step: PM,
+         initValue: nM,
+         circleInfoText: zM,
+         format: LM,
+         className: mM,
+         padStep: hM,
+         disabled: JM = !1,
+         selectableMax: dM,
+         cappedNote: yM,
+         onChangeComplete: EM
+ ... (48 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L150-L151` → after: `L369-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L369-L371) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L150-L151)

```diff
-     function yQ(QQ, WQ, XQ) {
-       return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
+     function yM(MM) {
+       var rM;
+       return (null !== (rM = String(MM).split(".")[1]) && void 0 !== rM ? rM : "").length
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L153-L155` → after: `L373-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L373-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L373-L464) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L153-L155)

```diff
-     async function VQ(QQ, WQ) {
-       const XQ = await TQ.f.setItem(sQ.b, QQ);
-       return XQ && iQ(QQ, WQ), XQ
+ 
+     function lM(MM) {
+       let {
+         value: rM,
+         min: iM,
+         max: jM,
+         step: aM,
+         onChange: PM,
+         orientation: nM,
+         reverse: QM,
+         setIsChanging: zM,
+         tooltip: LM,
+         labels: hM,
+         handleLabel: JM,
+         format: lM,
+         onChangeStart: EM,
+ ... (76 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L158-L162` → after: `L467-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L467-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L467-L475) · [Before (L158-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L158-L162)

```diff
-       await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
-     }
- 
-     function pQ() {
-       return jQ(DQ)
+       const MM = zM.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
+       });
+       !0 === await MM.getResult() && (0, LM.reloadBloxd)()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L165-L166` → after: `L478-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L478-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L478-L500) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L165-L166)

```diff
-     function GQ(QQ, WQ) {
-       return "active" === UQ(QQ, WQ).kind
+     function UM(MM) {
+       let {
+         label: rM,
+         options: iM,
+         value: OM,
+         onChange: SM,
+         circleInfoText: jM
+       } = MM;
+       return (0, HM.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, HM.jsxs)("div", {
+           className: "SliderText",
+           children: [rM, jM && (0, HM.jsx)(aM.e, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: jM
+           })]
+ ... (7 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L169` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L522) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L169)

```diff
-     function UQ(QQ, WQ) {
+     function dM(MM) {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L171-L190` → after: `L524-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L524-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L524-L538) · [Before (L171-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L171-L190)

```diff
-       return null === QQ ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : dQ(QQ) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : aQ(QQ, WQ) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : QQ.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (4 more removed lines; see GitHub link above)
+       let {
+         setApplySettingsCallback: iM
+       } = MM;
+       const [, aM] = (0, jM.useReducer)((MM => MM + 1), 0), PM = (0, jM.useRef)(!1), nM = (0, jM.useRef)(null);
+ 
+       function dM(MM, rM) {
+         QM.e.setFromJson(MM, "player");
+         const OM = QM.e.saveTexturePack();
+         if (HM.H) {
+           const MM = QM.e.toJson();
+           OM.then((rM => {
+             rM && (0, hM.e)(MM)
+           }))
+         } else PM.current ||= rM, nM.current !== QM.e.getId() || QM.e.getId() === SM.o.CUSTOM && PM.current ? iM((() => LM.j)) : iM(null);
+         aM()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L194-L195` → after: `L582-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L582-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L582-L623) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L194-L195)

```diff
-     function bQ() {
-       TQ.m.setItem(PQ, performance.timeOrigin)
+     function yM(MM) {
+       let {
+         id: rM,
+         isSelected: iM,
+         setSelected: aM,
+         disabled: QM = !1
+       } = MM;
+       const [zM, LM] = (0, jM.useState)(!0), [mM, HM] = (0, jM.useState)(""), [hM, dM] = (0, jM.useState)(""), [yM, lM] = (0, jM.useState)(""), EM = (0, jM.useRef)({});
+       return (0, jM.useEffect)((() => {
+         (0, OM.k)(rM).then((MM => {
+           var rM;
+           MM && (EM.current = MM, LM(!1), HM(EM.current.metaData.name), dM(EM.current.metaData.author), lM(null !== (rM = EM.current.metaData.previewImage) && void 0 !== rM ? rM : ""))
+         })).catch((MM => {
+           console.warn(`Failed to fetch texture pack ${rM}`, MM)
+         }))
+       }), [rM]), (0, JM.jsxs)("div", {
+ ... (26 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L198-L199` → after: `L635-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L635-L639) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L198-L199)

```diff
-     function vQ() {
-       return TQ.m.getItem(PQ) === performance.timeOrigin
+     function jM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const OM = {};
+       for (const SM in iM) OM[SM] = `\0${SM}\0`;
+       return MM(rM, OM).replace(/\0(\w+)\0/g, ((MM, rM) => iM[rM]))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L203` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L643) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L203)

```diff
-       return !(0, qQ.g)(QQ.manifest.apiVersion)
+       return null === MM.file ? null : MM.line > 0 ? `${MM.file}:${MM.line}` : MM.file
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L207-L212` → after: `L647-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L647-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L647-L650) · [Before (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L207-L212)

```diff
-       return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
-     }
- 
-     function aQ(QQ, WQ) {
-       var XQ;
-       return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
+       const rM = new Map(MM.map((MM => [nM(MM).join("."), MM])));
+       if (0 === rM.size) return [];
+       const iM = zM([...rM.values()]);
+       return 0 === iM[0].length ? [] : iM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L216-L218` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L654) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L216-L218)

```diff
-       return jQ((async () => {
-         iQ(await (0, sQ.f)(!0), QQ)
-       }))
+       return SM.map((rM => rM(MM)))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L221-L224` → after: `L658-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L658-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L658-L669) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L221-L224)

```diff
-     function hQ() {
-       return jQ((async () => {
-         TQ.i.removeItem(zQ.c)
-       }))
+     function zM(MM) {
+       const rM = SM.map((rM => new Set(MM.map(rM)))),
+         iM = rM.reduce(((MM, rM) => MM * rM.size), 1),
+         OM = rM.every(((MM, rM) => 1 === MM.size || MM.size === QM[rM]));
+       if (iM === MM.length && OM) return [SM.filter(((MM, iM) => 1 === rM[iM].size)).map((rM => rM(MM[0])))];
+       let jM = null;
+       for (let aM = 0; aM < SM.length; aM++) {
+         if (1 === rM[aM].size) continue;
+         const iM = LM(MM, SM[aM]).flatMap(zM);
+         (null === jM || iM.length < jM.length) && (jM = iM)
+       }
+       return jM
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L228` → after: `L673-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L673-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L673-L679) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L228)

```diff
-       GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
+       const iM = new Map;
+       for (const SM of MM) {
+         var OM;
+         const MM = rM(SM);
+         iM.set(MM, [...null !== (OM = iM.get(MM)) && void 0 !== OM ? OM : [], SM])
+       }
+       return [...iM.values()]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L231-L234` → after: `L682-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L682-L684) · [Before (L231-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L231-L234)

```diff
-   7002: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       loadShaderPackTextures: () => zQ,
-       shaderPackTextures: () => sQ
+   5417: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L236-L238` → after: `L686-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L686-L688) · [Before (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L236-L238)

```diff
-     var wQ = XQ(5396);
-     let qQ = null,
-       TQ = null;
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1303);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L240-L248` → after: `L690-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L690-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L690-L777) · [Before (L240-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L240-L248)

```diff
-     function zQ() {
-       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: WQ,
-           textureNameToIndex: XQ,
-           textureAnimationData: TQ
-         } = QQ;
-         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
-       })), TQ
+     function aM(MM) {
+       let {
+         options: rM,
+         value: iM,
+         onChange: OM,
+         ariaLabel: aM,
+         className: PM,
+         reselectable: nM = !1,
+         keepsFocus: QM = !1,
+         padTabs: zM
+       } = MM;
+       const LM = void 0 !== zM;
+       return (0, jM.jsx)("div", {
+         className: SM()("SegmentedToggle", PM),
+         role: "group",
+         "aria-label": aM,
+ ... (72 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L251-L253` → after: `L780-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L780-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L780-L786) · [Before (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L251-L253)

```diff
-     function sQ() {
-       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return qQ
+     function SM(MM, rM) {
+       if (MM === rM) return !0;
+       if ("object" !== typeof MM || "object" !== typeof rM || null === MM || null === rM || Array.isArray(MM) !== Array.isArray(rM)) return !1;
+       const iM = MM,
+         OM = rM,
+         jM = Object.keys(iM);
+       return jM.length === Object.keys(OM).length && jM.every((MM => Object.prototype.hasOwnProperty.call(OM, MM) && SM(iM[MM], OM[MM])))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L256` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L792) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L256)

```diff
-   7018: (QQ, WQ, XQ) => {
+   5456: (MM, rM, iM) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L261-L308` → after: `L797-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L797-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L797-L803) · [Before (L261-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L261-L308)

```diff
-     var wQ = XQ(7024),
-       qQ = XQ(7002),
-       TQ = XQ(134);
-     const zQ = 100;
-     async function sQ(QQ, WQ) {
-       var XQ;
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (XQ = navigator.gpu) && void 0 !== XQ ? XQ : null;
-       const zQ = QQ.JQQ(WQ, (0, qQ.shaderPackTextures)());
-       if (zQ.errors.length > 0) return PQ(QQ, zQ.errors, zQ.offInStrict);
-       const sQ = await async function(QQ) {
-         if (!QQ) return null;
-         try {
-           const WQ = await (0, TQ.q)(QQ);
-           return WQ ? await WQ.requestDevice() : null
-         } catch (WQ) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", WQ), null
- ... (32 more removed lines; see GitHub link above)
+     var OM = iM(2263),
+       SM = iM(5463);
+     let jM = null;
+ 
+     function aM(MM) {
+       jM = {
+         pack: MM.metaData.id === OM.b ? null : MM
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L327-L334` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L807-L808) · [Before (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L327-L334)

```diff
-     function PQ(QQ, WQ, XQ) {
-       return {
-         headerVersion: (0, wQ.pageShaderPackValidationVersion)(QQ),
-         ok: 0 === WQ.length,
-         errors: WQ.slice(0, zQ),
-         moreErrors: Math.max(0, WQ.length - zQ),
-         offInStrict: XQ
-       }
+     function PM(MM) {
+       return !(null === jM || !(0, SM.d)(jM.pack, MM)) && (jM = null, !0)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L337` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L811) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L337)

```diff
-   5396: (QQ, WQ, XQ) => {
+   5442: (MM, rM, iM) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L341-L345` → after: `L815-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L815-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L815-L819) · [Before (L341-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L341-L345)

```diff
-       i: () => wQ,
-       l: () => BQ,
-       m: () => JQ,
-       n: () => qQ,
-       r: () => TQ,
+       g: () => OM,
+       j: () => JM,
+       k: () => LM,
+       o: () => SM,
+       q: () => jM,
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L367` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L841) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L367)

```diff
-         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
+         if ("string" !== typeof OM) return `${iM} isn't text.`;
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L376` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L850) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L376)

```diff
-           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
+           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L384` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L858) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L384)

```diff
-             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
+             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L387` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L861) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L387)

```diff
-           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
+           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L412-L415` → after: `L886-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L886-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L886-L889) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L412-L415)

```diff
-       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
-       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
-       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
-       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
+       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
+       if (MM.length > nM) return `A file path is over ${nM} characters.`;
+       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
+       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L448` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/117.js#L922) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/117.js#L448)

```diff
-           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
+           return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L2)

```diff
- export const ids = [118, 120, 140, 141];
+ export const ids = [118];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L4)

```diff
-   5394: (QQ, WQ, XQ) => {
+   6982: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L6-L8)

```diff
-       b: () => wQ.i,
-       c: () => qQ,
-       g: () => wQ.n
+       b: () => lM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L10-L14` → after: `L8-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L8-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L8-L170) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L10-L14)

```diff
-     var wQ = XQ(5396);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
-       strict: QQ,
-       program: WQ
-     })))))
+     var OM = iM(44),
+       SM = iM(1520),
+       jM = iM(1573),
+       aM = iM(3881),
+       PM = iM(1142),
+       nM = iM(1396),
+       QM = iM(1440),
+       zM = iM(1398),
+       LM = iM(1116),
+       mM = iM.n(LM),
+       HM = iM(6975),
+       hM = iM(1303);
+ 
+     function JM(MM) {
+       let {
+         info: rM,
+ ... (147 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L16-L31` → after: `L172-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L172-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L172-L175) · [Before (L16-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L16-L31)

```diff
-   7024: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       forgetShaderPackActiveHint: () => hQ,
-       isOtherApiVersion: () => dQ,
-       isShaderPackActive: () => GQ,
-       isShaderPackChangePending: () => vQ,
-       markShaderPackChangePending: () => bQ,
-       pageShaderPackValidationVersion: () => HQ,
-       reconcileStoredShaderPackHint: () => lQ,
-       removeShaderPack: () => pQ,
-       replaceShaderPack: () => yQ,
-       saveShaderPack: () => BQ,
-       shaderPackNeedsCheck: () => aQ,
-       storedPackOutcome: () => UQ,
-       storedShaderPackFiles: () => rQ,
-       toStoredShaderPack: () => JQ
+   6975: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => PM,
+       f: () => aM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L33-L40` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L177-L186) · [Before (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L33-L40)

```diff
-     var wQ = XQ(5396),
-       qQ = XQ(5394),
-       TQ = XQ(43),
-       zQ = XQ(3716),
-       sQ = XQ(7026),
-       FQ = XQ(7002);
-     const PQ = "shaderPackChangePending";
-     let gQ = null;
+     var OM = iM(332),
+       SM = iM(1188);
+     const jM = {
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L42` → after: `L188-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L188-L192) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L42)

```diff
-     function JQ(QQ, WQ, XQ) {
+     function aM() {
+       const {
+         t: MM,
+         selectedLanguage: rM
+       } = (0, SM.A)();
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L44-L48` → after: `L194-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L194-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L194-L245) · [Before (L44-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L44-L48)

```diff
-         manifest: QQ.manifest,
-         files: (0, wQ.w)(QQ.files),
-         validation: WQ,
-         ...XQ && {
-           listing: XQ
+         statusText: rM => MM(jM[rM]),
+         rowText: iM => {
+           const jM = (MM, iM) => (0, OM.db)((0, SM.n)(rM.code, MM), 0, iM);
+           switch (iM.kind) {
+             case "ownerAccountAge": {
+               const rM = iM.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: MM("studio:approvalAccountAgeLabel"),
+                 value: MM(rM, {
+                   age: jM(rM, iM.accountAgeMs),
+                   days: iM.minAccountAgeDays
+                 })
+               }
+             }
+             case "sinceUnbannedOrUnmuted":
+               return {
+ ... (36 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L54-L57` → after: `L251-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L251-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L251-L314) · [Before (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L54-L57)

```diff
-       return Object.keys(QQ.files).map((WQ => ({
-         path: WQ,
-         source: QQ.files[WQ]
-       })))
+       return null === MM.manualOverride && MM.rows.some((MM => "reportHold" === MM.kind && !MM.passed))
+     }
+   },
+   5326: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => CX
+     });
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(1116),
+       aM = iM.n(jM),
+       PM = iM(1088),
+       nM = iM(1229),
+       QM = iM(1073),
+       zM = iM(332),
+       LM = iM(1630),
+ ... (48 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L59` → after: `L316-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L316-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L316-L346) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L59)

```diff
-     let IQ = Promise.resolve();
+     var DM = iM(3955),
+       kM = iM(5476),
+       ZM = iM(1440),
+       oM = iM(5485),
+       fM = iM(5901),
+       YM = iM(6857),
+       NM = iM(6835),
+       AM = iM(6852),
+       xM = iM(6431),
+       vM = iM(6825),
+       FM = iM(6833),
+       BM = iM(6790),
+       XM = iM(3530),
+       IM = iM(6860),
+       KM = iM(6733),
+       qM = iM(6739),
+ ... (15 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L62-L63` → after: `L349-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L349-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L349-L352) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L62-L63)

```diff
-       const WQ = IQ.then(QQ);
-       return IQ = WQ.catch((() => {})), WQ
+       if (null === MM) return "";
+       if ("number" === typeof MM) return Number.isFinite(MM) ? String(MM) : "";
+       const rM = Mr.test(MM) ? `'${MM}` : MM;
+       return /[",\r\n]/.test(rM) ? `"${rM.replace(/"/g,'""')}"` : rM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L67` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L356-L357) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L67)

```diff
-       return jQ((() => VQ(QQ, WQ)))
+       const iM = new Date(MM).toISOString();
+       return "1d" === rM ? iM.slice(0, 10) : iM.replace(/\.\d{3}Z$/, "Z")
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L70-L71` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L361-L362) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L70-L71)

```diff
-     function yQ(QQ, WQ, XQ) {
-       return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
+     function Sr(MM) {
+       return MM.replace(Or, "").replace(/ {2,}/g, " ").trim()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L73-L75` → after: `L364-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L364-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L364-L392) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L73-L75)

```diff
-     async function VQ(QQ, WQ) {
-       const XQ = await TQ.f.setItem(sQ.b, QQ);
-       return XQ && iQ(QQ, WQ), XQ
+     var jr = iM(1830),
+       ar = iM(1303);
+ 
+     function Pr(MM) {
+       let {
+         icon: rM,
+         label: iM,
+         onClick: OM,
+         disabled: SM = !1,
+         active: jM = !1,
+         small: aM = !1
+       } = MM;
+       return (0, ar.jsx)(ZM.i, {
+         tooltipInner: iM,
+         placement: "top",
+         delayShow: 0,
+ ... (13 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L77-L78` → after: `L394-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L394-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L394-L419) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L77-L78)

```diff
-     async function DQ() {
-       await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
+     const nr = String.fromCharCode(65279);
+ 
+     function Qr(MM) {
+       let {
+         fileNameParts: rM,
+         getTable: iM,
+         disabled: OM = !1
+       } = MM;
+       const {
+         t: SM
+       } = (0, HM.A)();
+       return (0, ar.jsx)(Pr, {
+         small: !0,
+         icon: "download",
+         label: SM("Export Data"),
+         disabled: OM,
+ ... (10 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L81-L82` → after: `L427-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L427-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L427-L437) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L81-L82)

```diff
-     function pQ() {
-       return jQ(DQ)
+     function Lr(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       return new Date(MM).toLocaleDateString(void 0, {
+         day: "numeric",
+         month: "short",
+         timeZone: rM ? "UTC" : void 0
+       })
+     }
+ 
+     function mr(MM) {
+       return new Date(MM).toLocaleTimeString(void 0, zr)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L86` → after: `L443-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L443-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L443-L477) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L86)

```diff
-       return "active" === UQ(QQ, WQ).kind
+       return "1d" === rM ? Lr(MM, !0) : `${Lr(MM)}, ${mr(MM)}`
+     }
+ 
+     function dr(MM) {
+       let {
+         point: rM,
+         label: iM,
+         formatValue: OM,
+         noDataLabel: SM
+       } = MM;
+       const {
+         t: jM
+       } = (0, HM.A)(), aM = MM => null === MM || void 0 === MM ? SM : OM(MM), PM = rM.comparisonBand;
+       return PM ? (0, ar.jsxs)(ar.Fragment, {
+         children: [(0, ar.jsx)("div", {
+           className: "StudioStatsChartTooltipSub SmallTextLight",
+ ... (19 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L90-L110` → after: `L481-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L481-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L481-L539) · [Before (L90-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L90-L110)

```diff
-       var XQ;
-       return null === QQ ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : dQ(QQ) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : aQ(QQ, WQ) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : QQ.validation.ok ? {
-         kind: "active"
-       } : {
- ... (5 more removed lines; see GitHub link above)
+       var iM, OM, SM, jM, aM, PM;
+       return rM ? [null !== (iM = null === (OM = MM.comparisonBand) || void 0 === OM ? void 0 : OM[0]) && void 0 !== iM ? iM : null, null !== (SM = MM.comparisonValue) && void 0 !== SM ? SM : null, null !== (jM = null === (aM = MM.comparisonBand) || void 0 === aM ? void 0 : aM[1] … [truncated]
+     }
+ 
+     function Er(MM) {
+       let {
+         active: rM,
+         payload: iM,
+         label: OM,
+         interval: SM,
+         formatValue: jM,
+         noDataLabel: aM,
+         comparisonLabel: PM,
+         showValue: nM = !0,
+         lines: QM
+       } = MM;
+ ... (43 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L114-L115` → after: `L543-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L543-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L543-L555) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L114-L115)

```diff
-     function bQ() {
-       TQ.m.setItem(PQ, performance.timeOrigin)
+     function Cr(MM) {
+       let {
+         viewBox: rM,
+         text: iM,
+         alignLeft: OM
+       } = MM;
+       return void 0 === (null === rM || void 0 === rM ? void 0 : rM.x) || void 0 === rM.y ? null : (0, ar.jsx)("text", {
+         className: "StudioStatsChartMarkerLabel",
+         x: rM.x + (OM ? -5 : 5),
+         y: rM.y + 10,
+         textAnchor: OM ? "end" : "start",
+         children: iM
+       })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L118-L119` → after: `L558-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L558-L563) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L118-L119)

```diff
-     function vQ() {
-       return TQ.m.getItem(PQ) === performance.timeOrigin
+     function er(MM) {
+       const rM = new Set;
+       return MM.forEach(((iM, OM) => {
+         if (null === iM) return;
+         [MM[OM - 1], MM[OM + 1]].some((MM => void 0 !== MM && null !== MM)) || rM.add(OM)
+       })), rM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L123` → after: `L567-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L567-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L567-L596) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L123)

```diff
-       return !(0, qQ.g)(QQ.manifest.apiVersion)
+       let {
+         swatchClassName: rM,
+         colour: iM,
+         isFill: OM,
+         label: SM,
+         vW: jM
+       } = MM;
+       const {
+         t: PM
+       } = (0, HM.A)();
+       return (0, ar.jsxs)("span", {
+         className: "StudioStatsChartLegendEntry",
+         children: [(0, ar.jsx)("span", {
+           className: aM()("StudioStatsChartLegendSwatch", rM),
+           style: OM ? {
+             backgroundColor: iM
+ ... (14 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L127` → after: `L600-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L600-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L600-L641) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L127)

```diff
-       return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
+       let {
+         seriesLabel: rM,
+         seriesColour: iM,
+         comparisonLabel: OM,
+         comparisonIsBand: SM,
+         lines: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, HM.A)();
+       return (0, ar.jsxs)("div", {
+         className: "StudioStatsChartLegend SmallTextLight",
+         children: [void 0 !== rM && void 0 !== iM && (0, ar.jsx)(br, {
+           colour: iM,
+           isFill: !0,
+           label: rM
+ ... (26 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L130-L132` → after: `L644-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L644-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L644-L703) · [Before (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L130-L132)

```diff
-     function aQ(QQ, WQ) {
-       var XQ;
-       return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
+     function tr(MM) {
+       let {
+         title: rM,
+         hoverInfo: iM,
+         anchorId: OM,
+         status: SM,
+         hasData: jM,
+         headerActions: PM,
+         filters: nM,
+         legend: QM,
+         csvExport: zM,
+         footerActions: LM,
+         className: mM,
+         cardRef: hM,
+         children: JM
+       } = MM;
+ ... (44 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L136-L138` → after: `L707-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L707-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L707-L926) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L136-L138)

```diff
-       return jQ((async () => {
-         iQ(await (0, sQ.f)(!0), QQ)
-       }))
+       let {
+         title: rM,
+         hoverInfo: iM,
+         anchorId: OM,
+         status: SM,
+         points: jM,
+         interval: aM,
+         colour: PM,
+         formatValue: nM,
+         headerActions: QM,
+         markers: zM,
+         comparisonLabel: LM,
+         seriesLabel: mM,
+         allowDecimals: hM = !1,
+         lines: JM,
+         filters: dM
+ ... (204 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L141-L144` → after: `L929-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L929-L930) · [Before (L141-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L141-L144)

```diff
-     function hQ() {
-       return jQ((async () => {
-         TQ.i.removeItem(zQ.c)
-       }))
+     function ur(MM) {
+       return Array.isArray(MM.labels) && Array.isArray(MM.values)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L148` → after: `L949-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L949-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L949-L953) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L148)

```diff
-       GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
+       void 0 === Yr && (Yr = document.createElement("canvas").getContext("2d"));
+       const iM = getComputedStyle(rM),
+         OM = parseFloat(iM.letterSpacing) || 0,
+         SM = Yr;
+       return MM.map((MM => null === SM ? MM.length * Rr * .65 : (SM.font = `${iM.fontStyle} ${iM.fontWeight} ${Rr}px ${iM.fontFamily}`, SM.measureText(MM).width + OM * MM.length)))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L150-L161` → after: `L955-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L955-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L955-L978) · [Before (L150-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L150-L161)

```diff
-   },
-   7026: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => qQ,
-       f: () => TQ
-     });
-     var wQ = XQ(43);
-     const qQ = "shaderPack";
-     async function TQ() {
-       var QQ;
-       let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
+ 
+     function Ar(MM, rM, iM) {
+       const OM = rM / MM.length;
+       if (Math.max(0, ...Nr(MM, iM)) + Dr <= OM) return {
+         rotated: !1,
+         texts: MM,
+         xAxisHeight: sr
+       };
+       const SM = MM.map((MM => function(MM, rM, iM) {
+           if (Nr([MM], iM)[0] <= rM) return MM;
+           let OM = 0,
+             SM = MM.length;
+           for (; SM - OM > 1;) {
+             const jM = Math.floor((OM + SM) / 2);
+             Nr([`${MM.slice(0,jM)}\u2026`], iM)[0] <= rM ? OM = jM : SM = jM
+           }
+ ... (8 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L173-L181` → after: `L981-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L981-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L981-L1018) · [Before (L173-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L173-L181)

```diff
-     function zQ() {
-       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: WQ,
-           textureNameToIndex: XQ,
-           textureAnimationData: TQ
-         } = QQ;
-         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
-       })), TQ
+     function xr(MM) {
+       var rM, iM;
+       let {
+         x: OM = 0,
+         y: SM = 0,
+         index: jM = 0,
+         fill: aM,
+         layout: PM,
+         labels: nM,
+         openedIndex: QM
+       } = MM;
+       const zM = null !== (rM = PM.texts[jM]) && void 0 !== rM ? rM : "",
+         LM = null !== (iM = nM[jM]) && void 0 !== iM ? iM : "",
+         mM = jM === QM ? "bold" : void 0,
+         HM = zM !== LM ? (0, ar.jsx)("title", {
+           children: LM
+ ... (22 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L184-L186` → after: `L1021-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1021-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1021-L1121) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L184-L186)

```diff
-     function sQ() {
-       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return qQ
+     function vr(MM) {
+       var rM, iM;
+       let {
+         points: SM,
+         colour: jM,
+         formatValue: aM,
+         allowDecimals: PM,
+         yAxisWidth: nM,
+         yAxisTicks: QM,
+         openedLabel: zM,
+         openedId: LM
+       } = MM;
+       const mM = (0, OM.useRef)(null),
+         [HM, hM] = (0, OM.useState)(null),
+         JM = (0, OM.useCallback)((() => {
+           const MM = mM.current;
+ ... (85 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L205` → after: `L1125-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1125-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1125-L1141) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L205)

```diff
-       return QQ === wQ
+       let {
+         active: rM,
+         payload: iM,
+         formatValue: OM
+       } = MM;
+       if (!rM || !iM || 0 === iM.length) return null;
+       const SM = iM[0].payload;
+       return (0, ar.jsxs)("div", {
+         className: "StudioStatsChartTooltip",
+         children: [(0, ar.jsx)("div", {
+           className: "StudioStatsChartTooltipTitle SmallTextLight",
+           children: SM.label
+         }), (0, ar.jsx)("div", {
+           className: "StudioStatsChartTooltipValue",
+           children: OM(SM.value)
+         })]
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L209` → after: `L1145-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1145-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1145-L1150) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L209)

```diff
-       return [...QQ.features]
+       if (!(MM.target instanceof Element)) return;
+       const rM = MM.target.closest(".Dropdown-root");
+       if (!(rM instanceof HTMLElement)) return;
+       let iM = 0;
+       const OM = rM.closest(".StudioStatsChart");
+       null !== OM && (iM = OM.getBoundingClientRect().left + parseFloat(getComputedStyle(OM).paddingLeft)), rM.style.setProperty("--studio-filter-menu-max-width", rM.getBoundingClientRect().right - iM + "px")
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L216-L240` → after: `L1154-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1154-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1154-L1162) · [Before (L216-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L216-L240)

```diff
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
-       const WQ = [];
-       for (const [XQ, wQ] of Object.entries(QQ)) {
-         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
-         WQ.push({
-           path: XQ,
-           source: wQ
-         })
-       }
-       return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
-         function(QQ) {
-           if (0 === QQ.length) return "The pack has no .wgsl files.";
-           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
-           const WQ = new Set;
-           for (const {
-               path: XQ
- ... (9 more removed lines; see GitHub link above)
+       let {
+         children: rM
+       } = MM;
+       return (0, ar.jsx)("div", {
+         className: "StudioStatsBarChartFilters",
+         onMouseDownCapture: Br,
+         onTouchEndCapture: Br,
+         children: rM
+       })
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L244-L246` → after: `L1166-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1166-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1166-L1335) · [Before (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L244-L246)

```diff
-       const WQ = {};
-       for (const XQ of QQ) WQ[XQ.path] = XQ.source;
-       return WQ
+       let {
+         title: rM,
+         hoverInfo: iM,
+         anchorId: SM,
+         status: jM,
+         filters: aM,
+         data: PM,
+         colour: nM,
+         formatValue: QM,
+         allowDecimals: zM = !1,
+         pickedValues: LM,
+         onPickedValuesChange: mM,
+         openedLabel: hM = null,
+         openedId: JM = 0
+       } = MM;
+       const {
+ ... (154 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L250` → after: `L1342-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1342-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1342-L1343) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L250)

```diff
-       return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
+       const iM = MM.filter((MM => Math.round(MM.position) === rM)).map((MM => Number.isInteger(MM.position) ? MM.key : `${MM.key} (${MM.position})`));
+       return iM.length > 0 ? iM.join("; ") : null
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L254-L260` → after: `L1347-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1347-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1347-L1350) · [Before (L254-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L254-L260)

```diff
-       const WQ = new TextEncoder;
-       let XQ = 0;
-       for (const {
-           source: wQ
-         }
-         of QQ) XQ += WQ.encode(wQ).byteLength;
-       return XQ
+       const rM = new Map;
+       return null === MM || void 0 === MM || MM.points.forEach((MM => {
+         rM.set(MM.minute, MM)
+       })), rM
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L264-L267` → after: `L1354-L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1354-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1354-L1404) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L264-L267)

```diff
-       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
-       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
-       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
-       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
+       let {
+         active: rM,
+         payload: iM,
+         maxBucketMinute: OM,
+         totalSessions: SM,
+         comparisonLabel: jM,
+         clickable: aM,
+         lines: PM
+       } = MM;
+       const {
+         t: QM
+       } = (0, HM.A)();
+       if (!rM || !iM || 0 === iM.length) return null;
+       const zM = iM[0].payload;
+       return (0, ar.jsxs)("div", {
+         className: "StudioStatsChartTooltip",
+ ... (35 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L271-L279` → after: `L1407-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1407-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1407-L1461) · [Before (L271-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L271-L279)

```diff
-     function BQ(QQ, WQ) {
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const wQ = new Map;
-       WQ.forEach(((QQ, WQ) => {
-         let {
-           numAnimStates: XQ,
-           animStartIdx: qQ
-         } = QQ;
-         for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
+     function ri(MM) {
+       var rM, iM;
+       let {
+         title: SM,
+         hoverInfo: jM,
+         anchorId: aM,
+         status: PM,
+         curve: nM,
+         headerActions: QM,
+         comparisonCurve: zM,
+         comparisonLabel: LM,
+         seriesLabel: mM,
+         onMinuteClick: hM,
+         verticalLabelFilters: JM = [],
+         verticalLabels: dM = [],
+         lines: yM = [],
+ ... (39 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L281-L285` → after: `L1463-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1463-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1463-L1673) · [Before (L281-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L281-L285)

```diff
-       const qQ = Object.entries(QQ),
-         TQ = new Map;
-       for (const [BQ, yQ] of qQ) {
-         const QQ = jQ.exec(BQ);
-         "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
+       let uM = null !== QM && void 0 !== QM ? QM : gM;
+       void 0 !== QM && void 0 !== gM && (uM = (0, ar.jsxs)(ar.Fragment, {
+         children: [QM, gM]
+       }));
+       const RM = VM.dropoff,
+         pM = yM.reduce(((MM, rM) => {
+           var iM, OM;
+           return Math.max(MM, null !== (iM = null === (OM = rM.curve) || void 0 === OM ? void 0 : OM.maxBucketMinute) && void 0 !== iM ? iM : 0)
+         }), null !== (rM = null === nM || void 0 === nM ? void 0 : nM.maxBucketMinute) && void 0 !== rM ? rM : 0),
+         WM = function(MM, rM, iM, OM) {
+           if ([MM, ...iM.map((MM => MM.curve))].every((MM => null === MM))) return [];
+           const SM = new Map;
+           null === rM || void 0 === rM || rM.survivalPercents.forEach(((MM, rM) => {
+             SM.set(rM, MM)
+           }));
+           const jM = cr(MM),
+ ... (195 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L287-L292` → after: `L1675-L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1675-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1675-L1693) · [Before (L287-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L287-L292)

```diff
-       const zQ = QQ => {
-           const WQ = jQ.exec(QQ);
-           return WQ && TQ.has(WQ[1]) ? {
-             root: WQ[1],
-             rotation: Number(WQ[2]) - 1
-           } : null
+     }
+     const Si = {
+         p20: null,
+         p50: null,
+         p80: null
+       },
+       ji = 864e5;
+ 
+     function ai(MM) {
+       const rM = (0, Hr.G)(MM.rankingWindow),
+         iM = MM.sessionDurationHistogram ? (0, Hr.O)(MM.sessionDurationHistogram.sessionCounts, MM.sessionDurationHistogram.maxBucketMinute) : null;
+       return {
+         endDay: MM.endDay,
+         kind: "game",
+         points: (0, Hr.P)(MM).map(Pi),
+         ranking: {
+ ... (3 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L294-L300` → after: `L1695-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1695-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1695-L1697) · [Before (L294-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L294-L300)

```diff
-         sQ = new Set(qQ.map((QQ => {
-           let [WQ] = QQ;
-           return zQ(WQ)?.root ?? WQ
-         }))),
-         FQ = (QQ, XQ) => {
-           const wQ = QQ.replace(/_?0$/, "");
-           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
+         dropoffCurve: null === iM ? null : {
+           maxBucketMinute: iM.maxBucketMinute,
+           survivalPercents: iM.points.map((MM => Oi(MM.percent)))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L302-L348` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1699) · [Before (L302-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L302-L348)

```diff
-         PQ = new Map;
-       for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
-       const gQ = qQ.reduce(((QQ, WQ) => {
-           let [, XQ] = WQ;
-           return Math.max(QQ, XQ + 1)
-         }), 0),
-         JQ = Array.from({
-           length: gQ
-         }, ((QQ, WQ) => ({
-           id: WQ + 1,
-           rotation: 0
-         }))),
-         rQ = new Map,
-         IQ = new Map;
-       for (const [jQ, BQ] of qQ) {
-         const QQ = zQ(jQ),
- ... (31 more removed lines; see GitHub link above)
+         scope: null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L350-L353` → after: `L1701-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1701-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1701-L1709) · [Before (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L350-L353)

```diff
-       for (const jQ of rQ.keys()) IQ.delete(jQ);
-       for (const [jQ, BQ] of XQ) {
-         const QQ = rQ.get(BQ);
-         void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
+     }
+ 
+     function Pi(MM) {
+       return {
+         dateMs: MM.dateMs,
+         plays: Oi(MM.plays),
+         uniquePlayers: Oi(MM.uniquePlayers),
+         avgSessionMs: Oi(MM.avgSessionMs),
+         sessionsPerPlayer: Oi(MM.sessionsPerPlayer)
```
