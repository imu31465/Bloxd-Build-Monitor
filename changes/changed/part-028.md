# Changed — Bundle Modifications Report (Part 028 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `28 / 58` (**284** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 027](part-027.md) · [Part 029 →](part-029.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/87.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/87.js` (140 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3)

#### 97. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1066` → after: `L1369-L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1369-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1369-L1381) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1066)

```diff
-       return !!(0, Ez.d)(uz) && (Mz(zz, uz), !0)
+       const gq = {
+         wasmBuild: Eq.wasm,
+         clientVersion: Eq.client
+       };
+       return HE({
+         kind: "model",
+         code: "CORE-modelWorkerPool",
+         site: Lq,
+         fatal: !1,
+         message: "the model workers could not start: no model can build",
+         details: gq,
+         error: qq
+       })
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1074-L1102` → after: `L1385-L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1385-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1385-L1399) · [Before (L1074-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1074-L1102)

```diff
-       let lz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
-       return iz.has(zz) ? Promise.reject(new nz(uz, iz.get(zz), !0)) : new Promise(((iz, tz) => {
-         const Oz = bz => {
-             Mz(zz, bz), Fz(), tz(new nz(uz, bz))
-           },
-           pz = zz => {
-             zz instanceof WebAssembly.RuntimeError ? Oz(zz) : (Fz(), tz(zz))
-           },
-           dz = Hz.map((zz => {
-             let [uz, bz] = zz;
-             return [uz, zz => {
-               const uz = bz(zz);
-               (0, Ez.d)(uz) && Oz(uz)
-             }]
-           })),
-           Fz = () => {
- ... (13 more removed lines; see GitHub link above)
+       const Yq = {
+         delayMs: String(Eq),
+         wasmBuild: gq.wasm,
+         clientVersion: gq.client
+       };
+       qq instanceof tq.g && (Yq.status = String(qq.status));
+       return HE({
+         kind: "recovered",
+         code: "CORE-modelsModuleRetry",
+         site: Lq,
+         fatal: !1,
+         message: "the models module didn't download: fetching it again",
+         details: Yq,
+         error: qq
+       })
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1140-L1141` → after: `L1402-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1402-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1402-L1415) · [Before (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1140-L1141)

```diff
-     function wz(zz) {
-       Kz = zz
+     function Eg(qq, Eq) {
+       const gq = {
+         wasmBuild: Eq.wasm,
+         clientVersion: Eq.client
+       };
+       return HE({
+         kind: "recovered",
+         code: "CORE-dracoDecoder",
+         site: Lq,
+         fatal: !1,
+         message: "the Draco decoder did not load: the Draco files waiting on it failed",
+         details: gq,
+         error: qq
+       })
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1145-L1146` → after: `L1418-L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1418-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1418-L1431) · [Before (L1145-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1145-L1146)

```diff
-     function fz() {
-       Xz = !0
+     function gg(qq, Eq) {
+       const gq = {
+         wasmBuild: Eq.wasm,
+         clientVersion: Eq.client
+       };
+       return HE({
+         kind: "worldgenLoad",
+         code: "CORE-worldgenLoad",
+         site: jq.G,
+         fatal: !1,
+         message: "world-gen worker code could not load",
+         details: gq,
+         error: qq
+       })
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1149-L1150` → after: `L1434-L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1434-L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1434-L1447) · [Before (L1149-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1149-L1150)

```diff
-     function sz() {
-       return Xz
+     function Yg(qq, Eq) {
+       const gq = {
+         wasmBuild: Eq.wasm,
+         clientVersion: Eq.client
+       };
+       return HE({
+         kind: "texturePackLoad",
+         code: "CORE-texturePackLoad",
+         site: sq,
+         fatal: !1,
+         message: "texture pack feed code could not load",
+         details: gq,
+         error: qq
+       })
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1154-L1155` → after: `L1450-L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1450-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1450-L1471) · [Before (L1154-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1154-L1155)

```diff
-     function oz() {
-       rz = !0
+     function lg(qq, Eq) {
+       const {
+         frames: gq,
+         acks: Yq,
+         mask: lq,
+         outcome: Oq
+       } = qq, mq = {
+         frames: String(gq),
+         acks: String(Yq),
+         mask: String(lq),
+         outcome: null !== Oq && void 0 !== Oq ? Oq : "resynced",
+         wasmBuild: Eq.wasm,
+         clientVersion: Eq.client
+       };
+       return HE({
+         kind: "recovered",
+ ... (6 more added lines; see GitHub link above)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1158-L1159` → after: `L1474-L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1474-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1474-L1486) · [Before (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1158-L1159)

```diff
-     function Nz() {
-       return rz
+     function Og(qq, Eq, gq) {
+       return HE({
+         kind: "recovered",
+         code: "CORE-workerLost",
+         site: qq,
+         fatal: !1,
+         message: `a ${qq} worker was lost`,
+         details: {
+           reason: Eq,
+           wasmBuild: gq.wasm,
+           clientVersion: gq.client
+         }
+       })
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1162-L1163` → after: `L1489-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1489-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1489-L1501) · [Before (L1162-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1162-L1163)

```diff
-     function vz() {
-       return Kz
+     function mg(qq, Eq, gq) {
+       const Yq = {
+         wasmBuild: gq.wasm,
+         clientVersion: gq.client
+       };
+       return HE({
+         kind: "recovered",
+         code: qq,
+         site: jq.s,
+         fatal: !1,
+         message: Eq,
+         details: Yq
+       })
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1167-L1168` → after: `L1504-L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1504-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1504-L1517) · [Before (L1167-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1167-L1168)

```diff
-     function Jz(zz) {
-       xz = zz, (0, lz.d)(zz)
+     function xg(qq, Eq) {
+       const gq = {
+         lastReason: qq,
+         wasmBuild: Eq.wasm,
+         clientVersion: Eq.client
+       };
+       return HE({
+         kind: "recovered",
+         code: "CORE-worldgenGaveUp",
+         site: jq.G,
+         fatal: !1,
+         message: "no world-gen worker generated: chunks come whole",
+         details: gq
+       })
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1172-L1173` → after: `L1520-L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1520-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1520-L1533) · [Before (L1172-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1172-L1173)

```diff
-     function Tz() {
-       Mz.h.setItem(Az, !0)
+     function Ag(qq, Eq, gq) {
+       return HE({
+         kind: "recovered",
+         code: "CORE-memoryShed",
+         site: jq.r,
+         fatal: !1,
+         message: (0, Qq.k)(qq) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
+         details: {
+           cause: qq,
+           ...Eq,
+           wasmBuild: gq.wasm,
+           clientVersion: gq.client
+         }
+       })
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1176-L1177` → after: `L1536-L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1536-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1536-L1557) · [Before (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1176-L1177)

```diff
-     function Lz() {
-       return !0 === Mz.h.getItem(Az)
+     function cg(qq, Eq, gq, Yq) {
+       var lq, Oq;
+       const mq = (0, Aq.j)(),
+         xq = {
+           game: qq,
+           cause: Eq,
+           census: null === gq ? "none" : JSON.stringify(gq),
+           gpu: null !== (lq = null === (Oq = (0, Nq.t)()) || void 0 === Oq ? void 0 : Oq.renderer) && void 0 !== lq ? lq : "",
+           renderWarned: String(mq),
+           browser: (0, Aq.h)(),
+           wasmBuild: Yq.wasm,
+           clientVersion: Yq.client
+         },
+         cq = `first view drew no whole terrain in ${vq.d/1e3} s, ${Eq}${mq?", render warned":""}`;
+       return HE({
+         kind: "noTerrain",
+ ... (6 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1180-L1181` → after: `L1560-L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1560-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1560-L1577) · [Before (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1180-L1181)

```diff
-     function Pz() {
-       return xz
+     function ug(qq, Eq, gq) {
+       var Yq, Oq, mq;
+       const xq = null !== (Yq = (0, lq.f)(null !== (Oq = null === (mq = (0, Nq.n)()) || void 0 === mq ? void 0 : mq.renderer) && void 0 !== Oq ? Oq : null, (0, Nq.j)())) && void 0 !== Yq ? Yq : "unknown",
+         cq = null === Eq ? "untimed" : `${Math.round(Eq)} ms`,
+         uq = `frames stalled, gpu ${(0,Aq.p)(xq)}, blocking ${cq}, drawn ${Math.round(qq)} ms apart`,
+         Bq = {
+           gpuModel: xq,
+           wasmBuild: gq.wasm,
+           clientVersion: gq.client
+         };
+       return HE({
+         kind: "mainStall",
+         code: "CORE-mainStall",
+         site: wq,
+         fatal: !1,
+         message: uq,
+ ... (2 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1184-L1185` → after: `L1580-L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1580-L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1580-L1592) · [Before (L1184-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1184-L1185)

```diff
-     function Gz() {
-       return null === Zz && (Mz.g.removeItem("wasmLastPick"), Mz.g.removeItem("wasmGuessVerdict"), (0, lz.m)(), Zz = (0, tz.x)(Oz.d).then((zz => (null === zz || (0, tz.m)(zz) || (Rz = pz.e[zz.backend], iz.e.followGameGpu("webgpu" === zz.backend ? zz.adapter : null), "webgpu" ===  … [truncated]
+     function Bg(qq, Eq, gq) {
+       return HE({
+         kind: "recovered",
+         code: "CORE-workerStartTimeout",
+         site: qq,
+         fatal: !1,
+         message: `a ${qq} worker did not start`,
+         details: {
+           waitedMs: String(Math.round(Eq)),
+           wasmBuild: gq.wasm,
+           clientVersion: gq.client
+         }
+       })
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1188-L1189` → after: `L1595-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1595-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1595-L1607) · [Before (L1188-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1188-L1189)

```diff
-     function az() {
-       return Rz
+     function Wg(qq, Eq, gq) {
+       return HE({
+         kind: "recovered",
+         code: "CORE-replayFault",
+         site: qq,
+         fatal: !1,
+         message: `the replay's ${qq} failed`,
+         details: {
+           wasmBuild: gq.wasm,
+           clientVersion: gq.client
+         },
+         error: Eq
+       })
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1192-L1196` → after: `L1616-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1616-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1616-L1618) · [Before (L1192-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1192-L1196)

```diff
-     function Vz(zz) {
-       return zz ? zz.load() : Promise.resolve().then((function() {
-         var zz = new Error("Cannot find module '@bloxd/wasm/client'");
-         throw zz.code = "MODULE_NOT_FOUND", zz
-       })).then((zz => zz.bloxdWasmClient))
+     function ag(qq, Eq, gq) {
+       const Yq = "lost" === Eq && void 0 !== gq ? ` (${gq})` : "";
+       return `the ${qq} ${Ng[Eq]}${Yq}`
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1199-L1206` → after: `L1626-L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1626-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1626-L1633) · [Before (L1199-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1199-L1206)

```diff
-     function mz(zz) {
-       Mz.g.setItem(Fz, zz)
-     }
-     async function qz() {
-       if (null === Oz.d) return Vz(null);
-       const zz = Mz.g.getItem(Fz);
-       let uz = "none" === zz ? null : "webgl";
-       return null !== zz && "none" !== zz && ("string" === typeof zz && void 0 !== (0, Ez.e)(Oz.d, zz) ? uz = zz : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(zz)}, is none of this client's: guessing WebGL2's`)), null === uz ? null : Oz.d[uz]()
+     function dg(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
+       const lq = null === gq.boundAtMs ? "unbound" : `up${(0,uq.h)(Yq-gq.boundAtMs)}`,
+         Oq = null === gq.adapter ? "no adapter" : (0, uq.p)(gq.adapter),
+         mq = `${(0,dq.g)()?"hidden":"visible"} ${lq} ${Oq}${!0===gq.indirectHangs?" ih":""}`;
+       if ("pipeline_failed" === qq) return `${qq} ${mq}`;
+       const xq = null === Eq || void 0 === Eq ? void 0 : Eq.message;
+       return `${Eq instanceof dq.f?"timeout":(0,uq.q)("frames_refused"===qq,"string"===typeof xq?xq:"")} ${mq}`
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1208-L1209` → after: `L1635-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1635-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1635-L1639) · [Before (L1208-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1208-L1209)

```diff
-     let hz = null,
-       Uz = null;
+     const jg = {
+       samples: null,
+       sunShadows: null,
+       renderDistance: null
+     };
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1211-L1222` → after: `L1641-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1641-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1641-L1680) · [Before (L1211-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1211-L1222)

```diff
-     function cz() {
-       return hz ??= Gz().then((async zz => {
-         var uz;
-         const bz = null !== zz && !(0, tz.m)(zz),
-           Ez = {
-             indirectHangs: bz && await (0, tz.z)(zz, window.location.search),
-             storagePullBreaks: bz && (0, tz.J)(zz, window.location.search),
-             splitPassBreaks: bz && (0, tz.F)(zz, window.location.search),
-             framesAhead: (0, tz.h)(window.location.search),
-             instancedTerrainSlow: bz && (0, tz.A)(zz, null !== (uz = (0, Hz.f)(zz, !1)) && void 0 !== uz ? uz : (0, nz.c)())
-           };
-         return Uz = Ez.indirectHangs, Ez
+     function Hg(qq, Eq, Yq) {
+       var Oq, mq, xq, cq, Wq;
+       let {
+         cause: Nq = "lost",
+         error: aq,
+         context: Vq = Vg,
+         session: dq = jg
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const jq = dg(Nq, aq, Vq),
+         Hq = {
+           losses: String(Eq),
+           cause: Nq,
+           detail: jq,
+           vendor: null !== (Oq = null === (mq = Vq.adapter) || void 0 === mq ? void 0 : mq.vendor) && void 0 !== Oq ? Oq : "",
+           architecture: null !== (xq = null === (cq = Vq.adapter) || void 0 === cq ? void 0 : cq.architecture) && void 0 !== xq ? xq : "",
+           indirectHangs: String(Vq.indirectHangs),
+ ... (24 more added lines; see GitHub link above)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1226-L1227` → after: `L1684-L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1684-L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1684-L1760) · [Before (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1226-L1227)

```diff
-     function gz() {
-       return Uz
+     function og(qq, Eq) {
+       var gq, Yq;
+       const lq = null === qq.name ? "TEXTURE-sources" : null === qq.url ? "TEXTURE-nourl" : qq.error instanceof hq.d ? `TEXTURE-${qq.error.status}` : "TEXTURE-network",
+         Oq = null === qq.name ? "terrain textures could not load" : `terrain texture ${qq.name} could not load`,
+         mq = {
+           texture: null !== (gq = qq.name) && void 0 !== gq ? gq : "",
+           url: null !== (Yq = qq.url) && void 0 !== Yq ? Yq : "",
+           wasmBuild: Eq.wasm,
+           clientVersion: Eq.client
+         };
+       return HE({
+         kind: "terrainTexture",
+         code: lq,
+         site: jq.D,
+         fatal: !1,
+         message: Oq,
+ ... (61 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1230` → after: `L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1763) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1230)

```diff
-   40013: (zz, uz, bz) => {
+   40723: (qq, Eq, gq) => {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1232` → after: `L1765-L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1765-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1765-L1767) · [Before (L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1232)

```diff
-       e: () => Ez
+       c: () => Oq,
+       d: () => lq,
+       g: () => mq
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1234-L1237` → after: `L1769-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1769-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1769-L1783) · [Before (L1234-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1234-L1237)

```diff
-     const Ez = {
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
+     var Yq = gq(4625);
+     const lq = 3e4;
+     class Oq {
+       constructor(qq) {
+         this.SN = qq, this.waitedMs = 0, this.lastMs = null
+       }
+       frame(qq, Eq) {
+         if (Eq) return !0;
+         const gq = null === this.lastMs ? 0 : qq - this.lastMs;
+         return this.lastMs = qq, gq <= 900 && (this.waitedMs += gq), !(this.waitedMs < lq) && (this.SN(), !0)
+       }
+     }
+ 
+     function mq(qq, Eq) {
+       return 0 === (qq & Yq.O.ChunkRequested) ? "no_chunk_request" : 0 === (qq & Yq.O.ChunkStored) ? "chunk_not_stored" : 0 === (qq & Yq.O.MeshLanded) ? "not_meshed" : null === Eq ? "no_frame_drawn" : 0 === Eq.terrainParts ? "no_terrain_parts" : Eq.terrainCompiling > 0 ? "terrain … [truncated]
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1240` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1786) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1240)

```diff
-   40009: (zz, uz, bz) => {
+   4616: (qq, Eq, gq) => {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1242-L1243` → after: `L1788-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1788-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1788-L1790) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1242-L1243)

```diff
-       b: () => nz,
-       d: () => Ez
+       c: () => mq,
+       e: () => Oq,
+       g: () => lq
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1245-L1254` → after: `L1792-L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1792-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1792-L1795) · [Before (L1245-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1245-L1254)

```diff
-     const Ez = {
-         webgpu: async () => (await bz.e(8).then((() => bz(42494)))).bloxdWasmWebgpu,
-         webgl: async () => (await bz.e(6).then((() => bz(42510)))).bloxdWasmWebgl,
-         webgl1: async () => (await bz.e(7).then((() => bz(42524)))).bloxdWasmWebgl1
-       },
-       nz = async () => (await bz.e(5).then((() => bz(42538)))).compileAnimationPackInWasm
-   },
-   40025: (zz, uz, bz) => {
-     function Ez() {
-       return bz(40027)
+     var Yq = gq(4622);
+ 
+     function lq(qq) {
+       return "none" !== qq
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1257-L1258` → after: `L1798-L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1798-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1798-L1807) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1257-L1258)

```diff
-     function nz() {
-       return bz(40036)
+     function Oq(qq, Eq) {
+       if (!qq) return "none";
+       switch (Eq) {
+         case Yq.Y.Drawn:
+           return "drawn";
+         case Yq.Y.Paced:
+           return "paced";
+         default:
+           return "skipped"
+       }
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1262` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1811) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1262)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(zz)
+       return "drawn" === qq
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1267-L1273` → after: `L1821-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1821-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1821-L1824) · [Before (L1267-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1267-L1273)

```diff
-       m: () => nz
-     })
-   },
-   39979: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => nz,
-       e: () => lz
+       j: () => Nq,
+       k: () => uq,
+       n: () => Bq,
+       q: () => aq
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1275` → after: `L1826-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1826-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1826-L1849) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1275)

```diff
-     const Ez = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+     class Yq extends Error {
+       constructor(qq) {
+         super(`the join's code did not load: ${qq instanceof Error?qq.message:String(qq)}`, {
+           cause: qq
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === qq || void 0 === qq ? void 0 : qq.request
+       }
+     }
+     let lq = null,
+       Oq = null,
+       mq = null;
+     const xq = [];
+     let Aq = null;
+ 
+     function cq(qq, Eq) {
+       try {
+         qq(Eq)
+ ... (8 more added lines; see GitHub link above)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1278-L1280` → after: `L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1852) · [Before (L1278-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1278-L1280)

```diff
-       if (zz instanceof WebAssembly.RuntimeError) return !0;
-       const uz = zz instanceof Error ? zz.stack : void 0;
-       return "string" === typeof uz && Ez.test(uz)
+       xq.push(qq), null !== Aq && cq(qq, Aq)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1285-L1293` → after: `L1856-L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1856-L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1856-L1858) · [Before (L1285-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1285-L1293)

```diff
-       let uz = "[object Object]";
-       try {
-         uz = String(zz)
-       } catch {}
-       if ("[object Object]" !== uz) return uz;
-       try {
-         var bz, Ez;
-         return null !== (bz = null === (Ez = JSON.stringify(zz)) || void 0 === Ez ? void 0 : Ez.slice(0, iz)) && void 0 !== bz ? bz : uz
-       } catch {
+       return lq ??= Promise.all([gq.e(70), gq.e(95), gq.e(216), gq.e(75), gq.e(217), gq.e(190), gq.e(94), gq.e(235), gq.e(261), gq.e(188), gq.e(263), gq.e(200), gq.e(187), gq.e(201), gq.e(137), gq.e(86), gq.e(115), gq.e(239), gq.e(54)]).then((() => gq(42335))).then((Eq => {
+         Eq.loadAudio(qq), Aq = Eq;
+         for (const qq of xq) cq(qq, Eq);
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1298` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1899) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1298)

```diff
-   40017: (zz, uz, bz) => {
+   40599: (qq, Eq, gq) => {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1301` → after: `L1902-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1902-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1902-L1910) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1301)

```diff
-       h: () => tz
+       h: () => Oq,
+       j: () => mq,
+       k: () => lq,
+       l: () => Nq,
+       o: () => uq,
+       p: () => Aq,
+       t: () => Wq,
+       u: () => Bq,
+       y: () => xq
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1303-L1304` → after: `L1912-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1912-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1912-L1915) · [Before (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1303-L1304)

```diff
-     var Ez = bz(96);
-     const nz = "webgpuPipeline";
+     var Yq = gq(1763);
+     const lq = new Uint8Array([12]),
+       Oq = 2e3,
+       mq = 257;
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1307` → after: `L1918-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1918-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1918-L1919) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1307)

```diff
-       return zz.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
+       const Eq = new Uint8Array(4);
+       return new DataView(Eq.buffer).setUint32(0, qq, !0), Eq
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1309` → after: `L1921-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1921-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1921-L1971) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1309)

```diff
-     let lz = null;
+     class Aq extends Error {
+       constructor() {
+         super("the game was left while it reconnected"), this.name = "AbortError"
+       }
+     }
+     class cq extends Error {
+       constructor(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         super(qq), this.stage = Eq, this.code = gq, this.serverText = Yq, this.name = "JoinError"
+       }
+     }
+     class uq extends Error {
+       constructor(qq) {
+         super(qq), this.final = !0, this.name = "ResumeRefusedError"
+       }
+ ... (35 more added lines; see GitHub link above)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1311-L1315` → after: `L1973-L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1973-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1973-L1978) · [Before (L1311-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1311-L1315)

```diff
-     function Mz() {
-       if (null === lz) try {
-         zz = (0, Ez.getBrowserName)(), uz = (0, Ez.getBrowserVersion)(), bz = (0, Ez.getOperatingSystem)(), nz = (0, Ez.getOperatingSystemVersion)(), lz = `${zz.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===uz?"unknown":iz(uz)}-${bz}${void 0===nz?"":`_${iz(nz)}`}`
-       } catch (Mz) {
-         console.warn("The user agent couldn't be read for its browser code", Mz), lz = "unknown"
+     function Bq(qq) {
+       if (qq instanceof Oq.f) return "expected";
+       if (qq instanceof xq.t) return qq.networkLost ? "expected" : "unrecognised";
+       if (qq instanceof xq.e) {
+         if ("closed" === qq.stage && (0 === qq.code || (0, lq.c)(qq.code))) return "expected";
+         if ("roomError" === qq.stage && (qq.serverText === cq || qq.serverText === uq)) return "expected"
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1317-L1318` → after: `L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1980) · [Before (L1317-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1317-L1318)

```diff
-       var zz, uz, bz, nz;
-       return lz
+       return qq instanceof xq.e || qq instanceof xq.l ? null === (0, mq.j)(qq.code).name ? "unrecognised" : "known" : (0, Yq.f)(qq) ? "expected" : qq instanceof xq.u || qq instanceof Aq.g ? "known" : "unrecognised"
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1321-L1354` → after: `L1983-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L1983-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L1983-L2026) · [Before (L1321-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1321-L1354)

```diff
-     function tz() {
-       let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
-       const uz = `WGPU-${Mz()}`,
-         Ez = (zz, Ez) => {
-           const {
-             reason: iz,
-             message: lz
-           } = Ez, Mz = {
-             pipeline: null !== zz && void 0 !== zz ? zz : "",
-             reason: String(iz),
-             browserMessage: String(lz)
-           };
-           Promise.all([bz.e(262), bz.e(86)]).then((() => bz(40140))).then((zz => {
-             let {
-               reportCrash: bz
-             } = zz;
- ... (18 more removed lines; see GitHub link above)
+     function Wq(qq) {
+       return qq instanceof Oq.f ? "timedOut" : "expected" !== Bq(qq) || (0, Yq.f)(qq) || qq instanceof xq.e && 1001 === qq.code ? void 0 : "failed"
+     }
+   },
+   39068: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => hq,
+       g: () => Qq,
+       k: () => Bq,
+       l: () => yq,
+       n: () => jq,
+       q: () => rq,
+       w: () => vq
+     });
+     var Yq = gq(36350),
+       lq = gq(36528);
+ ... (28 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1356-L1360` → after: `L2028-L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L2028-L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L2028-L2032) · [Before (L1356-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1356-L1360)

```diff
-       const lz = zz.createComputePipelineAsync;
-       zz.createComputePipelineAsync = function(zz) {
-         return lz.call(this, zz).catch((uz => {
-           throw Ez(zz.label, uz), uz
-         }))
+ 
+     function Qq(qq) {
+       return {
+         targetBytes: qq,
+         leastBytes: 0
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1364-L1376` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L2235) · [Before (L1364-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1364-L1376)

```diff
-   39957: (zz, uz, bz) => {
-     zz.exports = bz.p + "static/media/bloxd_wasm_models_bg.00aaab2512bf782de621.wasm"
-   },
-   39948: (zz, uz, bz) => {
-     zz.exports = bz.p + "static/media/bloxd_wasm_workers_bg.a38acf9b069083b75635.wasm"
-   },
-   40027: (zz, uz, bz) => {
-     zz.exports = bz.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
-   },
-   40036: (zz, uz, bz) => {
-     zz.exports = bz.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
-   },
-   39940: (zz, uz, bz) => {
+   40700: (qq, Eq, gq) => {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1379` → after: `L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L2240) · [Before (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1379)

```diff
-       h: () => Ez
+       g: () => Bq
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1381-L1384` → after: `L2242-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L2242-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L2242-L2252) · [Before (L1381-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1381-L1384)

```diff
-     const Ez = {
-       name: "bloxd_wasm_workers",
-       url: function() {
-         return new bz.U(bz(39948))
+     var Yq = gq(2805),
+       lq = gq(4622),
+       Oq = gq(40707),
+       mq = gq(40714),
+       xq = gq(36356);
+     const Aq = 395,
+       cq = 2147483648,
+       uq = new Uint8Array(0);
+     class Bq extends Error {
+       constructor() {
+         super(...arguments), this.name = "ModelRingError"
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L1386-L1390` → after: `L2254-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L2254-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/87.js#L2254-L2286) · [Before (L1386-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/87.js#L1386-L1390)

```diff
-     };
-     const nz = {
-       name: "bloxd_wasm_models",
-       url: function() {
-         return new bz.U(bz(39957))
+     }
+     class Wq extends Error {
+       constructor() {
+         super(...arguments), this.name = "ModelPackRefusedError"
+       }
+     }
+     class Nq {
+       constructor(qq, Eq, gq) {
+         var Yq, lq, mq, xq;
+         let Aq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+         this.files = qq, this.build = Eq, this.onFailure = gq, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.jN = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFi … [truncated]
+         for (const Oq of qq.startup) this.request(Oq)
+       }
+       get startupDone() {
+         return 0 === this.startupLeft.size
+       }
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 1. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4-L21` → after: `L4-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L552) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L21)

```diff
-   40687: (zz, uz, bz) => {
-     async function Ez(zz, uz) {
-       const [{
-         clientSideServerUrls: Ez
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: nz
-       }, {
-         gameBridge: iz
-       }] = await Promise.all([Promise.resolve().then((() => bz(1195))), Promise.resolve().then((() => bz(1118))), Promise.resolve().then((() => bz(1871)))]), lz = iz.latest("connectedGame").websocketUrl;
-       if (!lz) throw new Error("AI Helper: not connected to a game server");
-       const Mz = `${Ez.getHttpUrlFromWebSocketUrl(lz)}${zz}`;
-       return await nz(Mz, uz, {
-         retries: 0
-       })
-     }
-     bz.r(uz), bz.d(uz, {
- ... (2 more removed lines; see GitHub link above)
+   4625: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       A: () => xq,
+       Ab: () => rq,
+       B: () => Yq,
+       C: () => Oq,
+       E: () => dq,
+       Eb: () => tq,
+       G: () => wq,
+       H: () => uq,
+       Hb: () => Mq,
+       L: () => Bq,
+       Lb: () => Jq,
+       Nb: () => zq,
+       O: () => cq,
+       Q: () => jq,
+ ... (533 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L23-L26` → after: `L554-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L554-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L554-L556) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L23-L26)

```diff
-   40685: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       WorldCodeAiPanel: () => jp,
-       default: () => Ip
+   40523: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L28-L31` → after: `L558-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L558-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L558-L561) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L28-L31)

```diff
-     var Ez = bz(56),
-       nz = bz(1038),
-       iz = bz.n(nz),
-       lz = bz(1089);
+     const Yq = 1 << 20,
+       lq = 1 << 21,
+       Oq = 1024,
+       mq = 2048;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L33-L62` → after: `L563-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L563-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L563-L567) · [Before (L33-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L33-L62)

```diff
-     function Mz(zz) {
-       let {
-         title: uz,
-         children: bz,
-         isCalm: nz = !1,
-         isElsewhere: Mz = !1,
-         defaultOpen: tz = !1,
-         isOpen: Hz,
-         onToggle: Oz,
-         className: pz
-       } = zz;
-       const [dz, Fz] = (0, Ez.useState)(tz), Zz = null !== Hz && void 0 !== Hz ? Hz : dz;
-       return (0, lz.jsxs)("div", {
-         className: iz()("WorldCodeAiLog", nz && "WorldCodeAiLog-calm", Mz && "WorldCodeAiLog-elsewhere", Zz && "WorldCodeAiLog-open", pz),
-         children: [(0, lz.jsxs)("button", {
-           className: "WorldCodeAiLogToggle",
- ... (14 more removed lines; see GitHub link above)
+     function xq(qq, Eq, gq) {
+       const xq = qq + Yq,
+         Aq = Eq + Oq,
+         cq = gq + Yq;
+       return xq < 0 || xq >= lq || cq < 0 || cq >= lq || Aq < 0 || Aq >= mq ? -1 : (xq * lq + cq) * mq + Aq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L64-L74` → after: `L569-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L569-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L569-L645) · [Before (L64-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L64-L74)

```diff
-     var tz = bz(1871),
-       Hz = bz(6226),
-       Oz = bz(1419),
-       pz = bz(36326),
-       dz = bz(1047),
-       Fz = bz(4497),
-       Zz = bz(36334),
-       Rz = bz(1547),
-       Kz = bz(4581),
-       wz = bz(6214);
-     const Xz = new URL(Rz.e).host;
+   },
+   40515: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Yq,
+       h: () => mq,
+       i: () => lq,
+       k: () => Oq,
+       l: () => uq,
+       p: () => cq,
+       s: () => Aq,
+       v: () => xq
+     });
+     gq(3328);
+     gq(40523);
+ 
+     function Yq(qq) {}
+ ... (61 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L80-L82` → after: `L650-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L650-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L650-L660) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L80-L82)

```diff
-         const zz = /^docs\//i.test(uz) ? `${Rz.e}/` : `${Rz.e}/docs/`,
-           Ez = uz.toLowerCase().replace(/^www\./, "").startsWith(`${Xz}/`);
-         bz = new URL(Ez ? `https://${uz}` : uz, zz)
+         Eq = qq.getContext("webgl", {
+           powerPreference: Hq.d
+         })
+       } catch {
+         Eq = null
+       }
+       if (null === Eq) return null;
+       let gq = null;
+       try {
+         const qq = Eq.getParameter(Eq.MAX_TEXTURE_SIZE);
+         gq = "number" === typeof qq && qq > 0 ? qq : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L84` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L662) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L84)

```diff
-         return null
+         gq = null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L86-L88` → after: `L664-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L664-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L664-L668) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L86-L88)

```diff
-       if ("https:" !== bz.protocol && "http:" !== bz.protocol || bz.host !== Xz && bz.host !== `www.${Xz}`) return null;
-       const Ez = bz.pathname.toLowerCase();
-       return sz(Ez) || null !== (0, Kz.A)(Ez) ? Ez : (0, Kz.w)(Ez)
+       try {
+         var Yq;
+         null === (Yq = Eq.getExtension("WEBGL_lose_context")) || void 0 === Yq || Yq.loseContext()
+       } catch {}
+       return gq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L92` → after: `L675-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L675-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L675-L686) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L92)

```diff
-       return zz === Kz.i || zz === Kz.n
+       return function(qq) {
+         try {
+           return qq()
+         } catch {
+           return null
+         }
+       }((() => {
+         var Eq, gq, Yq, mq;
+         const xq = null !== (Eq = null === (gq = qq.info) || void 0 === gq ? void 0 : gq.vendor) && void 0 !== Eq ? Eq : "";
+         return "windows" === (0, Wq.getOperatingSystem)() && "" !== xq && "intel" !== (0, Wq.normaliseGpuVendor)(xq) ? null : ((0, Wq.seedGpuVendor)(xq), Aq = (0, lq.l)(), cq = (0, Oq.c)(xq, null !== (Yq = null === (mq = qq.info) || void 0 === mq ? void 0 : mq.architecture) && vo … [truncated]
+         var Aq, cq
+       }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L95-L97` → after: `L689-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L689-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L689-L762) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L95-L97)

```diff
-     function rz(zz) {
-       const uz = fz(zz);
-       return null === uz ? zz : `${Rz.e}${uz}`
+     function Mq() {
+       var qq;
+       return {
+         gpu: null !== (qq = navigator.gpu) && void 0 !== qq ? qq : null,
+         webgl2: () => {
+           try {
+             return null !== document.createElement("canvas").getContext("webgl2")
+           } catch {
+             return !1
+           }
+         },
+         webgl1: () => function(qq) {
+           let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qq.c;
+           try {
+             Eq = qq.getContext("webgl")
+           } catch {
+ ... (58 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L104-L112` → after: `L766-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L766-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L766-L770) · [Before (L104-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L104-L112)

```diff
-       const uz = [];
-       let bz = 0;
-       return zz.split("\n").forEach(((zz, Ez) => {
-         uz.push({
-           text: zz,
-           from: bz,
-           index: Ez
-         }), bz += zz.length + 1
-       })), uz
+       try {
+         return qq()
+       } catch {
+         return !1
+       }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L116` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L774) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L116)

```diff
-       return zz.replace(/^\s*\/\/.*$/, "").replace(/\s+/g, "").replace(/['`]/g, '"').replace(/[;,]+$/, "")
+       return "lite" === qq ? "webgpu" : "webgl2" === qq || "babylon" === qq ? "webgl" : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L118-L126` → after: `L776-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L776-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L776-L830) · [Before (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L118-L126)

```diff
- 
-     function Az(zz, uz, bz) {
-       if (0 === uz.length) return null;
-       let Ez = null;
-       for (let nz = 0; nz + uz.length <= zz.length; nz++) {
-         if (uz.every(((uz, Ez) => bz(zz[nz + Ez].text) === uz))) {
-           if (Ez) return {
-             ...Ez,
-             isOnly: !1
+     async function Sq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mq();
+       const Eq = await async function(qq) {
+         const Eq = function(qq) {
+             const Eq = qq.override(),
+               gq = qq.webGpuSetting(),
+               Yq = null === Eq && !0 !== gq && qq.pN(),
+               lq = null !== Eq || null !== gq || Yq ? null : qq.claimed(),
+               Oq = null !== Eq ? "override" : !0 === gq ? "setting" : Yq ? "pack" : !1 === gq ? "setting" : null !== lq ? "claim" : "default",
+               mq = function(qq) {
+                 return "override" === qq || "setting" === qq
+               }(Oq);
+             if ("webgl" === Eq || "webgl1" === Eq || "webgl" === lq || "setting" === Oq && !1 === gq) return {
+               source: Oq,
+               asked: mq,
+               refused: "not_requested"
+ ... (39 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L128-L151` → after: `L832-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L832-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L832-L855) · [Before (L128-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L128-L151)

```diff
-           const bz = zz[nz + uz.length - 1];
-           Ez = {
-             from: zz[nz].from,
-             to: bz.from + bz.text.length
-           }
-         }
-       }
-       return Ez ? {
-         ...Ez,
-         isOnly: !0
-       } : null
-     }
- 
-     function Tz(zz, uz) {
-       if ("" === uz.trim()) return null;
-       const bz = xz(zz),
- ... (8 more removed lines; see GitHub link above)
+         if (!("gpu" in Eq)) return mq(Eq.refused);
+         let xq;
+         try {
+           xq = await (0, yq.k)((0, oq.n)(Eq.gpu), YE, `requestAdapter didn't settle in ${YE/1e3} s`)
+         } catch {
+           return mq("adapter_error")
+         }
+         if ("string" === typeof xq) return mq(xq);
+         const Aq = (0, oq.e)(xq);
+         if ((0, oq.i)(xq)) return mq("software_adapter", Aq);
+         const cq = qq.windows() && function(qq) {
+           return Zq.has((0, Oq.c)(qq.vendor, qq.architecture))
+         }(Aq);
+         if (qq.storeHoldbackSpared(cq), lq && !cq) return mq("webgl_holdback");
+         const uq = qq.intelGen9(xq),
+           Bq = uq ? null : qq.gpuClassWebGlArm(xq);
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L153-L162` → after: `L857-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L857-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L857-L866) · [Before (L153-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L153-L162)

```diff
-       const iz = zz => zz.trim().replace(/;+$/, ""),
-         lz = Az(bz, Ez.map(iz), iz);
-       if (null !== lz) {
-         const bz = zz.indexOf(uz),
-           Ez = -1 !== bz && (bz < lz.from || bz >= lz.to);
-         return {
-           from: lz.from,
-           to: lz.to,
-           isLoose: !lz.isOnly || Ez
-         }
+       if ("webgl1" !== qq.override() && qq.webgl2()) return {
+         backend: "webgl",
+         ...Eq
+       };
+       const gq = qq.webgl1();
+       return 0 === gq.length ? {
+         backend: "webgl1",
+         ...Eq
+       } : {
+         missing: gq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L164-L172` → after: `L868-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L868-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L868-L876) · [Before (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L164-L172)

```diff
-       const Mz = zz.indexOf(uz);
-       if (-1 !== Mz) {
-         var tz, Hz, Oz;
-         const bz = /\w/.test(uz[0]) && /\w/.test(null !== (tz = zz[Mz - 1]) && void 0 !== tz ? tz : "") || /\w/.test(null !== (Hz = uz.at(-1)) && void 0 !== Hz ? Hz : "") && /\w/.test(null !== (Oz = zz[Mz + uz.length]) && void 0 !== Oz ? Oz : "");
-         return {
-           from: Mz,
-           to: Mz + uz.length,
-           isLoose: bz || -1 !== zz.indexOf(uz, Mz + 1)
-         }
+     }
+     let pq = !1;
+     async function Gq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mq();
+       if (null === qq) return null;
+       const gq = await Sq(Eq);
+       return pq = !("missing" in gq) && "webgpu" === gq.backend && "claim" === gq.source, "missing" in gq ? gq : {
+         ...gq,
+         load: qq[gq.backend]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L174-L179` → after: `L878-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L878-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L878-L894) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L174-L179)

```diff
-       const pz = uz.split("\n").map(Jz).filter(Boolean),
-         dz = Az(bz.filter((zz => "" !== Jz(zz.text))), pz, Jz);
-       return null === dz ? null : {
-         from: dz.from,
-         to: dz.to,
-         isLoose: !0
+     }
+     async function Lq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mq().gpu,
+         Yq = arguments.length > 3 ? arguments[3] : void 0;
+       if ("webgpu" !== qq.backend) return !1;
+       const lq = Rq(Eq, "indirectDraws", "off", "on");
+       if (null !== lq) return lq;
+       if (null !== qq.adapter && (0, dq.q)(qq.adapter, Yq)) return !0;
+       if (null === gq) return !1;
+       try {
+         var Oq;
+         const qq = await (0, yq.k)(gq.requestAdapter({
+           powerPreference: "low-power"
+         }).then((async qq => (null !== qq && await (0, oq.g)(qq), qq))), YE, `the low-power requestAdapter didn't settle in ${YE/1e3} s`);
+         return (0, dq.q)(null !== (Oq = null === qq || void 0 === qq ? void 0 : qq.info) && void 0 !== Oq ? Oq : {}, Yq)
+       } catch (mq) {
+ ... (1 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L183-L185` → after: `L898-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L898-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L898-L907) · [Before (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L183-L185)

```diff
-     function Lz(zz) {
-       var uz, bz;
-       return null !== (uz = null === (bz = /^[ \t]*/.exec(zz)) || void 0 === bz ? void 0 : bz[0]) && void 0 !== uz ? uz : ""
+     function Jq(qq, Eq, gq) {
+       if ("webgpu" !== qq.backend) return !1;
+       const Yq = Rq(Eq, "terrainFetch", "texture", "storage");
+       return null !== Yq ? Yq : null !== qq.adapter && (0, dq.k)(qq.adapter, gq)
+     }
+ 
+     function kq(qq, Eq, gq) {
+       if ("webgpu" !== qq.backend) return !1;
+       const Yq = Rq(Eq, "sceneDepth", "off", "on");
+       return null !== Yq ? Yq : null !== qq.adapter && (0, dq.l)(qq.adapter, gq)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L189-L209` → after: `L911-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L911-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L911-L913) · [Before (L189-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L189-L209)

```diff
-       if (uz.from > 0 && "\n" !== zz[uz.from - 1]) return Ez;
-       const nz = zz.slice(uz.from, uz.to).split("\n").filter((zz => "" !== zz.trim())),
-         iz = bz.split("\n").filter((zz => "" !== zz.trim()));
-       if (0 === nz.length || 0 === iz.length) return Ez;
-       const lz = Lz(nz[0]),
-         Mz = Lz(iz[0]);
-       if (lz === Mz) return Ez;
-       const tz = iz.length > 1 && iz.length === nz.length && iz.slice(1).every(((zz, uz) => Lz(zz) === Lz(nz[uz + 1]))),
-         Hz = Ez.split("\n"),
-         Oz = Hz.findIndex((zz => "" !== zz.trim()));
-       if (-1 === Oz || Lz(Hz[Oz]) === lz) return Ez;
-       let pz = !1;
-       return Hz.map(((zz, uz) => {
-         var bz, Ez;
-         const nz = pz;
-         return (null !== (bz = null === (Ez = zz.replace(/\\`/g, "").match(/`/g)) || void 0 === Ez ? void 0 : Ez.length) && void 0 !== bz ? bz : 0) % 2 === 1 && (pz = !pz), nz || tz && uz !== Oz ? zz : function(zz, uz, bz) {
- ... (5 more removed lines; see GitHub link above)
+       const lq = new URLSearchParams(qq).get(Eq),
+         Oq = null !== lq && void 0 !== lq ? lq : (0, Aq.g)(Eq);
+       return Oq !== gq && Oq !== Yq ? null : (pq ||= null === lq, Oq === gq)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L213-L232` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L917) · [Before (L213-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L213-L232)

```diff
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const Ez = new Map;
-       for (const Mz of zz.split("\n")) {
-         const zz = Mz.trim(),
-           uz = zz.replace(/;$/, "");
-         "" === uz || zz.endsWith(";") || Ez.has(uz) || Ez.set(uz, zz)
-       }
-       const nz = uz.split("\n");
-       let iz = !1;
-       const lz = nz.map(((zz, uz) => {
-         var lz, Mz, tz;
-         const Hz = iz;
-         (null !== (lz = null === (Mz = zz.replace(/\\`/g, "").match(/`/g)) || void 0 === Mz ? void 0 : Mz.length) && void 0 !== lz ? lz : 0) % 2 === 1 && (iz = !iz);
-         const Oz = zz.trim(),
-           pz = Ez.get(Oz.replace(/;$/, ""));
-         if (void 0 === pz || pz === Oz || Hz || iz) return zz;
- ... (4 more removed lines; see GitHub link above)
+       return "webgl" === qq.backend && (0, Oq.g)(Eq)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L236-L256` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L921) · [Before (L236-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L236-L256)

```diff
-       var uz;
-       return null !== (uz = zz.split("\n").find((zz => "" !== zz.trim()))) && void 0 !== uz ? uz : ""
-     }
- 
-     function Vz(zz, uz) {
-       if (zz === uz) return 1;
-       if (zz.length < 2 || uz.length < 2) return 0;
-       const bz = new Map;
-       for (let lz = 0; lz < zz.length - 1; lz++) {
-         var Ez;
-         const uz = zz.slice(lz, lz + 2);
-         bz.set(uz, (null !== (Ez = bz.get(uz)) && void 0 !== Ez ? Ez : 0) + 1)
-       }
-       let nz = 0;
-       for (let lz = 0; lz < uz.length - 1; lz++) {
-         var iz;
- ... (5 more removed lines; see GitHub link above)
+       return null !== qq && "missing" in qq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L259-L278` → after: `L924-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L924-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L924-L933) · [Before (L259-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L259-L278)

```diff
-     function mz(zz, uz) {
-       const bz = uz.split("\n").map(Jz).filter(Boolean),
-         Ez = xz(zz).filter((zz => "" !== Jz(zz.text)));
-       if (0 === bz.length || 0 === Ez.length) return null;
-       const nz = Math.min(bz.length, Ez.length);
-       let iz = null;
-       for (let Mz = 0; Mz + nz <= Ez.length; Mz++) {
-         let zz = 0;
-         for (let uz = 0; uz < nz; uz++) zz += Vz(Jz(Ez[Mz + uz].text), bz[uz]);
-         zz /= bz.length, (null === iz || zz > iz.score) && (iz = {
-           start: Mz,
-           score: zz
-         })
-       }
-       if (null === iz || iz.score < .5) return null;
-       const lz = Ez.slice(iz.start, iz.start + nz);
- ... (4 more removed lines; see GitHub link above)
+     function sq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.b;
+       try {
+         const gq = "start_failed" === qq || "pipeline_failed" === qq,
+           Yq = Eq.turnOffWebGpuAfterDeviceLoss(gq ? "visible" : (0, Vq.h)((0, Nq.i)()));
+         return !pq || Yq && !Eq.isWebGpuOffAfterLoss() || (0, Aq.x)("webgpuLoss"), Eq.isWebGpuOffAfterLoss() && "webgpu" === zq(aq.i.getItem(uq.f)) && aq.i.removeItem(uq.f), (0, xq.s)("webgpuloss") && (0, cq.b)((Eq => {
+           Eq.noteWebGpuLoss("wasm", Yq ? qq : `${qq}, which storage didn't keep`, null)
+         })), Yq
+       } catch {
+         return !1
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L283` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L938) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L283)

```diff
-       return vz().isFunctionExpression(zz) || vz().isArrowFunction(zz)
+       return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Cq()) ? sq(qq) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L287-L289` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L943-L944) · [Before (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L287-L289)

```diff
-       return vz().isExpressionStatement(zz) && vz().isBinaryExpression(zz.expression) && vz().isPropertyAccessExpression(zz.expression.left) && ! function(zz) {
-         return vz().isIdentifier(zz) && ("globalThis" === zz.text || "window" === zz.text || "self" === zz.text)
-       }(zz.expression.left.expression)
+       const Eq = new URLSearchParams(qq).get(wq);
+       return null !== Eq && /^\d{1,9}$/.test(Eq) ? Number(Eq) : void 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L292-L297` → after: `L947-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L947-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L947-L952) · [Before (L292-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L292-L297)

```diff
-     function Uz(zz, uz, bz) {
-       let Ez = bz;
-       for (const iz of (null !== (nz = vz().getLeadingCommentRanges(zz, uz.getFullStart())) && void 0 !== nz ? nz : []).reverse()) {
-         var nz;
-         if (/\n[^\S\n]*\n/.test(zz.slice(iz.end, Ez))) break;
-         Ez = iz.pos
+     function Cq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
+       try {
+         return "webgpu" === zq(new URLSearchParams(qq).get(uq.e))
+       } catch {
+         return !1
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L303-L307` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L957) · [Before (L303-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L303-L307)

```diff
-       var uz;
-       const {
-         parseDiagnostics: bz
-       } = zz;
-       return (null !== (uz = null === bz || void 0 === bz ? void 0 : bz.length) && void 0 !== uz ? uz : 0) > 0
+       return !!eq(qq) || qq instanceof Error && !(qq instanceof WebAssembly.RuntimeError) && qq.message.startsWith(`${Pq.f.RenderSurfaceUnusable}:`)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L311-L346` → after: `L961-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L961-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L961-L965) · [Before (L311-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L311-L346)

```diff
-       const uz = vz().createSourceFile("worldCode.js", zz, vz().ScriptTarget.Latest, !1, vz().ScriptKind.JS),
-         bz = [],
-         Ez = (nz, iz) => {
-           const lz = function(zz) {
-             var uz, bz;
-             if (vz().isFunctionDeclaration(zz)) return null !== (uz = null === (bz = zz.name) || void 0 === bz ? void 0 : bz.text) && void 0 !== uz ? uz : null;
-             if (vz().isVariableStatement(zz) && 1 === zz.declarationList.declarations.length) {
-               const uz = zz.declarationList.declarations[0];
-               return vz().isIdentifier(uz.name) && uz.initializer && qz(uz.initializer) ? uz.name.text : null
-             }
-             if (vz().isExpressionStatement(zz) && vz().isBinaryExpression(zz.expression) && zz.expression.operatorToken.kind === vz().SyntaxKind.EqualsToken && qz(zz.expression.right)) {
-               const uz = zz.expression.left;
-               return vz().isIdentifier(uz) ? uz.text : vz().isPropertyAccessExpression(uz) ? uz.name.text : null
-             }
-             return null
-           }(nz);
- ... (20 more removed lines; see GitHub link above)
+       const {
+         name: Eq,
+         message: gq
+       } = null !== qq && void 0 !== qq ? qq : {};
+       return "InvalidStateError" === Eq && "string" === typeof gq && gq.startsWith("GPUDevice.")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L350` → after: `L969-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L969-L970) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L350)

```diff
-       return gz(zz).functions
+       const Eq = qq;
+       return "function" === typeof Eq.dYq && "function" === typeof Eq.jYq ? Eq : null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L354` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L974) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L354)

```diff
-       return zz.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
+       return "function" === typeof qq.rYq ? qq : null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L357-L362` → after: `L978-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L978-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L978-L980) · [Before (L357-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L357-L362)

```diff
-     function Dz(zz, uz) {
-       var bz;
-       const Ez = zz.filter((zz => zz.name === uz)),
-         nz = Ez.filter((zz => !zz.isProperty)),
-         iz = nz.length > 0 ? nz : Ez;
-       return null !== (bz = iz.find((zz => zz.topLevel))) && void 0 !== bz ? bz : iz[0]
+     function gE(qq) {
+       const Eq = null === qq || void 0 === qq ? void 0 : qq.fOq();
+       return void 0 === Eq ? void 0 : new Error(Eq)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L365-L366` → after: `L985-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L985-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L985-L988) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L365-L366)

```diff
-     function Qz(zz, uz) {
-       return "" === zz.trim() ? `${uz.trim()}\n` : `${zz.replace(/\s*$/,"")}\n\n${uz.trim()}\n`
+     function OE(qq, Eq, gq, Yq, lq, Oq) {
+       return (0, yq.k)(function(qq, Eq, gq, Yq, lq, Oq) {
+         return (0, tq.d)(qq, Eq, (() => qq.rYq(gq, Yq, lq, Oq.indirectHangs, Oq.storagePullBreaks, Oq.splitPassBreaks, Oq.framesAhead, Oq.instancedTerrainSlow)))
+       }(qq, Eq, gq, Yq, lq, Oq), lE, `${Pq.f.RenderSurfaceUnusable}: the renderer didn't open in ${lE/1e3} s`, xE)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L368-L380` → after: `L990-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L990-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L990-L997) · [Before (L368-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L368-L380)

```diff
- 
-     function Wz(zz, uz, bz) {
-       var Ez, nz;
-       const iz = gz(zz),
-         {
-           functions: lz
-         } = iz,
-         Mz = Sz(bz),
-         tz = null !== (Ez = Mz.find((zz => zz.topLevel && !zz.isProperty))) && void 0 !== Ez ? Ez : Mz.find((zz => zz.topLevel)),
-         Hz = yz(uz),
-         Oz = tz ? Dz(lz, tz.name) : void 0,
-         pz = null !== (nz = void 0 !== Oz && !Mz.some((zz => zz.topLevel && zz.name === Hz)) ? Oz : Dz(lz, Hz)) && void 0 !== nz ? nz : Oz;
-       return pz ? ez(zz, iz, pz, Mz, bz) : Qz(zz, bz)
+     async function mE(qq, Eq, gq, Yq, lq, Oq) {
+       if ("function" !== typeof qq.Hmq) throw new Error("this core has no set_renderer");
+       const mq = await OE(Eq, EE, gq, lq, Yq, Oq);
+       try {
+         qq.Hmq(mq)
+       } catch (xq) {
+         throw xE(mq), xq
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L383-L391` → after: `L1000-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1000-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1000-L1003) · [Before (L383-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L383-L391)

```diff
-     function ez(zz, uz, bz, Ez, nz) {
-       let {
-         functions: iz,
-         hasErrors: lz
-       } = uz;
-       const Mz = iz.some((zz => zz.from > bz.from && zz.to <= bz.to && !Ez.some((uz => uz.name === zz.name))));
-       if (lz && Mz) return null;
-       const tz = /^\s*(?:\/\/|\/\*)/.test(nz) ? bz.commentFrom : bz.from;
-       return zz.slice(0, tz) + Gz(zz.slice(tz, bz.to), nz.trim(), az(zz.slice(bz.to))) + zz.slice(bz.to)
+     function xE(qq) {
+       try {
+         qq.free()
+       } catch {}
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L393-L415` → after: `L1005-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1005-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1005-L1020) · [Before (L393-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L393-L415)

```diff
- 
-     function jz(zz, uz, bz, Ez, nz) {
-       const iz = Ez.trim();
-       if (iz.includes("\n") || !iz.endsWith("{")) return null;
-       const lz = gz(zz),
-         Mz = lz.functions.find((Ez => Ez.topLevel && Iz(zz, Ez.from) <= uz && bz < Ez.to && !zz.slice(Ez.from, bz).includes("\n"))),
-         tz = gz(nz),
-         Hz = tz.functions.filter((zz => zz.topLevel)),
-         Oz = !tz.hasErrors && (1 === Hz.length || Hz.some((zz => zz.name === (null === Mz || void 0 === Mz ? void 0 : Mz.name)))),
-         pz = 1 === Hz.length && Hz[0].name !== (null === Mz || void 0 === Mz ? void 0 : Mz.name) ? Hz[0].name : void 0,
-         dz = void 0 === pz ? void 0 : lz.functions.find((zz => zz.topLevel && zz.name === pz));
-       return Mz && Oz ? ez(zz, lz, null !== dz && void 0 !== dz ? dz : Mz, tz.functions, nz) : function(zz, uz, bz, Ez, nz) {
-         const iz = vz().createSourceFile("worldCode.js", zz, vz().ScriptTarget.Latest, !0, vz().ScriptKind.JS),
-           lz = iz.statements.find((Ez => {
-             const nz = Ez.getStart(iz);
-             return Iz(zz, nz) <= uz && bz < Ez.getEnd() && !zz.slice(nz, bz).includes("\n")
- ... (7 more removed lines; see GitHub link above)
+   },
+   40503: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Yq
+     });
+     const Yq = {
+       extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object", "OES_element_index_uint", "OES_standard_derivatives"],
+       limits: {
+         MAX_VERTEX_ATTRIBS: 16,
+         MAX_TEXTURE_SIZE: 2048,
+         MAX_TEXTURE_IMAGE_UNITS: 8,
+         MAX_VARYING_VECTORS: 8,
+         MAX_VERTEX_UNIFORM_VECTORS: 128,
+         MAX_FRAGMENT_UNIFORM_VECTORS: 34
+       },
+       vertexHighFloatBits: 23
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L419-L432` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1032-L1033) · [Before (L419-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L419-L432)

```diff
-       let bz = uz;
-       for (; bz > 0 && (" " === zz[bz - 1] || "\t" === zz[bz - 1]);) bz--;
-       return 0 === bz || "\n" === zz[bz - 1] ? bz : uz
-     }
- 
-     function Bz(zz, uz, bz) {
-       const Ez = uz.trim().toLowerCase();
-       if ("" !== zz.trim() && ("top" === Ez || "start" === Ez)) return `${bz.trim()}\n\n${zz.replace(/^\s+/,"")}`;
-       const nz = "end" === Ez ? void 0 : Dz(Sz(zz), yz(uz));
-       return nz ? `${zz.slice(0,nz.to)}\n\n${bz.trim()}${zz.slice(nz.to)}` : Qz(zz, bz)
-     }
- 
-     function Cz(zz) {
-       return [...new Set(Sz(zz).filter((zz => zz.topLevel)).map((zz => zz.name)))]
+       const gq = null === Eq ? void 0 : Yq.b.get(Eq);
+       return "all" === gq || "webgl" === gq && "webgpu" !== qq.backend ? Eq : null
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L438-L444` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1037) · [Before (L438-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L438-L444)

```diff
-       let uz = zz.replace(/\s+/g, " ").trim();
-       if ("" === uz || kz.test(uz)) return null;
-       if (uz.length > Yz) {
-         const zz = uz.slice(0, Yz);
-         uz = `${zz.slice(0,Math.max(zz.lastIndexOf(" "),60)).trimEnd()}\u2026`
-       }
-       return uz.charAt(0).toUpperCase() + uz.slice(1)
+       return "software_adapter" === qq.reason ? null : qq.adapter
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L448-L451` → after: `L1040-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1040-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1040-L1042) · [Before (L448-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L448-L451)

```diff
-     function bu(zz) {
-       var uz, bz;
-       const Ez = null === (uz = /\(([^)]*)\)/.exec(zz)) || void 0 === uz || null === (bz = uz[1].split(",")[1]) || void 0 === bz ? void 0 : bz.trim();
-       return Ez && /^[A-Za-z_$][\w$]*$/.test(Ez) ? [...zz.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((zz => zz[2].split(",").some((zz => zz.trim() === Ez)) ? [zz[1]] : [])) : []
+     function xq(qq, Eq) {
+       const gq = (0, Yq.s)();
+       return null === gq ? null : (0, Yq.f)(mq(qq), gq, Eq ? Yq.m : Yq.j)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L455-L489` → after: `L1046-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1046-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1046-L1064) · [Before (L455-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L455-L489)

```diff
-       const bz = new Set,
-         Ez = new Set,
-         nz = new Set,
-         iz = Object.values(zz).map((zz => {
-           const uz = Sz(zz),
-             bz = uz.filter((zz => "playerCommand" === zz.name)).map((uz => zz.slice(uz.from, uz.to)));
-           return {
-             text: zz,
-             found: uz,
-             own: bz
-           }
-         })),
-         lz = new Set(iz.flatMap((zz => {
-           let {
-             own: uz
-           } = zz;
- ... (19 more removed lines; see GitHub link above)
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.k;
+       const Yq = Oq(qq, Eq);
+       return null !== Yq && "webgl" === qq.backend && gq(Yq) ? null : Yq
+     }
+   },
+   40508: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => lq,
+       d: () => uq,
+       g: () => mq,
+       k: () => Aq
+     });
+     var Yq = gq(36356);
+     class lq extends Error {
+       constructor(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+ ... (3 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L492-L521` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1067) · [Before (L492-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L492-L521)

```diff
-     const nu = new Map([
-       ["onPlayerJoin", "When a player joins"],
-       ["onPlayerLeave", "When a player leaves"],
-       ["onPlayerChat", "When a player chats"],
-       ["playerCommand", "When a player types a /command"],
-       ["tick", "Runs all the time"],
-       ["onPlayerJump", "When a player jumps"],
-       ["onPlayerClick", "When a player clicks"],
-       ["onPlayerAttack", "When a player attacks"],
-       ["onPlayerChangeBlock", "When a player changes a block"],
-       ["onPlayerAttemptChangeBlock", "Before a player changes a block"],
-       ["onPlayerDamagingOtherPlayer", "When a player hits another player"],
-       ["onPlayerKilledOtherPlayer", "When a player defeats another player"],
-       ["onPlayerDamagingMob", "When a player hits a mob"],
-       ["onPlayerKilledMob", "When a player defeats a mob"],
-       ["onMobDamagingPlayer", "When a mob hits a player"],
- ... (14 more removed lines; see GitHub link above)
+     const Oq = new WeakMap;
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L524-L526` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1070) · [Before (L524-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L524-L526)

```diff
-       const uz = nu.get(zz);
-       if (uz) return uz;
-       return `When: ${zz.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
+       return Oq.has(qq)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L529-L530` → after: `L1073-L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1073-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1073-L1074) · [Before (L529-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L529-L530)

```diff
-     function lu(zz) {
-       return Array.isArray(zz) && zz.every((zz => "string" === typeof zz))
+     function xq(qq, Eq) {
+       Oq.has(qq) || Oq.set(qq, Eq)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L535-L540` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1077-L1078) · [Before (L535-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L535-L540)

```diff
-     function Hu(zz) {
-       var uz, bz;
-       const Ez = zz.trim().split(/\s+/).length,
-         nz = new Set((null !== (uz = zz.match(Mu)) && void 0 !== uz ? uz : []).map((zz => zz.toLowerCase().replace(/s$/, "")))).size,
-         iz = (null !== (bz = zz.match(tu)) && void 0 !== bz ? bz : []).length;
-       return nz >= 2 && iz >= 2 || Ez >= 30 && iz >= 3
+     function Aq(qq, Eq) {
+       return !!(0, Yq.i)(Eq) && (xq(qq, Eq), !0)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L543-L1025` → after: `L1085-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1085-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1085-L1089) · [Before (L543-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L543-L1025)

```diff
-     function Ou(zz) {
-       const uz = zz.split(/\n|\|/).map((zz => zz.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((zz => "" !== zz)).slice(0, 5).map((zz => zz.length > 90 ? `${zz.slice(0,89).trimEnd()}\u2026` : zz));
-       return uz.length >= 2 ? uz : []
-     }
-     var pu = bz(4629);
- 
-     function du(zz) {
-       return zz.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
-     }
- 
-     function Fu(zz) {
-       const uz = new Set;
-       for (const bz of zz.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) uz.add(bz[1]);
-       for (const bz of zz.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) uz.add(bz[1]);
-       return [...uz]
-     }
- ... (467 more removed lines; see GitHub link above)
+     function uq(qq, Eq, gq) {
+       let mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
+       return Oq.has(qq) ? Promise.reject(new lq(Eq, Oq.get(qq), !0)) : new Promise(((Oq, Aq) => {
+         const uq = gq => {
+             xq(qq, gq), Nq(), Aq(new lq(Eq, gq))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1027-L1043` → after: `L1091-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1091-L1092) · [Before (L1027-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1027-L1043)

```diff
-           required: []
-         },
-         annotations: Xu,
-         _meta: {
-           isLookup: !0
-         }
-       }, {
-         name: "view_prefab",
-         title: "Look at a ready-made game",
-         description: "Shows one prefab in full: how it plays, every setting with its default, and the functions to replace by name to change it",
-         inputSchema: {
-           type: "object",
-           properties: {
-             name: {
-               type: "string",
-               description: "The prefab's name, e.g. parkour"
- ... (1 more removed lines; see GitHub link above)
+           Bq = qq => {
+             qq instanceof WebAssembly.RuntimeError ? uq(qq) : (Nq(), Aq(qq))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1045-L1062` → after: `L1094-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1094-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1094-L1109) · [Before (L1045-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1045-L1062)

```diff
-           required: ["name"]
-         },
-         annotations: Xu,
-         _meta: {
-           isLookup: !0
-         }
-       }, {
-         name: "view_errors",
-         title: "Look at errors",
-         description: "Shows every error their world showed recently, not only the newest few",
-         inputSchema: {
-           type: "object",
-           properties: {},
-           required: []
-         },
-         annotations: Xu,
- ... (2 more removed lines; see GitHub link above)
+           Wq = cq.map((qq => {
+             let [Eq, gq] = qq;
+             return [Eq, qq => {
+               const Eq = gq(qq);
+               (0, Yq.i)(Eq) && uq(Eq)
+             }]
+           })),
+           Nq = () => {
+             for (const [qq, Eq] of Wq) null === mq || void 0 === mq || mq.removeEventListener(qq, Eq)
+           };
+         for (const [qq, Eq] of Wq) null === mq || void 0 === mq || mq.addEventListener(qq, Eq);
+         let aq;
+         try {
+           aq = gq()
+         } catch (Vq) {
+           return void Bq(Vq)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1064-L1068` → after: `L1111-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1111-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1111-L1114) · [Before (L1064-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1064-L1068)

```diff
-       }];
- 
-     function su(zz) {
-       var uz;
-       return !0 === (null === (uz = ru(zz)._meta) || void 0 === uz ? void 0 : uz.isLookup)
+         aq.then((qq => {
+           Nq(), Oq(qq)
+         }), Bq)
+       }))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1072-L1074` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1153) · [Before (L1072-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1072-L1074)

```diff
-       const uz = fu.find((uz => uz.name === zz));
-       if (!uz) throw new Error(`No AI Helper tool ${zz}`);
-       return uz
+       dq = qq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1076-L1079` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1155) · [Before (L1076-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1076-L1079)

```diff
-     const ou = fu.map((zz => zz.name)).filter((zz => "plan" !== zz && "remember" !== zz)).join("|"),
-       Nu = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       vu = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${ou})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
-       xu = /[.!?](?=[ \t]|[A-Z]|$)|\n|$/g;
+     let Hq = !1;
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1081-L1083` → after: `L1157-L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1157-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1157-L1158) · [Before (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1081-L1083)

```diff
-     function Ju(zz) {
-       const uz = zz.trim();
-       return vu.some((zz => zz.test(uz)))
+     function oq() {
+       Hq = !0
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1086-L1099` → after: `L1161-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1161-L1162) · [Before (L1086-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1086-L1099)

```diff
-     function Au(zz, uz) {
-       const bz = zz.replace(Nu, "");
-       return uz ? function(zz) {
-         const uz = zz.indexOf("```"),
-           bz = -1 === uz ? zz : zz.slice(0, uz);
-         let Ez = -1,
-           nz = -1,
-           iz = 0;
-         for (const lz of bz.matchAll(xu)) {
-           const zz = lz.index + lz[0].length;
-           Ju(bz.slice(iz, zz)) && (Ez = -1 === Ez ? iz : Ez, nz = zz), iz = zz
-         }
-         return -1 === nz ? zz : "" !== bz.slice(nz).trim() ? zz.slice(nz).trimStart() : `${zz.slice(0,Ez).trimEnd()}\n${zz.slice(bz.length)}`.trim()
-       }(bz) : "" !== bz.trim() ? bz : zz
+     function Pq() {
+       return Hq
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1101-L1102` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1164) · [Before (L1101-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1101-L1102)

```diff
-     const Tu = /^(?=[\s\S]{200})[^\n]*(?:\\n[^\n]*){3}$/,
-       Lu = new Set(["content", "code"]);
+     let Qq = !1;
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1104-L1108` → after: `L1166-L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1166-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1166-L1167) · [Before (L1104-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1104-L1108)

```diff
-     function Pu(zz) {
-       const uz = "string" === typeof zz ? zz.split(/[./:]/).pop() : void 0;
-       return function(zz) {
-         return fu.some((uz => uz.name === zz))
-       }(uz) ? uz : null
+     function yq() {
+       Qq = !0
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1111-L1140` → after: `L1170-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1170-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1170-L1171) · [Before (L1111-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1111-L1140)

```diff
-     function Gu(zz, uz) {
-       return bz => {
-         const Ez = [];
-         let nz;
-         for (const tz of bz.matchAll(zz)) {
-           var iz;
-           const zz = Pu(tz[1]);
-           if (null === zz) continue;
-           const Hz = {};
-           for (const bz of tz[2].matchAll(uz)) {
-             var lz, Mz;
-             Hz[null !== (lz = bz[1]) && void 0 !== lz ? lz : bz[2]] = null !== (Mz = bz[3]) && void 0 !== Mz ? Mz : bz[4]
-           }(null === (iz = nz) || void 0 === iz ? void 0 : iz.call.name) === zz && "" === bz.slice(nz.index + nz.call.source.length, tz.index).trim() ? Ez[Ez.length - 1] = {
-             call: {
-               name: zz,
-               args: Hz,
- ... (14 more removed lines; see GitHub link above)
+     function tq() {
+       return Qq
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1143-L1144` → after: `L1174-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1174-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1174-L1175) · [Before (L1143-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1143-L1144)

```diff
-     function au(zz) {
-       return zz.replace(/\\(["\\nt])/g, ((zz, uz) => "n" === uz ? "\n" : "t" === uz ? "\t" : uz))
+     function rq() {
+       return dq
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1148-L1157` → after: `L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1180) · [Before (L1148-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1148-L1157)

```diff
-       let uz = null !== zz && void 0 !== zz ? zz : {};
-       if ("string" === typeof uz) try {
-         uz = JSON.parse("" === uz ? "{}" : uz)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof uz || null === uz) return null;
-       const bz = {};
-       for (const [Ez, nz] of Object.entries(uz)) "string" === typeof nz ? bz[Ez] = Lu.has(Ez) && Tu.test(nz) && !nz.includes("\n") ? au(nz) : nz : "boolean" === typeof nz || "number" === typeof nz ? bz[Ez] = String(nz) : "object" !== typeof nz || null === nz || Array.isArray(nz)  … [truncated]
-       return bz
+       vq = qq, (0, mq.e)(qq)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1160-L1170` → after: `L1184-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1184-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1184-L1185) · [Before (L1160-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1160-L1170)

```diff
-     function mu(zz, uz) {
-       let bz = 0,
-         Ez = !1;
-       for (let nz = uz; nz < zz.length; nz++) {
-         const uz = zz[nz];
-         if (Ez) "\\" === uz ? nz++ : '"' === uz && (Ez = !1);
-         else if ('"' === uz) Ez = !0;
-         else if ("{" === uz) bz++;
-         else if ("}" === uz && (bz--, 0 === bz)) return nz + 1
-       }
-       return null
+     function bq() {
+       xq.k.setItem(nq, !0)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1173-L1180` → after: `L1188-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1188-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1188-L1189) · [Before (L1173-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1173-L1180)

```diff
-     function qu(zz, uz) {
-       let bz = zz;
-       for (const {
-           call: Ez,
-           index: nz
-         }
-         of uz) bz = bz.slice(0, nz) + " ".repeat(Ez.source.length) + bz.slice(nz + Ez.source.length);
-       return bz
+     function iq() {
+       return !0 === xq.k.getItem(nq)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1199-L1218` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1192) · [Before (L1199-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1199-L1218)

```diff
-     function gu(zz) {
-       const uz = [];
-       for (const nz of zz.matchAll(cu)) {
-         const iz = Pu(nz[1]),
-           lz = nz.index + nz[0].length,
-           Mz = mu(zz, lz),
-           tz = null === Mz ? null : Vu(zz.slice(lz, Mz));
-         if (null !== iz && null !== Mz && null !== tz) {
-           var bz, Ez;
-           const lz = null !== (bz = null === (Ez = zz.slice(Mz).match(/^\s*<\|call\|>/)) || void 0 === Ez ? void 0 : Ez[0]) && void 0 !== bz ? bz : "";
-           uz.push({
-             call: {
-               name: iz,
-               args: tz,
-               source: zz.slice(nz.index, Mz + lz.length)
-             },
- ... (4 more removed lines; see GitHub link above)
+     function Zq() {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1222-L1248` → after: `L1196-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1196-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1196-L1197) · [Before (L1222-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1222-L1248)

```diff
-     function Su(zz) {
-       var uz, bz, Ez, nz;
-       let iz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       if ("object" !== typeof zz || null === zz) return [];
-       const lz = zz;
-       if (Array.isArray(lz.tool_calls)) return lz.tool_calls.flatMap((zz => Su(zz, !0)));
-       if (void 0 !== lz.tool_call) return Su(lz.tool_call, !0);
-       if (void 0 !== lz.function) return Su(lz.function, !0);
-       const Mz = null !== (uz = null !== (bz = null !== (Ez = null !== (nz = lz.arguments) && void 0 !== nz ? nz : lz.params) && void 0 !== Ez ? Ez : lz.param) && void 0 !== bz ? bz : lz.args) && void 0 !== uz ? uz : lz.input,
-         tz = Pu(lz.tool);
-       if (null !== tz) {
-         const {
-           tool: zz,
-           ...uz
-         } = lz, bz = Vu(null !== Mz && void 0 !== Mz ? Mz : uz);
-         return null === bz ? [] : [{
- ... (11 more removed lines; see GitHub link above)
+     function fq() {
+       return null === aq && (xq.i.removeItem("wasmLastPick"), xq.i.removeItem("wasmGuessVerdict"), (0, mq.k)(), aq = (0, Aq.y)(uq.h).then((qq => (null === qq || (0, Aq.p)(qq) || (Vq = Bq.d[qq.backend], Oq.b.followGameGpu("webgpu" === qq.backend ? qq.adapter : null), "webgpu" ===  … [truncated]
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1251-L1270` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1200) · [Before (L1251-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1251-L1270)

```diff
-     function yu(zz) {
-       const uz = [];
-       let bz = zz.indexOf("{");
-       for (; - 1 !== bz;) {
-         const Ez = mu(zz, bz);
-         let nz = [];
-         if (null !== Ez) try {
-           nz = Su(JSON.parse(zz.slice(bz, Ez)))
-         } catch {}
-         if (null !== Ez && nz.length > 0) {
-           const iz = zz.slice(bz, Ez);
-           uz.push(...nz.map((zz => ({
-             call: {
-               ...zz,
-               source: iz
-             },
- ... (4 more removed lines; see GitHub link above)
+     function Mq() {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1275-L1279` → after: `L1205-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1205-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1205-L1208) · [Before (L1275-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1275-L1279)

```diff
-       if (Array.isArray(zz)) return `[${zz.map(Du).join(", ")}]`;
-       if ("object" === typeof zz && null !== zz) {
-         return `{${Object.entries(zz).map((zz=>{let[uz,bz]=zz;return`${JSON.stringify(uz)}: ${Du(bz)}`})).join(", ")}}`
-       }
-       return JSON.stringify(zz)
+       return qq ? qq.load() : Promise.resolve().then((function() {
+         var qq = new Error("Cannot find module '@bloxd/wasm/client'");
+         throw qq.code = "MODULE_NOT_FOUND", qq
+       })).then((qq => qq.bloxdWasmClient))
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1335` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1212) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1335)

```diff
-       return "deepseek" === zz ? "simple" : zz
+       xq.i.setItem(Nq, qq)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1337-L1369` → after: `L1214-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1214-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1214-L1218) · [Before (L1337-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1337-L1369)

```diff
-     const zb = /<\|[a-z_]+\|>/g,
-       ub = /^[ \t]*`{1,2}[ \t]*$/gm,
-       bb = /^[ \t]*<\/(?:tool_call|invoke|function|param(?:eter)?)>[ \t]*$/gm,
-       Eb = /^[ \t]*(?:Wait|Oops|Hmm)\b[^\n]*\b(?:redo|re-do|the format|let me (?:fix|try|rewrite|write) (?:that|it|this))\b[^\n]*$/gim,
-       nb = /```[\w-]*/g,
-       ib = /^[\s[\],]*$/,
-       lb = {
-         use_prefab: 0,
-         add_world_code: 1,
-         write_file: 2,
-         edit_file: 3,
-         replace_function: 4,
-         insert_code: 5,
-         edit_code_in_place: 6,
-         export_game: 7,
-         switch_to_world_code: 8,
- ... (17 more removed lines; see GitHub link above)
+     async function Sq() {
+       if (null === uq.h) return Tq(null);
+       const qq = xq.i.getItem(Nq);
+       let Eq = "none" === qq ? null : "webgl";
+       return null !== qq && "none" !== qq && ("string" === typeof qq && void 0 !== (0, Yq.b)(uq.h, qq) ? Eq = qq : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(qq)}, is none of this client's: guessing WebGL2's`)), null === Eq ? null : uq.h[Eq]()
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1372-L1378` → after: `L1223-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1223-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1223-L1235) · [Before (L1372-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1372-L1378)

```diff
-     function tb(zz, uz) {
-       const bz = Pu(zz),
-         Ez = Vu(uz);
-       return null === bz || null === Ez ? null : {
-         name: bz,
-         args: Ez
-       }
+     function Lq() {
+       return pq ??= fq().then((async qq => {
+         var Eq;
+         const gq = null !== qq && !(0, Aq.p)(qq),
+           Yq = {
+             indirectHangs: gq && await (0, Aq.z)(qq, window.location.search),
+             storagePullBreaks: gq && (0, Aq.G)(qq, window.location.search),
+             splitPassBreaks: gq && (0, Aq.E)(qq, window.location.search),
+             framesAhead: (0, Aq.h)(window.location.search),
+             instancedTerrainSlow: gq && (0, Aq.A)(qq, null !== (Eq = (0, cq.g)(qq, !1)) && void 0 !== Eq ? Eq : (0, lq.b)())
+           };
+         return Gq = Yq.indirectHangs, Yq
+       })), pq
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1381-L1393` → after: `L1238-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1238-L1239) · [Before (L1381-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1381-L1393)

```diff
-     function Hb(zz, uz) {
-       const bz = [];
-       for (const Ez of function(zz) {
-           const uz = ku(zz),
-             bz = Yu.filter((zz => zz !== uz));
-           return [Cu[uz], ...zz === uz ? [] : [Cu[zz]], ...bz.map((zz => Cu[zz])), gu, yu]
-         }(uz)) bz.push(...Ez(qu(zz, bz)));
-       return bz.map((zz => {
-         let {
-           call: uz
-         } = zz;
-         return uz
-       }))
+     function Jq() {
+       return Gq
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1395-L1397` → after: `L1241-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1241-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1241-L1249) · [Before (L1395-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1395-L1397)

```diff
- 
-     function Ob(zz, uz) {
-       return Hb(zz, uz).sort(((zz, uz) => lb[zz.name] - lb[uz.name]))
+   },
+   40548: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Yq
+     });
+     const Yq = {
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1399-L1423` → after: `L1251-L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1251-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1251-L1266) · [Before (L1399-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1399-L1423)

```diff
- 
-     function pb(zz) {
-       return function(zz) {
-         const uz = [...zz.matchAll(nb)],
-           bz = [];
-         let Ez = 0;
-         for (; Ez < uz.length;) {
-           const nz = uz[Ez],
-             iz = uz.at(Ez + 1);
-           void 0 !== iz && "```" === iz[0] ? (ib.test(zz.slice(nz.index + nz[0].length, iz.index)) && bz.push({
-             from: nz.index,
-             to: iz.index + iz[0].length
-           }), Ez += 2) : (bz.push({
-             from: nz.index,
-             to: nz.index + nz[0].length
-           }), Ez++)
- ... (9 more removed lines; see GitHub link above)
+   },
+   40542: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => lq,
+       h: () => Yq
+     });
+     const Yq = {
+         webgpu: async () => (await gq.e(8).then((() => gq(42992)))).bloxdWasmWebgpu,
+         webgl: async () => (await gq.e(6).then((() => gq(43003)))).bloxdWasmWebgl,
+         webgl1: async () => (await gq.e(7).then((() => gq(43016)))).bloxdWasmWebgl1
+       },
+       lq = async () => (await gq.e(5).then((() => gq(43032)))).compileAnimationPackInWasm
+   },
+   40559: (qq, Eq, gq) => {
+     function Yq() {
+       return gq(40565)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1426-L1427` → after: `L1269-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1269-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1269-L1270) · [Before (L1426-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1426-L1427)

```diff
-     function db(zz) {
-       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(zz)
+     function lq() {
+       return gq(40573)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1446-L1454` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1274) · [Before (L1446-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1446-L1454)

```diff
-       var uz;
-       const bz = vz().createSourceFile("worldCode.js", zz, vz().ScriptTarget.Latest, !0, vz().ScriptKind.JS),
-         {
-           parseDiagnostics: Ez
-         } = bz;
-       return {
-         file: bz,
-         hasErrors: (null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.length) && void 0 !== uz ? uz : 0) > 0
-       }
+       return ["pl", "ru", "tr", "uk", "vi"].includes(qq)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1458` → after: `L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1291) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1458)

```diff
-       return void 0 !== zz && (vz().isFunctionExpression(zz) || vz().isArrowFunction(zz))
+       return qq.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1461-L1472` → after: `L1295-L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1295-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1295-L1299) · [Before (L1461-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1461-L1472)

```diff
-     function wb(zz) {
-       if (vz().isFunctionDeclaration(zz) && zz.name) return {
-         TZ: zz,
-         nameNode: zz.name
-       };
-       if (vz().isVariableStatement(zz) && 1 === zz.declarationList.declarations.length) {
-         const uz = zz.declarationList.declarations[0],
-           bz = uz.initializer && Xb(uz.initializer);
-         if (vz().isIdentifier(uz.name) && Kb(bz)) return {
-           TZ: bz,
-           nameNode: uz.name
-         }
+     function xq() {
+       if (null === mq) try {
+         qq = (0, Yq.getBrowserName)(), Eq = (0, Yq.getBrowserVersion)(), gq = (0, Yq.getOperatingSystem)(), lq = (0, Yq.getOperatingSystemVersion)(), mq = `${qq.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===Eq?"unknown":Oq(Eq)}-${gq}${void 0===lq?"":`_${Oq(lq)}`}`
+       } catch (xq) {
+         console.warn("The user agent couldn't be read for its browser code", xq), mq = "unknown"
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1474-L1494` → after: `L1301-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1301-L1302) · [Before (L1474-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1474-L1494)

```diff
-       const uz = fb(zz),
-         bz = uz && Xb(uz.value);
-       return uz && Kb(bz) ? {
-         TZ: bz,
-         nameNode: uz.name
-       } : null
-     }
- 
-     function Xb(zz) {
-       return vz().isParenthesizedExpression(zz) ? Xb(zz.expression) : zz
-     }
- 
-     function fb(zz) {
-       return vz().isExpressionStatement(zz) && vz().isBinaryExpression(zz.expression) && zz.expression.operatorToken.kind === vz().SyntaxKind.EqualsToken && vz().isIdentifier(zz.expression.left) ? {
-         name: zz.expression.left,
-         value: zz.expression.right
- ... (5 more removed lines; see GitHub link above)
+       var qq, Eq, gq, lq;
+       return mq
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1497-L1500` → after: `L1305-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1305-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1305-L1345) · [Before (L1497-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1497-L1500)

```diff
-     function rb(zz) {
-       if (!vz().isVariableStatement(zz)) return null;
-       const uz = zz.declarationList.declarations.find((zz => vz().isIdentifier(zz.name) && "CONFIG" === zz.name.text));
-       return null !== uz && void 0 !== uz && uz.initializer && vz().isObjectLiteralExpression(uz.initializer) ? uz.initializer : null
+     function Aq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
+       const Eq = `WGPU-${xq()}`,
+         Yq = (qq, Yq) => {
+           const {
+             reason: Oq,
+             message: mq
+           } = Yq, xq = {
+             pipeline: null !== qq && void 0 !== qq ? qq : "",
+             reason: String(Oq),
+             browserMessage: String(mq)
+           };
+           Promise.all([gq.e(263), gq.e(87)]).then((() => gq(40687))).then((qq => {
+             let {
+               reportCrash: gq
+             } = qq;
+ ... (25 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1502-L16034` → after: `L1347-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1347-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1347-L1363) · [Before (L1502-L16034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L1502-L16034)

```diff
- 
-     function ob(zz, uz) {
-       return uz.statements.map((bz => {
-         var Ez;
-         const nz = function(zz, uz, bz) {
-             let Ez = bz.getStart(uz);
-             for (const iz of (null !== (nz = vz().getLeadingCommentRanges(zz, bz.getFullStart())) && void 0 !== nz ? nz : []).reverse()) {
-               var nz;
-               if (/\n[^\S\n]*\n/.test(zz.slice(iz.end, Ez))) break;
-               Ez = iz.pos
-             }
-             return Ez
-           }(zz, uz, bz),
-           iz = wb(bz);
-         if (null !== iz && void 0 !== iz && iz.nameNode) {
-           const zz = iz.nameNode.text;
- ... (14517 more removed lines; see GitHub link above)
+   },
+   40495: (qq, Eq, gq) => {
+     qq.exports = gq.p + "static/media/bloxd_wasm_models_bg.273d3ef33ab63e5ae007.wasm"
+   },
+   40493: (qq, Eq, gq) => {
+     qq.exports = gq.p + "static/media/bloxd_wasm_workers_bg.b1eeed671303ca766c1e.wasm"
+   },
+   40565: (qq, Eq, gq) => {
+     qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   },
+   40573: (qq, Eq, gq) => {
+     qq.exports = gq.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   },
+   40490: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => lq,
+ ... (1 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16036-L16085` → after: `L1365-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1365-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1365-L1368) · [Before (L16036-L16085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L16036-L16085)

```diff
-     return (0, lz.jsx)(bH, {
-       step: jE,
-       onPrevious: "aiPanel" === jE ? Uz : void 0,
-       children: nn
-     })
-   })),
-   Ip = jp
- }, 38972: (zz, uz, bz) => {
-   bz.d(uz, {
-     d: () => tz,
-     f: () => iz,
-     g: () => nz
-   });
-   const Ez = 6e3;
- 
-   function nz(zz, uz) {
- ... (34 more removed lines; see GitHub link above)
+     const Yq = {
+       name: "bloxd_wasm_workers",
+       url: function() {
+         return new gq.U(gq(40493))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16087-L16115` → after: `L1370-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L1370-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/88.js#L1370-L1374) · [Before (L16087-L16115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/88.js#L16087-L16115)

```diff
-       nz.push(...iz.values()), iz = Mz
-     }
-     return nz.push(...iz.values()), nz.sort(((zz, uz) => zz.z0 - uz.z0 || zz.x0 - uz.x0)).map((zz => `x${lz(zz.x0,zz.x1)} z${lz(zz.z0,zz.z1)} ${zz.name}`))
-   }
- 
-   function tz(zz, uz, bz, nz) {
-     let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ez;
-     const tz = [zz[0] + uz - 1, zz[1] + uz - 1, zz[2] + uz - 1],
-       Hz = null !== nz && nz.every(((uz, bz) => Math.floor(uz) >= zz[bz] && Math.floor(uz) <= tz[bz])),
-       Oz = [`The chunk from ${zz.join(" ")} to ${tz.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-     null !== nz && Oz.push(`The player's feet are at ${nz.map(Math.floor).join(" ")}, ${Hz?"in this chunk":"outside this chunk"}.`);
-     const pz = [];
-     for (let Ez = zz[1]; Ez <= tz[1]; Ez++) {
-       const nz = Mz(zz, uz, Ez, bz).join("; "),
-         iz = pz[pz.length - 1];
-       (null === iz || void 0 === iz ? void 0 : iz.boxes) === nz ? iz.to = Ez : pz.push({
- ... (13 more removed lines; see GitHub link above)
+     };
+     const lq = {
+       name: "bloxd_wasm_models",
+       url: function() {
+         return new gq.U(gq(40495))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/89.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/89.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L4` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L4-L23) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L4)

```diff
-   40479: (zz, uz, bz) => {
+   41222: (qq, Eq, gq) => {
+     async function Yq(qq, Eq) {
+       const [{
+         clientSideServerUrls: Yq
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: lq
+       }, {
+         gameBridge: Oq
+       }] = await Promise.all([Promise.resolve().then((() => gq(1195))), Promise.resolve().then((() => gq(1109))), Promise.resolve().then((() => gq(1904)))]), mq = Oq.latest("connectedGame").websocketUrl;
+       if (!mq) throw new Error("AI Helper: not connected to a game server");
+       const xq = `${Yq.getHttpUrlFromWebSocketUrl(mq)}${qq}`;
+       return await lq(xq, Eq, {
+         retries: 0
+       })
+     }
+     gq.r(Eq), gq.d(Eq, {
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L6-L129` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L25-L26) · [Before (L6-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L6-L129)

```diff
-       DOCS_AGENT_PART_CHARS: () => qu.e,
-       DOCS_LLMS_FULL_TXT_PATH: () => qu.g,
-       DOCS_LLMS_TXT_PATH: () => qu.i,
-       DOCS_LLMS_TXT_URL: () => qu.k,
-       ROOT_LLMS_TXT_PATH: () => qu.n,
-       allGamemodeSettings: () => Ez.b,
-       arcadeModeStaticConfig: () => Rz.b,
-       arenaStaticConfig: () => nu,
-       backroomsStaticConfig: () => Eu.c,
-       battleBoxStaticConfig: () => tu,
-       bedwarsStaticConfig: () => Lz.b,
-       bloxdAggregatorConfig: () => Mz.c,
-       bloxdPreprodAggregatorConfig: () => tz.c,
-       bloxdStagingAggregatorConfig: () => Hz.e,
-       bridgeBattleStaticConfig: () => gz.c,
-       captureTheFlagStaticConfig: () => Fu,
- ... (108 more removed lines; see GitHub link above)
+       WorldCodeAiPanel: () => CB,
+       default: () => IB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L131` → after: `L28-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L28-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L28-L542) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L131)

```diff
-     var Ez = bz(738);
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(1070);
+ 
+     function xq(qq) {
+       let {
+         title: Eq,
+         children: gq,
+         isCalm: lq = !1,
+         isElsewhere: xq = !1,
+         defaultOpen: Aq = !1,
+         isOpen: cq,
+         onToggle: uq,
+         className: Bq
+       } = qq;
+ ... (499 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L135-L187` → after: `L546-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L546-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L546-L595) · [Before (L135-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L135-L187)

```diff
-       return null !== (uz = null === (bz = (0, Ez.i)(zz)) || void 0 === bz ? void 0 : bz.defaultListedVariation) && void 0 !== uz ? uz : zz
-     }
-     var iz = bz(987),
-       lz = bz(1021),
-       Mz = bz(731),
-       tz = bz(725),
-       Hz = bz(727),
-       Oz = bz(717),
-       pz = bz(708),
-       dz = bz(747),
-       Fz = bz(773),
-       Zz = bz(751),
-       Rz = bz(755),
-       Kz = bz(761),
-       wz = bz(766),
-       Xz = bz(776),
- ... (37 more removed lines; see GitHub link above)
+       const Yq = qq.trim().split(/\s+/).length,
+         lq = new Set((null !== (Eq = qq.match(cE)) && void 0 !== Eq ? Eq : []).map((qq => qq.toLowerCase().replace(/s$/, "")))).size,
+         Oq = (null !== (gq = qq.match(uE)) && void 0 !== gq ? gq : []).length;
+       return lq >= 2 && Oq >= 2 || Yq >= 30 && Oq >= 3
+     }
+ 
+     function WE(qq) {
+       const Eq = qq.split(/\n|\|/).map((qq => qq.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((qq => "" !== qq)).slice(0, 5).map((qq => qq.length > 90 ? `${qq.slice(0,89).trimEnd()}\u2026` : qq));
+       return Eq.length >= 2 ? Eq : []
+     }
+     var NE = gq(4701);
+ 
+     function aE(qq) {
+       return qq.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+     }
+ 
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L189-L298` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L597-L599) · [Before (L189-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L189-L298)

```diff
-         type: "Arena",
-         title: "Battle Arena",
-         description: "Fight for glory in a 2v2v2v2v2v2v2v2 arena!",
-         smallPicture: "battle_arena",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
-       },
-       iu = {
-         type: "Arena",
-         title: "Goldrush",
-         description: "Who is the best miner?\nMine gold and deposit it at your spawn, but beware of others killing you",
- ... (94 more removed lines; see GitHub link above)
+         functions: "api",
+         callbacks: "callback",
+         "client options": "clientOption"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L301-L317` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L603-L604) · [Before (L301-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L301-L317)

```diff
-         type: "Arena",
-         title: "Conqueror",
-         description: "Make tactical choices to conquer your enemies!",
-         smallPicture: "duos_combined_pic",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         firebaseConfig: {
-           apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-           projectId: "bloxd-ee1aa",
-           storageBucket: "bloxd-ee1aa.appspot.com",
-           messagingSenderId: "758847442742",
-           appId: "1:758847442742:web:c3d095738f8bde05f02d97",
-           measurementId: "G-SCYFMGGGEW"
-         },
- ... (1 more removed lines; see GitHub link above)
+         type: "string",
+         description: "A few plain words for the creator on what this change does, under 80 characters"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L320-L330` → after: `L607-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L607-L610) · [Before (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L320-L330)

```diff
-         type: "Arena",
-         title: "Capture the Flag",
-         description: "Capture the flag to win! It's that simple!",
-         smallPicture: "bloxd_capture_the_flag_thumbnail_small",
-         largePicture: "bloxd_capture_the_flag_thumbnail_large",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: []
+         readOnlyHint: !0,
+         destructiveHint: !1,
+         idempotentHint: !0,
+         openWorldHint: !1
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L332-L410` → after: `L612-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L612-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L612-L1073) · [Before (L332-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L332-L410)

```diff
-       Zu = {
-         type: "Survival",
-         title: "Survival Royale",
-         description: "Fortnite but way better ofc ;)",
-         smallPicture: "survivalRoyale",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
-       },
-       Ru = {
-         type: "Parkour",
-         title: "Parkour Builder",
-         description: "Race through a parkour map with a twist - each round, you get to add a new block to the course!",
-         smallPicture: "uchThumbnail",
- ... (63 more removed lines; see GitHub link above)
+       QE = [{
+         name: "write_file",
+         title: "Write a file",
+         description: "Replaces a file with new code, or makes a new file",
+         inputSchema: {
+           type: "object",
+           properties: {
+             path: {
+               type: "string",
+               description: "The file's path, e.g. index.js"
+             },
+             why: oE,
+             content: {
+               type: "string",
+               description: "The whole new file"
+             }
+ ... (446 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L412-L413` → after: `L1075-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1075-L1077) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L412-L413)

```diff
-     function Au(zz, uz, bz) {
-       return `<${zz}><h2>${(0,xu.f)(uz)}</h2>${bz}</${zz}>`
+     function yE(qq) {
+       var Eq;
+       return !0 === (null === (Eq = tE(qq)._meta) || void 0 === Eq ? void 0 : Eq.isLookup)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L417` → after: `L1081-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1081-L1083) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L417)

```diff
-       return zz.map((zz => `<p>${(0,xu.f)(zz)}</p>`)).join("")
+       const Eq = QE.find((Eq => Eq.name === qq));
+       if (!Eq) throw new Error(`No AI Helper tool ${qq}`);
+       return Eq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L421` → after: `L1091-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1091-L1092) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L421)

```diff
-       return `<ul>${zz.map((zz=>`<li>${zz}</li>`)).join("")}</ul>`
+       const Eq = qq.trim();
+       return hE.some((qq => qq.test(Eq)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L424-L425` → after: `L1095-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1095-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1095-L1108) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L424-L425)

```diff
-     function Pu(zz) {
-       return Lu(zz.map(xu.f))
+     function iE(qq, Eq) {
+       const gq = qq.replace(vE, "");
+       return Eq ? function(qq) {
+         const Eq = qq.indexOf("```"),
+           gq = -1 === Eq ? qq : qq.slice(0, Eq);
+         let Yq = -1,
+           lq = -1,
+           Oq = 0;
+         for (const mq of gq.matchAll(nE)) {
+           const qq = mq.index + mq[0].length;
+           bE(gq.slice(Oq, qq)) && (Yq = -1 === Yq ? Oq : Yq, lq = qq), Oq = qq
+         }
+         return -1 === lq ? qq : "" !== gq.slice(lq).trim() ? qq.slice(lq).trimStart() : `${qq.slice(0,Yq).trimEnd()}\n${qq.slice(gq.length)}`.trim()
+       }(gq) : "" !== gq.trim() ? gq : qq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L428-L433` → after: `L1113-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1113-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1113-L1117) · [Before (L428-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L428-L433)

```diff
-     function Gu(zz, uz) {
-       return Lu(zz.similarGames.map((zz => {
-         var bz, nz;
-         const iz = null !== (bz = null === (nz = Ju.e[zz]) || void 0 === nz ? void 0 : nz.name) && void 0 !== bz ? bz : uz(Ez.b[zz].title);
-         return `<a href="${(0,xu.f)((0,xu.C)(zz))}">${(0,xu.f)(iz)}</a>`
-       })))
+     function ME(qq) {
+       const Eq = "string" === typeof qq ? qq.split(/[./:]/).pop() : void 0;
+       return function(qq) {
+         return QE.some((Eq => Eq.name === qq))
+       }(Eq) ? Eq : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L435-L447` → after: `L1119-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1119-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1119-L1149) · [Before (L435-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L435-L447)

```diff
-     async function au(zz, uz) {
-       const bz = (0, xu.G)(zz);
-       if (!bz) return null;
-       const Ez = await (0, Ju.i)(bz),
-         nz = (0, Ju.g)(Ez),
-         iz = Ez.faq.map((zz => {
-           let {
-             question: uz,
-             answer: bz
-           } = zz;
-           return `<h3>${(0,xu.f)(uz)}</h3><p>${(0,xu.f)(bz)}</p>`
-         })).join("");
-       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,xu.f)(Ez.name)}</h1><p>${(0,xu.f)(Ez.description)}</p></header>`,Au("section",nz.whatIs,Tu(Ez.whatIs)),Au("section",nz.howToPlay,Tu(Ez.howToPlay)) … [truncated]
+ 
+     function TE(qq, Eq) {
+       return gq => {
+         const Yq = [];
+         let lq;
+         for (const Aq of gq.matchAll(qq)) {
+           var Oq;
+           const qq = ME(Aq[1]);
+           if (null === qq) continue;
+           const cq = {};
+           for (const gq of Aq[2].matchAll(Eq)) {
+             var mq, xq;
+             cq[null !== (mq = gq[1]) && void 0 !== mq ? mq : gq[2]] = null !== (xq = gq[3]) && void 0 !== xq ? xq : gq[4]
+           }(null === (Oq = lq) || void 0 === Oq ? void 0 : Oq.call.name) === qq && "" === gq.slice(lq.index + lq.call.source.length, Aq.index).trim() ? Yq[Yq.length - 1] = {
+             call: {
+               name: qq,
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L474` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1153) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L474)

```diff
-       return zz || "index"
+       return qq.replace(/\\(["\\nt])/g, ((qq, Eq) => "n" === Eq ? "\n" : "t" === Eq ? "\t" : Eq))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L478` → after: `L1157-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1157-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1157-L1179) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L478)

```diff
-       return `/docs/${Hz(zz)}.md`
+       let Eq = null !== qq && void 0 !== qq ? qq : {};
+       if ("string" === typeof Eq) try {
+         Eq = JSON.parse("" === Eq ? "{}" : Eq)
+       } catch {
+         return null
+       }
+       if ("object" !== typeof Eq || null === Eq) return null;
+       const gq = {};
+       for (const [Yq, lq] of Object.entries(Eq)) "string" === typeof lq ? gq[Yq] = fE.has(Yq) && ZE.test(lq) && !lq.includes("\n") ? zE(lq) : lq : "boolean" === typeof lq || "number" === typeof lq ? gq[Yq] = String(lq) : "object" !== typeof lq || null === lq || Array.isArray(lq)  … [truncated]
+       return gq
+     }
+ 
+     function pE(qq, Eq) {
+       let gq = 0,
+         Yq = !1;
+       for (let lq = Eq; lq < qq.length; lq++) {
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L482` → after: `L1183-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1183-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1183-L1189) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L482)

```diff
-       return `/docs/${Hz(zz)}/${uz+1}.md`
+       let gq = qq;
+       for (const {
+           call: Yq,
+           index: lq
+         }
+         of Eq) gq = gq.slice(0, lq) + " ".repeat(Yq.source.length) + gq.slice(lq + Yq.source.length);
+       return gq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L484` → after: `L1191-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1191-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1191-L1206) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L484)

```diff
-     const dz = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
+     const LE = new RegExp(`\\b(${QE.map((qq=>qq.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const JE = {
+         formatCall: (qq, Eq) => {
+           const gq = Object.fromEntries(Object.entries(Eq).filter((qq => {
+             let [, Eq] = qq;
+             return void 0 !== Eq
+           })));
+           return `${qq}(${JSON.stringify(gq)})`
+         },
+         declareTools: qq => qq,
+         callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
+         fileResult: (qq, Eq, gq) => `<file path="${qq}"${gq?' open_in_editor="true"':""}>\n${Eq}\n</file>`,
+         editFailure: (qq, Eq) => `${qq} failed: ${Eq}`,
+         lookupResult: (qq, Eq, gq) => `${qq} ${Eq}:\n${gq}`
+       },
+       kE = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L487-L490` → after: `L1209-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1209-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1209-L1386) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L487-L490)

```diff
-       const uz = dz.exec(zz);
-       return null === uz ? null : {
-         name: uz[1],
-         part: void 0 === uz[2] ? null : Number(uz[2])
+       const Eq = [];
+       for (const lq of qq.matchAll(kE)) {
+         const Oq = ME(lq[1]),
+           mq = lq.index + lq[0].length,
+           xq = pE(qq, mq),
+           Aq = null === xq ? null : SE(qq.slice(mq, xq));
+         if (null !== Oq && null !== xq && null !== Aq) {
+           var gq, Yq;
+           const mq = null !== (gq = null === (Yq = qq.slice(xq).match(/^\s*<\|call\|>/)) || void 0 === Yq ? void 0 : Yq[0]) && void 0 !== gq ? gq : "";
+           Eq.push({
+             call: {
+               name: Oq,
+               args: Aq,
+               source: qq.slice(lq.index, xq + mq.length)
+             },
+             index: lq.index
+ ... (162 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L493` → after: `L1389-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1389-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1389-L1407) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L493)

```diff
-     const Zz = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+ 
+     function Bg(qq, Eq) {
+       const gq = [];
+       for (const Yq of function(qq) {
+           const Eq = Eg(qq),
+             gq = qg.filter((qq => qq !== Eq));
+           return [DE[Eq], ...qq === Eq ? [] : [DE[qq]], ...gq.map((qq => DE[qq])), RE, FE]
+         }(Eq)) gq.push(...Yq(GE(qq, gq)));
+       return gq.map((qq => {
+         let {
+           call: Eq
+         } = qq;
+         return Eq
+       }))
+     }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L496-L499` → after: `L1410-L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1410-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1410-L1432) · [Before (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L496-L499)

```diff
-       const uz = Zz.exec(zz);
-       if (null === uz) return null;
-       const [, bz = "", Ez] = uz;
-       return void 0 === Ez ? Oz(bz) : pz(bz, Number(Ez) - 1)
+       return function(qq) {
+         const Eq = [...qq.matchAll(mg)],
+           gq = [];
+         let Yq = 0;
+         for (; Yq < Eq.length;) {
+           const lq = Eq[Yq],
+             Oq = Eq.at(Yq + 1);
+           void 0 !== Oq && "```" === Oq[0] ? (xg.test(qq.slice(lq.index + lq[0].length, Oq.index)) && gq.push({
+             from: lq.index,
+             to: Oq.index + Oq[0].length
+           }), Yq += 2) : (gq.push({
+             from: lq.index,
+             to: lq.index + lq[0].length
+           }), Yq++)
+         }
+         let lq = qq;
+ ... (7 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L503` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/89.js#L1436) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/89.js#L503)

```diff
-       return `/docsHtml/${Hz(zz)}.html`
+       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(qq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/90.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/90.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L3)

```diff
- export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 90];
+ export const ids = [90];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L5-L25` → after: `L4-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L4-L131) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L5-L25)

```diff
-   38602: (zz, uz, bz) => {
-     var Ez = {
-       "./bedwars/bedwarsClient": 38611,
-       "./bridgeBattle/bridgeBattleClient": 38620,
-       "./buildAFactory2/buildAFactory2Client": 37872,
-       "./classic/classicClient": 38624,
-       "./clutch/clutchClient": 38632,
-       "./containmentBreach/containmentBreachClient": 38638,
-       "./cooking/cookingClient": 38777,
-       "./defusal/defusalClient": 38783,
-       "./frontline/frontlineClient": 38791,
-       "./goalRush/goalRushClient": 38798,
-       "./luckyBedwars/luckyBedwarsClient": 38803,
-       "./ninetyNineNights/ninetyNineNightsClient": 38810,
-       "./oneBlock/oneBlockClient": 38813,
-       "./plots/plotsClient": 38822,
- ... (5 more removed lines; see GitHub link above)
+   40997: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       DOCS_AGENT_PART_CHARS: () => SE.e,
+       DOCS_LLMS_FULL_TXT_PATH: () => SE.g,
+       DOCS_LLMS_TXT_PATH: () => SE.i,
+       DOCS_LLMS_TXT_URL: () => SE.l,
+       ROOT_LLMS_TXT_PATH: () => SE.o,
+       allGamemodeSettings: () => Yq.c,
+       arcadeModeStaticConfig: () => Vq.c,
+       arenaStaticConfig: () => lE,
+       backroomsStaticConfig: () => YE.b,
+       battleBoxStaticConfig: () => AE,
+       bedwarsStaticConfig: () => iq.e,
+       bloxdAggregatorConfig: () => xq.c,
+       bloxdPreprodAggregatorConfig: () => Aq.d,
+       bloxdStagingAggregatorConfig: () => cq.c,
+ ... (112 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L28-L343` → after: `L134-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L134-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L134-L410) · [Before (L28-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L28-L343)

```diff
-       return iz(zz).then(bz)
-     }
- 
-     function iz(zz) {
-       return Promise.resolve().then((() => {
-         if (!bz.o(Ez, zz)) {
-           var uz = new Error("Cannot find module '" + zz + "'");
-           throw uz.code = "MODULE_NOT_FOUND", uz
-         }
-         return Ez[zz]
-       }))
-     }
-     nz.keys = () => Object.keys(Ez), nz.resolve = iz, nz.id = 38602, zz.exports = nz
-   },
-   38183: (zz, uz, bz) => {
-     var Ez = {
- ... (300 more removed lines; see GitHub link above)
+       var Eq, gq;
+       return null !== (Eq = null === (gq = (0, Yq.m)(qq)) || void 0 === gq ? void 0 : gq.defaultListedVariation) && void 0 !== Eq ? Eq : qq
+     }
+     var Oq = gq(985),
+       mq = gq(1006),
+       xq = gq(726),
+       Aq = gq(716),
+       cq = gq(721),
+       uq = gq(713),
+       Bq = gq(707),
+       Wq = gq(738),
+       Nq = gq(763),
+       aq = gq(744),
+       Vq = gq(752),
+       dq = gq(755),
+       jq = gq(758),
+ ... (261 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L346-L458` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L413) · [Before (L346-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L346-L458)

```diff
-       return new Error("BLOXD VOXEL-SWEEP: non-terminating sweep rejected - " + zz + "[" + bz + "]=" + uz[bz] + " " + zz + "=[" + uz[0] + "," + uz[1] + "," + uz[2] + "]")
-     }
-     hz.checkInput = Uz, zz.exports = hz
-   },
-   38972: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => tz,
-       f: () => iz,
-       g: () => nz
-     });
-     const Ez = 6e3;
- 
-     function nz(zz, uz) {
-       return [Math.floor(zz[0] / uz) * uz, Math.floor(zz[1] / uz) * uz, Math.floor(zz[2] / uz) * uz]
-     }
- 
- ... (97 more removed lines; see GitHub link above)
+       return `<${qq}><h2>${(0,vE.f)(Eq)}</h2>${gq}</${qq}>`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L462-L476` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L417) · [Before (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L462-L476)

```diff
-       return null !== Fz(dz(zz))
-     }
-     var Rz = bz(1089);
-     const Kz = [{
-       id: "webm",
-       label: "WebM",
-       description: "Usually less screen tearing, but may not play in all media players."
-     }, {
-       id: "mp4",
-       label: "MP4",
-       description: "Works in more players, but may show graphical glitches on some devices."
-     }];
- 
-     function wz() {
-       return Zz("webm") ? "webm" : Zz("mp4") ? "mp4" : "webm"
+       return qq.map((qq => `<p>${(0,vE.f)(qq)}</p>`)).join("")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L480-L510` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L421) · [Before (L480-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L480-L510)

```diff
-       let {
-         cards: uz
-       } = zz;
-       return (0, Rz.jsx)("div", {
-         className: "ReplayVideoExportOptionCards",
-         children: uz.map((zz => (0, Rz.jsxs)("div", {
-           className: "ReplayVideoExportOptionColumn",
-           children: [(0, Rz.jsx)("div", {
-             className: Mz()("ReplayVideoExportOptionCard", {
-               Selected: zz.selected,
-               Disabled: zz.disabled
-             }),
-             onClick: () => {
-               zz.disabled || zz.onSelect()
-             },
-             children: (0, Rz.jsxs)("div", {
- ... (15 more removed lines; see GitHub link above)
+       return `<ul>${qq.map((qq=>`<li>${qq}</li>`)).join("")}</ul>`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L633-L667` → after: `L424-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L424-L425) · [Before (L633-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L633-L667)

```diff
-     function vz() {
-       return function() {
-         const zz = (0, oz.e)();
-         for (const {
-             group: uz,
-             dataAttr: bz
-           }
-           of rz.g)
-           if (bz && zz[uz]) return !0;
-         return !1
-       }() ? function() {
-         var zz;
-         return "function" === typeof(null === (zz = navigator.mediaDevices) || void 0 === zz ? void 0 : zz.getDisplayMedia)
-       }() ? {
-         canIncludeUi: !0,
-         includeUiDisabledReason: null
- ... (19 more removed lines; see GitHub link above)
+     function ZE(qq) {
+       return iE(qq.map(vE.f))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L672-L673` → after: `L428-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L428-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L428-L433) · [Before (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L672-L673)

```diff
-     function Tz(zz) {
-       zz.holdInput(!1), (0, Jz.d)(!1)
+     function fE(qq, Eq) {
+       return iE(qq.similarGames.map((qq => {
+         var gq, lq;
+         const Oq = null !== (gq = null === (lq = hE.c[qq]) || void 0 === lq ? void 0 : lq.name) && void 0 !== gq ? gq : Eq(Yq.c[qq].title);
+         return `<a href="${(0,vE.f)((0,vE.x)(qq))}">${(0,vE.f)(Oq)}</a>`
+       })))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L675-L688` → after: `L435-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L435-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L435-L440) · [Before (L675-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L675-L688)

```diff
-     async function Lz(zz) {
-       var uz, bz;
-       if ((0, Jz.b)() || Az) return;
-       const iz = zz();
-       if (!iz) return;
-       Az = !0;
-       let lz = null;
-       const Mz = iz.playbackMarkInTick,
-         {
-           canIncludeUi: tz,
-           includeUiDisabledReason: Hz
-         } = vz();
-       try {
-         lz = await async function(zz) {
+     async function ME(qq, Eq) {
+       const gq = (0, vE.C)(qq);
+       if (!gq) return null;
+       const Yq = await (0, hE.i)(gq),
+         lq = (0, hE.g)(Yq),
+         Oq = Yq.faq.map((qq => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L690-L692` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L442-L443) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L690-L692)

```diff
-             hasPlaybackMark: uz,
-             canIncludeUi: bz,
-             includeUiDisabledReason: Ez
+             question: Eq,
+             answer: gq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L694-L914` → after: `L445-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L445-L447) · [Before (L694-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L694-L914)

```diff
-           const iz = {
-               options: null
-             },
-             lz = nz.NotificationProvider.showCustomPopup({
-               body: zz => (0, Rz.jsx)(fz, {
-                 hasPlaybackMark: uz,
-                 canIncludeUi: bz,
-                 includeUiDisabledReason: Ez,
-                 selectionRef: iz,
-                 closePopup: zz
-               }),
-               disableExitButton: !0,
-               disablePressBackgroundToClose: !0,
-               unlockPointerKey: "replayVideoExportOptions"
-             });
-           return "notificationTornDown" === await lz.getResult() ? null : iz.options
- ... (205 more removed lines; see GitHub link above)
+           return `<h3>${(0,vE.f)(Eq)}</h3><p>${(0,vE.f)(gq)}</p>`
+         })).join("");
+       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,vE.f)(Yq.name)}</h1><p>${(0,vE.f)(Yq.description)}</p></header>`,nE("section",lq.whatIs,bE(Yq.whatIs)),nE("section",lq.howToPlay,bE(Yq.howToPlay)) … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L917` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L453) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L917)

```diff
-   38950: (zz, uz, bz) => {
+   4643: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L919` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L455) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L919)

```diff
-       d: () => dz,
+       B: () => Nq,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L921` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L457) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L921)

```diff
-       f: () => Hz,
+       g: () => Aq,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L925-L1082` → after: `L460-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L460-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L460-L464) · [Before (L925-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L925-L1082)

```diff
-       n: () => Oz,
-       o: () => Rz
-     });
-     var Ez = bz(1892),
-       nz = bz(22),
-       iz = bz(1909);
-     const lz = (0, iz.m)((function() {
-         var zz, uz, bz, nz;
-         return {
-           health: null !== (zz = Ez.b.get("_health")) && void 0 !== zz ? zz : null,
-           maxHealth: null !== (uz = Ez.b.get("_totalMaxHealth")) && void 0 !== uz ? uz : null,
-           shield: null !== (bz = Ez.b.get("_shield")) && void 0 !== bz ? bz : null,
-           maxShield: null !== (nz = Ez.b.get("maxShield")) && void 0 !== nz ? nz : null
-         }
-       }), [], (0, iz.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
-       Mz = [{
- ... (142 more removed lines; see GitHub link above)
+       o: () => xq,
+       q: () => dq,
+       s: () => uq,
+       u: () => Bq,
+       y: () => Vq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1084-L1144` → after: `L466-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L466-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L466-L471) · [Before (L1084-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L1084-L1144)

```diff
-     bz(35981);
-     var nz = bz(38036),
-       iz = bz(9114),
-       lz = bz(36185),
-       Mz = bz(328);
- 
-     function tz(zz, uz) {
-       return {
-         item: zz,
-         scale: uz,
-         billboard: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         thrownRole: !0
-       }
-     }
-     var Hz = bz(38108),
-       Oz = bz(9078),
- ... (45 more removed lines; see GitHub link above)
+     var Yq = gq(1566);
+     const lq = 24e3,
+       Oq = "/docs/llms.txt",
+       mq = `${Yq.c}${Oq}`,
+       xq = "/llms.txt",
+       Aq = "/docs/llms-full.txt";
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1147-L1195` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L474) · [Before (L1147-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L1147-L1195)

```diff
-       const uz = new Set,
-         bz = zz => {
-           const Ez = [],
-             nz = new Set;
-           for (const iz of zz) {
-             const zz = iz.hasGeometry && 0 === iz.children.length;
-             if (!zz || !nz.has(iz.name)) {
-               if (uz.has(iz.name.toLowerCase())) throw new Error(`Two nodes are named ${iz.name}`);
-               if (uz.add(iz.name.toLowerCase()), zz) nz.add(iz.name), Ez.push(iz.name);
-               else {
-                 if (iz.hasGeometry) throw new Error(`Mesh ${iz.name} has nodes under it: put them in a group beside it`);
-                 Ez.push(0 === iz.children.length ? {
-                   nodeName: iz.name
-                 } : {
-                   nodeName: iz.name,
-                   children: bz(iz.children)
- ... (33 more removed lines; see GitHub link above)
+       return qq || "index"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1199-L1202` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L478) · [Before (L1199-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L1199-L1202)

```diff
-       return zz.reduce(((zz, uz) => {
-         var bz;
-         return zz + ("string" === typeof uz ? 1 : (void 0 === uz.collapsesTo ? 0 : 1) + lu(null !== (bz = uz.children) && void 0 !== bz ? bz : []))
-       }), 0)
+       return `/docs/${cq(qq)}.md`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L1206-L2037` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L482) · [Before (L1206-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L1206-L2037)

```diff
-       const bz = zz => zz.getChildren(),
-         Ez = zz => {
-           if ("qT" in zz && !0 === zz.qT) throw new Error(`${zz.name} is drawn as an instance of another mesh`);
-           return "getTotalVertices" in zz && zz.getTotalVertices() > 0
-         },
-         nz = zz => {
-           var uz, nz;
-           return !Ez(zz) || bz(zz).length > 0 ? null : `${null!==(uz=null===(nz=zz.material)||void 0===nz?void 0:nz.uniqueId)&&void 0!==uz?uz:"none"} ${zz.getVerticesDataKinds().sort().join(",")}`
-         };
-       ! function(zz, uz, bz) {
-         const Ez = new Set,
-           nz = zz => {
-             for (const bz of zz) Ez.add(bz.name.toLowerCase()), nz(uz(bz))
-           };
-         nz(zz);
-         const iz = new Set,
- ... (816 more removed lines; see GitHub link above)
+       return `/docs/${cq(qq)}/${Eq+1}.md`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2039-L2040` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L484) · [Before (L2039-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L2039-L2040)

```diff
-     var hu = zz => {};
-     var Uu = bz(38917);
+     const Wq = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2043-L2061` → after: `L487-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L487-L490) · [Before (L2043-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L2043-L2061)

```diff
-       return zz(new Uu([0, 0, 0], [1, 1, 1]), 1, 1, 0, 1, null, !1)
-     }
- 
-     function gu() {
-       this.Bd = .1, this.fluidDrag = .4, this.Cd = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
-     }
-     class Su {
-       constructor(zz, uz, bz) {
-         zz = Object.assign(new gu, zz), this.gravity = zz.gravity, this.Bd = zz.Bd, this.Cd = zz.Cd, this.fluidDrag = zz.fluidDrag, this.minBounceImpulse = zz.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.Dd = zz.Dd, this.xV = zz.xV, this.rollbac … [truncated]
-           return new qu(zz, uz, bz, Ez, nz, iz, lz)
-         })), this.testSolid = uz, this.testFluid = bz
-       }
-       Wd(zz, uz, bz, Ez, nz, iz) {
-         zz = zz || new Uu([0, 0, 0], [1, 1, 1]), "undefined" == typeof uz && (uz = 1), "undefined" == typeof bz && (bz = 1), "undefined" == typeof Ez && (Ez = 0), "undefined" == typeof nz && (nz = 1);
-         var lz = this.qV(zz, uz, bz, Ez, nz, iz);
-         return this.bodies.push(lz), lz
- ... (3 more removed lines; see GitHub link above)
+       const Eq = Wq.exec(qq);
+       return null === Eq ? null : {
+         name: Eq[1],
+         part: void 0 === Eq[2] ? null : Number(Eq[2])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2147-L2161` → after: `L496-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L496-L499) · [Before (L2147-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L2147-L2161)

```diff
-       return zz % tb * 21
-     }
- 
-     function db() {
-       return !1
-     }
- 
-     function Fb(zz, uz) {
-       var bz = (bz, Ez, nz) => null !== uz.vV && Ez <= uz.vV || zz.testSolid(bz, Ez, nz);
-       return bz.solidOwner = zz, bz
-     }
- 
-     function Zb(zz, uz) {
-       var bz = uz.testSolid && uz.testSolid.solidOwner;
-       return (!uz.testSolid || void 0 !== bz && bz !== zz) && (uz.testSolid = Fb(zz, uz)), uz.testSolid
+       const Eq = aq.exec(qq);
+       if (null === Eq) return null;
+       const [, gq = "", Yq] = Eq;
+       return void 0 === Yq ? uq(gq) : Bq(gq, Number(Yq) - 1)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L2175-L34793` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/90.js#L503) · [Before (L2175-L34793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/90.js#L2175-L34793)

```diff
-       if (null === sb) {
-         const uz = zz.getBloxdWasm();
-         sb = "function" === typeof uz.Sp && "function" === typeof uz.yp && ob(uz.Sp(), Xb) && ob(uz.yp(), fb), sb || console.error(new Error("wasm physics: the module's layout differs from wasmPhysicsLayout.ts (a stale @bloxd/wasm build?), so physics and picks cannot run in wasm" … [truncated]
-       }
-       return sb
-     }
- 
-     function ob(zz, uz) {
-       if (zz.length !== uz.length) return !1;
-       for (let bz = 0; bz < uz.length; bz++)
-         if (zz[bz] !== uz[bz]) return !1;
-       return !0
-     }
- 
-     function Nb(zz) {
-       if (Number.isNaN(zz)) return "NaN";
- ... (32603 more removed lines; see GitHub link above)
+       return `/docsHtml/${cq(qq)}.html`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/91.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/91.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L2)

```diff
- export const ids = [91];
+ export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 91];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L4-L10` → after: `L5-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L5-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L5-L439) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L4-L10)

```diff
-   4616: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       Howl: () => nz.Howl,
-       Howler: () => nz.Howler,
-       iosAudio: () => tz,
-       musicOutput: () => Kz,
-       readyAudioContext: () => wz
+   39197: (qq, Eq, gq) => {
+     var Yq = {
+       "./bedwars/bedwarsClient": 39206,
+       "./bridgeBattle/bridgeBattleClient": 39212,
+       "./buildAFactory2/buildAFactory2Client": 38469,
+       "./classic/classicClient": 39221,
+       "./clutch/clutchClient": 39229,
+       "./containmentBreach/containmentBreachClient": 39232,
+       "./cooking/cookingClient": 39331,
+       "./defusal/defusalClient": 39340,
+       "./frontline/frontlineClient": 39349,
+       "./goalRush/goalRushClient": 39353,
+       "./luckyBedwars/luckyBedwarsClient": 39359,
+       "./ninetyNineNights/ninetyNineNightsClient": 39364,
+       "./oneBlock/oneBlockClient": 39368,
+       "./plots/plotsClient": 39374,
+ ... (419 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L12` → after: `L441-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L441-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L441-L446) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L12)

```diff
-     var Ez, nz = bz(4625),
+     var Yq = gq(1725),
+       lq = gq(1336),
+       Oq = gq(57),
+       mq = gq(1018),
+       xq = gq.n(mq),
+       Aq = gq(1422),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L14-L15` → after: `L448-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L448-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L448-L473) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L14-L15)

```diff
-     const lz = nz.Howler;
-     let Mz;
+     const uq = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
+       Bq = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];
+ 
+     function Wq(qq) {
+       return "webm" === qq ? uq : Bq
+     }
+ 
+     function Nq(qq) {
+       for (const Eq of qq)
+         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Eq)) return Eq;
+       return null
+     }
+ 
+     function aq(qq) {
+       return null !== Nq(Wq(qq))
+     }
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L18` → after: `L476-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L476-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L476-L510) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L18)

```diff
-       return Mz ??= "ios" === (0, iz.getOperatingSystem)(), Mz
+       return aq("webm") ? "webm" : aq("mp4") ? "mp4" : "webm"
+     }
+ 
+     function Hq(qq) {
+       let {
+         cards: Eq
+       } = qq;
+       return (0, Vq.jsx)("div", {
+         className: "ReplayVideoExportOptionCards",
+         children: Eq.map((qq => (0, Vq.jsxs)("div", {
+           className: "ReplayVideoExportOptionColumn",
+           children: [(0, Vq.jsx)("div", {
+             className: xq()("ReplayVideoExportOptionCard", {
+               Selected: qq.selected,
+               Disabled: qq.disabled
+             }),
+ ... (19 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L23-L26` → after: `L677-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L677-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L677-L686) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L23-L26)

```diff
-       if (lz.ctx || !lz.usingWebAudio || "undefined" === typeof AudioContext || !tz()) return;
-       const bz = navigator.audioSession;
-       let Ez;
-       "auto" === (null === bz || void 0 === bz ? void 0 : bz.type) && (bz.type = "ambient");
+       if ((0, hq.b)() || nq) return;
+       const Oq = qq();
+       if (!Oq) return;
+       nq = !0;
+       let mq = null;
+       const xq = Oq.playbackMarkInTick,
+         {
+           canIncludeUi: Aq,
+           includeUiDisabledReason: cq
+         } = rq();
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L28-L29` → after: `L688-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L688-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L688-L713) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L28-L29)

```diff
-         Ez = new AudioContext({
-           sampleRate: 44100
+         mq = await async function(qq) {
+           let {
+             hasPlaybackMark: Eq,
+             canIncludeUi: gq,
+             includeUiDisabledReason: Yq
+           } = qq;
+           const Oq = {
+               options: null
+             },
+             mq = lq.NotificationProvider.showCustomPopup({
+               body: qq => (0, Vq.jsx)(oq, {
+                 hasPlaybackMark: Eq,
+                 canIncludeUi: gq,
+                 includeUiDisabledReason: Yq,
+                 selectionRef: Oq,
+                 closePopup: qq
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L31-L32` → after: `L715-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L715-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L715-L842) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L31-L32)

```diff
-       } catch {
-         return
+       } finally {
+         nq = !1
+       }
+       if (!mq) return;
+       const uq = null !== (Eq = null === (gq = Oq.startFailure) || void 0 === gq ? void 0 : gq.call(Oq)) && void 0 !== Eq ? Eq : null;
+       if (null !== uq) return void lq.NotificationProvider.showAlertPopup({
+         title: "Video export failed",
+         subtitle: uq
+       });
+       if (! function(qq) {
+           return !(0, hq.b)() && ((0, hq.c)(!0), qq.holdInput(!0), !0)
+         }(Oq)) return;
+       let Bq = null;
+       try {
+         Bq = await vq(mq.includeUi, (() => Oq.canvas()), Oq.bJ)
+       } catch (Zq) {
+ ... (112 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L37-L50` → after: `L845-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L845-L856) · [Before (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L37-L50)

```diff
-     lz._mobileUnloaded = !0;
-     const Oz = lz.volume.bind(nz.Howler);
-     lz.volume = function() {
-       return Hz(), Oz(...arguments)
-     };
-     const pz = lz.mute.bind(nz.Howler);
-     lz.mute = zz => (Hz(), pz(zz));
-     const dz = nz.Howl.prototype,
-       Fz = dz.init;
-     dz.init = function(zz) {
-       return Hz(), Fz.call(this, zz)
-     };
-     let Zz = 0;
-     const Rz = null === (Ez = lz._autoSuspend) || void 0 === Ez ? void 0 : Ez.bind(nz.Howler);
+   },
+   4679: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => uq,
+       g: () => Bq
+     });
+     var Yq = gq(4684),
+       lq = gq(24);
+     const Oq = .25,
+       mq = .85,
+       xq = .02,
+       Aq = .01;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L52-L53` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L858) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L52-L53)

```diff
-     function Kz() {
-       wz();
+     function cq(qq, Eq, gq, Yq, lq, Oq, xq) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L55-L61` → after: `L860-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L860-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L860-L1212) · [Before (L55-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L55-L61)

```diff
-         ctx: zz,
-         masterGain: uz
-       } = lz;
-       return zz && uz ? {
-         ctx: zz,
-         destination: uz,
-         holdAwake: zz => {
+         waveform: Aq,
+         pitchHz: cq,
+         attackMs: uq,
+         releaseMs: Bq,
+         lowpassHz: Wq
+       } = gq, Nq = lq + Yq.durationMs / 1e3, aq = cq * 2 ** (Yq.semitones / 12), Vq = qq.createOscillator();
+       Vq.type = Aq, Vq.frequency.setValueAtTime(aq, lq), Vq.frequency.exponentialRampToValueAtTime(aq * 2 ** (Yq.glideSemitones / 12), Nq);
+       const dq = lq + Math.min(uq, Yq.durationMs) / 1e3,
+         jq = qq.createGain();
+       jq.gain.setValueAtTime(0, lq), jq.gain.linearRampToValueAtTime(Oq, dq), jq.gain.linearRampToValueAtTime(Oq * mq, Math.max(dq, Nq - Bq / 1e3)), jq.gain.linearRampToValueAtTime(0, Nq);
+       const Hq = [Vq];
+       if (null !== Wq) {
+         const Eq = qq.createBiquadFilter();
+         Eq.type = "lowpass", Eq.frequency.value = Wq, Hq.push(Eq)
+       }
+       Hq.push(jq, Eq);
+ ... (337 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L63` → after: `L1214-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L1214-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L1214-L1253) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L63)

```diff
-           (Zz += zz ? 1 : -1, zz) ? null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz): null === (bz = lz._autoSuspend) || void 0 === bz || bz.call(lz)
+           return !Yq(qq) || gq(qq).length > 0 ? null : `${null!==(Eq=null===(lq=qq.material)||void 0===lq?void 0:lq.uniqueId)&&void 0!==Eq?Eq:"none"} ${qq.getVerticesDataKinds().sort().join(",")}`
+         };
+       ! function(qq, Eq, gq) {
+         const Yq = new Set,
+           lq = qq => {
+             for (const gq of qq) Yq.add(gq.name.toLowerCase()), lq(Eq(gq))
+           };
+         lq(qq);
+         const Oq = new Set,
+           mq = new Map,
+           xq = [],
+           Aq = qq => {
+             var Eq;
+             const gq = qq.toLowerCase();
+             let lq, Oq = null !== (Eq = mq.get(gq)) && void 0 !== Eq ? Eq : 1;
+             do {
+ ... (24 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L65` → after: `L1255-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L1255-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L1255-L1262) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L65)

```diff
-         wake: () => {
+         xq = gq(qq).map(mq);
+       return null === Eq || 1 !== Oq.size ? lE(xq) : OE(xq, Eq)
+     }
+     const AE = new WeakMap;
+ 
+     function cE(qq, Eq, gq) {
+       const Yq = Xq.g.itemsClient[Eq],
+         lq = function(qq) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L67` → after: `L1264-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L1264-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L1264-L1358) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L67)

```diff
-           "running" !== zz.state && (null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz), zz.resume().catch((() => {})))
+           const gq = (0, Cq.t)(qq);
+           if (null !== gq) return eq.f.enabled && eq.f.hasAnimation(gq) ? {
+             vehicleType: gq,
+             moved: eq.f.bonesMoved(gq)
+           } : null;
+           const Yq = null === (Eq = uq.i[qq]) || void 0 === Eq ? void 0 : Eq.meshEntityBones;
+           return null !== Yq && void 0 !== Yq && Yq.length ? {
+             vehicleType: null,
+             moved: new Set(Yq)
+           } : null
+         }(Eq);
+       if (null === lq || void 0 === Yq) return null;
+       const Oq = qq.Ma.LJ;
+       let mq = AE.get(Oq);
+       mq || (mq = new Map, AE.set(Oq, mq));
+       let xq = mq.get(Eq);
+ ... (79 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L69` → after: `L1360-L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L1360-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L1360-L2045) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L69)

```diff
-       } : null
+       }
+     }
+ 
+     function uE(qq) {
+       return qq.flatMap((qq => {
+         var Eq;
+         return "string" === typeof qq ? [qq] : [qq.nodeName, ...uE(null !== (Eq = qq.children) && void 0 !== Eq ? Eq : [])]
+       }))
+     }
+ 
+     function BE(qq, Eq, gq) {
+       Eq.name = `${gq}SkeletalVehicleMat`;
+       const Yq = (0, hq.T)(Eq);
+       (0, hq.C)(Yq), (0, YE.d)(Eq, (() => {
+         (0, gE.d)(Yq, qq), (0, Uq.d)(Yq, !0)
+       })), (0, YE.h)(Eq)
+ ... (670 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L74` → after: `L2110-L35410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L2110-L35410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/91.js#L2110-L35410) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/91.js#L74)

```diff
-       (lz.volume(), lz.ctx && lz.autoUnlock) && (null === (zz = lz._unlockAudio) || void 0 === zz || zz.call(lz))
+       let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FE;
+       const mq = performance.now(),
+         xq = Oq.get(qq);
+       if (void 0 !== xq && mq - xq < 6e4) return;
+       Oq.set(qq, mq);
+       const Aq = Eq();
+       Yq && console.error(Aq), null === (lq = gq.SN) || void 0 === lq || lq.call(gq, Aq)
+     }
+ 
+     function IE(qq) {
+       return "failed" !== qq.getBloxdWasmStatus()
+     }
+ 
+     function eE(qq, Eq) {
+       if (IE(qq)) try {
+         Eq.free()
+ ... (33285 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/92.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/92.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/92.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [91, 92];
+ export const ids = [92];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L76` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/92.js#L4) · [Before (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/92.js#L4-L76)

```diff
-   35918: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       countDecodesAs: () => Oz,
-       decodedAudio: () => pz
-     });
-     var Ez = bz(4616);
-     const nz = Ez.Howler,
-       iz = new Map;
-     let lz = 0;
-     const Mz = {
-         song: 0,
-         sheet: 0
-       },
-       tz = new WeakMap,
-       Hz = new WeakSet;
- 
- ... (57 more removed lines; see GitHub link above)
+   4684: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L84-L85` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/92.js#L11-L12) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/92.js#L84-L85)

```diff
-     var Ez, nz = bz(4625),
-       iz = bz(96);
+     var Yq, lq = gq(4692),
+       Oq = gq(4477);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L95` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/92.js#L17) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/92.js#L95)

```diff
-       if (lz.ctx || !lz.usingWebAudio || "undefined" === typeof AudioContext || !tz()) return;
+       if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L107` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/92.js#L29) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/92.js#L107)

```diff
-       nz.gain.setValueAtTime(lz._muted ? 0 : null !== (zz = lz._volume) && void 0 !== zz ? zz : 1, Ez.currentTime), nz.connect(Ez.destination), lz.ctx = Ez, lz.masterGain = nz, null === (uz = lz._setup) || void 0 === uz || uz.call(lz)
+       lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/93.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/93.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L2)

```diff
- export const ids = [91, 93];
+ export const ids = [92, 93];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L6` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L4-L22) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L4-L6)

```diff
-   36096: (zz, uz, bz) => {
-     function Ez(zz, uz, bz, Ez) {
-       return !(bz && !zz.aimable) && (!uz || zz.gun && "head" !== Ez)
+   36493: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       countDecodesAs: () => Bq,
+       decodedAudio: () => Wq
+     });
+     var Yq = gq(36496),
+       lq = gq(4684);
+     const Oq = lq.Howler,
+       mq = new Map;
+     let xq = 0;
+     const Aq = {
+         song: 0,
+         sheet: 0
+       },
+       cq = new WeakMap,
+       uq = new WeakSet;
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L9-L10` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L25-L30) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L9-L10)

```diff
-     function nz(zz) {
-       return Math.max(.1 * zz, 1)
+     function Wq() {
+       return {
+         bytes: xq,
+         songsDecoded: Aq.song,
+         sheetsDecoded: Aq.sheet
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L13-L14` → after: `L33-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L33-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L33-L74) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L13-L14)

```diff
-     function iz(zz, uz) {
-       return !zz && uz
+     function Nq(qq) {
+       if (uq.has(qq)) return;
+       uq.add(qq);
+       const Eq = 1 === qq.decodeAudioData.length,
+         gq = qq.decodeAudioData.bind(qq);
+       qq.decodeAudioData = (qq, Yq, lq) => {
+         const uq = qq => {
+           const Eq = Oq._howls.filter((qq => "loaded" !== qq._state));
+           try {
+             null === Yq || void 0 === Yq || Yq(qq)
+           } finally {
+             const gq = Eq.find((qq => "loaded" === qq._state));
+             void 0 !== gq && "string" === typeof gq._src && function(qq, Eq, gq) {
+               var Yq;
+               xq += gq - (null !== (Yq = mq.get(Eq)) && void 0 !== Yq ? Yq : 0), mq.set(Eq, gq);
+               const lq = cq.get(qq);
+ ... (26 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L22` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L77) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L22)

```diff
-   36103: (zz, uz, bz) => {
+   36496: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L25` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L80) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L25)

```diff
-       g: () => lz
+       d: () => lq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L43-L54` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L84-L85) · [Before (L43-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L43-L54)

```diff
-     function lz(zz, uz) {
-       const bz = {
-           hook: uz
-         },
-         lz = nz[zz];
-       if (lz.push(bz), "crosshairAccuracy" === zz && null !== Ez) {
-         const zz = Ez;
-         Ez = null, iz.crosshairAccuracy(zz)
-       }
-       return () => {
-         const zz = lz.indexOf(bz); - 1 !== zz && lz.splice(zz, 1)
-       }
+     function lq(qq) {
+       Yq = qq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L58` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L89) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L58)

```diff
-       return iz
+       return null === Yq ? null : Yq()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L61` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L92) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L61)

```diff
-   4616: (zz, uz, bz) => {
+   4684: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L69-L70` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L99-L100) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L69-L70)

```diff
-     var Ez, nz = bz(4625),
-       iz = bz(96);
+     var Yq, lq = gq(4692),
+       Oq = gq(4477);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L80` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L105) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L80)

```diff
-       if (lz.ctx || !lz.usingWebAudio || "undefined" === typeof AudioContext || !tz()) return;
+       if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L92` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/93.js#L117) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/93.js#L92)

```diff
-       nz.gain.setValueAtTime(lz._muted ? 0 : null !== (zz = lz._volume) && void 0 !== zz ? zz : 1, Ez.currentTime), nz.connect(Ez.destination), lz.ctx = Ez, lz.masterGain = nz, null === (uz = lz._setup) || void 0 === uz || uz.call(lz)
+       lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/94.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/94.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L3)

```diff
- export const ids = [94];
+ export const ids = [92, 93, 94];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L5-L9` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L4-L40) · [Before (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L5-L9)

```diff
-   4625: (zz, uz, bz) => {
-     var Ez;
-     ! function() {
-       var nz = function() {
-         this.init()
+   36674: (qq, Eq, gq) => {
+     function Yq(qq, Eq, gq, Yq) {
+       return !(gq && !qq.aimable) && (!Eq || qq.gun && "head" !== Yq)
+     }
+ 
+     function lq(qq) {
+       return Math.max(.1 * qq, 1)
+     }
+ 
+     function Oq(qq, Eq) {
+       return !qq && Eq
+     }
+     gq.d(Eq, {
+       b: () => Oq,
+       f: () => lq,
+       j: () => Yq
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L11-L68` → after: `L42-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L42-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L42-L97) · [Before (L11-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L11-L68)

```diff
-       nz.prototype = {
-         init: function() {
-           var zz = this || iz;
-           return zz._counter = 1e3, zz._html5AudioPool = [], zz.html5PoolSize = 10, zz._codecs = {}, zz._howls = [], zz._muted = !1, zz._volume = 1, zz._canPlayEvent = "canplaythrough", zz._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, z … [truncated]
-         },
-         volume: function(zz) {
-           var uz = this || iz;
-           if (zz = parseFloat(zz), uz.ctx || Fz(), "undefined" !== typeof zz && zz >= 0 && zz <= 1) {
-             if (uz._volume = zz, uz._muted) return uz;
-             uz.usingWebAudio && uz.masterGain.gain.setValueAtTime(zz, iz.ctx.currentTime);
-             for (var bz = 0; bz < uz._howls.length; bz++)
-               if (!uz._howls[bz]._webAudio)
-                 for (var Ez = uz._howls[bz]._getSoundIds(), nz = 0; nz < Ez.length; nz++) {
-                   var lz = uz._howls[bz]._soundById(Ez[nz]);
-                   lz && lz._node && (lz._node.volume = lz._volume * zz)
-                 }
- ... (42 more removed lines; see GitHub link above)
+ 
+     function mq(qq, Eq) {
+       const gq = {
+           hook: Eq
+         },
+         mq = lq[qq];
+       if (mq.push(gq), "crosshairAccuracy" === qq && null !== Yq) {
+         const qq = Yq;
+         Yq = null, Oq.crosshairAccuracy(qq)
+       }
+       return () => {
+         const qq = mq.indexOf(gq); - 1 !== qq && mq.splice(qq, 1)
+       }
+     }
+ 
+     function xq() {
+ ... (40 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L70-L125` → after: `L99-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L99-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L99-L107) · [Before (L70-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L70-L125)

```diff
-             uz = "undefined" !== typeof Audio ? new Audio : null
-           } catch (Oz) {
-             return zz
-           }
-           if (!uz || "function" !== typeof uz.canPlayType) return zz;
-           var bz = uz.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             Ez = zz._navigator ? zz._navigator.userAgent : "",
-             nz = Ez.match(/OPR\/([0-6].)/g),
-             lz = nz && parseInt(nz[0].split("/")[1], 10) < 33,
-             Mz = -1 !== Ez.indexOf("Safari") && -1 === Ez.indexOf("Chrome"),
-             tz = Ez.match(/Version\/(.*?) /),
-             Hz = Mz && tz && parseInt(tz[1], 10) < 15;
-           return zz._codecs = {
-             mp3: !(lz || !bz && !uz.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!bz,
-             opus: !!uz.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (40 more removed lines; see GitHub link above)
+             null === Yq || void 0 === Yq || Yq(qq)
+           } finally {
+             const gq = Eq.find((qq => "loaded" === qq._state));
+             void 0 !== gq && "string" === typeof gq._src && function(qq, Eq, gq) {
+               var Yq;
+               xq += gq - (null !== (Yq = mq.get(Eq)) && void 0 !== Yq ? Yq : 0), mq.set(Eq, gq);
+               const lq = cq.get(qq);
+               void 0 !== lq && Aq[lq]++
+             }(gq, gq._src, qq.length * qq.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L127-L168` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L109) · [Before (L127-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L127-L168)

```diff
-         },
-         _obtainHtml5Audio: function() {
-           var zz = this || iz;
-           if (zz._html5AudioPool.length) return zz._html5AudioPool.pop();
-           var uz = (new Audio).play();
-           return uz && "undefined" !== typeof Promise && (uz instanceof Promise || "function" === typeof uz.then) && uz.catch((function() {
-             console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
-           })), new Audio
-         },
-         _releaseHtml5Audio: function(zz) {
-           var uz = this || iz;
-           return zz._unlocked && uz._html5AudioPool.push(zz), uz
-         },
-         _autoSuspend: function() {
-           var zz = this;
-           if (zz.autoSuspend && zz.ctx && "undefined" !== typeof zz.ctx.suspend && iz.usingWebAudio) {
- ... (26 more removed lines; see GitHub link above)
+           return qq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L170-L266` → after: `L111-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L111-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L111-L182) · [Before (L170-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L170-L266)

```diff
-       lz.prototype = {
-         init: function(zz) {
-           var uz = this;
-           return iz.ctx || Fz(), uz._autoplay = zz.autoplay || !1, uz._format = "string" !== typeof zz.format ? zz.format : [zz.format], uz._html5 = zz.html5 || !1, uz._muted = zz.mute || !1, uz._loop = zz.loop || !1, uz._pool = zz.pool || 5, uz._preload = "boolean" !== typeof zz … [truncated]
-             method: zz.xhr && zz.xhr.method ? zz.xhr.method : "GET",
-             headers: zz.xhr && zz.xhr.headers ? zz.xhr.headers : null,
-             withCredentials: !(!zz.xhr || !zz.xhr.withCredentials) && zz.xhr.withCredentials
-           }, uz._duration = 0, uz._state = "unloaded", uz._sounds = [], uz._endTimers = {}, uz._queue = [], uz._playLock = !1, uz._onend = zz.onend ? [{
-             TZ: zz.onend
-           }] : [], uz._onfade = zz.onfade ? [{
-             TZ: zz.onfade
-           }] : [], uz._onload = zz.onload ? [{
-             TZ: zz.onload
-           }] : [], uz._onloaderror = zz.onloaderror ? [{
-             TZ: zz.onloaderror
-           }] : [], uz._onplayerror = zz.onplayerror ? [{
- ... (81 more removed lines; see GitHub link above)
+         if (!Eq) return gq(qq, uq, lq);
+         const Bq = gq(qq).then(uq);
+         return Bq.catch((qq => {
+           null === lq || void 0 === lq || lq(qq)
+         })), Bq
+       }
+     }(0, Yq.d)(Wq);
+     const aq = lq.Howl.prototype,
+       Vq = aq.init;
+     aq.init = function(qq) {
+       return lq.Howler.volume(), Oq.ctx && Nq(Oq.ctx), Vq.call(this, qq)
+     };
+     const dq = aq.unload;
+     aq.unload = function() {
+       const qq = this._src,
+         Eq = dq.call(this);
+ ... (56 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L268-L669` → after: `L184-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L184-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L184-L230) · [Before (L268-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L268-L669)

```diff
-           if (!(Hz >= Fz)) {
-             var Rz = Mz._node;
-             if (bz._webAudio) {
-               var Kz = function() {
-                 bz._playLock = !1, Zz(), bz._refreshBuffer(Mz);
-                 var zz = Mz._muted || bz._muted ? 0 : Mz._volume;
-                 Rz.gain.setValueAtTime(zz, iz.ctx.currentTime), Mz._playStart = iz.ctx.currentTime, "undefined" === typeof Rz.bufferSource.start ? Mz._loop ? Rz.bufferSource.noteGrainOn(0, Hz, 86400) : Rz.bufferSource.noteGrainOn(0, Hz, Oz) : Mz._loop ? Rz.bufferSource.start(0, H … [truncated]
-                   bz._emit("play", Mz._id), bz._loadQueue()
-                 }), 0)
-               };
-               "running" === iz.state && "interrupted" !== iz.ctx.state ? Kz() : (bz._playLock = !0, bz.once("resume", Kz), bz._clearTimer(Mz._id))
-             } else {
-               var wz = function() {
-                 Rz.currentTime = Hz, Rz.muted = Mz._muted || bz._muted || iz._muted || Rz.muted, Rz.volume = Mz._volume * iz.volume(), Rz.playbackRate = Mz._rate;
-                 try {
-                   var Ez = Rz.play();
- ... (386 more removed lines; see GitHub link above)
+           mq(0)
+         }(lq.b.get(Oq).filter((qq => qq !== gq)).flatMap((Eq => {
+           const gq = (Yq = (0, lq.g)(Eq).src, Oq = qq.canPlay, Yq.find((qq => {
+             var Eq;
+             const gq = null === (Eq = /\.([^.]+)$/.exec(qq.split("?", 1)[0])) || void 0 === Eq ? void 0 : Eq[1];
+             return void 0 !== gq && Oq(gq.toLowerCase())
+           })));
+           var Yq, Oq;
+           return void 0 === gq ? [] : [gq]
+         })), qq)
+       }
+     }({
+       afterJoin: qq => {
+         (0, Oq.d)(Yq.b.get("gameState"), qq)
+       },
+       joining: () => (0, Oq.f)(Yq.b.get("gameState")),
+ ... (31 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L672-L733` → after: `L233-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L233-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L233-L294) · [Before (L672-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L672-L733)

```diff
-       var tz = {},
-         Hz = function(zz) {
-           var uz = zz._src;
-           if (tz[uz]) return zz._duration = tz[uz].duration, void dz(zz);
-           if (/^data:[^;]+;base64,/.test(uz)) {
-             for (var bz = atob(uz.split(",")[1]), Ez = new Uint8Array(bz.length), nz = 0; nz < bz.length; ++nz) Ez[nz] = bz.charCodeAt(nz);
-             pz(Ez.buffer, zz)
-           } else {
-             var iz = new XMLHttpRequest;
-             iz.open(zz._xhr.method, uz, !0), iz.withCredentials = zz._xhr.withCredentials, iz.responseType = "arraybuffer", zz._xhr.headers && Object.keys(zz._xhr.headers).forEach((function(uz) {
-               iz.setRequestHeader(uz, zz._xhr.headers[uz])
-             })), iz.onload = function() {
-               var uz = (iz.status + "")[0];
-               "0" === uz || "2" === uz || "3" === uz ? pz(iz.response, zz) : zz._emit("loaderror", null, "Failed loading audio file with status: " + iz.status + ".")
-             }, iz.onerror = function() {
-               zz._webAudio && (zz._html5 = !0, zz._webAudio = !1, zz._sounds = [], delete tz[uz], zz.load())
- ... (46 more removed lines; see GitHub link above)
+       for (const lq of Yq) qq.on(lq, gq);
+       gq()
+     }
+   },
+   4684: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       Howl: () => lq.Howl,
+       Howler: () => lq.Howler,
+       musicOutput: () => aq,
+       readyAudioContext: () => Vq
+     });
+     var Yq, lq = gq(4692),
+       Oq = gq(4477);
+     const mq = lq.Howler;
+ 
+     function xq() {
+ ... (46 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L735-L737` → after: `L296-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L296-L299) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L735-L737)

```diff
-       }.apply(uz, [])) || (zz.exports = Ez), uz.Howler = iz, uz.Howl = lz, "undefined" !== typeof bz.g ? (bz.g.HowlerGlobal = nz, bz.g.Howler = iz, bz.g.Howl = lz, bz.g.Sound = Mz) : "undefined" !== typeof window && (window.HowlerGlobal = nz, window.Howler = iz, window.Howl = lz, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function Vq() {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L739-L782` → after: `L301-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L301-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L301-L339) · [Before (L739-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L739-L782)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(zz) {
-         var uz = this;
-         if (!uz.ctx || !uz.ctx.listener) return uz;
-         for (var bz = uz._howls.length - 1; bz >= 0; bz--) uz._howls[bz].stereo(zz);
-         return uz
-       }, HowlerGlobal.prototype.pos = function(zz, uz, bz) {
-         var Ez = this;
-         return Ez.ctx && Ez.ctx.listener ? (uz = "number" !== typeof uz ? Ez._pos[1] : uz, bz = "number" !== typeof bz ? Ez._pos[2] : bz, "number" !== typeof zz ? Ez._pos : (Ez._pos = [zz, uz, bz], "undefined" !== typeof Ez.ctx.listener.positionX ? (Ez.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(zz, uz, bz, Ez, nz, iz) {
-         var lz = this;
-         if (!lz.ctx || !lz.ctx.listener) return lz;
-         var Mz = lz._orientation;
-         return uz = "number" !== typeof uz ? Mz[1] : uz, bz = "number" !== typeof bz ? Mz[2] : bz, Ez = "number" !== typeof Ez ? Mz[3] : Ez, nz = "number" !== typeof nz ? Mz[4] : nz, iz = "number" !== typeof iz ? Mz[5] : iz, "number" !== typeof zz ? Mz : (lz._orientation = [zz, u … [truncated]
-       }, Howl.prototype.init = (zz = Howl.prototype.init, function(uz) {
-         var bz = this;
-         return bz._orientation = uz.orientation || [1, 0, 0], bz._stereo = uz.stereo || null, bz._pos = uz.pos || null, bz._pannerAttr = {
- ... (28 more removed lines; see GitHub link above)
+       (mq.volume(), mq.ctx && mq.autoUnlock) && (null === (qq = mq._unlockAudio) || void 0 === qq || qq.call(mq))
+     }
+     Nq && (mq._autoSuspend = () => Wq > 0 ? lq.Howler : Nq())
+   },
+   36815: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Yq
+     });
+     const Yq = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
+   },
+   36813: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq,
+       f: () => lq,
+       g: () => Yq
+     });
+ ... (23 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L784-L789` → after: `L341-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L341-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L341-L349) · [Before (L784-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L784-L789)

```diff
-         for (var iz = Ez._getSoundIds(bz), lz = 0; lz < iz.length; lz++) {
-           var Mz = Ez._soundById(iz[lz]);
-           if (Mz) {
-             if ("number" !== typeof zz) return Mz._stereo;
-             Mz._stereo = zz, Mz._pos = [zz, 0, 0], Mz._node && (Mz._pannerAttr.panningModel = "equalpower", Mz._panner && Mz._panner.pan || uz(Mz, nz), "spatial" === nz ? "undefined" !== typeof Mz._panner.positionX ? (Mz._panner.positionX.setValueAtTime(zz, Howler.ctx.currentTime … [truncated]
-           }
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, qq)) && (this.voices.push(qq), !0)
+       }
+       dropLeastWorth(qq, Eq) {
+         let gq = null,
+           Yq = 1 / 0;
+         for (const lq of qq) {
+           if (!lq.canStop()) continue;
+           const qq = Oq(lq, Eq.startMs);
+           qq < Yq && (gq = lq, Yq = qq)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L792-L811` → after: `L380-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L380-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L380-L392) · [Before (L792-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L792-L811)

```diff
-       }, Howl.prototype.pos = function(zz, bz, Ez, nz) {
-         var iz = this;
-         if (!iz._webAudio) return iz;
-         if ("loaded" !== iz._state) return iz._queue.push({
-           event: "pos",
-           action: function() {
-             iz.pos(zz, bz, Ez, nz)
-           }
-         }), iz;
-         if (bz = "number" !== typeof bz ? 0 : bz, Ez = "number" !== typeof Ez ? -.5 : Ez, "undefined" === typeof nz) {
-           if ("number" !== typeof zz) return iz._pos;
-           iz._pos = [zz, bz, Ez]
-         }
-         for (var lz = iz._getSoundIds(nz), Mz = 0; Mz < lz.length; Mz++) {
-           var tz = iz._soundById(lz[Mz]);
-           if (tz) {
- ... (4 more removed lines; see GitHub link above)
+       }
+     }
+     class lq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = qq
+       }
+       setBooleanType(qq, Eq) {
+         const gq = this._getTotalBooleanVal();
+         this.booleans[qq] = !!Eq;
+         const Yq = this.getTotalBooleanVal();
+         var lq;
+         Yq !== gq && (null === (lq = this._onUpdate) || void 0 === lq || lq.call(this, Yq, this.booleans));
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L813-L832` → after: `L394-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L394-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L394-L420) · [Before (L813-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L813-L832)

```diff
-       }, Howl.prototype.orientation = function(zz, bz, Ez, nz) {
-         var iz = this;
-         if (!iz._webAudio) return iz;
-         if ("loaded" !== iz._state) return iz._queue.push({
-           event: "orientation",
-           action: function() {
-             iz.orientation(zz, bz, Ez, nz)
-           }
-         }), iz;
-         if (bz = "number" !== typeof bz ? iz._orientation[1] : bz, Ez = "number" !== typeof Ez ? iz._orientation[2] : Ez, "undefined" === typeof nz) {
-           if ("number" !== typeof zz) return iz._orientation;
-           iz._orientation = [zz, bz, Ez]
-         }
-         for (var lz = iz._getSoundIds(nz), Mz = 0; Mz < lz.length; Mz++) {
-           var tz = iz._soundById(lz[Mz]);
-           if (tz) {
- ... (4 more removed lines; see GitHub link above)
+       }
+       removeBoolean(qq) {
+         const Eq = this._getTotalBooleanVal();
+         delete this.booleans[qq];
+         const gq = this._getTotalBooleanVal();
+         var Yq;
+         null !== gq && gq !== Eq && (null === (Yq = this._onUpdate) || void 0 === Yq || Yq.call(this, gq, this.booleans));
+         return null !== gq && void 0 !== gq && gq
+       }
+       getBooleanType(qq) {
+         return this.booleans[qq]
+       }
+       getTotalBooleanVal() {
+         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       }
+       forceUpdate() {
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L893` → after: `L423-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L423-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/94.js#L423-L452) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/94.js#L893)

```diff
-     }()
+       _getTotalBooleanVal() {
+         let qq = !1,
+           Eq = !0;
+         for (const gq in this.booleans) qq = !0, Eq &&= this.booleans[gq];
+         return qq ? Eq : null
+       }
+     }
+     class mq extends lq {
+       getTotalBooleanVal() {
+         const qq = this._getTotalBooleanVal();
+         if (null === qq) throw new Error("Should not be gotten before at least 1 type has been initialised");
+         return qq
+       }
+       _getTotalBooleanVal() {
+         let qq = !1,
+           Eq = !1;
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/95.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/95.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372)

#### 1. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L4-L143` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L5-L9) · [Before (L4-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L4-L143)

```diff
-   4638: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       default: () => Dz
-     });
-     var Ez = bz(56),
-       nz = bz(1490),
-       iz = bz(328),
-       lz = bz(1222),
-       Mz = bz(1574),
-       tz = bz(1256),
-       Hz = bz(1519),
-       Oz = bz(1473),
-       pz = bz(2521);
-     const dz = {
-       retries: 2,
-       minTimeout: 2e3
- ... (124 more removed lines; see GitHub link above)
+   4692: (qq, Eq, gq) => {
+     var Yq;
+     ! function() {
+       var lq = function() {
+         this.init()
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L145-L166` → after: `L11-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L11-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L11-L60) · [Before (L145-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L145-L166)

```diff
-       (0, Uz.e)(Eu), (0, Ez.useEffect)((() => {
-         var zz;
-         if (ez) return;
-         if (!Sz) return void zu({
-           status: "notFound",
-           playerKey: Dz
-         });
-         const uz = "urlId" in Sz && (null === (zz = Iz.current) || void 0 === zz ? void 0 : zz.urlId) === Sz.urlId && Bz.current === Wz;
-         if (uz && Cz.current) return;
-         const bz = uz ? null : vz.b.peek(Wz, Sz);
-         let Ez = !1;
-         const nz = zz => "loaded" === zz.status && (zz.playerKey === Dz || "urlId" in Sz && zz.profile.urlId === Sz.urlId);
-         return bz ? (Bz.current = Wz, Cz.current = !1, zu({
-           status: "loaded",
-           profile: bz,
-           playerKey: Dz
- ... (6 more removed lines; see GitHub link above)
+       lq.prototype = {
+         init: function() {
+           var qq = this || Oq;
+           return qq._counter = 1e3, qq._html5AudioPool = [], qq.html5PoolSize = 10, qq._codecs = {}, qq._howls = [], qq._muted = !1, qq._volume = 1, qq._canPlayEvent = "canplaythrough", qq._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, q … [truncated]
+         },
+         volume: function(qq) {
+           var Eq = this || Oq;
+           if (qq = parseFloat(qq), Eq.ctx || Nq(), "undefined" !== typeof qq && qq >= 0 && qq <= 1) {
+             if (Eq._volume = qq, Eq._muted) return Eq;
+             Eq.usingWebAudio && Eq.masterGain.gain.setValueAtTime(qq, Oq.ctx.currentTime);
+             for (var gq = 0; gq < Eq._howls.length; gq++)
+               if (!Eq._howls[gq]._webAudio)
+                 for (var Yq = Eq._howls[gq]._getSoundIds(), lq = 0; lq < Yq.length; lq++) {
+                   var mq = Eq._howls[gq]._soundById(Yq[lq]);
+                   mq && mq._node && (mq._node.volume = mq._volume * qq)
+                 }
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L168-L171` → after: `L62-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L62-L70) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L168-L171)

```diff
-             return {
-               status: "loaded",
-               profile: await Oz.c.getPlayerProfile(zz, uz, dz)
-             }
+             (new Audio).muted && (qq.noAudio = !0)
+           } catch (Eq) {}
+           return qq.noAudio || qq._setupCodecs(), qq
+         },
+         _setupCodecs: function() {
+           var qq = this || Oq,
+             Eq = null;
+           try {
+             Eq = "undefined" !== typeof Audio ? new Audio : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L173-L177` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L72) · [Before (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L173-L177)

```diff
-             return (0, pz.e)(bz) ? {
-               status: "notFound"
-             } : (console.error("Failed to load user profile", bz), {
-               status: "failed"
-             })
+             return qq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L179-L202` → after: `L74-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L74-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L74-L125) · [Before (L179-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L179-L202)

```diff
-         }(Wz, Sz).then((zz => {
-           Ez || ("loaded" === zz.status && (Bz.current = Wz, Cz.current = !0), zu((uz => "failed" === zz.status && nz(uz) ? uz : {
-             ...zz,
-             playerKey: Dz
-           })))
-         })), () => {
-           Ez = !0
-         }
-       }), [ez, Dz, Wz, uu]);
-       const nu = "loading" === kz.status || kz.playerKey === Dz || "loaded" === kz.status && !!Sz && "urlId" in Sz && kz.profile.urlId === Sz.urlId ? kz : {
-           status: "loading"
-         },
-         iu = "loaded" === nu.status ? nu.profile : null,
-         lu = "loading" === nu.status ? null : function(zz) {
-           if ("loaded" === zz.status) {
-             const {
- ... (8 more removed lines; see GitHub link above)
+           if (!Eq || "function" !== typeof Eq.canPlayType) return qq;
+           var gq = Eq.canPlayType("audio/mpeg;").replace(/^no$/, ""),
+             Yq = qq._navigator ? qq._navigator.userAgent : "",
+             lq = Yq.match(/OPR\/([0-6].)/g),
+             mq = lq && parseInt(lq[0].split("/")[1], 10) < 33,
+             xq = -1 !== Yq.indexOf("Safari") && -1 === Yq.indexOf("Chrome"),
+             Aq = Yq.match(/Version\/(.*?) /),
+             cq = xq && Aq && parseInt(Aq[1], 10) < 15;
+           return qq._codecs = {
+             mp3: !(mq || !gq && !Eq.canPlayType("audio/mp3;").replace(/^no$/, "")),
+             mpeg: !!gq,
+             opus: !!Eq.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
+             ogg: !!Eq.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             oga: !!Eq.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
+             wav: !!(Eq.canPlayType('audio/wav; codecs="1"') || Eq.canPlayType("audio/wav")).replace(/^no$/, ""),
+             aac: !!Eq.canPlayType("audio/aac;").replace(/^no$/, ""),
+ ... (36 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L204-L239` → after: `L127-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L127-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L127-L163) · [Before (L204-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L204-L239)

```diff
-           return "notFound" === zz.status ? (0, Hz.Z)() : null
-         }(nu),
-         Mu = null !== iu && void 0 !== iu && iu.urlId ? (0, lz.j)({
-           urlId: iu.urlId,
-           name: iu.player.name
-         }) : null;
-       (0, Zz.e)(Mu);
-       const tu = null !== iu && void 0 !== iu && iu.player.cosmetics.profileEffect ? Jz.g[iu.player.cosmetics.profileEffect] : void 0,
-         Hu = null !== iu && !ez && Wz.getPlayerName().toLowerCase() === iu.player.name.toLowerCase(),
-         Ou = (0, mz.e)(null === iu || void 0 === iu ? void 0 : iu.player.name),
-         pu = Hu && Wz.playerHasRank("youtuber");
-       Iz.current = iu;
-       const du = (0, Ez.useCallback)((() => {
-           Sz && (vz.b.invalidate(Sz), vz.b.get(Wz, Sz).then((zz => {
-             Qz.current === Dz && (Cz.current = !0, zu({
-               status: "loaded",
- ... (20 more removed lines; see GitHub link above)
+         },
+         _obtainHtml5Audio: function() {
+           var qq = this || Oq;
+           if (qq._html5AudioPool.length) return qq._html5AudioPool.pop();
+           var Eq = (new Audio).play();
+           return Eq && "undefined" !== typeof Promise && (Eq instanceof Promise || "function" === typeof Eq.then) && Eq.catch((function() {
+             console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
+           })), new Audio
+         },
+         _releaseHtml5Audio: function(qq) {
+           var Eq = this || Oq;
+           return qq._unlocked && Eq._html5AudioPool.push(qq), Eq
+         },
+         _autoSuspend: function() {
+           var qq = this;
+           if (qq.autoSuspend && qq.ctx && "undefined" !== typeof qq.ctx.suspend && Oq.usingWebAudio) {
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L241-L252` → after: `L165-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L165-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L165-L206) · [Before (L241-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L241-L252)

```diff
-       }), [iu, Fu]), (0, cz.jsxs)("div", {
-         className: Tz()("PlayerProfile", {
-           PlayerProfilePortrait: bz
-         }),
-         children: [lu && (0, cz.jsx)(Mz.d, {
-           meta: lu
-         }), (0, cz.jsxs)("div", {
-           className: "PlayerProfileBackgroundContainer",
-           children: [tu && (0, cz.jsx)(tu, {}), !tu && (0, cz.jsx)("div", {
-             className: "PlayerProfileBackground",
-             style: {
-               backgroundImage: `url(${Yz.current})`
+       };
+       var Oq = new lq,
+         mq = function(qq) {
+           qq.src && 0 !== qq.src.length ? this.init(qq) : console.error("An array of source files must be passed with any new Howl.")
+         };
+       mq.prototype = {
+         init: function(qq) {
+           var Eq = this;
+           return Oq.ctx || Nq(), Eq._autoplay = qq.autoplay || !1, Eq._format = "string" !== typeof qq.format ? qq.format : [qq.format], Eq._html5 = qq.html5 || !1, Eq._muted = qq.mute || !1, Eq._loop = qq.loop || !1, Eq._pool = qq.pool || 5, Eq._preload = "boolean" !== typeof qq … [truncated]
+             method: qq.xhr && qq.xhr.method ? qq.xhr.method : "GET",
+             headers: qq.xhr && qq.xhr.headers ? qq.xhr.headers : null,
+             withCredentials: !(!qq.xhr || !qq.xhr.withCredentials) && qq.xhr.withCredentials
+           }, Eq._duration = 0, Eq._state = "unloaded", Eq._sounds = [], Eq._endTimers = {}, Eq._queue = [], Eq._playLock = !1, Eq._onend = qq.onend ? [{
+             LN: qq.onend
+           }] : [], Eq._onfade = qq.onfade ? [{
+             LN: qq.onfade
+ ... (26 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L254-L426` → after: `L208-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L208-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L208-L228) · [Before (L254-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L254-L426)

```diff
-           })]
-         }), (0, cz.jsxs)("div", {
-           className: "PlayerProfileHeader",
-           children: [(0, cz.jsx)(rz.d, {
-             onClick: Eu,
-             children: zz("general:back")
-           }), iu && !ez && !Hu && hz.featureFlags.useSocialFeatures && (0, cz.jsx)("div", {
-             className: "PlayerProfileExclusionActions",
-             children: (0, cz.jsx)(qz.e, {
-               playerName: iu.player.name,
-               className: "SmallTextLight"
-             })
-           })]
-         }), "loading" === nu.status && (0, cz.jsx)("div", {
-           className: "PlayerProfileCentredMessage",
-           children: (0, cz.jsx)(sz.c, {})
- ... (157 more removed lines; see GitHub link above)
+           }), Eq._preload && "none" !== Eq._preload && Eq.load(), Eq
+         },
+         load: function() {
+           var qq = this,
+             Eq = null;
+           if (Oq.noAudio) qq._emit("loaderror", null, "No audio support.");
+           else {
+             "string" === typeof qq._src && (qq._src = [qq._src]);
+             for (var gq = 0; gq < qq._src.length; gq++) {
+               var Yq, lq;
+               if (qq._format && qq._format[gq]) Yq = qq._format[gq];
+               else {
+                 if ("string" !== typeof(lq = qq._src[gq])) {
+                   qq._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
+                   continue
+                 }(Yq = /^data:audio\/([^;,]+);/i.exec(lq)) || (Yq = /\.([^.]+)$/.exec(lq.split("?", 1)[0])), Yq && (Yq = Yq[1].toLowerCase())
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L428-L437` → after: `L230-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L230-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L230-L693) · [Before (L428-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L428-L437)

```diff
-           },
-           prefixText: iz.y[uz],
-           placeholderText: "playBloxd",
-           initialValue: null !== (zz = null === bz || void 0 === bz ? void 0 : bz.handle) && void 0 !== zz ? zz : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: bz ? "general:remove" : void 0
-         }).getResult().then((async zz => {
-           if ("notificationTornDown" !== zz && null !== zz) try {
-             "submit" === zz.type ? await Hz.c.setSocialLink(nz, uz, zz.value) : await Hz.c.clearSocialLink(nz, uz), pz()
+             if (Eq) return qq._src = Eq, qq._state = "loading", "https:" === window.location.protocol && "http:" === Eq.slice(0, 5) && (qq._html5 = !0, qq._webAudio = !1), new xq(qq), qq._webAudio && cq(qq), qq;
+             qq._emit("loaderror", null, "No codec support for selected audio sources.")
+           }
+         },
+         play: function(qq, Eq) {
+           var gq = this,
+             Yq = null;
+           if ("number" === typeof qq) Yq = qq, qq = null;
+           else {
+             if ("string" === typeof qq && "loaded" === gq._state && !gq._sprite[qq]) return null;
+             if ("undefined" === typeof qq && (qq = "__default", !gq._playLock)) {
+               for (var lq = 0, mq = 0; mq < gq._sounds.length; mq++) gq._sounds[mq].Av && !gq._sounds[mq]._ended && (lq++, Yq = gq._sounds[mq]._id);
+               1 === lq ? qq = null : Yq = null
+             }
+           }
+           var xq = Yq ? gq._soundById(Yq) : gq._inactiveSound();
+ ... (448 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L439-L442` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L695) · [Before (L439-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L439-L442)

```diff
-             console.error("Failed to update social link", bz), Oz.NotificationProvider.showAlertPopup({
-               title: bz.errorMessageForUser,
-               confirmText: "general:ok"
-             })
+             qq.onerror()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L444-L474` → after: `L697-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L697-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L697-L700) · [Before (L444-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L444-L474)

```diff
-         }))
-       }
-       if (bz) {
-         const zz = `@${bz.handle}`;
-         return (0, dz.jsxs)("a", {
-           className: "PlayerProfileSocialLink",
-           style: {
-             background: Kz.color
-           },
-           href: bz.profileUrl,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: [(0, dz.jsxs)("div", {
-             className: "PlayerProfileSocialLinkMain",
-             children: [(0, dz.jsx)(Zz, {
-               platform: uz
- ... (15 more removed lines; see GitHub link above)
+         },
+         Bq = function(qq, Eq) {
+           var gq = function() {
+               Eq._emit("loaderror", null, "Decoding audio data failed.")
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L476-L511` → after: `L702-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L702-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L702-L858) · [Before (L476-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L476-L511)

```diff
-             children: (0, dz.jsx)(Mz.c, {
-               name: "pen-to-square"
-             })
-           }), !Ez && (0, dz.jsx)("span", {
-             className: "PlayerProfileSocialLinkArrow",
-             children: (0, dz.jsx)(Mz.c, {
-               name: "arrow-up-right-from-square"
-             })
-           })]
-         })
-       }
-       return (0, dz.jsxs)("button", {
-         type: "button",
-         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
-         style: {
-           background: Kz.color
- ... (20 more removed lines; see GitHub link above)
+             Yq = function(qq) {
+               qq && Eq._sounds.length > 0 ? (Aq[Eq._src] = qq, Wq(Eq, qq)) : gq()
+             };
+           "undefined" !== typeof Promise && 1 === Oq.ctx.decodeAudioData.length ? Oq.ctx.decodeAudioData(qq).then(Yq).catch(gq) : Oq.ctx.decodeAudioData(qq, Yq, gq)
+         },
+         Wq = function(qq, Eq) {
+           Eq && !qq._duration && (qq._duration = Eq.duration), 0 === Object.keys(qq._sprite).length && (qq._sprite = {
+             __default: [0, 1e3 * qq._duration]
+           }), "loaded" !== qq._state && (qq._state = "loaded", qq._emit("load"), qq._loadQueue())
+         },
+         Nq = function() {
+           if (Oq.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? Oq.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Oq.ctx = new webkitAudioContext : Oq.usingWebAudio = !1
+             } catch (lq) {
+               Oq.usingWebAudio = !1
+ ... (141 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/95.js` (Changed code · before: `L513-L543` → after: `L860-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7777a7946fe5d123e7075c12aa59b6846e1b6e0a54d8dc14049e4c5293c14372) · [After (L860-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/95.js#L860-L893) · [Before (L513-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/95.js#L513-L543)

```diff
-         })]
-       })
-     }
- 
-     function Kz(zz) {
-       let {
-         socialLinks: uz,
-         editable: bz = !1,
-         userContext: Ez,
-         onLinksUpdated: nz
-       } = zz;
-       if (!bz && 0 === uz.length) return null;
-       const lz = new Map(uz.map((zz => [zz.platform, zz]))),
-         Mz = bz ? iz.w : uz.map((zz => zz.platform));
-       return (0, dz.jsx)("div", {
-         className: "PlayerProfileSocialLinks",
- ... (15 more removed lines; see GitHub link above)
+         } else 2 === Oq.length && (qq = Oq[0], gq = parseInt(Oq[1], 10));
+         for (var mq = lq._getSoundIds(gq), xq = 0; xq < mq.length; xq++)
+           if (Yq = lq._soundById(mq[xq])) {
+             var Aq = Yq._pannerAttr;
+             Aq = {
+               coneInnerAngle: "undefined" !== typeof qq.coneInnerAngle ? qq.coneInnerAngle : Aq.coneInnerAngle,
+               coneOuterAngle: "undefined" !== typeof qq.coneOuterAngle ? qq.coneOuterAngle : Aq.coneOuterAngle,
+               coneOuterGain: "undefined" !== typeof qq.coneOuterGain ? qq.coneOuterGain : Aq.coneOuterGain,
+               distanceModel: "undefined" !== typeof qq.distanceModel ? qq.distanceModel : Aq.distanceModel,
+               maxDistance: "undefined" !== typeof qq.maxDistance ? qq.maxDistance : Aq.maxDistance,
+               refDistance: "undefined" !== typeof qq.refDistance ? qq.refDistance : Aq.refDistance,
+               rolloffFactor: "undefined" !== typeof qq.rolloffFactor ? qq.rolloffFactor : Aq.rolloffFactor,
+               panningModel: "undefined" !== typeof qq.panningModel ? qq.panningModel : Aq.panningModel
+             };
+             var cq = Yq._panner;
+             cq ? (cq.coneInnerAngle = Aq.coneInnerAngle, cq.coneOuterAngle = Aq.coneOuterAngle, cq.coneOuterGain = Aq.coneOuterGain, cq.distanceModel = Aq.distanceModel, cq.maxDistance = Aq.maxDistance, cq.refDistance = Aq.refDistance, cq.rolloffFactor = Aq.rolloffFactor, cq.pann … [truncated]
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/96.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/96.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4-L1425` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L4-L19) · [Before (L4-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4-L1425)

```diff
-   28618: (zz, uz, bz) => {
-     var Ez = {
-       "./Player_Atlas.png": 27588,
-       "./astro_set_1_attachable.png": 27592,
-       "./astro_set_2_attachable.png": 27598,
-       "./astro_set_3_attachable.png": 27602,
-       "./astro_set_4_attachable.png": 27604,
-       "./beaver_lumberjack.png": 27611,
-       "./bee_set_1_attachable.png": 27618,
-       "./bee_set_2_attachable.png": 27626,
-       "./bee_set_3_attachable_blue.png": 27630,
-       "./bee_set_3_attachable_green.png": 27636,
-       "./bee_set_3_attachable_red.png": 27639,
-       "./bee_set_4_attachable.png": 27642,
-       "./capeTextures/cape_cow_cream.png": 27647,
-       "./capeTextures/cape_cow_normal.png": 27653,
- ... (1406 more removed lines; see GitHub link above)
+   4708: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => Uq
+     });
+     var Yq = gq(57),
+       lq = gq(1512),
+       Oq = gq(307),
+       mq = gq(1219),
+       xq = gq(1592),
+       Aq = gq(1261),
+       cq = gq(1532),
+       uq = gq(1477),
+       Bq = gq(2589);
+     const Wq = {
+       retries: 2,
+       minTimeout: 2e3
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L1429-L1430` → after: `L50-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L50-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L50-L70) · [Before (L1429-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L1429-L1430)

```diff
-       var uz = iz(zz);
-       return bz(uz)
+       let {
+         icon: Eq,
+         label: gq,
+         value: Yq
+       } = qq;
+       return (0, Lq.jsxs)("div", {
+         className: "PlayerProfileStat",
+         children: [(0, Lq.jsx)(iq.d, {
+           name: Eq,
+           className: "PlayerProfileStatIcon"
+         }), (0, Lq.jsxs)("div", {
+           className: "PlayerProfileStatText",
+           children: [(0, Lq.jsx)("div", {
+             className: "PlayerProfileStatLabel SmallTextLight",
+             children: gq
+           }), (0, Lq.jsx)("div", {
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L1434-L1436` → after: `L74-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L74-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L74-L86) · [Before (L1434-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L1434-L1436)

```diff
-       if (!bz.o(Ez, zz)) {
-         var uz = new Error("Cannot find module '" + zz + "'");
-         throw uz.code = "MODULE_NOT_FOUND", uz
+       let {
+         profile: Eq
+       } = qq;
+       const {
+         t: gq,
+         selectedLanguage: Yq
+       } = (0, jq.v)();
+       let lq = gq("homePage:profileUnknown");
+       if (Eq.lastOnline) {
+         const qq = (0, jq.h)(Yq.code, "homePage:profileTimeAgo");
+         lq = gq("homePage:profileTimeAgo", {
+           time: (0, Oq.lb)(qq, Eq.lastOnline, Date.now())
+         })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L1438-L2864` → after: `L88-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L88-L108) · [Before (L1438-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L1438-L2864)

```diff
-       return Ez[zz]
-     }
-     nz.keys = function() {
-       return Object.keys(Ez)
-     }, nz.resolve = iz, zz.exports = nz, nz.id = 28622
-   },
-   9176: (zz, uz, bz) => {
-     var Ez = {
-       "./allium.png": 9183,
-       "./alloy_kiln_back.png": 9188,
-       "./alloy_kiln_front.png": 9195,
-       "./alloy_kiln_side.png": 9197,
-       "./alloy_kiln_side_running0.png": 9204,
-       "./alloy_kiln_side_running1.png": 9211,
-       "./alloy_kiln_side_running2.png": 9216,
-       "./alloy_kiln_side_running3.png": 9220,
- ... (1411 more removed lines; see GitHub link above)
+       let mq = gq("homePage:profileUnknown");
+       return Eq.accountCreatedAt && (mq = new Date(Eq.accountCreatedAt).toLocaleDateString(void 0, {
+         year: "numeric",
+         month: "short",
+         day: "numeric"
+       })), (0, Lq.jsxs)("div", {
+         className: "PlayerProfileStats",
+         children: [(0, Lq.jsx)(kq, {
+           icon: "hourglass",
+           label: gq("homePage:profileTimePlayed"),
+           value: (0, Tq.e)(Eq.totalPlayMinutes)
+         }), (0, Lq.jsx)(kq, {
+           icon: "wifi",
+           label: gq("homePage:profileLastOnline"),
+           value: lq
+         }), (0, Lq.jsx)(kq, {
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L2867-L2872` → after: `L111-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L111-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L111-L343) · [Before (L2867-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L2867-L2872)

```diff
-     function iz(zz) {
-       if (!bz.o(Ez, zz)) {
-         var uz = new Error("Cannot find module '" + zz + "'");
-         throw uz.code = "MODULE_NOT_FOUND", uz
-       }
-       return Ez[zz]
+     function Uq() {
+       const {
+         t: qq
+       } = (0, jq.v)(), Eq = (0, yq.useNavigatePreserveSearch)(), gq = (0, Nq.l)(), {
+         playerName: vq,
+         playerUrlName: nq
+       } = (0, lq.v)(), Tq = (0, lq.q)(), kq = (0, mq.c)(Tq.pathname), Uq = kq && ("urlId" in kq ? `urlId:${kq.urlId}` : `name:${kq.lowerCaseName}`), Fq = (0, Yq.useRef)(Uq);
+       Fq.current = Uq;
+       const {
+         userContext: sq,
+         isUserContextUpdating: Xq
+       } = (0, Vq.c)(), wq = (0, Yq.useRef)(null), Kq = (0, Yq.useRef)(null), Cq = (0, Yq.useRef)(null), Iq = (0, Yq.useRef)(!1), eq = (0, Yq.useRef)((0, Oq.gc)(Jq)), [Dq, qE] = (0, Yq.useState)((() => {
+         const qq = kq && rq.c.peek(sq, kq);
+         return qq ? {
+           status: "loaded",
+           profile: qq,
+ ... (217 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L2878-L2986` → after: `L346-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L346-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L346-L384) · [Before (L2878-L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L2878-L2986)

```diff
-   26327: (zz, uz, bz) => {
-     var Ez = {
-       "./Air Walk.png": 26329,
-       "./Antlers Bonus.png": 26332,
-       "./Arrow Damage Enchantment.png": 26336,
-       "./Arrow Speed Enchantment.png": 26342,
-       "./Attack Speed Enchantment.png": 26351,
-       "./Blindness.png": 26357,
-       "./Boating.png": 26362,
-       "./Bounciness.png": 26365,
-       "./Brain Rot.png": 26371,
-       "./Break Speed Enchantment.png": 26376,
-       "./Bunny Hop.png": 26383,
-       "./Critical Damage Enchantment.png": 26391,
-       "./Cross.png": 26395,
-       "./Damage Enchantment.png": 26402,
- ... (93 more removed lines; see GitHub link above)
+   4721: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => dq
+     });
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(4465),
+       mq = gq(1183),
+       xq = gq(1025),
+       Aq = gq(1422),
+       cq = gq(1477),
+       uq = gq(1336),
+       Bq = gq(2460),
+       Wq = gq(1070);
+     const Nq = {
+       youtube: {
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4724-L4725` → after: `L389-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L389-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L389-L403) · [Before (L4724-L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4724-L4725)

```diff
-       var uz = iz(zz);
-       return bz(uz)
+       let {
+         platform: Eq
+       } = qq;
+       const gq = "youtube" === Eq;
+       return (0, Wq.jsxs)("span", {
+         className: lq()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: gq
+         }),
+         children: [gq && (0, Wq.jsx)(Bq.b, {
+           variant: "white"
+         }), !gq && (0, Wq.jsx)(xq.d, {
+           name: Nq[Eq].icon,
+           kit: "brands"
+         })]
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4729-L4755` → after: `L407-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L407-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L407-L417) · [Before (L4729-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4729-L4755)

```diff
-       if (!bz.o(Ez, zz)) {
-         var uz = new Error("Cannot find module '" + zz + "'");
-         throw uz.code = "MODULE_NOT_FOUND", uz
-       }
-       return Ez[zz]
-     }
-     nz.keys = function() {
-       return Object.keys(Ez)
-     }, nz.resolve = iz, zz.exports = nz, nz.id = 17044
-   },
-   9076: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       blockMetadata: () => lz.k,
-       getDefaultModel: () => Oz,
-       getDefaultSkyBox: () => pz,
-       getDefaultTexture: () => Hz,
- ... (11 more removed lines; see GitHub link above)
+       let {
+         platform: Eq,
+         link: gq,
+         editable: Yq,
+         userContext: lq,
+         onLinksUpdated: Bq
+       } = qq;
+       const {
+         t: Vq
+       } = (0, mq.v)(), dq = Nq[Eq];
+       if (!gq && !Yq) return null;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4757-L4780` → after: `L419-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L419-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L419-L442) · [Before (L4757-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4757-L4780)

```diff
-     function Hz(zz, uz) {
-       let nz;
-       try {
-         if (uz === Ez.g.BLOCK) nz = {
-           type: Ez.i.BASE64,
-           url: tz.block(zz)
-         };
-         else if (uz === Ez.g.ITEM) nz = {
-           type: Ez.i.BASE64,
-           url: tz.item(zz)
-         };
-         else if (uz === Ez.g.ICON) nz = {
-           type: Ez.i.BASE64,
-           url: bz(26327)(`./${zz}.png`)
-         };
-         else if (uz === Ez.g.LIFEFORM_ATLAS) {
- ... (8 more removed lines; see GitHub link above)
+       function jq() {
+         var qq;
+         if (!lq || !Bq) return;
+         uq.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: dq.name
+             }
+           },
+           prefixText: Oq.w[Eq],
+           placeholderText: "playBloxd",
+           initialValue: null !== (qq = null === gq || void 0 === gq ? void 0 : gq.handle) && void 0 !== qq ? qq : "",
+           maxLength: 30,
+           submitText: "general:save",
+           secondaryButtonText: gq ? "general:remove" : void 0
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4782-L4787` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L444) · [Before (L4782-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4782-L4787)

```diff
-         } else uz === Ez.g.PLAYER_ASSET && (nz = {
-           type: Ez.i.BASE64,
-           url: bz(28618)(`./${zz}.png`)
-         })
-       } catch {
-         throw new Error(`Default texture for ${zz} not found`)
+         }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4789-L4813` → after: `L446-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L446-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L446-L485) · [Before (L4789-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4789-L4813)

```diff
-       return nz
-     }
- 
-     function Oz(zz, uz) {
-       let nz;
-       try {
-         if (uz === Ez.e.BLOCK) {
-           const uz = bz(28622)(`./${zz}.glb`);
-           nz = {
-             type: Ez.i.BASE64,
-             url: uz
-           }
-         } else if (uz === Ez.e.ITEM) nz = {
-           type: Ez.i.HTTP,
-           url: `${iz.clientSideServerUrls.staticUrl}/models/${zz}.glb`
-         };
- ... (9 more removed lines; see GitHub link above)
+       if (gq) {
+         const qq = `@${gq.handle}`;
+         return (0, Wq.jsxs)("a", {
+           className: "PlayerProfileSocialLink",
+           style: {
+             background: dq.color
+           },
+           href: gq.profileUrl,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: [(0, Wq.jsxs)("div", {
+             className: "PlayerProfileSocialLinkMain",
+             children: [(0, Wq.jsx)(aq, {
+               platform: Eq
+             }), (0, Wq.jsx)("span", {
+               className: "PlayerProfileSocialLinkText",
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4815` → after: `L487-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L487-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L487-L514) · [Before (L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4815)

```diff
-       return nz
+       return (0, Wq.jsxs)("button", {
+         type: "button",
+         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
+         style: {
+           background: dq.color
+         },
+         ...(0, Aq.V)(),
+         onClick: () => {
+           jq()
+         },
+         children: [(0, Wq.jsx)(aq, {
+           platform: Eq
+         }), (0, Wq.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, Wq.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4819` → after: `L518-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L518-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L518-L539) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4819)

```diff
-       return nz.o[zz]
+       let {
+         socialLinks: Eq,
+         editable: gq = !1,
+         userContext: Yq,
+         onLinksUpdated: lq
+       } = qq;
+       if (!gq && 0 === Eq.length) return null;
+       const mq = new Map(Eq.map((qq => [qq.platform, qq]))),
+         xq = gq ? Oq.u : Eq.map((qq => qq.platform));
+       return (0, Wq.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, Wq.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: xq.map((qq => (0, Wq.jsx)(Vq, {
+             platform: qq,
+             link: mq.get(qq),
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/96.js` (Changed code · before: `L4822-L17025` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d6934e5e6e09738c39e06977f67f796d99dcb893ef17461d1e5aeb1037d282a7) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/96.js#L542-L543) · [Before (L4822-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/96.js#L4822-L17025)

```diff
-   33745: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => iz,
-       f: () => Mz,
-       i: () => lz,
-       k: () => nz,
-       o: () => Ez
-     });
-     const Ez = {
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
- ... (12188 more removed lines; see GitHub link above)
+   4713: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/97.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/97.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2)

```diff
- export const ids = [97, 185];
+ export const ids = [97];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4-L15` → after: `L4-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4-L110) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L4-L15)

```diff
-   8877: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       EverythingMenu: () => iM
-     });
-     var Ez = bz(56),
-       nz = bz(1038),
-       iz = bz.n(nz),
-       lz = bz(1181),
-       Mz = bz(1047),
-       tz = bz(1998),
-       Hz = bz(1102),
-       Oz = bz(1089);
+   29244: (qq, Eq, gq) => {
+     var Yq = {
+       "./Player_Atlas.png": 28291,
+       "./astro_set_1_attachable.png": 28300,
+       "./astro_set_2_attachable.png": 28308,
+       "./astro_set_3_attachable.png": 28311,
+       "./astro_set_4_attachable.png": 28316,
+       "./beaver_lumberjack.png": 28321,
+       "./bee_set_1_attachable.png": 28326,
+       "./bee_set_2_attachable.png": 28328,
+       "./bee_set_3_attachable_blue.png": 28330,
+       "./bee_set_3_attachable_green.png": 28338,
+       "./bee_set_3_attachable_red.png": 28341,
+       "./bee_set_4_attachable.png": 28348,
+       "./capeTextures/cape_cow_cream.png": 28352,
+       "./capeTextures/cape_cow_normal.png": 28360,
+ ... (91 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L18-L76` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L113-L114) · [Before (L18-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L18-L76)

```diff
-       let {
-         items: uz,
-         onClick: bz,
-         selectedItemId: Ez,
-         className: nz,
-         padStartsOnTab: pz = !0
-       } = zz;
-       const {
-         t: dz
-       } = (0, lz.F)(), Fz = (0, Hz.n)(), Zz = [];
-       for (const iz of uz) {
-         var Rz;
-         const zz = Zz[Zz.length - 1];
-         var Kz;
-         if (zz && zz.title === (null !== (Rz = iz.section) && void 0 !== Rz ? Rz : null)) zz.items.push(iz);
-         else Zz.push({
- ... (43 more removed lines; see GitHub link above)
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L94-L113` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L118-L120) · [Before (L94-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L94-L113)

```diff
-       let {
-         setApplySettingsCallback: uz
-       } = zz;
-       const {
-         clientEscMenuOptions: bz
-       } = (0, vz.m)(["clientEscMenuOptions"]), [nz, iz] = (0, Ez.useState)(!1), [lz, Mz] = (0, Ez.useState)(!1), [tz, Hz] = (0, Ez.useState)(6400), [pz, dz] = (0, Ez.useState)(3600), [Fz, Zz] = (0, Ez.useState)(!1), [Rz, wz] = (0, Ez.useState)(!1);
- 
-       function Xz(zz) {
-         const uz = "screenshot" === zz ? Mz : iz;
-         uz(!0);
-         const bz = Fz ? "normals" : Rz ? "depth" : null;
-         xz.devTools.downloadScene(zz, {
-           width: tz,
-           height: pz,
-           colouring: bz
-         }).catch((zz => {
- ... (4 more removed lines; see GitHub link above)
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L115-L216` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L122) · [Before (L115-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L115-L216)

```diff
-       return (0, Oz.jsxs)("div", {
-         className: "DeveloperToolsCategory",
-         children: [(0, Oz.jsx)(Nz.b, {
-           label: "Disable Ambient Occlusion",
-           checked: bz.disableAmbientOcclusion,
-           onClick: zz => {
-             vz.e.setClientEscMenuOptions({
-               disableAmbientOcclusion: zz
-             }), uz((() => Nz.j))
-           },
-           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
-         }), xz.devTools.supports("ambientLight") && (0, Oz.jsx)(Nz.f, {
-           name: "Ambient Lighting Intensity",
-           min: 0,
-           max: 1,
-           step: .01,
- ... (86 more removed lines; see GitHub link above)
+       return Yq[qq]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L218-L236` → after: `L124-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L124-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L124-L271) · [Before (L218-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L218-L236)

```diff
-     var Az = bz(128),
-       Tz = bz(1118),
-       Lz = bz(1195),
-       Pz = bz(2763),
-       Gz = bz(1482),
-       az = bz(1256),
-       Vz = bz(1222),
-       mz = bz(2852),
-       qz = bz(1973),
-       hz = bz(1473),
-       Uz = bz(328),
-       cz = bz(2171),
-       gz = bz(2178),
-       Sz = bz(2532),
-       yz = bz(1597),
-       Dz = bz(2828),
- ... (3 more removed lines; see GitHub link above)
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 29244
+   },
+   33533: (qq, Eq, gq) => {
+     var Yq = {
+       "./67/67_Model.glb": 33537,
+       "./67/67_Reconstructed.glb": 33540,
+       "./Armour Collector/Armour Collector_Model.glb": 33546,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33554,
+       "./Bear/Bear_Model.glb": 33560,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33563,
+       "./Bobino Musculino/Bobino Musculino_Reconstructed.glb": 33569,
+       "./Camel/Camel_Model.glb": 33573,
+       "./Capitano Explovissimo/Capitano Explovissimo_Model.glb": 33576,
+       "./Capitano Explovissimo/Capitano Explovissimo_Reconstructed.glb": 33584,
+ ... (132 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L239-L274` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L274-L275) · [Before (L239-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L239-L274)

```diff
-       const {
-         t: uz,
-         selectedLanguage: bz
-       } = (0, lz.F)(), {
-         userContext: nz
-       } = (0, Fz.c)(), {
-         superRankInfo: iz
-       } = nz, Mz = zz && ((0, Uz.Bc)(iz) || nz.ranksMayChange) && (0, gz.purchasesAllowed)(), {
-         accountId: tz,
-         data: Hz
-       } = (0, Sz.g)(Dz.d, Mz);
-       if ((0, Ez.useEffect)((() => {
-           if (Mz) return Dz.d.watchAccount(), yz.b.addRefetchListener("billing", (zz => {
-             "reconnected" === zz ? Dz.d.refreshAfterReconnect() : Dz.d.refresh()
-           }))
-         }), [Mz]), !Mz || !(0, Uz.Bc)(iz) || null === Hz || tz !== nz.whamm) return null;
- ... (20 more removed lines; see GitHub link above)
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L284-L346` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L279-L281) · [Before (L284-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L284-L346)

```diff
-       let {
-         showing: uz
-       } = zz;
-       const {
-         t: bz
-       } = (0, lz.F)(), {
-         data: Ez,
-         failed: nz
-       } = (0, Sz.g)(kz.h, uz);
-       return 0 === (null === Ez || void 0 === Ez ? void 0 : Ez.length) || null === Ez && !nz ? null : (0, Oz.jsxs)("div", {
-         className: "SettingBox AccountSettingsPaymentHistory",
-         children: [(0, Oz.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: bz("paymentHistory:title")
-         }), null === Ez && nz && (0, Oz.jsx)("div", {
-           className: "AccountSettingsPaymentHistoryError",
- ... (47 more removed lines; see GitHub link above)
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L349-L363` → after: `L285-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L285-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L285-L601) · [Before (L349-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L349-L363)

```diff
-     var Hu = bz(316),
-       Ou = bz(2379);
-     const pu = {
-       appStore: {
-         name: "App Store",
-         ...Hu.hc.appStore
-       },
-       googlePlay: {
-         name: "Google Play",
-         ...Hu.hc.googlePlay
-       },
-       discord: {
-         name: "Discord",
-         ...Hu.hc.discord
-       }
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 33533
+   },
+   27543: (qq, Eq, gq) => {
+     var Yq = {
+       "./67/67_Atlas.png": 27551,
+       "./67/variations/0_67_default.png": 27554,
+       "./Armour Collector/Armour Collector_Atlas.png": 27560,
+       "./Armour Collector/variations/0_armour collector_default.png": 27562,
+       "./Bear/BearSaddle_Atlas.png": 27571,
+       "./Bear/Bear_Atlas.png": 27573,
+       "./Bear/variations/0_bear_default.png": 27582,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27588,
+       "./Bobino Musculino/variations/0_bobino musculino_default.png": 27592,
+       "./Camel/CamelSaddle_Atlas.png": 27599,
+ ... (301 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L367-L477` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L605-L606) · [Before (L367-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L367-L477)

```diff
-       let {
-         warning: uz,
-         subscriptions: bz
-       } = zz;
-       const {
-         t: Ez
-       } = (0, lz.F)();
-       return null !== bz && 0 === bz.length ? (0, Oz.jsx)(Oz.Fragment, {
-         children: Ez(uz)
-       }) : (0, Oz.jsxs)("div", {
-         className: "DeleteAccountSubtitle",
-         children: [Ez(uz), null === bz && (0, Oz.jsx)("div", {
-           className: "DeleteAccountSubtitleNote",
-           children: Ez("auth:deleteAccountSubscriptionsLoadFailed")
-         }), null !== bz && (0, Oz.jsxs)(Oz.Fragment, {
-           children: [(0, Oz.jsx)("div", {
- ... (95 more removed lines; see GitHub link above)
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L484-L569` → after: `L610-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L610-L612) · [Before (L484-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L484-L569)

```diff
-       let {
-         showing: uz
-       } = zz;
-       const {
-         t: bz
-       } = (0, lz.F)(), {
-         data: Ez,
-         failed: nz
-       } = (0, Sz.g)(Zu.b, uz), iz = null === Ez ? null : (0, Zu.d)(Ez);
-       return (0, Oz.jsxs)("div", {
-         className: "SettingBox BlockedAndIgnoredPlayers",
-         children: [(0, Oz.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: bz("settingsMenu:blockedAndIgnoredPlayers")
-         }), null === iz && !nz && (0, Oz.jsx)(oz.c, {}), null === iz && nz && (0, Oz.jsxs)("div", {
-           className: "BlockedAndIgnoredPlayersError",
- ... (70 more removed lines; see GitHub link above)
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L571-L851` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L614) · [Before (L571-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L571-L851)

```diff
-       return (0, Ez.useEffect)((() => (!0 === bz ? (clearInterval(iu.current), iu.current = setInterval(Zz, 1e3)) : clearInterval(iu.current), () => {
-         clearInterval(iu.current)
-       })), [bz, Zz]), (0, Ez.useEffect)((() => {
-         var zz;
-         sz(null !== (zz = Rz.getPlayerName()) && void 0 !== zz ? zz : "")
-       }), [Rz]), (0, Ez.useEffect)((() => {
-         if (!bz || !Ku || Xz) return;
-         let zz = !1;
-         return Ru(!0), du([]), hz.c.getPlayerProfile(Rz, {
-           lowerCaseName: Rz.getPlayerName().toLowerCase()
-         }).then((uz => {
-           zz || du(uz.socialLinks)
-         })).catch((zz => {
-           console.error("Failed to load social links", zz)
-         })).finally((() => {
-           zz || Ru(!1)
- ... (265 more removed lines; see GitHub link above)
+       return Yq[qq]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L853-L1038` → after: `L616-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L616-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L616-L1425) · [Before (L853-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L853-L1038)

```diff
-     var su = bz(8892),
-       ru = bz(2882),
-       ou = bz(1241),
-       Nu = bz(1405);
-     const vu = (0, Ez.memo)((function(zz) {
-         let {
-           inGame: uz
-         } = zz;
-         const {
-           t: bz,
-           selectedLanguage: Ez
-         } = (0, lz.F)(), {
-           clientEscMenuOptions: nz,
-           showDebugOverlay: iz
-         } = (0, vz.m)(["clientEscMenuOptions", "showDebugOverlay"]), Mz = (0, Zz.g)("hideCoordinates");
-         let tz = "settingsMenu:showCoordinates",
- ... (170 more removed lines; see GitHub link above)
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 27543
+   },
+   29251: (qq, Eq, gq) => {
+     var Yq = {
+       "./2_block.glb": 29256,
+       "./67.glb": 29265,
+       "./Artisan Bench.glb": 29272,
+       "./Aspen Door.glb": 29280,
+       "./Aspen Item Pedestal.glb": 29286,
+       "./Aspen Ladder.glb": 29295,
+       "./Aspen Trapdoor.glb": 29298,
+       "./Black Banner.glb": 29301,
+       "./Black Bed.glb": 29304,
+       "./Black Directional Arrow.glb": 29312,
+ ... (794 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1465` → after: `L1429-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L1429-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L1429-L1430) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L1465)

```diff
-       return `${zz}%`
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1469-L1650` → after: `L1434-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L1434-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L1434-L1436) · [Before (L1469-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L1469-L1650)

```diff
-       let {
-         label: uz,
-         value: bz,
-         swatches: Ez,
-         onChange: nz
-       } = zz;
-       const {
-         t: Mz
-       } = (0, lz.F)(), tz = !Ez.some((zz => zz.color === bz));
-       return (0, Oz.jsxs)("div", {
-         className: "SettingBox CrosshairColorRow",
-         children: [(0, Oz.jsx)("div", {
-           className: "SliderText",
-           children: uz
-         }), (0, Oz.jsxs)("div", {
-           className: "CrosshairSwatches",
- ... (166 more removed lines; see GitHub link above)
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1655-L1787` → after: `L2863-L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2863-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L2863-L2864) · [Before (L1655-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L1655-L1787)

```diff
-       return Object.freeze({
-         ...Mb.f,
-         style: "shapes",
-         outline: 1,
-         lines: !1,
-         ...zz
-       })
-     }
-     const Ab = [{
-         id: "default",
-         settings: Mb.f
-       }, {
-         id: "cross",
-         settings: Jb({
-           color: 5046092,
-           lines: !0,
- ... (117 more removed lines; see GitHub link above)
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1791-L1879` → after: `L2868-L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2868-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L2868-L2870) · [Before (L1791-L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L1791-L1879)

```diff
-       let {
-         settings: uz,
-         touch: bz,
-         backdrop: Ez,
-         onChange: nz
-       } = zz;
-       const {
-         t: Mz
-       } = (0, lz.F)(), tz = function(zz) {
-         var uz;
-         return null !== (uz = Ab.find((uz => (0, Mb.t)(uz.settings, zz, Tb)))) && void 0 !== uz ? uz : null
-       }(uz);
-       return (0, Oz.jsx)("div", {
-         className: "CrosshairPresets",
-         role: "radiogroup",
-         "aria-label": Mz("crosshairSettings:presets"),
- ... (73 more removed lines; see GitHub link above)
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L1882-L2374` → after: `L2874-L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2874-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L2874-L2975) · [Before (L1882-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L1882-L2374)

```diff
- 
-     function qb(zz) {
-       let {
-         settings: uz,
-         touch: bz,
-         backdrop: Ez,
-         className: nz,
-         children: lz,
-         label: Mz
-       } = zz;
-       const tz = mb(uz, ".CrosshairStageControls");
-       return (0, Oz.jsxs)("div", {
-         className: iz()("CrosshairStage", nz),
-         style: xb(Ez),
-         ...tz.handlers,
-         children: [(0, Oz.jsx)("div", {
- ... (477 more removed lines; see GitHub link above)
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 9486
+   },
+   27011: (qq, Eq, gq) => {
+     var Yq = {
+       "./Air Walk.png": 27020,
+       "./Antlers Bonus.png": 27023,
+       "./Arrow Damage Enchantment.png": 27028,
+       "./Arrow Speed Enchantment.png": 27037,
+       "./Attack Speed Enchantment.png": 27042,
+       "./Blindness.png": 27049,
+       "./Boating.png": 27057,
+       "./Bounciness.png": 27066,
+       "./Brain Rot.png": 27071,
+       "./Break Speed Enchantment.png": 27075,
+ ... (86 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2401` → after: `L2979-L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2979-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L2979-L2980) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2401)

```diff
-       return zz ? "general" : "account"
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2588-L2624` → after: `L2984-L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2984-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L2984-L2988) · [Before (L2588-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2588-L2624)

```diff
-       let {
-         show: uz
-       } = zz;
-       const {
-         userContext: bz
-       } = (0, Fz.c)(), [nz, iz] = (0, Ez.useState)("characters");
-       if (!uz) return null;
-       const lz = dE.filter((zz => "cape" !== zz && "nameColour" !== zz || bz.getPlayerRanks().includes("super") || (0, gz.purchasesAllowed)())).map((zz => ({
-         id: zz,
-         faIcon: Hu.K[zz],
-         title: Hu.O[zz],
-         redDot: !1
-       })));
-       return (0, Oz.jsxs)("div", {
-         className: "Menu CharCustomisation",
-         children: [(0, Oz.jsx)("div", {
- ... (21 more removed lines; see GitHub link above)
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
+       }
+       return Yq[qq]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2626-L2641` → after: `L2990-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L2990-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L2990-L4721) · [Before (L2626-L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2626-L2641)

```diff
-     var RE = bz(1434),
-       KE = bz(8982),
-       wE = bz(4292),
-       XE = bz(3169),
-       fE = bz(3210),
-       sE = bz(9013),
-       rE = bz(8434),
-       oE = bz(8987),
-       NE = bz(8999),
-       vE = bz(1856),
-       xE = bz(1846),
-       JE = bz(4670),
-       AE = bz(1249),
-       TE = bz(1212),
-       LE = bz(1613),
-       PE = bz(8524);
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 27011
+   },
+   17404: (qq, Eq, gq) => {
+     var Yq = {
+       "./67.png": 17413,
+       "./67_projectile_base.png": 17418,
+       "./67_projectile_boosted.png": 17426,
+       "./AK-47.png": 17428,
+       "./AWP.png": 17430,
+       "./Block-19.png": 17439,
+       "./DMR.png": 17447,
+       "./Deagle.png": 17450,
+       "./Double-barreled.png": 17454,
+       "./FMR.png": 17457,
+ ... (1716 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2644-L2648` → after: `L4724-L4725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4724-L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4724-L4725) · [Before (L2644-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2644-L2648)

```diff
-       return zz ? Object.keys(zz).sort(((uz, bz) => {
-         var Ez, nz, iz, lz;
-         const Mz = (null !== (Ez = null === (nz = zz[bz]) || void 0 === nz ? void 0 : nz.sortPriority) && void 0 !== Ez ? Ez : 0) - (null !== (iz = null === (lz = zz[uz]) || void 0 === lz ? void 0 : lz.sortPriority) && void 0 !== iz ? iz : 0);
-         return 0 !== Mz ? Mz : uz.localeCompare(bz)
-       })) : []
+       var Eq = Oq(qq);
+       return gq(Eq)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2665-L2673` → after: `L4729-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4729-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4729-L4733) · [Before (L2665-L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2665-L2673)

```diff
-       for (const {
-           threshold: uz,
-           suffix: bz
-         }
-         of aE)
-         if (zz >= uz) {
-           const Ez = zz / uz;
-           return Ez >= 100 ? `${Math.floor(Ez)}${bz}` : Ez >= 10 ? `${Ez.toFixed(1).replace(/\.0$/,"")}${bz}` : `${Ez.toFixed(2).replace(/\.?0+$/,"")}${bz}`
-         } return String(zz)
+       if (!gq.o(Yq, qq)) {
+         var Eq = new Error("Cannot find module '" + qq + "'");
+         throw Eq.code = "MODULE_NOT_FOUND", Eq
+       }
+       return Yq[qq]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2675` → after: `L4735-L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4735-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4735-L4751) · [Before (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2675)

```diff
-     var mE = bz(4770);
+     lq.keys = function() {
+       return Object.keys(Yq)
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 17404
+   },
+   9371: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       blockMetadata: () => mq.i,
+       getDefaultModel: () => uq,
+       getDefaultSkyBox: () => Bq,
+       getDefaultTexture: () => cq,
+       textureNameToIndex: () => mq.y
+     });
+     var Yq = gq(3072),
+       lq = gq(34293),
+       Oq = gq(1195),
+       mq = gq(9379),
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2677-L2782` → after: `L4753-L4755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4753-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4753-L4755) · [Before (L2677-L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2677-L2782)

```diff
-         normal: "0.8em",
-         big: "1em"
-       },
-       hE = (0, Ez.memo)((function(zz) {
-         let {
-           item: uz,
-           amount: bz = 0,
-           size: Ez = "normal",
-           tier: nz = null
-         } = zz;
-         return (0, Oz.jsx)("div", {
-           className: iz()("SmpSlot", `SmpSlot-${Ez}`),
-           children: uz && (0, Oz.jsx)(vE.c, {
-             itemName: uz,
-             amount: bz > 1 ? bz : 0,
-             amountFontSize: qE[Ez],
- ... (90 more removed lines; see GitHub link above)
+       block: qq => gq(9486)(`./${qq}.png`),
+       item: qq => gq(17404)(`./${qq}.png`)
+     };
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2784-L2825` → after: `L4757-L4762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4757-L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4757-L4762) · [Before (L2784-L2825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2784-L2825)

```diff
-     function QE(zz) {
-       let {
-         value: uz,
-         onChange: bz,
-         min: nz = 1,
-         max: iz,
-         step: lz = 1,
-         label: Mz
-       } = zz;
-       const tz = (0, Ez.useRef)(null),
-         Hz = (0, Ez.useRef)(uz);
-       Hz.current = uz;
-       const [pz, dz] = (0, Ez.useState)(null), Fz = zz => Math.max(nz, Math.min(iz, Math.floor(zz))), Zz = zz => {
-         const uz = Hz.current,
-           Ez = "function" === typeof lz ? lz(uz, zz) : lz,
-           nz = Fz(uz + Ez * zz);
- ... (26 more removed lines; see GitHub link above)
+     function cq(qq, Eq) {
+       let lq;
+       try {
+         if (Eq === Yq.g.BLOCK) lq = {
+           type: Yq.h.BASE64,
+           url: Aq.block(qq)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2827-L2858` → after: `L4764-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4764-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4764-L4780) · [Before (L2827-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2827-L2858)

```diff
-         return zz.addEventListener("blur", uz), () => {
-           zz.removeEventListener("blur", uz)
-         }
-       }), []);
-       const Rz = zz => (0, Oz.jsx)("button", {
-         type: "button",
-         className: "SmpStepButton",
-         "aria-label": `${zz>0?"More":"Less"} ${Mz}`,
-         disabled: zz > 0 ? uz >= iz : uz <= nz,
-         onPointerDown: uz => {
-           0 === uz.button && (Zz(zz), dz(zz))
-         },
-         onKeyDown: uz => {
-           "Enter" !== uz.key && " " !== uz.key || Zz(zz)
-         },
-         onContextMenu: zz => {
- ... (16 more removed lines; see GitHub link above)
+         else if (Eq === Yq.g.ITEM) lq = {
+           type: Yq.h.BASE64,
+           url: Aq.item(qq)
+         };
+         else if (Eq === Yq.g.ICON) lq = {
+           type: Yq.h.BASE64,
+           url: gq(27011)(`./${qq}.png`)
+         };
+         else if (Eq === Yq.g.LIFEFORM_ATLAS) {
+           let Eq;
+           for (const gq of xq.j)
+             if (qq.startsWith(gq)) {
+               Eq = gq;
+               break
+             } lq = {
+             type: Yq.h.BASE64,
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2860-L2887` → after: `L4782-L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4782-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4782-L4784) · [Before (L2860-L2887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2860-L2887)

```diff
-         }), Rz(1)]
-       })
-     }
- 
-     function WE(zz) {
-       return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, zz))) - 1))
-     }
-     var eE = bz(9007),
-       jE = bz(1226);
-     const IE = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
-     jE.w, Uz.Jc.length;
-     new Map;
-     var BE = bz(3043);
- 
-     function CE(zz, uz) {
-       var bz;
- ... (12 more removed lines; see GitHub link above)
+         } else Eq === Yq.g.PLAYER_ASSET && (lq = {
+           type: Yq.h.BASE64,
+           url: gq(29244)(`./${qq}.png`)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2894-L2964` → after: `L4793-L4799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4793-L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4793-L4799) · [Before (L2894-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2894-L2964)

```diff
-       var bz;
-       return null !== (bz = YE(zz, uz)[0]) && void 0 !== bz ? bz : null
-     }
-     const zn = "50% 0% 50% 0%",
-       un = [{
-         divisor: 864e5,
-         suffix: "d"
-       }, {
-         divisor: 36e5,
-         suffix: "h"
-       }, {
-         divisor: 6e4,
-         suffix: "m"
-       }, {
-         divisor: 1e3,
-         suffix: "s"
- ... (55 more removed lines; see GitHub link above)
+       let lq;
+       try {
+         if (Eq === Yq.e.BLOCK) {
+           const Eq = gq(29251)(`./${qq}.glb`);
+           lq = {
+             type: Yq.h.BASE64,
+             url: Eq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2966` → after: `L4801-L4803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4801-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4801-L4803) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2966)

```diff
-           return !0
+         } else if (Eq === Yq.e.ITEM) lq = {
+           type: Yq.h.HTTP,
+           url: `${Oq.clientSideServerUrls.staticUrl}/models/${qq}.glb`
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L2968-L3028` → after: `L4805-L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4805-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4805-L4809) · [Before (L2968-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L2968-L3028)

```diff
-       return zz.filter((zz => lz(zz.lowerLabel) || lz(zz.lowerName)))
-     }
- 
-     function tn(zz, uz) {
-       var bz;
-       return null !== (bz = null === zz || void 0 === zz ? void 0 : zz[uz]) && void 0 !== bz ? bz : uz
-     }
- 
-     function Hn(zz, uz) {
-       const bz = zz.userInput;
-       return void 0 !== uz && "dropdown" === (null === bz || void 0 === bz ? void 0 : bz.type) && bz.dropdownOptions.map(rE.e).includes(uz) ? uz : function(zz) {
-         const uz = zz.userInput;
-         if ("dropdown" !== (null === uz || void 0 === uz ? void 0 : uz.type) || 0 === uz.dropdownOptions.length) return null;
-         const bz = uz.dropdownOptions.map(rE.e);
-         return uz.initialValue && bz.includes(uz.initialValue) ? uz.initialValue : bz[bz.length - 1]
-       }(zz)
- ... (45 more removed lines; see GitHub link above)
+         else if (Eq === Yq.e.LIFEFORM) {
+           const Eq = gq(33533)(`./${qq}.glb`);
+           lq = {
+             type: Yq.h.BASE64,
+             url: Eq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L3117-L3164` → after: `L4812-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4812-L4813) · [Before (L3117-L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L3117-L3164)

```diff
-       }(zz, uz), Mz = (0, Ez.useMemo)((() => function() {
-         var zz;
-         let uz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
-           bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
-           Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         const nz = `${(0,BE.k)()}\x1f${uz.join("\x1e")}\x1f${bz.join("\x1e")}\x1f${JSON.stringify(Ez)}`;
-         if ((null === (zz = nn) || void 0 === zz ? void 0 : zz.key) === nz) return nn.items;
-         const iz = new Set(bz),
-           lz = new Set,
-           Mz = [],
-           tz = (zz, uz) => {
-             var bz;
-             if (!zz || lz.has(zz) || iz.has(zz)) return;
-             lz.add(zz);
-             const nz = null !== (bz = Ez[zz]) && void 0 !== bz ? bz : zz;
-             Mz.push({
- ... (32 more removed lines; see GitHub link above)
+       } catch {
+         throw new Error(`Default model for ${qq} not found`)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L3169-L3435` → after: `L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4819) · [Before (L3169-L3435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L3169-L3435)

```diff
-       let {
-         browser: uz,
-         children: bz
-       } = zz;
-       const {
-         t: Ez
-       } = (0, lz.F)(), nz = dn();
-       return (0, Oz.jsxs)("div", {
-         className: "SmpTopBar",
-         children: [(0, Oz.jsx)("div", {
-           className: "SmpSearch",
-           children: (0, Oz.jsx)(rz.d, {
-             className: "SmpSearchInput",
-             placeholderText: Ez("smpShop:searchPlaceholder"),
-             defaultValue: uz.query,
-             onValueChange: zz => {
- ... (251 more removed lines; see GitHub link above)
+       return lq.k[qq]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L3437-L4761` → after: `L4821-L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4821-L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4821-L4833) · [Before (L3437-L4761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L3437-L4761)

```diff
-     const An = [1, 10, 100],
-       Tn = [1, 10, 100, 999];
- 
-     function Ln(zz) {
-       var uz, bz, nz, tz, Hz, pz, dz, Fz, Zz, Rz;
-       const {
-         t: wz
-       } = (0, lz.F)(), Xz = dn(), {
-         creator: fz,
-         mode: sz
-       } = zz, [oz, Nz] = (0, Ez.useState)(null !== (uz = null === fz || void 0 === fz ? void 0 : fz.meta.item) && void 0 !== uz ? uz : null), [vz, xz] = (0, Ez.useState)(1), [Jz, Az] = (0, Ez.useState)(0), [Tz, Lz] = (0, Ez.useState)(""), [Pz, Gz] = (0, Ez.useState)(0), az = (0,  … [truncated]
-       (0, Ez.useEffect)((() => {
-         zz.searching || null === hz || hz === az.current || (az.current = hz, Vz.current = !1, Nz(hz), Az(0), xz("list" === sz ? Math.max(1, Uz) : 1))
-       }), [hz, zz.searching]);
-       const cz = !!fz && !!oz && fz.meta.item === oz,
-         gz = cz ? fz.meta.yM : null !== (tz = null === (Hz = zz.inventory) || void 0 === Hz || null === (pz = Hz.find((zz => zz.item === oz))) || void 0 === pz ? void 0 : pz.quantity) && void 0 !== tz ? tz : 0,
- ... (1309 more removed lines; see GitHub link above)
+   },
+   34293: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Oq,
+       f: () => xq,
+       g: () => mq,
+       j: () => lq,
+       k: () => Yq
+     });
+     const Yq = {
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4763-L4821` → after: `L4835-L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4835-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4835-L4842) · [Before (L4763-L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L4763-L4821)

```diff
-         gz = zz => {
-           dz((uz => cz(uz, zz)))
-         };
-       (0, Au.g)(PE.l, (() => {
-         dz((zz => {
-           const uz = (0, PE.p)(GE(zz.shopInfo), zz.selectedCategoryKey, (uz => (0, PE.j)(zz.shopInfo[uz].items)));
-           return uz === zz.selectedCategoryKey ? zz : cz(zz, uz)
-         }))
-       })), (0, Au.g)("showShopFromServer", (zz => {
-         let {
-           toggle: uz,
-           Ku: bz
-         } = zz;
-         bz && gz(bz), 0 === Object.keys(Hz.shopInfo).length || uz && nz ? vz.e.set({
-           openEverythingMenuName: null
-         }) : vz.e.set({
- ... (43 more removed lines; see GitHub link above)
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
+           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
+           px: "/textures/skyBoxes/gloomy/_px.jpg",
+           py: "/textures/skyBoxes/gloomy/_py.jpg",
+           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4823-L4959` → after: `L4844-L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4844-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4844-L4851) · [Before (L4823-L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L4823-L4959)

```diff
-         Qz = (zz, uz) => {
-           var bz, Ez, nz;
-           const lz = en(yz, zz),
-             Mz = Hz.shopInfo[yz].items[zz],
-             pz = Hz.userInputsPerItem[lz],
-             dz = (0, rE.b)(Mz, pz),
-             Fz = Dz(Mz, dz),
-             Zz = Mz.enchant,
-             Rz = Zz ? (0, Uz.vb)(null !== (bz = Mz.customTitle) && void 0 !== bz ? bz : zz, {
-               colour: Uz.rb[Zz.tier]
-             }) : null !== (Ez = Mz.customTitle) && void 0 !== Ez ? Ez : zz,
-             wz = uz => {
-               const bz = null !== uz && void 0 !== uz ? uz : pz,
-                 Ez = void 0 !== uz ? (0, rE.b)(Mz, uz) : dz;
-               Dz(Mz, Ez) && null !== bz && hz(zz, Mz, uz);
-               let nz = Hz.redDotInfo;
- ... (121 more removed lines; see GitHub link above)
+         interstellar: {
+           type: "custom",
+           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
+           ny: "/textures/skyBoxes/interstellar/_ny.jpg",
+           nz: "/textures/skyBoxes/interstellar/_nz.jpg",
+           px: "/textures/skyBoxes/interstellar/_px.jpg",
+           py: "/textures/skyBoxes/interstellar/_py.jpg",
+           pz: "/textures/skyBoxes/interstellar/_pz.jpg"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L4961-L5069` → after: `L4853-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4853-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4853-L4860) · [Before (L4961-L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L4961-L5069)

```diff
-         Wz = function(zz) {
-           for (const uz in zz)
-             if (zz[uz].smp) return !0;
-           return !1
-         }(Hz.shopInfo),
-         ez = CE(Hz.shopInfo, yz);
-       return (0, Oz.jsx)(XE.e, {
-         className: "Menu ShopBody",
-         show: nz,
-         children: 0 !== Object.keys(Hz.shopInfo).length && (0, Oz.jsxs)(Oz.Fragment, {
-           children: [(0, Oz.jsxs)("div", {
-             className: "MenuSideBar",
-             children: [(0, Oz.jsx)(pz, {
-               items: GE(Hz.shopInfo).map((zz => {
-                 var uz;
-                 return {
- ... (93 more removed lines; see GitHub link above)
+         space_blue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_blue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_blue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_blue/_nz.jpg",
+           px: "/textures/skyBoxes/space_blue/_px.jpg",
+           py: "/textures/skyBoxes/space_blue/_py.jpg",
+           pz: "/textures/skyBoxes/space_blue/_pz.jpg"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L5071-L5083` → after: `L4862-L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4862-L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4862-L4869) · [Before (L5071-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L5071-L5083)

```diff
-         children: (0, Oz.jsx)(JE.b, {
-           game: {
-             schematicId: iz
-           }
-         })
-       });
-       var tz, Hz;
-       if ((0, vE.d)(nz)) return (0, Oz.jsx)("div", {
-         className: "ShopBlock",
-         style: {
-           minWidth: `${bz}rem`,
-           height: "0",
-           minHeight: `${Ez}rem`
+         space_lightblue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
+           px: "/textures/skyBoxes/space_lightblue/_px.jpg",
+           py: "/textures/skyBoxes/space_lightblue/_py.jpg",
+           pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L5085-L5120` → after: `L4871-L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4871-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4871-L4878) · [Before (L5085-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L5085-L5120)

```diff
-         children: (0, Oz.jsx)(vE.c, {
-           itemName: nz,
-           amount: null !== (tz = uz.amount) && void 0 !== tz ? tz : 0,
-           amountFontSize: Ez / 4 + "rem",
-           enchantmentTier: null === (Hz = uz.enchant) || void 0 === Hz ? void 0 : Hz.tier
-         })
-       });
-       const pz = nz.slice(-4);
-       return ".jpg" === pz || ".png" === pz ? (0, Oz.jsx)(Cn, {
-         image: nz,
-         minWidth: bz
-       }) : (0, Oz.jsx)(Mz.c, {
-         name: nz,
-         className: "SelectedItemImage",
-         style: {
-           color: lz
- ... (20 more removed lines; see GitHub link above)
+         space_red: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red/_nz.jpg",
+           px: "/textures/skyBoxes/space_red/_px.jpg",
+           py: "/textures/skyBoxes/space_red/_py.jpg",
+           pz: "/textures/skyBoxes/space_red/_pz.jpg"
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L5122-L5424` → after: `L4880-L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4880-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4880-L4887) · [Before (L5122-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L5122-L5424)

```diff
-         src: `/textures/games/${(0,Uz.Sb)(Ez)}/${uz}`,
-         alt: uz,
-         draggable: !1
-       })
-     }
- 
-     function Yn(zz) {
-       let {
-         item: uz,
-         cost: bz,
-         currencyAmounts: Ez
-       } = zz;
-       const nz = !isNaN(bz) && 0 !== bz && jn(Ez, uz.currency);
-       let iz = null;
-       return uz.buyButtonText ? iz = uz.buyButtonText : nz ? (iz = bz, uz.sell && (iz = -1 * bz), iz = iz.toString()) : 0 === bz ? iz = "Free" : uz.isRewardedAd && (iz = "Watch ad"), (0, yu.F)(iz) || " " === iz ? null : (0, Oz.jsxs)("div", {
-         className: "BuyItemCostAndIcon",
- ... (287 more removed lines; see GitHub link above)
+         underwater: {
+           type: "custom",
+           nx: "/textures/skyBoxes/underwater/water.jpg",
+           ny: "/textures/skyBoxes/underwater/water.jpg",
+           nz: "/textures/skyBoxes/underwater/water.jpg",
+           px: "/textures/skyBoxes/underwater/water.jpg",
+           py: "/textures/skyBoxes/underwater/water.jpg",
+           pz: "/textures/skyBoxes/underwater/water.jpg"
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L5426-L5433` → after: `L4889-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4889-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4889-L4896) · [Before (L5426-L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L5426-L5433)

```diff
-         choose: function(zz, uz) {
-           Zz(), nz(zz), lz("typed" === uz ? "search" : "prefilled" === uz ? "prefilled" : "suggestion"), tz({
-             name: zz,
-             source: uz
-           }), "typed" !== uz && "prefilled" !== uz && (0, Yz.reportAnalyticsClick)({
-             id: "store.gift_recipient",
-             value: uz
-           })
+         starry: {
+           type: "custom",
+           nx: "/textures/skyBoxes/starry/_nx.jpg",
+           ny: "/textures/skyBoxes/starry/_ny.jpg",
+           nz: "/textures/skyBoxes/starry/_nz.jpg",
+           px: "/textures/skyBoxes/starry/_px.jpg",
+           py: "/textures/skyBoxes/starry/_py.jpg",
+           pz: "/textures/skyBoxes/starry/_pz.jpg"
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L5435-L5436` → after: `L4898-L4905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4898-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4898-L4905) · [Before (L5435-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L5435-L5436)

```diff
-         clear: function() {
-           Zz(), nz(""), lz("search"), tz(null)
+         space_red_2: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
+           px: "/textures/skyBoxes/space_red_2/_px.jpg",
+           py: "/textures/skyBoxes/space_red_2/_py.jpg",
+           pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L5438-L5805` → after: `L4907-L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4907-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4907-L4914) · [Before (L5438-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L5438-L5805)

```diff
-         recordGift: function(zz, uz) {
-           ! function(zz) {
-             si.delete(zz.toLowerCase())
-           }(zz), Oz((bz => {
-             if (!bz || bz.name.toLowerCase() !== zz.toLowerCase() || !0 !== bz.result.giftRecipientFound || "superRank" === uz) return bz;
-             const Ez = bz.result.giftRecipientOwnedPacks;
-             return {
-               ...bz,
-               result: {
-                 ...bz.result,
-                 giftRecipientOwnedPacks: Ez.includes(uz) ? Ez : [...Ez, uz]
-               }
-             }
-           }))
-         }
-       }
- ... (352 more removed lines; see GitHub link above)
+         space_white: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_white/_nx.jpg",
+           ny: "/textures/skyBoxes/space_white/_ny.jpg",
+           nz: "/textures/skyBoxes/space_white/_nz.jpg",
+           px: "/textures/skyBoxes/space_white/_px.jpg",
+           py: "/textures/skyBoxes/space_white/_py.jpg",
+           pz: "/textures/skyBoxes/space_white/_pz.jpg"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L6234-L7610` → after: `L4917-L16860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L4917-L16860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L4917-L16860) · [Before (L6234-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L6234-L7610)

```diff
-       Xl = new Set(["wildSpirits"]);
- 
-     function fl(zz) {
-       var uz;
-       let {
-         tile: bz,
-         design: nz,
-         canGoLive: tz,
-         live: Hz,
-         busy: pz,
-         highlight: dz,
-         onLiveStart: Fz,
-         onLiveEnd: Zz,
-         onOpen: Rz,
-         onAct: Kz,
-         onNeedRecipient: wz,
- ... (1361 more removed lines; see GitHub link above)
+       lq = "/textures/dayNight/sun.png",
+       Oq = "/textures/dayNight/moon.png",
+       mq = "/textures/dayNight/stars",
+       xq = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
+   },
+   29256: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29265: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29272: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   29280: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAABsBwAA8AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+ ... (11928 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/97.js` (Changed code · before: `L7612-L7660` → after: `L16862-L16863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1R16862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-368163614ed0e74db044ec8d1d67e93724f1545dcc5683cbf90fbaf58e7054f1) · [After (L16862-L16863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/97.js#L16862-L16863) · [Before (L7612-L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/97.js#L7612-L7660)

```diff
-   8987: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz
-     });
-     var Ez = bz(328),
-       nz = bz(8994);
- 
-     function iz(zz, uz, bz) {
-       const iz = Object.entries(uz).sort(((zz, uz) => uz[1] - zz[1])),
-         lz = (0, Ez.vb)(zz);
-       lz.push(zz ? "\n\n" : "\n");
-       for (const [nz, Zz] of iz) {
-         var Mz, tz, Hz;
-         const zz = null !== (Mz = null === bz || void 0 === bz || null === (tz = bz[nz]) || void 0 === tz ? void 0 : tz.icon) && void 0 !== Mz ? Mz : `${nz} Enchantment`;
-         lz.push({
-           icon: zz,
- ... (33 more removed lines; see GitHub link above)
+   26695: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAbklEQVR4nGNgwA3+QzEYMOFRyHDg8HGYBgYWNBNwAkaYIhfPIKwK9mxfB1aHbCLDjauXUBRpaOvB2ShudLx9iYF35kysJqMo3K+qx2DiZIlVMV43ujjZMVSUFoDVoZhYU1WKQmMzEWwqVsdB1QAA4DobXaYIzO0AAAAASUVORK5CYII="
```
