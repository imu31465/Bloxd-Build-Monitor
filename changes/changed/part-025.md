# Changed — Bundle Modifications Report (Part 025 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `25 / 146` (**390** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 024](part-024.md) · [Part 026 →](part-026.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/118.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/118.js` (2744 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29)

#### 1103. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14202-L14203` → after: `L14202-L14203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14202-L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14202-L14203) · [Before (L14202-L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14202-L14203)

```diff
-         function xE(MM) {
-           return IP(MM).trim().toLowerCase()
+         function hq(VV) {
+           return Kp(VV).trim().toLowerCase()
```

#### 1104. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14206-L14211` → after: `L14206-L14211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14206-L14211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14206-L14211) · [Before (L14206-L14211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14206-L14211)

```diff
-         function vE(MM, rM) {
-           var iM, OM, SM, jM, aM;
-           const PM = null === (iM = MM[rM.event]) || void 0 === iM ? void 0 : iM.trim(),
-             nM = -1 === rM.value ? "" : null !== (OM = null === (SM = MM[rM.value]) || void 0 === SM ? void 0 : SM.trim()) && void 0 !== OM ? OM : "",
-             QM = new RegExp(`^(${kE})\\b`).exec(null !== (jM = null === (aM = MM[rM.players]) || void 0 === aM ? void 0 : aM.trim()) && void 0 !== jM ? jM : "");
-           return void 0 === PM || "" === PM || null === QM ? null : [AE(QM[1]), "" === nM ? PM : `${PM}: ${nM}`]
+         function lq(VV, eV) {
+           var xV, JV, YV, UV, yV;
+           const pV = null === (xV = VV[eV.event]) || void 0 === xV ? void 0 : xV.trim(),
+             QV = -1 === eV.value ? "" : null !== (JV = null === (YV = VV[eV.value]) || void 0 === YV ? void 0 : YV.trim()) && void 0 !== JV ? JV : "",
+             nV = new RegExp(`^(${gq})\\b`).exec(null !== (UV = null === (yV = VV[eV.players]) || void 0 === yV ? void 0 : yV.trim()) && void 0 !== UV ? UV : "");
+           return void 0 === pV || "" === pV || null === nV ? null : [cq(nV[1]), "" === QV ? pV : `${pV}: ${QV}`]
```

#### 1105. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14214-L14221` → after: `L14214-L14221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14214-L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14214-L14221) · [Before (L14214-L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14214-L14221)

```diff
-         function FE(MM) {
-           const rM = new Map,
-             iM = new Map,
-             OM = new Set,
-             SM = (MM, rM) => {
-               var OM;
-               const SM = null !== (OM = iM.get(MM)) && void 0 !== OM ? OM : [];
-               SM.includes(rM) || iM.set(MM, [...SM, rM])
+         function Lq(VV) {
+           const eV = new Map,
+             xV = new Map,
+             JV = new Set,
+             YV = (VV, eV) => {
+               var JV;
+               const YV = null !== (JV = xV.get(VV)) && void 0 !== JV ? JV : [];
+               YV.includes(eV) || xV.set(VV, [...YV, eV])
```

#### 1106. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14223-L14224` → after: `L14223-L14224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14223-L14224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14223-L14224) · [Before (L14223-L14224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14223-L14224)

```diff
-             jM = MM => {
-               rM.set(`${xE(MM.from)} > ${xE(MM.to)}`, MM)
+             UV = VV => {
+               eV.set(`${hq(VV.from)} > ${hq(VV.to)}`, VV)
```

#### 1107. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14226-L14237` → after: `L14226-L14237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14226-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14226-L14237) · [Before (L14226-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14226-L14237)

```diff
-           let aM = null;
-           for (const PM of MM.split(/\r?\n/)) {
-             for (const rM of (0, oj.e)(PM, NE, oj.j)) OM.add(Number(rM[1]));
-             if (PM.startsWith("|")) {
-               const MM = PM.split("|"),
-                 rM = MM.findIndex((MM => fE.test(MM))),
-                 iM = MM.findIndex((MM => /^\s*event\s*$/i.test(MM)));
-               if (-1 !== rM && -1 !== iM) {
-                 aM = {
-                   event: iM,
-                   value: MM.findIndex((MM => /^\s*value\s*$/i.test(MM))),
-                   players: rM
+           let yV = null;
+           for (const pV of VV.split(/\r?\n/)) {
+             for (const eV of (0, iU.h)(pV, oq, iU.s)) JV.add(Number(eV[1]));
+             if (pV.startsWith("|")) {
+               const VV = pV.split("|"),
+                 eV = VV.findIndex((VV => Cq.test(VV))),
+                 xV = VV.findIndex((VV => /^\s*event\s*$/i.test(VV)));
+               if (-1 !== eV && -1 !== xV) {
+                 yV = {
+                   event: xV,
+                   value: VV.findIndex((VV => /^\s*value\s*$/i.test(VV))),
+                   players: eV
```

#### 1108. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14241-L14242` → after: `L14241-L14242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14241-L14242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14241-L14242) · [Before (L14241-L14242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14241-L14242)

```diff
-               const OM = null === aM ? null : vE(MM, aM);
-               null !== OM && SM(...OM);
+               const JV = null === yV ? null : lq(VV, yV);
+               null !== JV && YV(...JV);
```

#### 1109. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14245-L14251` → after: `L14245-L14251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14245-L14251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14245-L14251) · [Before (L14245-L14251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14245-L14251)

```diff
-             aM = null;
-             const MM = oE.exec(PM);
-             null !== MM && jM({
-               from: MM[1],
-               to: MM[2],
-               fromPlayers: AE(MM[4]),
-               toPlayers: AE(MM[3])
+             yV = null;
+             const VV = iq.exec(pV);
+             null !== VV && UV({
+               from: VV[1],
+               to: VV[2],
+               fromPlayers: cq(VV[4]),
+               toPlayers: cq(VV[3])
```

#### 1110. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14253-L14257` → after: `L14253-L14257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14253-L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14253-L14257) · [Before (L14253-L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14253-L14257)

```diff
-             for (const rM of PM.matchAll(ZE)) jM({
-               from: rM[2],
-               to: rM[4],
-               fromPlayers: AE(rM[1]),
-               toPlayers: AE(rM[3])
+             for (const eV of pV.matchAll(Dq)) UV({
+               from: eV[2],
+               to: eV[4],
+               fromPlayers: cq(eV[1]),
+               toPlayers: cq(eV[3])
```

#### 1111. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14259-L14261` → after: `L14259-L14261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14259-L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14259-L14261) · [Before (L14259-L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14259-L14261)

```diff
-             for (const rM of (0, oj.r)(PM, /\s+(?=[A-Z])/g, (0, oj.n)(".;")))
-               if (fE.test(rM))
-                 for (const MM of rM.matchAll(YE)) SM(AE(MM[2]), MM[1].trim())
+             for (const eV of (0, iU.B)(pV, /\s+(?=[A-Z])/g, (0, iU.w)(".;")))
+               if (Cq.test(eV))
+                 for (const VV of eV.matchAll(aq)) YV(cq(VV[2]), VV[1].trim())
```

#### 1112. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14264-L14266` → after: `L14264-L14266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14264-L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14264-L14266) · [Before (L14264-L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14264-L14266)

```diff
-             steps: [...rM.values()],
-             allTimeEvents: iM,
-             ratios: OM
+             steps: [...eV.values()],
+             allTimeEvents: xV,
+             ratios: JV
```

#### 1113. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14270-L14276` → after: `L14270-L14276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14270-L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14270-L14276) · [Before (L14270-L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14270-L14276)

```diff
-         function BE(MM) {
-           const rM = IP(MM).trim(),
-             iM = rM.lastIndexOf(": ");
-           if (iM <= 0) return [rM];
-           const OM = rM.slice(0, iM),
-             SM = rM.slice(iM + 2);
-           return /^-?\d+$/.test(SM) ? [rM, ...(0, Zj.Q)(OM, SM)] : /[a-z]{3}/i.test(SM) ? [rM, SM] : [rM]
+         function fq(VV) {
+           const eV = Kp(VV).trim(),
+             xV = eV.lastIndexOf(": ");
+           if (xV <= 0) return [eV];
+           const JV = eV.slice(0, xV),
+             YV = eV.slice(xV + 2);
+           return /^-?\d+$/.test(YV) ? [eV, ...(0, DU.M)(JV, YV)] : /[a-z]{3}/i.test(YV) ? [eV, YV] : [eV]
```

#### 1114. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14279-L14280` → after: `L14279-L14280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14279-L14280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14279-L14280) · [Before (L14279-L14280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14279-L14280)

```diff
-         function XE(MM, rM) {
-           return BE(rM).some((rM => (0, oj.e)(MM, new RegExp(`\`?${(0,Zj.I)(rM)}(?![\\w]|\\.\\d)`, "i"), (0, oj.g)("\\w")).length > 0))
+         function mq(VV, eV) {
+           return fq(eV).some((eV => (0, iU.h)(VV, new RegExp(`\`?${(0,DU.J)(eV)}(?![\\w]|\\.\\d)`, "i"), (0, iU.l)("\\w")).length > 0))
```

#### 1115. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14282` → after: `L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14282) · [Before (L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14282)

```diff
-         const IE = new RegExp(`(${kE})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), KE = (0, oj.g)("\\w.,:%$#-"), qE = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${kE})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), TE = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
+         const Kq = new RegExp(`(${gq})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), Hq = (0, iU.l)("\\w.,:%$#-"), uq = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${gq})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), sq = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
```

#### 1116. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14284-L14291` → after: `L14284-L14291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14284-L14291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14284-L14291) · [Before (L14284-L14291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14284-L14291)

```diff
-         function cE(MM, rM, iM, OM) {
-           return 0 === rM.size || 0 === iM.steps.length ? [] : (0, oj.e)(MM, IE, KE).flatMap((SM => {
-             const jM = SM.index,
-               aM = jM + SM[0].length,
-               PM = AE(SM[1]),
-               nM = OM.every((MM => {
-                 let [rM, iM] = MM;
-                 return iM <= jM || rM >= aM
+         function Iq(VV, eV, xV, JV) {
+           return 0 === eV.size || 0 === xV.steps.length ? [] : (0, iU.h)(VV, Kq, Hq).flatMap((YV => {
+             const UV = YV.index,
+               yV = UV + YV[0].length,
+               pV = cq(YV[1]),
+               QV = JV.every((VV => {
+                 let [eV, xV] = VV;
+                 return xV <= UV || eV >= yV
```

#### 1117. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14293-L14299` → after: `L14293-L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14293-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14293-L14299) · [Before (L14293-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14293-L14299)

```diff
-               QM = iM.allTimeEvents.get(PM);
-             if (!nM || !rM.has(PM) || void 0 === QM) return [];
-             const zM = MM.slice(...(0, Zj.S)(MM, jM)),
-               LM = new Set((0, oj.e)(zM, IE, KE).flatMap((MM => {
-                 var OM;
-                 const SM = AE(MM[1]);
-                 return rM.has(SM) ? (null !== (OM = iM.allTimeEvents.get(SM)) && void 0 !== OM ? OM : []).map(xE) : []
+               nV = xV.allTimeEvents.get(pV);
+             if (!QV || !eV.has(pV) || void 0 === nV) return [];
+             const wV = VV.slice(...(0, DU.N)(VV, UV)),
+               ZV = new Set((0, iU.h)(wV, Kq, Hq).flatMap((VV => {
+                 var JV;
+                 const YV = cq(VV[1]);
+                 return eV.has(YV) ? (null !== (JV = xV.allTimeEvents.get(YV)) && void 0 !== JV ? JV : []).map(hq) : []
```

#### 1118. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14301-L14304` → after: `L14301-L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14301-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14301-L14304) · [Before (L14301-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14301-L14304)

```diff
-               mM = new Set(QM.map(xE)),
-               HM = iM.steps.find((MM => {
-                 const rM = XE(zM, MM.to) && !LM.has(xE(MM.to));
-                 return mM.has(xE(MM.from)) && (rM || (0, oj.e)(zM, new RegExp(`${MM.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, oj.g)("\\d,")).length > 0)
+               vV = new Set(nV.map(hq)),
+               rV = xV.steps.find((VV => {
+                 const eV = mq(wV, VV.to) && !ZV.has(hq(VV.to));
+                 return vV.has(hq(VV.from)) && (eV || (0, iU.h)(wV, new RegExp(`${VV.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, iU.l)("\\d,")).length > 0)
```

#### 1119. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14306-L14309` → after: `L14306-L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14306-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14306-L14309) · [Before (L14306-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14306-L14309)

```diff
-             if (void 0 !== HM) return HM.fromPlayers === PM ? [] : [{
-               start: jM,
-               end: aM,
-               text: HM.fromPlayers.toLocaleString("en-US")
+             if (void 0 !== rV) return rV.fromPlayers === pV ? [] : [{
+               start: UV,
+               end: yV,
+               text: rV.fromPlayers.toLocaleString("en-US")
```

#### 1120. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14311-L14323` → after: `L14311-L14323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14311-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14311-L14323) · [Before (L14311-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14311-L14323)

```diff
-             const hM = iM.steps.some((MM => [MM.from, MM.to].some((MM => function(MM, rM) {
-                 return BE(rM).some((rM => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,Zj.I)(rM)}(?![\\w]|\\.\\d)`, "i").test(MM)))
-               }(zM, MM))))),
-               JM = iM.steps.some((MM => [MM.from, MM.to].some((MM => LM.has(xE(MM)) && XE(zM, MM)))));
-             if (!hM || JM || /\bthan\b/i.test(zM)) return [];
-             const dM = function(MM, rM, iM) {
-               const OM = MM.lastIndexOf("(", rM),
-                 SM = MM.indexOf(")", iM);
-               if (-1 !== OM && -1 !== SM && !MM.slice(OM, SM).includes(")")) {
-                 const rM = qE.exec(MM.slice(0, SM + 1));
-                 if (null !== rM && rM.index <= OM && rM.index + rM[0].length === SM + 1) return {
-                   start: rM.index,
-                   end: SM + 1,
+             const kV = xV.steps.some((VV => [VV.from, VV.to].some((VV => function(VV, eV) {
+                 return fq(eV).some((eV => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,DU.J)(eV)}(?![\\w]|\\.\\d)`, "i").test(VV)))
+               }(wV, VV))))),
+               bV = xV.steps.some((VV => [VV.from, VV.to].some((VV => ZV.has(hq(VV)) && mq(wV, VV)))));
+             if (!kV || bV || /\bthan\b/i.test(wV)) return [];
+             const EV = function(VV, eV, xV) {
+               const JV = VV.lastIndexOf("(", eV),
+                 YV = VV.indexOf(")", xV);
+               if (-1 !== JV && -1 !== YV && !VV.slice(JV, YV).includes(")")) {
+                 const eV = uq.exec(VV.slice(0, YV + 1));
+                 if (null !== eV && eV.index <= JV && eV.index + eV[0].length === YV + 1) return {
+                   start: eV.index,
+                   end: YV + 1,
```

#### 1121. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14327-L14336` → after: `L14327-L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14327-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14327-L14336) · [Before (L14327-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14327-L14336)

```diff
-               if (!TE.test(MM.slice(iM))) return null;
-               const jM = VE.exec(MM.slice(0, rM)),
-                 aM = null === jM ? rM : jM.index,
-                 PM = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(MM.slice(0, aM)),
-                 nM = MM.slice(iM).replace(/^\s+(?:of\s+)?/i, ""),
-                 QM = MM.length - nM.length;
-               return PM ? {
-                 start: aM,
-                 end: QM + 1,
-                 text: nM.charAt(0).toUpperCase()
+               if (!sq.test(VV.slice(xV))) return null;
+               const UV = Sq.exec(VV.slice(0, eV)),
+                 yV = null === UV ? eV : UV.index,
+                 pV = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(VV.slice(0, yV)),
+                 QV = VV.slice(xV).replace(/^\s+(?:of\s+)?/i, ""),
+                 nV = VV.length - QV.length;
+               return pV ? {
+                 start: yV,
+                 end: nV + 1,
+                 text: QV.charAt(0).toUpperCase()
```

#### 1122. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14338-L14339` → after: `L14338-L14339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14338-L14339) · [Before (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14338-L14339)

```diff
-                 start: aM,
-                 end: QM,
+                 start: yV,
+                 end: nV,
```

#### 1123. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14342-L14343` → after: `L14342-L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14342-L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14342-L14343) · [Before (L14342-L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14342-L14343)

```diff
-             }(MM, jM, aM);
-             return null === dM ? [] : [dM]
+             }(VV, UV, yV);
+             return null === EV ? [] : [EV]
```

#### 1124. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14346` → after: `L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14346) · [Before (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14346)

```diff
-         const MU = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, rU = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
+         const dq = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, Oq = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
```

#### 1125. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14348-L14355` → after: `L14348-L14355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14348-L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14348-L14355) · [Before (L14348-L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14348-L14355)

```diff
-         function iU(MM, rM, iM) {
-           return 0 === rM.ratios.size ? [] : (0, oj.e)(MM, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, oj.j).flatMap((OM => {
-             var SM;
-             const jM = OM.index + OM[0].length,
-               aM = MU.exec(MM.slice(jM)),
-               PM = iM.every((MM => {
-                 let [rM, iM] = MM;
-                 return iM <= OM.index || rM >= jM
+         function Vt(VV, eV, xV) {
+           return 0 === eV.ratios.size ? [] : (0, iU.h)(VV, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, iU.s).flatMap((JV => {
+             var YV;
+             const UV = JV.index + JV[0].length,
+               yV = dq.exec(VV.slice(UV)),
+               pV = xV.every((VV => {
+                 let [eV, xV] = VV;
+                 return xV <= JV.index || eV >= UV
```

#### 1126. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14357-L14362` → after: `L14357-L14362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14357-L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14357-L14362) · [Before (L14357-L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14357-L14362)

```diff
-             if (null === aM || !PM || !rM.ratios.has(Number(OM[1]))) return [];
-             const nM = null !== (SM = aM[2]) && void 0 !== SM ? SM : "";
-             return ("" === nM || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(nM)) && ("" !== nM || rU.test(MM.slice(Math.max(0, OM.index - 80), OM.index))) ? [{
-               start: jM,
-               end: jM + aM[0].length,
-               text: `${aM[1]}as many${nM} as`
+             if (null === yV || !pV || !eV.ratios.has(Number(JV[1]))) return [];
+             const QV = null !== (YV = yV[2]) && void 0 !== YV ? YV : "";
+             return ("" === QV || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(QV)) && ("" !== QV || Oq.test(VV.slice(Math.max(0, JV.index - 80), JV.index))) ? [{
+               start: UV,
+               end: UV + yV[0].length,
+               text: `${yV[1]}as many${QV} as`
```

#### 1127. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14366-L14382` → after: `L14366-L14382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14366-L14382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14366-L14382) · [Before (L14366-L14382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14366-L14382)

```diff
-         const OU = 50, SU = Yz, jU = 3, aU = .1, PU = .05, nU = 2, QU = 7, zU = 7, LU = 14, mU = 7, HU = 2;
- 
-         function hU(MM) {
-           var rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM;
-           const HM = vJ(MM),
-             hM = MM.stats,
-             JM = null === hM ? null : (0, Hr.G)(hM.rankingWindow),
-             dM = null !== (rM = null === (iM = MM.baseline) || void 0 === iM ? void 0 : iM.rankingWindow) && void 0 !== rM ? rM : null,
-             yM = null !== (OM = null === hM || void 0 === hM ? void 0 : hM.sessionDurationHistogram) && void 0 !== OM ? OM : null,
-             lM = null === yM ? null : (0, Hr.O)(yM.sessionCounts, yM.maxBucketMinute),
-             EM = HM.biggestProblem,
-             UM = (null !== (SM = null === (jM = HM.flow) || void 0 === jM ? void 0 : jM.steps) && void 0 !== SM ? SM : []).flatMap((MM => MM.isPastNearer ? [] : [{
-               from: IP(MM.from),
-               to: IP(MM.to),
-               fromPlayers: MM.fromPlayers,
-               toPlayers: MM.players,
- ... (1 more removed lines; see GitHub link above)
+         const et = 50, xt = ow, Jt = 3, Yt = .1, Ut = .05, yt = 2, pt = 7, Qt = 7, nt = 14, wt = 7, Zt = 2;
+ 
+         function vt(VV) {
+           var eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV;
+           const rV = fb(VV),
+             kV = VV.stats,
+             bV = null === kV ? null : (0, re.T)(kV.rankingWindow),
+             EV = null !== (eV = null === (xV = VV.baseline) || void 0 === xV ? void 0 : xV.rankingWindow) && void 0 !== eV ? eV : null,
+             BV = null !== (JV = null === kV || void 0 === kV ? void 0 : kV.sessionDurationHistogram) && void 0 !== JV ? JV : null,
+             jV = null === BV ? null : (0, re.$)(BV.sessionCounts, BV.maxBucketMinute),
+             qV = rV.biggestProblem,
+             tV = (null !== (YV = null === (UV = rV.flow) || void 0 === UV ? void 0 : UV.steps) && void 0 !== YV ? YV : []).flatMap((VV => VV.isPastNearer ? [] : [{
+               from: Kp(VV.from),
+               to: Kp(VV.to),
+               fromPlayers: VV.fromPlayers,
+               toPlayers: VV.players,
+ ... (1 more added lines; see GitHub link above)
```

#### 1128. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14384-L14385` → after: `L14384-L14385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14384-L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14384-L14385) · [Before (L14384-L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14384-L14385)

```diff
-               isBranch: !MM.isChain,
-               isOrLater: MM.isOrLater,
+               isBranch: !VV.isChain,
+               isOrLater: VV.isOrLater,
```

#### 1129. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14388-L14396` → after: `L14388-L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14388-L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14388-L14396) · [Before (L14388-L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14388-L14396)

```diff
-             GM = HM.progressions.flatMap((MM => {
-               const rM = rM => KP(MM.eventType, rM);
-               return MM.steps.flatMap((iM => iM.reached !== iM.to.players ? [] : [{
-                 from: rM(iM.from.value),
-                 to: rM(iM.to.value),
-                 fromPlayers: iM.from.players,
-                 toPlayers: iM.to.players,
-                 share: 100 * iM.share,
-                 group: `${MM.gameCategory}/${MM.eventType}`,
+             FV = rV.progressions.flatMap((VV => {
+               const eV = eV => Hp(VV.eventType, eV);
+               return VV.steps.flatMap((xV => xV.reached !== xV.to.players ? [] : [{
+                 from: eV(xV.from.value),
+                 to: eV(xV.to.value),
+                 fromPlayers: xV.from.players,
+                 toPlayers: xV.to.players,
+                 share: 100 * xV.share,
+                 group: `${VV.gameCategory}/${VV.eventType}`,
```

#### 1130. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14400-L14401` → after: `L14400-L14401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14400-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14400-L14401) · [Before (L14400-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14400-L14401)

```diff
-                   gameCategory: MM.gameCategory,
-                   eventType: MM.eventType,
+                   gameCategory: VV.gameCategory,
+                   eventType: VV.eventType,
```

#### 1131. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14406-L14407` → after: `L14406-L14407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14406-L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14406-L14407) · [Before (L14406-L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14406-L14407)

```diff
-           let CM = null;
-           if ("dropoff" === (null === EM || void 0 === EM ? void 0 : EM.kind)) CM = {
+           let TV = null;
+           if ("dropoff" === (null === qV || void 0 === qV ? void 0 : qV.kind)) TV = {
```

#### 1132. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14409` → after: `L14409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14409) · [Before (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14409)

```diff
-             minute: EM.minute.minute
+             minute: qV.minute.minute
```

#### 1133. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14411` → after: `L14411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14411) · [Before (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14411)

```diff
-           else if ("flowStep" === (null === EM || void 0 === EM ? void 0 : EM.kind)) CM = {
+           else if ("flowStep" === (null === qV || void 0 === qV ? void 0 : qV.kind)) TV = {
```

#### 1134. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14413-L14414` → after: `L14413-L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14413-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14413-L14414) · [Before (L14413-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14413-L14414)

```diff
-             from: IP(EM.step.from),
-             to: IP(EM.step.to)
+             from: Kp(qV.step.from),
+             to: Kp(qV.step.to)
```

#### 1135. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14416` → after: `L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14416) · [Before (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14416)

```diff
-           else if ("progressStep" === (null === EM || void 0 === EM ? void 0 : EM.kind)) {
+           else if ("progressStep" === (null === qV || void 0 === qV ? void 0 : qV.kind)) {
```

#### 1136. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14418-L14420` → after: `L14418-L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14418-L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14418-L14420) · [Before (L14418-L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14418-L14420)

```diff
-               eventType: MM
-             } = EM.progression;
-             CM = {
+               eventType: VV
+             } = qV.progression;
+             TV = {
```

#### 1137. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14422-L14423` → after: `L14422-L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14422-L14423) · [Before (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14422-L14423)

```diff
-               from: KP(MM, EM.step.from.value),
-               to: KP(MM, EM.step.to.value)
+               from: Hp(VV, qV.step.from.value),
+               to: Hp(VV, qV.step.to.value)
```

#### 1138. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14425` → after: `L14425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14425) · [Before (L14425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14425)

```diff
-           } else "playsFalling" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (CM = {
+           } else "playsFalling" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (TV = {
```

#### 1139. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14428-L14431` → after: `L14428-L14431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14428-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14428-L14431) · [Before (L14428-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14428-L14431)

```diff
-           const eM = null === hM ? [] : (0, Hr.P)(hM).slice(-LU),
-             bM = null !== (aM = null === JM || void 0 === JM ? void 0 : JM.avgSessionMs) && void 0 !== aM ? aM : null,
-             wM = null !== (PM = null === JM || void 0 === JM ? void 0 : JM.sessionsPerPlayer) && void 0 !== PM ? PM : null,
-             tM = null !== (nM = null === JM || void 0 === JM ? void 0 : JM.avgDailyPlays) && void 0 !== nM ? nM : null;
+           const PV = null === kV ? [] : (0, re.bb)(kV).slice(-nt),
+             AV = null !== (yV = null === bV || void 0 === bV ? void 0 : bV.avgSessionMs) && void 0 !== yV ? yV : null,
+             NV = null !== (pV = null === bV || void 0 === bV ? void 0 : bV.sessionsPerPlayer) && void 0 !== pV ? pV : null,
+             XV = null !== (QV = null === bV || void 0 === bV ? void 0 : bV.avgDailyPlays) && void 0 !== QV ? QV : null;
```

#### 1140. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14433-L14438` → after: `L14433-L14438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14433-L14438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14433-L14438) · [Before (L14433-L14438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14433-L14438)

```diff
-             dailyPlays: tM,
-             weeklyPlayers: null === hM || hM.rankingWindow.days !== zU ? null : hM.rankingWindow.uniquePlayers,
-             sessions: null === yM || null === lM ? null : {
-               days: yM.days,
-               percents: lM.points.map((MM => MM.percent)),
-               typicalPercents: null !== (QM = null === (zM = MM.baseline) || void 0 === zM ? void 0 : zM.dropoffCurve.survivalPercents.map((MM => MM.p50))) && void 0 !== QM ? QM : []
+             dailyPlays: XV,
+             weeklyPlayers: null === kV || kV.rankingWindow.days !== Qt ? null : kV.rankingWindow.uniquePlayers,
+             sessions: null === BV || null === jV ? null : {
+               days: BV.days,
+               percents: jV.points.map((VV => VV.percent)),
+               typicalPercents: null !== (nV = null === (wV = VV.baseline) || void 0 === wV ? void 0 : wV.dropoffCurve.survivalPercents.map((VV => VV.p50))) && void 0 !== nV ? nV : []
```

#### 1141. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14440-L14442` → after: `L14440-L14442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14440-L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14440-L14442) · [Before (L14440-L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14440-L14442)

```diff
-             averageSessionMinutes: null === bM ? null : {
-               now: bM / 6e4,
-               typical: null === dM ? null : dM.sessionMs.p50 / 6e4
+             averageSessionMinutes: null === AV ? null : {
+               now: AV / 6e4,
+               typical: null === EV ? null : EV.sessionMs.p50 / 6e4
```

#### 1142. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14444-L14447` → after: `L14444-L14447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14444-L14447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14444-L14447) · [Before (L14444-L14447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14444-L14447)

```diff
-             sessionsPerPlayer: null === wM || null === hM ? null : {
-               now: wM,
-               typical: null !== (LM = null === dM || void 0 === dM ? void 0 : dM.sessionsPerPlayer.p50) && void 0 !== LM ? LM : null,
-               days: hM.sessionsPerPlayerWindowDays
+             sessionsPerPlayer: null === NV || null === kV ? null : {
+               now: NV,
+               typical: null !== (ZV = null === EV || void 0 === EV ? void 0 : EV.sessionsPerPlayer.p50) && void 0 !== ZV ? ZV : null,
+               days: kV.sessionsPerPlayerWindowDays
```

#### 1143. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14449-L14451` → after: `L14449-L14451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14449-L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14449-L14451) · [Before (L14449-L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14449-L14451)

```diff
-             playsPerDay: null === tM ? null : {
-               now: tM,
-               typical: "playsFalling" === (null === EM || void 0 === EM ? void 0 : EM.kind) ? EM.previous : null !== (mM = null === dM || void 0 === dM ? void 0 : dM.dailyPlays.p50) && void 0 !== mM ? mM : null
+             playsPerDay: null === XV ? null : {
+               now: XV,
+               typical: "playsFalling" === (null === qV || void 0 === qV ? void 0 : qV.kind) ? qV.previous : null !== (vV = null === EV || void 0 === EV ? void 0 : EV.dailyPlays.p50) && void 0 !== vV ? vV : null
```

#### 1144. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14454-L14455` → after: `L14454-L14455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14454-L14455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14454-L14455) · [Before (L14454-L14455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14454-L14455)

```diff
-               plays: eM.flatMap((MM => null === MM.plays ? [] : [MM.plays])),
-               sessionMinutes: eM.flatMap((MM => null === MM.avgSessionMs ? [] : [MM.avgSessionMs / 6e4]))
+               plays: PV.flatMap((VV => null === VV.plays ? [] : [VV.plays])),
+               sessionMinutes: PV.flatMap((VV => null === VV.avgSessionMs ? [] : [VV.avgSessionMs / 6e4]))
```

#### 1145. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14457-L14463` → after: `L14457-L14463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14457-L14463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14457-L14463) · [Before (L14457-L14463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14457-L14463)

```diff
-             flowSteps: UM,
-             progressSteps: GM,
-             problem: CM,
-             deaths: Vh(MM),
-             heatmapEvents: MM.heatmaps.map((MM => ({
-               gameCategory: MM.gameCategoryId,
-               eventTypes: [...new Set(MM.events.map((MM => MM.eventType)))]
+             flowSteps: tV,
+             progressSteps: FV,
+             problem: TV,
+             deaths: dk(VV),
+             heatmapEvents: VV.heatmaps.map((VV => ({
+               gameCategory: VV.gameCategoryId,
+               eventTypes: [...new Set(VV.events.map((VV => VV.eventType)))]
```

#### 1146. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14465-L14466` → after: `L14465-L14466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14465-L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14465-L14466) · [Before (L14465-L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14465-L14466)

```diff
-             places: zE(MM),
-             loggedValues: Yj(MM)
+             places: Qq(VV),
+             loggedValues: aU(VV)
```

#### 1147. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14470-L14473` → after: `L14470-L14473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14470-L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14470-L14473) · [Before (L14470-L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14470-L14473)

```diff
-         function JU(MM) {
-           return [...MM.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((MM => {
-             const rM = gi(MM[1]);
-             return null === rM ? [] : [rM.key]
+         function rt(VV) {
+           return [...VV.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((VV => {
+             const eV = Xx(VV[1]);
+             return null === eV ? [] : [eV.key]
```

#### 1148. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14477-L14479` → after: `L14477-L14479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14477-L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14477-L14479) · [Before (L14477-L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14477-L14479)

```diff
-         function dU(MM) {
-           const rM = MM => MM.flatMap((MM => [MM.text, ...rM(MM.children)]));
-           return MM.blocks.flatMap((MM => "paragraph" === MM.kind ? [MM.text] : "list" === MM.kind ? rM(MM.items) : []))
+         function kt(VV) {
+           const eV = VV => VV.flatMap((VV => [VV.text, ...eV(VV.children)]));
+           return VV.blocks.flatMap((VV => "paragraph" === VV.kind ? [VV.text] : "list" === VV.kind ? eV(VV.items) : []))
```

#### 1149. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14482-L14484` → after: `L14482-L14484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14482-L14484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14482-L14484) · [Before (L14482-L14484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14482-L14484)

```diff
-         function yU(MM, rM) {
-           const iM = (0, Zj.l)(rM.toLowerCase());
-           return (0, oj.e)(MM.toLowerCase(), new RegExp(`${iM}(?![\\w])`), (0, oj.g)("\\w")).length > 0
+         function bt(VV, eV) {
+           const xV = (0, DU.i)(eV.toLowerCase());
+           return (0, iU.h)(VV.toLowerCase(), new RegExp(`${xV}(?![\\w])`), (0, iU.l)("\\w")).length > 0
```

#### 1150. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14487-L14491` → after: `L14487-L14491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14487-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14487-L14491) · [Before (L14487-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14487-L14491)

```diff
-         function lU(MM, rM, iM) {
-           var OM;
-           const SM = MM.filter((MM => yU(rM, MM.from) && yU(rM, MM.to))).sort(((MM, rM) => rM.fromPlayers - MM.fromPlayers)),
-             jM = null === iM || "flowStep" !== iM.kind && "progressStep" !== iM.kind ? void 0 : MM.find((MM => MM.from === iM.from && MM.to === iM.to));
-           return void 0 === jM || 0 !== SM.length && !SM.includes(jM) ? null !== (OM = SM[0]) && void 0 !== OM ? OM : null : jM
+         function Et(VV, eV, xV) {
+           var JV;
+           const YV = VV.filter((VV => bt(eV, VV.from) && bt(eV, VV.to))).sort(((VV, eV) => eV.fromPlayers - VV.fromPlayers)),
+             UV = null === xV || "flowStep" !== xV.kind && "progressStep" !== xV.kind ? void 0 : VV.find((VV => VV.from === xV.from && VV.to === xV.to));
+           return void 0 === UV || 0 !== YV.length && !YV.includes(UV) ? null !== (JV = YV[0]) && void 0 !== JV ? JV : null : UV
```

#### 1151. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14494-L14495` → after: `L14494-L14495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14494-L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14494-L14495) · [Before (L14494-L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14494-L14495)

```diff
-         function EU(MM) {
-           return MM < 100 ? Math.max(10, 10 * Math.round(MM / 10)) : Number(MM.toPrecision(2))
+         function Bt(VV) {
+           return VV < 100 ? Math.max(10, 10 * Math.round(VV / 10)) : Number(VV.toPrecision(2))
```

#### 1152. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14498-L14499` → after: `L14498-L14499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14498-L14499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14498-L14499) · [Before (L14498-L14499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14498-L14499)

```diff
-         function UU(MM) {
-           return MM < 1e3 ? Math.round(MM) : Number(MM.toPrecision(2))
+         function jt(VV) {
+           return VV < 1e3 ? Math.round(VV) : Number(VV.toPrecision(2))
```

#### 1153. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14502-L14504` → after: `L14502-L14504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14502-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14502-L14504) · [Before (L14502-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14502-L14504)

```diff
-         function GU(MM, rM) {
-           const iM = Math.max(jU, null === rM ? 0 : (rM - MM) * aU);
-           return Math.min(99, Math.round(MM + iM))
+         function qt(VV, eV) {
+           const xV = Math.max(Jt, null === eV ? 0 : (eV - VV) * Yt);
+           return Math.min(99, Math.round(VV + xV))
```

#### 1154. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14507-L14508` → after: `L14507-L14508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14507-L14508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14507-L14508) · [Before (L14507-L14508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14507-L14508)

```diff
-         function CU(MM, rM, iM) {
-           return MM + Math.max(MM * PU, null === rM ? 0 : (rM - MM) * aU, iM)
+         function tt(VV, eV, xV) {
+           return VV + Math.max(VV * Ut, null === eV ? 0 : (eV - VV) * Yt, xV)
```

#### 1155. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14510` → after: `L14510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14510) · [Before (L14510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14510)

```diff
-         const eU = {
+         const Ft = {
```

#### 1156. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14520` → after: `L14520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14520) · [Before (L14520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14520)

```diff
-         }, bU = `(\\d{1,2}|${Object.keys(eU).join("|")})`, wU = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${bU}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${bU}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
+         }, Tt = `(\\d{1,2}|${Object.keys(Ft).join("|")})`, Pt = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${Tt}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${Tt}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
```

#### 1157. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14522-L14524` → after: `L14522-L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14522-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14522-L14524) · [Before (L14522-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14522-L14524)

```diff
-         function RU(MM) {
-           var rM;
-           return null !== (rM = eU[MM.toLowerCase()]) && void 0 !== rM ? rM : Number(MM)
+         function Mt(VV) {
+           var eV;
+           return null !== (eV = Ft[VV.toLowerCase()]) && void 0 !== eV ? eV : Number(VV)
```

#### 1158. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14527-L14528` → after: `L14527-L14528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14527-L14528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14527-L14528) · [Before (L14527-L14528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14527-L14528)

```diff
-         function pU(MM, rM) {
-           return null === rM || rM * MM < OU ? null : {
+         function zt(VV, eV) {
+           return null === eV || eV * VV < et ? null : {
```

#### 1159. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14530-L14531` → after: `L14530-L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14530-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14530-L14531) · [Before (L14530-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14530-L14531)

```diff
-             days: MM,
-             count: EU(rM * MM),
+             days: VV,
+             count: Bt(eV * VV),
```

#### 1160. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14536-L14539` → after: `L14536-L14539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14536-L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14536-L14539) · [Before (L14536-L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14536-L14539)

```diff
-         function WU(MM) {
-           if (MM.length < mU) return null;
-           const rM = MM.slice(1).reduce(((rM, iM, OM) => rM + (iM - MM[OM]) ** 2), 0) / (2 * (MM.length - 1)),
-             iM = MM.slice(-QU);
+         function Gt(VV) {
+           if (VV.length < wt) return null;
+           const eV = VV.slice(1).reduce(((eV, xV, JV) => eV + (xV - VV[JV]) ** 2), 0) / (2 * (VV.length - 1)),
+             xV = VV.slice(-pt);
```

#### 1161. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14541-L14543` → after: `L14541-L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14541-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14541-L14543) · [Before (L14541-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14541-L14543)

```diff
-             low: Math.min(...iM),
-             high: Math.max(...iM),
-             averageMargin: HU * Math.sqrt(rM / QU)
+             low: Math.min(...xV),
+             high: Math.max(...xV),
+             averageMargin: Zt * Math.sqrt(eV / pt)
```

#### 1162. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14547-L14548` → after: `L14547-L14548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14547-L14548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14547-L14548) · [Before (L14547-L14548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14547-L14548)

```diff
-         function sU(MM, rM) {
-           return null === MM || MM <= 0 || MM * QU < OU ? null : null !== rM ? {
+         function Wt(VV, eV) {
+           return null === VV || VV <= 0 || VV * pt < et ? null : null !== eV ? {
```

#### 1163. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14550` → after: `L14550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14550) · [Before (L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14550)

```diff
-             days: QU,
+             days: pt,
```

#### 1164. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14552-L14553` → after: `L14552-L14553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14552-L14553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14552-L14553) · [Before (L14552-L14553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14552-L14553)

```diff
-               low: rM.low,
-               high: rM.high
+               low: eV.low,
+               high: eV.high
```

#### 1165. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14557` → after: `L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14557) · [Before (L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14557)

```diff
-             days: Math.min(QU, Math.max(nU, Math.ceil(OU / MM))),
+             days: Math.min(pt, Math.max(yt, Math.ceil(et / VV))),
```

#### 1166. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14562-L14572` → after: `L14562-L14572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14562-L14572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14562-L14572) · [Before (L14562-L14572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14562-L14572)

```diff
-         function DU(MM, rM) {
-           var iM, OM;
-           const SM = (null !== MM && void 0 !== MM ? MM : "").split("\n").filter((MM => "" !== MM.trim())),
-             jM = 1 === SM.length ? CQ(SM[0]) : null;
-           if (null === jM || null === rM) return null;
-           let aM = jM.path,
-             PM = null !== (iM = rM.get(aM)) && void 0 !== iM ? iM : null;
-           if (null === PM && !aM.includes(".")) {
-             const MM = [...rM].filter((MM => {
-               let [rM] = MM;
-               return rM.endsWith(`.${jM.path}`)
+         function Rt(VV, eV) {
+           var xV, JV;
+           const YV = (null !== VV && void 0 !== VV ? VV : "").split("\n").filter((VV => "" !== VV.trim())),
+             UV = 1 === YV.length ? jn(YV[0]) : null;
+           if (null === UV || null === eV) return null;
+           let yV = UV.path,
+             pV = null !== (xV = eV.get(yV)) && void 0 !== xV ? xV : null;
+           if (null === pV && !yV.includes(".")) {
+             const VV = [...eV].filter((VV => {
+               let [eV] = VV;
+               return eV.endsWith(`.${UV.path}`)
```

#### 1167. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14574` → after: `L14574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14574) · [Before (L14574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14574)

```diff
-             aM = 1 === MM.length ? MM[0][0] : aM, PM = 1 === MM.length ? MM[0][1] : null
+             yV = 1 === VV.length ? VV[0][0] : yV, pV = 1 === VV.length ? VV[0][1] : null
```

#### 1168. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14576-L14579` → after: `L14576-L14579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14576-L14579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14576-L14579) · [Before (L14576-L14579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14576-L14579)

```diff
-           const nM = null === PM ? null : null === (OM = CQ(PM)) || void 0 === OM ? void 0 : OM.value,
-             QM = MM => MM.replace(/\s+/g, "");
-           if (null === PM || void 0 === nM || null === nM || QM(nM) === QM(jM.value)) return null;
-           const zM = aM.lastIndexOf(".");
+           const QV = null === pV ? null : null === (JV = jn(pV)) || void 0 === JV ? void 0 : JV.value,
+             nV = VV => VV.replace(/\s+/g, "");
+           if (null === pV || void 0 === QV || null === QV || nV(QV) === nV(UV.value)) return null;
+           const wV = yV.lastIndexOf(".");
```

#### 1169. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14581-L14582` → after: `L14581-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14581-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14581-L14582) · [Before (L14581-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14581-L14582)

```diff
-             line: PM,
-             inside: -1 === zM ? null : aM.slice(0, zM)
+             line: pV,
+             inside: -1 === wV ? null : yV.slice(0, wV)
```

#### 1170. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14586-L14591` → after: `L14586-L14591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14586-L14591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14586-L14591) · [Before (L14586-L14591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14586-L14591)

```diff
-         function kU(MM) {
-           var rM, iM;
-           const OM = null === MM ? null : null !== (rM = null !== (iM = (0, oj.e)(MM, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, oj.g)("\\w.,"))[0]) && void 0 !== iM ? iM : (0, oj.e)(MM, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
-           return null === OM ? null : {
-             now: Number(OM[1].replace(/,/g, "")),
-             target: Number(OM[2].replace(/,/g, ""))
+         function gt(VV) {
+           var eV, xV;
+           const JV = null === VV ? null : null !== (eV = null !== (xV = (0, iU.h)(VV, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, iU.l)("\\w.,"))[0]) && void 0 !== xV ? xV : (0, iU.h)(VV, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
+           return null === JV ? null : {
+             now: Number(JV[1].replace(/,/g, "")),
+             target: Number(JV[2].replace(/,/g, ""))
```

#### 1171. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14595-L14596` → after: `L14595-L14596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14595-L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14595-L14596) · [Before (L14595-L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14595-L14596)

```diff
-         function ZU(MM) {
-           return "playersStillPlaying" === MM ? "sessionDropoff" : MM
+         function Dt(VV) {
+           return "playersStillPlaying" === VV ? "sessionDropoff" : VV
```

#### 1172. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14599-L14601` → after: `L14599-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14599-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14599-L14601) · [Before (L14599-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14599-L14601)

```diff
-         function oU(MM, rM, iM, OM) {
-           let SM = null;
-           if (null !== rM) SM = ZU(rM.statKey) === ZU(iM) ? kU(rM.change) : null;
+         function it(VV, eV, xV, JV) {
+           let YV = null;
+           if (null !== eV) YV = Dt(eV.statKey) === Dt(xV) ? gt(eV.change) : null;
```

#### 1173. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14603-L14623` → after: `L14603-L14623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14603-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14603-L14623) · [Before (L14603-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14603-L14623)

```diff
-             var jM;
-             const rM = dU(MM).find((MM => /\b(check|target|aim)\b/i.test(MM) && null !== kU(MM)));
-             SM = null !== (jM = kU(MM.target)) && void 0 !== jM ? jM : kU(null !== rM && void 0 !== rM ? rM : null)
-           }
-           return null === SM || ! function(MM, rM) {
-             return Math.abs(MM - rM) <= (rM >= 10 ? Math.max(.5, .01 * rM) : .05) + 1e-9
-           }(SM.now, OM) || SM.target <= OM ? null : SM.target
-         }
- 
-         function fU(MM, rM, iM, OM) {
-           var SM, jM, aM;
-           const PM = function(MM, rM) {
-             const iM = null === MM.target ? void 0 : JU(MM.target)[0];
-             if (void 0 !== iM) return iM;
-             if (null !== rM) return rM.statKey;
-             const OM = dU(MM).find((MM => /\b(check|target|aim)\b/i.test(MM) && JU(MM).length > 0));
- ... (5 more removed lines; see GitHub link above)
+             var UV;
+             const eV = kt(VV).find((VV => /\b(check|target|aim)\b/i.test(VV) && null !== gt(VV)));
+             YV = null !== (UV = gt(VV.target)) && void 0 !== UV ? UV : gt(null !== eV && void 0 !== eV ? eV : null)
+           }
+           return null === YV || ! function(VV, eV) {
+             return Math.abs(VV - eV) <= (eV >= 10 ? Math.max(.5, .01 * eV) : .05) + 1e-9
+           }(YV.now, JV) || YV.target <= JV ? null : YV.target
+         }
+ 
+         function Ct(VV, eV, xV, JV) {
+           var YV, UV, yV;
+           const pV = function(VV, eV) {
+             const xV = null === VV.target ? void 0 : rt(VV.target)[0];
+             if (void 0 !== xV) return xV;
+             if (null !== eV) return eV.statKey;
+             const JV = kt(VV).find((VV => /\b(check|target|aim)\b/i.test(VV) && rt(VV).length > 0));
+ ... (5 more added lines; see GitHub link above)
```

#### 1174. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14626-L14645` → after: `L14626-L14645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14626-L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14626-L14645) · [Before (L14626-L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14626-L14645)

```diff
-                 var SM, jM, aM;
-                 const MM = OM.sessions;
-                 if (null === MM) return null;
-                 const iM = function(MM) {
-                     var rM;
-                     if (null === MM) return null;
-                     if (/\bfirst minute\b/i.test(MM)) return 1;
-                     const iM = MM.replace(/\[\[[^\]]*\]\]/g, ""),
-                       OM = null !== (rM = (0, oj.e)(iM, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, oj.g)("\\w."))[0]) && void 0 !== rM ? rM : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(iM);
-                     return null === OM ? null : Number(OM[1])
-                   }(rM.target),
-                   PM = null === iM ? function(MM, rM) {
-                     var iM;
-                     if (null === MM) return null;
-                     const OM = MM => MM >= 1 && void 0 !== rM[MM],
-                       SM = gU.exec(MM);
- ... (4 more removed lines; see GitHub link above)
+                 var YV, UV, yV;
+                 const VV = JV.sessions;
+                 if (null === VV) return null;
+                 const xV = function(VV) {
+                     var eV;
+                     if (null === VV) return null;
+                     if (/\bfirst minute\b/i.test(VV)) return 1;
+                     const xV = VV.replace(/\[\[[^\]]*\]\]/g, ""),
+                       JV = null !== (eV = (0, iU.h)(xV, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, iU.l)("\\w."))[0]) && void 0 !== eV ? eV : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(xV);
+                     return null === JV ? null : Number(JV[1])
+                   }(eV.target),
+                   pV = null === xV ? function(VV, eV) {
+                     var xV;
+                     if (null === VV) return null;
+                     const JV = VV => VV >= 1 && void 0 !== eV[VV],
+                       YV = Nt.exec(VV);
+ ... (4 more added lines; see GitHub link above)
```

#### 1175. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14649-L14656` → after: `L14649-L14656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14649-L14656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14649-L14656) · [Before (L14649-L14656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14649-L14656)

```diff
-                     for (const PM of wU) {
-                       const rM = PM.exec(MM);
-                       if (null !== rM) {
-                         const MM = RU(rM[1]),
-                           iM = uU.find((rM => rM > MM && OM(rM)));
-                         return void 0 === iM ? null : {
-                           minutes: iM,
-                           after: MM
+                     for (const pV of Pt) {
+                       const eV = pV.exec(VV);
+                       if (null !== eV) {
+                         const VV = Mt(eV[1]),
+                           xV = Xt.find((eV => eV > VV && JV(eV)));
+                         return void 0 === xV ? null : {
+                           minutes: xV,
+                           after: VV
```

#### 1176. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14660-L14663` → after: `L14660-L14663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14660-L14663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14660-L14663) · [Before (L14660-L14663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14660-L14663)

```diff
-                     const jM = tU.exec(MM),
-                       aM = null === jM ? null : RU(null !== (iM = jM[1]) && void 0 !== iM ? iM : jM[2]);
-                     return null !== aM && OM(aM) ? {
-                       minutes: aM,
+                     const UV = At.exec(VV),
+                       yV = null === UV ? null : Mt(null !== (xV = UV[1]) && void 0 !== xV ? xV : UV[2]);
+                     return null !== yV && JV(yV) ? {
+                       minutes: yV,
```

#### 1177. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14666-L14671` → after: `L14666-L14671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14666-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14666-L14671) · [Before (L14666-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14666-L14671)

```diff
-                   }(rM.title, MM.percents) : null,
-                   nM = null !== (SM = null !== iM && void 0 !== iM ? iM : null === PM || void 0 === PM ? void 0 : PM.minutes) && void 0 !== SM ? SM : "dropoff" === (null === (jM = OM.problem) || void 0 === jM ? void 0 : jM.kind) ? OM.problem.minute : Hr.k,
-                   QM = MM.percents[nM],
-                   zM = pU(MM.days, OM.dailyPlays);
-                 return void 0 === QM || nM < 1 || null === zM ? null : {
-                   measure: null === PM || null === PM.after ? {
+                   }(eV.title, VV.percents) : null,
+                   QV = null !== (YV = null !== xV && void 0 !== xV ? xV : null === pV || void 0 === pV ? void 0 : pV.minutes) && void 0 !== YV ? YV : "dropoff" === (null === (UV = JV.problem) || void 0 === UV ? void 0 : UV.kind) ? JV.problem.minute : re.n,
+                   nV = VV.percents[QV],
+                   wV = zt(VV.days, JV.dailyPlays);
+                 return void 0 === nV || QV < 1 || null === wV ? null : {
+                   measure: null === pV || null === pV.after ? {
```

#### 1178. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14673` → after: `L14673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14673) · [Before (L14673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14673)

```diff
-                     minutes: nM
+                     minutes: QV
```

#### 1179. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14676-L14677` → after: `L14676-L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14676-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14676-L14677) · [Before (L14676-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14676-L14677)

```diff
-                     minutes: nM,
-                     after: PM.after
+                     minutes: QV,
+                     after: pV.after
```

#### 1180. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14679-L14681` → after: `L14679-L14681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14679-L14681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14679-L14681) · [Before (L14679-L14681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14679-L14681)

```diff
-                   now: Math.round(QM),
-                   helped: GU(QM, null !== (aM = MM.typicalPercents[nM]) && void 0 !== aM ? aM : null),
-                   wait: zM
+                   now: Math.round(nV),
+                   helped: qt(nV, null !== (yV = VV.typicalPercents[QV]) && void 0 !== yV ? yV : null),
+                   wait: wV
```

#### 1181. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14685-L14690` → after: `L14685-L14690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14685-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14685-L14690) · [Before (L14685-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14685-L14690)

```diff
-                 const MM = lU(OM.flowSteps, iM, OM.problem);
-                 if (null === MM || MM.fromPlayers < SU) return null;
-                 const rM = function(MM, rM, iM) {
-                     const OM = Math.max(rM.fromPlayers, ...MM.filter((MM => MM.group === rM.group)).map((MM => MM.fromPlayers)));
-                     return null === iM || iM <= 0 || OM <= iM ? {
-                       players: rM.fromPlayers,
+                 const VV = Et(JV.flowSteps, xV, JV.problem);
+                 if (null === VV || VV.fromPlayers < xt) return null;
+                 const eV = function(VV, eV, xV) {
+                     const JV = Math.max(eV.fromPlayers, ...VV.filter((VV => VV.group === eV.group)).map((VV => VV.fromPlayers)));
+                     return null === xV || xV <= 0 || JV <= xV ? {
+                       players: eV.fromPlayers,
```

#### 1182. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14693` → after: `L14693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14693) · [Before (L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14693)

```diff
-                       players: rM.fromPlayers * iM / OM,
+                       players: eV.fromPlayers * xV / JV,
```

#### 1183. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14696-L14698` → after: `L14696-L14698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14696-L14698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14696-L14698) · [Before (L14696-L14698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14696-L14698)

```diff
-                   }(OM.flowSteps, MM, OM.weeklyPlayers),
-                   SM = rM.isScaled && rM.players < 100 ? Math.round(rM.players) : EU(rM.players),
-                   jM = {
+                   }(JV.flowSteps, VV, JV.weeklyPlayers),
+                   YV = eV.isScaled && eV.players < 100 ? Math.round(eV.players) : Bt(eV.players),
+                   UV = {
```

#### 1184. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14700-L14701` → after: `L14700-L14701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14700-L14701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14700-L14701) · [Before (L14700-L14701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14700-L14701)

```diff
-                     days: zU,
-                     count: SM,
+                     days: Qt,
+                     count: YV,
```

#### 1185. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14707-L14709` → after: `L14707-L14709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14707-L14709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14707-L14709) · [Before (L14707-L14709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14707-L14709)

```diff
-                     from: MM.from,
-                     to: MM.to,
-                     isOrLater: MM.isOrLater
+                     from: VV.from,
+                     to: VV.to,
+                     isOrLater: VV.isOrLater
```

#### 1186. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14711-L14713` → after: `L14711-L14713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14711-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14711-L14713) · [Before (L14711-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14711-L14713)

```diff
-                   now: Math.round(MM.share),
-                   helped: GU(MM.share, NU(OM.flowSteps, MM)),
-                   wait: jM
+                   now: Math.round(VV.share),
+                   helped: qt(VV.share, ct(JV.flowSteps, VV)),
+                   wait: UV
```

#### 1187. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14717-L14721` → after: `L14717-L14721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14717-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14717-L14721) · [Before (L14717-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14717-L14721)

```diff
-                 const MM = lU(OM.progressSteps, iM, OM.problem);
-                 if (null === MM || MM.fromPlayers < SU) return null;
-                 const rM = GU(MM.share, NU(OM.progressSteps, MM)),
-                   SM = null !== OM.weeklyPlayers ? 2 * OM.weeklyPlayers / zU : null === OM.dailyPlays ? 1 / 0 : 2 * OM.dailyPlays,
-                   jM = EU(Math.max(OU, Math.min(.1 * MM.fromPlayers, SM)));
+                 const VV = Et(JV.progressSteps, xV, JV.problem);
+                 if (null === VV || VV.fromPlayers < xt) return null;
+                 const eV = qt(VV.share, ct(JV.progressSteps, VV)),
+                   YV = null !== JV.weeklyPlayers ? 2 * JV.weeklyPlayers / Qt : null === JV.dailyPlays ? 1 / 0 : 2 * JV.dailyPlays,
+                   UV = Bt(Math.max(et, Math.min(.1 * VV.fromPlayers, YV)));
```

#### 1188. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14725-L14728` → after: `L14725-L14728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14725-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14725-L14728) · [Before (L14725-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14725-L14728)

```diff
-                     from: MM.from,
-                     to: MM.to,
-                     fromPlayers: MM.fromPlayers,
-                     toPlayers: MM.toPlayers
+                     from: VV.from,
+                     to: VV.to,
+                     fromPlayers: VV.fromPlayers,
+                     toPlayers: VV.toPlayers
```

#### 1189. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14730-L14732` → after: `L14730-L14732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14730-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14730-L14732) · [Before (L14730-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14730-L14732)

```diff
-                   selection: MM.selection,
-                   now: Math.round(MM.share),
-                   helped: rM,
+                   selection: VV.selection,
+                   now: Math.round(VV.share),
+                   helped: eV,
```

#### 1190. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14735-L14739` → after: `L14735-L14739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14735-L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14735-L14739) · [Before (L14735-L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14735-L14739)

```diff
-                     at: MM.from,
-                     players: MM.fromPlayers + jM,
-                     more: jM,
-                     helpedAt: MM.to,
-                     helpedPlayers: YU(MM.toPlayers, rM, jM)
+                     at: VV.from,
+                     players: VV.fromPlayers + UV,
+                     more: UV,
+                     helpedAt: VV.to,
+                     helpedPlayers: ot(VV.toPlayers, eV, UV)
```

#### 1191. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14744-L14749` → after: `L14744-L14749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14744-L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14744-L14749) · [Before (L14744-L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14744-L14749)

```diff
-                 var PM;
-                 const MM = OM.playsPerDay,
-                   rM = WU(OM.dailySeries.plays),
-                   iM = sU(OM.dailyPlays, rM);
-                 if (null === MM || null === iM) return null;
-                 const SM = Math.max(CU(MM.now, MM.typical, 1), MM.now + (null !== (PM = null === rM || void 0 === rM ? void 0 : rM.averageMargin) && void 0 !== PM ? PM : 0));
+                 var pV;
+                 const VV = JV.playsPerDay,
+                   eV = Gt(JV.dailySeries.plays),
+                   xV = Wt(JV.dailyPlays, eV);
+                 if (null === VV || null === xV) return null;
+                 const YV = Math.max(tt(VV.now, VV.typical, 1), VV.now + (null !== (pV = null === eV || void 0 === eV ? void 0 : eV.averageMargin) && void 0 !== pV ? pV : 0));
```

#### 1192. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14754-L14757` → after: `L14754-L14757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14754-L14757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14754-L14757) · [Before (L14754-L14757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14754-L14757)

```diff
-                   now: Math.round(MM.now),
-                   helped: SM < 1e3 ? Math.round(SM) : Number(SM.toPrecision(3)),
-                   wait: "days" === iM.kind && null !== iM.swing ? {
-                     ...iM,
+                   now: Math.round(VV.now),
+                   helped: YV < 1e3 ? Math.round(YV) : Number(YV.toPrecision(3)),
+                   wait: "days" === xV.kind && null !== xV.swing ? {
+                     ...xV,
```

#### 1193. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14759-L14760` → after: `L14759-L14760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14759-L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14759-L14760) · [Before (L14759-L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14759-L14760)

```diff
-                       low: UU(iM.swing.low),
-                       high: UU(iM.swing.high)
+                       low: jt(xV.swing.low),
+                       high: jt(xV.swing.high)
```

#### 1194. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14762` → after: `L14762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14762) · [Before (L14762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14762)

```diff
-                   } : iM
+                   } : xV
```

#### 1195. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14766-L14771` → after: `L14766-L14771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14766-L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14766-L14771) · [Before (L14766-L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14766-L14771)

```diff
-                 var nM;
-                 const MM = OM.averageSessionMinutes,
-                   rM = WU(OM.dailySeries.sessionMinutes),
-                   iM = sU(OM.dailyPlays, rM);
-                 if (null === MM || null === iM) return null;
-                 const SM = MM => Math.round(10 * MM) / 10;
+                 var QV;
+                 const VV = JV.averageSessionMinutes,
+                   eV = Gt(JV.dailySeries.sessionMinutes),
+                   xV = Wt(JV.dailyPlays, eV);
+                 if (null === VV || null === xV) return null;
+                 const YV = VV => Math.round(10 * VV) / 10;
```

#### 1196. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14776-L14779` → after: `L14776-L14779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14776-L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14776-L14779) · [Before (L14776-L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14776-L14779)

```diff
-                   now: SM(MM.now),
-                   helped: SM(Math.max(CU(MM.now, MM.typical, .1), MM.now + (null !== (nM = null === rM || void 0 === rM ? void 0 : rM.averageMargin) && void 0 !== nM ? nM : 0))),
-                   wait: "days" === iM.kind && null !== iM.swing ? {
-                     ...iM,
+                   now: YV(VV.now),
+                   helped: YV(Math.max(tt(VV.now, VV.typical, .1), VV.now + (null !== (QV = null === eV || void 0 === eV ? void 0 : eV.averageMargin) && void 0 !== QV ? QV : 0))),
+                   wait: "days" === xV.kind && null !== xV.swing ? {
+                     ...xV,
```

#### 1197. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14781-L14782` → after: `L14781-L14782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14781-L14782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14781-L14782) · [Before (L14781-L14782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14781-L14782)

```diff
-                       low: SM(iM.swing.low),
-                       high: SM(iM.swing.high)
+                       low: YV(xV.swing.low),
+                       high: YV(xV.swing.high)
```

#### 1198. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14784` → after: `L14784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14784) · [Before (L14784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14784)

```diff
-                   } : iM
+                   } : xV
```

#### 1199. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14788-L14791` → after: `L14788-L14791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14788-L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14788-L14791) · [Before (L14788-L14791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14788-L14791)

```diff
-                 const MM = OM.sessionsPerPlayer,
-                   rM = null === MM ? null : pU(MM.days, OM.dailyPlays);
-                 if (null === MM || null === rM) return null;
-                 const iM = MM => Math.round(100 * MM) / 100;
+                 const VV = JV.sessionsPerPlayer,
+                   eV = null === VV ? null : zt(VV.days, JV.dailyPlays);
+                 if (null === VV || null === eV) return null;
+                 const xV = VV => Math.round(100 * VV) / 100;
```

#### 1200. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14795` → after: `L14795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14795) · [Before (L14795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14795)

```diff
-                     days: MM.days
+                     days: VV.days
```

#### 1201. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14797-L14799` → after: `L14797-L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14797-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14797-L14799) · [Before (L14797-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14797-L14799)

```diff
-                   now: iM(MM.now),
-                   helped: iM(MM.now + Math.max(.05, null === MM.typical ? 0 : (MM.typical - MM.now) * aU)),
-                   wait: rM
+                   now: xV(VV.now),
+                   helped: xV(VV.now + Math.max(.05, null === VV.typical ? 0 : (VV.typical - VV.now) * Yt)),
+                   wait: eV
```

#### 1202. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14805-L14809` → after: `L14805-L14809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14805-L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14805-L14809) · [Before (L14805-L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14805-L14809)

```diff
-           }(PM, MM, [null !== (SM = MM.title) && void 0 !== SM ? SM : "", ...dU(MM), null !== (jM = MM.target) && void 0 !== jM ? jM : ""].join("\n"), rM);
-           if (null === nM) return null;
-           const QM = oU(MM, iM, PM, nM.now);
-           let zM = null === QM ? nM.helped : Math.min(nM.helped, QM);
-           if (null !== QM && QM - zM < (zM - nM.now) / 2 && (zM = QM), zM <= nM.now) return null;
+           }(pV, VV, [null !== (YV = VV.title) && void 0 !== YV ? YV : "", ...kt(VV), null !== (UV = VV.target) && void 0 !== UV ? UV : ""].join("\n"), eV);
+           if (null === QV) return null;
+           const nV = it(VV, xV, pV, QV.now);
+           let wV = null === nV ? QV.helped : Math.min(QV.helped, nV);
+           if (null !== nV && nV - wV < (wV - QV.now) / 2 && (wV = nV), wV <= QV.now) return null;
```

#### 1203. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14811-L14815` → after: `L14811-L14815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14811-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14811-L14815) · [Before (L14811-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14811-L14815)

```diff
-             measure: LM
-           } = nM, mM = "players" === nM.wait.kind && "progressStep" === LM.kind ? {
-             ...nM.wait,
-             helpedPlayers: YU(LM.toPlayers, zM, nM.wait.more)
-           } : nM.wait;
+             measure: ZV
+           } = QV, vV = "players" === QV.wait.kind && "progressStep" === ZV.kind ? {
+             ...QV.wait,
+             helpedPlayers: ot(ZV.toPlayers, wV, QV.wait.more)
+           } : QV.wait;
```

#### 1204. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14817-L14823` → after: `L14817-L14823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14817-L14823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14817-L14823) · [Before (L14817-L14823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14817-L14823)

```diff
-             statKey: PM,
-             ...nM,
-             selection: null !== (aM = nM.selection) && void 0 !== aM ? aM : null,
-             helped: zM,
-             goal: QM,
-             wait: mM,
-             undo: DU(MM.code, OM)
+             statKey: pV,
+             ...QV,
+             selection: null !== (yV = QV.selection) && void 0 !== yV ? yV : null,
+             helped: wV,
+             goal: nV,
+             wait: vV,
+             undo: Rt(VV.code, JV)
```

#### 1205. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14827-L14828` → after: `L14827-L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14827-L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14827-L14828) · [Before (L14827-L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14827-L14828)

```diff
-         function YU(MM, rM, iM) {
-           return Math.round(MM + rM / 100 * iM)
+         function ot(VV, eV, xV) {
+           return Math.round(VV + eV / 100 * xV)
```

#### 1206. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14831-L14837` → after: `L14831-L14837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14831-L14837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14831-L14837) · [Before (L14831-L14837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14831-L14837)

```diff
-         function NU(MM, rM) {
-           return function(MM) {
-             if (0 === MM.length) return null;
-             const rM = [...MM].sort(((MM, rM) => MM - rM)),
-               iM = Math.floor(rM.length / 2);
-             return rM.length % 2 === 1 ? rM[iM] : (rM[iM - 1] + rM[iM]) / 2
-           }(MM.filter((MM => MM !== rM && MM.group === rM.group && !MM.isBranch && MM.fromPlayers >= SU)).map((MM => MM.share)))
+         function ct(VV, eV) {
+           return function(VV) {
+             if (0 === VV.length) return null;
+             const eV = [...VV].sort(((VV, eV) => VV - eV)),
+               xV = Math.floor(eV.length / 2);
+             return eV.length % 2 === 1 ? eV[xV] : (eV[xV - 1] + eV[xV]) / 2
+           }(VV.filter((VV => VV !== eV && VV.group === eV.group && !VV.isBranch && VV.fromPlayers >= xt)).map((VV => VV.share)))
```

#### 1207. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14840-L14841` → after: `L14840-L14841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14840-L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14840-L14841) · [Before (L14840-L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14840-L14841)

```diff
-         function AU(MM) {
-           return MM.toLocaleString("en-US", {
+         function ht(VV) {
+           return VV.toLocaleString("en-US", {
```

#### 1208. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14846-L14847` → after: `L14846-L14847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14846-L14847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14846-L14847) · [Before (L14846-L14847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14846-L14847)

```diff
-         function xU(MM, rM) {
-           return 1 === MM ? rM("last 1 minute or more") : `${rM("last")} ${MM} ${rM("minutes or more")}`
+         function lt(VV, eV) {
+           return 1 === VV ? eV("last 1 minute or more") : `${eV("last")} ${VV} ${eV("minutes or more")}`
```

#### 1209. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14850` → after: `L14850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14850) · [Before (L14850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14850)

```diff
-         function vU(MM) {
+         function Lt(VV) {
```

#### 1210. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14852-L14853` → after: `L14852-L14853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14852-L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14852-L14853) · [Before (L14852-L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14852-L14853)

```diff
-             stat: MM.statKey,
-             selection: MM.selection
+             stat: VV.statKey,
+             selection: VV.selection
```

#### 1211. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14857` → after: `L14857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14857) · [Before (L14857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14857)

```diff
-         function FU(MM, rM) {
+         function ft(VV, eV) {
```

#### 1212. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14859-L14864` → after: `L14859-L14864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14859-L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14859-L14864) · [Before (L14859-L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14859-L14864)

```diff
-             measure: iM,
-             now: OM,
-             wait: SM
-           } = MM, jM = "players" === SM.kind || 7 === SM.days ? rM("in a week") : `${rM("in")} ${SM.days} ${rM("days")}`;
-           let aM;
-           switch (iM.kind) {
+             measure: xV,
+             now: JV,
+             wait: YV
+           } = VV, UV = "players" === YV.kind || 7 === YV.days ? eV("in a week") : `${eV("in")} ${YV.days} ${eV("days")}`;
+           let yV;
+           switch (xV.kind) {
```

#### 1213. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14866` → after: `L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14866) · [Before (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14866)

```diff
-               aM = [`${rM("if more than")} ${OM} ${rM("in 100")} ${rM("sessions")} ${xU(iM.minutes,rM)}`];
+               yV = [`${eV("if more than")} ${JV} ${eV("in 100")} ${eV("sessions")} ${lt(xV.minutes,eV)}`];
```

#### 1214. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14869-L14873` → after: `L14869-L14873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14869-L14873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14869-L14873) · [Before (L14869-L14873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14869-L14873)

```diff
-               aM = [`${rM("if more players at")} `, {
-                 code: iM.from
-               }, ` ${rM("reach")} `, {
-                 code: iM.to
-               }, iM.isOrLater ? ` ${rM("or a later one")}` : "", ` ${rM("than now")} (${OM} ${rM("in 100")})`];
+               yV = [`${eV("if more players at")} `, {
+                 code: xV.from
+               }, ` ${eV("reach")} `, {
+                 code: xV.to
+               }, xV.isOrLater ? ` ${eV("or a later one")}` : "", ` ${eV("than now")} (${JV} ${eV("in 100")})`];
```

#### 1215. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14876` → after: `L14876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14876) · [Before (L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14876)

```diff
-               aM = [`${rM("if more players at")} ${iM.from} ${rM("reach")} ${iM.to} ${rM("than now")} (${OM} ${rM("in 100")})`];
+               yV = [`${eV("if more players at")} ${xV.from} ${eV("reach")} ${xV.to} ${eV("than now")} (${JV} ${eV("in 100")})`];
```

#### 1216. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14879` → after: `L14879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14879) · [Before (L14879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14879)

```diff
-               aM = [rM("if most days have more plays than now")];
+               yV = [eV("if most days have more plays than now")];
```

#### 1217. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14882` → after: `L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14882) · [Before (L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14882)

```diff
-               aM = [`${rM("if sessions last longer than now")} (${AU(OM)} ${rM("minutes")})`];
+               yV = [`${eV("if sessions last longer than now")} (${ht(JV)} ${eV("minutes")})`];
```

#### 1218. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14885` → after: `L14885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14885) · [Before (L14885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14885)

```diff
-               aM = [rM("if players come back more often than now")]
+               yV = [eV("if players come back more often than now")]
```

#### 1219. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14887` → after: `L14887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14887) · [Before (L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14887)

```diff
-           return [`${rM("Check")} `, vU(MM), ` ${jM}: `, ...aM, `, ${rM("it helped")}.`]
+           return [`${eV("Check")} `, Lt(VV), ` ${UV}: `, ...yV, `, ${eV("it helped")}.`]
```

#### 1220. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14889` → after: `L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14889) · [Before (L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14889)

```diff
-         const BU = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, XU = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, IU = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
+         const mt = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, Kt = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, Ht = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
```

#### 1221. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14891-L14892` → after: `L14891-L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14891-L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14891-L14892) · [Before (L14891-L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14891-L14892)

```diff
-         function KU(MM) {
-           return BU.test(MM) || XU.test(MM) && !IU.test(MM)
+         function ut(VV) {
+           return mt.test(VV) || Kt.test(VV) && !Ht.test(VV)
```

#### 1222. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14895-L14906` → after: `L14895-L14906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14895-L14906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14895-L14906) · [Before (L14895-L14906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14895-L14906)

```diff
-         function qU(MM) {
-           let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const iM = MM.steps.filter((MM => KU(MM.text))),
-             OM = new Set(rM ? iM.slice(1) : iM);
-           if (0 === OM.size) return MM;
-           const SM = MM => !OM.has(MM),
-             jM = MM.blocks.flatMap((MM => {
-               if ("list" !== MM.kind) return [MM];
-               const rM = MM.items.filter(SM);
-               return 0 === rM.length ? [] : [{
-                 ...MM,
-                 items: rM
+         function st(VV) {
+           let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           const xV = VV.steps.filter((VV => ut(VV.text))),
+             JV = new Set(eV ? xV.slice(1) : xV);
+           if (0 === JV.size) return VV;
+           const YV = VV => !JV.has(VV),
+             UV = VV.blocks.flatMap((VV => {
+               if ("list" !== VV.kind) return [VV];
+               const eV = VV.items.filter(YV);
+               return 0 === eV.length ? [] : [{
+                 ...VV,
+                 items: eV
```

#### 1223. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14910-L14912` → after: `L14910-L14912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14910-L14912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14910-L14912) · [Before (L14910-L14912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14910-L14912)

```diff
-             ...MM,
-             blocks: jM,
-             steps: MM.steps.filter(SM)
+             ...VV,
+             blocks: UV,
+             steps: VV.steps.filter(YV)
```

#### 1224. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14915` → after: `L14915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14915) · [Before (L14915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14915)

```diff
-         const TU = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, VU = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, cU = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, MG = new Set(["Math", "Date", "JSON", "cons … [truncated]
+         const St = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, It = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, dt = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, Ot = new Set(["Math", "Date", "JSON", "cons … [truncated]
```

#### 1225. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14917-L14920` → after: `L14917-L14920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14917-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14917-L14920) · [Before (L14917-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14917-L14920)

```diff
-         function iG(MM, rM) {
-           for (const [iM] of(null !== rM && void 0 !== rM ? rM : "").matchAll(TU)) {
-             MM.add(iM);
-             for (const rM of iM.split(".")) MM.add(rM)
+         function eF(VV, eV) {
+           for (const [xV] of(null !== eV && void 0 !== eV ? eV : "").matchAll(St)) {
+             VV.add(xV);
+             for (const eV of xV.split(".")) VV.add(eV)
```

#### 1226. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14924-L14930` → after: `L14924-L14930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14924-L14930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14924-L14930) · [Before (L14924-L14930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14924-L14930)

```diff
-         function OG(MM) {
-           if (null === MM.worldCode || void 0 === MM.worldCode) return null;
-           const rM = [];
-           for (const SM of [null === (iM = MM.customEvents) || void 0 === iM ? void 0 : iM.byEvent, null === (OM = MM.playerTotals) || void 0 === OM ? void 0 : OM.playerTotals]) {
-             var iM, OM;
-             qP(null !== SM && void 0 !== SM ? SM : {}, ((MM, iM, OM) => {
-               rM.push(iM, ...Object.keys(OM))
+         function xF(VV) {
+           if (null === VV.worldCode || void 0 === VV.worldCode) return null;
+           const eV = [];
+           for (const YV of [null === (xV = VV.customEvents) || void 0 === xV ? void 0 : xV.byEvent, null === (JV = VV.playerTotals) || void 0 === JV ? void 0 : JV.playerTotals]) {
+             var xV, JV;
+             sp(null !== YV && void 0 !== YV ? YV : {}, ((VV, xV, JV) => {
+               eV.push(xV, ...Object.keys(JV))
```

#### 1227. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14933-L14943` → after: `L14933-L14943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14933-L14943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14933-L14943) · [Before (L14933-L14943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14933-L14943)

```diff
-           return function(MM) {
-             let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-             const iM = new Set(Mz.keys());
-             for (const jM of [...mQ, ...rG]) iM.add(`api.${jM}`);
-             for (const jM of MM.constants)
-               for (const MM of [jM.name, jM.value, jM.where, jM.usedIn]) iG(iM, MM);
-             for (const jM of MM.callbacks) {
-               iG(iM, jM.name);
-               for (const MM of null !== (OM = jM.params) && void 0 !== OM ? OM : []) {
-                 var OM;
-                 iG(iM, MM)
+           return function(VV) {
+             let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             const xV = new Set(On.keys());
+             for (const UV of [...Qn, ...VF]) xV.add(`api.${UV}`);
+             for (const UV of VV.constants)
+               for (const VV of [UV.name, UV.value, UV.where, UV.usedIn]) eF(xV, VV);
+             for (const UV of VV.callbacks) {
+               eF(xV, UV.name);
+               for (const VV of null !== (JV = UV.params) && void 0 !== JV ? JV : []) {
+                 var JV;
+                 eF(xV, VV)
```

#### 1228. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14946-L14949` → after: `L14946-L14949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14946-L14949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14946-L14949) · [Before (L14946-L14949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14946-L14949)

```diff
-             for (const jM of MM.analyticsHelpers) iG(iM, jM);
-             for (const jM of null !== (SM = MM.messages) && void 0 !== SM ? SM : []) {
-               var SM;
-               iG(iM, jM.where), iG(iM, jM.line)
+             for (const UV of VV.analyticsHelpers) eF(xV, UV);
+             for (const UV of null !== (YV = VV.messages) && void 0 !== YV ? YV : []) {
+               var YV;
+               eF(xV, UV.where), eF(xV, UV.line)
```

#### 1229. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14951-L14955` → after: `L14951-L14955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14951-L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14951-L14955) · [Before (L14951-L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14951-L14955)

```diff
-             for (const jM of MM.events)
-               for (const MM of [jM.eventType, jM.valueExpression, jM.numberExpression, jM.where, jM.guard, ...jM.values]) iG(iM, MM);
-             for (const jM of rM) iG(iM, jM);
-             return iM
-           }(MM.worldCode, rM)
+             for (const UV of VV.events)
+               for (const VV of [UV.eventType, UV.valueExpression, UV.numberExpression, UV.where, UV.guard, ...UV.values]) eF(xV, VV);
+             for (const UV of eV) eF(xV, UV);
+             return xV
+           }(VV.worldCode, eV)
```

#### 1230. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14958-L14960` → after: `L14958-L14960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14958-L14960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14958-L14960) · [Before (L14958-L14960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14958-L14960)

```diff
-         function SG(MM, rM, iM, OM) {
-           const SM = MM.split(".");
-           return "api" === SM[0] && SM.length > 1 ? null !== OM ? OM.has(SM[1]) : "pasteCode" !== iM || rM.has(`api.${SM[1]}`) : !(!MG.has(SM[0]) && !rM.has(MM)) || SM.length > 1 && SM.every((MM => rM.has(MM)))
+         function JF(VV, eV, xV, JV) {
+           const YV = VV.split(".");
+           return "api" === YV[0] && YV.length > 1 ? null !== JV ? JV.has(YV[1]) : "pasteCode" !== xV || eV.has(`api.${YV[1]}`) : !(!Ot.has(YV[0]) && !eV.has(VV)) || YV.length > 1 && YV.every((VV => eV.has(VV)))
```

#### 1231. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14963-L14964` → after: `L14963-L14964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14963-L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14963-L14964) · [Before (L14963-L14964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14963-L14964)

```diff
-         function jG(MM) {
-           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(MM)
+         function YF(VV) {
+           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(VV)
```

#### 1232. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14967-L14969` → after: `L14967-L14969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14967-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14967-L14969) · [Before (L14967-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14967-L14969)

```diff
-         function aG(MM, rM) {
-           return rM.startsWith("api.") ? {
-             text: MM,
+         function UF(VV, eV) {
+           return eV.startsWith("api.") ? {
+             text: VV,
```

#### 1233. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14973` → after: `L14973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14973) · [Before (L14973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14973)

```diff
-             text: MM,
+             text: VV,
```

#### 1234. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14977` → after: `L14977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14977) · [Before (L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14977)

```diff
-         const PG = hL, nG = 10, QG = 3, zG = 8, LG = /tutorial|onboarding/i, mG = /event|flow|heatmap|order players/i, HG = .15, hG = .1, JG = 3, dG = .25, yG = .1, lG = 2, EG = 3, UG = .7, GG = 5;
+         const yF = kZ, pF = 10, QF = 3, nF = 8, wF = /tutorial|onboarding/i, ZF = /event|flow|heatmap|order players/i, vF = .15, rF = .1, kF = 3, bF = .25, EF = .1, BF = 2, jF = 3, qF = .7, tF = 5;
```

#### 1235. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14979-L14980` → after: `L14979-L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14979-L14980) · [Before (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14979-L14980)

```diff
-         function CG(MM, rM) {
-           return "" === rM ? MM : /^-?\d+$/.test(rM) ? `${MM} ${rM}` : /\d/.test(rM) ? rM : `${MM}: ${rM}`
+         function FF(VV, eV) {
+           return "" === eV ? VV : /^-?\d+$/.test(eV) ? `${VV} ${eV}` : /\d/.test(eV) ? eV : `${VV}: ${eV}`
```

#### 1236. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14983-L14986` → after: `L14983-L14986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14983-L14986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14983-L14986) · [Before (L14983-L14986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14983-L14986)

```diff
-         function eG(MM) {
-           const rM = IP(MM),
-             iM = rM.lastIndexOf(": ");
-           return -1 === iM ? rM : CG(rM.slice(0, iM), rM.slice(iM + 2))
+         function TF(VV) {
+           const eV = Kp(VV),
+             xV = eV.lastIndexOf(": ");
+           return -1 === xV ? eV : FF(eV.slice(0, xV), eV.slice(xV + 2))
```

#### 1237. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L14989-L14998` → after: `L14989-L14998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R14989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L14989-L14998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L14989-L14998) · [Before (L14989-L14998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L14989-L14998)

```diff
-         function bG(MM, rM, iM) {
-           var OM, SM;
-           const jM = Ih(rM.flow, rM.progressions, null, null, iM),
-             aM = null !== (OM = null === (SM = MM.stats) || void 0 === SM ? void 0 : SM.rankingWindow.uniquePlayers) && void 0 !== OM ? OM : 0;
-           if ("flowStep" === (null === jM || void 0 === jM ? void 0 : jM.kind)) {
-             const MM = rM.flow,
-               iM = Math.max(0, ...MM.steps.map((MM => MM.fromPlayers))),
-               OM = MM.steps.filter((MM => {
-                 var rM, OM;
-                 return MM.isChain && MM.fromPlayers >= (null !== (rM = null === (OM = MM.start) || void 0 === OM ? void 0 : OM.players) && void 0 !== rM ? rM : iM) * hG
+         function PF(VV, eV, xV) {
+           var JV, YV;
+           const UV = uk(eV.flow, eV.progressions, null, null, xV),
+             yV = null !== (JV = null === (YV = VV.stats) || void 0 === YV ? void 0 : YV.rankingWindow.uniquePlayers) && void 0 !== JV ? JV : 0;
+           if ("flowStep" === (null === UV || void 0 === UV ? void 0 : UV.kind)) {
+             const VV = eV.flow,
+               xV = Math.max(0, ...VV.steps.map((VV => VV.fromPlayers))),
+               JV = VV.steps.filter((VV => {
+                 var eV, JV;
+                 return VV.isChain && VV.fromPlayers >= (null !== (eV = null === (JV = VV.start) || void 0 === JV ? void 0 : JV.players) && void 0 !== eV ? eV : xV) * rF
```

#### 1238. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15000` → after: `L15000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15000) · [Before (L15000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15000)

```diff
-               SM = (MM, rM) => {
+               YV = (VV, eV) => {
```

#### 1239. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15002-L15006` → after: `L15002-L15006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15002-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15002-L15006) · [Before (L15002-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15002-L15006)

```diff
-                   from: eG(MM.from),
-                   to: eG(MM.to),
-                   isOrLater: MM.isOrLater,
-                   fromPlayers: MM.fromPlayers,
-                   lost: MM.lost,
+                   from: TF(VV.from),
+                   to: TF(VV.to),
+                   isOrLater: VV.isOrLater,
+                   fromPlayers: VV.fromPlayers,
+                   lost: VV.lost,
```

#### 1240. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15010-L15012` → after: `L15010-L15012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15010-L15012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15010-L15012) · [Before (L15010-L15012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15010-L15012)

```diff
-                   share: MM.share,
-                   players: (iM = MM.fromPlayers, aM > 0 ? Math.min(iM, aM) : iM),
-                   later: rM
+                   share: VV.share,
+                   players: (xV = VV.fromPlayers, yV > 0 ? Math.min(xV, yV) : xV),
+                   later: eV
```

#### 1241. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15014` → after: `L15014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15014) · [Before (L15014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15014)

```diff
-                 var iM
+                 var xV
```

#### 1242. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15016-L15023` → after: `L15016-L15023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15016-L15023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15016-L15023) · [Before (L15016-L15023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15016-L15023)

```diff
-               PM = [jM.step, jM.mostLost, MM.lowestShare].filter((MM => null !== MM && OM.includes(MM)));
-             return [...new Set(PM)].map((rM => {
-               const iM = function(MM, rM) {
-                   const iM = new Set([rM]),
-                     OM = [rM];
-                   for (; OM.length > 0;) {
-                     const rM = OM.shift();
-                     for (const SM of MM) SM.from !== rM || iM.has(SM.to) || (iM.add(SM.to), OM.push(SM.to))
+               pV = [UV.step, UV.mostLost, VV.lowestShare].filter((VV => null !== VV && JV.includes(VV)));
+             return [...new Set(pV)].map((eV => {
+               const xV = function(VV, eV) {
+                   const xV = new Set([eV]),
+                     JV = [eV];
+                   for (; JV.length > 0;) {
+                     const eV = JV.shift();
+                     for (const YV of VV) YV.from !== eV || xV.has(YV.to) || (xV.add(YV.to), JV.push(YV.to))
```

#### 1243. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15025-L15028` → after: `L15025-L15028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15025-L15028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15025-L15028) · [Before (L15025-L15028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15025-L15028)

```diff
-                   return iM
-                 }(MM.steps, rM.to),
-                 jM = OM.filter((MM => MM !== rM && iM.has(MM.from)));
-               return SM(rM, jM.map((MM => SM(MM, []))))
+                   return xV
+                 }(VV.steps, eV.to),
+                 UV = JV.filter((VV => VV !== eV && xV.has(VV.from)));
+               return YV(eV, UV.map((VV => YV(VV, []))))
```

#### 1244. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15031` → after: `L15031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15031) · [Before (L15031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15031)

```diff
-           if ("progressStep" === (null === jM || void 0 === jM ? void 0 : jM.kind)) {
+           if ("progressStep" === (null === UV || void 0 === UV ? void 0 : UV.kind)) {
```

#### 1245. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15033-L15039` → after: `L15033-L15039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15033-L15039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15033-L15039) · [Before (L15033-L15039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15033-L15039)

```diff
-               progression: MM
-             } = jM, rM = MM.values[0].players, iM = MM.steps.filter((MM => MM.from.players >= rM * hG)), OM = (iM, OM) => ({
-               from: CG(MM.eventType, iM.from.value),
-               to: CG(MM.eventType, iM.to.value),
-               isOrLater: iM.reached > iM.to.players,
-               fromPlayers: iM.from.players,
-               lost: iM.lost,
+               progression: VV
+             } = UV, eV = VV.values[0].players, xV = VV.steps.filter((VV => VV.from.players >= eV * rF)), JV = (xV, JV) => ({
+               from: FF(VV.eventType, xV.from.value),
+               to: FF(VV.eventType, xV.to.value),
+               isOrLater: xV.reached > xV.to.players,
+               fromPlayers: xV.from.players,
+               lost: xV.lost,
```

#### 1246. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15043-L15044` → after: `L15043-L15044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15043-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15043-L15044) · [Before (L15043-L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15043-L15044)

```diff
-                 gameCategory: MM.gameCategory,
-                 eventType: MM.eventType,
+                 gameCategory: VV.gameCategory,
+                 eventType: VV.eventType,
```

#### 1247. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15047-L15051` → after: `L15047-L15051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15047-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15047-L15051) · [Before (L15047-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15047-L15051)

```diff
-               share: iM.share,
-               players: iM.from.players * Math.min(1, rM > 0 && aM > 0 ? aM / rM : 1),
-               later: OM
-             }), SM = [jM.step, jM.mostLost, MM.lowestShare].filter((MM => null !== MM && iM.includes(MM)));
-             return [...new Set(SM)].map((MM => OM(MM, iM.slice(iM.indexOf(MM) + 1).map((MM => OM(MM, []))))))
+               share: xV.share,
+               players: xV.from.players * Math.min(1, eV > 0 && yV > 0 ? yV / eV : 1),
+               later: JV
+             }), YV = [UV.step, UV.mostLost, VV.lowestShare].filter((VV => null !== VV && xV.includes(VV)));
+             return [...new Set(YV)].map((VV => JV(VV, xV.slice(xV.indexOf(VV) + 1).map((VV => JV(VV, []))))))
```

#### 1248. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15056-L15073` → after: `L15056-L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15056-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15056-L15073) · [Before (L15056-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15056-L15073)

```diff
-         function wG(MM, rM) {
-           const iM = IP(MM);
-           return iM.startsWith(`${rM}: `) ? iM.slice(rM.length + 2) : null
-         }
- 
-         function tG(MM, rM) {
-           var iM, OM;
-           const SM = function(MM) {
-             var rM, iM, OM, SM;
-             const jM = null !== (rM = null === (iM = MM.playerTotals) || void 0 === iM ? void 0 : iM.playerTotals) && void 0 !== rM ? rM : {},
-               aM = null !== (OM = null === (SM = MM.flow) || void 0 === SM ? void 0 : SM.edges) && void 0 !== OM ? OM : [];
-             let PM = null;
-             return qP(jM, ((rM, iM, OM) => {
-               var SM;
-               const jM = null === (SM = MM.worldCode) || void 0 === SM ? void 0 : SM.events.find((MM => MM.isLiteralType && MM.eventType === iM));
-               if (!LG.test(iM) || void 0 === jM || null !== jM.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function AF(VV, eV) {
+           const xV = Kp(VV);
+           return xV.startsWith(`${eV}: `) ? xV.slice(eV.length + 2) : null
+         }
+ 
+         function NF(VV, eV) {
+           var xV, JV;
+           const YV = function(VV) {
+             var eV, xV, JV, YV;
+             const UV = null !== (eV = null === (xV = VV.playerTotals) || void 0 === xV ? void 0 : xV.playerTotals) && void 0 !== eV ? eV : {},
+               yV = null !== (JV = null === (YV = VV.flow) || void 0 === YV ? void 0 : YV.edges) && void 0 !== JV ? JV : [];
+             let pV = null;
+             return sp(UV, ((eV, xV, JV) => {
+               var YV;
+               const UV = null === (YV = VV.worldCode) || void 0 === YV ? void 0 : YV.events.find((VV => VV.isLiteralType && VV.eventType === xV));
+               if (!wF.test(xV) || void 0 === UV || null !== UV.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1249. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15075-L15076` → after: `L15075-L15076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15075-L15076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15075-L15076) · [Before (L15075-L15076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15075-L15076)

```diff
-                     value: rM,
-                     players: iM
+                     value: eV,
+                     players: xV
```

#### 1250. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15078-L15079` → after: `L15078-L15079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15078-L15079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15078-L15079) · [Before (L15078-L15079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15078-L15079)

```diff
-                 })).sort(((MM, rM) => rM.players - MM.players)),
-                 QM = new Map(nM.map(((MM, rM) => {
+                 })).sort(((VV, eV) => eV.players - VV.players)),
+                 nV = new Map(QV.map(((VV, eV) => {
```

#### 1251. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15081-L15083` → after: `L15081-L15083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15081-L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15081-L15083) · [Before (L15081-L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15081-L15083)

```diff
-                     value: iM
-                   } = MM;
-                   return [iM, rM]
+                     value: xV
+                   } = VV;
+                   return [xV, eV]
```

#### 1252. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15085` → after: `L15085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15085) · [Before (L15085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15085)

```diff
-                 zM = nM.every((MM => {
+                 wV = QV.every((VV => {
```

#### 1253. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15087-L15089` → after: `L15087-L15089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15087-L15089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15087-L15089) · [Before (L15087-L15089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15087-L15089)

```diff
-                     value: rM
-                   } = MM;
-                   return jM.values.includes(rM)
+                     value: eV
+                   } = VV;
+                   return UV.values.includes(eV)
```

#### 1254. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15091` → after: `L15091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15091) · [Before (L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15091)

```diff
-                 LM = nM.slice(1).every(((MM, rM) => {
+                 ZV = QV.slice(1).every(((VV, eV) => {
```

#### 1255. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15093-L15095` → after: `L15093-L15095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15093-L15095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15093-L15095) · [Before (L15093-L15095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15093-L15095)

```diff
-                     players: iM
-                   } = MM;
-                   return iM < nM[rM].players
+                     players: xV
+                   } = VV;
+                   return xV < QV[eV].players
```

#### 1256. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15097-L15101` → after: `L15097-L15101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15097-L15101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15097-L15101) · [Before (L15097-L15101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15097-L15101)

```diff
-                 mM = aM.some((MM => {
-                   var rM, OM;
-                   const SM = QM.get(null !== (rM = wG(MM.from, iM)) && void 0 !== rM ? rM : ""),
-                     jM = QM.get(null !== (OM = wG(MM.to, iM)) && void 0 !== OM ? OM : "");
-                   return void 0 !== SM && void 0 !== jM && SM > jM
+                 vV = yV.some((VV => {
+                   var eV, JV;
+                   const YV = nV.get(null !== (eV = AF(VV.from, xV)) && void 0 !== eV ? eV : ""),
+                     UV = nV.get(null !== (JV = AF(VV.to, xV)) && void 0 !== JV ? JV : "");
+                   return void 0 !== YV && void 0 !== UV && YV > UV
```

#### 1257. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15103-L15107` → after: `L15103-L15107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15103-L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15103-L15107) · [Before (L15103-L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15103-L15107)

```diff
-                 HM = null === PM || nM[0].players > PM.values[0].players;
-               nM.length >= QG && zM && LM && !mM && HM && (PM = {
-                 gameCategory: rM,
-                 eventType: iM,
-                 values: nM
+                 rV = null === pV || QV[0].players > pV.values[0].players;
+               QV.length >= QF && wV && ZV && !vV && rV && (pV = {
+                 gameCategory: eV,
+                 eventType: xV,
+                 values: QV
```

#### 1258. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15109-L15112` → after: `L15109-L15112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15109-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15109-L15112) · [Before (L15109-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15109-L15112)

```diff
-             })), PM
-           }(MM);
-           if (null === SM) return [];
-           const jM = null !== (iM = null === (OM = MM.stats) || void 0 === OM ? void 0 : OM.rankingWindow.uniquePlayers) && void 0 !== iM ? iM : 0,
+             })), pV
+           }(VV);
+           if (null === YV) return [];
+           const UV = null !== (xV = null === (JV = VV.stats) || void 0 === JV ? void 0 : JV.rankingWindow.uniquePlayers) && void 0 !== xV ? xV : 0,
```

#### 1259. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15114-L15120` → after: `L15114-L15120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15114-L15120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15114-L15120) · [Before (L15114-L15120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15114-L15120)

```diff
-               values: aM,
-               eventType: PM
-             } = SM,
-             nM = aM[0].players,
-             QM = {
-               gameCategory: SM.gameCategory,
-               eventType: PM,
+               values: yV,
+               eventType: pV
+             } = YV,
+             QV = yV[0].players,
+             nV = {
+               gameCategory: YV.gameCategory,
+               eventType: pV,
```

#### 1260. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15123-L15128` → after: `L15123-L15128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15123-L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15123-L15128) · [Before (L15123-L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15123-L15128)

```diff
-             zM = aM.slice(1).flatMap(((MM, iM) => {
-               const OM = aM[iM];
-               return OM.players >= rM && OM.players >= nM * hG ? [{
-                 from: OM,
-                 to: MM,
-                 lost: OM.players - MM.players
+             wV = yV.slice(1).flatMap(((VV, xV) => {
+               const JV = yV[xV];
+               return JV.players >= eV && JV.players >= QV * rF ? [{
+                 from: JV,
+                 to: VV,
+                 lost: JV.players - VV.players
```

#### 1261. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15131-L15133` → after: `L15131-L15133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15131-L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15131-L15133) · [Before (L15131-L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15131-L15133)

```diff
-             LM = (MM, rM) => ({
-               from: MM.from.value,
-               to: MM.to.value,
+             ZV = (VV, eV) => ({
+               from: VV.from.value,
+               to: VV.to.value,
```

#### 1262. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15135-L15136` → after: `L15135-L15136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15135-L15136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15135-L15136) · [Before (L15135-L15136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15135-L15136)

```diff
-               fromPlayers: MM.from.players,
-               lost: MM.lost,
+               fromPlayers: VV.from.players,
+               lost: VV.lost,
```

#### 1263. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15139-L15143` → after: `L15139-L15143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15139-L15143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15139-L15143) · [Before (L15139-L15143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15139-L15143)

```diff
-               selection: QM,
-               group: PM,
-               share: MM.to.players / MM.from.players,
-               players: MM.from.players * Math.min(1, nM > 0 && jM > 0 ? jM / nM : 1),
-               later: rM
+               selection: nV,
+               group: pV,
+               share: VV.to.players / VV.from.players,
+               players: VV.from.players * Math.min(1, QV > 0 && UV > 0 ? UV / QV : 1),
+               later: eV
```

#### 1264. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15145-L15150` → after: `L15145-L15150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15145-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15145-L15150) · [Before (L15145-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15145-L15150)

```diff
-             mM = [...zM].sort(((MM, rM) => rM.lost - MM.lost))[0],
-             HM = [...zM].sort(((MM, rM) => MM.to.players / MM.from.players - rM.to.players / rM.from.players))[0];
-           return [...new Set([mM, HM])].flatMap((MM => {
-             if (void 0 === MM) return [];
-             const rM = zM.slice(zM.indexOf(MM) + 1).map((MM => LM(MM, [])));
-             return [LM(MM, rM)]
+             vV = [...wV].sort(((VV, eV) => eV.lost - VV.lost))[0],
+             rV = [...wV].sort(((VV, eV) => VV.to.players / VV.from.players - eV.to.players / eV.from.players))[0];
+           return [...new Set([vV, rV])].flatMap((VV => {
+             if (void 0 === VV) return [];
+             const eV = wV.slice(wV.indexOf(VV) + 1).map((VV => ZV(VV, [])));
+             return [ZV(VV, eV)]
```

#### 1265. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15154` → after: `L15154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15154) · [Before (L15154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15154)

```diff
-         function gG(MM, rM) {
+         function XF(VV, eV) {
```

#### 1266. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15156-L15162` → after: `L15156-L15162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15156-L15162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15156-L15162) · [Before (L15156-L15162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15156-L15162)

```diff
-             share: iM,
-             players: OM,
-             later: SM,
-             ...jM
-           } = MM, aM = 1 - iM - HG;
-           return aM > 0 && OM >= rM && jM.fromPlayers >= rM ? {
-             ...jM,
+             share: xV,
+             players: JV,
+             later: YV,
+             ...UV
+           } = VV, yV = 1 - xV - vF;
+           return yV > 0 && JV >= eV && UV.fromPlayers >= eV ? {
+             ...UV,
```

#### 1267. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15164` → after: `L15164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15164) · [Before (L15164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15164)

```diff
-             score: aM * OM
+             score: yV * JV
```

#### 1268. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15168-L15173` → after: `L15168-L15173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15168-L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15168-L15173) · [Before (L15168-L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15168-L15173)

```diff
-         function uG(MM, rM, iM, OM, SM, jM) {
-           if (iM.length < QG || iM[0].players < OM) return null;
-           const aM = iM.slice(1).flatMap(((MM, rM) => {
-             const jM = iM[rM],
-               aM = SM > 0 ? Math.min(jM.players, SM) : jM.players;
-             return jM.players >= OM ? [(1 - Math.min(1, MM.players / jM.players) - HG) * aM] : []
+         function MF(VV, eV, xV, JV, YV, UV) {
+           if (xV.length < QF || xV[0].players < JV) return null;
+           const yV = xV.slice(1).flatMap(((VV, eV) => {
+             const UV = xV[eV],
+               yV = YV > 0 ? Math.min(UV.players, YV) : UV.players;
+             return UV.players >= JV ? [(1 - Math.min(1, VV.players / UV.players) - vF) * yV] : []
```

#### 1269. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15177-L15194` → after: `L15177-L15194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15177-L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15177-L15194) · [Before (L15177-L15194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15177-L15194)

```diff
-             eventType: MM,
-             order: rM,
-             values: iM.slice(0, zG),
-             hasMore: iM.length > zG,
-             selection: jM,
-             score: Math.max(0, ...aM)
-           }
-         }
- 
-         function RG(MM, rM, iM) {
-           var OM, SM, jM, aM;
-           const PM = null !== (OM = null === (SM = MM.stats) || void 0 === SM ? void 0 : SM.rankingWindow.uniquePlayers) && void 0 !== OM ? OM : 0,
-             nM = null !== (jM = null === (aM = rM.dropoff) || void 0 === aM ? void 0 : aM.mostAboveMedian) && void 0 !== jM ? jM : null;
-           if (null === nM || PM < iM) return null;
-           const QM = kh(nM);
-           if (null === QM.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: VV,
+             order: eV,
+             values: xV.slice(0, nF),
+             hasMore: xV.length > nF,
+             selection: UV,
+             score: Math.max(0, ...yV)
+           }
+         }
+ 
+         function zF(VV, eV, xV) {
+           var JV, YV, UV, yV;
+           const pV = null !== (JV = null === (YV = VV.stats) || void 0 === YV ? void 0 : YV.rankingWindow.uniquePlayers) && void 0 !== JV ? JV : 0,
+             QV = null !== (UV = null === (yV = eV.dropoff) || void 0 === yV ? void 0 : yV.mostAboveMedian) && void 0 !== UV ? UV : null;
+           if (null === QV || pV < xV) return null;
+           const nV = Dk(QV);
+           if (null === nV.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1270. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15196-L15199` → after: `L15196-L15199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15196-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15196-L15199) · [Before (L15196-L15199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15196-L15199)

```diff
-             minute: QM.minute,
-             ended: QM.endedPercent,
-             typicalEnded: QM.medianEndedPercent,
-             score: zM / 100 * PM
+             minute: nV.minute,
+             ended: nV.endedPercent,
+             typicalEnded: nV.medianEndedPercent,
+             score: wV / 100 * pV
```

#### 1271. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15203-L15204` → after: `L15203-L15204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15203-L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15203-L15204) · [Before (L15203-L15204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15203-L15204)

```diff
-         function pG(MM, rM) {
-           const iM = 1 === MM.events.filter((MM => MM.eventType === rM.eventType)).length;
+         function GF(VV, eV) {
+           const xV = 1 === VV.events.filter((VV => VV.eventType === eV.eventType)).length;
```

#### 1272. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15206-L15208` → after: `L15206-L15208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15206-L15208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15206-L15208) · [Before (L15206-L15208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15206-L15208)

```diff
-             gameCategory: MM.gameCategoryId,
-             eventType: rM.eventType,
-             eventValue: iM ? null : rM.eventValue
+             gameCategory: VV.gameCategoryId,
+             eventType: eV.eventType,
+             eventValue: xV ? null : eV.eventValue
```

#### 1273. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15212-L15216` → after: `L15212-L15216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15212-L15216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15212-L15216) · [Before (L15212-L15216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15212-L15216)

```diff
-         function WG(MM, rM) {
-           var iM, OM;
-           const SM = null !== (iM = null === (OM = MM.stats) || void 0 === OM ? void 0 : OM.rankingWindow.uniquePlayers) && void 0 !== iM ? iM : 0,
-             jM = [...MM.heatmaps].sort(((MM, rM) => rM.players.totalCount - MM.players.totalCount))[0];
-           if (void 0 === jM || SM < rM) return null;
+         function WF(VV, eV) {
+           var xV, JV;
+           const YV = null !== (xV = null === (JV = VV.stats) || void 0 === JV ? void 0 : JV.rankingWindow.uniquePlayers) && void 0 !== xV ? xV : 0,
+             UV = [...VV.heatmaps].sort(((VV, eV) => eV.players.totalCount - VV.players.totalCount))[0];
+           if (void 0 === UV || YV < eV) return null;
```

#### 1274. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15218-L15225` → after: `L15218-L15225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15218-L15225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15218-L15225) · [Before (L15218-L15225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15218-L15225)

```diff
-             areas: aM,
-             total: PM
-           } = rd(jM.players), nM = aM[0];
-           if (void 0 === nM || PM <= 0 || nM.count / PM < dG) return null;
-           const QM = MM => ({
-               x: MM.x,
-               z: MM.z,
-               y: MM.busiestY
+             areas: yV,
+             total: pV
+           } = eE(UV.players), QV = yV[0];
+           if (void 0 === QV || pV <= 0 || QV.count / pV < bF) return null;
+           const nV = VV => ({
+               x: VV.x,
+               z: VV.z,
+               y: VV.busiestY
```

#### 1275. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15227` → after: `L15227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15227) · [Before (L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15227)

```diff
-             zM = nM.count / PM;
+             wV = QV.count / pV;
```

#### 1276. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15230-L15235` → after: `L15230-L15235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15230-L15235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15230-L15235) · [Before (L15230-L15235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15230-L15235)

```diff
-             category: jM.gameCategoryId,
-             square: QM(nM),
-             share: zM,
-             next: aM.slice(1, 1 + lG).filter((MM => MM.count / PM >= yG)).map((MM => ({
-               square: QM(MM),
-               share: MM.count / PM
+             category: UV.gameCategoryId,
+             square: nV(QV),
+             share: wV,
+             next: yV.slice(1, 1 + BF).filter((VV => VV.count / pV >= EF)).map((VV => ({
+               square: nV(VV),
+               share: VV.count / pV
```

#### 1277. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15238` → after: `L15238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15238) · [Before (L15238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15238)

```diff
-               gameCategory: jM.gameCategoryId,
+               gameCategory: UV.gameCategoryId,
```

#### 1278. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15242-L15257` → after: `L15242-L15257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15242-L15257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15242-L15257) · [Before (L15242-L15257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15242-L15257)

```diff
-             score: (zM - dG) * SM
-           }
-         }
-         const sG = /^(?:checkpoint|wave|island|zone|level)s?$/, DG = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function kG(MM, rM) {
-           var iM, OM, SM, jM;
-           if (! function(MM) {
-               var rM, iM, OM, SM;
-               const jM = MM.worldCode;
-               return [...(null !== (rM = null === jM || void 0 === jM ? void 0 : jM.functions) && void 0 !== rM ? rM : []).map((MM => MM.name)), ...(null !== (iM = null === jM || void 0 === jM ? void 0 : jM.constants) && void 0 !== iM ? iM : []).map((MM => MM.name)), ...(null !== … [truncated]
-             }(MM)) return null;
-           const aM = MM.heatmaps.some((MM => MM.players.totalCount > 0 || MM.events.some((MM => MM.heatmap.totalCount > 0)))),
-             PM = MM.missing.some((MM => mG.test(MM)));
-           if ((null !== (iM = null === (OM = MM.flow) || void 0 === OM ? void 0 : OM.edges.length) && void 0 !== iM ? iM : 0) > 0 || rM.progressions.length > 0 || aM || PM) return null;
-           const nM = Object.values(null !== (SM = null === (jM = MM.playerTotals) || void 0 === jM ? void 0 : jM.playerTotals) && void 0 !== SM ? SM : {}).flatMap((MM => Object.keys(MM)));
+             score: (wV - bF) * YV
+           }
+         }
+         const RF = /^(?:checkpoint|wave|island|zone|level)s?$/, gF = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function DF(VV, eV) {
+           var xV, JV, YV, UV;
+           if (! function(VV) {
+               var eV, xV, JV, YV;
+               const UV = VV.worldCode;
+               return [...(null !== (eV = null === UV || void 0 === UV ? void 0 : UV.functions) && void 0 !== eV ? eV : []).map((VV => VV.name)), ...(null !== (xV = null === UV || void 0 === UV ? void 0 : UV.constants) && void 0 !== xV ? xV : []).map((VV => VV.name)), ...(null !== … [truncated]
+             }(VV)) return null;
+           const yV = VV.heatmaps.some((VV => VV.players.totalCount > 0 || VV.events.some((VV => VV.heatmap.totalCount > 0)))),
+             pV = VV.missing.some((VV => ZF.test(VV)));
+           if ((null !== (xV = null === (JV = VV.flow) || void 0 === JV ? void 0 : JV.edges.length) && void 0 !== xV ? xV : 0) > 0 || eV.progressions.length > 0 || yV || pV) return null;
+           const QV = Object.values(null !== (YV = null === (UV = VV.playerTotals) || void 0 === UV ? void 0 : UV.playerTotals) && void 0 !== YV ? YV : {}).flatMap((VV => Object.keys(VV)));
```

#### 1279. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15260` → after: `L15260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15260) · [Before (L15260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15260)

```diff
-             line: Jh(MM.worldCode, nM),
+             line: kk(VV.worldCode, QV),
```

#### 1280. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15265-L15278` → after: `L15265-L15278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15265-L15278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15265-L15278) · [Before (L15265-L15278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15265-L15278)

```diff
-         function ZG(MM) {
-           var rM, iM, OM, SM;
-           const jM = vJ(MM),
-             aM = null !== (rM = null === (iM = MM.stats) || void 0 === iM ? void 0 : iM.rankingWindow.uniquePlayers) && void 0 !== rM ? rM : 0,
-             PM = aM >= nG && aM < PG,
-             nM = PM ? nG : PG,
-             QM = function(MM, rM) {
-               return MM.flatMap((MM => {
-                 const iM = gG(MM, rM);
-                 if (null === iM) return [];
-                 const OM = MM.later.map((MM => gG(MM, rM))).filter((MM => null !== MM && MM.lost >= iM.lost * UG)).sort(((MM, rM) => rM.lost - MM.lost))[0];
-                 return [void 0 === OM ? iM : {
-                   ...iM,
-                   next: OM
+         function iF(VV) {
+           var eV, xV, JV, YV;
+           const UV = fb(VV),
+             yV = null !== (eV = null === (xV = VV.stats) || void 0 === xV ? void 0 : xV.rankingWindow.uniquePlayers) && void 0 !== eV ? eV : 0,
+             pV = yV >= pF && yV < yF,
+             QV = pV ? pF : yF,
+             nV = function(VV, eV) {
+               return VV.flatMap((VV => {
+                 const xV = XF(VV, eV);
+                 if (null === xV) return [];
+                 const JV = VV.later.map((VV => XF(VV, eV))).filter((VV => null !== VV && VV.lost >= xV.lost * qF)).sort(((VV, eV) => eV.lost - VV.lost))[0];
+                 return [void 0 === JV ? xV : {
+                   ...xV,
+                   next: JV
```

#### 1281. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15280-L15285` → after: `L15280-L15285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15280-L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15280-L15285) · [Before (L15280-L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15280-L15285)

```diff
-               })).sort(((MM, rM) => rM.score - MM.score)).slice(0, EG)
-             }([...bG(MM, jM, nM), ...tG(MM, nM)], nM),
-             zM = null !== (OM = PM ? function(MM, rM, iM) {
-               var OM, SM;
-               const jM = Dh(null !== (OM = null === (SM = MM.playerTotals) || void 0 === SM ? void 0 : SM.playerTotals) && void 0 !== OM ? OM : {}, rM)[0];
-               if (void 0 === jM) return null;
+               })).sort(((VV, eV) => eV.score - VV.score)).slice(0, jF)
+             }([...PF(VV, UV, QV), ...NF(VV, QV)], QV),
+             wV = null !== (JV = pV ? function(VV, eV, xV) {
+               var JV, YV;
+               const UV = gk(null !== (JV = null === (YV = VV.playerTotals) || void 0 === YV ? void 0 : YV.playerTotals) && void 0 !== JV ? JV : {}, eV)[0];
+               if (void 0 === UV) return null;
```

#### 1282. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15287-L15288` → after: `L15287-L15288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15287-L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15287-L15288) · [Before (L15287-L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15287-L15288)

```diff
-                 eventType: aM
-               } = jM, PM = jM.values.map((MM => {
+                 eventType: yV
+               } = UV, pV = UV.values.map((VV => {
```

#### 1283. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15290-L15292` → after: `L15290-L15292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15290-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15290-L15292) · [Before (L15290-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15290-L15292)

```diff
-                   value: rM,
-                   players: iM
-                 } = MM;
+                   value: eV,
+                   players: xV
+                 } = VV;
```

#### 1284. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15294-L15295` → after: `L15294-L15295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15294-L15295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15294-L15295) · [Before (L15294-L15295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15294-L15295)

```diff
-                   name: CG(aM, rM),
-                   players: iM
+                   name: FF(yV, eV),
+                   players: xV
```

#### 1285. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15297-L15299` → after: `L15297-L15299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15297-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15297-L15299) · [Before (L15297-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15297-L15299)

```diff
-               })), nM = {
-                 gameCategory: jM.gameCategory,
-                 eventType: aM,
+               })), QV = {
+                 gameCategory: UV.gameCategory,
+                 eventType: yV,
```

#### 1286. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15301-L15303` → after: `L15301-L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15301-L15303) · [Before (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15301-L15303)

```diff
-               }, QM = uG(aM, "number", PM, rM, iM, nM), zM = jM.steps.filter((MM => MM.from.players >= GG && 1 - MM.share > HG)).sort(((MM, rM) => MM.share - rM.share || rM.lost - MM.lost))[0];
-               return "ladder" !== (null === QM || void 0 === QM ? void 0 : QM.kind) || void 0 === zM ? QM : {
-                 ...QM,
+               }, nV = MF(yV, "number", pV, eV, xV, QV), wV = UV.steps.filter((VV => VV.from.players >= tF && 1 - VV.share > vF)).sort(((VV, eV) => VV.share - eV.share || eV.lost - VV.lost))[0];
+               return "ladder" !== (null === nV || void 0 === nV ? void 0 : nV.kind) || void 0 === wV ? nV : {
+                 ...nV,
```

#### 1287. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15305-L15309` → after: `L15305-L15309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15305-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15305-L15309) · [Before (L15305-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15305-L15309)

```diff
-                   from: CG(aM, zM.from.value),
-                   to: CG(aM, zM.to.value),
-                   fromPlayers: zM.from.players,
-                   reached: zM.reached,
-                   isOrLater: zM.reached > zM.to.players
+                   from: FF(yV, wV.from.value),
+                   to: FF(yV, wV.to.value),
+                   fromPlayers: wV.from.players,
+                   reached: wV.reached,
+                   isOrLater: wV.reached > wV.to.players
```

#### 1288. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15312-L15318` → after: `L15312-L15318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15312-L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15312-L15318) · [Before (L15312-L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15312-L15318)

```diff
-             }(MM, nM, aM) : null) && void 0 !== OM ? OM : 0 === QM.length ? function(MM, rM, iM) {
-               var OM, SM;
-               let jM = null;
-               return qP(null !== (OM = null === (SM = MM.playerTotals) || void 0 === SM ? void 0 : SM.playerTotals) && void 0 !== OM ? OM : {}, ((MM, OM, SM) => {
-                 if (!LG.test(OM)) return;
-                 const aM = uG(OM, "players", Object.entries(SM).map((MM => {
-                   let [rM, iM] = MM;
+             }(VV, QV, yV) : null) && void 0 !== JV ? JV : 0 === nV.length ? function(VV, eV, xV) {
+               var JV, YV;
+               let UV = null;
+               return sp(null !== (JV = null === (YV = VV.playerTotals) || void 0 === YV ? void 0 : YV.playerTotals) && void 0 !== JV ? JV : {}, ((VV, JV, YV) => {
+                 if (!wF.test(JV)) return;
+                 const yV = MF(JV, "players", Object.entries(YV).map((VV => {
+                   let [eV, xV] = VV;
```

#### 1289. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15320-L15321` → after: `L15320-L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15320-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15320-L15321) · [Before (L15320-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15320-L15321)

```diff
-                     name: rM,
-                     players: iM
+                     name: eV,
+                     players: xV
```

#### 1290. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15323-L15325` → after: `L15323-L15325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15323-L15325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15323-L15325) · [Before (L15323-L15325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15323-L15325)

```diff
-                 })).sort(((MM, rM) => rM.players - MM.players)), rM, iM, {
-                   gameCategory: MM,
-                   eventType: OM,
+                 })).sort(((VV, eV) => eV.players - VV.players)), eV, xV, {
+                   gameCategory: VV,
+                   eventType: JV,
```

#### 1291. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15328-L15340` → after: `L15328-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15328-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15328-L15340) · [Before (L15328-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15328-L15340)

```diff
-                 "ladder" === (null === aM || void 0 === aM ? void 0 : aM.kind) && (null === jM || aM.values[0].players > jM.values[0].players) && (jM = aM)
-               })), jM
-             }(MM, nM, aM) : null,
-             LM = null === zM ? QM : [zM],
-             mM = RG(MM, jM, nM),
-             HM = null !== (SM = function(MM, rM) {
-               var iM, OM;
-               const SM = null !== (iM = null === (OM = MM.stats) || void 0 === OM ? void 0 : OM.rankingWindow.uniquePlayers) && void 0 !== iM ? iM : 0;
-               if (SM < rM) return null;
-               let jM = null;
-               for (const aM of MM.heatmaps)
-                 for (const iM of aM.events) {
-                   if (!Vm(iM.eventType) || null !== Lz(iM.eventType, iM.eventValue, MM.worldCode)) continue;
+                 "ladder" === (null === yV || void 0 === yV ? void 0 : yV.kind) && (null === UV || yV.values[0].players > UV.values[0].players) && (UV = yV)
+               })), UV
+             }(VV, QV, yV) : null,
+             ZV = null === wV ? nV : [wV],
+             vV = zF(VV, UV, QV),
+             rV = null !== (YV = function(VV, eV) {
+               var xV, JV;
+               const YV = null !== (xV = null === (JV = VV.stats) || void 0 === JV ? void 0 : JV.rankingWindow.uniquePlayers) && void 0 !== xV ? xV : 0;
+               if (YV < eV) return null;
+               let UV = null;
+               for (const yV of VV.heatmaps)
+                 for (const xV of yV.events) {
+                   if (!Iv(xV.eventType) || null !== ww(xV.eventType, xV.eventValue, VV.worldCode)) continue;
```

#### 1292. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15342-L15345` → after: `L15342-L15345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15342-L15345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15342-L15345) · [Before (L15342-L15345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15342-L15345)

```diff
-                     areas: OM,
-                     total: SM
-                   } = rd(iM.heatmap), PM = OM[0];
-                   void 0 === PM || SM < rM || PM.count / SM < dG || null !== jM && PM.count <= jM.count || (jM = {
+                     areas: JV,
+                     total: YV
+                   } = eE(xV.heatmap), pV = JV[0];
+                   void 0 === pV || YV < eV || pV.count / YV < bF || null !== UV && pV.count <= UV.count || (UV = {
```

#### 1293. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15347` → after: `L15347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15347) · [Before (L15347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15347)

```diff
-                     category: aM.gameCategoryId,
+                     category: yV.gameCategoryId,
```

#### 1294. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15349-L15351` → after: `L15349-L15351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15349-L15351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15349-L15351) · [Before (L15349-L15351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15349-L15351)

```diff
-                       x: PM.x,
-                       z: PM.z,
-                       y: PM.busiestY
+                       x: pV.x,
+                       z: pV.z,
+                       y: pV.busiestY
```

#### 1295. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15353-L15356` → after: `L15353-L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15353-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15353-L15356) · [Before (L15353-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15353-L15356)

```diff
-                     count: PM.count,
-                     total: SM,
-                     death: "" === iM.eventValue ? null : `${iM.eventType}: ${iM.eventValue}`,
-                     selection: pG(aM, iM)
+                     count: pV.count,
+                     total: YV,
+                     death: "" === xV.eventValue ? null : `${xV.eventType}: ${xV.eventValue}`,
+                     selection: GF(yV, xV)
```

#### 1296. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15359-L15361` → after: `L15359-L15361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15359-L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15359-L15361) · [Before (L15359-L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15359-L15361)

```diff
-               return null === jM ? null : {
-                 ...jM,
-                 score: (jM.count / jM.total - dG) * SM
+               return null === UV ? null : {
+                 ...UV,
+                 score: (UV.count / UV.total - bF) * YV
```

#### 1297. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15363-L15374` → after: `L15363-L15374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15363-L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15363-L15374) · [Before (L15363-L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15363-L15374)

```diff
-             }(MM, nM)) && void 0 !== SM ? SM : WG(MM, nM),
-             hM = null !== mM && (0 === LM.length || mM.score > LM[0].score) ? [mM, ...LM] : LM,
-             JM = (null === HM ? hM : [...hM, HM]).map((MM => PM ? {
-               ...MM,
-               fewPlayers: aM
-             } : MM)),
-             dM = kG(MM, jM);
-           return null === dM ? JM : [...JM, dM]
-         }
- 
-         function oG(MM) {
-           return ` ${MM.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const fG=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function YG(MM,rM){const iM=oG(rM);switch(MM.kind){case"step":{const rM=function(MM){var rM,iM;return null!==(rM … [truncated]
+             }(VV, QV)) && void 0 !== YV ? YV : WF(VV, QV),
+             kV = null !== vV && (0 === ZV.length || vV.score > ZV[0].score) ? [vV, ...ZV] : ZV,
+             bV = (null === rV ? kV : [...kV, rV]).map((VV => pV ? {
+               ...VV,
+               fewPlayers: yV
+             } : VV)),
+             EV = DF(VV, UV);
+           return null === EV ? bV : [...bV, EV]
+         }
+ 
+         function CF(VV) {
+           return ` ${VV.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const aF=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function oF(VV,eV){const xV=CF(eV);switch(VV.kind){case"step":{const eV=function(VV){var eV,xV;return null!==(eV … [truncated]
```

#### 1298. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15376` → after: `L15376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15376) · [Before (L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15376)

```diff
-             rM[1]
+             eV[1]
```

#### 1299. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15379` → after: `L15379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15379) · [Before (L15379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15379)

```diff
-             rM[2]
+             eV[2]
```

#### 1300. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15381` → after: `L15381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15381) · [Before (L15381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15381)

```diff
-           `]}(MM).some((MM=>function(MM,rM){const iM=oG(rM).trim();return""!==iM&&MM.includes(`
+           `]}(VV).some((VV=>function(VV,eV){const xV=CF(eV).trim();return""!==xV&&VV.includes(`
```

#### 1301. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15383` → after: `L15383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15383) · [Before (L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15383)

```diff
-             iM
+             xV
```

#### 1302. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15385` → after: `L15385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15385) · [Before (L15385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15385)

```diff
-           `)}(iM,MM)));return OM(MM.to)||OM(MM.from)&&null!==rM&&iM.includes(`
+           `)}(xV,VV)));return JV(VV.to)||JV(VV.from)&&null!==eV&&xV.includes(`
```

#### 1303. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15387` → after: `L15387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15387) · [Before (L15387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15387)

```diff
-             rM
+             eV
```

#### 1304. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15389` → after: `L15389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15389) · [Before (L15389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15389)

```diff
-           `)}case"deaths":case"place":{const{square:iM}=MM;return function(MM){return[...MM.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((MM=>({x:Number(MM[1]),z:Number(MM[2])})))}(rM).some((MM=>function(MM,rM){return MM.x>=rM.x&&MM.x<rM.x+TJ&&MM.z>=r … [truncated]
+           `)}case"deaths":case"place":{const{square:xV}=VV;return function(VV){return[...VV.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((VV=>({x:Number(VV[1]),z:Number(VV[2])})))}(eV).some((VV=>function(VV,eV){return VV.x>=eV.x&&VV.x<eV.x+Ib&&VV.z>=e … [truncated]
```

#### 1305. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15391` → after: `L15391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15391) · [Before (L15391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15391)

```diff
-             OM
+             JV
```

#### 1306. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15395` → after: `L15395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15395) · [Before (L15395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15395)

```diff
-             OM
+             JV
```

#### 1307. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15399` → after: `L15399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15399) · [Before (L15399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15399)

```diff
-             OM
+             JV
```

#### 1308. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15403` → after: `L15403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15403) · [Before (L15403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15403)

```diff
-             OM
+             JV
```

#### 1309. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15407` → after: `L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15407) · [Before (L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15407)

```diff
-             MM
+             VV
```

#### 1310. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15409` → after: `L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15409) · [Before (L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15409)

```diff
-           `)))}}}function NG(MM,rM,iM){if("young"===iM){var OM;const iM=[MM.reduce(((MM,rM)=>"unseen"!==rM.kind&&(null===MM||rM.score>MM.score)?rM:MM),null),null!==(OM=MM.find((MM=>"unseen"===MM.kind)))&&void 0!==OM?OM:null].find((MM=>null!==MM&&!YG(MM,rM)));return void 0===iM||n … [truncated]
+           `)))}}}function cF(VV,eV,xV){if("young"===xV){var JV;const xV=[VV.reduce(((VV,eV)=>"unseen"!==eV.kind&&(null===VV||eV.score>VV.score)?eV:VV),null),null!==(JV=VV.find((VV=>"unseen"===VV.kind)))&&void 0!==JV?JV:null].find((VV=>null!==VV&&!oF(VV,eV)));return void 0===xV||n … [truncated]
```

#### 1311. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15411` → after: `L15411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15411) · [Before (L15411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15411)

```diff
-             MM
+             VV
```

#### 1312. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15414` → after: `L15414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15414) · [Before (L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15414)

```diff
-             OM[2]
+             JV[2]
```

#### 1313. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15418` → after: `L15418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15418) · [Before (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15418)

```diff
-             MM
+             VV
```

#### 1314. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15421` → after: `L15421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15421) · [Before (L15421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15421)

```diff
-             rM
+             eV
```

#### 1315. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15425` → after: `L15425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15425) · [Before (L15425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15425)

```diff
-             MM.x
+             VV.x
```

#### 1316. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15428` → after: `L15428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15428) · [Before (L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15428)

```diff
-             MM.x + iM
+             VV.x + xV
```

#### 1317. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15430` → after: `L15430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15430) · [Before (L15430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15430)

```diff
-             MM.z
+             VV.z
```

#### 1318. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15433` → after: `L15433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15433) · [Before (L15433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15433)

```diff
-             MM.z + iM
+             VV.z + xV
```

#### 1319. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15436` → after: `L15436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15436) · [Before (L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15436)

```diff
-             rM ? ` (height y ${MM.y})` : ""
+             eV ? ` (height y ${VV.y})` : ""
```

#### 1320. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15440` → after: `L15440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15440) · [Before (L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15440)

```diff
-             MM.x + rM
+             VV.x + eV
```

#### 1321. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15442` → after: `L15442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15442) · [Before (L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15442)

```diff
-             MM.z + rM
+             VV.z + eV
```

#### 1322. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15446` → after: `L15446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15446) · [Before (L15446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15446)

```diff
-             rM("deaths")
+             eV("deaths")
```

#### 1323. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15448` → after: `L15448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15448) · [Before (L15448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15448)

```diff
-           `];const iM=MM.indexOf(": "),OM=-1===iM?null:function(MM){const rM=MM.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((MM=>""!==MM));return rM.length>0&&rM.length<=3&&rM.every((MM=>/^[A-Za-z]+$/.test(MM)&&!/^[a-z]{3,}ed$/i.test(MM)&&!BG.test(MM.toLowerCase()) … [truncated]
+           `];const xV=VV.indexOf(": "),JV=-1===xV?null:function(VV){const eV=VV.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((VV=>""!==VV));return eV.length>0&&eV.length<=3&&eV.every((VV=>/^[A-Za-z]+$/.test(VV)&&!/^[a-z]{3,}ed$/i.test(VV)&&!mF.test(VV.toLowerCase()) … [truncated]
```

#### 1324. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15450` → after: `L15450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15450) · [Before (L15450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15450)

```diff
-             rM("deaths logged as")
+             eV("deaths logged as")
```

#### 1325. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15454` → after: `L15454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15454) · [Before (L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15454)

```diff
-             OM
+             JV
```

#### 1326. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15457` → after: `L15457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15457) · [Before (L15457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15457)

```diff
-             rM("deaths")
+             eV("deaths")
```

#### 1327. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15461` → after: `L15461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15461) · [Before (L15461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15461)

```diff
-             MM.to
+             VV.to
```

#### 1328. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15464` → after: `L15464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15464) · [Before (L15464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15464)

```diff
-             iM("or later")
+             xV("or later")
```

#### 1329. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15468` → after: `L15468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15468) · [Before (L15468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15468)

```diff
-             (0, Zj.e)(MM.group)
+             (0, DU.e)(VV.group)
```

#### 1330. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15470` → after: `L15470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15470) · [Before (L15470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15470)

```diff
-             MM.from
+             VV.from
```

#### 1331. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15473` → after: `L15473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15473) · [Before (L15473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15473)

```diff
-             MM.to
+             VV.to
```

#### 1332. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15477` → after: `L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15477) · [Before (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15477)

```diff
-             (0, Zj.p)(MM.lost)
+             (0, DU.m)(VV.lost)
```

#### 1333. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15480` → after: `L15480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15480) · [Before (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15480)

```diff
-             iM("of the")
+             xV("of the")
```

#### 1334. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15483` → after: `L15483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15483) · [Before (L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15483)

```diff
-             (0, Zj.p)(MM.fromPlayers)
+             (0, DU.m)(VV.fromPlayers)
```

#### 1335. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15486` → after: `L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15486) · [Before (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15486)

```diff
-             iM("players who reached")
+             xV("players who reached")
```

#### 1336. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15489` → after: `L15489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15489) · [Before (L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15489)

```diff
-             MM.from
+             VV.from
```

#### 1337. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15492` → after: `L15492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15492) · [Before (L15492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15492)

```diff
-             iM("didn't reach")
+             xV("didn't reach")
```

#### 1338. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15495` → after: `L15495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15495) · [Before (L15495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15495)

```diff
-             SM
+             YV
```

#### 1339. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15497` → after: `L15497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15497) · [Before (L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15497)

```diff
-             nM
+             QV
```

#### 1340. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15500` → after: `L15500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15500) · [Before (L15500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15500)

```diff
-             jM
+             UV
```

#### 1341. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15503` → after: `L15503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15503) · [Before (L15503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15503)

```diff
-             iM("in 100 players who get to")
+             xV("in 100 players who get to")
```

#### 1342. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15506` → after: `L15506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15506) · [Before (L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15506)

```diff
-             MM.from
+             VV.from
```

#### 1343. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15509` → after: `L15509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15509) · [Before (L15509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15509)

```diff
-             iM("don't get to")
+             xV("don't get to")
```

#### 1344. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15512` → after: `L15512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15512) · [Before (L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15512)

```diff
-             SM
+             YV
```

#### 1345. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15516` → after: `L15516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15516) · [Before (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15516)

```diff
-             jM
+             UV
```

#### 1346. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15519` → after: `L15519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15519) · [Before (L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15519)

```diff
-             iM("of every 100 players who reach")
+             xV("of every 100 players who reach")
```

#### 1347. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15522` → after: `L15522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15522) · [Before (L15522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15522)

```diff
-             MM.from
+             VV.from
```

#### 1348. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15524` → after: `L15524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15524) · [Before (L15524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15524)

```diff
-             (0, Zj.p)(MM.fromPlayers)
+             (0, DU.m)(VV.fromPlayers)
```

#### 1349. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15526` → after: `L15526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15526) · [Before (L15526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15526)

```diff
-             iM("don't reach")
+             xV("don't reach")
```

#### 1350. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15529` → after: `L15529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15529) · [Before (L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15529)

```diff
-             SM
+             YV
```

#### 1351. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15531` → after: `L15531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15531) · [Before (L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15531)

```diff
-             (0, Zj.p)(MM.fromPlayers - MM.lost)
+             (0, DU.m)(VV.fromPlayers - VV.lost)
```

#### 1352. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15533` → after: `L15533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15533) · [Before (L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15533)

```diff
-             nM
+             QV
```

#### 1353. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15537` → after: `L15537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15537) · [Before (L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15537)

```diff
-             jM
+             UV
```

#### 1354. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15540` → after: `L15540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15540) · [Before (L15540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15540)

```diff
-             iM("of every 100 players who reach")
+             xV("of every 100 players who reach")
```

#### 1355. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15543` → after: `L15543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15543) · [Before (L15543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15543)

```diff
-             MM.from
+             VV.from
```

#### 1356. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15546` → after: `L15546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15546) · [Before (L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15546)

```diff
-             iM("don't reach")
+             xV("don't reach")
```

#### 1357. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15549` → after: `L15549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15549) · [Before (L15549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15549)

```diff
-             SM
+             YV
```

#### 1358. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15551` → after: `L15551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15551) · [Before (L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15551)

```diff
-               (0, Zj.p)(MM.lost)
+               (0, DU.m)(VV.lost)
```

#### 1359. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15554` → after: `L15554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15554) · [Before (L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15554)

```diff
-               iM("of")
+               xV("of")
```

#### 1360. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15557` → after: `L15557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15557) · [Before (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15557)

```diff
-               (0, Zj.p)(MM.fromPlayers)
+               (0, DU.m)(VV.fromPlayers)
```

#### 1361. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15559` → after: `L15559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15559) · [Before (L15559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15559)

```diff
-               nM
+               QV
```

#### 1362. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15562` → after: `L15562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15562) · [Before (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15562)

```diff
-             iM("in")
+             xV("in")
```

#### 1363. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15565` → after: `L15565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15565) · [Before (L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15565)

```diff
-             MM.category
+             VV.category
```

#### 1364. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15569` → after: `L15569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15569) · [Before (L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15569)

```diff
-             (0, Zj.p)(MM.count)
+             (0, DU.m)(VV.count)
```

#### 1365. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15572` → after: `L15572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15572) · [Before (L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15572)

```diff
-             iM("of")
+             xV("of")
```

#### 1366. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15575` → after: `L15575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15575) · [Before (L15575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15575)

```diff
-             (0, Zj.p)(MM.total)
+             (0, DU.m)(VV.total)
```

#### 1367. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15577` → after: `L15577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15577) · [Before (L15577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15577)

```diff
-           `:null,aM=AG(MM.count,MM.total),PM=XG(MM.death,iM);return rM?{label:2*MM.count>MM.total?iM("Most deaths"):iM("Many deaths"),parts:[null!==jM&&void 0!==jM?jM:`
+           `:null,yV=hF(VV.count,VV.total),pV=KF(VV.death,xV);return eV?{label:2*VV.count>VV.total?xV("Most deaths"):xV("Many deaths"),parts:[null!==UV&&void 0!==UV?UV:`
```

#### 1368. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15579` → after: `L15579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15579) · [Before (L15579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15579)

```diff
-             aM
+             yV
```

#### 1369. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15582` → after: `L15582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15582) · [Before (L15582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15582)

```diff
-             iM("in 100")
+             xV("in 100")
```

#### 1370. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15586` → after: `L15586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15586) · [Before (L15586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15586)

```diff
-             iM("happen near")
+             xV("happen near")
```

#### 1371. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15589` → after: `L15589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15589) · [Before (L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15589)

```diff
-             FG(MM.square)
+             fF(VV.square)
```

#### 1372. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15592` → after: `L15592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15592) · [Before (L15592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15592)

```diff
-             SM
+             YV
```

#### 1373. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15596` → after: `L15596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15596) · [Before (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15596)

```diff
-             iM("Death hotspot")
+             xV("Death hotspot")
```

#### 1374. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15599` → after: `L15599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15599) · [Before (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15599)

```diff
-             SM
+             YV
```

#### 1375. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15601` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15601) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15601)

```diff
-           `,parts:[null!==jM&&void 0!==jM?jM:`
+           `,parts:[null!==UV&&void 0!==UV?UV:`
```

#### 1376. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15603` → after: `L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15603) · [Before (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15603)

```diff
-             aM
+             yV
```

#### 1377. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15606` → after: `L15606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15606) · [Before (L15606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15606)

```diff
-             iM("of every 100")
+             xV("of every 100")
```

#### 1378. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15610` → after: `L15610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15610) · [Before (L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15610)

```diff
-             SM
+             YV
```

#### 1379. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15613` → after: `L15613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15613) · [Before (L15613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15613)

```diff
-             iM("in the past week happened at")
+             xV("in the past week happened at")
```

#### 1380. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15616` → after: `L15616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15616) · [Before (L15616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15616)

```diff
-             vG(MM.square)
+             LF(VV.square)
```

#### 1381. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15620` → after: `L15620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15620) · [Before (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15620)

```diff
-             iM("in")
+             xV("in")
```

#### 1382. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15623` → after: `L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15623) · [Before (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15623)

```diff
-             MM.category
+             VV.category
```

#### 1383. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15627` → after: `L15627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15627) · [Before (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15627)

```diff
-             iM("near")
+             xV("near")
```

#### 1384. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15630` → after: `L15630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15630) · [Before (L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15630)

```diff
-             FG(MM.square)
+             fF(VV.square)
```

#### 1385. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15633` → after: `L15633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15633) · [Before (L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15633)

```diff
-             OM
+             JV
```

#### 1386. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15635` → after: `L15635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15635) · [Before (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15635)

```diff
-             SM
+             YV
```

#### 1387. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15638` → after: `L15638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15638) · [Before (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15638)

```diff
-             iM("in 100 minutes of play")
+             xV("in 100 minutes of play")
```

#### 1388. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15642` → after: `L15642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15642) · [Before (L15642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15642)

```diff
-             vG(rM, !1)
+             LF(eV, !1)
```

#### 1389. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15644` → after: `L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15644) · [Before (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15644)

```diff
-               AG(OM, 1)
+               hF(JV, 1)
```

#### 1390. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15647` → after: `L15647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15647) · [Before (L15647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15647)

```diff
-               iM("of 100")
+               xV("of 100")
```

#### 1391. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15650` → after: `L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15650) · [Before (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15650)

```diff
-             iM("Busiest place")
+             xV("Busiest place")
```

#### 1392. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15653` → after: `L15653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15653) · [Before (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15653)

```diff
-             OM
+             JV
```

#### 1393. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15657` → after: `L15657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15657) · [Before (L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15657)

```diff
-             vG(MM.square)
+             LF(VV.square)
```

#### 1394. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15659` → after: `L15659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15659) · [Before (L15659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15659)

```diff
-             iM("with")
+             xV("with")
```

#### 1395. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15662` → after: `L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15662) · [Before (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15662)

```diff
-             SM
+             YV
```

#### 1396. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15665` → after: `L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15665) · [Before (L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15665)

```diff
-             iM("of every 100 minutes played")
+             xV("of every 100 minutes played")
```

#### 1397. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15668` → after: `L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15668) · [Before (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15668)

```diff
-             0 === jM.length ? "" : `; ${iM("next busiest")}: ${jM.join(", ")}`
+             0 === UV.length ? "" : `; ${xV("next busiest")}: ${UV.join(", ")}`
```

#### 1398. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15672` → after: `L15672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15672) · [Before (L15672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15672)

```diff
-             OM
+             JV
```

#### 1399. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15674` → after: `L15674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15674) · [Before (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15674)

```diff
-             (0, Zj.p)(SM)
+             (0, DU.m)(YV)
```

#### 1400. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15677` → after: `L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15677) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15677)

```diff
-             0 === rM ? ` ${iM("players")}` : ""
+             0 === eV ? ` ${xV("players")}` : ""
```

#### 1401. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15681` → after: `L15681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15681) · [Before (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15681)

```diff
-             iM("Players per")
+             xV("Players per")
```

#### 1402. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15684` → after: `L15684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15684) · [Before (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15684)

```diff
-             MM.eventType
+             VV.eventType
```

#### 1403. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15687` → after: `L15687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15687) · [Before (L15687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15687)

```diff
-             iM("event")
+             xV("event")
```

#### 1404. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15691` → after: `L15691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15691) · [Before (L15691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15691)

```diff
-             iM("Players at each")
+             xV("Players at each")
```

#### 1405. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15694` → after: `L15694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15694) · [Before (L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15694)

```diff
-             MM.eventType
+             VV.eventType
```

#### 1406. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15697)

```diff
-             xG(jM.from, jM.to)
+             lF(UV.from, UV.to)
```

#### 1407. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15700` → after: `L15700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15700) · [Before (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15700)

```diff
-             jM.isOrLater ? ` ${iM("or later")}` : ""
+             UV.isOrLater ? ` ${xV("or later")}` : ""
```

#### 1408. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15703` → after: `L15703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15703) · [Before (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15703)

```diff
-             iM("loses the most")
+             xV("loses the most")
```

#### 1409. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15705` → after: `L15705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15705) · [Before (L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15705)

```diff
-             (0, Zj.p)(jM.fromPlayers)
+             (0, DU.m)(UV.fromPlayers)
```

#### 1410. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15708` → after: `L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15708) · [Before (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15708)

```diff
-             (0, Zj.p)(jM.reached)
+             (0, DU.m)(UV.reached)
```

#### 1411. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15711` → after: `L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15711) · [Before (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15711)

```diff
-             iM("players")
+             xV("players")
```

#### 1412. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15715` → after: `L15715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15715) · [Before (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15715)

```diff
-             SM
+             YV
```

#### 1413. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15717` → after: `L15717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15717) · [Before (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15717)

```diff
-             rM.join(", ")
+             eV.join(", ")
```

#### 1414. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15720` → after: `L15720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15720) · [Before (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15720)

```diff
-             MM.hasMore ? ", \u2026" : ""
+             VV.hasMore ? ", \u2026" : ""
```

#### 1415. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15723` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15723) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15723)

```diff
-             aM
+             yV
```

#### 1416. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15727` → after: `L15727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15727) · [Before (L15727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15727)

```diff
-             SM
+             YV
```

#### 1417. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15730` → after: `L15730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15730) · [Before (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15730)

```diff
-             iM("This line, first inside")
+             xV("This line, first inside")
```

#### 1418. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15733` → after: `L15733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15733) · [Before (L15733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15733)

```diff
-             iM("would log it")
+             xV("would log it")
```

#### 1419. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15736` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15736) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15736)

```diff
-             iM("between minute")
+             xV("between minute")
```

#### 1420. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15739` → after: `L15739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15739) · [Before (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15739)

```diff
-             MM.minute - 1
+             VV.minute - 1
```

#### 1421. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15742)

```diff
-             iM("and")
+             xV("and")
```

#### 1422. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15745` → after: `L15745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15745) · [Before (L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15745)

```diff
-             MM.minute
+             VV.minute
```

#### 1423. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15749` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15749) · [Before (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15749)

```diff
-             iM("Minute")
+             xV("Minute")
```

#### 1424. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15752` → after: `L15752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15752) · [Before (L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15752)

```diff
-             MM.minute
+             VV.minute
```

#### 1425. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15756` → after: `L15756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15756) · [Before (L15756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15756)

```diff
-             MM.ended
+             VV.ended
```

#### 1426. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15759` → after: `L15759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15759) · [Before (L15759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15759)

```diff
-             iM("in 100 plays end")
+             xV("in 100 plays end")
```

#### 1427. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15762` → after: `L15762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15762) · [Before (L15762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15762)

```diff
-             OM
+             JV
```

#### 1428. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15764` → after: `L15764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15764) · [Before (L15764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15764)

```diff
-             iM("most games")
+             xV("most games")
```

#### 1429. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15766)

```diff
-             MM.typicalEnded
+             VV.typicalEnded
```

#### 1430. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15769` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15769) · [Before (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15769)

```diff
-             MM.ended
+             VV.ended
```

#### 1431. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15772` → after: `L15772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15772) · [Before (L15772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15772)

```diff
-             iM("of every 100 sessions end")
+             xV("of every 100 sessions end")
```

#### 1432. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15775` → after: `L15775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15775) · [Before (L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15775)

```diff
-             OM
+             JV
```

#### 1433. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15778` → after: `L15778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15778) · [Before (L15778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15778)

```diff
-             iM("in a typical Bloxd game")
+             xV("in a typical Bloxd game")
```

#### 1434. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15780` → after: `L15780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15780) · [Before (L15780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15780)

```diff
-             MM.typicalEnded
+             VV.typicalEnded
```

#### 1435. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15783` → after: `L15783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15783) · [Before (L15783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15783)

```diff
-             iM("do")
+             xV("do")
```

#### 1436. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15787` → after: `L15787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15787) · [Before (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15787)

```diff
-             iM("Only")
+             xV("Only")
```

#### 1437. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15790` → after: `L15790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15790) · [Before (L15790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15790)

```diff
-             (0, Zj.p)(MM.fewPlayers)
+             (0, DU.m)(VV.fewPlayers)
```

#### 1438. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15793` → after: `L15793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15793) · [Before (L15793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15793)

```diff
-             iM("players this week, so this is a hint.")
+             xV("players this week, so this is a hint.")
```

#### 1439. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15797` → after: `L15797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15797) · [Before (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15797)

```diff
-             iM("Only")
+             xV("Only")
```

#### 1440. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15800` → after: `L15800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15800) · [Before (L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15800)

```diff
-             (0, Zj.p)(MM.fewPlayers)
+             (0, DU.m)(VV.fewPlayers)
```

#### 1441. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15803` → after: `L15803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15803) · [Before (L15803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15803)

```diff
-             iM("players this week, so this is a hint:")
+             xV("players this week, so this is a hint:")
```

#### 1442. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15807` → after: `L15807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15807) · [Before (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15807)

```diff
-             aM
+             yV
```

#### 1443. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15810` → after: `L15810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15810) · [Before (L15810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15810)

```diff
-             SM
+             YV
```

#### 1444. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15812` → after: `L15812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15812) · [Before (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15812)

```diff
-           `,...jM]:[aM,...OM.parts]}}function qG(MM,rM){var iM,OM;const SM=null!==(iM=null===(OM=MM.stats)||void 0===OM?void 0:OM.rankingWindow.uniquePlayers)&&void 0!==iM?iM:0;return MM.heatmaps.flatMap((iM=>iM.events.flatMap((OM=>{if(!Vm(OM.eventType)||null!==Lz(OM.eventType,OM … [truncated]
+           `,...UV]:[yV,...JV.parts]}}function sF(VV,eV){var xV,JV;const YV=null!==(xV=null===(JV=VV.stats)||void 0===JV?void 0:JV.rankingWindow.uniquePlayers)&&void 0!==xV?xV:0;return VV.heatmaps.flatMap((xV=>xV.events.flatMap((JV=>{if(!Iv(JV.eventType)||null!==ww(JV.eventType,JV … [truncated]
```

#### 1445. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15814` → after: `L15814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15814) · [Before (L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15814)

```diff
-             OM.eventType
+             JV.eventType
```

#### 1446. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15816` → after: `L15816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15816) · [Before (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15816)

```diff
-             OM.eventValue
+             JV.eventValue
```

#### 1447. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15818` → after: `L15818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15818) · [Before (L15818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15818)

```diff
-           `,selection:pG(iM,OM),score:(PM.count/aM-dG)*SM}]}))))}function TG(MM){var rM,iM;if((null!==(rM=null===(iM=MM.stats)||void 0===iM?void 0:iM.rankingWindow.uniquePlayers)&&void 0!==rM?rM:0)<PG)return[];const OM=RG(MM,vJ(MM),PG),SM=WG(MM,PG);return[...null===OM?[]:[OM],... … [truncated]
+           `,selection:GF(xV,JV),score:(pV.count/yV-bF)*YV}]}))))}function SF(VV){var eV,xV;if((null!==(eV=null===(xV=VV.stats)||void 0===xV?void 0:xV.rankingWindow.uniquePlayers)&&void 0!==eV?eV:0)<yF)return[];const JV=zF(VV,fb(VV),yF),YV=WF(VV,yF);return[...null===JV?[]:[JV],... … [truncated]
```

#### 1448. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15820` → after: `L15820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15820) · [Before (L15820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15820)

```diff
-             rM[iM - 1]
+             eV[xV - 1]
```

#### 1449. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15823` → after: `L15823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15823) · [Before (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15823)

```diff
-             MM
+             VV
```

#### 1450. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15825` → after: `L15825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15825) · [Before (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15825)

```diff
-           `])).some((MM=>MC.test(MM)))&&!rM.some((MM=>rC.test(MM)))}(IP(MM.to))&&MM.players>=cG&&MM.players>=MM.fromPlayers*VG));if(1!==SM.length)return null;const[jM]=SM;return{step:rM.from,fromPlayers:jM.fromPlayers,event:IP(jM.to),players:jM.players}}function SC(MM){return MM. … [truncated]
+           `])).some((VV=>OF.test(VV)))&&!eV.some((VV=>VT.test(VV)))}(Kp(VV.to))&&VV.players>=dF&&VV.players>=VV.fromPlayers*IF));if(1!==YV.length)return null;const[UV]=YV;return{step:eV.from,fromPlayers:UV.fromPlayers,event:Kp(UV.to),players:UV.players}}function JT(VV){return VV. … [truncated]
```

#### 1451. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15827-L15828` → after: `L15827-L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15827-L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15827-L15828) · [Before (L15827-L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15827-L15828)

```diff
-             aM.params[SM]
-           })`;return Lh(jM,aM.callback,aM.params[rM],iM,PM,OM)}}function yC(MM){return rM=>{const iM=Jh(rM,[]);return null!==iM&&MM.test(iM.code)?iM:null}}const lC=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),EC=new Set(["e … [truncated]
+             yV.params[YV]
+           })`;return wk(UV,yV.callback,yV.params[eV],xV,pV,JV)}}function ET(VV){return eV=>{const xV=kk(eV,[]);return null!==xV&&VV.test(xV.code)?xV:null}}const BT=new Set(["finish","finished","win","won","done","complete","completed","escape","escaped","victory"]),jT=new Set(["e … [truncated]
```

#### 1452. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15830` → after: `L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15830) · [Before (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15830)

```diff
-             rM("and")
+             eV("and")
```

#### 1453. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15834` → after: `L15834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15834) · [Before (L15834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15834)

```diff
-             MM
+             VV
```

#### 1454. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15837` → after: `L15837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15837) · [Before (L15837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15837)

```diff
-             rM
+             eV
```

#### 1455. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15839` → after: `L15839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15839) · [Before (L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15839)

```diff
-           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function vC(MM,rM){return MM.filter((MM=>MM.fromPlayers>=Math.max(kC,rM*ZC)&&1-MM.reached/MM.fromPlayers>DC)).sort(((MM,rM)=>MM.reached/MM.fromPlayers-rM.reached/rM.fromPlayers||rM.fromPlayers-rM.reached-(MM.fro … [truncated]
+           `.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/_/g," "))}function LT(VV,eV){return VV.filter((VV=>VV.fromPlayers>=Math.max(DT,eV*iT)&&1-VV.reached/VV.fromPlayers>gT)).sort(((VV,eV)=>VV.reached/VV.fromPlayers-eV.reached/eV.fromPlayers||eV.fromPlayers-eV.reached-(VV.fro … [truncated]
```

#### 1456. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15841` → after: `L15841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15841) · [Before (L15841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15841)

```diff
-             nM.from.split(" / ").slice(0, -1).join(" / ")
+             QV.from.split(" / ").slice(0, -1).join(" / ")
```

#### 1457. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15843)

```diff
-             MM.type
+             VV.type
```

#### 1458. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15845` → after: `L15845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15845) · [Before (L15845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15845)

```diff
-           `,OM=null!==(aM=jM.get(iM))&&void 0!==aM?aM:{steps:[],firstPlayers:0,lastFrom:nM.from,lastNumber:-1/0};OM.steps.push({from:AC(nM.from),to:AC(nM.to),fromPlayers:nM.fromPlayers,reached:nM.players,isEnd:!1}),OM.firstPlayers=Math.max(OM.firstPlayers,nM.fromPlayers),rM.to>OM … [truncated]
+           `,JV=null!==(yV=UV.get(xV))&&void 0!==yV?yV:{steps:[],firstPlayers:0,lastFrom:QV.from,lastNumber:-1/0};JV.steps.push({from:hT(QV.from),to:hT(QV.to),fromPlayers:QV.fromPlayers,reached:QV.players,isEnd:!1}),JV.firstPlayers=Math.max(JV.firstPlayers,QV.fromPlayers),eV.to>JV … [truncated]
```

#### 1459. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15847` → after: `L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15847) · [Before (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15847)

```diff
-             rM.type
+             eV.type
```

#### 1460. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15850` → after: `L15850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15850) · [Before (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15850)

```diff
-             rM.value
+             eV.value
```

#### 1461. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15852-L15853` → after: `L15852-L15853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15852-L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15852-L15853) · [Before (L15852-L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15852-L15853)

```diff
-           `)})),iM=void 0===MM?nM.steps:[...nM.steps,{from:AC(MM.from),to:AC(MM.to),fromPlayers:MM.fromPlayers,reached:MM.players,isEnd:!0}];iM.length>=sC&&nM.firstPlayers>=rM&&(null===PM||nM.firstPlayers>PM.firstPlayers)&&(PM={steps:iM,firstPlayers:nM.firstPlayers})}return PM}(M … [truncated]
-             rM.toLocaleString("en-US")
+           `)})),xV=void 0===VV?QV.steps:[...QV.steps,{from:hT(VV.from),to:hT(VV.to),fromPlayers:VV.fromPlayers,reached:VV.players,isEnd:!0}];xV.length>=RT&&QV.firstPlayers>=eV&&(null===pV||QV.firstPlayers>pV.firstPlayers)&&(pV={steps:xV,firstPlayers:QV.firstPlayers})}return pV}(V … [truncated]
+             eV.toLocaleString("en-US")
```

#### 1462. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15855` → after: `L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15855) · [Before (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15855)

```diff
-             rM
+             eV
```

#### 1463. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15858` → after: `L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15858) · [Before (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15858)

```diff
-             iM(MM.fromPlayers)
+             xV(VV.fromPlayers)
```

#### 1464. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15861-L15862` → after: `L15861-L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15861-L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15861-L15862) · [Before (L15861-L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15861-L15862)

```diff
-             iM(MM.reached)
-           }( ? ![\\d] | [, .]\\ d)`);return(0,oj.e)(rM,OM,(0,oj.g)("\\d,.")).length>0}(MM,iM))).slice(0,"young"===OM?0:Cd(OM)?YC:fC)}function VC(MM,rM,iM,OM){const SM=Cd(iM),jM=rM[0]===MM.steps[0],aM=OM(jM?"Hardest steps":"Next hardest steps"),PM="week"===MM.since?OM("past week") … [truncated]
+             xV(VV.reached)
+           }( ? ![\\d] | [, .]\\ d)`);return(0,iU.h)(eV,JV,(0,iU.l)("\\d,.")).length>0}(VV,xV))).slice(0,"young"===JV?0:tE(JV)?oT:aT)}function IT(VV,eV,xV,JV){const YV=tE(xV),UV=eV[0]===VV.steps[0],yV=JV(UV?"Hardest steps":"Next hardest steps"),pV="week"===VV.since?JV("past week") … [truncated]
```

#### 1465. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15864` → after: `L15864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15864) · [Before (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15864)

```diff
-             aM
+             yV
```

#### 1466. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15866` → after: `L15866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15866) · [Before (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15866)

```diff
-             PM
+             pV
```

#### 1467. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15869` → after: `L15869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15869) · [Before (L15869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15869)

```diff
-             OM("get to")
+             JV("get to")
```

#### 1468. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15872` → after: `L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15872) · [Before (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15872)

```diff
-             rM.to
+             eV.to
```

#### 1469. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15876` → after: `L15876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15876) · [Before (L15876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15876)

```diff
-             MM.isFew ? `${(0,Zj.p)(jM)} ${OM("of the")} ${(0,Zj.p)(rM.fromPlayers)}` : `${aM=jM,PM=rM.fromPlayers,String(aM>0?Math.max(1,Math.round(aM/PM*100)):0)} ${OM("in 100")}`
+             VV.isFew ? `${(0,DU.m)(UV)} ${JV("of the")} ${(0,DU.m)(eV.fromPlayers)}` : `${yV=UV,pV=eV.fromPlayers,String(yV>0?Math.max(1,Math.round(yV/pV*100)):0)} ${JV("in 100")}`
```

#### 1470. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15879` → after: `L15879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15879) · [Before (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15879)

```diff
-             OM("players who get to")
+             JV("players who get to")
```

#### 1471. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15882` → after: `L15882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15882) · [Before (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15882)

```diff
-             rM.from
+             eV.from
```

#### 1472. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15885` → after: `L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15885) · [Before (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15885)

```diff
-             OM("don't")
+             JV("don't")
```

#### 1473. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15888` → after: `L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15888) · [Before (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15888)

```diff
-             SM
+             YV
```

#### 1474. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15890` → after: `L15890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15890) · [Before (L15890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15890)

```diff
-           `,nM]}}var aM,PM;const QM=MM.isFew?(0,Zj.p)(jM):`
+           `,QV]}}var yV,pV;const nV=VV.isFew?(0,DU.m)(UV):`
```

#### 1475. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15892` → after: `L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15892) · [Before (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15892)

```diff
-             Math.round(jM / rM.fromPlayers * 100)
+             Math.round(UV / eV.fromPlayers * 100)
```

#### 1476. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15895` → after: `L15895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15895) · [Before (L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15895)

```diff
-             (0, Zj.p)(rM.fromPlayers)
+             (0, DU.m)(eV.fromPlayers)
```

#### 1477. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15898` → after: `L15898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15898) · [Before (L15898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15898)

```diff
-             (0, Zj.p)(rM.reached)
+             (0, DU.m)(eV.reached)
```

#### 1478. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15901)

```diff
-             OM("players")
+             JV("players")
```

#### 1479. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15903` → after: `L15903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15903) · [Before (L15903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15903)

```diff
-               QM
+               nV
```

#### 1480. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15906-L15907` → after: `L15906-L15907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15906-L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15906-L15907) · [Before (L15906-L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15906-L15907)

```diff
-               OM("get no further")
-             }) `,nM]}}))}}const cC=10,Me=.25,re=.9,ie=20,Oe=.15,Se=5,je=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,ae=3,Pe=3,ne=2,Qe=5,ze=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
+               JV("get no further")
+             }) `,QV]}}))}}const dT=10,OT=.25,VP=.9,eP=20,xP=.15,JP=5,YP=/\b(?:checkpoint|wave|island|zone|level|stage|round|floor|room|chapter|world|step|part)s?\b/i,UP=3,yP=3,pP=2,QP=5,nP=new Set(["player","players","other","start","started","middle","minutes","seconds","count", … [truncated]
```

#### 1481. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15909` → after: `L15909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15909) · [Before (L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15909)

```diff
-             MM.eventType
+             VV.eventType
```

#### 1482. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15912` → after: `L15912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15912) · [Before (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15912)

```diff
-             iM
+             xV
```

#### 1483. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15914` → after: `L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15914) · [Before (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15914)

```diff
-           `))})))return null;const rM=Object.fromEntries(MM.values.map((MM=>{let{value:rM,players:iM}=MM;return[rM,iM]}))),iM=Dh({[MM.gameCategory]:{[MM.eventType]:rM}},Se)[0];if(void 0===iM)return null;const OM=iM.steps.filter((MM=>MM.from.players>=Se&&1-MM.share>Oe)).sort(((MM, … [truncated]
+           `))})))return null;const eV=Object.fromEntries(VV.values.map((VV=>{let{value:eV,players:xV}=VV;return[eV,xV]}))),xV=gk({[VV.gameCategory]:{[VV.eventType]:eV}},JP)[0];if(void 0===xV)return null;const JV=xV.steps.filter((VV=>VV.from.players>=JP&&1-VV.share>xP)).sort(((VV, … [truncated]
```

#### 1484. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15916` → after: `L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15916) · [Before (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15916)

```diff
-             JM
+             bV
```

#### 1485. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15918` → after: `L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15918) · [Before (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15918)

```diff
-             dM
+             EV
```

#### 1486. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15920` → after: `L15920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15920) · [Before (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15920)

```diff
-           `);var JM,dM;const yM="numbers"===zM.kind?"eventValues":"spot"===zM.kind?"heatmap":"playersPerEvent";return[{name:hM,eventType:rM.eventType,players:PM,names:He(rM.eventType,rM.values.map((MM=>{let{value:rM}=MM;return rM}))),valueKeys:rM.values.flatMap((MM=>{let{value:rM … [truncated]
+           `);var bV,EV;const BV="numbers"===wV.kind?"eventValues":"spot"===wV.kind?"heatmap":"playersPerEvent";return[{name:kV,eventType:eV.eventType,players:pV,names:vP(eV.eventType,eV.values.map((VV=>{let{value:eV}=VV;return eV}))),valueKeys:eV.values.flatMap((VV=>{let{value:eV … [truncated]
```

#### 1487. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15922` → after: `L15922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15922) · [Before (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15922)

```diff
-             (0, Zj.M)(rM)
+             (0, DU.K)(eV)
```

#### 1488. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15924` → after: `L15924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15924) · [Before (L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15924)

```diff
-           `;return MM.names.some((MM=>{const rM=(0,Zj.M)(MM);return""!==rM&&(iM.includes(`
+           `;return VV.names.some((VV=>{const eV=(0,DU.K)(VV);return""!==eV&&(xV.includes(`
```

#### 1489. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15926` → after: `L15926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15926) · [Before (L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15926)

```diff
-             rM
+             eV
```

#### 1490. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15930` → after: `L15930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15930) · [Before (L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15930)

```diff
-             rM
+             eV
```

#### 1491. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15934` → after: `L15934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15934) · [Before (L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15934)

```diff
-             rM
+             eV
```

#### 1492. `bundles/bloxd.io/chunks/js/118.js` (Changed code · before: `L15936` → after: `L15936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29R15936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-19660abfe2b7541efd5de050e4a7cb3af4dfccb740cd11aad4f156092ec8fd29) · [After (L15936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/118.js#L15936) · [Before (L15936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/118.js#L15936)

```diff
-           es `))}))}function ye(MM,rM){const iM=MM.valueKeys.length<=rM.valueKeys.length?MM:rM,OM=new Set(iM===MM?rM.valueKeys:MM.valueKeys),SM=iM.valueKeys.filter((MM=>OM.has(MM))).length;return SM>0&&2*SM>=iM.valueKeys.length}function le(MM,rM,iM){const OM="young"===rM,SM={stat … [truncated]
+           es `))}))}function EP(VV,eV){const xV=VV.valueKeys.length<=eV.valueKeys.length?VV:eV,JV=new Set(xV===VV?eV.valueKeys:VV.valueKeys),YV=xV.valueKeys.filter((VV=>JV.has(VV))).length;return YV>0&&2*YV>=xV.valueKeys.length}function BP(VV,eV,xV){const JV="young"===eV,YV={stat … [truncated]
```
