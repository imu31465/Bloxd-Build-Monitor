# Changed — Bundle Modifications Report (Part 033 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `33 / 69` (**258** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/92.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/92.js` (464 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc)

#### 220. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5462-L5465` → after: `L6536-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6536-L6538) · [Before (L5462-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5462-L5465)

```diff
-       clearTimers() {
-         var CC;
-         for (const zC of [this.restoreTimer, this.giveUpTimer]) null !== zC && clearTimeout(zC);
-         this.restoreTimer = null, this.giveUpTimer = null, null === (CC = this.cancelAdWait) || void 0 === CC || CC.call(this), this.cancelAdWait = null
+       recent(pp, ip) {
+         var cp;
+         return (null !== (cp = this.calls.get(pp)) && void 0 !== cp ? cp : []).filter((pp => ip - pp < UI))
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5467-L5469` → after: `L6540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6540) · [Before (L5467-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5467-L5469)

```diff
-     }
-     const nf = "The game stopped working, so reload the page to play.";
-     let ff = !1;
+     };
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5471-L5472` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6542-L6543) · [Before (L5471-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5471-L5472)

```diff
-     function of(CC) {
-       ff || (ff = !0, (0, xn.reportClientError)("wasm_physics", CC), setTimeout(qf, 0))
+     function vI(pp) {
+       return pp > 36e5
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5475-L5488` → after: `L6546-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6546-L6549) · [Before (L5475-L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5475-L5488)

```diff
-     function qf() {
-       var CC;
-       const zC = null === (CC = (0, yC.c)()) || void 0 === CC ? void 0 : CC.client;
-       if (null !== zC && void 0 !== zC && zC.isConnectedToServer()) try {
-         return void zC.leaveGameUnwanted({
-           reason: nf,
-           requiresRefresh: !0,
-           canReconnect: !1,
-           automaticallyReconnect: !1
-         })
-       } catch (ZC) {
-         console.error("Failed to leave the game after wasm physics was lost", ZC)
-       }
-       pC.o.bp("unrecoverableError", nf)
+     function tI(pp, ip) {
+       var cp;
+       const Op = null === (cp = pp.headers.get(ip)) || void 0 === cp ? void 0 : cp.trim();
+       return void 0 !== Op && /^\d+$/.test(Op) ? Number(Op) : null
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5493-L5546` → after: `L6552-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6552-L6555) · [Before (L5493-L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5493-L5546)

```diff
-     function Nf(CC) {
-       return {
-         name: "moveState",
-         order: 30,
-         state: {
-           heading: 0,
-           crouching: !1,
-           speed: 0,
-           jumping: !1,
-           toggleFly: !1,
-           edgeGuard: !1,
-           cameraPitch: 0,
-           meshOffset: null,
-           baseRenderHeading: 0,
-           followingEId: null,
-           ridingVehicleEId: null,
- ... (38 more removed lines; see GitHub link above)
+     function HI(pp) {
+       var ip;
+       const cp = null !== (ip = tI(pp, "retry-after")) && void 0 !== ip ? ip : tI(pp, "ratelimit-reset");
+       return null === cp ? null : 1e3 * cp
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5551-L5574` → after: `L6558-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6558-L6561) · [Before (L5551-L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5551-L5574)

```diff
-     function Sf(CC) {
-       return {
-         name: "inventory",
-         order: 150,
-         state: {
-           selectedItem: null,
-           inventory: null,
-           opWrapper: null,
-           onInventoryUpdate: null,
-           onChestUpdate: null
-         },
-         xR: function(zC, ZC) {
-           if (ZC.inventory || (ZC.inventory = new gf.b(CC, ZC, XC.s)), !ZC.opWrapper) {
-             const {
-               onChestUpdate: zC
-             } = ZC;
- ... (8 more removed lines; see GitHub link above)
+     function dI(pp, ip) {
+       var cp;
+       const Op = null !== (cp = HI(ip)) && void 0 !== cp ? cp : 0;
+       (429 === ip.status || vI(Op) && 0 === tI(ip, "ratelimit-remaining")) && wI.markFull(pp, Date.now(), Op)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5577-L5590` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6564-L6567) · [Before (L5577-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5577-L5590)

```diff
-     function pf(CC) {
-       return {
-         name: "itemState",
-         order: 105,
-         state: {
-           amount: 1,
-           name: null,
-           typeObj: null,
-           creationTime: 0,
-           fz: !1,
-           size: 1
-         },
-         attributes: {}
-       }
+     function eI(pp) {
+       const ip = Date.now(),
+         cp = wI.freeAt(pp, ip) - ip;
+       return cp <= 0 ? null : vI(cp) ? "unavailable" : "busy"
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5598-L5600` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6570-L6571) · [Before (L5598-L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5598-L5600)

```diff
-     function Jf(CC) {
-       const zC = xf.get(CC);
-       return zC ? zC() : null
+     function uI(pp, ip) {
+       return `${function(pp){var ip;if("string"===typeof pp)return pp;if(429!==pp.status)return`http-${pp.status}`;if(vI(null!==(ip=HI(pp))&&void 0!==ip?ip:0))return"yearly-limit";const cp=tI(pp,"retry-after");return null===cp?"busy":`busy-ra${cp}`}(ip)}__${pp.replace(/[^A-Za-z0- … [truncated]
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5602-L5604` → after: `L6573-L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6573-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6573-L6604) · [Before (L5602-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5602-L5604)

```diff
-     const If = [{
-       queue: "opaque",
-       field: "_opaqueSubMeshes"
+     const jI = new class {
+         constructor(pp) {
+           this.loadReporter = pp, this.reportedCodes = new Set
+         }
+         Yy(pp, ip) {
+           const cp = uI(pp, ip);
+           "undefined" === typeof window || this.reportedCodes.has(cp) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(cp), this.loadReporter().then((ip => {
+             let {
+               reportCappedWasmFailure: Op
+             } = ip;
+             Op("ai_helper_failed", `World Code AI: ${pp} failed`, cp)
+           })).catch((pp => {
+             console.error("World Code AI: couldn't report a failure", pp)
+           })))
+         }
+       }((() => cp.e(213).then((() => cp(36469))))),
+ ... (16 more added lines; see GitHub link above)
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5606-L5607` → after: `L6606-L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6606-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6606-L6608) · [Before (L5606-L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5606-L5607)

```diff
-       queue: "alphaTest",
-       field: "_alphaTestSubMeshes"
+       name: "gpt-oss-120b",
+       temperature: 1,
+       reasoningEffort: "medium"
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5609-L5610` → after: `L6610-L6613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6610-L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6610-L6613) · [Before (L5609-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5609-L5610)

```diff
-       queue: "transparent",
-       field: "_transparentSubMeshes"
+       name: "Qwen3.5-397B-A17B",
+       temperature: .6,
+       nativeTools: !0,
+       callFormat: "qwenXml"
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5612-L5613` → after: `L6615-L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6615-L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6615-L6617) · [Before (L5612-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5612-L5613)

```diff
-       queue: "depthOnly",
-       field: "_depthOnlySubMeshes"
+       name: "gpt-oss-20b",
+       temperature: 1,
+       reasoningEffort: "high"
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5616-L5623` → after: `L6626-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6626-L6627) · [Before (L5616-L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5616-L5623)

```diff
-     function vf(CC, zC) {
-       var ZC;
-       const QC = null === (ZC = CC._renderingManager) || void 0 === ZC ? void 0 : ZC._renderingGroups;
-       if (QC)
-         for (let wC = -1; wC < QC.length; wC++) {
-           const CC = QC[wC];
-           CC && zC(CC, wC)
-         }
+     function CI(pp) {
+       return [...qI, MI].find((ip => ip.name === pp))
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5626-L5660` → after: `L6630-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6630-L6632) · [Before (L5626-L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5626-L5660)

```diff
-     function ef(CC, zC, ZC) {
-       const QC = {
-         opaque: 0,
-         alphaTest: 0,
-         transparent: 0,
-         depthOnly: 0,
-         total: 0,
-         byGroup: {}
-       };
-       vf(CC, ((CC, zC) => {
-         const ZC = {
-           opaque: 0,
-           alphaTest: 0,
-           transparent: 0,
-           depthOnly: 0,
-           total: 0
- ... (19 more removed lines; see GitHub link above)
+     function EI(pp) {
+       var ip, cp;
+       return null !== (ip = null === (cp = CI(pp)) || void 0 === cp ? void 0 : cp.callFormat) && void 0 !== ip ? ip : "simple"
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5663-L5745` → after: `L6635-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6635-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6635-L6639) · [Before (L5663-L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5663-L5745)

```diff
-     function hf(CC, zC, ZC, QC) {
-       const wC = ef(CC, ZC, QC),
-         bC = new Map,
-         nC = {
-           terrain: {
-             draws: 0,
-             instances: 0
-           },
-           objectBlocks: {
-             draws: 0,
-             instances: 0
-           },
-           entityParts: {
-             draws: 0,
-             instances: 0
-           },
- ... (67 more removed lines; see GitHub link above)
+     function XI(pp) {
+       var ip;
+       return {
+         format: null !== (ip = pp.callFormat) && void 0 !== ip ? ip : "simple",
+         nativeTools: !0 === pp.nativeTools
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5750-L5751` → after: `L6643-L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6643-L6644) · [Before (L5750-L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5750-L5751)

```diff
-     function Yf(CC) {
-       return (0, jn.h)(CC.Vg).backendName
+     function lI(pp, ip) {
+       return "function" === typeof pp ? pp(ip) : pp
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5753-L5772` → after: `L6646-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6646-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6646-L6652) · [Before (L5753-L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5753-L5772)

```diff
-     class df {
-       constructor() {
-         this.sum = 0, this.min = Number.POSITIVE_INFINITY, this.max = 0, this.count = 0
-       }
-       add(CC) {
-         this.sum += CC, this.count++, CC < this.min && (this.min = CC), CC > this.max && (this.max = CC)
-       }
-       hasSamples() {
-         return this.count > 0
-       }
-       summarise() {
-         return 0 === this.count ? {
-           mean: 0,
-           min: 0,
-           max: 0
-         } : {
- ... (4 more removed lines; see GitHub link above)
+     const QI = "TOO_COMPLEX",
+       JI = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${QI} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       BI = 24e4,
+       NI = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class TI extends Error {
+       constructor(pp) {
+         super(`World Code AI ${pp}`), this.reason = pp
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5776-L5778` → after: `L6656-L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6656-L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6656-L6662) · [Before (L5776-L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5776-L5778)

```diff
-     function mf(CC) {
-       var zC, ZC;
-       return null !== (zC = null === (ZC = CC.Vg.CS) || void 0 === ZC ? void 0 : ZC.b_) && void 0 !== zC ? zC : null
+     function fI(pp, ip) {
+       var cp, Op, op, Ip, Sp;
+       const xp = pp[null !== (cp = ip.index) && void 0 !== cp ? cp : 0] ??= {
+         name: "",
+         args: ""
+       };
+       xp.name += null !== (Op = null === (op = ip.function) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : "", xp.args += null !== (Ip = null === (Sp = ip.function) || void 0 === Sp ? void 0 : Sp.arguments) && void 0 !== Ip ? Ip : ""
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5781-L5783` → after: `L6665-L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6665-L6666) · [Before (L5781-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5781-L5783)

```diff
-     function Hf(CC) {
-       var zC, ZC;
-       return null !== (zC = null === (ZC = CC.Vg.CS) || void 0 === ZC ? void 0 : ZC.modelMeshes) && void 0 !== zC ? zC : null
+     function bI(pp) {
+       return "mcp" === pp ? "simple" : pp
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5786-L5788` → after: `L6669-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6669-L6671) · [Before (L5786-L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5786-L5788)

```diff
-     function Ef(CC) {
-       var zC, ZC, QC, wC;
-       return CC.Vg.Km().getActiveMeshes().length + (null !== (zC = null === (ZC = mf(CC)) || void 0 === ZC ? void 0 : ZC.drawStats().selected) && void 0 !== zC ? zC : 0) + (null !== (QC = null === (wC = Hf(CC)) || void 0 === wC ? void 0 : wC.selectedCount) && void 0 !== QC ? QC : … [truncated]
+     function hI(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return aI(pp, ip, cp, bI(Op), op).answer
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5791-L5800` → after: `L6674-L6720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6674-L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6674-L6720) · [Before (L5791-L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5791-L5800)

```diff
-     function lf(CC) {
-       const zC = CC.Vg.Km(),
-         ZC = Jf(CC.Vg.engine),
-         QC = ef(zC, mf(CC), Hf(CC));
-       return {
-         backend: Yf(CC),
-         dispatched: QC,
-         activeMeshes: Ef(CC),
-         drawn: ZC,
-         residual: ZC ? ZC.lastFrameDraws - QC.total : null
+     function aI(pp, ip, cp, Op, op) {
+       const Ip = cp.flatMap((pp => {
+         const ip = Uc(pp.name, pp.args);
+         return null === ip ? [] : [Yo(Sc(Op), ip.name, ip.args)]
+       }));
+       let Sp = !1;
+       return 0 !== Ip.length || 0 !== vc(pp, Op).length || pp.includes("```") || (Ip.push(...op ? [] : function(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const Op = new Map;
+         for (const xp of wc(pp, ip)) {
+           const pp = Object.values(xp.args).some((pp => void 0 !== pp && cp.includes(pp.trim())));
+           var op, Ip, Sp;
+           "export_game" === xp.name || "switch_to_world_code" === xp.name || Ri(xp.name) || pp || Op.set(`${xp.name} ${null!==(op=xp.args.path)&&void 0!==op?op:""} ${null!==(Ip=xp.args.search)&&void 0!==Ip?Ip:""} ${null!==(Sp=xp.args.name)&&void 0!==Sp?Sp:""}`, xp.source)
+         }
+         return [...new Set(Op.values())]
+       }(ip, Op, uo)), Sp = Ip.length > 0), {
+ ... (31 more added lines; see GitHub link above)
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5804-L5823` → after: `L6724-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6724-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6724-L6730) · [Before (L5804-L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5804-L5823)

```diff
-     function Xf(CC) {
-       const zC = function() {
-         var CC;
-         return null !== (CC = (0, vn.k)(Kf)) && void 0 !== CC && CC
-       }();
-       zC && !CC.Vg.CS && function(CC) {
-         const zC = xf.get(CC);
-         if (zC) return zC;
-         const ZC = {
-             draws: 0,
-             lastFrameDraws: 0,
-             instancedDraws: 0,
-             instances: 0
-           },
-           QC = CC,
-           wC = QC.drawElementsType.bind(CC),
- ... (4 more removed lines; see GitHub link above)
+     function FI(pp) {
+       return pp.map((pp => ({
+         type: "function",
+         function: {
+           name: pp.name,
+           description: pp.description,
+           parameters: pp.inputSchema
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5825-L5945` → after: `L6732-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6732-L6733) · [Before (L5825-L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5825-L5945)

```diff
-         QC.drawElementsType = function(CC, zC, ZC, QC) {
-           nC(QC), wC(CC, zC, ZC, QC)
-         }, QC.drawArraysType = function(CC, zC, ZC, QC) {
-           nC(QC), bC(CC, zC, ZC, QC)
-         };
-         let fC = 0;
-         CC.onEndFrameObservable.add((() => {
-           ZC.lastFrameDraws = ZC.draws - fC, fC = ZC.draws
-         }));
-         const oC = () => ({
-           ...ZC
-         });
-         xf.set(CC, oC)
-       }(CC.Vg.engine);
-       const ZC = () => lf(CC);
-       ZC.why = function() {
- ... (105 more removed lines; see GitHub link above)
+       })))
+     }
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5947-L5957` → after: `L6735-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6735-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6735-L6789) · [Before (L5947-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5947-L5957)

```diff
-     function Of(CC) {
-       const zC = CC.Vg.Km();
-       zC.onBeforeCameraRenderObservable.add((() => {
-         ! function(CC, zC) {
-           const {
-             JR: ZC
-           } = CC, QC = ZC.YH(ZC.names.Xx), wC = ZC.YH("lineToEntity");
-           for (const bC of QC) {
-             if (!(0, tf.chainSkipsSmoothing)(CC, bC.og)) continue;
-             const QC = ZC.fzC(bC.mH);
-             null === (null === QC || void 0 === QC ? void 0 : QC.WH) && (0, tf.meshOnScreen)(QC.mesh, zC) && (0, tf.catchUpSkippedSmoothing)(CC, bC.og)
+     function gI(pp) {
+       return "object" === typeof pp
+     }
+     async function GI(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const Ip = eI(pp.name);
+       if (null !== Ip) return Ip;
+       wI.record(pp.name);
+       const Sp = await fetch(go, {
+         method: "POST",
+         headers: {
+           "Content-Type": "application/json"
+         },
+         body: JSON.stringify({
+           model: pp.name,
+           messages: ip,
+ ... (39 more added lines; see GitHub link above)
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5959-L5961` → after: `L6791-L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6791-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6791-L6805) · [Before (L5959-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5959-L5961)

```diff
-           for (const bC of wC)((0, tf.chainSkipsSmoothing)(CC, bC.mH) || (0, tf.chainSkipsSmoothing)(CC, bC._targetEId)) && (0, tf.meshOnScreen)(bC._line, zC) && ((0, tf.catchUpSkippedSmoothing)(CC, bC.mH), (0, tf.catchUpSkippedSmoothing)(CC, bC._targetEId), (0, Bf.updateLineTran … [truncated]
-         }(CC, zC.frustumPlanes)
-       }), void 0, !0)
+           const yp = pp.nativeTools && Pp ? null !== (xp = RI(Lp)) && void 0 !== xp ? xp : "" : Lp;
+           null === Op || void 0 === Op || Op({
+             model: pp.name,
+             reasoningChars: Yp.length,
+             answer: yp,
+             isCalling: Dp.length > 0
+           })
+         }), (pp => {
+           Wp = pp
+         }))
+       } finally {
+         PI(Wp, ip, Lp + Yp, 20 * Dp.length)
+       }
+       const yp = rI(pp, Lp, Yp, Dp, Ap, Pp);
+       return null === yp ? (jI.Yy(pp.name, "empty"), "failed") : yp
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5969-L5975` → after: `L6808-L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6808-L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6808-L6838) · [Before (L5969-L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5969-L5975)

```diff
-     function Qo(CC) {
-       var zC;
-       CC.Vg.dzC = CC => {
-         const zC = CC.isFrozen;
-         zC && (0, JC.S)(CC), (0, aC.c)(CC), zC && (0, JC.q)(CC)
-       }, Object.assign(CC, {
-         pR: zo.e.values
+     function rI(pp, ip, cp, Op, op) {
+       var Ip;
+       let Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         xp = ip;
+       var Lp;
+       pp.nativeTools && Sp && (xp = null !== (Lp = RI(xp)) && void 0 !== Lp ? Lp : xp);
+       xp = xp.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const Yp = aI(xp, cp, Op, null !== (Ip = pp.callFormat) && void 0 !== Ip ? Ip : "simple", op);
+       return "" === Yp.answer ? null : {
+         model: pp.name,
+         answer: Yp.answer,
+         reasoning: cp,
+         isCutShort: op,
+         hasCallsFromReasoning: Yp.hasCallsFromReasoning
+       }
+     }
+ ... (15 more added lines; see GitHub link above)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L5977-L6022` → after: `L6840-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6840-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6840-L6877) · [Before (L5977-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L5977-L6022)

```diff
-       let QC = CC.yp;
-       zo.e.subscribe("blockReach", (() => {
-           const zC = CC.bloxd.getBlockReach(CC.qE);
-           CC.yp === QC && (CC.yp = zC), QC = zC
-         })),
-         function(CC) {
-           for (const ZC of [Ff.e, Nf, Sf, pf]) {
-             const zC = CC.JR.HzC(ZC(CC));
-             CC.JR.names[zC] = zC
-           }
-           Uf || (Uf = !0, setInterval((() => {
-             var CC;
-             const zC = null !== (CC = pC.o.QG.playerKilled > 1 ? 1 : void 0) && void 0 !== CC ? CC : 5;
-             (0, cC.sendColyMessage)(Lf.lg, {
-               Wn: zC
-             }, !0)
- ... (30 more removed lines; see GitHub link above)
+       const xp = pp.map((() => {})),
+         Lp = pp.map((() => {}));
+       let Yp = null;
+       const Dp = pp => void 0 !== pp && ("" !== ZI(pp.answer).trim() || !0 === pp.isCalling);
+       let Ap = () => {};
+       pp.forEach(((pp, cp) => {
+         const Sp = (0, tp.b)(BI, Ip[cp].signal);
+         GI(pp, lI(ip, pp), Sp.signal, (pp => {
+           Lp[cp] = pp, null === Yp && Dp(pp) && (Yp = cp), Yp === cp && (null === Op || void 0 === Op || Op(pp))
+         }), op).catch((ip => {
+           if (Ip[cp].signal.aborted) return "failed";
+           const Op = Sp.signal.aborted;
+           return console.warn(`World Code AI: ${pp.name} ${Op?"took longer than 240 s":"couldn't be reached"}`, ip), jI.Yy(pp.name, Op ? "timeout" : "network"), Op ? "timeout" : "failed"
+         })).then((pp => {
+           Sp.clear(), xp[cp] = pp, Yp !== cp || zI(pp) || (Yp = null), Ap()
+         }))
+ ... (22 more added lines; see GitHub link above)
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6024-L6062` → after: `L6879-L6890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6879-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6879-L6890) · [Before (L6024-L6062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6024-L6062)

```diff
-         }(CC), Of(CC),
-         function(CC) {
-           CC.SCC = zC => 0 !== zC && !CC.qM.Z4(zC), (0, tz.f)(CC.SCC);
-           const {
-             JR: zC
-           } = CC;
-           zC.yCC = zC.NzC("movement"), zC.MzC = zC.NzC("moveState");
-           const ZC = zC.NzC("inventory");
-           zC.gzC = ZC, zC.SzC = CC => {
-             var zC;
-             return null === (zC = ZC(CC)) || void 0 === zC ? void 0 : zC.inventory
-           }, zC.pzC = CC => ZC(CC).opWrapper, zC.PzC = zC.GzC("inventory")
-         }(CC), CC.xCC = (zC, ZC, QC, wC) => CC.SCC(zC) && (CC.qM.Sy(zC) || CC.fN.KCC(ZC, QC, wC)),
-         function(CC) {
-           const zC = CC.container.canvas,
-             {
- ... (23 more removed lines; see GitHub link above)
+         }
+       };
+       try {
+         for (;;) {
+           if (null !== cp && void 0 !== cp && cp.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const pp = Pp();
+           if (pp) {
+             const ip = xp.filter((pp => "string" === typeof pp));
+             return {
+               reply: pp.reply,
+               failures: ip
+             }
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6064-L6069` → after: `L6892-L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6892-L6893) · [Before (L6064-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6064-L6069)

```diff
-           Zo.d.onRelease((() => {
-             CC.Vg.resize()
-           })), (0, Af.m)((() => {
-             CC.Vg.resize()
-           })), bC(), pC.o.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
-             bC()
+           await new Promise((pp => {
+             Ap = pp
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6106-L6146` → after: `L6896-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6896-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6896-L6937) · [Before (L6106-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6106-L6146)

```diff
-         return wC.voxelVersion !== QC.Ug && (wC.voxelVersion = QC.Ug, wC.token = ++this.lastToken), wC.token
-       }
-       scan(CC, zC, ZC, QC, wC, bC, nC, fC) {
-         const oC = gC.f.Ig,
-           qC = this.fN.PS;
-         let FC = 0;
-         for (let WC = Math.floor(zC / oC); WC * oC < wC; WC++) {
-           const NC = WC * oC,
-             MC = Math.min(wC - NC, oC);
-           for (let wC = Math.floor(CC / oC); wC * oC < QC; wC++) {
-             const gC = wC * oC,
-               SC = Math.min(QC - gC, oC);
-             for (let QC = Math.floor(ZC / oC); QC * oC < bC; QC++) {
-               const pC = qC.GS(wC, WC, QC);
-               if (!pC) continue;
-               const PC = QC * oC,
- ... (25 more removed lines; see GitHub link above)
+       } finally {
+         null === cp || void 0 === cp || cp.removeEventListener("abort", Sp), Sp()
+       }
+     }
+ 
+     function KI() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const ip = wI.firstFreeAt(qI.map((pp => pp.name)), pp);
+       return vI(ip - pp) ? pp : ip
+     }
+     async function VI(pp) {
+       var ip;
+       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const Op = Date.now(),
+         op = null !== (ip = cp.models) && void 0 !== ip ? ip : qI,
+         Ip = void 0 === cp.models ? function(pp, ip) {
+ ... (26 more added lines; see GitHub link above)
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6149` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6940) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6149)

```diff
-         return FC
+         Sp.push(...ip.failures)
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6152-L6199` → after: `L6945-L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6945-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6945-L6961) · [Before (L6152-L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6152-L6199)

```diff
-     var Go = ZC(36502),
-       Ro = ZC(34107);
-     class Ao {
-       constructor(CC, zC, ZC, QC, wC) {
-         this.MN = CC, this.bloxd = zC, this.userContext = ZC, this.output = QC, this.sounds = wC, this.chunks = void 0, this.actionRay = {
-           origin: [0, 0, 0],
-           direction: [0, 0, 1]
-         }, this.chunks = new Po(CC.fN)
-       }
-       disposeGameOutput() {
-         this.output.disposeAll(), this.setCrosshairShown(null)
-       }
-       yG(CC) {
-         var zC;
-         const ZC = null === (zC = this.MN.JR.lL(this.toLocalId(CC))) || void 0 === zC ? void 0 : zC.position;
-         if (!ZC) throw new Error(`Entity ${CC} has no replicated position`);
- ... (32 more removed lines; see GitHub link above)
+     const pS = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+ 
+     function iS(pp) {
+       const ip = pp.trim();
+       return ip.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(ip) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(ip) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     }
+     async function cS(pp, ip, cp, Op, op, Ip) {
+       var Sp;
+       let xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BI;
+       if (! function(pp, ip) {
+           return !pp.isCutShort && iS(pp.answer) && !pp.answer.includes("?") && 0 === vc(pp.answer, ip).length
+         }(cp, null !== (Sp = pp.callFormat) && void 0 !== Sp ? Sp : "simple")) return cp;
+       const Lp = [...ip, {
+           role: "assistant",
+           content: cp.answer
+         }, {
+ ... (1 more added lines; see GitHub link above)
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6201-L6222` → after: `L6963-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6963-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6963-L6972) · [Before (L6201-L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6201-L6222)

```diff
-         }, !0)
-       }
-       getEntityType(CC) {
-         return this.bloxd.getEntityType(CC)
-       }
-       getEntityName(CC) {
-         return this.bloxd.getEntityName(CC)
-       }
-       hasEffect(CC, zC) {
-         return this.bloxd.client.hasEffect(CC, zC)
-       }
-       getMetaInfo(CC) {
-         return this.bloxd.getMetaInfo(CC)
-       }
-       getPlayerDbId(CC) {
-         return this.assertLocalPlayer(CC, "get a DB ID"), this.userContext.whamm
- ... (6 more removed lines; see GitHub link above)
+         }],
+         Yp = (0, tp.b)(xp, Op);
+       try {
+         const ip = await GI(pp, Lp, Yp.signal, op, Ip);
+         return gI(ip) && "" !== ip.answer.trim() ? ip : cp
+       } catch (Dp) {
+         if (null !== Op && void 0 !== Op && Op.aborted) throw Dp;
+         return jI.Yy(pp.name, Yp.signal.aborted ? "timeout" : "network"), cp
+       } finally {
+         Yp.clear()
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6224-L6225` → after: `L6974-L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6974-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L6974-L6999) · [Before (L6224-L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6224-L6225)

```diff
-       setOtherEntitySetting(CC, zC, ZC, QC) {
-         this.assertLocalPlayer(CC, "set an other-entity setting"), (0, go.d)(zC), (0, go.b)(zC, ZC, QC)
+     }
+ 
+     function OS(pp) {
+       const ip = ZI(pp);
+       return /too_complex/i.test(ip) || /^\W*too[\s_-]*complex\W*$/i.test(ip.trim())
+     }
+ 
+     function oS(pp) {
+       const ip = ZI(pp).trim();
+       return ip.length > 19 && !/^\W*too[\s_-]*complex/i.test(ip)
+     }
+ 
+     function IS(pp) {
+       return pp.map(((pp, ip) => 0 === ip && "system" === pp.role ? {
+         ...pp,
+         content: pp.content + JI
+ ... (10 more added lines; see GitHub link above)
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6227-L6228` → after: `L7001-L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7001-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7001-L7035) · [Before (L6227-L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6227-L6228)

```diff
-       getPositionView(CC) {
-         return this.MN.JR.yG(CC)
+       return cp ? "unchecked" : "ok"
+     }
+     async function xS(pp, ip, cp) {
+       if ("unavailable" === eI(pp)) return "busy";
+       const Op = (0, tp.b)(2e4, cp);
+       wI.record(pp);
+       try {
+         var op, Ip, Sp, xp;
+         const cp = await fetch(go, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: JSON.stringify({
+             model: pp,
+             messages: ip,
+ ... (19 more added lines; see GitHub link above)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6230-L6236` → after: `L7037-L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7037-L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7037-L7049) · [Before (L6230-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6230-L6236)

```diff
-       readDrawnPosition(CC, zC) {
-         var ZC;
-         const QC = null === (ZC = this.MN.JR.lL(this.toLocalId(CC))) || void 0 === ZC ? void 0 : ZC.nB;
-         if (!QC) return !1;
-         const wC = this.MN.YN;
-         for (let bC = 0; bC < 3; bC++) zC[bC] = QC[bC] + wC[bC];
-         return !0
+     }
+     var LS = cp(44);
+     const YS = "aiHelperDataSharing";
+ 
+     function DS() {
+       const pp = LS.h.getItem(YS);
+       return null !== pp && "object" === typeof pp ? pp : {}
+     }
+     const AS = new class {
+       constructor() {
+         this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = pp => (this.listen(), this.listeners.add(pp), () => {
+           this.listeners.delete(pp)
+         })
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6238` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7051) · [Before (L6238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6238)

```diff
-       getDrawnHeading(CC) {
+       get() {
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6240-L6241` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7053) · [Before (L6240-L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6240-L6241)

```diff
-         const QC = this.toLocalId(CC);
-         return this.MN.JR.lL(QC) && null !== (zC = null === (ZC = (0, uf.getCaughtUpMeshRotation)(this.MN, QC)) || void 0 === ZC ? void 0 : ZC.renderRotation[1]) && void 0 !== zC ? zC : null
+         return null === this.player ? null : null !== (pp = null !== (ip = this.unsaved.get(this.player)) && void 0 !== ip ? ip : DS()[this.player]) && void 0 !== pp ? pp : null
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6243-L6249` → after: `L7055-L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7055-L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7055-L7056) · [Before (L6243-L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6243-L6249)

```diff
-       getLocalPlayerMovement() {
-         var CC;
-         const zC = this.MN.JR.yCC(this.MN.qE);
-         return zC ? {
-           onGround: zC.isOnGround(),
-           jumpHeld: !0 === (null === (CC = this.MN.JR.MzC(this.MN.qE)) || void 0 === CC ? void 0 : CC.jumping)
-         } : null
+       getPlayer() {
+         return this.player
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6251-L6253` → after: `L7058-L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7058-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7058-L7067) · [Before (L6251-L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6251-L6253)

```diff
-       XzC(CC) {
-         var zC, ZC;
-         return this.isLocalPlayer(CC) && null !== (zC = null === (ZC = this.MN.JR.gzC(this.MN.qE)) || void 0 === ZC ? void 0 : ZC.selectedItem) && void 0 !== zC ? zC : null
+       async refresh() {
+         this.listen();
+         const pp = await async function() {
+           var pp, ip;
+           const {
+             userContextManager: Op
+           } = await Promise.resolve().then((() => cp(1149)));
+           return null !== (pp = null === (ip = Op.peekCurrentUserContext()) || void 0 === ip ? void 0 : ip.whamm) && void 0 !== pp ? pp : null
+         }().catch((pp => (console.error("AI Helper: couldn't look up the player for sharing chats", pp), null)));
+         return pp !== this.player && (this.player = pp, this.notify()), this.get()
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6255-L6256` → after: `L7069-L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7069-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7069-L7073) · [Before (L6255-L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6255-L6256)

```diff
-       getInventoryItems() {
-         return this.MN.JR.SzC(this.MN.qE).getItems()
+       set(pp) {
+         null !== this.player && (LS.h.setItem(YS, {
+           ...DS(),
+           [this.player]: pp
+         }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, pp), this.notify())
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6258-L6261` → after: `L7075-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7075-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7075-L7078) · [Before (L6258-L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6258-L6261)

```diff
-       getHeldGunInaccuracy() {
-         var CC, zC, ZC;
-         const QC = null === (CC = this.MN.JR.lzC(this.MN.qE)) || void 0 === CC ? void 0 : CC.Hx;
-         return null !== QC && void 0 !== QC && QC.isGun() ? null !== (zC = null === (ZC = QC.inaccuracyCalculator) || void 0 === ZC ? void 0 : ZC.getInaccuracy()) && void 0 !== zC ? zC : 0 : null
+       listen() {
+         this.listening || (this.listening = !0, window.addEventListener("storage", (() => {
+           this.notify()
+         })))
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6263-L6274` → after: `L7080-L7081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7080-L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7080-L7081) · [Before (L6263-L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6263-L6274)

```diff
-       isCrosshairShown() {
-         var CC, zC, ZC;
-         const QC = (0, Go.c)(Hn.b.get("crosshairGameView"), Hn.b.get("crosshairShownOverride"));
-         if (null !== QC) return QC;
-         const wC = null === (CC = this.MN.JR.lzC(this.MN.qE)) || void 0 === CC ? void 0 : CC.Hx,
-           bC = this.bloxd.getClientPredictedOption(this.MN.qE, "gunshotOrigin"),
-           nC = !(null === wC || void 0 === wC || !wC.isGun()),
-           fC = nC || Boolean((null === wC || void 0 === wC || null === (zC = wC.typeObj) || void 0 === zC ? void 0 : zC.holdAsAiming) && !(null !== wC && void 0 !== wC && null !== (ZC = wC.typeObj) && void 0 !== ZC && ZC.hideAimingUI));
-         return (0, Go.g)({
-           gun: nC,
-           aimable: fC
-         }, this.MN.camera.cL > 1, (0, Ro.e)(), bC)
+       notify() {
+         for (const pp of this.listeners) pp()
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6276-L6279` → after: `L7083-L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7083-L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7083-L7123) · [Before (L6276-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6276-L6279)

```diff
-       setCrosshairShown(CC) {
-         Hn.b.set({
-           crosshairShownOverride: CC
-         })
+     };
+     let PS = null,
+       WS = !1;
+     const yS = 4e5,
+       US = 6e4,
+       wS = 12,
+       vS = 9e5;
+ 
+     function tS(pp, ip) {
+       if (pp.length <= ip) return pp;
+       const cp = `\n[... ${pp.length-ip} more characters cut]`;
+       let Op = Math.max(0, ip - cp.length);
+       const op = pp.charCodeAt(Op - 1);
+       return op >= 55296 && op <= 56319 && Op--, pp.slice(0, Op) + cp
+     }
+     var HS = cp(643),
+ ... (25 more added lines; see GitHub link above)
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6281-L6282` → after: `L7125-L7130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7125-L7130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7125-L7130) · [Before (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6281-L6282)

```diff
-       getInventoryFreeSlotCount(CC) {
-         return this.isLocalPlayer(CC) ? this.MN.JR.SzC(this.MN.qE).getFreeSlotCount() : null
+     }
+ 
+     function jS(pp) {
+       return {
+         model: pp.model,
+         text: tS(pp.text, US)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6284-L6285` → after: `L7132-L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7132-L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7132-L7149) · [Before (L6284-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6284-L6285)

```diff
-       getSelectedInventorySlotI(CC) {
-         return this.isLocalPlayer(CC) ? this.MN.JR.SzC(this.MN.qE).getSelectedSlotIndex() : null
+     }
+     class kS {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MS;
+         this.Yy = pp, this.chatId = (0, dS.b)(12), this.open = new Map
+       }
+       requestStarted(pp, ip) {
+         const cp = this.open.get(pp);
+         cp && (clearTimeout(cp.timer), ip || (this.open.delete(pp), this.send(cp.Yy)))
+       }
+       answered(pp, ip, cp) {
+         if ("" === cp.text.trim()) return;
+         const Op = this.open.get(pp);
+         if (Op) return void(Op.Yy.responses.length < wS && Op.Yy.responses.push(jS(cp)));
+         const op = uS(this.chatId, ip, cp);
+         op && this.open.set(pp, {
+ ... (2 more added lines; see GitHub link above)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6287-L6288` → after: `L7151-L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7151-L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7151-L7153) · [Before (L6287-L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6287-L6288)

```diff
-       getItemSlot(CC, zC) {
-         return this.isLocalPlayer(CC) ? this.MN.JR.pzC(this.MN.qE).getItemAtIdx(zC) : null
+       drop(pp) {
+         var ip;
+         clearTimeout(null === (ip = this.open.get(pp)) || void 0 === ip ? void 0 : ip.timer), this.open.delete(pp)
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6290-L6291` → after: `L7155-L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7155-L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7155-L7159) · [Before (L6290-L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6290-L6291)

```diff
-       swapInventorySlots(CC, zC) {
-         return So.d.swapPosClient(this.MN.JR.pzC(this.MN.qE), CC, zC)
+       requestEnded(pp) {
+         const ip = this.open.get(pp);
+         ip && (clearTimeout(ip.timer), ip.timer = setTimeout((() => {
+           this.open.delete(pp), this.send(ip.Yy)
+         }), 2e4))
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6293-L6440` → after: `L7161-L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7161-L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7161-L7164) · [Before (L6293-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6293-L6440)

```diff
-       isPlayerCrouching(CC) {
-         return this.MN.JR.MzC(this.toLocalId(CC)).crouching
-       }
-       getMiningBlock() {
-         var CC;
-         const zC = null === (CC = this.MN.JR.lzC(this.MN.qE)) || void 0 === CC ? void 0 : CC.fistItem;
-         return null !== zC && void 0 !== zC && zC.successfullyBreakingBlockLastTick ? zC.targetedPosition : null
-       }
-       isMining() {
-         var CC, zC;
-         return !0 === (null === (CC = this.MN.JR.lzC(this.MN.qE)) || void 0 === CC || null === (zC = CC.fistItem) || void 0 === zC ? void 0 : zC.attemptingToBreak)
-       }
-       getTargetedBlock() {
-         return this.MN.pCC
-       }
-       getActionRay() {
- ... (132 more removed lines; see GitHub link above)
+       send(pp) {
+         (function(pp) {
+           return (new TextEncoder).encode(JSON.stringify(pp)).length <= vS
+         })(pp) && this.Yy(pp)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6443-L6444` → after: `L7167-L7183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7167-L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7167-L7183) · [Before (L6443-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6443-L6444)

```diff
-     var xo = ZC(38961);
-     const Jo = 256;
+     const mS = [],
+       RS = 5;
+     let qS = !1;
+ 
+     function MS(pp) {
+       (async () => {
+         const ip = await AS.refresh(),
+           cp = AS.getPlayer();
+         "yes" === ip ? await ES([pp]) : null === ip && null !== cp && function(pp, ip) {
+           qS || (qS = !0, AS.subscribe(CS));
+           mS.push({
+             player: pp,
+             Yy: ip
+           }), mS.length > RS && mS.shift()
+         }(cp, pp)
+       })()
+ ... (1 more added lines; see GitHub link above)
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6446-L6483` → after: `L7185-L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7185-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7185-L7201) · [Before (L6446-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6446-L6483)

```diff
-     function Io(CC, zC, ZC) {
-       const QC = function(CC) {
-         const zC = (0, JC.n)(CC, "groundArrowPathTex", {
-             width: Jo,
-             height: Jo,
-             mipmaps: !1,
-             samplingMode: xC.h.nearestNearestMipLinear,
-             hasAlpha: !0,
-             wrap: xC.d.wrap
-           }),
-           ZC = (0, JC.j)(zC),
-           QC = Jo;
-         ZC.clearRect(0, 0, QC, QC), ZC.fillStyle = "white";
-         const wC = 3,
-           bC = QC / wC,
-           nC = .1 * QC,
- ... (22 more removed lines; see GitHub link above)
+     function CS() {
+       const pp = AS.get();
+       if (null === pp) return;
+       const ip = AS.getPlayer(),
+         cp = mS.splice(0).filter((pp => pp.player === ip));
+       "yes" === pp && cp.length > 0 && ES(cp.map((pp => pp.Yy)))
+     }
+     async function ES(pp) {
+       const ip = Promise.resolve().then((() => cp(41726)));
+       for (const cp of pp) try {
+         const {
+           postToGameServer: pp
+         } = await ip;
+         await pp("/ai-helper/turn", cp)
+       } catch (Op) {
+         console.warn("AI Helper: couldn't share a turn", Op)
+ ... (1 more added lines; see GitHub link above)
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6486-L6490` → after: `L7206-L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7206-L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7206-L7243) · [Before (L6486-L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6486-L6490)

```diff
-       width: 1,
-       alpha: .8
-     };
-     let vo = io;
-     const eo = new Set;
+         openrouter: {
+           id: "openrouter",
+           name: "OpenRouter",
+           shortName: "OpenRouter",
+           baseUrl: "https://openrouter.ai/api/v1",
+           keyPage: "https://openrouter.ai/settings/keys"
+         },
+         anthropic: {
+           id: "anthropic",
+           name: "Claude (Anthropic)",
+           shortName: "Claude",
+           baseUrl: "https://api.anthropic.com/v1",
+           keyPage: "https://console.anthropic.com/settings/keys"
+         },
+         openai: {
+           id: "openai",
+ ... (22 more added lines; see GitHub link above)
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6493-L6496` → after: `L7246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7246) · [Before (L6493-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6493-L6496)

```diff
-       vo = null !== CC && void 0 !== CC ? CC : io;
-       for (const zC of eo)(0, DC.e)(zC, {
-         alpha: vo.alpha
-       })
+       return pp.trim().replace(/^[A-Z_]+\s*=\s*/, "").replace(/^["'`]+|["'`]+$/g, "").replace(/^Bearer\s+/i, "").replace(/\s+/g, "")
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6498-L6516` → after: `L7248-L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7248-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7248-L7258) · [Before (L6498-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6498-L6516)

```diff
-     const Ko = .02;
-     class Yo {
-       constructor(CC, zC, ZC) {
-         this.MN = CC, this.buffers = zC, this.positions = void 0, this.uvs = void 0, this.cachedIndices = void 0, this.edgeResult = {
-           pos: new Float32Array(2),
-           axis: "x"
-         }, this.wallClimbResult = new Float32Array(2), this.mesh = null, this.material = null, this.lastVertPairCount = 0, this.uvOffset = 0, this.colour = void 0, this.positions = new Float32Array(6 * ZC), this.uvs = new Float32Array(4 * ZC), this.cachedIndices = new Uint16Array … [truncated]
-       }
-       setColour(CC) {
-         this.colour = CC, this.material && function(CC, zC) {
-           (0, DC.e)(CC, {
-             emissiveColor: (0, xo.c)(zC)
-           })
-         }(this.material, CC)
-       }
-       render(CC, zC) {
- ... (3 more removed lines; see GitHub link above)
+ 
+     function TS(pp) {
+       return pp.startsWith("sk-or-") ? "openrouter" : pp.startsWith("sk-ant-") ? "anthropic" : pp.startsWith("AIza") ? "gemini" : pp.startsWith("sk-") ? "openai" : null
+     }
+ 
+     function fS(pp) {
+       let ip;
+       try {
+         ip = new URL(pp.trim())
+       } catch {
+         return null
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6518-L6520` → after: `L7260-L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7260-L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7260-L7270) · [Before (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6518-L6520)

```diff
-       hide() {
-         var CC;
-         null === (CC = this.mesh) || void 0 === CC || CC.IK(!1)
+       const cp = "localhost" === ip.hostname || "127.0.0.1" === ip.hostname;
+       return "https:" !== ip.protocol && ("http:" !== ip.protocol || !cp) || ip.username || ip.password || ip.search ? null : `${ip.origin}${ip.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+     }
+ 
+     function bS(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       return "custom" === pp && ip ? new URL(ip).host : cp ? QS[pp].shortName : QS[pp].name
+     }
+     class hS extends Error {
+       constructor(pp, ip, cp, Op) {
+         super(`AI key request: ${pp}`), this.problem = pp, this.retryAfterMs = ip, this.status = cp, this.detail = Op
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6522-L6523` → after: `L7272-L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7272-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7272-L7296) · [Before (L6522-L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6522-L6523)

```diff
-       dispose() {
-         this.mesh && (this.mesh.dispose(), this.mesh = null), this.material && (eo.delete(this.material), this.material.dispose(!0, !0), this.material = null)
+     }
+ 
+     function aS(pp, ip) {
+       return ("" === ip ? pp : pp.split(ip).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+     }
+ 
+     function nS(pp, ip) {
+       const cp = "custom" === ip ? "That server" : QS[ip].shortName;
+       switch (pp) {
+         case "badKey":
+           return `${cp} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+         case "busy":
+           return "Too many requests right now. Wait a minute and try again.";
+         case "noModel":
+           return `${cp} can't find that model. Check its name.`;
+         case "unreachable":
+ ... (9 more added lines; see GitHub link above)
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6525-L6548` → after: `L7298-L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7298-L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7298-L7307) · [Before (L6525-L6548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6525-L6548)

```diff
-       buildStripGeometry(CC) {
-         const {
-           sampleX: zC,
-           sampleY: ZC,
-           sampleZ: QC,
-           sampleAirborne: wC,
-           perp: bC,
-           direction: nC
-         } = this.buffers, [fC, oC] = bC, [qC, FC] = nC, WC = this.positions, NC = this.uvs;
-         let MC = 0,
-           gC = 0;
-         MC = this.writeStripVerts(WC, NC, MC, zC[0], ZC[0] + Ko, QC[0], fC, oC, gC);
-         for (let SC = 1; SC < CC; SC++) {
-           const CC = ZC[SC - 1],
-             bC = ZC[SC],
-             nC = bC - CC,
- ... (8 more removed lines; see GitHub link above)
+     }
+ 
+     function FS(pp) {
+       var ip;
+       const cp = pp.at(-1);
+       if (!cp || null !== Uc(cp.name, cp.args) || function(pp) {
+           try {
+             return JSON.parse(pp), !0
+           } catch {
+             return !1
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6550-L6552` → after: `L7309-L7354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7309-L7354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7309-L7354) · [Before (L6550-L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6550-L6552)

```diff
-           MC = this.writeStripVerts(WC, NC, MC, zC[SC], bC + Ko, QC[SC], fC, oC, gC)
-         }
-         return MC
+         }(cp.args)) return;
+       const Op = null === (ip = /"path"\s*:\s*"((?:[^"\\]|\\.)*)"/.exec(cp.args)) || void 0 === ip ? void 0 : ip[1];
+       return {
+         name: cp.name || "write_file",
+         path: Op
+       }
+     }
+     const gS = 1e4,
+       GS = 3e5,
+       rS = 16e3;
+     async function ZS(pp, ip, cp, Op) {
+       if ("custom" !== pp && ! function(pp) {
+           return BS.has(new URL(pp).host)
+         }(ip)) throw new Error(`AI key request to an unknown host for ${pp}`);
+       const op = await fetch(ip, {
+         ...cp,
+ ... (30 more added lines; see GitHub link above)
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6554-L6560` → after: `L7356-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7356-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7356-L7366) · [Before (L6554-L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6554-L6560)

```diff
-       writeStripVerts(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
-         const qC = this.buffers.worldOffset,
-           FC = vo.width / 2;
-         CC[ZC] = QC + nC * FC - qC[0], CC[ZC + 1] = wC - qC[1], CC[ZC + 2] = bC + fC * FC - qC[2], CC[ZC + 3] = QC - nC * FC - qC[0], CC[ZC + 4] = wC - qC[1], CC[ZC + 5] = bC - fC * FC - qC[2];
-         const WC = ZC / 6 * 4,
-           NC = oC / 3;
-         return zC[WC] = 0, zC[WC + 1] = NC, zC[WC + 2] = 1, zC[WC + 3] = NC, ZC + 6
+       return op
+     }
+     async function zS(pp, ip, cp) {
+       const Op = (0, tp.b)(pp, ip);
+       try {
+         return await cp(Op.signal)
+       } catch (op) {
+         if (op instanceof hS || null !== ip && void 0 !== ip && ip.aborted) throw op;
+         throw Op.signal.aborted || console.warn("AI key request couldn't be read", op), new hS(Op.signal.aborted ? "timeout" : "unreachable")
+       } finally {
+         Op.clear()
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6562-L6574` → after: `L7368-L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7368-L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7368-L7381) · [Before (L6562-L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6562-L6574)

```diff
-       buildWallClimb(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
-         const {
-           sampleX: NC,
-           sampleZ: MC
-         } = this.buffers, gC = this.findBlockEdge(NC[wC - 1], MC[wC - 1], NC[wC], MC[wC]);
-         let SC, pC, PC = gC.pos[0],
-           GC = gC.pos[1];
-         if ("x" === gC.axis) {
-           SC = 0, pC = Math.sign(qC) || 1;
-           PC += (fC > 0 ? -(Math.sign(FC) || 1) : Math.sign(FC) || 1) * Ko
-         } else {
-           SC = Math.sign(oC) || 1, pC = 0;
-           GC += (fC > 0 ? -(Math.sign(WC) || 1) : Math.sign(WC) || 1) * Ko
+     }
+ 
+     function sS(pp) {
+       let ip = pp.length;
+       const cp = pp.lastIndexOf("<tool_call"); - 1 === cp || pp.includes("</tool_call>", cp) || (ip = cp);
+       const Op = [...pp.matchAll(/\{\s*"(?:jsonrpc|name|tool|method|function)"/g)].find((ip => null === function(pp, ip) {
+         let cp = 0,
+           Op = !1;
+         for (let op = ip; op < pp.length; op++) {
+           const ip = pp[op];
+           if (Op) "\\" === ip ? op++ : '"' === ip && (Op = !1);
+           else if ('"' === ip) Op = !0;
+           else if ("{" === ip) cp++;
+           else if ("}" === ip && (cp--, 0 === cp)) return op + 1
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6576-L6614` → after: `L7383-L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7383-L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7383-L7385) · [Before (L6576-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6576-L6614)

```diff
-         const RC = gC.pos[0] - NC[wC - 1],
-           AC = gC.pos[1] - MC[wC - 1];
-         QC += Math.sqrt(RC * RC + AC * AC), ZC = this.writeStripVerts(CC, zC, ZC, PC, bC + Ko, GC, SC, pC, QC), QC += Math.abs(fC), ZC = this.writeStripVerts(CC, zC, ZC, PC, nC + Ko, GC, SC, pC, QC);
-         const xC = NC[wC] - gC.pos[0],
-           JC = MC[wC] - gC.pos[1];
-         return QC += Math.sqrt(xC * xC + JC * JC), this.wallClimbResult[0] = ZC, this.wallClimbResult[1] = QC, this.wallClimbResult
-       }
-       findBlockEdge(CC, zC, ZC, QC) {
-         const wC = mo(CC, ZC),
-           bC = mo(zC, QC),
-           nC = Math.min(wC, bC);
-         return this.edgeResult.axis = wC <= bC ? "x" : "z", this.edgeResult.pos[0] = CC + (ZC - CC) * nC, this.edgeResult.pos[1] = zC + (QC - zC) * nC, this.edgeResult
-       }
-       applyGeometry(CC) {
-         if (0 === CC) return void this.hide();
-         this.material || (this.material = Io(this.MN.Vg.Km(), this.colour, vo.alpha), eo.add(this.material));
- ... (23 more removed lines; see GitHub link above)
+         return null
+       }(pp, ip.index)));
+       return Op && Op.index < ip && (ip = Op.index), pp.slice(0, ip).replace(/```[\w-]*\s*$/, "").trim()
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6618-L6624` → after: `L7389-L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7389-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7389-L7422) · [Before (L6618-L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6618-L6624)

```diff
-       const ZC = zC - CC;
-       if (Math.abs(ZC) <= .001) return 1;
-       const QC = Math.floor(CC),
-         wC = Math.floor(zC);
-       if (QC === wC) return 1;
-       const bC = ((ZC > 0 ? wC : QC) - CC) / ZC;
-       return bC <= 0 || bC >= 1 ? 1 : bC
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "simple",
+         Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
+       const {
+         answer: op,
+         reasoning: Ip,
+         hOp: Sp,
+         isCutShort: xp,
+         nativeCalls: Lp = []
+       } = ip, Yp = op.replace(/<think>[\s\S]*?<\/think>/g, ""), Dp = "" === Op ? Yp.trim() : function(pp, ip) {
+         var cp, Op;
+         const op = ip.trimStart(),
+           Ip = pp.trimStart();
+         if (Ip.length >= 16 && op.startsWith(Ip.slice(0, 240))) return op;
+         const Sp = null !== (cp = null === (Op = pp.match(/```/g)) || void 0 === Op ? void 0 : Op.length) && void 0 !== cp ? cp : 0,
+           xp = sS(pp) !== pp.trim() || Sp % 2 === 1 ? 48 : 16;
+         for (let Lp = Math.min(pp.length, op.length, 4e3); Lp >= xp; Lp--)
+ ... (18 more added lines; see GitHub link above)
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6630-L6637` → after: `L7426-L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7426-L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7426-L7465) · [Before (L6630-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6630-L6637)

```diff
-       const ZC = Eo.get(CC);
-       if (null === zC) return void(ZC && (CC.childrenNodeParams = ZC, Eo.delete(CC)));
-       const QC = null !== ZC && void 0 !== ZC ? ZC : CC.childrenNodeParams,
-         wC = CC.childrenNodeParams.every((CC => CC.softTolerance === zC));
-       ZC && wC || (Eo.set(CC, QC), CC.childrenNodeParams = QC.map((CC => ({
-         ...CC,
-         softTolerance: zC
-       }))))
+       var cp;
+       const Op = null !== (cp = ip.tools) && void 0 !== cp ? cp : [];
+       if (0 === Op.length) return {};
+       switch (pp) {
+         case "openai":
+           return {
+             tools: FI(Op)
+           };
+         case "anthropic":
+           return {
+             tools: Op.map((pp => ({
+               name: pp.name,
+               description: pp.description,
+               input_schema: pp.inputSchema
+             })))
+           };
+ ... (24 more added lines; see GitHub link above)
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6640-L6641` → after: `L7468-L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7468-L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7468-L7469) · [Before (L6640-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6640-L6641)

```diff
-       constructor(CC) {
-         this.MN = CC, this.nametagBases = new WeakMap, this.nametags = new Map, this.rotations = new Set
+       constructor(pp, ip, cp) {
+         this.provider = pp, this.baseUrl = ip, this.key = cp
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6643-L6653` → after: `L7471-L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7471-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7471-L7483) · [Before (L6643-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6643-L6653)

```diff
-       setNametagOffset(CC, zC) {
-         const ZC = this.MN.JR.czC(CC);
-         if (this.nametags.get(CC) !== ZC && this.nametags.delete(CC), !ZC) return;
-         const QC = this.nametagBases.get(ZC),
-           wC = QC && ZC.nameYOffset === QC.written ? QC.base : ZC.nameYOffset;
-         if (0 === zC) return void(QC && (ZC.nameYOffset = wC, this.nametagBases.delete(ZC), this.nametags.delete(CC)));
-         const bC = (null !== wC && void 0 !== wC ? wC : Ho.b) + zC;
-         this.nametagBases.set(ZC, {
-           base: wC,
-           written: bC
-         }), this.nametags.set(CC, ZC), ZC.nameYOffset = bC
+       async check(pp) {
+         return zS(gS, pp, (async pp => {
+           var ip;
+           const cp = await ZS(this.provider, `${this.baseUrl}/models`, {
+             headers: this.headers()
+           }, pp);
+           return {
+             models: (null !== (ip = (await cp.json()).data) && void 0 !== ip ? ip : []).map((pp => ({
+               id: pp.id,
+               name: pp.name
+             })))
+           }
+         }))
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6655-L6657` → after: `L7485-L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7485-L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7485-L7528) · [Before (L6655-L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6655-L6657)

```diff
-       setFacingTolerance(CC, zC) {
-         const ZC = this.rotationState(CC);
-         ZC ? (Xo(ZC, zC), null === zC ? this.rotations.delete(CC) : this.rotations.add(CC)) : this.rotations.delete(CC)
+       async ask(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         return zS(GS, cp.signal, (async Op => {
+           var op;
+           const Ip = await ZS(this.provider, `${this.baseUrl}/chat/completions`, {
+             method: "POST",
+             headers: this.headers(),
+             body: JSON.stringify({
+               model: pp,
+               messages: ip,
+               ["openai" === this.provider ? "max_completion_tokens" : "max_tokens"]: rS,
+               stream: !0,
+               ...px("openai", cp)
+             })
+           }, Op);
+           let Sp = "",
+ ... (28 more added lines; see GitHub link above)
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6659-L6667` → after: `L7530-L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7530-L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7530-L7535) · [Before (L6659-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6659-L6667)

```diff
-       restoreAll() {
-         for (const [CC, zC] of this.nametags) {
-           const ZC = this.nametagBases.get(zC);
-           ZC && this.MN.JR.czC(CC) === zC && zC.nameYOffset === ZC.written && (zC.nameYOffset = ZC.base), this.nametagBases.delete(zC)
-         }
-         this.nametags.clear();
-         for (const CC of this.rotations) {
-           const zC = this.rotationState(CC);
-           zC && Xo(zC, null)
+       headers() {
+         return "" === this.key ? {
+           "Content-Type": "application/json"
+         } : {
+           Authorization: `Bearer ${this.key}`,
+           "Content-Type": "application/json"
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6679-L6720` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7541) · [Before (L6679-L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6679-L6720)

```diff
-         this.MN = CC, this.meshes = new Map, this.materials = new Map, this.nextKey = 1
-       }
-       create(CC, zC, ZC) {
-         const QC = this.nextKey++,
-           wC = this.MN.Vg,
-           bC = (0, RC.n)(wC, `gameMesh${QC}`, {
-             positions: CC.positions.slice(),
-             indices: CC.indices.slice(),
-             ...CC.uvs ? {
-               uvs: CC.uvs.slice()
-             } : {}
-           }),
-           nC = this.material(zC);
-         return bC.material = nC, bC.tS = !1, bC.receiveShadows = !1, bC.Hg = !0, wC.jS(bC, !1, ZC), this.meshes.set(QC, {
-           node: bC,
-           material: nC,
- ... (26 more removed lines; see GitHub link above)
+         this.key = pp, this.chat = void 0, this.chat = new ix("openrouter", QS.openrouter.baseUrl, pp)
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6722-L6766` → after: `L7543-L7546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7543-L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7543-L7546) · [Before (L6722-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6722-L6766)

```diff
-       material(CC) {
-         const zC = function(CC) {
-           switch (CC.kind) {
-             case void 0:
-             case "flatEmissive":
-               return CC.opaque ? `flat ${CC.rgb.join(" ")} opaque` : `flat ${CC.rgb.join(" ")} ${CC.alpha}${CC.onTop?" onTop":""}`;
-             case "chevronPath":
-               return `chevrons ${CC.colour} ${CC.alpha}`;
-             case "furnaceFire":
-               return "furnaceFire"
-           }
-         }(CC);
-         let ZC = this.materials.get(zC);
-         return ZC || (ZC = this.cachedMaterial(CC), this.materials.set(zC, ZC)), ZC.material
-       }
-       cachedMaterial(CC) {
- ... (29 more removed lines; see GitHub link above)
+       async check(pp) {
+         return await zS(gS, pp, (async pp => ZS("openrouter", `${QS.openrouter.baseUrl}/key`, {
+           headers: {
+             Authorization: `Bearer ${this.key}`
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6768-L6797` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7548) · [Before (L6768-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6768-L6797)

```diff
-         }
-       }
-       furnaceFire() {
-         var CC;
-         const zC = this.MN.Vg.Km(),
-           ZC = {
-             wrapU: xC.d.clamp,
-             wrapV: xC.d.clamp,
-             hasAlpha: !0
-           },
-           QC = (0, xC.r)(zC, {
-             url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADUSURBVCiRnVI7DoMwDH1GDKzNyFIOkgNUohKnYWTq2LkHiUSlHqAH6cSYuVs6hHxwAqV9UiQnmGf7+REijLI28f38nMjFBRjaXqPtNX9OE9EIoBFoew2jKl+hdIF91ABE+AEAMDHGmQnHgz2s7yI3RA70 … [truncated]
-             noMipmap: !0,
-             invertY: !1,
-             samplingMode: xC.h.nearest,
-             sets: ZC
- ... (14 more removed lines; see GitHub link above)
+         }, pp))), this.chat.check(pp)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6799-L6818` → after: `L7550-L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7550-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7550-L7551) · [Before (L6799-L6818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6799-L6818)

```diff
-       flatEmissive(CC, zC, ZC, QC) {
-         const wC = ZC ? {} : {
-           alpha: zC,
-           transparencyMode: eC.t.alphaBlend,
-           disableDepthWrite: !0,
-           depthFunction: QC ? eC.k.always : 0
-         };
-         return (0, DC.d)({
-           name: "gameMeshFlatEmissive",
-           sS: this.MN.Vg.Km(),
-           sets: {
-             specularColor: [0, 0, 0],
-             diffuseColor: [0, 0, 0],
-             emissiveColor: [CC[0], CC[1], CC[2]],
-             disableLighting: !0,
-             backFaceCulling: !0,
- ... (4 more removed lines; see GitHub link above)
+       ask(pp, ip, cp) {
+         return this.chat.ask(pp, ip, cp)
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6825-L6835` → after: `L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7556) · [Before (L6825-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6825-L6835)

```diff
-         this.MN = CC, this.pools = new Set, this.ctx = {
-           budget: 0,
-           frame: 0,
-           lit: !1
-         }, this.onBeforeRender = () => {
-           const {
-             ctx: CC
-           } = this;
-           CC.budget = 24, CC.frame++, CC.lit = this.MN.Vg.lS;
-           for (const zC of this.pools) zC.render(CC)
-         }
+         this.key = pp, this.baseUrl = QS.anthropic.baseUrl
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6837-L6843` → after: `L7558-L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7558-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7558-L7570) · [Before (L6837-L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6837-L6843)

```diff
-       create(CC, zC) {
-         const ZC = yC.g.itemsClient[CC.item];
-         if (!ZC) return null;
-         const QC = new to(this.MN, ZC, CC, zC, (CC => {
-           this.remove(CC)
-         }));
-         return 0 === this.pools.size && this.MN.on("beforeRender", this.onBeforeRender), this.pools.add(QC), QC
+       async check(pp) {
+         return zS(gS, pp, (async pp => {
+           var ip;
+           const cp = await ZS("anthropic", `${this.baseUrl}/models?limit=1000`, {
+             headers: this.headers()
+           }, pp);
+           return {
+             models: (null !== (ip = (await cp.json()).data) && void 0 !== ip ? ip : []).map((pp => ({
+               id: pp.id,
+               name: pp.display_name
+             })))
+           }
+         }))
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6845-L6846` → after: `L7572-L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7572-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7572-L7632) · [Before (L6845-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6845-L6846)

```diff
-       disposeAll() {
-         for (const CC of [...this.pools]) CC.dispose()
+       async ask(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const Op = ip.filter((pp => "system" === pp.role)).map((pp => pp.content)).join("\n\n"),
+           op = VS(ip).map((pp => ({
+             role: pp.role,
+             content: pp.content
+           })));
+         return zS(GS, cp.signal, (async ip => {
+           var Ip;
+           const Sp = await ZS("anthropic", `${this.baseUrl}/messages`, {
+             method: "POST",
+             headers: this.headers(),
+             body: JSON.stringify({
+               model: pp,
+               max_tokens: rS,
+               system: Op,
+ ... (45 more added lines; see GitHub link above)
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6848-L6849` → after: `L7634-L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7634-L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7634-L7640) · [Before (L6848-L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6848-L6849)

```diff
-       remove(CC) {
-         this.pools.delete(CC) && 0 === this.pools.size && this.MN.off("beforeRender", this.onBeforeRender)
+       headers() {
+         return {
+           "x-api-key": this.key,
+           "anthropic-version": "2023-06-01",
+           "anthropic-dangerous-direct-browser-access": "true",
+           "Content-Type": "application/json"
+         }
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6853-L6862` → after: `L7644-L7645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7644-L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7644-L7645) · [Before (L6853-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6853-L6862)

```diff
-       constructor(CC, zC, ZC, QC, wC) {
-         this.MN = CC, this.type = zC, this.model = ZC, this.onDispose = wC, this.HW = void 0, this.records = void 0, this.count = 0, this.origin = [0, 0, 0], this.placedOffset = [0, 0, 0], this.wasLit = !1, this.dirtyList = [], this.isDirty = void 0, this.dirtyAll = !1, this.ids  … [truncated]
-         const bC = CC.YN;
-         this.placedOffset[0] = bC[0], this.placedOffset[1] = bC[1], this.placedOffset[2] = bC[2]
-       }
-       setOrigin(CC, zC, ZC) {
-         const {
-           origin: QC
-         } = this;
-         QC[0] === CC && QC[1] === zC && QC[2] === ZC || (QC[0] = CC, QC[1] = zC, QC[2] = ZC, this.dirtyAll = !0)
+       constructor(pp) {
+         this.key = pp, this.baseUrl = QS.gemini.baseUrl
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6864-L6865` → after: `L7647-L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7647-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7647-L7662) · [Before (L6864-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6864-L6865)

```diff
-       markDirty(CC) {
-         !this.Sg && CC >= 0 && CC < this.HW && this.rg(CC, CC + 1)
+       async check(pp) {
+         return zS(gS, pp, (async pp => {
+           var ip;
+           const cp = await ZS("gemini", `${this.baseUrl}/models?pageSize=1000`, {
+             headers: this.headers()
+           }, pp);
+           return {
+             models: (null !== (ip = (await cp.json()).models) && void 0 !== ip ? ip : []).filter((pp => {
+               var ip, cp;
+               return null === (ip = null === (cp = pp.supportedGenerationMethods) || void 0 === cp ? void 0 : cp.includes("generateContent")) || void 0 === ip || ip
+             })).map((pp => ({
+               id: pp.name.replace(/^models\//, ""),
+               name: pp.displayName
+             })))
+           }
+         }))
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6867-L6953` → after: `L7664-L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7664-L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7664-L7727) · [Before (L6867-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6867-L6953)

```diff
-       commit(CC) {
-         this.Sg || (CC = Math.min(Math.max(CC, 0), this.HW)) !== this.count && (this.rg(Math.min(CC, this.count), Math.max(CC, this.count)), this.count = CC)
-       }
-       grow(CC) {
-         (CC = Math.ceil(CC)) <= this.HW || this.Sg || (this.records = (0, so.b)(this.records, new Float32Array(CC * uo.d)), this.ids = (0, so.b)(this.ids, new Int32Array(CC)), this.isDirty = (0, so.b)(this.isDirty, new Uint8Array(CC)), this.state = (0, so.b)(this.state, new Uint8 … [truncated]
-       }
-       dispose() {
-         if (!this.Sg) {
-           this.Sg = !0;
-           try {
-             const CC = [];
-             for (let zC = 0; zC < this.HW; zC++) 3 === this.state[zC] && CC.push(this.ids[zC]);
-             CC.length > 0 && this.MN.Vg.nH.delete(...CC)
-           } finally {
-             this.count = 0, this.toBuild.length = 0, this.onDispose(this)
-           }
- ... (71 more removed lines; see GitHub link above)
+       async ask(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const Op = ip.filter((pp => "system" === pp.role)).map((pp => ({
+             text: pp.content
+           }))),
+           op = VS(ip).map((pp => ({
+             role: "assistant" === pp.role ? "model" : "user",
+             parts: [{
+               text: pp.content
+             }]
+           })));
+         return zS(GS, cp.signal, (async ip => {
+           var Ip;
+           const Sp = await ZS("gemini", `${this.baseUrl}/models/${encodeURIComponent(pp)}:streamGenerateContent?alt=sse`, {
+             method: "POST",
+             headers: this.headers(),
+ ... (48 more added lines; see GitHub link above)
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L6955-L6973` → after: `L7729-L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7729-L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7729-L7732) · [Before (L6955-L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L6955-L6973)

```diff
-       build(CC) {
-         const {
-           toBuild: zC
-         } = this;
-         let ZC = 0;
-         for (; ZC < zC.length && CC.budget > 0;) {
-           const QC = zC[ZC++];
-           if (1 !== this.state[QC]) continue;
-           if (!this.visible(QC)) {
-             this.state[QC] = 0;
-             continue
-           }
-           CC.budget--, this.state[QC] = 2;
-           const {
-             frame: wC
-           } = CC;
- ... (3 more removed lines; see GitHub link above)
+       headers() {
+         return {
+           "x-goog-api-key": this.key,
+           "Content-Type": "application/json"
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7001-L7009` → after: `L7736-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7736-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7736-L7748) · [Before (L7001-L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7001-L7009)

```diff
-     class Do {
-       constructor(CC) {
-         this.MN = CC, this.gameFar = null, this.engineFar = 0
-       }
-       set(CC) {
-         const zC = this.MN.Vg.Lk(),
-           ZC = null !== this.gameFar && zC.far === this.gameFar;
-         var QC, wC, bC, nC;
-         null !== CC ? !Number.isFinite(CC) || CC <= zC.near || (ZC || (this.engineFar = zC.far), this.gameFar = CC, zC.far !== CC && (zC.far = CC, null === (QC = (wC = this.MN.Vg).tzC) || void 0 === QC || QC.call(wC))) : (ZC && (zC.far = this.engineFar, null === (bC = (nC = this. … [truncated]
+ 
+     function Ix(pp, ip, cp) {
+       switch (pp) {
+         case "openrouter":
+           return new cx(ip);
+         case "anthropic":
+           return new Ox(ip);
+         case "gemini":
+           return new ox(ip);
+         case "openai":
+           return new ix("openai", QS.openai.baseUrl, ip);
+         case "custom":
+           return new ix("custom", null !== cp && void 0 !== cp ? cp : "", ip)
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7012-L7025` → after: `L7751-L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7751-L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7751-L7859) · [Before (L7012-L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7012-L7025)

```diff
-     var jo = ZC(597),
-       yo = ZC(38297);
-     class Lo {
-       constructor(CC) {
-         this.MN = CC, this.models = new Set, this.ctx = {
-           frame: 0,
-           lit: !1,
-           offset: [0, 0, 0]
-         }, this.onBeforeRender = () => {
-           const {
-             ctx: CC
-           } = this;
-           CC.frame++, CC.lit = this.MN.Vg.lS, CC.offset = this.MN.YN;
-           for (const zC of this.models) zC.render(CC)
+     const Sx = {
+         fast: "Fast",
+         smart: "Smart",
+         smartest: "Smartest"
+       },
+       xx = {
+         anthropic: {
+           fast: [{
+             id: "claude-haiku-5-5",
+             name: "Claude Haiku 5.5"
+           }, {
+             id: "claude-haiku-4-5",
+             name: "Claude Haiku 4.5"
+           }],
+           smart: [{
+             id: "claude-sonnet-5-5",
+ ... (93 more added lines; see GitHub link above)
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7027-L7046` → after: `L7861-L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7861-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7861-L7878) · [Before (L7027-L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7027-L7046)

```diff
-       }
-       create(CC, zC) {
-         const ZC = this.MN.Vg.nH;
-         if (QC = CC, !jo.p.includes(QC) || !ZC.hasType(CC)) return null;
-         var QC;
-         const wC = (0, dC.l)(CC, zC, !1),
-           {
-             meshApi: bC
-           } = dC.b[CC];
-         bC.updateVariation(wC, CC, "default"), bC.updateMeshOpacity(wC, 1), ZC.setPickable(wC, !1);
-         const nC = new Uo(this.MN, CC, wC, (CC => {
-           this.remove(CC)
-         }));
-         return 0 === this.models.size && this.MN.on("beforeRender", this.onBeforeRender), this.models.add(nC), nC
-       }
-       disposeAll() {
- ... (4 more removed lines; see GitHub link above)
+       };
+ 
+     function Lx(pp) {
+       return /claude-(sonnet|opus|fable)|gpt-5(\.\d+)?($|-codex|-pro|-sol)|gpt-6(\.\d+)?-(sol|astra)|gemini-[\d.]+-pro|gemini-4/.test(pp) ? "mcp" : "simple"
+     }
+ 
+     function Yx(pp, ip) {
+       return "custom" !== pp && /claude-|gpt-|gemini-/.test(ip)
+     }
+ 
+     function Dx(pp, ip, cp) {
+       var Op;
+       const op = cp.find((pp => pp.id === ip));
+       return {
+         id: ip,
+         name: null !== (Op = null === op || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : ip,
+ ... (2 more added lines; see GitHub link above)
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7049-L7050` → after: `L7881-L7921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7881-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7881-L7921) · [Before (L7049-L7050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7049-L7050)

```diff
-     class Uo {
-       constructor(CC, zC, ZC, QC) {
+ 
+     function Ax(pp, ip) {
+       return "custom" !== pp ? function(pp, ip) {
+         if ("custom" === pp) return [];
+         const cp = new Set(ip.map((pp => pp.id))),
+           Op = xx[pp];
+         return Object.keys(Op).flatMap((op => {
+           const Ip = Op[op].find((pp => cp.has(pp.id)));
+           return Ip ? [{
+             ...Dx(pp, Ip.id, ip),
+             name: Ip.name,
+             tier: op
+           }] : []
+         }))
+       }(pp, ip) : ip.slice(0, 20).map((cp => Dx(pp, cp.id, ip)))
+     }
+ ... (25 more added lines; see GitHub link above)
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7052-L7087` → after: `L7923-L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7923-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7923-L7925) · [Before (L7052-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7052-L7087)

```diff
-         this.MN = CC, this.type = zC, this.id = ZC, this.onDispose = QC, this.pos = [0, 0, 0], this.yaw = 0, this.posed = !1, this.visible = !1, this.needsPlace = !1, this.needsRelight = !1, this.placedOffset = [NaN, NaN, NaN], this.light = new Float32Array(4), this.litFrame = -1 … [truncated]
-       }
-       setPose(CC, zC) {
-         this.Sg || (this.posed && CC[0] === this.pos[0] && CC[1] === this.pos[1] && CC[2] === this.pos[2] || (this.pos[0] = CC[0], this.pos[1] = CC[1], this.pos[2] = CC[2], this.needsRelight = !0), this.yaw = zC, this.posed = !0, this.needsPlace = !0)
-       }
-       setVisible(CC) {
-         this.Sg || CC === this.visible || (this.visible = CC, this.needsPlace = !0)
-       }
-       dispose() {
-         this.Sg || (this.Sg = !0, this.MN.Vg.nH.delete(this.id), this.onDispose(this))
-       }
-       render(CC) {
-         const zC = this.MN.Vg.nH;
-         if (!(this.visible && this.posed)) return void(this.needsPlace && (zC.IK(this.id, !1), this.needsPlace = !1));
-         const {
-           offset: ZC
- ... (20 more removed lines; see GitHub link above)
+         return new URL(null !== (ip = pp.baseUrl) && void 0 !== ip ? ip : "").protocol.startsWith("http")
+       } catch {
+         return !1
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7090-L7112` → after: `L7928-L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7928-L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7928-L7933) · [Before (L7090-L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7090-L7112)

```diff
-     var Bo = ZC(38544);
-     const Oo = 1 / .6,
-       ko = ["..1111..", ".122221.", "12222221", "12222221", "12222221", "12222221", ".122221.", "..1111.."];
-     class Vo extends Bo.c {
-       constructor(CC) {
-         super(), this.HW = CC, this.queue = void 0, this.length = 0, this.cursor = 0, this.speed = 0, this.queue = new Float32Array(4 * CC)
-       }
-       push(CC, zC, ZC, QC) {
-         const wC = 4 * this.length;
-         this.queue[wC] = CC, this.queue[wC + 1] = zC, this.queue[wC + 2] = ZC, this.queue[wC + 3] = QC, this.length++
-       }
-       startPositionFunction(CC, zC, ZC, QC) {
-         if (this.cursor >= this.length) return this.speed = 0, void UC.Eg.TransformCoordinatesFromFloatsToRef(0, -1e3, 0, CC, zC);
-         const wC = 4 * this.cursor;
-         this.cursor++, this.speed = this.queue[wC + 3], UC.Eg.TransformCoordinatesFromFloatsToRef(this.queue[wC], this.queue[wC + 1], this.queue[wC + 2], CC, zC)
-       }
- ... (7 more removed lines; see GitHub link above)
+ 
+     function tx(pp) {
+       try {
+         return "undefined" === typeof window ? null : window[pp]
+       } catch (ip) {
+         return console.warn(`AI Helper: no ${pp}`, ip), null
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7115-L7182` → after: `L7936-L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7936-L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7936-L7948) · [Before (L7115-L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7115-L7182)

```diff
-     const Cq = [0, 1, 0];
-     class zq {
-       constructor(CC, zC, ZC, QC, wC) {
-         var bC, nC, fC;
-         this.MN = CC, this.system = zC, this.onFree = wC, this.box = void 0, this.points = null, this.boxAt = new UC.Eg, this.pointsAt = new UC.Eg, this.lifeMs = void 0, this.HW = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
-         const oC = null !== (bC = ZC.dir1) && void 0 !== bC ? bC : Cq,
-           qC = null !== (nC = ZC.dir2) && void 0 !== nC ? nC : Cq,
-           FC = null !== (fC = QC.half) && void 0 !== fC ? fC : [0, 0, 0];
-         this.box = zC.createBoxEmitter(new UC.Eg(oC[0], oC[1], oC[2]), new UC.Eg(qC[0], qC[1], qC[2]), new UC.Eg(-FC[0], -FC[1], -FC[2]), new UC.Eg(FC[0], FC[1], FC[2])), this.boxAt.set(QC.pos[0], QC.pos[1], QC.pos[2]), zC.emitter = this.boxAt, zC.manualEmitCount = 0, zC.onAnimat … [truncated]
-           this.idle = !0, this.stopped && (zC.disposeOnStop = !1, queueMicrotask((() => {
-             this.dispose()
-           })))
-         }, (0, HC.t)(CC, zC), this.setEmitRate(ZC.emitRate)
-       }
-       moveTo(CC, zC) {
-         this.stopped || (this.boxAt.set(CC[0], CC[1], CC[2]), zC && (this.box.minEmitBox.set(-zC[0], -zC[1], -zC[2]), this.box.maxEmitBox.set(zC[0], zC[1], zC[2])), (0, HC.t)(this.MN, this.system))
- ... (52 more removed lines; see GitHub link above)
+     const Hx = new class {
+       constructor(pp, ip) {
+         var cp;
+         this.session = pp, this.local = ip, this.state = void 0, this.listeners = new Set, this.ownsRemembered = !1, this.lastUsedAt = 0, this.getState = () => this.state, this.subscribe = pp => (this.listeners.add(pp), () => {
+           this.listeners.delete(pp)
+         });
+         for (const Ip of [pp, ip]) null !== Ip && void 0 !== Ip && Ip.getItem(yx) && !this.read(Ip) && Ip.removeItem(yx);
+         const Op = this.read(pp),
+           op = this.read(ip);
+         this.state = null !== Op && void 0 !== Op && Op.remember ? null !== op && void 0 !== op && op.remember ? op : {
+           ...Op,
+           remember: !1
+         } : null !== (cp = null !== Op && void 0 !== Op ? Op : op) && void 0 !== cp ? cp : Ux, this.ownsRemembered = this.state.remember && null !== op
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7184-L7187` → after: `L7950-L7951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7950-L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7950-L7951) · [Before (L7184-L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7184-L7187)

```diff
-     }
-     class Zq {
-       constructor(CC) {
-         this.MN = CC, this.live = new Set, this.textures = new Map
+       nextUsedAt() {
+         return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7189-L7190` → after: `L7953-L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7953-L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7953-L7960) · [Before (L7189-L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7189-L7190)

```diff
-       enabled() {
-         return this.MN.Vg.Km().particlesEnabled
+       activeKey() {
+         const pp = this.state.selected,
+           ip = pp ? this.state.keys.find((ip => ip.id === pp.keyId)) : void 0,
+           cp = null === ip || void 0 === ip ? void 0 : ip.models.find((ip => ip.id === (null === pp || void 0 === pp ? void 0 : pp.modelId)));
+         return ip && cp ? {
+           ...ip,
+           model: cp
+         } : null
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7192-L7203` → after: `L7962-L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7962-L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7962-L7989) · [Before (L7192-L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7192-L7203)

```diff
-       create(CC, zC) {
-         var ZC, QC;
-         const wC = "string" === typeof CC.texture ? CC.texture : CC.texture.kind,
-           bC = this.MN.Vg.DH(`game|${wC}`, CC.HW);
-         bC.texture = this.texture(CC.texture, null === (ZC = CC.mipmaps) || void 0 === ZC || ZC), bC.blendMode = CC.blendMode, bC.minLifeTime = CC.minLifeTime, bC.maxLifeTime = CC.maxLifeTime, bC.minSize = CC.minSize, bC.maxSize = CC.maxSize, bC.minEmitPower = CC.minEmitPower, bC … [truncated]
-         const nC = null !== (QC = CC.gravity) && void 0 !== QC ? QC : [0, 0, 0];
-         bC.gravity = new UC.Eg(nC[0], nC[1], nC[2]);
-         for (const oC of CC.colorGradients) bC.addColorGradient(oC.timeFraction, (0, HC.n)(oC.minColor), oC.maxColor ? (0, HC.n)(oC.maxColor) : void 0);
-         const fC = new zq(this.MN, bC, CC, zC, (CC => {
-           this.live.delete(CC)
-         }));
-         return this.live.add(fC), fC
+       addKey(pp, ip, cp) {
+         var Op, op, Ip;
+         const Sp = this.state.keys.find((ip => "custom" === ip.provider && ip.baseUrl === pp.baseUrl)),
+           xp = "custom" !== pp.provider ? pp.provider : null !== (Op = null === Sp || void 0 === Sp ? void 0 : Sp.id) && void 0 !== Op ? Op : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           Lp = void 0 === ip ? Px(pp.models) : null !== (op = pp.models.find((pp => pp.id === ip))) && void 0 !== op ? op : pp.models[0],
+           Yp = this.state.keys.find((pp => pp.id === xp)),
+           Dp = {
+             ...pp,
+             id: xp,
+             usedAt: this.nextUsedAt(),
+             ...Lp ? {
+               usedModelId: Lp.id
+             } : {},
+             ...null !== Yp && void 0 !== Yp && Yp.name && !pp.name ? {
+               name: Yp.name
+             } : {}
+ ... (12 more added lines; see GitHub link above)
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7205-L7206` → after: `L7991-L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L7991-L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L7991-L8005) · [Before (L7205-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7205-L7206)

```diff
-       playEffect(CC) {
-         (0, mC.p)(this.MN, CC)
+       renameKey(pp, ip) {
+         const cp = ip.replace(/\s+/g, " ").trim().slice(0, 30);
+         this.update({
+           keys: this.state.keys.map((ip => {
+             if (ip.id !== pp) return ip;
+             const {
+               name: Op,
+               ...op
+             } = ip;
+             return "" === cp ? op : {
+               ...op,
+               name: cp
+             }
+           }))
+         })
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7208-L7209` → after: `L8007-L8017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8007-L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8007-L8017) · [Before (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7208-L7209)

```diff
-       burstPreset(CC, zC, ZC) {
-         "critical" === CC && (0, mC.n)(this.MN, mC.q, [zC[0], zC[1], zC[2]], ZC)
+       select(pp) {
+         const ip = this.nextUsedAt(),
+           cp = null === pp ? this.state.keys : this.state.keys.map((cp => cp.id === pp.keyId ? {
+             ...cp,
+             usedAt: ip,
+             usedModelId: pp.modelId
+           } : cp));
+         this.update({
+           keys: cp,
+           selected: pp
+         })
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7211-L7215` → after: `L8019-L8046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8019-L8046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8019-L8046) · [Before (L7211-L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7211-L7215)

```diff
-       disposeAll() {
-         for (const CC of this.live) CC.dispose();
-         this.live.clear();
-         for (const CC of this.textures.values())(0, xC.C)(CC);
-         this.textures.clear()
+       refreshModels(pp, ip, cp) {
+         const Op = this.state.keys.find((ip => ip.id === pp));
+         if (!Op || cp && (Op.key !== cp.key || Op.baseUrl !== cp.baseUrl)) return !1;
+         const op = [...ip.map((pp => {
+             const ip = Op.models.find((ip => ip.id === pp.id));
+             return {
+               ...pp,
+               ...!1 === (null === ip || void 0 === ip ? void 0 : ip.nativeTools) ? {
+                 nativeTools: !1
+               } : {},
+               ...null !== ip && void 0 !== ip && ip.typed ? {
+                 typed: !0
+               } : {}
+             }
+           })), ...Op.models.filter((pp => pp.typed && !ip.some((ip => ip.id === pp.id))))],
+           Ip = this.state.selected,
+ ... (12 more added lines; see GitHub link above)
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7217-L7238` → after: `L8048-L8061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8048-L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8048-L8061) · [Before (L7217-L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7217-L7238)

```diff
-       texture(CC, zC) {
-         const ZC = "string" === typeof CC ? `${CC}|${zC?"mips":"flat"}` : `|${CC.kind}`;
-         let QC = this.textures.get(ZC);
-         if (!QC || QC.released) {
-           const wC = this.MN.Vg.Km();
-           QC = "string" === typeof CC ? (0, xC.p)(wC, (0, SC.d)(CC), zC) : function(CC) {
-             const zC = ko.length,
-               ZC = {
-                 width: zC,
-                 height: zC,
-                 mipmaps: !1,
-                 samplingMode: xC.h.nearest,
-                 hasAlpha: !0
-               },
-               QC = (0, JC.n)(CC, "smokePuff", ZC),
-               wC = (0, JC.j)(QC);
- ... (6 more removed lines; see GitHub link above)
+       stopNativeTools(pp, ip) {
+         this.update({
+           keys: this.state.keys.map((cp => {
+             if (cp.id !== pp) return cp;
+             const Op = cp.models.map((pp => pp.id === ip ? {
+               ...pp,
+               nativeTools: !1
+             } : pp));
+             return {
+               ...cp,
+               models: Op
+             }
+           }))
+         })
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7240-L7245` → after: `L8063-L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8063-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8063-L8086) · [Before (L7240-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7240-L7245)

```diff
-     }
-     const Qq = 1 / 3;
-     class wq {
-       constructor(CC) {
-         this.MN = CC, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = CC => {
-           this.offset = (this.offset + Math.min(CC, 250) / 1e3 * 1.2 * Qq) % 1, (0, JC.J)(this.material, -this.offset)
+       removeKey(pp) {
+         var ip;
+         const cp = this.state,
+           Op = cp.keys.findIndex((ip => ip.id === pp)),
+           op = cp.keys[Op];
+         if (!op) return () => {};
+         const Ip = cp.keys.filter((ip => ip.id !== pp)),
+           Sp = (null === (ip = cp.selected) || void 0 === ip ? void 0 : ip.keyId) === pp ? null : cp.selected;
+         return this.update({
+           keys: Ip,
+           selected: Sp,
+           remember: Ip.length > 0 && cp.remember
+         }), () => {
+           var ip;
+           const Ip = this.state.keys.some((pp => wx(pp, op)));
+           if (Ip) return;
+ ... (8 more added lines; see GitHub link above)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7248-L7271` → after: `L8089-L8090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8089-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8089-L8090) · [Before (L7248-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7248-L7271)

```diff
-       set(CC) {
-         if (this.clear(), !CC || 0 === CC.cells.length) return;
-         const zC = this.MN.Vg,
-           ZC = (0, RC.n)(zC, "routeChevrons", function(CC) {
-             const [zC, ZC, QC] = CC[0].pos, wC = [], bC = [], nC = [];
-             return CC.forEach(((CC, fC) => {
-               let {
-                 pos: oC,
-                 way: [qC, FC]
-               } = CC;
-               const WC = oC[0] - zC + .5,
-                 NC = oC[1] - ZC + .04,
-                 MC = oC[2] - QC + .5,
-                 [gC, SC] = [.35 * -FC, .35 * qC],
-                 [pC, PC] = [fC * Qq, (fC + 1) * Qq],
-                 GC = wC.length / 3;
- ... (8 more removed lines; see GitHub link above)
+       removeAll() {
+         this.update(Ux), this.local && null !== this.local.getItem(yx) && (this.local.setItem(yx, JSON.stringify(Ux)), this.local.removeItem(yx))
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7273` → after: `L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8092) · [Before (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7273)

```diff
-       disposeAll() {
+       setRemember(pp) {
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7275-L7278` → after: `L8094-L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8094-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8094-L8099) · [Before (L7275-L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7275-L7278)

```diff
-         this.clear(), null === (CC = this.material) || void 0 === CC || CC.dispose(!0, !0), this.material = null, this.look = "", this.offset = 0
-       }
-       clear() {
-         this.node && (this.MN.off("afterRender", this.slide), this.node.dispose(), this.node = null)
+         const cp = pp && !this.ownsRemembered ? this.read(this.local) : null,
+           Op = (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.keys) && void 0 !== ip ? ip : []).filter((pp => this.state.keys.every((ip => !wx(ip, pp)))));
+         this.update({
+           remember: pp,
+           keys: [...Op, ...this.state.keys]
+         })
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7280-L7281` → after: `L8101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8101) · [Before (L7280-L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7280-L7281)

```diff
-       materialFor(CC, zC) {
-         const ZC = `${CC} ${zC}`;
+       otherTabChanged(pp) {
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7283-L7284` → after: `L8103-L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8103-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8103-L8108) · [Before (L7283-L7284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7283-L7284)

```diff
-         this.material && this.look === ZC || (null === (QC = this.material) || void 0 === QC || QC.dispose(!0, !0), this.material = Io(this.MN.Vg.Km(), CC, zC), this.look = ZC);
-         return this.material
+         if (!this.state.remember) return;
+         const cp = pp ? this.parse(pp) : null;
+         cp ? (this.state = cp, this.ownsRemembered = cp.remember) : (this.ownsRemembered = !1, this.state = {
+           ...this.state,
+           remember: !1
+         }), null === (ip = this.session) || void 0 === ip || ip.setItem(yx, JSON.stringify(this.state)), this.notify()
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7286-L7292` → after: `L8110-L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8110-L8111) · [Before (L7286-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7286-L7292)

```diff
-     }
-     var bq = ZC(38967);
-     class nq {
-       constructor(CC) {
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new bq.b((() => zo.e.get("forcedCameraDirectionTransitionMs")), (CC => {
-           zo.e.apply(CC)
-         })), this.particles = new Zq(CC), this.meshes = new ro(CC), this.pools = new ao(CC), this.routeChevrons = new wq(CC), this.entityPresentation = new co(CC), this.mobModels = new Lo(CC), this.cameraFar = new Do(CC)
+       notify() {
+         for (const pp of this.listeners) pp()
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7294-L7295` → after: `L8113-L8127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8113-L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8113-L8127) · [Before (L7294-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7294-L7295)

```diff
-       hasPackModel(CC) {
-         return Boolean(SC.c.getModelOverride(CC))
+       update(pp) {
+         var ip;
+         this.state = {
+           ...this.state,
+           ...pp
+         };
+         const cp = JSON.stringify(this.state);
+         var Op;
+         if (null === (ip = this.session) || void 0 === ip || ip.setItem(yx, cp), this.state.remember && this.state.keys.length > 0) null === (Op = this.local) || void 0 === Op || Op.setItem(yx, cp), this.ownsRemembered = !0;
+         else if (this.ownsRemembered) {
+           var op, Ip;
+           if (0 === this.state.keys.length) null === (Ip = this.local) || void 0 === Ip || Ip.setItem(yx, JSON.stringify(Ux));
+           null === (op = this.local) || void 0 === op || op.removeItem(yx), this.ownsRemembered = !1
+         }
+         this.notify()
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7297-L7298` → after: `L8129-L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8129-L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8129-L8131) · [Before (L7297-L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7297-L7298)

```diff
-       setGroundArrowStyle(CC) {
-         ho(CC)
+       read(pp) {
+         const ip = null === pp || void 0 === pp ? void 0 : pp.getItem(yx);
+         return ip ? this.parse(ip) : null
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7300-L7321` → after: `L8133-L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8133-L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8133-L8139) · [Before (L7300-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7300-L7321)

```diff
-       disposeAll() {
-         const CC = [() => {
-           this.particles.disposeAll()
-         }, () => {
-           this.meshes.disposeAll()
-         }, () => {
-           this.pools.disposeAll()
-         }, () => {
-           this.routeChevrons.disposeAll()
-         }, () => {
-           this.entityPresentation.restoreAll()
-         }, () => {
-           this.setGroundArrowStyle(null)
-         }, () => {
-           this.mobModels.disposeAll()
-         }, () => {
- ... (6 more removed lines; see GitHub link above)
+       parse(pp) {
+         try {
+           const ip = {
+             ...Ux,
+             ...JSON.parse(pp)
+           };
+           return Array.isArray(ip.keys) && ip.keys.every(vx) ? ip : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7323` → after: `L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8141) · [Before (L7323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7323)

```diff
-           console.error("Error freeing client game output", zC)
+           return console.warn("AI Helper: saved keys couldn't be read", ip instanceof Error ? ip.name : "error"), null
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7326-L7342` → after: `L8144-L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8144-L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8144-L8169) · [Before (L7326-L7342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7326-L7342)

```diff
-     }
-     var fq = ZC(1275),
-       oq = ZC(4366),
-       qq = ZC(38824),
-       Fq = ZC(1733),
-       Wq = ZC(1692);
-     class Nq {
-       constructor() {
-         this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
-       }
-       set(CC, zC, ZC, QC) {
-         this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
-         const wC = 1023 & CC | (1023 & zC) << 10 | (1023 & ZC) << 20;
-         let bC = QC;
-         if (Mq(CC) && Mq(zC) && Mq(ZC) || (bC = new gq(CC, zC, ZC, QC), this.hasBoxes = !0), Math.abs(CC) < 512 && Math.abs(zC) < 512 && Math.abs(ZC) < 512) {
-           const CC = this.unbox(this.zeroStorage.get(wC));
- ... (1 more removed lines; see GitHub link above)
+     }(tx("sessionStorage"), tx("localStorage"));
+ 
+     function dx() {
+       const pp = function() {
+           const [pp, ip] = (0, Op.useState)(Hx.getState);
+           return (0, Op.useEffect)((() => (ip(Hx.getState()), Hx.subscribe((() => {
+             ip(Hx.getState())
+           })))), []), pp
+         }(),
+         ip = Hx.activeKey();
+       return {
+         ...pp,
+         active: ip,
+         isSelected: cp => {
+           return (Op = ip ? pp.selected : null) === (op = cp) || null !== Op && null !== op && Op.keyId === op.keyId && Op.modelId === op.modelId;
+           var Op, op
+ ... (10 more added lines; see GitHub link above)
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7365-L7374` → after: `L8172-L8186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8172-L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8172-L8186) · [Before (L7365-L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7365-L7374)

```diff
-       removeBy(CC) {
-         for (const {
-             x: zC,
-             y: ZC,
-             z: QC,
-             val: wC
-           }
-           of this.iterate(!0)) {
-           CC(zC, ZC, QC, wC) && this.remove(zC, ZC, QC)
-         }
+     }
+     async function ex(pp, ip) {
+       var cp;
+       let {
+         provider: Op,
+         key: op,
+         baseUrl: Ip,
+         modelName: Sp
+       } = pp;
+       const xp = null !== (cp = null === Sp || void 0 === Sp ? void 0 : Sp.trim()) && void 0 !== cp ? cp : "";
+       let Lp = [];
+       try {
+         Lp = (await Ix(Op, op, Ip).check(ip)).models
+       } catch (Yp) {
+         if (!("custom" === Op && Yp instanceof hS && ("failed" === Yp.problem || "noModel" === Yp.problem))) throw Yp
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7376-L7412` → after: `L8188-L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8188-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8188-L8218) · [Before (L7376-L7412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7376-L7412)

```diff
-       unbox(CC) {
-         return this.hasBoxes && pq(CC) ? CC.val : CC
-       }* iterate(CC) {
-         const zC = this.mutationCount;
-         for (const ZC of Pq(this.zeroStorage)) {
-           if (!this.zeroStorage.has(ZC)) continue;
-           const QC = this.zeroStorage.get(ZC);
-           if (this.hasBoxes && pq(QC) ? yield {
-               x: QC.x,
-               y: QC.y,
-               z: QC.z,
-               val: QC.val
-             } : yield {
-               x: ZC << 22 >> 22,
-               y: ZC << 12 >> 22,
-               z: ZC << 2 >> 22,
- ... (21 more removed lines; see GitHub link above)
+       if (null !== ip && void 0 !== ip && ip.aborted) throw new DOMException("The AI key test was stopped", "AbortError");
+       return "" !== xp ? [{
+         ...Dx(Op, xp, Lp),
+         typed: !0
+       }] : Ax(Op, Lp)
+     }
+     "undefined" !== typeof window && window.addEventListener("storage", (pp => {
+       pp.storageArea === tx("localStorage") && pp.key === yx && Hx.otherTabChanged(pp.newValue)
+     }));
+     async function ux(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const Op = Ix(pp.provider, pp.key, pp.baseUrl);
+       let op = {
+         ...cp,
+         callFormat: pp.model.callFormat,
+         tools: pp.model.nativeTools ? cp.tools : void 0
+ ... (15 more added lines; see GitHub link above)
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7415-L7433` → after: `L8236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8236) · [Before (L7415-L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7415-L7433)

```diff
-       entries() {
-         return Array.from(this.iterate(!0))
-       } [Symbol.iterator]() {
-         return this.iterate(!1)
-       }
-       clear() {
-         this.mutationCount = this.mutationCount + 1 & this.mutationCountMask, this.storage.clear(), this.zeroStorage.clear(), this.itemCount = 0, this.hasBoxes = !1
-       }
-       getNumItems() {
-         return this.itemCount
-       }
-       getMutationCount() {
-         return this.mutationCount
-       }
-       getNumItemsVerySlowly() {
-         let CC = 0;
- ... (3 more removed lines; see GitHub link above)
+       var Lp, Yp, Dp
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7437-L7441` → after: `L8258-L8262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8258-L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8258-L8262) · [Before (L7437-L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7437-L7441)

```diff
-       return CC << 12 >> 12 === CC && (0 !== CC || 1 / CC > 0)
-     }
-     class gq {
-       constructor(CC, zC, ZC, QC) {
-         this.x = CC, this.y = zC, this.z = ZC, this.val = QC, Sq.add(this)
+       if ("deepseek" !== pp) return !0;
+       try {
+         return "undefined" !== typeof window && "1" === window.localStorage.getItem(qx)
+       } catch {
+         return !1
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7446-L7455` → after: `L8266-L8270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8266-L8270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8266-L8270) · [Before (L7446-L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7446-L7455)

```diff
-     function pq(CC) {
-       return "object" === typeof CC && null !== CC && Sq.has(CC)
-     }
- 
-     function Pq(CC) {
-       return Array.from(CC.keys()).sort(((CC, zC) => CC - zC))
-     }
-     class Gq extends Error {
-       constructor() {
-         super(`${Nq.name} has been mutated during iteration`)
+     function Cx() {
+       try {
+         return "undefined" !== typeof window && "1" === window.sessionStorage.getItem(Rx)
+       } catch {
+         return !1
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7458` → after: `L8273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8273) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7458)

```diff
-     class Rq {
+     const Ex = new class {
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7460-L7498` → after: `L8275-L8284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8275-L8284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8275-L8284) · [Before (L7460-L7498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7460-L7498)

```diff
-         this.cache = new Nq
-       }
-       getCachedPasskeyForChest(CC) {
-         var zC, ZC, QC;
-         const wC = this.cache.get(CC[0], CC[1], CC[2]);
-         if (!wC) return null;
-         const bC = (0, yC.c)().blockDataOwner.getBlockData(CC[0], CC[1], CC[2]),
-           nC = null !== (zC = null === bC || void 0 === bC || null === (ZC = bC.persisted) || void 0 === ZC || null === (QC = ZC.shared) || void 0 === QC ? void 0 : QC.passkeyLastUpdated) && void 0 !== zC ? zC : 0;
-         return wC.lastOpened < nC ? (this.cache.remove(CC[0], CC[1], CC[2]), null) : [...wC.passkeyOnLastOpen]
-       }
-       onChestOpened(CC, zC) {
-         this.cache.set(CC[0], CC[1], CC[2], {
-           passkeyOnLastOpen: [...zC],
-           lastOpened: Date.now()
-         })
-       }
- ... (23 more removed lines; see GitHub link above)
+         this.state = void 0, this.listeners = new Set, this.refreshing = null, this.getState = () => this.state, this.subscribe = pp => (this.listeners.add(pp), () => {
+           this.listeners.delete(pp)
+         }), this.state = {
+           picked: Cx(),
+           status: null,
+           canBuySuperRank: null
+         }, Hx.subscribe((() => {
+           null !== Hx.getState().selected && this.state.picked && this.update({
+             picked: !1
+           })
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7501-L7533` → after: `L8287-L8289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8287-L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8287-L8289) · [Before (L7501-L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7501-L7533)

```diff
-       setLocked(CC) {
-         let {
-           applyDeferred: zC = !0
-         } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         if (CC === this.locked) return;
-         if (CC) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.MN.camera.cL, void(this.locked = !0);
-         this.locked = !1;
-         const ZC = this.deferredZoom,
-           QC = this.deferredThirdPersonEndsAt;
-         if (this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, zC && (ZC && (ZC.validated ? this.setCameraZoom(ZC.zoom) : this.setCameraZoomNoValidation(ZC.zoom)), null !== QC)) {
-           const CC = QC - performance.now();
-           CC > 0 && this.applyTemporaryThirdPerson(CC === 1 / 0 ? void 0 : CC)
-         }
-       }
-       getZoomDistance() {
-         var CC, zC;
- ... (17 more removed lines; see GitHub link above)
+       isAnswering() {
+         var pp;
+         return this.state.picked && "ok" === (null === (pp = this.state.status) || void 0 === pp ? void 0 : pp.availability)
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7535-L7539` → after: `L8291-L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8291-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8291-L8293) · [Before (L7535-L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7535-L7539)

```diff
-       handleZoomKeyPressed() {
-         this.MN.pR.canUseZoomKey || pC.o.bp("showBottomMessage", {
-           message: "Zoom is disabled",
-           timeoutLength: 2e3,
-           type: "Error"
+       SW() {
+         Hx.select(null), this.update({
+           picked: !0
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7542-L7562` → after: `L8296-L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8296-L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8296-L8299) · [Before (L7542-L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7542-L7562)

```diff
-       handleScrollZoom(CC) {
-         this.locked || this.changeCameraZoom(CC)
-       }
-       setCameraZoom(CC) {
-         if (this.locked) return void(this.deferredZoom = {
-           zoom: CC,
-           validated: !0
-         });
-         const zC = CC - this.MN.camera.cL;
-         this.changeCameraZoom(zC)
-       }
-       setCameraZoomNoValidation(CC) {
-         if (this.locked) return void(this.deferredZoom = {
-           zoom: CC,
-           validated: !1
-         });
- ... (5 more removed lines; see GitHub link above)
+       unpick() {
+         this.update({
+           picked: !1
+         })
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7564-L7565` → after: `L8301-L8306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8301-L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8301-L8306) · [Before (L7564-L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7564-L7565)

```diff
-       swapCameraZoom() {
-         this.locked || (this.MN.JR.getState(this.MN.qE, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.MN.camera.cL ? this.setCameraZoom(this.MN.pR.zoomOutDistance || 3) : (this.setCameraZoom(this.MN.pR.zoomOutDistance || 3), 0 !== th … [truncated]
+       setStatus(pp) {
+         const ip = this.state.picked && Jx(pp, this.state.canBuySuperRank) && Mx(pp.provider);
+         this.update({
+           status: pp,
+           picked: ip
+         })
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7567-L7568` → after: `L8308-L8315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8308-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8308-L8315) · [Before (L7567-L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7567-L7568)

```diff
-       disableFrontFacing() {
-         this.MN.JR.getState(this.MN.qE, "cameraShake").frontFacing = !1, this.MN.camera.Qp[0] = 0, this.MN.camera.Qp[1] = 0, this.MN.camera.Qp[2] = 0
+       setCanBuySuperRank(pp) {
+         const {
+           status: ip
+         } = this.state;
+         this.update({
+           canBuySuperRank: pp,
+           picked: this.state.picked && (null === ip || Jx(ip, pp))
+         })
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7570-L7571` → after: `L8317-L8324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8317-L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8317-L8324) · [Before (L7570-L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7570-L7571)

```diff
-       enableFrontFacing() {
-         this.MN.JR.getState(this.MN.qE, "cameraShake").frontFacing = !0, this.MN.camera.Qp[0] = Math.PI, this.MN.camera.Qp[1] = 0, this.MN.camera.Qp[2] = Math.PI
+       async refresh() {
+         return this.refreshing ??= (0, SI.postToGameServer)("/ai-helper/super-bot-xd/status", {}).then((pp => {
+           this.setStatus(pp)
+         })).catch((pp => {
+           console.warn("AI Helper: Super Bot.xd's usage couldn't be checked", pp)
+         })).finally((() => {
+           this.refreshing = null
+         })), this.refreshing
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7573-L7574` → after: `L8326-L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8326-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8326-L8334) · [Before (L7573-L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7573-L7574)

```diff
-       onCameraZoomSet(CC, zC) {
-         this.MN.JR.XzC(this.MN.qE).cameraZoomSet(CC, zC), pC.o.bp("cameraZoomSet", this.MN.camera.cL), 0 === this.MN.camera.cL && this.disableFrontFacing()
+       update(pp) {
+         this.state = {
+           ...this.state,
+           ...pp
+         };
+         try {
+           window.sessionStorage.setItem(Rx, this.state.picked ? "1" : "0")
+         } catch {}
+         for (const ip of this.listeners) ip()
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7576-L7579` → after: `L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8336) · [Before (L7576-L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7576-L7579)

```diff
-     }
-     var Yq = ZC(36451),
-       dq = ZC(39e3);
-     const mq = .05;
+     };
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7581-L7618` → after: `L8338-L8342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8338-L8342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8338-L8342) · [Before (L7581-L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7581-L7618)

```diff
-     function Hq(CC, zC, ZC) {
-       return (CC[0] - zC[0]) * ZC[0] + (CC[1] - zC[1]) * ZC[1] + (CC[2] - zC[2]) * ZC[2]
-     }
-     const Eq = 1e-6;
-     const lq = "CursorAim";
-     class Xq {
-       constructor(CC, zC) {
-         this.MN = CC, this.pointerLockWrapper = zC, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = CC => {
-           cq(CC) && this.followPoint(CC.clientX, CC.clientY)
-         }, this.onPointerDown = CC => {
-           var zC;
-           "mouse" !== CC.pointerType ? "pen" !== CC.pointerType && !cq(CC) || !this.MN.container.element.contains(CC.target) || (0, Yq.h)(CC.target) || null === (zC = this.tapListener) || void 0 === zC || zC.call(this, CC.clientX, CC.clientY) : this.followPoint(CC.clientX, CC.cli … [truncated]
-         }
-       }
-       setActive(CC) {
-         CC !== this.active && (this.active = CC, this.MN.container.kE(!CC), CC ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(lq)) : (window.removeEventListener(" … [truncated]
- ... (22 more removed lines; see GitHub link above)
+     function Xx() {
+       const [pp, ip] = (0, Op.useState)(Ex.getState);
+       return (0, Op.useEffect)((() => (ip(Ex.getState()), Ex.subscribe((() => {
+         ip(Ex.getState())
+       })))), []), pp
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7622-L7775` → after: `L8346-L8359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8346-L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8346-L8359) · [Before (L7622-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7622-L7775)

```diff
-       return "mouse" === CC.pointerType || !Hn.b.get("isTouchScreen")
-     }
-     var uq = ZC(6480),
-       rq = ZC(37275),
-       sq = ZC(1887),
-       Tq = ZC(39008),
-       aq = ZC(38923);
-     class tq {
-       constructor(CC) {
-         this.MN = CC, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
-           freeCamForward: !1,
-           freeCamBackward: !1,
-           freeCamLeft: !1,
-           freeCamRight: !1,
-           freeCamUp: !1,
-           freeCamDown: !1
- ... (138 more removed lines; see GitHub link above)
+       var ip;
+       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+       if (null === pp) return "Checking whether Super Bot.xd can answer for you\u2026";
+       switch (pp.availability) {
+         case "ok":
+           return null;
+         case "guest":
+           return "Log in to use Super Bot.xd.";
+         case "tooNew":
+           return `Super Bot.xd opens once your account is a week old: ${hx((null!==(ip=pp.availableFrom)&&void 0!==ip?ip:cp)-cp)} to go.`;
+         case "noUsageLeft":
+           return pp.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(pp,ip){const cp=Math.ceil((pp-ip)/36e5);if(cp<=24)return cp<=1?"within the hour":`in ${cp} hours`;return`in ${hx(pp-ip)}`}(pp.resetsAt,cp)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+         case "unavailable":
+           return "Super Bot.xd can't answer right now. Try again later."
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7787-L7790` → after: `L8363-L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8363-L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8363-L8364) · [Before (L7787-L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7787-L7790)

```diff
-     function Vq(CC, zC, ZC, QC, wC) {
-       wC.heading = zC + CC.Qp[1] + (QC ? CC.cameraRotationOffset[1] : 0);
-       const bC = ZC + CC.Qp[0] + (QC ? CC.cameraRotationOffset[0] : 0);
-       (0, yq.j)((0, yq.c)(wC.heading, bC, kq), wC)
+     function Qx(pp) {
+       return null !== pp && !pp.isSuper && "noUsageLeft" === pp.availability
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7794-L7796` → after: `L8367-L8368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8367-L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8367-L8368) · [Before (L7794-L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7794-L7796)

```diff
-     function zF(CC, zC, ZC, QC, wC, bC) {
-       const nC = QC ? CC.cameraRotationOffset : GC().ZERO;
-       GC().set(CF, wC[0], wC[1], 0), GC().gq(CF, CF, GC().ZERO, CC.Cp + CC.Qp[2] + nC[2]), GC().io(CF, CF, GC().ZERO, ZC + CC.Qp[0] + nC[0]), GC().mo(CF, CF, GC().ZERO, zC + CC.Qp[1] + nC[1]), GC().add(bC, bC, CF)
+     function Jx(pp, ip) {
+       return "ok" === pp.availability || !1 !== ip && Qx(pp)
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7801-L7802` → after: `L8371-L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8371-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8371-L8372) · [Before (L7801-L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7801-L7802)

```diff
-     function wF(CC, zC, ZC, QC) {
-       return rq.b.copyReattachedTargetPosition(CC, ZF) ? CC.camera.Rk(ZF, zC, ZC, rq.b.getSavedZoomDistance(CC), QC) : null
+     function Bx(pp) {
+       return !0 === pp.canBuySuperRank && Qx(pp.status)
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7806` → after: `L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8376) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7806)

```diff
-       return (0, Bq.e)(CC) ? (0, uC.c)(CC) : null
+       return Bx(pp) ? null : lx(pp.status)
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7808-L7881` → after: `L8378-L8380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8378-L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8378-L8380) · [Before (L7808-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7808-L7881)

```diff
-     class nF {
-       constructor(CC, zC, ZC) {
-         this.MN = CC, this.view = zC, this.pickEntity = ZC, this.defaultPose = (0, dq.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (CC, zC, ZC) => this.pickDistance(CC, zC, ZC, this.MN.SCC), t … [truncated]
-           var QC;
-           const wC = this.pickTargetedBlockFromOutside(CC, zC, ZC);
-           return null !== (QC = this.pickEntity(CC, zC, null !== wC && void 0 !== wC ? wC : ZC)) && void 0 !== QC ? QC : wC
-         }, this.isUntargeted = CC => !this.MN.SCC(CC)
-       }
-       get localPlayerId() {
-         return this.MN.mCC
-       }
-       getEntityPosition(CC) {
-         const zC = bF(CC);
-         return null !== zC && this.MN.JR.lL(zC) ? (0, tf.getDrawnPosition)(this.MN, zC, this.feet) : null
-       }
-       getEntityAimPoint(CC) {
- ... (58 more removed lines; see GitHub link above)
+ 
+     function Tx(pp) {
+       return pp.picked && null === Nx(pp)
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7883-L7967` → after: `L8382-L8384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8382-L8384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8382-L8384) · [Before (L7883-L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7883-L7967)

```diff
-     var fF = ZC(36454);
-     class oF {
-       constructor(CC, zC, ZC) {
-         this.MN = CC, this.fN = zC, this.pointer = ZC, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
-           eye: [NaN, NaN, NaN],
-           camera: [NaN, NaN, NaN],
-           ray: [NaN, NaN, NaN]
-         }, this.cursorAim = [0, 0, 0], this.msSincePick = 1 / 0, this.tapPoint = [0, 0, 0], this.hasTapPoint = !1, this.tapAim = [0, 0, 0]
-       }
-       ZN(CC) {
-         this.msSincePick += CC
-       }
-       forgetTap() {
-         this.hasTapPoint = !1
-       }
-       aimAtClientPoint(CC, zC, ZC) {
- ... (69 more removed lines; see GitHub link above)
+ 
+     function fx(pp) {
+       return pp.picked && Bx(pp)
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7971-L7972` → after: `L8387-L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8387-L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8387-L8388) · [Before (L7971-L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7971-L7972)

```diff
-     function FF(CC, zC) {
-       return CC[0] === zC[0] && CC[1] === zC[1] && CC[2] === zC[2]
+     function bx(pp) {
+       return `Usage left: ${pp.left}`
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7979-L7980` → after: `L8391-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8391-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8391-L8393) · [Before (L7979-L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7979-L7980)

```diff
-     function NF(CC, zC, ZC, QC) {
-       WF.heading = ZC, WF.pitch = QC, (0, yq.j)(zC, WF), rq.b.setPlayerFacing(CC, WF.heading, WF.pitch)
+     function hx(pp) {
+       const ip = Math.max(1, Math.ceil(pp / XS.i));
+       return 1 === ip ? "1 day" : `${ip} days`
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L7984-L7996` → after: `L8397-L8411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8397-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8397-L8411) · [Before (L7984-L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L7984-L7996)

```diff
-       return GC().copy(zC, CC.bloxd.getLifeformEyePos(CC.qE, !1))
-     }
-     var gF = ZC(39042);
-     const SF = 4 * Math.PI;
-     class pF {
-       constructor() {
-         this.heading = 0, this.writtenHeading = 0, this.writtenPitch = 0, this.hasWritten = !1, this.pointedAt = {
-           heading: 0,
-           pitch: 0
-         }
-       }
-       followBody(CC) {
-         this.heading = CC, this.hasWritten = !1
+       const cp = "unavailable" === pp ? lx(ip) : null;
+       if (cp) return `${cp} Bot.xd is answering instead.`;
+       switch (pp) {
+         case "busy":
+           return "Super Bot.xd is busy, so Bot.xd is answering this one.";
+         case "tooLong":
+           return "That message is too big for your Super Bot.xd usage, so Bot.xd is answering this one.";
+         case "tooLarge":
+           return "That request is too large for Super Bot.xd, so Bot.xd is answering this one.";
+         case "unchecked":
+           return "Super Bot.xd's safety check is busy, so Bot.xd is answering this one.";
+         case "contextRefused":
+           return "Something in your code didn't pass Super Bot.xd's safety check, so Bot.xd is answering this one.";
+         default:
+           return "Super Bot.xd couldn't answer, so Bot.xd is answering this one."
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8031-L8035` → after: `L8414-L8428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8414-L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8414-L8428) · [Before (L8031-L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8031-L8035)

```diff
- 
-     function RF(CC, zC, ZC) {
-       const QC = SF * (ZC / 1e3),
-         wC = Math.max(-QC, Math.min(QC, (0, yq.t)(CC, zC)));
-       return (0, yq.s)(CC + wC)
+     async function nx(pp) {
+       if (function(pp) {
+           var ip, cp, Op, op, Ip, Sp, xp;
+           return pp.messages.length > 12 || pp.messages.some((pp => pp.content.length > II)) || (null !== (ip = null === (cp = pp.toolsJson) || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0) > 1e5 || (null !== (Op = null === (op = pp.request) || void 0 === op ? vo … [truncated]
+         }(pp)) return {
+         outcome: "tooLarge"
+       };
+       try {
+         return await (0, SI.postToGameServer)("/ai-helper/super-bot-xd/ask", pp)
+       } catch (ip) {
+         if (ip instanceof lS.e && 413 === ip.httpCode) return {
+           outcome: "tooLarge"
+         };
+         throw ip
+       }
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8037-L8049` → after: `L8430-L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8430-L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8430-L8431) · [Before (L8037-L8049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8037-L8049)

```diff
-     class AF {
-       constructor(CC, zC, ZC, QC, wC, bC) {
-         this.MN = CC, this.cameraController = zC, this.freeCameraController = ZC, this.cursor = QC, this.fN = void 0, this.director = void 0, this.view = new pF, this.look = {
-           VY: 0,
-           Zm: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.HCC = [0, 0, 0], this.ECC = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
-         const nC = zo.e.subscribe("gameCamera", (CC => {
-             this.setSettings(CC)
-           })),
-           fC = CC => {
-             this.update(CC)
-           };
-         CC.on("beforeRender", fC);
+     async function Fx(pp, ip) {
+       return ip ? await new Promise(((cp, Op) => {
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8051` → after: `L8433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8433) · [Before (L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8051)

```diff
-           this.lastFrameMs = performance.now()
+           Op(new DOMException("The Super Bot.xd request was stopped", "AbortError"))
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8053-L8191` → after: `L8435-L8440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8435-L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8435-L8440) · [Before (L8053-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8053-L8191)

```diff
-         CC.on("afterRender", oC);
-         const qC = () => {
-           this.detached && this.aimFromBody()
-         };
-         CC.on("beforePhysicsTick", qC);
-         const FC = () => {
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && CC.fN.jzC([])
-         };
-         CC.on("ZN", FC), QC.listenForTaps(((zC, ZC) => {
-           this.aimAtClientPoint(zC, ZC), CC.RCC()
-         }));
-         const WC = pC.o.subscribe("localPlayerTeleported", (CC => {
-           let {
-             isCorrection: zC
-           } = CC;
-           zC || this.cursorAim.forgetTap()
- ... (123 more removed lines; see GitHub link above)
+         ip.aborted ? op() : (ip.addEventListener("abort", op, {
+           once: !0
+         }), pp.then(cp, Op).finally((() => {
+           ip.removeEventListener("abort", op)
+         })))
+       })) : await pp
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8194-L8208` → after: `L8447-L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8447-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8447-L8450) · [Before (L8194-L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8194-L8208)

```diff
-     function eF(CC, zC, ZC) {
-       const QC = function(CC, zC) {
-         var ZC, QC;
-         return null !== (ZC = null !== (QC = CC.useSunPosition) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.useSunPosition) && void 0 !== ZC ? ZC : IF
-       }(CC, zC);
-       if (QC) {
-         const [QC, wC, bC] = function(CC, zC) {
-           var ZC, QC;
-           return null !== (ZC = null !== (QC = CC.sunPosition) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.sunPosition) && void 0 !== ZC ? ZC : iF
-         }(CC, zC), nC = new UC.Eg(QC, wC, bC);
-         nC.normalize(), void 0 !== ZC && nC.scaleInPlace(-1);
-         const {
-           x: fC,
-           y: oC,
-           z: qC
+     function zx() {
+       Zx ??= Promise.resolve().then((() => cp(2320))), Zx.then((pp => {
+         let {
+           purchasesAllowed: ip
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8210-L8241` → after: `L8452-L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8452-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8452-L8495) · [Before (L8210-L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8210-L8241)

```diff
-         return {
-           x: fC,
-           y: oC,
-           z: qC
-         }
-       }
-       const wC = null !== ZC && void 0 !== ZC ? ZC : vF(CC, zC),
-         bC = function(CC, zC) {
-           var ZC, QC;
-           return null !== (ZC = null !== (QC = CC.azimuth) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.azimuth) && void 0 !== ZC ? ZC : .55
-         }(CC, zC),
-         nC = function(CC, zC) {
-           var ZC, QC;
-           return null !== (ZC = null !== (QC = CC.up) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.up) && void 0 !== ZC ? ZC : JF
-         }(CC, zC),
-         fC = Math.PI * (wC - .5),
- ... (16 more removed lines; see GitHub link above)
+         Ex.setCanBuySuperRank(ip())
+       }), (pp => {
+         Zx = null, console.warn("AI Helper: couldn't find out whether Super rank is sold here", pp)
+       }))
+     }
+     let sx = !1,
+       Kx = null;
+     async function Vx() {
+       if (sx) return !0;
+       sx = !0;
+       try {
+         var pp;
+         if (await Ex.refresh(), !fx(Ex.getState())) return !1;
+         document.activeElement instanceof HTMLElement && document.activeElement.blur();
+         const [{
+           NotificationProvider: ip
+ ... (28 more added lines; see GitHub link above)
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8245-L8250` → after: `L8499-L8659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8499-L8659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8499-L8659) · [Before (L8245-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8245-L8250)

```diff
-       disableLighting: !0,
-       backFaceCulling: !1,
-       diffuseColor: [0, 0, 0],
-       specularColor: [0, 0, 0],
-       disableDepthWrite: !0
-     };
+         wood: ["Maple Log"],
+         log: ["Maple Log"],
+         logs: ["Maple Log"],
+         "wood log": ["Maple Log"],
+         "wood block": ["Maple Log"],
+         "wooden block": ["Maple Log"],
+         "tree log": ["Maple Log"],
+         "oak wood": ["Maple Log"],
+         planks: ["Maple Wood Planks"],
+         plank: ["Maple Wood Planks"],
+         "wood planks": ["Maple Wood Planks"],
+         "wood plank": ["Maple Wood Planks"],
+         "wooden planks": ["Maple Wood Planks"],
+         "oak planks": ["Maple Wood Planks"],
+         leaves: ["Maple Leaves"],
+         door: ["Maple Door"],
+ ... (145 more added lines; see GitHub link above)
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8253` → after: `L8662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8662) · [Before (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8253)

```diff
-       return null !== CC && CC > 0
+       return pp.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter((pp => pp.length > 1))
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8255-L8386` → after: `L8664-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8664-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8664-L8666) · [Before (L8255-L8386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8255-L8386)

```diff
-     class YF {
-       constructor(CC) {
-         this.MN = CC, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const zC = this.MN.pR.skyBox;
-         "object" === typeof zC && "earth" === zC.type && (this.earthSkyBox = zC), this.sunOpacity = this.MN.pR.dayNightSunOpacity, this.moonOpacity = this.MN.pR.dayNightMoonOpacity;
-         const ZC = zo.e.subscribe("dayNightSunOpacity", (CC => {
-             this.setSunOpacity(CC)
-           })),
-           QC = zo.e.subscribe("dayNightMoonOpacity", (CC => {
-             this.setMoonOpacity(CC)
-           })),
-           wC = zo.e.subscribe("dayNightStarOpacity", (CC => {
-             this.setStarOpacity(CC)
-           })),
-           bC = zo.e.subscribe("skyBox", (CC => {
-             this.onSkyBoxUpdated(CC)
- ... (116 more removed lines; see GitHub link above)
+ 
+     function SL(pp) {
+       return pp.length > 4 && pp.endsWith("ies") ? `${pp.slice(0,-3)}y` : pp.length > 3 && pp.endsWith("s") && !pp.endsWith("ss") ? pp.slice(0, -1) : pp
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8389-L8421` → after: `L8669-L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8669-L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8669-L8672) · [Before (L8389-L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8389-L8421)

```diff
-     function dF(CC, zC, ZC) {
-       const QC = {
-         url: ZC,
-         noMipmap: !1,
-         invertY: null,
-         samplingMode: xC.h.nearest,
-         sets: {
-           hasAlpha: !0
-         }
-       };
-       return (0, DC.d)({
-         name: zC,
-         sS: CC,
-         sets: {
-           ...hF,
-           emissiveColor: [1, 1, 1],
- ... (17 more removed lines; see GitHub link above)
+     function xL(pp) {
+       return new Set(IL(pp).map((pp => SL(pp))))
+     }
+     const LL = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(|^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)/gm;
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8423-L8424` → after: `L8674-L8675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8674-L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8674-L8675) · [Before (L8423-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8423-L8424)

```diff
-     function DF() {
-       return (0, TF.k)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
+     function YL(pp) {
+       return pp.split("\n").map((pp => pp.replace(/\/\/.*$/, "").replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""'))).join("\n").replace(/\/\*[^]*?\*\//g, (pp => pp.replace(/[^\n]/g, ""))).split("\n")
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8428` → after: `L8679-L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8679-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8679-L8686) · [Before (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8428)

```diff
-       return `${CC.getMode()}|${CC.lS()}`
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       const cp = [],
+         Op = new Set,
+         op = YL(ip ? pp : (0, vi.r)(pp, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, vi.m, (() => "projectRequire"))),
+         Ip = new Set([...op.join("\n").matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)/g)].map((pp => pp[1])));
+       return op.forEach(((pp, ip) => {
+         for (const op of (0, vi.f)(pp, /(global|window|document|process|require)\b\s*[.([]/g, vi.m)) Op.has(op[1]) || Ip.has(op[1]) || (Op.add(op[1]), cp.push(`Line ${ip+1} uses "${op[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+       })), cp
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8432` → after: `L8690-L8704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8690-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8690-L8704) · [Before (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8432)

```diff
-       console.error(`Shader pack failed to compile for "${CC.failure.material}":`, CC.failure.message)
+       const ip = pp.split("\n"),
+         cp = [];
+       return ip.forEach(((pp, Op) => {
+         var op, Ip, Sp, xp, Lp;
+         const Yp = pp.indexOf("api.setCurrency(");
+         if (-1 === Yp) return;
+         const Dp = ip.slice(Op, Op + 3).join(" ").slice(Yp),
+           Ap = Dp.slice(0, Dp.indexOf("}") + 1 || void 0),
+           Pp = null === (op = /amount\s*:\s*(\d+)/.exec(Ap)) || void 0 === op ? void 0 : op[1];
+         if (!/persistent\s*:\s*true/.test(Ap) || void 0 === Pp) return;
+         const Wp = [null !== (Ip = ip[Op - 2]) && void 0 !== Ip ? Ip : "", null !== (Sp = ip[Op - 1]) && void 0 !== Sp ? Sp : "", pp.slice(0, Yp)].join(" ");
+         if (/\bif\s*\(|\belse\b|\?\s*$|&&\s*$/.test(Wp)) return;
+         const yp = null !== (xp = null === (Lp = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Ap)) || void 0 === Lp ? void 0 : Lp[1]) && void 0 !== xp ? xp : "coins";
+         cp.push(`Line ${Op+1} sets the saved "${yp}" back to ${Pp} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${yp}") is null.`)
+       })), cp
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8434-L8567` → after: `L8706-L8715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8706-L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8706-L8715) · [Before (L8434-L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8434-L8567)

```diff
-     const LF = new class {
-       constructor(CC) {
-         this.page = CC, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, pC.o.subscribe(tF, (CC => {
-           let {
-             game: zC,
-             translationKey: ZC,
-             reasonKey: QC
-           } = CC;
-           zC === this.game && this.inGame && pC.o.bp("chat", (0, rF.j)(ZC, QC))
-         }))
-       }
-       async applyForGame(CC, zC, ZC) {
-         this.leaveGame(), this.notifiedModelFallback = !1;
-         const QC = this.startCheck(),
-           wC = () => ZC() || QC(),
-           bC = await this.joinResult(CC, zC, wC);
- ... (118 more removed lines; see GitHub link above)
+ 
+     function PL(pp) {
+       var ip, cp;
+       const Op = null !== (ip = null === (cp = pp.split("### Parameters:")[1]) || void 0 === cp ? void 0 : cp.split("###")[0]) && void 0 !== ip ? ip : "",
+         op = [];
+       for (const Ip of Op.split("\n")) {
+         const pp = /^\|\s*([A-Za-z_$][\w$]*)\s*\|(?:\s*`([^`]*)`)?/.exec(Ip);
+         pp && "Parameter" !== pp[1] && op.push({
+           name: pp[1],
+           type: pp[2]
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8570-L8595` → after: `L8718-L8745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8718-L8745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8718-L8745) · [Before (L8570-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8570-L8595)

```diff
-       recheck(CC) {
-         if (!this.inGame || !CC) return;
-         const zC = this.startCheck();
-         if (!CC.isRunning()) return;
-         const ZC = jF(CC);
-         ZC !== this.lastPassedCheck && this.runCheck(CC, zC, "skipped").then((CC => {
-           zC() || ("failed" === CC.status ? (yF(CC), this.failInGame()) : "ok" === CC.status && (this.lastPassedCheck = ZC))
-         }))
-       }
-       startCheck() {
-         const CC = ++this.checkGeneration;
-         return () => CC !== this.checkGeneration
-       }
-       async runCheck(CC, zC, ZC) {
-         this.checksRunning++;
-         try {
- ... (10 more removed lines; see GitHub link above)
+       return op
+     }
+ 
+     function WL(pp) {
+       return PL(pp).map((pp => pp.name))
+     }
+     const yL = "(\"[^\"\\n]*\"|'[^'\\n]*')";
+ 
+     function UL(pp, ip) {
+       const cp = [];
+       let Op = 0,
+         op = "",
+         Ip = "",
+         Sp = ip;
+       for (let xp = ip; xp < pp.length; xp++) {
+         const ip = pp[xp];
+ ... (12 more added lines; see GitHub link above)
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8597-L8600` → after: `L8747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8747) · [Before (L8597-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8597-L8600)

```diff
-         } finally {
-           this.checksRunning--, 0 === this.checksRunning && this.heldFailures.length > 0 && setTimeout((() => {
-             this.releaseHeldFailures()
-           }), 0)
+           "," === ip && 0 === Op && (cp.push((Ip + pp.slice(Sp, xp)).trim()), Ip = "", Sp = xp + 1)
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8603-L8663` → after: `L8750-L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8750-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8750-L8880) · [Before (L8603-L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8603-L8663)

```diff
-       releaseHeldFailures() {
-         if (this.checksRunning > 0) return;
-         const CC = this.heldFailures;
-         this.heldFailures = [];
-         const zC = this.inGame ? CC.find((CC => CC.stillCounts())) : void 0;
-         zC && (zC.log(), this.failInGame())
-       }
-       failInGame() {
-         this.lastPassedCheck = null, this.endGame(), pC.o.bp(rF.f, "shaderPack:failedToCompile")
-       }
-       notifyModelFallback() {
-         this.notifiedModelFallback || (this.notifiedModelFallback = !0, this.notify("shaderPack:modelsWithoutPack"))
-       }
-       notify(CC, zC) {
-         const ZC = {
-           game: this.game,
- ... (45 more removed lines; see GitHub link above)
+       return []
+     }
+ 
+     function wL(pp, ip) {
+       var cp;
+       if (!/^[A-Za-z_$][\w$]*$/.test(ip)) return;
+       const Op = ip.replaceAll("$", "\\$"),
+         op = `\\((?:[^()]*[\\s,])?${Op}(?![\\w$])[^()]*\\)`,
+         Ip = new RegExp(`(?:const|let|var)\\s+${Op}(?![\\w$])|${Op}\\s*(?:\\+?=(?![=>])|=>)|${op}\\s*=>|function\\s*[\\w$]*\\s*${op}`, "g");
+       return 1 === (0, vi.f)(pp, Ip, vi.m).length ? null === (cp = new RegExp(`\\b(?:const|let|var)\\s+${Op}\\s*=\\s*${yL}\\s*(?:;|//|$)`, "m").exec(pp)) || void 0 === cp ? void 0 : cp[1] : void 0
+     }
+ 
+     function vL(pp, ip, cp) {
+       let Op;
+       const op = function(pp) {
+         const ip = pp.split("\n").slice(1).map((pp => pp.trim())).find((pp => "" !== pp && !pp.startsWith("#") && !pp.startsWith("|") && !pp.startsWith("**") && !pp.startsWith("```")));
+ ... (115 more added lines; see GitHub link above)
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8665-L8674` → after: `L8882-L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8882-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8882-L8961) · [Before (L8665-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8665-L8674)

```diff
-       newSkybox(CC) {
-         const zC = "string" === typeof CC ? CC : CC.type,
-           ZC = SC.c.getSkyBox(zC);
-         if (void 0 === ZC && "earth" !== zC) return void console.error(`Skybox "${zC}" not found, ignoring update...`);
-         this.updateSunDirection(zC, CC, ZC);
-         const QC = ++this.skyBoxRequestId;
-         if ("object" === typeof CC && "earth" === CC.type && this.earthSkyKey) {
-           var wC;
-           const zC = ZC;
-           if (zW(CC, zC) === (null === (wC = (0, EF.e)(this.earthSkyKey)) || void 0 === wC ? void 0 : wC.dithering)) return void CW(this.skyBoxMesh, this.earthSkyKey, CC, zC)
+     }))
+   }
+   return [...cp].map((pp => `"${pp}" isn't an item or block name.${dL(this.suggestNames(pp))}`))
+ }
+ aliasedItemNames(pp) {
+   const ip = new Set(this.itemAndBlockNames),
+     cp = new Map,
+     Op = /(?:[[,:]|(?:^|[^=!<>])=)\s*(["'])([A-Z][a-z]+(?: [A-Z][a-z]+)+)\1(?=\s*(?:[,\]});]|\/\/|$))/gm;
+   for (const op of pp.matchAll(Op)) {
+     const pp = op[2],
+       Op = ip.has(pp) ? void 0 : this.suggestNames(pp);
+     null !== Op && void 0 !== Op && Op.isDecided && Op.isSure && cp.set(pp, Op.names[0])
+   }
+   return [...cp].map((pp => {
+     let [ip, cp] = pp;
+     return `"${ip}" isn't an item or block name, so giving or selling it fails. Did you mean "${cp}"?`
+ ... (64 more added lines; see GitHub link above)
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8676-L8799` → after: `L8963-L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8963-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8963-L8972) · [Before (L8676-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8676-L8799)

```diff
-         const {
-           sS: bC,
-           CS: nC
-         } = this.MN.Vg, fC = "earth" === zC || "earth" === ZC.type;
-         if (fC && nC) {
-           (0, HF.b)();
-           const zC = {};
-           return CW(null, zC, CC, ZC), void this.showSkyBox(null, zC)
-         }
-         const oC = (0, RC.n)(this.MN.Vg, mF.b.SKYBOX, (0, AC.i)()),
-           qC = fC ? (0, UF.j)(bC) : null;
-         if (qC) CW(oC, qC, CC, ZC), qC.fogEnabled = !0, oC.material = qC;
-         else if ("custom" === ZC.type) {
-           const CC = [ZC.px, ZC.py, ZC.pz, ZC.nx, ZC.ny, ZC.nz],
-             zC = (0, BF.e)(Hn.b.get("clientEscMenuOptions").pixelScale),
-             QC = (0, BF.j)(CC, zC, (0, Oq.getSettingsFov)()),
- ... (108 more removed lines; see GitHub link above)
+       }))
+     }(pp)) {
+     const pp = this.byName.get(cp);
+     if ("callback" === (null === pp || void 0 === pp ? void 0 : pp.kind))
+       for (const op of Op.matchAll(/\breturn\s+["']((?:[Pp]revent|[Cc]ancel|[Ss]top|[Bb]lock|[Dd]eny)\w*)["']/g)) {
+         const Op = op[1];
+         if (pp.text.includes(`"${Op}"`)) continue;
+         const Ip = [...new Set([...pp.text.matchAll(/Return "(prevent[A-Za-z]*)"/g)].map((pp => pp[1])))],
+           Sp = Ip.length > 0 ? `Did you mean ${Ip.map((pp=>`"${pp}"`)).join(" or ")}?` : /Return false/i.test(pp.text) ? `To stop it, return false instead of "${Op}".` : "Check Show Docs for what it can return.";
+         ip.add(`${cp} can't use "${Op}" to stop anything. ${Sp}`)
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8802-L8930` → after: `L8996-L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8996-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L8996-L9050) · [Before (L8802-L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8802-L8930)

```diff
-     const kF = [183 / 255, 191 / 255, 195 / 255],
-       VF = new WeakMap;
- 
-     function CW(CC, zC, ZC, QC) {
-       var wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, sC, TC;
-       const aC = null === (wC = null !== (bC = ZC.infiniteDistance) && void 0 !== bC ? bC : null === QC || void 0 === QC ? void 0 : QC.infiniteDistance) || void 0 === wC || wC;
-       CC && (CC.infiniteDistance = aC);
-       const tC = null !== (nC = ZC.sunPosition) && void 0 !== nC ? nC : null === QC || void 0 === QC ? void 0 : QC.sunPosition,
-         DC = null !== (fC = ZC.up) && void 0 !== fC ? fC : null === QC || void 0 === QC ? void 0 : QC.up;
-       (0, JC.ab)(zC, {
-         infiniteDistance: aC,
-         inclination: null !== (oC = null !== (qC = ZC.inclination) && void 0 !== qC ? qC : null === QC || void 0 === QC ? void 0 : QC.inclination) && void 0 !== oC ? oC : -.2,
-         turbidity: null !== (FC = null !== (WC = ZC.turbidity) && void 0 !== WC ? WC : null === QC || void 0 === QC ? void 0 : QC.turbidity) && void 0 !== FC ? FC : 10,
-         luminance: null !== (NC = null !== (MC = ZC.luminance) && void 0 !== MC ? MC : null === QC || void 0 === QC ? void 0 : QC.luminance) && void 0 !== NC ? NC : .1,
-         rayleigh: null !== (gC = null !== (SC = ZC.rayleigh) && void 0 !== SC ? SC : null === QC || void 0 === QC ? void 0 : QC.rayleigh) && void 0 !== gC ? gC : 2,
-         mieCoefficient: null !== (pC = null !== (PC = ZC.mieCoefficient) && void 0 !== PC ? PC : null === QC || void 0 === QC ? void 0 : QC.mieCoefficient) && void 0 !== pC ? pC : .005,
- ... (113 more removed lines; see GitHub link above)
+   }
+   const op = pp.trim().replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/\s+/).map((pp => Object.hasOwn(iL, pp) ? iL[pp] : pp)).filter(Boolean).join(" "),
+     Ip = null !== (ip = this.namesByLowerCase.get(cp)) && void 0 !== ip ? ip : this.namesByLowerCase.get(op);
+   if (Ip) return {
+     names: [Ip],
+     isSure: !0,
+     isDecided: !0
+   };
+   const Sp = this.closestItemAndBlockNames(op),
+     xp = pp => IL(pp).filter((pp => !oL.has(pp) && !HL.has(pp))).map(SL),
+     Lp = 1 === Sp.length ? xp(Sp[0]) : [];
+   return {
+     names: Sp,
+     isSure: 1 === Sp.length && xp(op).every((pp => Lp.includes(pp))),
+     isDecided: !1
+   }
+ ... (39 more added lines; see GitHub link above)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8932-L8944` → after: `L9052-L9160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9052-L9160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9052-L9160) · [Before (L8932-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8932-L8944)

```diff
-     nW.allRenderers = {}, nW.tickHandler = void 0;
-     const fW = XC.x / 2,
-       oW = Math.PI / 2,
-       qW = [(CC, zC, ZC) => [
-         [CC, XC.x, zC, fW, ZC, 0, 0],
-         [CC, XC.x, zC, fW, ZC, oW, 0]
-       ], (CC, zC, ZC) => [
-         [XC.x, CC, fW, zC, ZC, 0, 0],
-         [XC.x, CC, fW, zC, ZC, 0, oW]
-       ], (CC, zC, ZC) => [
-         [CC, XC.x, ZC, zC, fW, 0, oW],
-         [XC.x, CC, ZC, zC, fW, oW, 0]
-       ]];
+     op(Ap, pp)
+   }
+   return [...Op.entries()].filter((pp => {
+     let [ip, cp] = pp;
+     return cp > .5 && "prefab" !== ip.kind
+   })).sort(((pp, ip) => ip[1] - pp[1])).slice(0, cp).map((pp => {
+     let [ip] = pp;
+     return ip
+   }))
+ }
+ section(pp) {
+   var ip, cp;
+   const Op = pp.trim().replace(/^api\./, "").replace(/\(.*$/, ""),
+     op = Op.toLowerCase();
+   return null !== (ip = null !== (cp = this.byName.get(Op)) && void 0 !== cp ? cp : this.sections.find((pp => pp.name.toLowerCase() === op))) && void 0 !== ip ? ip : null
+ }
+ ... (93 more added lines; see GitHub link above)
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L8946-L9071` → after: `L9162-L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9162-L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9162-L9276) · [Before (L8946-L9071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L8946-L9071)

```diff
-     function FW(CC) {
-       return 0 === CC ? -.01 : CC === XC.x ? XC.x + wW : CC + wW
-     }
-     const WW = Math.ceil(100) + 2,
-       NW = 1 + 3 * (WW - 1);
-     class MW {
-       constructor(CC) {
-         this.MN = CC, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(WW), this.sampleZ = new Float64Array(WW), this.sampleY = new Float64Array(WW), this.sampleAirborne = new Uint8Array(WW), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
-           sampleX: this.sampleX,
-           sampleY: this.sampleY,
-           sampleZ: this.sampleZ,
-           sampleAirborne: this.sampleAirborne,
-           perp: this.perp,
-           direction: this.direction,
-           worldOffset: this.worldOffset
-         }, NW);
- ... (110 more removed lines; see GitHub link above)
+ function mL(pp, ip) {
+   const cp = [],
+     Op = op => {
+       Rp().isCallExpression(op) && op.expression.getText(pp) === ip && cp.push(op), Rp().forEachChild(op, Op)
+     };
+   return Op(pp), cp
+ }
+ const RL = /^"([^"]+)" isn't an item or block name\b.*Did you mean "([^"]+)"\?$/,
+   qL = /^"([^"]+)" isn't a block or item name, so comparing with it\b.*Did you mean "([^"]+)"\?$/,
+   ML = /^"([^"]+)" (?:is an item, not a block|isn't a block or item name, so comparing a block with it)\b.*Did you mean "([^"]+)"\?$/,
+   CL = /^([\w$]+) can't use "([^"]+)" to stop anything\. Did you mean "([^"]+)"\?$/,
+   EL = /^Line \d+ calls ([\w$]+) without "api\.", so it throws there\. Did you mean (api\.[\w$]+)\?$/,
+   XL = /^Line \d+ uses "([\w$]+)", which is never set, so it throws there\. Did you mean "([\w$]+)"\?$/,
+   lL = /^Line \d+ uses "global", which World Code doesn't have\b/,
+   QL = /^([\w$.]+) has no setting called "([^"]+)"\. Did you mean "([^"]+)"\?$/,
+   JL = /^([\w$.]+) can't take null as [\w$]+ \(value (\d+)\): leave it out,/,
+ ... (99 more added lines; see GitHub link above)
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9073-L9092` → after: `L9278-L9291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9278-L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9278-L9291) · [Before (L9073-L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9073-L9092)

```diff
-           of SW.f[zC].positions) ZC.push([CC[0] + wC, CC[1] + bC, CC[2] + nC]);
-         return ZC
-       }
-       getMultiblockInfo(CC, zC, ZC) {
-         if (CC in SW.b) {
-           const QC = {
-               positions: []
-             },
-             {
-               mainMultiblock: wC,
-               rootX: bC,
-               rootY: nC,
-               rootZ: fC
-             } = this.getMultiblockRoot(CC, zC[0], zC[1], zC[2]);
-           for (const {
-               block: CC,
- ... (4 more removed lines; see GitHub link above)
+         },
+         Sp = [],
+         xp = (pp, ip) => {
+           if (Rp().isPropertyAssignment(pp) || Rp().isShorthandPropertyAssignment(pp)) {
+             const {
+               name: op
+             } = pp;
+             if ((Rp().isIdentifier(op) || Rp().isStringLiteral(op)) && op.text === cp) {
+               const xp = pp.parent.properties.some((pp => Ec(pp) === Op));
+               Sp.push({
+                 edit: Ip(op, Rp().isShorthandPropertyAssignment(pp) ? `${Op}: ${cp}` : Op),
+                 depth: ip,
+                 aW: xp
+               })
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9094-L9104` → after: `L9293-L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9293-L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9293-L9360) · [Before (L9094-L9104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9094-L9104)

```diff
-             of SW.f[wC].positions) {
-             const wC = bC + oC,
-               WC = nC + qC,
-               NC = fC + FC,
-               MC = this.bloxd.rG(wC, WC, NC);
-             ZC && MC !== zC || QC.positions.push({
-               block: CC,
-               id: zC,
-               x: wC,
-               y: WC,
-               z: NC
+           }
+           Rp().isFunctionLike(pp) || Rp().isCallExpression(pp) || Rp().isNewExpression(pp) || Rp().isTaggedTemplateExpression(pp) || Rp().isPropertyAccessExpression(pp) || Rp().isElementAccessExpression(pp) || Rp().forEachChild(pp, (cp => {
+             xp(cp, ip + (Rp().isPropertyAssignment(pp) ? 1 : 0))
+           }))
+         },
+         Lp = mL(op, ip);
+       for (const Yp of Lp)
+         for (const pp of Yp.arguments) xp(pp, 0);
+       if (Sp.length > 0) {
+         const ip = Math.min(...Sp.map((pp => pp.depth)));
+         return Jc(pp, Sp.flatMap((pp => pp.depth !== ip || pp.aW ? [] : [pp.edit])))
+       }
+       return Jc(pp, Lp.flatMap((pp => {
+         const ip = pp.arguments.find((pp => Rp().isStringLiteral(pp) && pp.text === cp));
+         return ip ? [Ip(ip, Op)] : []
+       })))
+ ... (52 more added lines; see GitHub link above)
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9107-L9139` → after: `L9363-L9750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9363-L9750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9363-L9750) · [Before (L9107-L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9107-L9139)

```diff
-           return QC
-         }
-         return {
-           positions: [{
-             block: (0, FC.e)(CC),
-             id: CC,
-             x: zC[0],
-             y: zC[1],
-             z: zC[2]
-           }]
-         }
-       }
-       getMultiblockRoot(CC, zC, ZC, QC) {
-         const {
-           mainMultiblock: wC,
-           compX: bC,
- ... (17 more removed lines; see GitHub link above)
+           Rp().forEachChild(pp, (pp => {
+             Sp(pp, Lp)
+           }))
+         };
+       return Sp(op, !1), Jc(pp, Ip)
+     }(pp, cp, Op, "call" === op);
+     if ("compared" === op || "comparedBlock" === op) {
+       const ip = `(["'])${function(pp){return pp.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(cp)}\\1`;
+       return ("comparedBlock" === op ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${ip}`, `${ip}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${ip}`, `${ip}\\s*[!=]==?`, `\\bcase\\s+${ip}\\s*:`, `\\.includes\\(\\s*${ip}\\s*\\)`]).reduce(((pp, ip) => pp.replace(new RegExp(ip, "g"), … [truncated]
+     }
+     if (void 0 !== Ip) {
+       return Fp(pp).filter((pp => pp.name === Ip && pp.topLevel)).reduceRight(((pp, ip) => pp.slice(0, ip.from) + bL(pp.slice(ip.from, ip.to), cp, Op) + pp.slice(ip.to)), pp)
+     }
+     return bL(pp, cp, Op)
+   }), pp)
+ }
+ ... (372 more added lines; see GitHub link above)
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9141-L9144` → after: `L9752-L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9752-L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9752-L9754) · [Before (L9141-L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9141-L9144)

```diff
-           mainMultiblock: wC,
-           rootX: oC,
-           rootY: qC,
-           rootZ: FC
+           id: pp.id,
+           at: null !== (cp = pp.usedAt) && void 0 !== cp ? cp : 0,
+           i: ip
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9146-L9147` → after: `L9756-L9771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9756-L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9756-L9771) · [Before (L9146-L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9146-L9147)

```diff
-       }
-       TY(CC, zC, ZC, QC) {
+       })).sort(((pp, ip) => ip.at - pp.at || ip.i - pp.i));
+       return new Set(ip.slice(0, 2).map((pp => {
+         let {
+           id: ip
+         } = pp;
+         return ip
+       })))
+     }(Ap))),
+     [mp, Rp] = (0, Op.useState)(new Set),
+     qp = pp => pp.models.some((ip => Pp({
+       keyId: pp.id,
+       modelId: ip.id
+     }))),
+     Mp = pp => {
+       const ip = pp.closest(".WorldCodeAiModelGroupHeader");
+       dp(null), setTimeout((() => {
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9149-L9184` → after: `L9773-L9836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9773-L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9773-L9836) · [Before (L9149-L9184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9149-L9184)

```diff
-         let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.bloxdSetBlockNoMulti,
-           nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
-         const fC = this.bloxd.rG(CC, zC, ZC),
-           oC = null !== (wC = this.getRestoredTop(CC, zC, ZC, fC, QC, nC)) && void 0 !== wC ? wC : QC;
-         if (fC in SW.b) {
-           const {
-             mainMultiblock: QC,
-             rootX: wC,
-             rootY: nC,
-             rootZ: oC
-           } = this.getMultiblockRoot(fC, CC, zC, ZC);
-           for (const {
-               id: CC,
-               x: zC,
-               y: ZC,
-               z: fC
- ... (20 more removed lines; see GitHub link above)
+         null === ip || void 0 === ip || null === (pp = ip.querySelector(".WorldCodeAiModelRemove")) || void 0 === pp || pp.focus()
+       }))
+     },
+     Cp = `${ip}-model`,
+     Ep = (pp, ip, Op) => {
+       var op;
+       return (0, Sp.jsx)(LY, {
+         name: pp,
+         hint: ip,
+         choice: Op,
+         selected: Pp(Op) && !(null === Op && Up.picked && null === wp),
+         radioName: Cp,
+         onSelect: () => {
+           Wp(Op), Ex.unpick()
+         },
+         onChosen: cp
+ ... (48 more added lines; see GitHub link above)
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9186-L9193` → after: `L9838-L9903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9838-L9903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9838-L9903) · [Before (L9186-L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9186-L9193)

```diff
-             of SW.f[QC].positions) {
-             const QC = CC + qC - wC,
-               MC = zC + WC - nC,
-               gC = ZC + NC - fC;
-             if (!this.bloxd.Gy(QC, MC, gC)) continue;
-             const SC = this.bloxd.rG(QC, MC, gC),
-               pC = !this.MN.qM.Sy(SC);
-             bC(QC, MC, gC, FC.g[oC].id, pC)
+           }) : (0, Sp.jsx)(xY, {
+             savedKey: pp,
+             isInUse: qp(pp),
+             onEdit: Ip ? () => {
+               Ip(pp)
+             } : void 0,
+             onRename: op ? () => {
+               tp(pp.id)
+             } : void 0
+           }), Lp && Hp !== pp.id && (0, Sp.jsx)("button", {
+             className: "WorldCodeAiLinkButton WorldCodeAiModelRefresh",
+             "aria-label": `Check ${wp} for new models`,
+             disabled: null === Yp || void 0 === Yp ? void 0 : Yp.has(pp.id),
+             onClick: () => {
+               Lp(pp)
+             },
+ ... (50 more added lines; see GitHub link above)
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9195-L9203` → after: `L9905-L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR9905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L9905-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L9905-L10030) · [Before (L9195-L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9195-L9203)

```diff
-         } else bC(CC, zC, ZC, oC, !0);
-         this.updateAttachedTop(CC, zC, ZC, fC, oC, bC, nC)
-       }
-       holdsRestoredTop(CC, zC, ZC, QC) {
-         var wC, bC;
-         const nC = null === (wC = FC.g[QC]) || void 0 === wC ? void 0 : wC.attachedTop;
-         return !!nC && (null === (bC = FC.g[this.bloxd.rG(CC, zC, ZC)]) || void 0 === bC ? void 0 : bC.meta.rootId) === FC.g[nC].meta.rootId
-       }
-       getRestoredTop(CC, zC, ZC, QC, wC, bC) {
+         }), Qp.map((ip => Ep(ip.name, ip.tier ? Sx[ip.tier] : "", {
+           keyId: pp.id,
+           modelId: ip.id
+         }))), Cp && pp.models.length > 1 && (0, Sp.jsxs)("button", {
+           className: "WorldCodeAiKeyLearnMore WorldCodeAiModelUnfold",
+           "aria-label": `Show all ${wp} models`,
+           onClick: ip => {
+             const cp = ip.currentTarget.closest(".WorldCodeAiModelGroup");
+             Rp((ip => new Set(ip).add(pp.id))), setTimeout((() => {
+               var pp;
+               null === cp || void 0 === cp || null === (pp = cp.querySelector("input")) || void 0 === pp || pp.focus()
+             }))
+           },
+           children: ["Show all ", pp.models.length, " models"]
+         })]
+       }, pp.id)
+ ... (110 more added lines; see GitHub link above)
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9205-L9353` → after: `L10032-L10172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10032-L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10032-L10172) · [Before (L9205-L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9205-L9353)

```diff
-         const fC = FC.g[wC],
-           oC = (null === fC || void 0 === fC ? void 0 : fC.attachedTop) && FC.g[fC.attachedTop],
-           qC = null === (nC = FC.g[QC]) || void 0 === nC ? void 0 : nC.meta.rootId;
-         if (null === bC || !oC || qC === fC.meta.rootId || qC === oC.meta.rootId || !this.bloxd.Gy(CC, zC - 1, ZC)) return null;
-         const WC = FC.g[this.bloxd.rG(CC, zC - 1, ZC)];
-         return (null === WC || void 0 === WC ? void 0 : WC.meta.rootId) === fC.meta.rootId ? FC.g[WC.attachedTop].id : null
-       }
-       updateAttachedTop(CC, zC, ZC, QC, wC, bC, nC) {
-         var fC, oC, qC;
-         const WC = null === (fC = FC.g[QC]) || void 0 === fC ? void 0 : fC.attachedTop,
-           NC = null === (oC = FC.g[wC]) || void 0 === oC ? void 0 : oC.attachedTop;
-         if (!WC && !NC || !this.bloxd.Gy(CC, zC + 1, ZC)) return;
-         const MC = this.bloxd.rG(CC, zC + 1, ZC),
-           gC = !!WC && (null === (qC = FC.g[MC]) || void 0 === qC ? void 0 : qC.meta.rootId) === FC.g[WC].meta.rootId,
-           SC = NC ? FC.g[NC].id : 0;
-         WC && NC && FC.g[QC].meta.rootId === FC.g[wC].meta.rootId ? gC && MC !== SC && bC(CC, zC + 1, ZC, SC, !0) : !NC || !gC && 0 !== MC || null !== nC && !this.placerCanAddTop(nC, CC, zC + 1, ZC, SC) ? gC && bC(CC, zC + 1, ZC, 0, !0) : bC(CC, zC + 1, ZC, SC, !0)
- ... (133 more removed lines; see GitHub link above)
+         null === (pp = wp.current) || void 0 === pp || pp.focus()
+       }))
+     },
+     [tp, Hp] = (0, Op.useState)(new Set),
+     [dp, ep] = (0, Op.useState)(null);
+   return (0, Sp.jsxs)("div", {
+     className: "WorldCodeAiAiSettings",
+     children: [cp && (0, Sp.jsxs)("div", {
+       className: "WorldCodeAiAiSettingsSection",
+       children: [(0, Sp.jsx)(cY, {
+         allow: ip,
+         onChange: pp => {
+           Dp(null), cp(pp)
+         }
+       }), (0, Sp.jsx)("p", {
+         className: "WorldCodeAiAiSettingsNote",
+ ... (125 more added lines; see GitHub link above)
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9355-L9382` → after: `L10174-L10219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10174-L10219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10174-L10219) · [Before (L9355-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9355-L9382)

```diff
-       }
-       sanitiseBlockData(CC) {
-         var zC, ZC, QC, wC, bC, nC;
-         null === CC || void 0 === CC || (null === (zC = CC.persisted) || void 0 === zC || (null === (ZC = zC.shared) || void 0 === ZC || delete ZC.uncensoredText)), null === CC || void 0 === CC || (null === (QC = CC.persisted) || void 0 === QC || delete QC.author), null === CC || … [truncated]
-       }
-       isEmptyObject(CC) {
-         return CC && "object" === typeof CC && 0 === Object.keys(CC).length
-       }
-     }
-     var xW = ZC(36897),
-       JW = ZC(39068),
-       IW = ZC(39071),
-       iW = ZC(37892),
-       vW = ZC.n(iW);
-     const eW = [],
-       hW = Object.freeze({}),
- ... (12 more removed lines; see GitHub link above)
+       })]
+     }), (0, Sp.jsx)(WY, {})]
+   })
+ }
+ const UY = ["anthropic", "openai", "gemini", "openrouter"];
+ 
+ function wY(pp) {
+   let {
+     provider: ip,
+     children: cp
+   } = pp;
+   return (0, Sp.jsx)("a", {
+     href: QS[ip].keyPage,
+     target: "_blank",
+     rel: "noreferrer noopener",
+     children: cp
+ ... (30 more added lines; see GitHub link above)
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9385-L9397` → after: `L10222-L10252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10222-L10252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10222-L10252) · [Before (L9385-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9385-L9397)

```diff
-       onPlayerLeave(CC) {
-         this.books.delete(CC)
-       }
-       editRecipesForPlayer(CC, zC, ZC) {
-         const QC = this.books.get(CC),
-           wC = (0, IW.e)(null !== ZC && void 0 !== ZC ? ZC : KW);
-         var bC;
-         Object.hasOwn(QC.base, zC) && QC.base[zC] === wC ? null === (bC = QC.overrides) || void 0 === bC || bC.delete(zC) : (QC.overrides ??= new Map, QC.overrides.set(zC, wC))
-       }
-       removeRecipes(CC, zC) {
-         zC ? this.editRecipesForPlayer(CC, zC, KW) : this.books.set(CC, {
-           base: hW,
-           overrides: null
+     }), [op]), "custom" === cp) return (0, Sp.jsx)("div", {
+     className: "WorldCodeAiKeyExplainer",
+     children: (0, Sp.jsx)("p", {
+       className: "WorldCodeAiAiSettingsNote",
+       children: "Paste the key for that server, or leave it empty if it doesn't need one. It goes only to that server, never to Bloxd."
+     })
+   });
+   const Lp = cp ? QS[cp] : null;
+   return (0, Sp.jsxs)("div", {
+     className: "WorldCodeAiKeyExplainer",
+     children: [(0, Sp.jsxs)("ul", {
+       ref: xp,
+       id: "WorldCodeAiKeyExplainerLines",
+       className: "WorldCodeAiKeyExplainerLines",
+       children: [(0, Sp.jsx)("li", {
+         children: Lp ? `An API key works like a password for ${Lp.shortName}'s AI (it isn't your ${Lp.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+ ... (15 more added lines; see GitHub link above)
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9399-L9400` → after: `L10254-L10331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10254-L10331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10254-L10331) · [Before (L9399-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9399-L9400)

```diff
-       }
-       getRecipesForItem(CC, zC) {
+       })]
+     }), Lp && (0, Sp.jsxs)("a", {
+       className: "WorldCodeAiKeyPageLink",
+       href: Lp.keyPage,
+       target: "_blank",
+       rel: "noreferrer noopener",
+       children: ["Get a key on ", Lp.shortName, "'s website ", (0, Sp.jsx)("span", {
+         "aria-hidden": "true",
+         children: "\u2197"
+       })]
+     })]
+   })
+ }
+ 
+ function HY() {
+   const [pp, ip] = (0, Op.useState)(!1);
+ ... (62 more added lines; see GitHub link above)
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9402-L9527` → after: `L10333-L10433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10333-L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10333-L10433) · [Before (L9402-L9527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9402-L9527)

```diff
-         const QC = this.books.get(CC);
-         if (!QC) return;
-         const wC = null === (ZC = QC.overrides) || void 0 === ZC ? void 0 : ZC.get(zC);
-         return void 0 !== wC ? wC : Object.hasOwn(QC.base, zC) ? QC.base[zC] : void 0
-       }
-       forEachRecipes(CC, zC) {
-         const ZC = this.books.get(CC);
-         if (!ZC) return;
-         const {
-           base: QC,
-           overrides: wC
-         } = ZC;
-         for (const nC in QC) {
-           var bC;
-           zC(nC, null !== (bC = null === wC || void 0 === wC ? void 0 : wC.get(nC)) && void 0 !== bC ? bC : QC[nC])
-         }
- ... (110 more removed lines; see GitHub link above)
+         if (!Pp || !Qp) return;
+         const ip = Hx.addKey({
+           provider: Pp,
+           key: Rp(Pp),
+           baseUrl: "custom" === Pp && null !== (pp = fS(ep)) && void 0 !== pp ? pp : void 0,
+           models: Qp
+         }, Bp, null === Lp || void 0 === Lp ? void 0 : Lp.id);
+         ("" !== Cp.trim() || Lp) && Hx.renameKey(ip, Cp), Yp()
+       })() : (async () => {
+         const ip = NS(wp);
+         vp(ip), np(null);
+         const cp = null !== Pp && void 0 !== Pp ? Pp : TS(ip),
+           Op = Rp(cp, ip);
+         if ("" === Op && "custom" !== cp) return void hp("Paste your key first.");
+         if (!cp) return void hp("Pick the company your key is from.");
+         const op = "custom" === cp ? fS(ep) : null;
+ ... (85 more added lines; see GitHub link above)
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9529-L9567` → after: `L10435-L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10435-L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10435-L10489) · [Before (L9529-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9529-L9567)

```diff
-           nC = this.getMaxCraftTimes(CC, zC, ZC, QC);
-         if (0 === nC) return bC;
-         const fC = Math.min(wC, nC),
-           oC = this.getRecipesForItem(CC, ZC);
-         this.consumeIngredientsForCrafting(CC, zC, ZC, QC, fC);
-         const qC = oC[QC].produces,
-           FC = qC * fC,
-           WC = oC[QC].attributes,
-           {
-             itemsProvided: NC,
-             qn: MC,
-             amountAddedToSlot: gC
-           } = this.provideItemsFromCrafting(zC, ZC, FC, WC);
-         return FC !== NC && console.error(new Error("Crafted the wrong amount!").stack), {
-           Cf: NC / qC,
-           qn: MC,
- ... (23 more removed lines; see GitHub link above)
+           onKeyDown: dY
+         }), (0, Sp.jsx)("button", {
+           type: "button",
+           className: "WorldCodeAiSecondaryButton",
+           onClick: () => {
+             dp(!Hp)
+           },
+           children: Hp ? "Hide" : "Show"
+         })]
+       }), (0, Sp.jsx)(tY, {
+         provider: Pp
+       })]
+     }), !Lp && (0, Sp.jsxs)("p", {
+       className: "WorldCodeAiAiSettingsNote WorldCodeAiAddKeyRemember",
+       children: [Ap ? "Your keys are remembered in this browser. Change it in " : "Your keys are kept until you close this tab. To remember them, see ", (0, Sp.jsx)("button", {
+         type: "button",
+ ... (39 more added lines; see GitHub link above)
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9569-L9595` → after: `L10491-L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10491-L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10491-L10527) · [Before (L9569-L9595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9569-L9595)

```diff
-       }
-       provideItemsFromCrafting(CC, zC, ZC, QC) {
-         let wC = 0,
-           bC = null,
-           nC = 0;
-         if (!1 !== this.bloxd.qM.metadatas[zC].stackable) {
-           const fC = CC.pickUpItem({
-             name: zC,
-             typeObj: this.bloxd.getItemTypeObj(zC),
-             amount: ZC,
-             attributes: QC ? vW()(QC) : {}
-           });
-           wC = fC.amountPickedUp, bC = fC.slotIdx, nC = fC.amountAddedToSlot
-         } else
-           for (let fC = 0; fC < ZC; fC++) {
-             const ZC = CC.pickUpItem({
- ... (11 more removed lines; see GitHub link above)
+       }, pp.id))), (0, Sp.jsx)("button", {
+         type: "button",
+         className: "WorldCodeAiKeyLearnMore",
+         onClick: () => {
+           lp(!0), Zp()
+         },
+         children: "Type a model name yourself"
+       })]
+     }), Qp && (0, Sp.jsxs)("label", {
+       className: "WorldCodeAiAddKeyField",
+       children: [(0, Sp.jsx)("span", {
+         children: "Name it (optional)"
+       }), (0, Sp.jsx)("input", {
+         className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyName",
+         value: Cp,
+         maxLength: 30,
+ ... (21 more added lines; see GitHub link above)
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9597-L9598` → after: `L10529-L10641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10529-L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10529-L10641) · [Before (L9597-L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9597-L9598)

```diff
-       }
-       getRecipesForPlayer(CC) {
+       }), (0, Sp.jsx)("button", {
+         type: "submit",
+         className: "WorldCodeAiPrimaryButton WorldCodeAiAddKeySave",
+         disabled: Tp,
+         children: Tp ? Fp ? "Testing the connection\u2026" : "Testing your key\u2026" : zp ? `Save and use ${zp.name}` : Fp ? "Test connection" : "Test key"
+       })]
+     })]
+   })
+ }
+ var uY = cp(1201),
+   jY = cp(37089),
+   kY = cp(37084);
+ 
+ function mY(pp) {
+   let {
+     step: ip,
+ ... (97 more added lines; see GitHub link above)
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9600-L9629` → after: `L10643-L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10643-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10643-L10703) · [Before (L9600-L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9600-L9629)

```diff
-         const ZC = this.books.get(CC);
-         if (!ZC) return;
-         if (null === (zC = ZC.overrides) || void 0 === zC || !zC.size) return ZC.base;
-         const QC = {};
-         return this.forEachRecipes(CC, ((CC, zC) => {
-           QC[CC] = zC
-         })), QC
-       }
-       getSalvageableItem(CC, zC) {
-         return dW(CC, zC)
-       }
-       salvageItem(CC, zC, ZC, QC) {
-         let wC = this.getSalvageableItem(ZC, QC);
-         if (!wC) return !1;
-         const bC = CC.getItemAtIdx(zC);
-         if ((null === bC || void 0 === bC ? void 0 : bC.name) !== ZC) return !1;
- ... (14 more removed lines; see GitHub link above)
+         null !== (ip = yp.current) && void 0 !== ip && ip.contains(pp.target) || Wp(!1)
+       },
+       xp = pp => {
+         "Escape" === pp.key && (pp.stopPropagation(), pp.preventDefault(), DY.close() || vp())
+       };
+     return document.addEventListener("pointerdown", Sp), document.addEventListener("keydown", xp, !0), () => {
+       null === Op || void 0 === Op || Op.removeEventListener("scroll", Ip), document.removeEventListener("pointerdown", Sp), document.removeEventListener("keydown", xp, !0)
+     }
+   }), [Pp]);
+   const tp = op && null !== Yp,
+     Hp = tp ? "Bot.xd (free) \xb7 once" : Yp ? MY(Yp) : Ap ? kx : "Bot.xd (free)";
+   return (0, Sp.jsxs)("div", {
+     ref: yp,
+     className: "WorldCodeAiModelChipRow",
+     onBlur: pp => {
+       var ip;
+ ... (45 more added lines; see GitHub link above)
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9631-L9663` → after: `L10705-L10769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10705-L10769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10705-L10769) · [Before (L9631-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9631-L9663)

```diff
-           of wC) CC.pickUpItem({
-           name: nC,
-           typeObj: this.bloxd.getItemTypeObj(nC),
-           amount: fC,
-           attributes: {}
-         });
-         return !0
-       }
-     }
- 
-     function dW(CC, zC) {
-       const ZC = JW.f[CC];
-       return ZC ? void 0 === zC ? ZC : (zC <= 0 && (zC = 1), ZC.map((CC => {
-         let {
-           item: ZC,
-           amt: QC
- ... (17 more removed lines; see GitHub link above)
+         })
+       }), (0, Sp.jsxs)("div", {
+         className: "WorldCodeAiModelMenuActions",
+         children: [(0, Sp.jsxs)("button", {
+           className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
+           onClick: () => {
+             Wp(!1), ip()
+           },
+           children: [(0, Sp.jsx)("span", {
+             "aria-hidden": "true",
+             children: "+ "
+           }), "Add API key"]
+         }), Yp && (0, Sp.jsxs)("span", {
+           className: "WorldCodeAiModelMenuBotxd",
+           children: [xp && (tp ? (0, Sp.jsxs)("button", {
+             className: "WorldCodeAiKeyLearnMore",
+ ... (49 more added lines; see GitHub link above)
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9665-L9706` → after: `L10771-L10823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10771-L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10771-L10823) · [Before (L9665-L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9665-L9706)

```diff
-     var cW = ZC(38300),
-       uW = ZC(37475),
-       rW = ZC(34162);
-     let sW;
-     class TW {
-       constructor(CC) {
-         this.bloxd = CC, this.enchanter = void 0, sW ??= new uW.d(xW.m), this.enchanter = sW
-       }
-       getPossibleEnchantments(CC, zC) {
-         return this.bloxd.isClient && console.assert(CC === this.bloxd.MN.qE || CC === this.bloxd.MN.mCC, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(zC)
-       }
-       canUseEnchantingTable(CC, zC, ZC) {
-         if (this.bloxd.isClient && console.assert(CC === this.bloxd.MN.qE || CC === this.bloxd.MN.mCC, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(CC, "canCraft")) return !1;
-         if (!(0, rW.t)(ZC)) return !1;
-         const QC = this.bloxd.JR.SzC(CC).getItemAtIdx(zC);
-         return 0 !== this.getPossibleEnchantments(CC, null === QC || void 0 === QC ? void 0 : QC.name).length && !(!QC || (0, rW.p)(QC.attributes))
- ... (26 more removed lines; see GitHub link above)
+     let pp = Op;
+     for (; pp + 1 < op.length && "same" === op[pp + 1].kind;) pp++;
+     const ip = op.slice(Op, pp + 1),
+       cp = 0 === Op ? 0 : 2,
+       Ip = pp === op.length - 1 ? 0 : 2;
+     ip.length > cp + Ip + 1 ? xp.push(...ip.slice(0, cp), {
+       kind: "fold",
+       count: ip.length - cp - Ip
+     }, ...ip.slice(ip.length - Ip)) : xp.push(...ip), Op = pp
+   }
+   return (0, Sp.jsx)("pre", {
+     className: "WorldCodeAiDiff",
+     children: xp.map(((pp, ip) => {
+       if ("fold" === pp.kind) return (0, Sp.jsxs)("div", {
+         className: "WorldCodeAiDiffFold",
+         children: ["\u22ef ", pp.count, " unchanged lines"]
+ ... (37 more added lines; see GitHub link above)
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9709-L9765` → after: `L10826-L11320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L10826-L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L10826-L11320) · [Before (L9709-L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9709-L9765)

```diff
-     class LW {
-       constructor(CC) {
-         this.overrides = CC, this.resolved = null, this.blockLookups = null, this.cachedType = null, this.cachedTier = null, this.version = 0
-       }
-       getOverrides() {
-         return this.overrides
-       }
-       setOverride(CC, zC) {
-         this.overrides[CC] = zC, this.version++, this.resolved = null, jW.has(CC) && (this.blockLookups = null)
-       }
-       mergeOverrides(CC) {
-         Object.assign(this.overrides, CC), this.version++, this.resolved = null, this.blockLookups = null
-       }
-       getResolvedSettings(CC, zC) {
-         var ZC;
-         this.dropCachesForNewPhysicsState(CC, zC);
- ... (41 more removed lines; see GitHub link above)
+   }
+ }
+ 
+ function BY(pp) {
+   return Array.isArray(pp) && pp.every((pp => {
+     if ("object" !== typeof pp || null === pp || !("id" in pp) || !("at" in pp) || !("label" in pp) || !("files" in pp)) return !1;
+     const ip = pp.files;
+     return "object" === typeof ip && null !== ip && Object.values(ip).every((pp => "string" === typeof pp))
+   }))
+ }
+ 
+ function NY(pp, ip) {
+   return ip ? function(pp, ip) {
+     if (!ip) return [...pp];
+     const cp = new Map;
+     for (const Op of [...ip, ...pp]) cp.set(Op.id, Op);
+ ... (479 more added lines; see GitHub link above)
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9767-L9789` → after: `L11322-L11380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR11322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L11322-L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L11322-L11380) · [Before (L9767-L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9767-L9789)

```diff
-     var UW = ZC(38012);
-     const BW = [0, 0, 0, 1, 1, 1];
-     class OW {
-       constructor() {
-         this.vq = new WeakMap
-       }
-       resize(CC, zC, ZC, QC, wC, bC) {
-         return bC && (QC > zC || wC > ZC) ? (this.vq.set(CC, {
-           width: QC,
-           height: wC
-         }), {
-           width: Math.min(QC, zC),
-           height: Math.min(wC, ZC)
-         }) : (this.vq.delete(CC), {
-           width: QC,
-           height: wC
- ... (7 more removed lines; see GitHub link above)
+   }
+   return cp
+ }
+ 
+ function VY(pp) {
+   const ip = function(pp) {
+     zY.lastIndex = 0;
+     for (let ip = zY.exec(pp); ip; ip = zY.exec(pp))
+       if (!sY(pp, ip.index)) return ip;
+     return null
+   }(pp);
+   if (!ip) return [];
+   const cp = function(pp, ip) {
+     const cp = [];
+     let Op = 0,
+       op = ip;
+ ... (43 more added lines; see GitHub link above)
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9792-L9930` → after: `L11687-L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR11687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L11687-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L11687-L11819) · [Before (L9792-L9930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9792-L9930)

```diff
-     var kW = ZC(9299),
-       VW = ZC(39076);
-     class CN {
-       constructor(CC, zC, ZC) {
-         this.isClient = zC, this.callbacks = ZC, this.MN = void 0, this.JR = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.qM = new  … [truncated]
-       }
-       getBlockSolidityForPlayer(CC, zC, ZC, QC, wC) {
-         return !!this.getBlockCollisionForPlayer(CC, zC, ZC, QC, wC)
-       }
-       getPlayerReader(CC) {
-         return CC
-       }
-       getSyncedClientOptions(CC) {
-         return null
-       }
-       getClientPredictedBlockWith(CC, zC, ZC, QC, wC) {
- ... (123 more removed lines; see GitHub link above)
+     Op.push({
+       removed: [],
+       added: cp[Ip++].lines
+     })
+   }
+   const xp = [];
+   for (const Lp of Op) {
+     const pp = xp[xp.length - 1],
+       ip = [...Lp.removed, ...Lp.added].every(UD);
+     pp && (ip || [...pp.removed, ...pp.added].every(UD)) ? xp[xp.length - 1] = {
+       removed: [...pp.removed, ...Lp.removed],
+       added: [...pp.added, ...Lp.added]
+     } : xp.push(Lp)
+   }
+   return xp.every((pp => wD(pp.removed) && wD(pp.added))) ? xp : [pp]
+ }
+ ... (117 more added lines; see GitHub link above)
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9932-L9941` → after: `L11821-L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR11821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L11821-L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L11821-L11874) · [Before (L9932-L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9932-L9941)

```diff
-       getBlockSpeedMultiplier(CC, zC) {
-         var ZC;
-         const QC = this.qM.metadatas;
-         let wC, bC, nC;
-         QC !== this.stoodOnMetadatas && (this.stoodOnMetadatas = QC, this.stoodOnOptions = [], this.stoodOnDefaults = [], this.stoodOnKnown = []);
-         for (const fC of zC) {
-           if (!Number.isInteger(fC) || fC < 0) {
-             const zC = this.getItemStat(CC, fC, "stoodOnSpeedMultiplier");
-             !(0, XC.H)(zC) && (void 0 === wC || zC > wC) && (wC = zC);
-             continue
+       const Sp = function(pp, ip, cp) {
+           const Op = jD(pp.added),
+             op = jD(pp.removed),
+             Ip = Op.filter((pp => op.includes(pp))),
+             Sp = Op.filter((pp => !Ip.includes(pp))),
+             xp = op.filter((pp => !Ip.includes(pp))),
+             Lp = new Map([...uD(pp.removed), ...uD(pp.added)]),
+             Yp = [...Ip, ...Sp].filter((pp => Lp.has(pp))),
+             Dp = (ip, cp) => {
+               return {
+                 names: ip,
+                 configKeys: ip.includes("CONFIG") ? (Op = pp.added, Op.flatMap((pp => {
+                   const ip = /^\s+(\w+)\s*:/.exec(pp);
+                   return ip ? [ip[1]] : []
+                 }))) : [],
+                 plainWords: ip.flatMap((pp => {
+ ... (38 more added lines; see GitHub link above)
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9943-L9975` → after: `L11876-L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L11876-L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L11876-L11904) · [Before (L9943-L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9943-L9975)

```diff
-           let zC;
-           if (bC ??= this.isClient || "Player" === this.getEntityType(CC), bC) {
-             let ZC = this.stoodOnOptions[fC];
-             void 0 === ZC && (ZC = (0, VW.d)(this.getItemName(fC), "stoodOnSpeedMultiplier"), this.stoodOnOptions[fC] = ZC), void 0 === nC && (nC = this.getPlayerReader(CC));
-             const QC = this.getSyncedClientOptions(nC);
-             zC = null === QC ? this.getClientPredictedOption(CC, ZC) : QC[ZC]
-           }(0, XC.H)(zC) && (this.stoodOnKnown[fC] || (this.stoodOnDefaults[fC] = this.getDefaultItemStat(fC, "stoodOnSpeedMultiplier"), this.stoodOnKnown[fC] = !0), zC = this.stoodOnDefaults[fC]), !(0, XC.H)(zC) && (void 0 === wC || zC > wC) && (wC = zC)
-         }
-         return null !== (ZC = wC) && void 0 !== ZC ? ZC : 1
-       }
-       getStoodOnDefaultList(CC) {
-         const zC = this.qM.metadatas,
-           ZC = [],
-           QC = [];
-         for (let wC = 0; wC < CC; wC++) {
-           if (void 0 === zC[wC]) continue;
- ... (17 more removed lines; see GitHub link above)
+           const yp = [Ip.length > 0 ? `changes ${kD(Ip.map(Pp))}` : "", Sp.length > 0 ? `adds ${kD(Sp.map(Pp))}` : "", xp.length > 0 ? `takes out ${kD(xp.map(Pp))}` : ""].filter(Boolean);
+           if (yp.length > 0) return {
+             named: RD(yp.join(", ")),
+             codeNames: Wp,
+             takesOut: xp,
+             isPlain: !1,
+             about: Dp([], !1)
+           };
+           const Up = ip.flatMap((pp => "same" === pp.kind ? [pp.text] : pp.added));
+           for (let wp = Up.length - 1; wp >= 0; wp--) {
+             const pp = Up[wp],
+               ip = /^\s/.test(pp) ? void 0 : dD(pp);
+             if (!ip && "" !== pp.trim() && !/^\s/.test(pp) && !/^(?:\/\/|\/\*|\*)/.test(pp.trim())) break;
+             if (ip) {
+               const cp = eD(pp);
+               return cp ? (Lp.set(ip, cp), {
+ ... (13 more added lines; see GitHub link above)
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L9977-L10053` → after: `L11906-L11911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR11906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L11906-L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L11906-L11911) · [Before (L9977-L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L9977-L10053)

```diff
-         }
-         const wC = this.getSyncedClientOptions(this.getPlayerReader(CC)),
-           bC = [];
-         for (const nC of zC) {
-           const zC = this.stoodOnOptionBlocks.get(nC);
-           if (void 0 === zC) continue;
-           const ZC = null === wC ? this.getClientPredictedOption(CC, nC) : wC[nC];
-           if (!(0, XC.H)(ZC))
-             for (const CC of zC) bC.push([CC, Number(ZC)])
-         }
-         return bC.sort(((CC, zC) => CC[0] - zC[0])), {
-           ids: Uint32Array.from(bC, (CC => CC[0])),
-           values: Float64Array.from(bC, (CC => CC[1]))
-         }
-       }
-       getBhopMultiplier(CC, zC) {
- ... (61 more removed lines; see GitHub link above)
+           return {
+             named: 0 === pp.added.length ? `Takes out lines from line ${cp}` : `Changes line ${cp}`,
+             codeNames: [],
+             takesOut: [],
+             isPlain: !1,
+             about: Dp([], !1)
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10056-L10133` → after: `L11949-L12077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L11949-L12077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L11949-L12077) · [Before (L10056-L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10056-L10133)

```diff
-         return ZC
-       }
-       removeEatenItem(CC, zC, ZC) {
-         if (this.getClientPredictedOption(CC, "creative")) return;
-         const QC = zC.getItemAtIdx(ZC),
-           wC = this.getItemStat(CC, QC.name, "afterEatenItem");
-         if (void 0 !== wC) zC.setItemSlot(ZC, wC, this.getItemStat(CC, wC, "stackable") ? 1 : null);
-         else {
-           const CC = null === QC.amount ? 0 : QC.amount - 1;
-           CC <= 0 ? zC.setItemSlot(ZC, kW.b, null) : zC.setItemSlot(ZC, QC.name, CC, QC.attributes)
-         }
-       }
-       getEntityType(CC) {
-         if (this.JR.YCC(CC, "itemState")) return "Item";
-         const zC = this.getEntityTypeImpl(CC);
-         if (zC) {
- ... (62 more removed lines; see GitHub link above)
+         if (!Ip[Op]) return pp.onlyAdds ? "adds" : "changes"
+       }))
+     }(Sp.map((pp => ({
+       ...pp.about,
+       ...pp.why ? {
+         why: pp.why
+       } : {}
+     }))), ip),
+     Lp = Sp.map(((pp, ip) => {
+       let {
+         named: cp,
+         codeNames: Op,
+         isPlain: op,
+         about: Ip,
+         ...Lp
+       } = pp;
+ ... (113 more added lines; see GitHub link above)
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10135-L10149` → after: `L12079-L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12079-L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12079-L12083) · [Before (L10135-L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10135-L10149)

```diff
-         return null !== (zC = null === (ZC = this.vehicleSettingOverridesByEId.get(CC)) || void 0 === ZC ? void 0 : ZC.getOverrides()) && void 0 !== zC ? zC : null
-       }
-       getVehicleSettingOverrideStore(CC) {
-         return this.vehicleSettingOverridesByEId.get(CC)
-       }
-       setVehicleSettingOverrides(CC, zC) {
-         null === zC ? this.vehicleSettingOverridesByEId.delete(CC) : this.vehicleSettingOverridesByEId.set(CC, new LW(zC))
-       }
-       mergeVehicleSettingOverrides(CC, zC) {
-         const ZC = this.vehicleSettingOverridesByEId.get(CC);
-         void 0 === ZC ? this.setVehicleSettingOverrides(CC, {
-           ...zC
-         }) : ZC.mergeOverrides(zC), this.reapplyRiderPhysicsSettings(CC)
-       }* iterateVehicleSettingOverrides() {
-         for (const CC of this.vehicleSettingOverridesByEId.values()) yield CC.getOverrides()
+         if (Dp(Sp ? null : "Your code changed here. Look at it again."), Sp) null === (Op = yp.current) || void 0 === Op || null === (Ip = Op.scrollIntoView) || void 0 === Ip || Ip.call(Op, {
+           block: "nearest"
+         })
+       } finally {
+         Wp(!1)
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10151-L10229` → after: `L12085-L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12085-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12085-L12367) · [Before (L10151-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10151-L10229)

```diff
-       setVehicleSettingOverride(CC, zC, ZC) {
-         let QC = this.vehicleSettingOverridesByEId.get(CC);
-         void 0 === QC && (QC = new LW({}), this.vehicleSettingOverridesByEId.set(CC, QC)), QC.setOverride(zC, ZC), this.reapplyRiderPhysicsSettings(CC)
-       }
-       getRiderPhysicsState(CC) {
-         return this.JR.yCC(CC).physicsState
-       }
-       reapplyRiderPhysicsSettings(CC) {
-         for (const zC of this.getVehicleRiderEIds(CC)) {
-           const CC = this.getRiderPositionOffset(zC),
-             ZC = this.getRiderPhysicsState(zC);
-           this.updatePositionAndPhysics(zC, ZC, !1, null !== CC && void 0 !== CC ? CC : void 0, !0)
-         }
-       }
-       getResolvedPhysicsSettings(CC, zC) {
-         const ZC = this.getRiddenVehicleEId(CC),
- ... (63 more removed lines; see GitHub link above)
+     }
+   }, wp = () => {
+     if (null !== xp)
+       if ("number" === cp.kind) {
+         const pp = Number(xp.trim());
+         if ("" === xp.trim() || !Number.isFinite(pp)) return Dp("That needs to be a number."), void Lp(null);
+         Up(pp)
+       } else Up(xp)
+   }, vp = `WorldCodeAiSetting-${ip}-${cp.key}`;
+   return (0, Sp.jsxs)("li", {
+     ref: yp,
+     className: "WorldCodeAiSetting",
+     children: [(0, Sp.jsxs)("label", {
+       className: "WorldCodeAiSettingLabel",
+       htmlFor: vp,
+       children: [Ap, cp.comment && (0, Sp.jsx)("code", {
+ ... (267 more added lines; see GitHub link above)
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10231-L10279` → after: `L12369-L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12369-L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12369-L12418) · [Before (L10231-L10279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10231-L10279)

```diff
-         if (this.eyeHeightCache.has(CC)) return this.eyeHeightCache.get(CC);
-         let ZC = this.getLifeformType(CC);
-         null === ZC && (console.error(new Error(`No lifeform type found for lifeformId: ${CC}, defaulting to player eye height`).stack), ZC = "Player");
-         const QC = this.getEntityMeshOffset(CC),
-           wC = null !== (zC = null === QC || void 0 === QC ? void 0 : QC[1]) && void 0 !== zC ? zC : 0,
-           bC = this.MN.JR.MzC(CC);
-         let nC = 1;
-         "sitting" === (null === bC || void 0 === bC ? void 0 : bC.pose) ? nC = gC.f.sittingEyeHeightRatio: !0 === (null === bC || void 0 === bC ? void 0 : bC.crouching) && (nC = gC.f.crouchingEyeHeightRatio);
-         const {
-           eyeHeight: fC
-         } = (0, cW.e)(ZC), oC = wC + fC * this.qB(CC) * nC;
-         return this.eyeHeightCache.set(CC, oC), oC
-       }
-       getLifeformEyePos(CC, zC) {
-         const ZC = this.getLifeformEyeHeight(CC),
-           QC = this.getEntityPos(CC),
- ... (33 more removed lines; see GitHub link above)
+         const cp = !0 === pp.codeBlock,
+           Op = cp ? Object.fromEntries(Object.entries(pp.files).filter((pp => {
+             let [ip] = pp;
+             return !(0, Up.e)(ip)
+           }))) : pp.files,
+           op = Object.keys(Op),
+           Ip = op.length > 1 && op.some((pp => "" !== Op[pp].trim())),
+           Sp = qo(op),
+           xp = Ip && op.includes(Sp) && Ro(Op, pp.activePath, !1) !== Sp,
+           Lp = {
+             ...pp,
+             files: Op,
+             errors: [],
+             history: [],
+             canAsk: !1,
+             canLookUp: !1,
+ ... (34 more added lines; see GitHub link above)
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10399-L10489` → after: `L12421-L12461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12421-L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12421-L12461) · [Before (L10399-L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10399-L10489)

```diff
-       }
-       chunkAdded(CC, zC, ZC) {
-         const QC = `${CC},${zC},${ZC}`,
-           wC = this.waitingOnChunk.get(QC);
-         if (wC) {
-           this.waitingOnChunk.delete(QC);
-           for (const [CC, zC, ZC] of wC.values()) this.changed(CC, zC, ZC)
-         }
-         for (const [bC, {
-             anchor: nC,
-             textCell: fC
-           }] of this.drawnText)(0, XC.X)(nC).join() === QC && (this.drawnText.delete(bC), this.changed(...fC))
-       }
-       removeText(CC) {
-         this.bloxd.client.meshCreator.removeBoard(CC[0], CC[1], CC[2]), this.drawnText.delete(CC.join())
-       }
- ... (75 more removed lines; see GitHub link above)
+       };
+     if (Ip) return Sp("sent"), void window.open(Op, "_blank", "noopener");
+     navigator.clipboard.writeText(ip).then((() => {
+       Sp("copied")
+     }), (pp => {
+       console.error("Couldn't copy the ChatGPT prompt", pp), Sp("notCopied")
+     }))
+   };
+   return (0, Sp.jsxs)(Sp.Fragment, {
+     children: [(0, Sp.jsx)("button", {
+       className: "WorldCodeAiPrimaryButton",
+       ...(0, VD.getAnalyticsClickAttributes)({
+         id: "ai_helper.ask_chatgpt"
+       }),
+       onClick: () => {
+         !0 !== LS.h.getItem(cA) ? OA.ask().then((pp => {
+ ... (25 more added lines; see GitHub link above)
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10491-L10492` → after: `L12463-L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12463-L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12463-L12470) · [Before (L10491-L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10491-L10492)

```diff
-           justAfterAddingChunk: (CC, zC, ZC, QC) => {
-             (0, nN.hidingMeshesChunkAdded)(this.MN, CC, zC, ZC), this.client.gameRecorder.onChunkAdded(CC, zC, ZC, QC), this.noticeboardTextRenderer.chunkAdded(CC, zC, ZC)
+           onKeyDown: pp => {
+             pp.stopPropagation()
+           }
+         }), (0, Sp.jsx)(Dp.o, {
+           className: "WorldCodeAiSend",
+           ariaLabel: "Use ChatGPT's answer",
+           analyticsClick: {
+             id: "ai_helper.use_chatgpt_answer"
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10494-L10495` → after: `L12472-L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12472-L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12472-L12474) · [Before (L10494-L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10494-L10495)

```diff
-           justBeforeBlockAdded: (CC, zC, ZC, QC) => {
-             "Board" === this.getMetaInfo(QC).rootName ? this.client.meshCreator.addBoard(CC, zC, ZC, QC) : (0, zN.k)(QC) && this.noticeboardTextRenderer.changed(CC, zC, ZC), 0 === QC ? Sz.c.removeIfUnconfirmed(CC, zC, ZC) : Sz.c.removeOnceBlockLanded(CC, zC, ZC)
+           disabled: "" === Lp.trim(),
+           onClick: () => {
+             Ip(Lp, xp)
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10497-L10519` → after: `L12476-L12860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12476-L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12476-L12860) · [Before (L10497-L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10497-L10519)

```diff
-           justAfterBhop: (CC, zC) => {
-             pC.o.bp("EffectUpdate", {
-               gQ: CC,
-               name: "Bunny Hop",
-               icon: "Bunny Hop",
-               duration: zC > 0 ? null : 0,
-               level: zC,
-               showInNametag: !1
-             })
-           }
-         }), this.MN = CC, this.client = zC, this.hideNameSeedSub = null, this.noticeboardTextRenderer = new QN(this), this.recentChunkEdits = new wN.d, this.applyingServerBlocks = !1, this.riddenVehicleEId = null, this.appliedPositionOffset = null, this.hideNameSeedSub = pC.o.sub … [truncated]
-           let {
-             eId: zC,
-             value: ZC
-           } = CC;
-           this.syncHiddenPlayerName(zC, ZC)
- ... (7 more removed lines; see GitHub link above)
+           children: (0, Sp.jsx)(Pp.d, {
+             name: "arrow-up"
+           })
+         })]
+       })]
+     })]
+   })
+ }
+ var SA = cp(104),
+   xA = cp(37132);
+ 
+ function LA(pp, ip) {
+   const cp = pp.split("\n"),
+     Op = ip.split("\n"),
+     op = Op.findIndex(((pp, ip) => pp !== cp[ip]));
+   return (-1 === op ? Math.min(cp.length, Op.length) - 1 : op) + 1
+ ... (369 more added lines; see GitHub link above)
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10521-L10522` → after: `L12862-L12916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12862-L12916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12862-L12916) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10521-L10522)

```diff
-       blockChangeHasHooks(CC) {
-         if ((0, zN.k)(CC)) return !0;
+       Rp().forEachChild(pp, Sp)
+     };
+   Sp(ip);
+   const xp = new Set;
+   return Ip.flatMap((pp => {
+     if (op.has(pp.name) || xp.has(pp.name)) return [];
+     xp.add(pp.name);
+     return [`Line ${ip.getLineAndCharacterOfPosition(pp.at).line+1} uses "CONFIG.${pp.name}", but CONFIG has no ${pp.name}, so it is undefined there. Add ${pp.name} to CONFIG.`]
+   }))
+ }
+ 
+ function hA(pp, ip) {
+   var cp;
+   const Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== ip.path && (0, Up.e)(ip.path)),
+     op = !0 === (null === (cp = ip.path) || void 0 === cp ? void 0 : cp.endsWith(".ts")),
+     Ip = ip => [...pp.codeWarnings(ip, Op), ...XA(ip, Op, op), ...QA(ip), ...bA(ip)],
+ ... (39 more added lines; see GitHub link above)
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10524` → after: `L12918-L12925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12918-L12925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12918-L12925) · [Before (L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10524)

```diff
-           return FN.has(this.getMetaInfo(CC).rootName)
+           return (await op()).transaction(EY, pp)
+         } catch (ip) {
+           if ("indexedDB" !== cp) throw ip;
+           return Op = null, (await op()).transaction(EY, pp)
+         }
+       }, Sp = async () => {
+         if ("unknown" === cp) try {
+           await op(), cp = "indexedDB"
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10526` → after: `L12927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12927) · [Before (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10526)

```diff
-           return !0
+           cp = "fallback"
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10528-L10537` → after: `L12929-L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12929-L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12929-L12942) · [Before (L10528-L10537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10528-L10537)

```diff
-       }
-       setBlockNoMulti(CC, zC, ZC, QC, wC) {
-         const bC = this.rG(CC, zC, ZC);
-         super.setBlockNoMulti(CC, zC, ZC, QC, wC), ((0, zN.k)(bC) || (0, zN.k)(QC)) && this.noticeboardTextRenderer.changed(CC, zC, ZC)
-       }
-       setBlockNoMultiImpl(CC, zC, ZC, QC, wC) {
-         this.Gy(CC, zC, ZC) && (this.MN.TY(wC, CC, zC, ZC), this.client.gameRecorder.onBlockPlaced(CC, zC, ZC, QC, wC), this.applyingServerBlocks || this.recentChunkEdits.noteEdit(CC, zC, ZC))
-       }
-       applyServerBlocks(CC) {
-         this.applyingServerBlocks = !0;
+         return "indexedDB" === cp
+       };
+     return {
+       getItem: async ip => {
+         if (!await Sp()) return pp.getItem(ip);
+         const cp = await (async pp => {
+           const ip = await Ip("readonly"),
+             cp = ip.objectStore(EY).get(pp);
+           return await XY(ip), cp.result
+         })(ip);
+         return void 0 === cp ? pp.getItem(ip) : cp
+       },
+       setItem: async (ip, cp) => {
+         if (!await Sp()) return pp.setItem(ip, cp);
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10539-L10541` → after: `L12944-L12947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12944-L12947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12944-L12947) · [Before (L10539-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10539-L10541)

```diff
-           CC()
-         } finally {
-           this.applyingServerBlocks = !1
+           const pp = await Ip("readwrite");
+           return pp.objectStore(EY).put(cp, ip), await XY(pp), !0
+         } catch {
+           return !1
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10544-L10571` → after: `L12961-L13039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR12961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L12961-L13039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L12961-L13039) · [Before (L10544-L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10544-L10571)

```diff
-       removingChunk(CC, zC, ZC, QC) {
-         this.client.gameRecorder.onChunkRemoved(CC, zC, ZC), super.removingChunk(CC, zC, ZC, QC)
-       }
-       getItemTypeObjImpl(CC) {
-         return yC.g.itemsClient[CC]
-       }
-       getEntityTypeImpl(CC) {
-         return this.client.getEntityType(CC)
-       }
-       updatePositionAndPhysicsImpl(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
-         var qC;
-         this.setPhysicsBodySize(CC, zC, QC, fC, oC);
-         const FC = this.MN.JR.eT(CC);
-         if (FC.Mq = bC.Mq, FC.fluidDrag = bC.fluidDrag, FC.fluidDragHoriz = bC.fluidDragHorizontal, FC.fluidDragVert = bC.fluidDragVertical, FC.gravityMultiplier = bC.gravityMultiplier, FC.Tu = bC.canAutoStep, wC && this.MN.JR.MzC(CC).setPose(bC.pose, nC), null === (qC = this.MN. … [truncated]
-           const CC = this.MN.JR.yCC(this.MN.qE);
-           CC ? CC.physicsState = zC : console.error("No movement component found for player entity")
- ... (12 more removed lines; see GitHub link above)
+     }
+   }(LS.g),
+   rA = new class {
+     constructor(pp, ip) {
+       this.store = pp, this.signal = ip, this.aW = new Map
+     }
+     watch(pp, ip) {
+       var cp, Op;
+       return null !== (cp = null === (Op = this.signal) || void 0 === Op ? void 0 : Op.listen((cp => {
+         if (cp !== pp) return;
+         const Op = this.load(pp).then((async ip => NY(ip, await this.read(pp))));
+         this.aW.set(pp, Op), Op.then(ip)
+       }))) && void 0 !== cp ? cp : () => {}
+     }
+     list(pp) {
+       return this.load(pp)
+ ... (63 more added lines; see GitHub link above)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10574-L10582` → after: `L13047-L13085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13047-L13085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13047-L13085) · [Before (L10574-L10582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10574-L10582)

```diff
-       useConsumableVehicleImpl(CC, zC, ZC) {
-         const QC = this.MN.JR.yCC(this.MN.qE),
-           wC = ZC.physicsState;
-         QC.physicsState.type !== lW.r.DEFAULT && QC.physicsState.type !== ZC.physicsState.type && this.updatePositionAndPhysics(this.MN.qE, {
-           type: lW.r.DEFAULT,
-           tier: null
-         }, !0), QC.physicsState = wC
-       }
-       getPlayerUseDir(CC) {
+     }
+     read(pp) {
+       return this.store.getItem(this.storeKey(pp)).then((pp => BY(pp) ? pp : null)).catch((() => null))
+     }
+     load(pp) {
+       let ip = this.aW.get(pp);
+       return ip || (ip = this.store.getItem(this.storeKey(pp)).then((pp => BY(pp) ? pp : [])).catch((() => [])), this.aW.set(pp, ip)), ip
+     }
+     storeKey(pp) {
+       return `worldCodeAiHistory:${pp}`
+     }
+   }(GA, JY("bloxd-worldCodeAiHistory")),
+   ZA = new class {
+     constructor(pp, ip) {
+       this.store = pp, this.signal = ip, this.aW = new Map
+     }
+ ... (23 more added lines; see GitHub link above)
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10584-L10606` → after: `L13087-L13115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13087-L13115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13087-L13115) · [Before (L10584-L10606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10584-L10606)

```diff
-         return console.assert(CC === this.MN.qE, "Should only get targeted block for local player"), null !== (zC = this.MN.ECC) && void 0 !== zC ? zC : this.MN.camera.yB()
-       }
-       getEntityMeshOffset(CC) {
-         var zC, ZC;
-         return null !== (zC = null === (ZC = this.MN.JR.MzC(CC)) || void 0 === ZC ? void 0 : ZC.meshOffset) && void 0 !== zC ? zC : null
-       }
-       rG(CC, zC, ZC) {
-         return this.MN.rG(CC, zC, ZC)
-       }
-       getClientPredictedOption(CC, zC) {
-         return console.assert(CC === this.MN.qE || CC === this.MN.mCC, "eId in client getClientPredictedOption must be local player"), this.MN.pR[zC]
-       }
-       getEntityPos(CC) {
-         return this.MN.JR.yG(CC)
-       }
-       getEntityHeading(CC) {
- ... (7 more removed lines; see GitHub link above)
+         if (this.store.update) try {
+           return await this.store.update(this.storeKey(pp), (pp => ip(Pi(pp) ? pp.slice(0, 8) : cp)))
+         } catch {}
+         const op = ip(null !== (Op = await this.read(pp)) && void 0 !== Op ? Op : cp);
+         return await this.store.setItem(this.storeKey(pp), op).catch((() => !1)), op
+       }));
+       this.aW.set(pp, Op);
+       const op = await Op;
+       return null === (cp = this.signal) || void 0 === cp || cp.post(pp), op
+     }
+     read(pp) {
+       return this.store.getItem(this.storeKey(pp)).then((pp => Pi(pp) ? pp.slice(0, 8) : null)).catch((() => null))
+     }
+     load(pp) {
+       let ip = this.aW.get(pp);
+       return ip || (ip = this.read(pp).then((pp => null !== pp && void 0 !== pp ? pp : [])), this.aW.set(pp, ip)), ip
+ ... (13 more added lines; see GitHub link above)
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10608-L10621` → after: `L13117-L13154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13117-L13154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13117-L13154) · [Before (L10608-L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10608-L10621)

```diff
-         return CC !== this.MN.qE && CC !== this.MN.mCC ? null !== (zC = null === (ZC = this.MN.JR.MzC(CC)) || void 0 === ZC ? void 0 : ZC.ridingVehicleEId) && void 0 !== zC ? zC : null : this.riddenVehicleEId
-       }
-       getVehicleRiderEIds(CC) {
-         return this.riddenVehicleEId === CC ? [this.MN.qE] : []
-       }
-       getRiderPositionOffset(CC) {
-         return CC !== this.MN.qE && CC !== this.MN.mCC ? null : this.appliedPositionOffset
-       }
-       updatePositionAndPhysics(CC, zC, ZC, QC, wC) {
-         const bC = this.getRiddenVehicleEId(CC);
-         null !== bC && ZC && (0, BC.t)(zC.type) && (this.setVehicleSettingOverrides(bC, null), this.riddenVehicleEId = null), ZC && (this.appliedPositionOffset = null !== QC && void 0 !== QC ? QC : null), super.updatePositionAndPhysics(CC, zC, ZC, QC, wC)
-       }
-       applyRiddenVehicleSettingOverrides(CC, zC) {
-         this.riddenVehicleEId !== CC ? (null !== this.riddenVehicleEId && this.setVehicleSettingOverrides(this.riddenVehicleEId, null), this.riddenVehicleEId = CC, this.setVehicleSettingOverrides(CC, zC)) : this.mergeVehicleSettingOverrides(CC, zC)
+         return null !== (ip = null === (cp = op(pp)) || void 0 === cp ? void 0 : cp.content) && void 0 !== ip ? ip : ""
+       };
+     sA = new uL({
+       apiReference: Ip("apiReference"),
+       callbacks: Ip("callbacks"),
+       clientOptions: Ip("clientOptions"),
+       snippets: Ip("snippets"),
+       howTo: Ip("howTo"),
+       itemNames: null !== (pp = null === (ip = op("itemNames")) || void 0 === ip ? void 0 : ip.raw) && void 0 !== pp ? pp : "",
+       blockNames: null !== (cp = null === (Op = op("blockNames")) || void 0 === Op ? void 0 : Op.raw) && void 0 !== cp ? cp : "",
+       mobSettings: Ip("mobSettings")
+     })
+   }
+   return sA
+ }
+ const VA = ["Welcome players when they join", "Give everyone a sword when they join", "Make a /spawn command", "Show a timer on the screen"],
+ ... (22 more added lines; see GitHub link above)
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10623-L10624` → after: `L13156-L13172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13156-L13172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13156-L13172) · [Before (L10623-L10624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10623-L10624)

```diff
-       posSatisfiesModifyConstraints(CC, zC, ZC, QC) {
-         return console.assert(CC === this.MN.qE || CC === this.MN.mCC, "eId in client posSatisfiesModifyConstraints must be local player"), this.MN.fN.KCC(zC, ZC, QC)
+     };
+     cp(), ip.addEventListener("scroll", cp, {
+       passive: !0
+     });
+     const Op = "function" === typeof ResizeObserver ? new ResizeObserver(cp) : null;
+     return null === Op || void 0 === Op || Op.observe(ip), null === Op || void 0 === Op || Op.observe(pp), () => {
+       ip.removeEventListener("scroll", cp), null === Op || void 0 === Op || Op.disconnect()
+     }
+   }), [Ip]), (0, Sp.jsx)("div", {
+     ref: op,
+     className: "WorldCodeAiChips WorldCodeAiFollowUps",
+     children: ip.map((pp => (0, Op.createElement)("button", {
+       ...FL.f,
+       key: pp,
+       className: "WorldCodeAiChip",
+       onClick: () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10626-L10656` → after: `L13174-L13279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13174-L13279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13174-L13279) · [Before (L10626-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10626-L10656)

```diff
-       getPlayerIds() {
-         const CC = (0, qq.e)().ids();
-         if (CC.length > 0) return CC;
-         const zC = this.MN.mCC;
-         return this.getEntityIds().filter((CC => parseInt(CC) < 0 && (zC === CC || "Player" === this.getLifeformType(CC))))
-       }
-       getRawEntityName(CC) {
-         var zC;
-         return null !== (zC = super.getRawEntityName(CC)) && void 0 !== zC ? zC : (0, qq.e)().getName(CC)
-       }
-       updateHeldVehicleStatus(CC) {
-         var zC;
-         const ZC = this.MN.JR.SzC(this.MN.qE),
-           QC = null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.getItemAtSelectedSlot()) && void 0 !== zC ? zC : null,
-           wC = null === QC || void 0 === QC ? void 0 : QC.name,
-           bC = this.MN.JR.yCC(this.MN.qE);
- ... (15 more removed lines; see GitHub link above)
+     }, function(pp) {
+       const ip = pp.replace(/^It didn't work: /, "").replace(/\.$/, "");
+       return ip.charAt(0).toUpperCase() + ip.slice(1)
+     }(pp))))
+   })
+ }
+ 
+ function SP(pp) {
+   let {
+     useFree: ip,
+     retryOf: cp,
+     isAutoFix: Op,
+     lookupOf: op
+   } = pp;
+   return !0 !== ip && (void 0 !== cp || !0 !== Op && void 0 === op)
+ }
+ ... (90 more added lines; see GitHub link above)
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10658-L10665` → after: `L13281-L13756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13281-L13756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13281-L13756) · [Before (L10658-L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10658-L10665)

```diff
-         const QC = this.getRawEntityName(CC);
-         this.entityNames[CC] = {
-           entityName: zC
-         };
-         const wC = null !== (ZC = (0, qq.f)(CC, "hideNameSeed")) && void 0 !== ZC ? ZC : null;
-         void 0 === QC || QC === zC && null !== wC || oN.d.delete(QC), null !== wC && oN.d.set(zC, wC)
-       }
-       getEntityName(CC) {
+         const cp = new Set((null !== (ip = Zp.get(pp.path)) && void 0 !== ip ? ip : []).filter((ip => !Fp.has(`${pp.path}:${ip.index}`))).map((pp => pp.index))),
+           Op = function(pp, ip) {
+             const cp = HD(pp.before, pp.after),
+               Op = cp.flatMap((pp => "same" === pp.kind ? [pp.text] : ip.has(pp.index) ? pp.added : pp.removed));
+             if (0 === Op.length) return "";
+             const op = (cp.every((pp => "same" === pp.kind || ip.has(pp.index))) ? pp.after : pp.before).endsWith("\n") ? "\n" : "";
+             return `${Op.join("\n")}${op}`
+           }(pp, cp);
+         return Op === pp.before ? [] : [{
+           ...pp,
+           after: Op
+         }]
+       }))
+     }), [Pp.changes, Zp, Fp]),
+     oi = (0, Op.useMemo)((() => Oi && kp ? kp(Oi) : []), [Oi, kp]);
+   (0, Op.useEffect)((() => {
+ ... (460 more added lines; see GitHub link above)
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10667-L10671` → after: `L13758-L13764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13758-L13764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13758-L13764) · [Before (L10667-L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10667-L10671)

```diff
-         let ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const QC = this.getRawEntityName(CC);
-         if (void 0 === QC) return;
-         const wC = null !== (zC = (0, qq.f)(CC, "hideNameSeed")) && void 0 !== zC ? zC : null;
-         return (0, fN.b)(QC, ZC, wC)
+         const ip = JSON.parse(null !== (pp = localStorage.getItem(sD)) && void 0 !== pp ? pp : "{}");
+         return "object" !== typeof ip || null === ip ? {} : Object.fromEntries(Object.entries(ip).filter((pp => {
+           let [, ip] = pp;
+           return Array.isArray(ip) && ip.every((pp => "number" === typeof pp))
+         })))
+       } catch {
+         return {}
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10673` → after: `L13766-L13824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13766-L13824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13766-L13824) · [Before (L10673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10673)

```diff
-       syncHiddenPlayerName(CC, zC) {
+     }()), [Qi, Ji] = (0, Op.useState)(pY), Bi = (0, Op.useRef)(Qi);
+     Bi.current = Qi;
+     const Ni = Qi && Qp,
+       Ti = (0, Op.useRef)(!1),
+       [fi, bi] = (0, Op.useState)(null),
+       [ai, ni] = (0, Op.useState)(""),
+       [Fi, gi] = (0, Op.useState)([]),
+       [Gi, ri] = (0, Op.useState)(null),
+       [Zi, zi] = (0, Op.useState)(new Set),
+       [si, Ki] = (0, Op.useState)(null !== (ip = Ii.dismissedErrorCounts.get(ap.key)) && void 0 !== ip ? ip : 0),
+       [Vi, pc] = (0, Op.useState)(!1),
+       [ic, cc] = (0, Op.useState)(Date.now),
+       Oc = (0, Op.useRef)(null),
+       oc = (0, Op.useRef)(null),
+       Ic = (0, Op.useRef)([]),
+       [Sc, xc] = (0, Op.useState)(0),
+ ... (43 more added lines; see GitHub link above)
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10675-L10683` → after: `L13826-L13894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13826-L13894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13826-L13894) · [Before (L10675-L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10675-L10683)

```diff
-         const QC = null !== (ZC = this.getRawEntityName(CC)) && void 0 !== ZC ? ZC : this.getRawEntityName((0, uC.c)(CC));
-         void 0 !== QC && (null === zC || void 0 === zC ? oN.d.delete(QC) : oN.d.set(QC, zC))
-       }
-       removeAllEntityNames() {
-         super.removeAllEntityNames(), oN.d.clear()
-       }
-       removeEntityName(CC) {
-         const zC = this.getRawEntityName(CC);
-         void 0 === zC || (0, qq.e)().has(CC) || oN.d.delete(zC), super.removeEntityName(CC)
+         const cp = pp.getBoundingClientRect().top,
+           Op = ip => pp.scrollTop + ip.getBoundingClientRect().top - cp;
+         let op = Op(Ip);
+         const xp = Ip.querySelector(".WorldCodeAiDiff-added, .WorldCodeAiDiff-removed"),
+           Lp = Ip.querySelector(".WorldCodeAiChangeHeader"),
+           Yp = Ip.querySelector(".WorldCodeAiChangeActions-sticky");
+         if (null !== (Sp = ip.warnings) && void 0 !== Sp && Sp.length && xp && Lp && Yp) {
+           const ip = Ip.querySelector(".WorldCodeAiDiff-marked"),
+             cp = xp.getBoundingClientRect().height,
+             Sp = ip ? Op(ip) + 2 * cp + Yp.offsetHeight - pp.clientHeight : Op(xp) + 3 * cp + Yp.offsetHeight - pp.clientHeight;
+           op = Math.max(op, Math.min(Sp, ip ? Op(ip) - cp : Op(Lp)))
+         } else if (Lp && Yp) {
+           const ip = Ip.querySelectorAll(".WorldCodeAiChangeWhy li"),
+             cp = ip[ip.length - 1];
+           if (cp) {
+             const ip = Op(cp) + cp.getBoundingClientRect().height + Yp.offsetHeight - pp.clientHeight;
+ ... (53 more added lines; see GitHub link above)
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10685-L10686` → after: `L13896-L13906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13896-L13906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13896-L13906) · [Before (L10685-L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10685-L10686)

```diff
-       qB(CC) {
-         return CC === this.MN.qE ? (0, dC.f)(CC) : this.client.getEntityScale(CC)
+     }), [Fp]);
+     const Rc = null !== (op = null === (Wp = xi.findLast((pp => pp.target.key === ap.key))) || void 0 === Wp ? void 0 : Wp.retryAt) && void 0 !== op ? op : 0,
+       qc = KI(ic),
+       Mc = null !== Pi || Rc > ic || qc > ic;
+     (0, Op.useEffect)((() => {
+       if (!Mc) return;
+       const pp = setInterval((() => {
+         cc(Date.now())
+       }), 1e3);
+       return () => {
+         clearInterval(pp)
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10688` → after: `L13908-L13910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13908-L13910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13908-L13910) · [Before (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10688)

```diff
-       getPlayerRanks(CC) {
+     }), [Mc]);
+     const Cc = Bp > si && Jp.length > 0 ? Jp[Jp.length - 1] : null,
+       Ec = (0, Op.useMemo)((() => Cc ? function(pp, ip) {
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10703-L10705` → after: `L13913-L13925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13913-L13925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13913-L13925) · [Before (L10703-L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10703-L10705)

```diff
-         return (0, uC.c)(CC) !== this.MN.qE && (WC = [zC + .5, ZC + 1, QC + .5]), Mo.e.play(FC, 1, WC), {
-           success: !0,
-           ...bC
+         for (const [op, Ip] of Object.entries(ip)) {
+           const {
+             text: ip,
+             line: cp
+           } = jL(pp, Ip);
+           if (void 0 !== cp) {
+             if (Op) return jL(pp);
+             Op = {
+               text: ip,
+               path: op,
+               line: cp
+             }
+           }
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10707-L10810` → after: `L13927-L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13927-L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13927-L13952) · [Before (L10707-L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10707-L10810)

```diff
-       }
-       isExecutingUserCode() {
-         return !1
-       }
-       Gy(CC, zC, ZC) {
-         return this.MN.fN.Gy(CC, zC, ZC)
-       }
-       updateWalkThroughRect(CC, zC, ZC) {
-         const {
-           Rb: QC,
-           qT: wC
-         } = this.MN.fN;
-         this.updateWalkThroughRectContext(CC, zC, ZC, QC, wC)
-       }
-       removeConsumableVehiclePhysics(CC, zC) {
-         const ZC = this.MN.JR.yCC(this.MN.qE);
- ... (88 more removed lines; see GitHub link above)
+         return null !== (cp = Op) && void 0 !== cp ? cp : jL(pp)
+       }(Cc, Xp) : {
+         text: ""
+       }), [Cc, Xp]),
+       Xc = function(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ap;
+         const cp = Hc();
+         return vi(!1), ei(!1), Ai((Op => [...Op, {
+           ...pp,
+           id: cp,
+           target: ip
+         }])), cp
+       },
+       lc = pp => pp.target.key === ap.key,
+       Qc = (pp, ip) => {
+         Ai((cp => cp.map((cp => cp.id === pp ? {
+ ... (10 more added lines; see GitHub link above)
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10813-L10819` → after: `L13955-L13957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13955-L13957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13955-L13957) · [Before (L10813-L10819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10813-L10819)

```diff
-       const zC = {};
-       if (!CC.armour) return zC;
-       for (const [ZC, QC] of CC.armour.entries()) zC[ZC] = {
-         itemName: QC.itemName,
-         enchantmentTier: QC.enchantmentTier
-       };
-       return zC
+       return !!fx(Ex.getState()) && (Vx().then((ip => {
+         ip || pp()
+       })), !0)
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10821-L10824` → after: `L13959-L13962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13959-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13959-L13962) · [Before (L10821-L10824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10821-L10824)

```diff
- 
-     function hN(CC) {
-       const zC = {};
-       for (const [QC, wC] of Object.entries((0, dC.i)(CC))) {
+     const Tc = pp => {
+         !Ri && Nc(pp) || pp()
+       },
+       fc = async function(pp, ip) {
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10826-L10936` → after: `L13964-L14037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR13964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L13964-L14037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L13964-L14037) · [Before (L10826-L10936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10826-L10936)

```diff
-         if (null !== wC.itemName) zC[QC] = {
-           itemName: wC.itemName,
-           enchantmentTier: null !== (ZC = wC.enchantmentTier) && void 0 !== ZC ? ZC : ""
-         }
-       }
-       return zC
-     }
- 
-     function KN(CC) {
-       if (!CC) return;
-       const zC = {};
-       for (const ZC of pN.y) ZC in CC && (zC[ZC] = CC[ZC]);
-       return zC
-     }
- 
-     function YN(CC) {
- ... (95 more removed lines; see GitHub link above)
+         let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const {
+           check: Ip = void 0 === ip,
+           about: Sp = (null !== ip && void 0 !== ip ? ip : pp.trim()),
+           planStep: xp,
+           wordsOnly: Lp = !1,
+           asked: Yp,
+           failedEdits: Dp,
+           isAutoFix: Ap = !1,
+           autoFixRound: Pp = 0,
+           useFree: Wp,
+           retryOf: wp,
+           continueFrom: vp,
+           lookups: Hp = [],
+           lookupRound: dp = 0,
+           worldCodeFiles: ep,
+ ... (58 more added lines; see GitHub link above)
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10938-L10967` → after: `L14039-L14047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR14039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L14039-L14047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L14039-L14047) · [Before (L10938-L10967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10938-L10967)

```diff
-         if (null !== MC && void 0 !== MC && MC.OzC) {
-           var pC, PC, GC, RC, AC, xC;
-           const CC = zC.JR.yCC(zC.qE),
-             ZC = (0, aW.s)(zC.bloxd.getResolvedPhysicsSettings(zC.qE, CC.physicsState), CC.steeringHeading, rq.b.getPlayerFacingHeading(zC));
-           SC = [null !== (pC = null !== (PC = null === gC || void 0 === gC || null === (GC = gC.serverSetRotation) || void 0 === GC ? void 0 : GC[0]) && void 0 !== PC ? PC : FC.xRotation) && void 0 !== pC ? pC : 0, ZC, null !== (RC = null !== (AC = null === gC || void 0 === gC || … [truncated]
-         } else if (null !== gC && void 0 !== gC && gC.renderRotation) SC = iN(gC.renderRotation);
-         else if (WC) {
-           var JC, IC;
-           SC = [0, null !== (JC = null !== (IC = WC.heading) && void 0 !== IC ? IC : FC.yRotation) && void 0 !== JC ? JC : 0, 0]
-         } else SC = [FC.xRotation, FC.yRotation, FC.zRotation];
-         const iC = HN({
-           type: null !== (QC = null !== (wC = FC.type) && void 0 !== wC ? wC : CC.getEntityType(ZC)) && void 0 !== QC ? QC : "Player",
-           name: null !== (bC = null !== (nC = FC.name) && void 0 !== nC ? nC : zC.bloxd.getRawEntityName(ZC)) && void 0 !== bC ? bC : "",
-           position: iN(zC.JR.yG(ZC)),
-           rotation: SC,
-           scale: (0, dC.f)(ZC),
- ... (14 more removed lines; see GitHub link above)
+         if (ii) Si = Zp >= 0 ? xi[Zp].id : -1;
+         else if (void 0 !== kp && Zp < 0) Si = kp;
+         else if (Zp >= 0) Si = xi[Zp].id, Ai((pp => pp.filter((pp => pp.id !== wp)).map((pp => pp.id === Si ? {
+           ...pp,
+           isNotice: void 0,
+           isUnchecked: bp || void 0
+         } : pp))));
+         else {
+           const pp = Ap && ap > 0;
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L10969-L11048` → after: `L14049-L14062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR14049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L14049-L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L14049-L14062) · [Before (L10969-L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L10969-L11048)

```diff
-             type: null !== (QC = null !== (wC = FC.type) && void 0 !== wC ? wC : CC.getEntityType(ZC)) && void 0 !== QC ? QC : "Player",
-             name: null !== (bC = FC.name) && void 0 !== bC ? bC : "",
-             position: [FC.x, FC.y, FC.z],
-             rotation: [FC.xRotation, FC.yRotation, FC.zRotation],
-             scale: null !== (nC = FC.scale) && void 0 !== nC ? nC : 1,
-             followingEId: null !== (fC = FC.followingEId) && void 0 !== fC ? fC : null,
-             followingOffset: vN(FC.followingOffset),
-             shouldMatchFollowingEntityRotation: null === (oC = FC.shouldMatchFollowingEntityRotation) || void 0 === oC || oC,
-             armour: eN(FC),
-             QE: KN(null === (qC = zC.QE[zC.qE]) || void 0 === qC ? void 0 : qC[ZC]),
-             playerCustomisations: xN.d[ZC],
-             colyEntity: FC
-           });
-         return mN(WC, FC), WC
-       }(CC, zC, ZC))
-     }
- ... (64 more removed lines; see GitHub link above)
+             role: "user",
+             text: pp ? Mp : null !== ip && void 0 !== ip ? ip : Mp,
+             changes: [],
+             status: "offered",
+             about: Sp,
+             planStep: xp,
+             isUnchecked: bp || void 0,
+             ...Vp ? {
+               asked: Vp
+             } : {},
+             ...pp ? {
+               logTitle: Dp ? "Part of the AI's change didn't go in, so it was asked to make it again" : "The AI's code had an error, so it was sent back to the AI to fix"
+             } : {}
+           })
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11050-L11054` → after: `L14064-L15014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR14064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L14064-L15014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L14064-L15014) · [Before (L11050-L11054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11050-L11054)

```diff
-       return {
-         selectedSlotIndex: null !== (ZC = zC.selectedSlotIndex) && void 0 !== ZC ? ZC : CC.selectedSlotIndex,
-         slots: QC
-       }
-     }
+         const Li = {
+             lookups: Hp,
+             lookupRound: dp,
+             worldCodeFiles: ep,
+             viewedPaths: jp
+           },
+           Di = {
+             retry: Mp,
+             retryShown: ip,
+             chatGpt: null === ci || void 0 === ci ? void 0 : ci.chatGpt,
+             retryOptions: {
+               check: Fp,
+               about: Sp,
+               planStep: xp,
+               wordsOnly: Lp,
+               useFree: Cp,
+ ... (935 more added lines; see GitHub link above)
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11056-L11057` → after: `L15016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15016) · [Before (L11056-L11057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11056-L11057)

```diff
-     function tN(CC, zC) {
-       const ZC = uN(CC);
+     function zc(pp, ip, cp) {
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11059-L11060` → after: `L15018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15018) · [Before (L11059-L11060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11059-L11060)

```diff
-         for (let CC = 0; CC < XC.q; CC++) {
-           const wC = zC.slots[CC];
+         if (Fi.length < 3) {
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11062-L11063` → after: `L15020-L15027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15020-L15027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15020-L15027) · [Before (L11062-L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11062-L11063)

```diff
-           if (wC) ZC.setItemSlot(CC, wC.name, null !== (QC = wC.amount) && void 0 !== QC ? QC : 0, XN(wC.attributes));
-           else ZC.setItemSlot(CC, "Air", 0)
+           const op = null !== (Op = cp.useFree) && void 0 !== Op ? Op : Ri && null !== nO;
+           op && qi(!1), gi([...Fi, {
+             id: Hc(),
+             text: pp,
+             shown: ip,
+             ...cp,
+             useFree: op
+           }])
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11065-L11107` → after: `L15029-L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15029-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15029-L15043) · [Before (L11065-L11107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11065-L11107)

```diff
-         ZC.getSelectedSlotIndex() !== zC.selectedSlotIndex && (ZC.setSelectedSlotIndex(zC.selectedSlotIndex), pC.o.bp("setSelectedInventorySlotI", zC.selectedSlotIndex))
-       }
-     }
- 
-     function DN(CC) {
-       const zC = {};
-       for (const ZC of CC) zC[ZC] = zo.e.get(ZC);
-       return zC
-     }
- 
-     function jN(CC, zC) {
-       const ZC = {};
-       for (const QC of CC) QC in zC && (ZC[QC] = zC[QC]);
-       Object.keys(ZC).length > 0 && zo.e.apply(ZC)
-     }
- 
- ... (27 more removed lines; see GitHub link above)
+       } else fc(pp, ip, cp)
+     }(0, Op.useEffect)((() => {
+       var pp, ip, cp;
+       const [Op, ...op] = Fi;
+       if (Pi || !Op || Sc > 0) return;
+       const Ip = null === (pp = Op.followUp) || void 0 === pp ? void 0 : pp.lookupOf;
+       if (void 0 !== Ip && !xi.some((pp => pp.id === Ip))) return void gi(op);
+       if (null === (ip = Op.replaced) || void 0 === ip ? void 0 : ip.some((pp => {
+           var ip;
+           let {
+             path: cp,
+             text: Op
+           } = pp;
+           return (null !== (ip = Xp[cp]) && void 0 !== ip ? ip : "") === Op
+         }))) {
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11109-L11111` → after: `L15045-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15045-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15045-L15052) · [Before (L11109-L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11109-L11111)

```diff
-         QC[bC] = ON(CC[bC], null !== (wC = zC[bC]) && void 0 !== wC ? wC : null, ZC, {
-           clearMissingFields: !0
-         })
+         const pp = (null !== (Sp = Op.until) && void 0 !== Sp ? Sp : 0) - Date.now();
+         if (pp <= 0) return void gi(op);
+         const ip = setTimeout((() => {
+           gi((pp => [...pp]))
+         }), pp);
+         return () => {
+           clearTimeout(ip)
+         }
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11113-L11128` → after: `L15054-L15075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15054-L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15054-L15075) · [Before (L11113-L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11113-L11128)

```diff
-       return QC
-     }
- 
-     function VN(CC, zC) {
-       const ZC = function(CC, zC) {
-         return Math.floor(CC / zC) * zC
-       }(zC, CC.meta.keyframeIntervalTicks);
-       let QC = QM(CC.ticks[ZC]);
-       for (let wC = ZC + 1; wC <= zC; wC++) QC = wM(QC, CC.ticks[wC]);
-       return QC
-     }
- 
-     function CM(CC, zC) {
-       return {
-         ...CC,
-         ...zC
+       if (void 0 !== Op.opensPath && Op.opensPath !== lp) {
+         var xp;
+         (null === (xp = gc.current) || void 0 === xp ? void 0 : xp.id) !== Op.id && (gc.current = {
+           id: Op.id,
+           until: Date.now() + 3e3
+         }, Fc.current({
+           role: "assistant",
+           text: DA(Op.opensPath),
+           changes: [],
+           status: "offered",
+           isNotice: !0,
+           isCalm: !0
+         }), hp(Op.opensPath, 1));
+         const pp = gc.current.until - Date.now();
+         if (pp > 0) {
+           const ip = setTimeout((() => {
+ ... (6 more added lines; see GitHub link above)
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11130-L11135` → after: `L15077-L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15077-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15077-L15084) · [Before (L11130-L11135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11130-L11135)

```diff
-     }
- 
-     function zM(CC, zC) {
-       if (!CC) return zC;
-       const ZC = {
-         ...CC
+       const Lp = null !== (cp = Op.followUp) && void 0 !== cp ? cp : {
+         ...void 0 === Op.shown ? {} : {
+           check: Op.check,
+           wordsOnly: Op.wordsOnly,
+           isAutoFix: Op.isAutoFix,
+           autoFixRound: Op.autoFixRound
+         },
+         useFree: Op.useFree
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11137-L11139` → after: `L15086-L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15086-L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15086-L15096) · [Before (L11137-L11139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11137-L11139)

```diff
-       for (const QC of Object.keys(zC)) {
-         const CC = zC[QC];
-         null === CC ? delete ZC[QC] : void 0 !== CC && (ZC[QC] = CC)
+       SP(Lp) && fx(Ex.getState()) ? Gc !== Op.id && (rc(Op.id), Vx()) : (gi(op), nc.current(Op.text, Op.shown, Lp))
+     }), [Pi, Fi, Sc, Xp, xi, lp, hp, Bc, Gc]);
+     const sc = (0, Op.useRef)(zc);
+     sc.current = zc, (0, Op.useEffect)((() => {
+       if (ii) {
+         var pp;
+         if (null === ci || void 0 === ci || ci(), "change" === ii.action) return ri(ii), void(null === (pp = tc.current) || void 0 === pp || pp.focus());
+         ri(null), sc.current(WA(ii), yA(ii), {
+           check: !1,
+           wordsOnly: "explain" === ii.action
+         })
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11141-L11153` → after: `L15098-L15151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15098-L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15098-L15151) · [Before (L11141-L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11141-L11153)

```diff
-       return ZC
-     }
- 
-     function ZM(CC, zC) {
-       const ZC = {};
-       for (const wC of Object.keys(zC)) {
-         var QC;
-         ZC[wC] = zM(null !== (QC = CC[wC]) && void 0 !== QC ? QC : null, zC[wC])
-       }
-       return ZC
-     }
- 
-     function QM(CC) {
+     }), [ii, ci]);
+     const Kc = (pp, ip, cp) => {
+         rA.add(Fp, pp, ip, Date.now(), cp).then(Ui).catch((pp => {
+           console.error("World Code AI: couldn't keep a version of the code", pp)
+         }))
+       },
+       Vc = (0, Op.useRef)(new Set),
+       pO = async function(pp, ip) {
+         let {
+           tryAgainLater: cp = !1
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const Op = ec.current;
+         if (pp.changes.some((pp => {
+             var ip;
+             return (null !== (ip = Op[pp.path]) && void 0 !== ip ? ip : "") !== pp.before
+           }))) return Jc(pp.id, "stale"), !1;
+ ... (38 more added lines; see GitHub link above)
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11155-L11166` → after: `L15153-L15182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15153-L15182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15153-L15182) · [Before (L11155-L11166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11155-L11166)

```diff
-       return {
-         uiElements: CC.uiElements,
-         entities: CC.entities,
-         items: CC.items,
-         environment: CC.environment,
-         hotbar: CC.hotbar ? aN(null, CC.hotbar) : null,
-         playerHud: CC.playerHud ? zM(null, CC.playerHud) : null,
-         effects: null !== (zC = CC.effects) && void 0 !== zC ? zC : {}
-       }
-     }
- 
-     function wM(CC, zC) {
+       const ip = Ii.pendingApply;
+       if (!ip || ip.targetKey !== ap.key) return !0;
+       const cp = xi.find((pp => pp.id === ip.entryId));
+       if (!cp || "offered" !== cp.status) return Ii.pendingApply = void 0, !0;
+       const Op = null !== (pp = ip.picked) && void 0 !== pp ? pp : cp.changes,
+         op = sp && Qp && Op.every((pp => {
+           var ip;
+           return (null !== (ip = ec.current[pp.path]) && void 0 !== ip ? ip : "") === pp.before
+         }));
+       if (Date.now() > ip.until) return Ii.pendingApply = void 0, op && Xc({
+         role: "assistant",
+         text: "That change couldn't go in. Press Apply to try again.",
+         changes: [],
+         status: "offered",
+         isNotice: !0
+       }), !0;
+ ... (14 more added lines; see GitHub link above)
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11168-L11254` → after: `L15184-L15238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15184-L15238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15184-L15238) · [Before (L11168-L11254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11168-L11254)

```diff
-       return {
-         uiElements: CM(CC.uiElements, zC.uiElements),
-         entities: ZM(CC.entities, zC.entities),
-         items: ZM(CC.items, zC.items),
-         environment: CM(CC.environment, zC.environment),
-         hotbar: zC.hotbar ? aN(CC.hotbar, zC.hotbar) : CC.hotbar,
-         playerHud: zC.playerHud ? zM(CC.playerHud, zC.playerHud) : CC.playerHud,
-         effects: null !== (ZC = zC.effects) && void 0 !== ZC ? ZC : CC.effects
-       }
-     }
- 
-     function bM(CC, zC) {
-       return zC in CC && null !== CC[zC]
-     }
- 
-     function nM(CC, zC) {
- ... (71 more removed lines; see GitHub link above)
+       if ((null === (pp = Ii.pendingApply) || void 0 === pp ? void 0 : pp.targetKey) !== ap.key) return;
+       const ip = setInterval((() => {
+         cO.current().then((pp => {
+           pp && clearInterval(ip)
+         }))
+       }), 250);
+       return () => {
+         clearInterval(ip)
+       }
+     }), [Ii, ap.key, sp, Xp]);
+     const OO = (0, Op.useRef)((() => !0));
+     OO.current = () => {
+       const pp = Ii.pendingInsert;
+       if (!pp || pp.targetKey !== ap.key) return !0;
+       if (Date.now() > pp.until) return Ii.pendingInsert = void 0, Xc({
+         role: "assistant",
+ ... (39 more added lines; see GitHub link above)
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11256-L11289` → after: `L15240-L15400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15240-L15400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15240-L15400) · [Before (L11256-L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11256-L11289)

```diff
-       }
-       return zC
-     }
- 
-     function AM(CC, zC) {
-       for (const ZC of zC) switch (ZC.type) {
-         case "chunkAdded":
-           CC.set((0, MM.b)(ZC.chunkX, ZC.chunkY, ZC.chunkZ), {
-             lN: GM(ZC.rle),
-             sharedBlockData: PM(ZC.sharedBlockData)
-           });
-           break;
-         case "chunkRemoved":
-           CC.delete((0, MM.b)(ZC.chunkX, ZC.chunkY, ZC.chunkZ));
-           break;
-         case "TY":
- ... (18 more removed lines; see GitHub link above)
+       },
+       IO = (pp, ip) => {
+         let {
+           leavesChangeBehind: cp,
+           hasWorldCodePart: Op
+         } = ip;
+         cp ? Xc({
+           role: "assistant",
+           text: PP(Op),
+           changes: [],
+           status: "offered",
+           isNotice: !0
+         }) : (Xc({
+           role: "assistant",
+           text: "Taking you to World Code\u2026",
+           changes: [],
+ ... (145 more added lines; see GitHub link above)
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11291-L11334` → after: `L15402-L15430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15402-L15430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15402-L15430) · [Before (L11291-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11291-L11334)

```diff
-       const WC = [fC.c.mod(QC, XC.x), fC.c.mod(wC, XC.x), fC.c.mod(bC, XC.x)],
-         NC = FC.sharedBlockData.findIndex((CC => CC.pos[0] === WC[0] && CC.pos[1] === WC[1] && CC.pos[2] === WC[2]));
-       if (null === ZC) return void(-1 !== NC && FC.sharedBlockData.splice(NC, 1));
-       const MC = {
-         pos: WC,
-         data: pM(ZC)
-       }; - 1 === NC ? FC.sharedBlockData.push(MC) : FC.sharedBlockData[NC] = MC
-     }
- 
-     function IM(CC, zC) {
-       for (const wC of [...CC.iterateEntityIds()]) CC.disposeEntity(wC);
-       const ZC = new Set;
-       for (const wC of zC.JR.YH(zC.JR.names.position)) ZC.add(wC.mH);
-       for (const wC of zC.JR.YH("itemState")) ZC.add(wC.mH);
-       for (const wC of ZC) AN(zC, wC) || (zC.JR.deleteEntity(wC), (0, gM.d)(String(wC)));
-       zC.QE[zC.qE] && (zC.QE[zC.qE] = {});
- ... (28 more removed lines; see GitHub link above)
+       const ip = (0, lY.z)(pp);
+       Fc.current({
+         role: "assistant",
+         text: ip.text,
+         changes: [],
+         status: "offered",
+         isNotice: !0,
+         isCalm: 0 === pp.errors.length && void 0 !== pp.ranAt,
+         logTitle: ip.title
+       }), void 0 !== pp.ranAt && (0 !== pp.errors.length ? pp.autoFixRound >= 3 || (Ki(jc.current), gi((ip => [{
+         id: Hc(),
+         text: (0, lY.v)(pp.errors),
+         shown: 1 === pp.errors.length ? "Fix the error" : "Fix these errors",
+         check: !1,
+         isAutoFix: !0,
+         autoFixRound: pp.autoFixRound + 1
+ ... (13 more added lines; see GitHub link above)
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11337-L11361` → after: `L15433-L15506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15433-L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15433-L15506) · [Before (L11337-L11361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11337-L11361)

```diff
-       return zC
-     }
-     var hM = ZC(36375),
-       KM = ZC(36811);
-     class YM {
-       constructor(CC, zC) {
-         this.client = CC, this.MN = zC, this.isRecording = !1, this.isClipping = !1, this.clippingWanted = !1, this.sessionAllowsClipping = !1, this.maxClipTicks = PN.e * gC.f.clientTicksPerSecond, this.windowStartChunks = new Map, this.state = {
-           meta: {
-             formatVersion: pN.d,
-             recordedAt: "",
-             Jm: gC.f.clientTicksPerSecond,
-             keyframeIntervalTicks: pN.b,
-             gameNameWithVariation: "",
-             lobbyName: "",
-             gameName: "",
-             variation: void 0,
- ... (9 more removed lines; see GitHub link above)
+     }, yO = (0, Op.useCallback)((pp => pp.flatMap((pp => hA(KA(), pp, Oi)))), [Oi]), UO = (0, Op.useRef)({}), wO = (0, Op.useRef)({}), vO = (0, Op.useRef)(Promise.resolve()), tO = (0, Op.useRef)([]), HO = (0, Op.useRef)(new Map), dO = (0, Op.useRef)(new Map), eO = (0, Op.useRef)( … [truncated]
+       Ti.current = !1, tO.current = [], HO.current = new Map, dO.current = new Map, eO.current = null, UO.current = {}, wO.current = {}, bi(null)
+     }, jO = async () => {
+       if (!fi) return;
+       const pp = ec.current,
+         ip = function(pp, ip, cp) {
+           return Object.entries(ip).flatMap((ip => {
+             var Op;
+             let [op, Ip] = ip;
+             const Sp = cp[op];
+             if (void 0 === Sp) return [];
+             const xp = new Map(VY(null !== (Op = pp[op]) && void 0 !== Op ? Op : "").map((pp => [pp.key, pp.value]))),
+               Lp = new Map(VY(Ip).map((pp => [pp.key, pp.value])));
+             let Yp = Sp;
+             for (const [pp, cp] of xp) {
+               var Dp;
+ ... (58 more added lines; see GitHub link above)
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11363-L11379` → after: `L15508-L15554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15508-L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15508-L15554) · [Before (L11363-L11379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11363-L11379)

```diff
-         }, this.lastFullData = {
-           uiElements: {},
-           entities: {},
-           items: {},
-           environment: {},
-           hotbar: null,
-           playerHud: null,
-           effects: {}
-         }, this.pendingStructuralEvents = [], this.pendingEphemeralEvents = [], this.effectTracker = new LN.e;
-         const ZC = () => {
-           this.recordTick()
-         };
-         this.MN.on("ZN", ZC);
-         const QC = pC.o.subscribe("EffectUpdate", (CC => {
-             this.isCapturing() && this.effectTracker.handleUpdate({
-               ...CC,
- ... (1 more removed lines; see GitHub link above)
+         }
+       else qO(pp.id, "declined")
+     }, CO = pp => {
+       var ip;
+       const cp = null === (ip = xi.find((ip => ip.id === pp))) || void 0 === ip ? void 0 : ip.target.key;
+       return xi.findLast((ip => "user" === ip.role && ip.id < pp && ip.target.key === cp))
+     }, EO = pp => {
+       var ip;
+       return null === (ip = CO(pp)) || void 0 === ip ? void 0 : ip.asked
+     }, XO = pp => {
+       var ip, cp;
+       const Op = CO(pp);
+       return null !== (ip = null !== (cp = null === Op || void 0 === Op ? void 0 : Op.about) && void 0 !== cp ? cp : null === Op || void 0 === Op ? void 0 : Op.text) && void 0 !== ip ? ip : "a change"
+     }, lO = xi.filter(lc), QO = null === (Hp = lO[lO.length - 1]) || void 0 === Hp ? void 0 : Hp.id, JO = null !== (ep = null === (jp = lO.findLast((pp => "user" === pp.role))) || void 0 === jp ? void 0 : jp.id) && void 0 !== ep ? ep : 0, BO = lO.length < xi.length, NO = lO[lO.le … [truncated]
+       var cp;
+       fc(null !== (cp = pp.retry) && void 0 !== cp ? cp : "", pp.retryShown, {
+ ... (31 more added lines; see GitHub link above)
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11381-L11423` → after: `L15556-L15572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15556-L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15556-L15572) · [Before (L11381-L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11381-L11423)

```diff
-           })),
-           wC = pC.o.subscribe("RemoveEffect", (CC => {
-             this.isCapturing() && this.effectTracker.handleRemove(GN(CC.gQ), CC.name)
-           }));
-         (0, cC.onGameResetOnce)((() => {
-           this.MN.off("ZN", ZC), pC.o.unsubscribe(QC), pC.o.unsubscribe(wC)
-         }));
-         const bC = Hn.b.get("clientEscMenuOptions");
-         this.clippingWanted = bC.enableClipping, this.maxClipTicks = bC.clipDurationSeconds * gC.f.clientTicksPerSecond
-       }
-       onGameSessionStarted() {
-         this.sessionAllowsClipping = !0;
-         const CC = zo.e.subscribe("canRecordReplays", (CC => {
-           this.onCanRecordReplaysChanged(CC)
-         }));
-         (0, cC.onGameResetOnce)(CC), this.onCanRecordReplaysChanged(this.gameAllowsReplays())
- ... (27 more removed lines; see GitHub link above)
+           }
+         }),
+         noticeActions: (pp, ip, cp) => ({
+           notice: cp.notice,
+           onRetry: () => {
+             op(ip, {
+               retryOf: pp
+             })
+           },
+           onUseFree: () => {
+             op(ip, {
+               useFree: !0,
+               retryOf: pp
+             })
+           },
+           onCheckKey: Ip
+ ... (1 more added lines; see GitHub link above)
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11425-L11428` → after: `L15574-L15617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15574-L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15574-L15617) · [Before (L11425-L11428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11425-L11428)

```diff
-       stopCapture() {
-         this.endRecording({
-           resumeClipping: !1
-         }), this.stopClippingBuffer()
+     }({
+       entries: lO,
+       busy: !!Pi,
+       send: (pp, ip) => {
+         let {
+           useFree: cp,
+           retryOf: Op,
+           continueFrom: op
+         } = ip;
+         const Ip = xi.find((pp => pp.id === Op));
+         return fc(pp, null === Ip || void 0 === Ip ? void 0 : Ip.retryShown, {
+           ...null === Ip || void 0 === Ip ? void 0 : Ip.retryOptions,
+           useFree: cp,
+           retryOf: Op,
+           continueFrom: op
+         })
+ ... (28 more added lines; see GitHub link above)
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11430` → after: `L15619-L15639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15619-L15639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15619-L15639) · [Before (L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11430)

```diff
-       onReplayViewerOpenChanged(CC) {
+       const pp = setTimeout((() => {
+         cc(Date.now())
+       }), Math.max(0, (rO - ic - 1) % 6e4 + 1 - (Date.now() - ic)));
+       return () => {
+         clearTimeout(pp)
+       }
+     }), [rO, ic]);
+     const zO = nO ? `${nO.id}/${nO.model.id}` : null;
+     (0, Op.useEffect)((() => {
+       qi(!1)
+     }), [zO]);
+     const sO = Object.values(Xp).some((pp => "" !== pp.trim())),
+       KO = wi || di || ui || null !== ki,
+       VO = "aiAnswer" === mO || ("aiNotes" === mO || "aiGameSettings" === mO || "aiGear" === mO) && KO ? mO : "aiPanel",
+       po = (0, Op.useRef)(null),
+       io = (0, Op.useRef)(null),
+ ... (5 more added lines; see GitHub link above)
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11432-L11460` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15641) · [Before (L11432-L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11432-L11460)

```diff
-         CC ? this.stopClippingBuffer() : !this.clippingWanted || null !== (zC = this.client.gameReplayer) && void 0 !== zC && zC.isReplayMode() || this.setClippingEnabled(!0)
-       }
-       suspendCaptureForLeave() {
-         this.sessionAllowsClipping = !1, this.stopCapture()
-       }
-       toggleRecording() {
-         this.isRecording ? this.endRecording() : this.startRecording()
-       }
-       recordFlyingMiddleText(CC, zC, ZC, QC) {
-         this.ifCapturing((() => {
-           this.pendingEphemeralEvents.push({
-             type: "flyingMiddleText",
-             content: CC,
-             Jb: zC,
-             angle: ZC,
-             Ib: QC
- ... (13 more removed lines; see GitHub link above)
+         null === (pp = (ki ? po : io).current) || void 0 === pp || pp.focus()
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11462-L11472` → after: `L15643-L15653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15643-L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15643-L15653) · [Before (L11462-L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11462-L11472)

```diff
-       recordAnimateEntity(CC, zC, ZC, QC, wC) {
-         this.ifCapturing((() => {
-           this.pendingEphemeralEvents.push({
-             type: "animateEntity",
-             yw: GN(CC),
-             Lw: zC,
-             animationScript: ZC,
-             Uw: QC,
-             Bw: wC
-           })
-         }))
+     }), [ki]), (0, Op.useEffect)((() => {
+       const pp = wc.current;
+       if (!ki || !pp) return;
+       pp.scrollTo({
+         top: 0
+       });
+       const ip = "settings" === ki && bO.current ? pp.querySelector(".WorldCodeAiModelRow.Selected") : null;
+       if (ip && ip.getBoundingClientRect().bottom > pp.getBoundingClientRect().bottom && !IY(pp, ip)) {
+         const cp = pp.getBoundingClientRect(),
+           Op = ip.getBoundingClientRect();
+         pp.scrollTop += Op.top - cp.top - (cp.height - Op.height) / 2
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11474-L11481` → after: `L15655-L15690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15655-L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15655-L15690) · [Before (L11474-L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11474-L11481)

```diff
-       recordBulletShot(CC, zC) {
-         this.ifCapturing((() => {
-           this.pendingEphemeralEvents.push({
-             type: "bullet",
-             UC: GN(CC),
-             bulletDirections: zC
-           })
-         }))
+       return () => {
+         pp.style.paddingBottom = ""
+       }
+     }), [ki]);
+     const {
+       disclosureRef: Oo,
+       gearLabelRef: Io,
+       hasGearLabel: So
+     } = function(pp, ip) {
+       const cp = (0, Op.useRef)(null),
+         op = (0, Op.useRef)(null),
+         Ip = (0, Op.useRef)(0),
+         [Sp, xp] = (0, Op.useState)(!0);
+       return (0, Op.useLayoutEffect)((() => {
+         const ip = cp.current;
+         if (!ip || "undefined" === typeof ResizeObserver) return;
+ ... (20 more added lines; see GitHub link above)
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11483-L11492` → after: `L15692-L15739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15692-L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15692-L15739) · [Before (L11483-L11492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11483-L11492)

```diff
-       onChunkAdded(CC, zC, ZC, QC) {
-         this.ifCapturing((() => {
-           const wC = PM(this.MN.bloxd.blockDataOwner.getSharedBlockArr(CC, zC, ZC));
-           this.pendingStructuralEvents.push({
-             type: "chunkAdded",
-             chunkX: CC,
-             chunkY: zC,
-             chunkZ: ZC,
-             rle: [...WM.encode(QC.data)],
-             sharedBlockData: wC
+     }(io, KO), Lo = () => {
+       var pp;
+       gi([]), null === (pp = Oc.current) || void 0 === pp || pp.abort(), Uc()
+     }, Yo = (0, Sp.jsxs)("div", {
+       className: Ip()("WorldCodeAiPanel", ki && "WorldCodeAiPanel-aiView"),
+       children: [(0, Sp.jsxs)("div", {
+         className: "WorldCodeAiHeader",
+         children: [(0, Sp.jsx)("span", {
+           className: "WorldCodeAiTitle",
+           children: "AI Helper"
+         }), (0, Sp.jsx)("span", {
+           ref: Oo,
+           className: "WorldCodeAiDisclosure",
+           title: "AI can be wrong. Check its changes.",
+           children: "AI can be wrong."
+         }), KO && (0, Sp.jsx)("button", {
+ ... (32 more added lines; see GitHub link above)
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L11494-L35363` → after: `L15741-L16632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR15741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L15741-L16632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L15741-L16632) · [Before (L11494-L35363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L11494-L35363)

```diff
-         }))
-       }
-       onChunkRemoved(CC, zC, ZC) {
-         this.ifCapturing((() => {
-           var QC, wC;
-           const bC = null === (QC = this.MN.fN.PS.GS(CC, zC, ZC)) || void 0 === QC || null === (wC = QC.lN) || void 0 === wC ? void 0 : wC.data,
-             nC = bC ? [...WM.encode(bC)] : [],
-             fC = PM(this.MN.bloxd.blockDataOwner.getSharedBlockArr(CC, zC, ZC));
-           this.pendingStructuralEvents.push({
-             type: "chunkRemoved",
-             chunkX: CC,
-             chunkY: zC,
-             chunkZ: ZC,
-             rle: nC,
-             sharedBlockData: fC
-           })
- ... (23854 more removed lines; see GitHub link above)
+         }), !KO && kO && (0, Sp.jsx)(mY, {
+           step: "aiGameSettings",
+           placement: "bottom",
+           children: (0, Sp.jsx)("button", {
+             className: Ip()("WorldCodeAiLinkButton", ui && "WorldCodeAiLinkButton-active"),
+             "aria-pressed": ui,
+             onClick: () => {
+               uO(), vi(!1), ei(!1), ji(!ui)
+             },
+             children: "Game settings"
+           })
+         }), !KO && yi.length > 0 && (0, Sp.jsx)("button", {
+           className: Ip()("WorldCodeAiLinkButton", wi && "WorldCodeAiLinkButton-active"),
+           "aria-pressed": wi,
+           onClick: () => {
+             cc(Date.now()), ei(!1), ji(!1), vi(!wi)
+ ... (876 more added lines; see GitHub link above)
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35365-L35372` → after: `L16634-L16637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16634-L16637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16634-L16637) · [Before (L35365-L35372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35365-L35372)

```diff
-     function fC(CC, zC, ZC) {
-       const QC = "Slab" === ZC ? MC : FC,
-         wC = {};
-       return zC.forEach((zC => {
-         const bC = `${zC} ${CC}`;
-         Object.assign(wC, QC(`${bC} ${ZC}`, bC))
-       })), wC
-     }
+   function Ip(pp) {
+     const ip = (null !== pp && void 0 !== pp ? pp : "").match(/-?\d+(?:\.\d+)?/g);
+     return ip && ip.length >= 3 ? [Number(ip[0]), Number(ip[1]), Number(ip[2])] : null
+   }
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35374-L35383` → after: `L16639-L16641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16639-L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16639-L16641) · [Before (L35374-L35383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35374-L35383)

```diff
-     function oC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       const QC = {};
-       return zC.forEach((zC => {
-         QC[`${zC} ${CC}`] = [{
-           item: "Maple Wood Planks",
-           amt: ZC
-         }]
-       })), QC
-     }
+   function Sp(pp, ip) {
+     return pp === ip ? String(pp) : `${pp}-${ip}`
+   }
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35385-L35394` → after: `L16643-L16664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16643-L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16643-L16664) · [Before (L35385-L35394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35385-L35394)

```diff
-     function qC(CC, zC, ZC) {
-       return {
-         [CC]: [{
-           requires: [{
-             items: [zC],
-             amt: ZC
-           }],
-           produces: 4,
-           station: "Artisan Bench"
-         }]
+   function xp(pp, ip, cp, Op) {
+     const op = [];
+     let Ip = new Map;
+     for (let Sp = pp[2]; Sp < pp[2] + ip; Sp++) {
+       const xp = new Map;
+       let Lp = pp[0];
+       for (; Lp < pp[0] + ip;) {
+         const op = Op(Lp, cp, Sp);
+         let Yp = Lp;
+         for (; Yp + 1 < pp[0] + ip && Op(Yp + 1, cp, Sp) === op;) Yp++;
+         if (null !== op) {
+           const pp = `${Lp} ${Yp} ${op}`,
+             ip = Ip.get(pp);
+           ip ? (ip.z1 = Sp, Ip.delete(pp), xp.set(pp, ip)) : xp.set(pp, {
+             x0: Lp,
+             x1: Yp,
+ ... (6 more added lines; see GitHub link above)
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35398-L35399` → after: `L16671-L16685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16671-L16685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16671-L16685) · [Before (L35398-L35399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35398-L35399)

```diff
-     function FC(CC, zC) {
-       return qC(CC, zC, 3)
+   function Lp(pp, ip, cp, op) {
+     let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Op;
+     const Lp = [pp[0] + ip - 1, pp[1] + ip - 1, pp[2] + ip - 1],
+       Yp = null !== op && op.every(((ip, cp) => Math.floor(ip) >= pp[cp] && Math.floor(ip) <= Lp[cp])),
+       Dp = [`The chunk from ${pp.join(" ")} to ${Lp.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+     null !== op && Dp.push(`The player's feet are at ${op.map(Math.floor).join(" ")}, ${Yp?"in this chunk":"outside this chunk"}.`);
+     const Ap = [];
+     for (let Op = pp[1]; Op <= Lp[1]; Op++) {
+       const op = xp(pp, ip, Op, cp).join("; "),
+         Ip = Ap[Ap.length - 1];
+       (null === Ip || void 0 === Ip ? void 0 : Ip.boxes) === op ? Ip.to = Op : Ap.push({
+         from: Op,
+         to: Op,
+         boxes: op
+       })
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35401-L35411` → after: `L16687-L16694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16687-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16687-L16694) · [Before (L35401-L35411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35401-L35411)

```diff
- 
-     function WC(CC, zC) {
-       return {
-         [CC]: [{
-           requires: [{
-             items: [zC],
-             amt: 5
-           }],
-           produces: 3,
-           station: "Workbench"
-         }]
+     const Pp = Ap.filter((pp => "" !== pp.boxes));
+     0 === Pp.length && Dp.push("It is all air.");
+     let Wp = Dp.join("\n").length;
+     for (const Op of Pp) {
+       const pp = `y${Sp(Op.from,Op.to)}: ${Op.boxes}`;
+       if (Wp += pp.length + 1, Wp > Ip) {
+         Dp.push(`Cut short: the layers from y${Op.from} up aren't shown, as there are too many blocks.`);
+         break
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35415-L35425` → after: `L16723-L16730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16723-L16730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16723-L16730) · [Before (L35415-L35425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35415-L35425)

```diff
-     function NC(CC, zC) {
-       return {
-         [CC]: [{
-           requires: [{
-             items: [zC],
-             amt: 4
-           }],
-           produces: 1,
-           station: "Workbench"
-         }]
-       }
+   function Lp(pp) {
+     const ip = xp(op, pp);
+     return ip.length <= 3e4 ? {
+       url: ip,
+       sendsPrompt: !0
+     } : {
+       url: new URL(op.url).origin,
+       sendsPrompt: !1
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35428-L35443` → after: `L16757-L16759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16757-L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16757-L16759) · [Before (L35428-L35443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35428-L35443)

```diff
-     function MC(CC, zC) {
-       return qC(CC, zC, 2)
-     }
-   },
-   38714: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => QC.f
-     });
-     var QC = ZC(184)
-   },
-   38551: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => QC,
-       e: () => wC
-     });
-     const QC = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((CC => [CC, `${CC}_block`])));
+   function Dp(pp) {
+     return `/docs/${Yp(pp)}.md`
+   }
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35445-L35458` → after: `L16761-L16764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16761-L16764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16761-L16764) · [Before (L35445-L35458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35445-L35458)

```diff
-     function wC(CC) {
-       var zC;
-       return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : CC
-     }
-   },
-   39076: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => bC,
-       d: () => fC
-     });
-     var QC = ZC(326),
-       wC = ZC(4386);
-     const bC = new Set(wC.k),
-       nC = new Map;
+   function Ap(pp, ip) {
+     return `/docs/${Yp(pp)}/${ip+1}.md`
+   }
+   const Pp = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35460-L35464` → after: `L16766-L16770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16766-L16770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16766-L16770) · [Before (L35460-L35464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35460-L35464)

```diff
-     function fC(CC, zC) {
-       let ZC = nC.get(zC);
-       void 0 === ZC && (ZC = new Map, nC.set(zC, ZC));
-       let wC = ZC.get(CC);
-       return void 0 === wC && (wC = `${CC}${(0,QC.u)(zC)}`, ZC.set(CC, wC)), wC
+   function Wp(pp) {
+     const ip = Pp.exec(pp);
+     return null === ip ? null : {
+       name: ip[1],
+       part: void 0 === ip[2] ? null : Number(ip[2])
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35466-L35532` → after: `L16772-L16773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16772-L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16772-L16773) · [Before (L35466-L35532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35466-L35532)

```diff
-   },
-   39141: (CC, zC, ZC) => {
-     CC.exports = ZC.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
-   },
-   39150: (CC, zC, ZC) => {
-     CC.exports = ZC.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
-   },
-   39156: (CC, zC, ZC) => {
-     CC.exports = ZC.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
-   },
-   39161: (CC, zC, ZC) => {
-     CC.exports = ZC.p + "static/media/brood-father.e48391955a574c1155fa.webp"
-   },
-   39166: (CC, zC, ZC) => {
-     CC.exports = ZC.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
-   },
- ... (51 more removed lines; see GitHub link above)
+   }
+   const yp = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L35534-L35570` → after: `L16775-L16783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR16775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L16775-L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/92.js#L16775-L16783) · [Before (L35534-L35570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/92.js#L35534-L35570)

```diff
-     function bC() {
-       const CC = () => (0, QC.z)();
-       return {
-         memoryBytes: () => (0, QC.t)().buffer.byteLength,
-         reserveUpFront: zC => CC().RW(zC),
-         reserveAhead: zC => CC().GW(zC),
-         setCeiling: zC => {
-           CC().AW(zC)
-         },
-         lowWater: () => wC[CC().PW()] ?? "none",
-         stats: () => function(CC) {
-           const zC = new Uint32Array((0, QC.t)().buffer, CC, 17),
-             ZC = CC => zC[CC] ?? 0,
-             wC = CC => ({
-               upFront: ZC(CC),
-               ahead: ZC(CC + 1),
- ... (21 more removed lines; see GitHub link above)
+   function Up(pp) {
+     const ip = yp.exec(pp);
+     if (null === ip) return null;
+     const [, cp = "", Op] = ip;
+     return void 0 === Op ? Dp(cp) : Ap(cp, Number(Op) - 1)
+   }
+ 
+   function wp(pp) {
+     return `/docsHtml/${Yp(pp)}.html`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/93.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/93.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/93.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/93.js#L4)

```diff
-   4797: (CC, zC, ZC) => {
+   41507: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L6-L9` → after: `L6-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L6-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/93.js#L6-L130) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/93.js#L6-L9)

```diff
-       Howl: () => wC.Howl,
-       Howler: () => wC.Howler,
-       musicOutput: () => pC,
-       readyAudioContext: () => PC
+       DOCS_AGENT_PART_CHARS: () => Ti.e,
+       DOCS_LLMS_FULL_TXT_PATH: () => Ti.i,
+       DOCS_LLMS_TXT_PATH: () => Ti.j,
+       DOCS_LLMS_TXT_URL: () => Ti.n,
+       ROOT_LLMS_TXT_PATH: () => Ti.o,
+       allGamemodeSettings: () => Op.c,
+       arcadeModeStaticConfig: () => Up.b,
+       arenaStaticConfig: () => Si,
+       backroomsStaticConfig: () => Ii.b,
+       battleBoxStaticConfig: () => Di,
+       bedwarsStaticConfig: () => Ep.c,
+       bloxdAggregatorConfig: () => xp.e,
+       bloxdPreprodAggregatorConfig: () => Lp.d,
+       bloxdStagingAggregatorConfig: () => Yp.d,
+       bridgeBattleStaticConfig: () => hp.b,
+       captureTheFlagStaticConfig: () => Ui,
+ ... (109 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L11-L16` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/93.js#L132-L134) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/93.js#L11-L16)

```diff
-     var QC, wC = ZC(4801),
-       bC = ZC(3419),
-       nC = ZC(4587);
-     const fC = wC.Howler;
- 
-     function oC() {
+     var Op = cp(768);
+ 
+     function op(pp) {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L18-L27` → after: `L136-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L136-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/93.js#L136-L491) · [Before (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/93.js#L18-L27)

```diff
-       if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
-       const ZC = navigator.audioSession;
-       let QC;
-       "auto" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) && (ZC.type = "ambient");
-       try {
-         QC = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
+       return null !== (ip = null === (cp = (0, Op.i)(pp)) || void 0 === cp ? void 0 : cp.defaultListedVariation) && void 0 !== ip ? ip : pp
+     }
+     var Ip = cp(1005),
+       Sp = cp(1035),
+       xp = cp(759),
+       Lp = cp(755),
+       Yp = cp(757),
+       Dp = cp(752),
+       Ap = cp(744),
+       Pp = cp(774),
+       Wp = cp(791),
+       yp = cp(778),
+       Up = cp(782),
+       wp = cp(784),
+       vp = cp(788),
+       tp = cp(794),
+ ... (340 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L29-L122` → after: `L493-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L493-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/93.js#L493-L505) · [Before (L29-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/93.js#L29-L122)

```diff
-       const wC = QC.createGain();
-       wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
-     }
-     fC._mobileUnloaded = !0;
-     const qC = fC.volume.bind(wC.Howler);
-     fC.volume = function() {
-       return oC(), qC(...arguments)
-     };
-     const FC = fC.mute.bind(wC.Howler);
-     fC.mute = CC => (oC(), FC(CC));
-     const WC = wC.Howl.prototype,
-       NC = WC.init;
- 
-     function MC() {
-       for (; fC._html5AudioPool.length < fC.html5PoolSize;) {
-         const CC = new Audio;
- ... (78 more removed lines; see GitHub link above)
+     }
+     const yp = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+ 
+     function Up(pp) {
+       const ip = yp.exec(pp);
+       if (null === ip) return null;
+       const [, cp = "", Op] = ip;
+       return void 0 === Op ? Dp(cp) : Ap(cp, Number(Op) - 1)
+     }
+ 
+     function wp(pp) {
+       return `/docsHtml/${Yp(pp)}.html`
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/94.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/94.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L2)

```diff
- export const ids = [93, 94];
+ export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 94, 137, 138];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L4` → after: `L5-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L5-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L5-L1304) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L4)

```diff
-   36318: (CC, zC, ZC) => {
+   39448: (pp, ip, cp) => {
+     var Op = {
+       "./bedwars/bedwarsClient": 39456,
+       "./bridgeBattle/bridgeBattleClient": 39460,
+       "./buildAFactory2/buildAFactory2Client": 38704,
+       "./classic/classicClient": 39464,
+       "./clutch/clutchClient": 39472,
+       "./containmentBreach/containmentBreachClient": 39474,
+       "./cooking/cookingClient": 39608,
+       "./defusal/defusalClient": 39617,
+       "./frontline/frontlineClient": 39623,
+       "./goalRush/goalRushClient": 39631,
+       "./luckyBedwars/luckyBedwarsClient": 39640,
+       "./ninetyNineNights/ninetyNineNightsClient": 39642,
+       "./oneBlock/oneBlockClient": 39649,
+       "./plots/plotsClient": 39655,
+ ... (1284 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L6-L7` → after: `L1306-L29176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L1306-L29176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L1306-L29176) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L6-L7)

```diff
-       countDecodesAs: () => WC,
-       decodedAudio: () => NC
+       BloxdWasmFetchError: () => wS.c,
+       BloxdWasmHttpError: () => wS.d,
+       BloxdWasmIntegrityError: () => wS.g,
+       BloxdWasmTimeoutError: () => wS.j,
+       MAX_RETRY_AFTER_MS: () => wS.l,
+       PROMISE_HOOK_CODES: () => vS.e,
+       RETRY_DELAYS_MS: () => wS.m,
+       STALL_TIMEOUT_MS: () => wS.o,
+       WASM_HOOKS_ENFORCED: () => eS.b,
+       WasmBufferView: () => dS.b,
+       bloxdTextureWasmUrl: () => HS.d,
+       bloxdWasmCore: () => US.d,
+       compileBloxdTextureWasm: () => HS.g,
+       compileBloxdWasmAhead: () => yS.e,
+       compileBloxdWasmBrowser: () => yS.f,
+       describeBloxdWasmFailure: () => PS.i,
+ ... (27855 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L9-L11` → after: `L29178-L29179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29178-L29179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29178-L29179) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L9-L11)

```diff
-     var QC = ZC(3252),
-       wC = ZC(4797);
-     const bC = wC.Howler,
+     var Op = cp(6788);
+     const op = new Map,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L13-L19` → after: `L29181-L29192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29181-L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29181-L29192) · [Before (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L13-L19)

```diff
-     let fC = 0;
-     const oC = {
-         song: 0,
-         sheet: 0
-       },
-       qC = new WeakMap,
-       FC = new WeakSet;
+ 
+     function Sp(pp) {
+       const ip = JSON.stringify(pp),
+         cp = op.get(ip);
+       if (void 0 !== cp) return cp;
+       const Op = op.size + 1;
+       return op.set(ip, Op), Ip.set(Op, pp), Op
+     }
+ 
+     function xp(pp) {
+       return void 0 === pp ? void 0 : Ip.get(pp)
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L22` → after: `L29195-L29199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29195-L29199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29195-L29199) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L22)

```diff
-       return qC.set(CC, zC), CC
+       const cp = xp(pp);
+       if (!cp) throw new Error(`No shader pack code ${pp} for a ${ip} program`);
+       if (cp.program !== ip) throw new Error(`Shader pack code ${pp} is ${cp.program} code, for a ${ip} program`);
+       if (cp.strict && cp.hooks.vertex) throw new Error(`Shader pack code ${pp} is strict and has a vertex hook, which strict mode never runs`);
+       return cp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L25-L29` → after: `L29202-L29218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29202-L29218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29202-L29218) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L25-L29)

```diff
-     function NC() {
-       return {
-         bytes: fC,
-         songsDecoded: oC.song,
-         sheetsDecoded: oC.sheet
+     function Yp(pp, ip, cp) {
+       if ("off" === ip) return null;
+       const op = "strict" === ip,
+         Ip = pp.find((pp => pp.key.strict === op && pp.key.program === cp));
+       return !Ip || (0, Op.e)(Ip) ? null : {
+         strict: op,
+         program: cp,
+         code: Ip.moduleCode,
+         hooks: {
+           ...Ip.hooks
+         },
+         sceneDepth: Ip.sceneDepth,
+         sunShadow: Ip.sunShadow,
+         airShadow: Ip.airShadow,
+         movesVertices: Ip.movesVertices,
+         discards: Ip.discards,
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L34-L52` → after: `L29245-L29252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R29245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L29245-L29252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/94.js#L29245-L29252) · [Before (L34-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/94.js#L34-L52)

```diff
-       if (FC.has(CC)) return;
-       FC.add(CC);
-       const zC = 1 === CC.decodeAudioData.length,
-         ZC = CC.decodeAudioData.bind(CC);
-       CC.decodeAudioData = (CC, QC, wC) => {
-         const FC = CC => {
-           const zC = bC._howls.filter((CC => "loaded" !== CC._state));
-           try {
-             null === QC || void 0 === QC || QC(CC)
-           } finally {
-             const ZC = zC.find((CC => "loaded" === CC._state));
-             void 0 !== ZC && "string" === typeof ZC._src && function(CC, zC, ZC) {
-               var QC;
-               fC += ZC - (null !== (QC = nC.get(zC)) && void 0 !== QC ? QC : 0), nC.set(zC, ZC);
-               const wC = qC.get(CC);
-               void 0 !== wC && oC[wC]++
- ... (3 more removed lines; see GitHub link above)
+       return [Math.floor(pp[0]) - op[0], Math.floor(pp[1]) - op[1], Math.floor(pp[2]) - op[2]]
+     }
+ 
+     function Ap(pp, ip) {
+       const cp = Op,
+         op = {
+           lo: [0, 0, 0],
+           size: [cp[0], cp[1], cp[2]]
```
