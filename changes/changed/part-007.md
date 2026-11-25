# Changed — Bundle Modifications Report (Part 007 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `7 / 56` (**261** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 6. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L33-L51` → after: `L3859-L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3859-L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L3859-L3894) · [Before (L33-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L33-L51)

```diff
-         this.width = GG, this.rp = bG, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(GG * bG)
-       }
-       push(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const ZG = this.data,
-           wG = this.next * this.width;
-         for (let SG = 0; SG < this.width; SG++) ZG[wG + SG] = GG[bG + SG];
-         this.next = (this.next + 1) % this.rp, this.size = Math.min(this.size + 1, this.rp)
-       }
-       rows() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
-         const ZG = [],
-           wG = (this.next - this.size + this.rp) % this.rp;
-         for (let SG = 0; SG < this.size; SG++) {
-           const LG = (wG + SG) % this.rp * this.width;
- ... (3 more removed lines; see GitHub link above)
+         this.parts = MM, this.str = rM
+       }
+       and(MM) {
+         let {
+           parts: rM
+         } = MM;
+         return new ei(this.parts.map(((MM, iM) => MM & rM[iM])))
+       }
+       or(MM) {
+         let {
+           parts: rM
+         } = MM;
+         return new ei(this.parts.map(((MM, iM) => MM | rM[iM])))
+       }
+       xor(MM) {
+         let {
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L53-L54` → after: `L3896-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3896-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L3896-L3969) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L53-L54)

```diff
-       lines() {
-         return this.rows().map((GG => GG.join(",")))
+       toJSON() {
+         return this.toString()
+       }
+     }
+     const bi = function() {
+       try {
+         return BigInt, !0
+       } catch (MM) {
+         return !1
+       }
+     }();
+     bi && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
+       return this.toString()
+     });
+     const wi = {},
+       ti = bi ? function(MM) {
+ ... (58 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L57` → after: `L3999-L4056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3999-L4056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L3999-L4056) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L57)

```diff
-     const kG = 10,
+     const Ni = li.object({
+         image_url: li.string()
+       }),
+       Ai = li.object({
+         mediaUrl: li.string().max(1024)
+       }),
+       xi = li.object({
+         access_token: li.union([li.string(), li.null()]).optional()
+       }),
+       vi = li.object({
+         access_token: li.string(),
+         user: li.object({
+           username: li.string(),
+           discriminator: li.string(),
+           id: li.string(),
+           avatar: li.union([li.string(), li.null()]).optional(),
+ ... (42 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L59-L63` → after: `L4058-L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4058-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L4058-L4073) · [Before (L59-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L59-L63)

```diff
-         idle: 0,
-         vQ: 1,
-         vF: 2,
-         lF: 3,
-         Ld: 4
+         [Bi.INITIATE_IMAGE_UPLOAD]: {
+           request: Ii,
+           response: Ni
+         },
+         [Bi.OPEN_SHARE_MOMENT_DIALOG]: {
+           request: Ai,
+           response: Xi
+         },
+         [Bi.AUTHENTICATE]: {
+           request: xi,
+           response: vi
+         },
+         [Bi.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
+           request: Ii,
+           response: Fi
+         }
```

#### 10. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L66-L69` → after: `L4182-L4195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4182-L4195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L4182-L4195) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L66-L69)

```diff
-         none: 0,
-         skipped: 1,
-         paced: 2,
-         drawn: 3
+         UNHANDLED: -1,
+         DM: 1,
+         GROUP_DM: 3,
+         GUILD_TEXT: 0,
+         GUILD_VOICE: 2,
+         GUILD_CATEGORY: 4,
+         GUILD_ANNOUNCEMENT: 5,
+         GUILD_STORE: 6,
+         ANNOUNCEMENT_THREAD: 10,
+         PUBLIC_THREAD: 11,
+         PRIVATE_THREAD: 12,
+         GUILD_STAGE_VOICE: 13,
+         GUILD_DIRECTORY: 14,
+         GUILD_FORUM: 15
```

#### 11. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L72-L83` → after: `L4501-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4501-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L4501-L4503) · [Before (L72-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L72-L83)

```diff
-         lockGained: 1,
-         lockLost: 2,
-         lockError: 3,
-         visible: 4,
-         hidden: 5,
-         focus: 6,
-         blur: 7,
-         jsClient: 8,
-         wasmClient: 9,
-         droppedCopies: 10,
-         stepsLost: 11,
-         cameraSetsLost: 12
+         UNHANDLED: -1,
+         PORTRAIT: 0,
+         LANDSCAPE: 1
```

#### 12. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L85-L90` → after: `L4505-L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4505-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L4505-L4965) · [Before (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L85-L90)

```diff
-       pG = 12e3,
-       fG = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
-       QG = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
-       KG = ["nowMs", "dtMs", "heading", "pitch", "kind"],
-       hG = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
-       dG = ["nowMs", "change", "count"];
+       DO = (Yi(sO), {
+         UNHANDLED: -1,
+         FOCUSED: 0,
+         PIP: 1,
+         GRID: 2
+       }),
+       kO = (Yi(DO), "ERROR");
+     var ZO;
+     ! function(MM) {
+       MM.READY = "READY", MM.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", MM.SPEAKING_START = "SPEAKING_START", MM.SPEAKING_STOP = "SPEAKING_STOP", MM.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", MM.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", MM.CURRENT_USER_UPDATE = … [truncated]
+     }(ZO || (ZO = {}));
+     const oO = Vi.extend({
+         evt: ni(ZO),
+         nonce: Dr().nullable(),
+         cmd: ai(qi),
+         data: Kr({}).passthrough()
+ ... (445 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L93` → after: `L4968-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4968-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L4968-L4990) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L93)

```diff
-       return "js" === GG ? VG.jsClient : VG.wasmClient
+       return 14 + (MM + 64 >>> 9 << 4) + 1
+     }
+ 
+     function FS(MM, rM) {
+       var iM = (65535 & MM) + (65535 & rM);
+       return (MM >> 16) + (rM >> 16) + (iM >> 16) << 16 | 65535 & iM
+     }
+ 
+     function BS(MM, rM, iM, OM, SM, jM) {
+       return FS((aM = FS(FS(rM, MM), FS(OM, jM))) << (PM = SM) | aM >>> 32 - PM, iM);
+       var aM, PM
+     }
+ 
+     function XS(MM, rM, iM, OM, SM, jM, aM) {
+       return BS(rM & iM | ~rM & OM, MM, rM, SM, jM, aM)
+     }
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L96-L97` → after: `L5096-L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5096-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5096-L5266) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L96-L97)

```diff
-       constructor() {
-         this.steps = new yG(kG, pG), this.events = new yG(QG.length, pG), this.frames = new yG(KG.length, pG), this.cameraSets = new yG(LG.h, 256), this.changes = new yG(dG.length, 256)
+       getTransfer(MM) {
+         var rM;
+         switch (MM.cmd) {
+           case Ti.SUBSCRIBE:
+           case Ti.UNSUBSCRIBE:
+             return;
+           default:
+             return null !== (rM = MM.transfer) && void 0 !== rM ? rM : void 0
+         }
+       }
+       constructor(MM, rM) {
+         var iM;
+         if (this.eventBus = new QM, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = MM => {
+             var rM;
+             if (null == this.source) throw new Error("Attempting to send message before initialization");
+             const iM = cS();
+ ... (155 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L100-L102` → after: `L5269-L5288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5269-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5269-L5288) · [Before (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L100-L102)

```diff
-     const zG = new class {
-       constructor() {
-         this.rings = null, this.sample = new Float64Array(QG.length), this.startedClient = null, this.startedAtMs = 0
+     var Pj, nj = 1e9,
+       Qj = !0,
+       zj = "[DecimalError] ",
+       Lj = zj + "Invalid argument: ",
+       mj = zj + "Exponent out of range: ",
+       Hj = Math.floor,
+       hj = Math.pow,
+       Jj = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
+       dj = 1e7,
+       yj = 9007199254740991,
+       lj = Hj(1286742750677284.5),
+       Ej = {};
+ 
+     function Uj(MM, rM) {
+       var iM, OM, SM, jM, aM, PM, nM, QM, zM = MM.constructor,
+         LM = zM.precision;
+ ... (4 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L104-L105` → after: `L5290-L5385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5290-L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5290-L5385) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L104-L105)

```diff
-       get client() {
-         return this.startedClient
+       for ((PM = nM.length) - (jM = QM.length) < 0 && (jM = PM, OM = QM, QM = nM, nM = OM), iM = 0; jM;) iM = (nM[--jM] = nM[jM] + QM[jM] + iM) / dj | 0, nM[jM] %= dj;
+       for (iM && (nM.unshift(iM), ++SM), PM = nM.length; 0 == nM[--PM];) nM.pop();
+       return rM.d = nM, rM.e = SM, Qj ? pj(rM, LM) : rM
+     }
+ 
+     function Gj(MM, rM, iM) {
+       if (MM !== ~~MM || MM < rM || MM > iM) throw Error(Lj + MM)
+     }
+ 
+     function Cj(MM) {
+       var rM, iM, OM, SM = MM.length - 1,
+         jM = "",
+         aM = MM[0];
+       if (SM > 0) {
+         for (jM += aM, rM = 1; rM < SM; rM++)(iM = 7 - (OM = MM[rM] + "").length) && (jM += gj(iM)), jM += OM;
+         (iM = 7 - (OM = (aM = MM[rM]) + "").length) && (jM += gj(iM))
+ ... (80 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L107-L108` → after: `L5387-L5393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5387-L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5387-L5393) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L107-L108)

```diff
-       start(GG, bG) {
-         this.startedClient = GG, this.startedAtMs = performance.now(), null !== this.rings ? this.change(JG(GG)) : bG && this.allocate()
+       return MM && rM > iM ? rM : iM
+     }, Ej.squareRoot = Ej.sqrt = function() {
+       var MM, rM, iM, OM, SM, jM, aM, PM = this,
+         nM = PM.constructor;
+       if (PM.s < 1) {
+         if (!PM.s) return new nM(0);
+         throw Error(zj + "NaN")
```

#### 18. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L110-L111` → after: `L5395-L5414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5395-L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5395-L5414) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L110-L111)

```diff
-       lockGained() {
-         this.allocate(), this.change(VG.lockGained)
+       for (MM = wj(PM), Qj = !1, 0 == (SM = Math.sqrt(+PM)) || SM == 1 / 0 ? (((rM = Cj(PM.d)).length + MM) % 2 == 0 && (rM += "0"), SM = Math.sqrt(rM), MM = Hj((MM + 1) / 2) - (MM < 0 || MM % 2), OM = new nM(rM = SM == 1 / 0 ? "1e" + MM : (rM = SM.toExponential()).slice(0, rM.in … [truncated]
+         if (OM = (jM = OM).plus(ej(PM, jM, aM + 2)).times(.5), Cj(jM.d).slice(0, aM) === (rM = Cj(OM.d)).slice(0, aM)) {
+           if (rM = rM.slice(aM - 3, aM + 1), SM == aM && "4999" == rM) {
+             if (pj(jM, iM + 1, 0), jM.times(jM).eq(PM)) {
+               OM = jM;
+               break
+             }
+           } else if ("9999" != rM) break;
+           aM += 4
+         } return Qj = !0, pj(OM, iM)
+     }, Ej.times = Ej.mul = function(MM) {
+       var rM, iM, OM, SM, jM, aM, PM, nM, QM, zM = this,
+         LM = zM.constructor,
+         mM = zM.d,
+         HM = (MM = new LM(MM)).d;
+       if (!zM.s || !MM.s) return new LM(0);
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L113-L114` → after: `L5416-L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5416-L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5416-L5443) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L113-L114)

```diff
-       allocate() {
-         null === this.rings && (this.rings = new rG, null !== this.startedClient && this.changeAt(this.startedAtMs, JG(this.startedClient), 1))
+       for (; !jM[--aM];) jM.pop();
+       return rM ? ++iM : jM.shift(), MM.d = jM, MM.e = iM, Qj ? pj(MM, LM.precision) : MM
+     }, Ej.toDecimalPlaces = Ej.todp = function(MM, rM) {
+       var iM = this,
+         OM = iM.constructor;
+       return iM = new OM(iM), void 0 === MM ? iM : (Gj(MM, 0, nj), void 0 === rM ? rM = OM.rounding : Gj(rM, 0, 8), pj(iM, MM + wj(iM) + 1, rM))
+     }, Ej.toExponential = function(MM, rM) {
+       var iM, OM = this,
+         SM = OM.constructor;
+       return void 0 === MM ? iM = sj(OM, !0) : (Gj(MM, 0, nj), void 0 === rM ? rM = SM.rounding : Gj(rM, 0, 8), iM = sj(OM = pj(new SM(OM), MM + 1, rM), !0, MM + 1)), iM
+     }, Ej.toFixed = function(MM, rM) {
+       var iM, OM, SM = this,
+         jM = SM.constructor;
+       return void 0 === MM ? sj(SM) : (Gj(MM, 0, nj), void 0 === rM ? rM = jM.rounding : Gj(rM, 0, 8), iM = sj((OM = pj(new jM(SM), MM + wj(SM) + 1, rM)).abs(), !1, MM + wj(OM) + 1), SM.isneg() && !SM.isZero() ? "-" + iM : iM)
+     }, Ej.toInteger = Ej.toint = function() {
+       var MM = this,
+ ... (12 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L116-L118` → after: `L5445-L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5445-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5445-L5472) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L116-L118)

```diff
-       step(GG, bG) {
-         var ZG;
-         GG[bG + 6] !== UG.Ld && (null === (ZG = this.rings) || void 0 === ZG || ZG.steps.push(GG, bG))
+       if (PM.eq(Pj)) return PM;
+       if (OM = nM.precision, MM.eq(Pj)) return pj(PM, OM);
+       if (aM = (rM = MM.e) >= (iM = MM.d.length - 1), jM = PM.s, aM) {
+         if ((iM = QM < 0 ? -QM : QM) <= yj) {
+           for (SM = new nM(Pj), rM = Math.ceil(OM / 7 + 4), Qj = !1; iM % 2 && Dj((SM = SM.times(PM)).d, rM), 0 !== (iM = Hj(iM / 2));) Dj((PM = PM.times(PM)).d, rM);
+           return Qj = !0, MM.s < 0 ? new nM(Pj).div(SM) : pj(SM, OM)
+         }
+       } else if (jM < 0) throw Error(zj + "NaN");
+       return jM = jM < 0 && 1 & MM.d[Math.max(rM, iM)] ? -1 : 1, PM.s = 1, Qj = !1, SM = MM.times(uj(PM, OM + 12)), Qj = !0, (SM = bj(SM)).s = jM, SM
+     }, Ej.toPrecision = function(MM, rM) {
+       var iM, OM, SM = this,
+         jM = SM.constructor;
+       return void 0 === MM ? OM = sj(SM, (iM = wj(SM)) <= jM.toExpNeg || iM >= jM.toExpPos) : (Gj(MM, 1, nj), void 0 === rM ? rM = jM.rounding : Gj(rM, 0, 8), OM = sj(SM = pj(new jM(SM), MM, rM), MM <= (iM = wj(SM)) || iM <= jM.toExpNeg, MM)), OM
+     }, Ej.toSignificantDigits = Ej.tosd = function(MM, rM) {
+       var iM = this.constructor;
+       return void 0 === MM ? (MM = iM.precision, rM = iM.rounding) : (Gj(MM, 1, nj), void 0 === rM ? rM = iM.rounding : Gj(rM, 0, 8)), pj(new iM(this), MM, rM)
+ ... (12 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L120-L146` → after: `L5474-L5475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5474-L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5474-L5475) · [Before (L120-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L120-L146)

```diff
-       cameraSet(GG, bG) {
-         var ZG;
-         null === (ZG = this.rings) || void 0 === ZG || ZG.cameraSets.push(GG, bG)
-       }
-       mouseMove(GG, bG) {
-         const ZG = this.rings;
-         if (null === ZG) return;
-         const wG = this.sample;
-         wG[0] = GG.timeStamp, wG[1] = performance.now(), wG[2] = GG.movementX, wG[3] = GG.movementY, wG[4] = bG ? 1 : 0, ZG.events.push(wG)
-       }
-       frame(GG, bG, ZG, wG) {
-         const SG = this.rings;
-         if (null === SG || wG === YG.none) return;
-         const LG = this.sample;
-         LG[0] = performance.now(), LG[1] = GG, LG[2] = bG, LG[3] = ZG, LG[4] = wG, SG.frames.push(LG)
-       }
- ... (11 more removed lines; see GitHub link above)
+ 
+       function rM(MM, rM, iM, OM) {
```

#### 22. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L148-L149` → after: `L5477-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5477-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5477-L5483) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L148-L149)

```diff
-         const ZG = this.rings;
-         return [`look records (${this.startedClient}): ${fG.join(",")}`, ...null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.steps.lines()) && void 0 !== GG ? GG : [], `mousemove events: ${QG.join(",")}`, ...null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.event … [truncated]
+         if (iM != OM) jM = iM > OM ? 1 : -1;
+         else
+           for (SM = jM = 0; SM < iM; SM++)
+             if (MM[SM] != rM[SM]) {
+               jM = MM[SM] > rM[SM] ? 1 : -1;
+               break
+             } return jM
```

#### 23. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L151-L188` → after: `L5485-L5507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5485-L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5485-L5507) · [Before (L151-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L151-L188)

```diff
-       toJson(GG, bG) {
-         var ZG;
-         const SG = GG - 6e4,
-           LG = this.rings,
-           yG = function(GG, bG) {
-             var ZG;
-             let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-             const LG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.rows(wG, SG)) && void 0 !== ZG ? ZG : [];
-             return {
-               columns: bG,
-               fromMs: 0 === LG.length ? null : LG[0][wG],
-               rows: LG
-             }
-           };
-         return {
-           version: wG.e,
- ... (22 more removed lines; see GitHub link above)
+ 
+       function iM(MM, rM, iM) {
+         for (var OM = 0; iM--;) MM[iM] -= OM, OM = MM[iM] < rM[iM] ? 1 : 0, MM[iM] = OM * dj + MM[iM] - rM[iM];
+         for (; !MM[0] && MM.length > 1;) MM.shift()
+       }
+       return function(OM, SM, jM, aM) {
+         var PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM = OM.constructor,
+           tM = OM.s == SM.s ? 1 : -1,
+           gM = OM.d,
+           uM = SM.d;
+         if (!OM.s) return new wM(OM);
+         if (!SM.s) throw Error(zj + "Division by zero");
+         for (nM = OM.e - SM.e, eM = uM.length, GM = gM.length, hM = (HM = new wM(tM)).d = [], QM = 0; uM[QM] == (gM[QM] || 0);) ++QM;
+         if (uM[QM] > (gM[QM] || 0) && --nM, (lM = null == jM ? jM = wM.precision : aM ? jM + (wj(OM) - wj(SM)) + 1 : jM) < 0) return new wM(0);
+         if (lM = lM / 7 + 2 | 0, QM = 0, 1 == eM)
+           for (zM = 0, uM = uM[0], lM++;
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L191-L195` → after: `L5511-L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5511-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5511-L5526) · [Before (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L191-L195)

```diff
-       save(GG) {
-         const bG = JSON.stringify(this.toJson(performance.now(), GG));
-         (0, SG.b)(new Blob([bG], {
-           type: "application/json"
-         }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
+     }();
+ 
+     function bj(MM, rM) {
+       var iM, OM, SM, jM, aM, PM = 0,
+         nM = 0,
+         QM = MM.constructor,
+         zM = QM.precision;
+       if (wj(MM) > 16) throw Error(mj + wj(MM));
+       if (!MM.s) return new QM(Pj);
+       for (null == rM ? (Qj = !1, aM = zM) : aM = rM, jM = new QM(.03125); MM.abs().gte(.1);) MM = MM.times(jM), nM += 5;
+       for (aM += Math.log(hj(2, nM)) / Math.LN10 * 2 + 5 | 0, iM = OM = SM = new QM(Pj), QM.precision = aM;;) {
+         if (OM = pj(OM.times(MM), aM), iM = iM.times(++PM), Cj((jM = SM.plus(ej(OM, iM, aM))).d).slice(0, aM) === Cj(SM.d).slice(0, aM)) {
+           for (; nM--;) SM = pj(SM.times(SM), aM);
+           return QM.precision = zM, null == rM ? (Qj = !0, pj(SM, zM)) : SM
+         }
+         SM = jM
```

#### 25. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L216` → after: `L5531-L5532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5531-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5531-L5532) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L216)

```diff
-       return (0, LG.C)(GG).toFixed(1)
+       for (var rM = 7 * MM.e, iM = MM.d[0]; iM >= 10; iM /= 10) rM++;
+       return rM
```

#### 26. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L219-L220` → after: `L5535-L5537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5535-L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5535-L5537) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L219-L220)

```diff
-     function UG(GG, bG) {
-       return `camera set by ${yG.get(GG[bG+1])}: heading ${`${kG(GG[bG+2])} -> ${kG(GG[bG+4])}`} deg, pitch ${`${kG(GG[bG+3])} -> ${kG(GG[bG+5])}`} deg, at ${GG[bG].toFixed(1)} ms`
+     function tj(MM, rM, iM) {
+       if (rM > MM.LN10.sd()) throw Qj = !0, iM && (MM.precision = iM), Error(zj + "LN10 precision limit exceeded");
+       return pj(new MM(MM.LN10), rM)
```

#### 27. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L226` → after: `L5541-L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5541-L5542) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L226)

```diff
-       return Number.isFinite(GG) ? String(Math.round(10 * GG) / 10) : String(GG)
+       for (var rM = ""; MM--;) rM += "0";
+       return rM
```

#### 28. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L229-L240` → after: `L5545-L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5545-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5545-L5558) · [Before (L229-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L229-L240)

```diff
-     function fG(GG) {
-       return Number.isFinite(GG) ? GG.toFixed(1) : String(GG)
-     }
-     class QG {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.vF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Ld = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
-       }
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.vF > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
-       hasEvent() {
-         return this.vF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+     function uj(MM, rM) {
+       var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM = 1,
+         mM = MM,
+         HM = mM.d,
+         hM = mM.constructor,
+         JM = hM.precision;
+       if (mM.s < 1) throw Error(zj + (mM.s ? "NaN" : "-Infinity"));
+       if (mM.eq(Pj)) return new hM(0);
+       if (null == rM ? (Qj = !1, QM = JM) : QM = rM, mM.eq(10)) return null == rM && (Qj = !0), tj(hM, QM);
+       if (QM += 10, hM.precision = QM, OM = (iM = Cj(HM)).charAt(0), jM = wj(mM), !(Math.abs(jM) < 15e14)) return nM = tj(hM, QM + 2, JM).times(jM + ""), mM = uj(new hM(OM + "." + iM.slice(1)), QM - 10).plus(nM), hM.precision = JM, null == rM ? (Qj = !0, pj(mM, JM)) : mM;
+       for (; OM < 7 && 1 != OM || 1 == OM && iM.charAt(1) > 3;) OM = (iM = Cj((mM = mM.times(MM)).d)).charAt(0), LM++;
+       for (jM = wj(mM), OM > 1 ? (mM = new hM("0." + iM), jM++) : mM = new hM(OM + "." + iM.slice(1)), PM = aM = mM = ej(mM.minus(Pj), mM.plus(Pj), QM), zM = pj(mM.times(mM), QM), SM = 3;;) {
+         if (aM = pj(aM.times(zM), QM), Cj((nM = PM.plus(ej(aM, new hM(SM), QM))).d).slice(0, QM) === Cj(PM.d).slice(0, QM)) return PM = PM.times(2), 0 !== jM && (PM = PM.plus(tj(hM, QM + 2, JM).times(jM + ""))), PM = ej(PM, new hM(LM), QM), hM.precision = JM, null == rM ? (Qj = ! … [truncated]
+         PM = nM, SM += 2
```

#### 29. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L243-L321` → after: `L5561-L5584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5561-L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5561-L5584) · [Before (L243-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L243-L321)

```diff
-     class KG {
-       constructor() {
-         var GG = this;
-         this.topicOn = (0, SG.m)("look"), this.remote = (0, SG.n)(), this.tally = new QG, this.takes = null, this.started = !1, this.record = function(bG) {
-           let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (YG.m.step(bG, ZG), !GG.topicOn) return;
-           const wG = bG[ZG],
-             SG = bG[ZG + 1],
-             LG = bG[ZG + 2],
-             yG = bG[ZG + 3],
-             kG = bG[ZG + 4],
-             UG = bG[ZG + 5],
-             VG = bG[ZG + 6],
-             QG = bG[ZG + 7],
-             KG = bG[ZG + 8],
-             hG = bG[ZG + 9],
- ... (63 more removed lines; see GitHub link above)
+ 
+     function Rj(MM, rM) {
+       var iM, OM, SM;
+       for ((iM = rM.indexOf(".")) > -1 && (rM = rM.replace(".", "")), (OM = rM.search(/e/i)) > 0 ? (iM < 0 && (iM = OM), iM += +rM.slice(OM + 1), rM = rM.substring(0, OM)) : iM < 0 && (iM = rM.length), OM = 0; 48 === rM.charCodeAt(OM);) ++OM;
+       for (SM = rM.length; 48 === rM.charCodeAt(SM - 1);) --SM;
+       if (rM = rM.slice(OM, SM)) {
+         if (SM -= OM, iM = iM - OM - 1, MM.e = Hj(iM / 7), MM.d = [], OM = (iM + 1) % 7, iM < 0 && (OM += 7), OM < SM) {
+           for (OM && MM.d.push(+rM.slice(0, OM)), SM -= 7; OM < SM;) MM.d.push(+rM.slice(OM, OM += 7));
+           OM = 7 - (rM = rM.slice(OM)).length
+         } else OM -= SM;
+         for (; OM--;) rM += "0";
+         if (MM.d.push(+rM), Qj && (MM.e > lj || MM.e < -lj)) throw Error(mj + iM)
+       } else MM.s = 0, MM.e = 0, MM.d = [0];
+       return MM
+     }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L323-L333` → after: `L5586-L5594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5586-L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5586-L5594) · [Before (L323-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L323-L333)

```diff
-       takeRecords() {
-         if (null === this.takes) return;
-         const GG = this.takes.look();
-         if (GG.length >= VG) {
-           this.counted(YG.c.stepsLost, GG[0]), this.counted(YG.c.droppedCopies, GG[1]);
-           for (let bG = VG; bG + YG.g <= GG.length; bG += YG.g) this.record(GG, bG)
-         }
-         const bG = this.takes.cameraSets();
-         if (bG.length >= wG.e) {
-           this.counted(YG.c.cameraSetsLost, bG[0]);
-           for (let GG = wG.e; GG + wG.h <= bG.length; GG += wG.h) YG.m.cameraSet(bG, GG), this.topicOn && (this.tally.cameraSets++, this.outlier(UG(bG, GG)))
+       if (void 0 !== iM && (PM = QM / (jM = hj(10, aM - SM - 1)) % 10 | 0, nM = rM < 0 || void 0 !== LM[zM + 1] || QM % jM, nM = iM < 4 ? (PM || nM) && (0 == iM || iM == (MM.s < 0 ? 3 : 2)) : PM > 5 || 5 == PM && (4 == iM || nM || 6 == iM && (OM > 0 ? SM > 0 ? QM / hj(10, aM - SM … [truncated]
+       if (0 == OM ? (LM.length = zM, jM = 1, zM--) : (LM.length = zM + 1, jM = hj(10, 7 - OM), LM[zM] = SM > 0 ? (QM / hj(10, aM - SM) % hj(10, SM) | 0) * jM : 0), nM)
+         for (;;) {
+           if (0 == zM) {
+             (LM[0] += jM) == dj && (LM[0] = 1, ++MM.e);
+             break
+           }
+           if (LM[zM] += jM, LM[zM] != dj) break;
+           LM[zM--] = 0, jM = 1
```

#### 31. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L336-L346` → after: `L5615-L5621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5615-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5615-L5621) · [Before (L336-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L336-L346)

```diff
-       droppedCopy() {
-         this.counted(YG.c.droppedCopies, 1)
-       }
-       counted(GG, bG) {
-         if (0 === bG) return;
-         if (YG.m.change(GG, bG), !this.topicOn) return;
-         const ZG = this.tally;
-         GG === YG.c.droppedCopies ? ZG.dropped += bG : GG === YG.c.stepsLost ? ZG.lost += bG : ZG.cameraSetsLost += bG
-       }
-       endTake() {
-         this.takeRecords(), this.takes = null
+       for (zM && (iM = nM, nM = LM, LM = iM, rM.s = -rM.s), PM = nM.length, SM = LM.length - PM; SM > 0; --SM) nM[PM++] = 0;
+       for (SM = LM.length; SM > aM;) {
+         if (nM[--SM] < LM[SM]) {
+           for (jM = SM; jM && 0 === nM[--jM];) nM[jM] = dj - 1;
+           --nM[jM], nM[SM] += dj
+         }
+         nM[SM] -= LM[SM]
```

#### 32. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L351-L353` → after: `L5628-L5632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5628-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5628-L5632) · [Before (L351-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L351-L353)

```diff
-     function dG(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return hG ??= new KG, hG.start(GG, bG), hG.record
+     function sj(MM, rM, iM) {
+       var OM, SM = wj(MM),
+         jM = Cj(MM.d),
+         aM = jM.length;
+       return rM ? (iM && (OM = iM - aM) > 0 ? jM = jM.charAt(0) + "." + jM.slice(1) + gj(OM) : aM > 1 && (jM = jM.charAt(0) + "." + jM.slice(1)), jM = jM + (SM < 0 ? "e" : "e+") + SM) : SM < 0 ? (jM = "0." + gj(-SM - 1) + jM, iM && (OM = iM - aM) > 0 && (jM += gj(OM))) : SM >= aM … [truncated]
```

#### 33. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L356-L358` → after: `L5635-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5635-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5635-L5636) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L356-L358)

```diff
-     function JG() {
-       var GG;
-       null === (GG = hG) || void 0 === GG || GG.endTake()
+     function Dj(MM, rM) {
+       if (MM.length > rM) return MM.length = rM, !0
```

#### 34. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L361-L375` → after: `L5639-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5639-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5639-L5650) · [Before (L361-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L361-L375)

```diff
-     function rG() {
-       var GG;
-       null === (GG = hG) || void 0 === GG || GG.droppedCopy()
-     }
-     async function zG(GG) {
-       var bG;
-       null === (bG = hG) || void 0 === bG || bG.takeRecords();
-       const {
-         clientHintsRead: wG,
-         debugDeviceLines: SG
-       } = await ZG.e(29).then((() => ZG(34354)));
-       await wG, YG.m.save({
-         ...GG,
-         device: SG()
-       })
+     function kj(MM) {
+       if (!MM || "object" !== typeof MM) throw Error(zj + "Object expected");
+       var rM, iM, OM, SM = ["precision", 1, nj, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
+       for (rM = 0; rM < SM.length; rM += 3)
+         if (void 0 !== (OM = MM[iM = SM[rM]])) {
+           if (!(Hj(OM) === OM && OM >= SM[rM + 1] && OM <= SM[rM + 2])) throw Error(Lj + iM + ": " + OM);
+           this[iM] = OM
+         } if (void 0 !== (OM = MM[iM = "LN10"])) {
+         if (OM != Math.LN10) throw Error(Lj + iM + ": " + OM);
+         this[iM] = new this(OM)
+       }
+       return this
```

#### 35. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L377-L401` → after: `L5652-L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5652-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5652-L5664) · [Before (L377-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L377-L401)

```diff
-   },
-   39444: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => kG
-     });
-     var wG = ZG(19),
-       SG = ZG(1251),
-       LG = ZG(2968);
-     const yG = "Reconnecting";
-     class kG {
-       constructor(GG) {
-         this.hooks = GG, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
-           "visible" === document.visibilityState && this.controller.retryNow()
-         }, this.onPageHide = GG => {
-           GG.persisted || this.leave()
-         }, this.controller = new LG.e((bG => GG.reconnect(bG)), {
- ... (9 more removed lines; see GitHub link above)
+     var Zj = function MM(rM) {
+       var iM, OM, SM;
+ 
+       function jM(MM) {
+         var rM = this;
+         if (!(rM instanceof jM)) return new jM(MM);
+         if (rM.constructor = jM, MM instanceof jM) return rM.s = MM.s, rM.e = MM.e, void(rM.d = (MM = MM.d) ? MM.slice() : MM);
+         if ("number" === typeof MM) {
+           if (0 * MM !== 0) throw Error(Lj + MM);
+           if (MM > 0) rM.s = 1;
+           else {
+             if (!(MM < 0)) return rM.s = 0, rM.e = 0, void(rM.d = [0]);
+             MM = -MM, rM.s = -1
```

#### 36. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L403` → after: `L5666-L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5666-L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5666-L5670) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L403)

```diff
-         })
+           return MM === ~~MM && MM < 1e7 ? (rM.e = 0, void(rM.d = [MM])) : Rj(rM, MM.toString())
+         }
+         if ("string" !== typeof MM) throw Error(Lj + MM);
+         if (45 === MM.charCodeAt(0) ? (MM = MM.slice(1), rM.s = -1) : rM.s = 1, !Jj.test(MM)) throw Error(Lj + MM);
+         Rj(rM, MM)
```

#### 37. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L405-L406` → after: `L5672-L5735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5672-L5735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5672-L5735) · [Before (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L405-L406)

```diff
-       onInitialInfo(GG, bG) {
-         this.graceMs = GG, this.sessionBased = bG
+       if (jM.prototype = Ej, jM.ROUND_UP = 0, jM.ROUND_DOWN = 1, jM.ROUND_CEIL = 2, jM.ROUND_FLOOR = 3, jM.ROUND_HALF_UP = 4, jM.ROUND_HALF_DOWN = 5, jM.ROUND_HALF_EVEN = 6, jM.ROUND_HALF_CEIL = 7, jM.ROUND_HALF_FLOOR = 8, jM.clone = MM, jM.config = jM.set = kj, void 0 === rM &&  … [truncated]
+         for (SM = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], iM = 0; iM < SM.length;) rM.hasOwnProperty(OM = SM[iM++]) || (rM[OM] = this[OM]);
+       return jM.config(rM), jM
+     }({
+       precision: 20,
+       rounding: 4,
+       toExpNeg: -7,
+       toExpPos: 21,
+       LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+     });
+     Pj = new Zj(1);
+     var oj;
+     ! function(MM) {
+       MM.AED = "aed", MM.AFN = "afn", MM.ALL = "all", MM.AMD = "amd", MM.ANG = "ang", MM.AOA = "aoa", MM.ARS = "ars", MM.AUD = "aud", MM.AWG = "awg", MM.AZN = "azn", MM.BAM = "bam", MM.BBD = "bbd", MM.BDT = "bdt", MM.BGN = "bgn", MM.BHD = "bhd", MM.BIF = "bif", MM.BMD = "bmd", MM … [truncated]
+     }(oj || (oj = {}));
+     oj.AED, oj.AFN, oj.ALL, oj.AMD, oj.ANG, oj.AOA, oj.ARS, oj.AUD, oj.AWG, oj.AZN, oj.BAM, oj.BBD, oj.BDT, oj.BGN, oj.BHD, oj.BIF, oj.BMD, oj.BND, oj.BOB, oj.BOV, oj.BRL, oj.BSD, oj.BTN, oj.BWP, oj.BYR, oj.BYN, oj.BZD, oj.CAD, oj.CDF, oj.CHE, oj.CHF, oj.CHW, oj.CLF, oj.CLP, oj.C … [truncated]
+ ... (48 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L408-L409` → after: `L5737-L5741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5737-L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5737-L5741) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L408-L409)

```diff
-       canHoldSeat() {
-         return this.graceMs > 0 && !this.ended
+ 
+       function NM(MM, rM) {
+         for (var iM = -1, OM = MM ? MM.length : 0; ++iM < OM;)
+           if (rM(MM[iM], iM, MM)) return !0;
+         return !1
```

#### 39. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L411-L412` → after: `L5743-L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5743-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5743-L5749) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L411-L412)

```diff
-       isResuming() {
-         return "connected" !== this.controller.phase
+ 
+       function AM(MM) {
+         var rM = !1;
+         if (null != MM && "function" != typeof MM.toString) try {
+           rM = !!(MM + "")
+         } catch (iM) {}
+         return rM
```

#### 40. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L414-L415` → after: `L5751-L5757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5751-L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5751-L5757) · [Before (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L414-L415)

```diff
-       onConnectionLost(GG) {
-         this.ended || this.controller.onConnectionLost(GG, this.graceMs)
+ 
+       function xM(MM) {
+         var rM = -1,
+           iM = Array(MM.size);
+         return MM.forEach((function(MM, OM) {
+           iM[++rM] = [OM, MM]
+         })), iM
```

#### 41. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L417-L418` → after: `L5759-L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5759-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5759-L5763) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L417-L418)

```diff
-       onResuming() {
-         this.ended || this.controller.onResuming()
+ 
+       function vM(MM, rM) {
+         return function(iM) {
+           return MM(rM(iM))
+         }
```

#### 42. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L420-L421` → after: `L5765-L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5765-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5765-L5771) · [Before (L420-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L420-L421)

```diff
-       onResumed() {
-         this.controller.stop()
+ 
+       function FM(MM) {
+         var rM = -1,
+           iM = Array(MM.size);
+         return MM.forEach((function(MM) {
+           iM[++rM] = MM
+         })), iM
```

#### 43. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L423-L426` → after: `L5773-L5813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5773-L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5773-L5813) · [Before (L423-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L423-L426)

```diff
-       leave() {
-         const GG = this.isResuming() && !this.controller.awaitingResumeOnRoom,
-           bG = this.controller.heldToken;
-         this.end(), GG && "" !== bG && this.hooks.releaseSeat(bG)
+       var BM = Array.prototype,
+         XM = Function.prototype,
+         IM = Object.prototype,
+         KM = sM["__core-js_shared__"],
+         qM = function() {
+           var MM = /[^.]+$/.exec(KM && KM.keys && KM.keys.IE_PROTO || "");
+           return MM ? "Symbol(src)_1." + MM : ""
+         }(),
+         TM = XM.toString,
+         VM = IM.hasOwnProperty,
+         cM = IM.toString,
+         Mr = RegExp("^" + TM.call(VM).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
+         rr = sM.Symbol,
+         ir = sM.Uint8Array,
+         Or = vM(Object.getPrototypeOf, Object),
+         Sr = Object.create,
+ ... (25 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L428-L429` → after: `L5815-L5822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5815-L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5815-L5822) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L428-L429)

```diff
-       end() {
-         this.ended = !0, this.controller.stop()
+ 
+       function er(MM) {
+         var rM = -1,
+           iM = MM ? MM.length : 0;
+         for (this.clear(); ++rM < iM;) {
+           var OM = MM[rM];
+           this.set(OM[0], OM[1])
+         }
```

#### 45. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L431-L437` → after: `L5824-L5831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5824-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5824-L5831) · [Before (L431-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L431-L437)

```diff
-       onPhaseChanged(GG) {
-         const bG = (0, LG.r)(GG);
-         bG !== this.stopped && (this.stopped = bG, this.hooks.freeze(bG));
-         const ZG = "frozen" === GG || "resuming" === GG && this.frozen;
-         ZG && !this.frozen ? (0, SG.z)(yG, {
-           overridesPause: !0
-         }) : !ZG && this.frozen && (0, SG.w)(yG), this.frozen = ZG, this.setListening("connected" !== GG), wG.l.xh(LG.o, ZG ? "frozen" : GG)
+ 
+       function br(MM) {
+         var rM = -1,
+           iM = MM ? MM.length : 0;
+         for (this.clear(); ++rM < iM;) {
+           var OM = MM[rM];
+           this.set(OM[0], OM[1])
+         }
```

#### 46. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L439-L440` → after: `L5833-L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5833-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5833-L5837) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L439-L440)

```diff
-       setListening(GG) {
-         GG !== this.listening && (this.listening = GG, GG ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow … [truncated]
+ 
+       function wr(MM) {
+         var rM = -1,
+           iM = MM ? MM.length : 0;
+         for (this.__data__ = new br; ++rM < iM;) this.add(MM[rM])
```

#### 47. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L442-L457` → after: `L5839-L5841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5839-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5839-L5841) · [Before (L442-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L442-L457)

```diff
-     }
-   },
-   39453: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => wG
-     });
-     class wG {
-       constructor(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
-         this.onSilent = GG, this.now = bG, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
-           const GG = this.now(),
-             bG = GG - this.lastCheckAt <= 2e3;
-           this.lastCheckAt = GG;
-           const ZG = "visible" === document.visibilityState;
-           !ZG || bG && this.wasVisible || (this.resumedAt = GG), this.wasVisible = ZG, ZG && GG - this.lastHeardAt > 12e3 && GG - this.resumedAt > 2e3 && this.onSilent()
-         }, this.lastHeardAt = bG(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
+ 
+       function tr(MM) {
+         this.__data__ = new er(MM)
```

#### 48. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L459-L460` → after: `L5843-L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5843-L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5843-L5852) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L459-L460)

```diff
-       heard() {
-         this.lastHeardAt = this.now()
+ 
+       function gr(MM, rM) {
+         var iM = ri(MM) || Mi(MM) ? function(MM, rM) {
+             for (var iM = -1, OM = Array(MM); ++iM < MM;) OM[iM] = rM(iM);
+             return OM
+           }(MM.length, String) : [],
+           OM = iM.length,
+           SM = !!OM;
+         for (var jM in MM) !rM && !VM.call(MM, jM) || SM && ("length" == jM || Fr(jM, OM)) || iM.push(jM);
+         return iM
```

#### 49. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L462-L463` → after: `L5854-L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5854-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5854-L5858) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L462-L463)

```diff
-       dispose() {
-         clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
+ 
+       function ur(MM, rM) {
+         for (var iM = MM.length; iM--;)
+           if (cr(MM[iM][0], rM)) return iM;
+         return -1
```

#### 50. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L465-L496` → after: `L5860-L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5860-L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5860-L5868) · [Before (L465-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L465-L496)

```diff
-     }
-   },
-   39461: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => YG,
-       d: () => VG
-     });
-     var wG = ZG(1673),
-       SG = ZG(188),
-       LG = ZG(1634),
-       yG = ZG(1758),
-       kG = ZG(1163),
-       UG = ZG(1096);
-     async function YG(GG, bG) {
-       return function(GG) {
-         return "object" === typeof GG && null !== GG && GG.code === SG.b.VpnIp.code
- ... (16 more removed lines; see GitHub link above)
+       Cr.prototype.clear = function() {
+         this.__data__ = Hr ? Hr(null) : {}
+       }, Cr.prototype.delete = function(MM) {
+         return this.has(MM) && delete this.__data__[MM]
+       }, Cr.prototype.get = function(MM) {
+         var rM = this.__data__;
+         if (Hr) {
+           var OM = rM[MM];
+           return OM === iM ? void 0 : OM
```

#### 51. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L498-L504` → after: `L5870-L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5870-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5870-L5936) · [Before (L498-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L498-L504)

```diff
-       }(GG)
-     }
-     async function VG(GG, bG) {
-       try {
-         return await bG()
-       } catch (ZG) {
-         if (!await YG(GG, ZG)) throw ZG
+         return VM.call(rM, MM) ? rM[MM] : void 0
+       }, Cr.prototype.has = function(MM) {
+         var rM = this.__data__;
+         return Hr ? void 0 !== rM[MM] : VM.call(rM, MM)
+       }, Cr.prototype.set = function(MM, rM) {
+         return this.__data__[MM] = Hr && void 0 === rM ? iM : rM, this
+       }, er.prototype.clear = function() {
+         this.__data__ = []
+       }, er.prototype.delete = function(MM) {
+         var rM = this.__data__,
+           iM = ur(rM, MM);
+         return !(iM < 0) && (iM == rM.length - 1 ? rM.pop() : ar.call(rM, iM, 1), !0)
+       }, er.prototype.get = function(MM) {
+         var rM = this.__data__,
+           iM = ur(rM, MM);
+         return iM < 0 ? void 0 : rM[iM][1]
+ ... (51 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L521-L539` → after: `L5939-L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5939-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5939-L5941) · [Before (L521-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L521-L539)

```diff
-     function YG(GG) {
-       if ("object" !== typeof GG || null === GG) return !1;
-       const {
-         code: bG,
-         message: ZG
-       } = GG, SG = wG.b.duplicateLobbyNameError;
-       return (bG === SG.code || bG === UG) && (ZG === SG.text || ZG === SG.text + wG.j)
-     }
-     async function VG(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SG.e;
-       for (let SG = 0;; SG++) {
-         let yG;
-         (0, LG.p)(bG);
-         try {
-           return await GG()
-         } catch (wG) {
- ... (3 more removed lines; see GitHub link above)
+       function sr(MM, rM) {
+         for (var iM = 0, OM = (rM = Br(rM, MM) ? [rM] : Yr(rM)).length; null != MM && iM < OM;) MM = MM[qr(rM[iM++])];
+         return iM && iM == OM ? MM : void 0
```

#### 53. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L544-L566` → after: `L5944-L5946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5944-L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5944-L5946) · [Before (L544-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L544-L566)

```diff
-     function fG(GG) {
-       if (YG(GG)) return !0;
-       const bG = (0, yG.h)(GG);
-       return "number" === typeof bG && pG.has(bG)
-     }
-   },
-   39470: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => UG
-     });
-     var wG = ZG(8957),
-       SG = ZG(36826),
-       LG = ZG(39478);
-     const yG = {
-         seat: "seat_timeout",
-         socket_unopened: "socket_timeout_unopened",
- ... (7 more removed lines; see GitHub link above)
+       function Dr(MM, rM) {
+         return null != MM && rM in Object(MM)
+       }
```

#### 54. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L568-L580` → after: `L5948-L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5948-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L5948-L6035) · [Before (L568-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L568-L580)

```diff
-     function UG(GG, bG) {
-       if (GG instanceof SG.g) return {
-         at: yG[bG],
-         code: 0
-       };
-       const ZG = (0, wG.h)(GG),
-         UG = "number" === typeof ZG ? ZG : 0;
-       return null !== (0, LG.k)(UG).name ? {
-         at: "refused",
-         code: UG
-       } : {
-         at: kG[bG],
-         code: UG
+       function kr(MM, rM, iM, OM, SM) {
+         return MM === rM || (null == MM || null == rM || !ji(MM) && !ai(rM) ? MM !== MM && rM !== rM : function(MM, rM, iM, OM, SM, zM) {
+           var hM = ri(MM),
+             EM = ri(rM),
+             CM = aM,
+             eM = aM;
+           hM || (CM = (CM = vr(MM)) == jM ? HM : CM);
+           EM || (eM = (eM = vr(rM)) == jM ? HM : eM);
+           var bM = CM == HM && !AM(MM),
+             wM = eM == HM && !AM(rM),
+             tM = CM == eM;
+           if (tM && !bM) return zM || (zM = new tr), hM || Qi(MM) ? Nr(MM, rM, iM, OM, SM, zM) : function(MM, rM, iM, OM, SM, jM, aM) {
+             switch (iM) {
+               case GM:
+                 if (MM.byteLength != rM.byteLength || MM.byteOffset != rM.byteOffset) return !1;
+                 MM = MM.buffer, rM = rM.buffer;
+ ... (72 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L595-L597` → after: `L6038-L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6038-L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6038-L6041) · [Before (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L595-L597)

```diff
-     function LG(GG) {
-       return yG(GG) === wG.b.gameOrPluginOnPlayerAuthRejected.code
-     }
+       function Zr(MM) {
+         return !(!ji(MM) || (rM = MM, qM && qM in rM)) && (Oi(MM) || AM(MM) ? Mr : gM).test(Tr(MM));
+         var rM
+       }
```

#### 56. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L599-L601` → after: `L6043-L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6043-L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6043-L6114) · [Before (L599-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L599-L601)

```diff
-     function yG(GG) {
-       return "object" === typeof GG && null !== GG ? GG.code : void 0
-     }
+       function or(MM) {
+         return "function" == typeof MM ? MM : null == MM ? Li : "object" == typeof MM ? ri(MM) ? function(MM, rM) {
+           if (Br(MM) && Xr(rM)) return Ir(qr(MM), rM);
+           return function(iM) {
+             var OM = function(MM, rM, iM) {
+               var OM = null == MM ? void 0 : sr(MM, rM);
+               return void 0 === OM ? iM : OM
+             }(iM, MM);
+             return void 0 === OM && OM === rM ? function(MM, rM) {
+               return null != MM && function(MM, rM, iM) {
+                 rM = Br(rM, MM) ? [rM] : Yr(rM);
+                 var OM, SM = -1,
+                   jM = rM.length;
+                 for (; ++SM < jM;) {
+                   var aM = qr(rM[SM]);
+                   if (!(OM = null != MM && iM(MM, aM))) break;
+ ... (56 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L603-L606` → after: `L6116-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6116-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6116-L6125) · [Before (L603-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L603-L606)

```diff
-     function kG(GG) {
-       var bG;
-       return null !== (bG = Object.keys(SG.b).find((bG => SG.b[bG] === GG))) && void 0 !== bG ? bG : null
-     }
+       function fr(MM) {
+         if (! function(MM) {
+             var rM = MM && MM.constructor,
+               iM = "function" == typeof rM && rM.prototype || IM;
+             return MM === iM
+           }(MM)) return Pr(MM);
+         var rM = [];
+         for (var iM in Object(MM)) VM.call(MM, iM) && "constructor" != iM && rM.push(iM);
+         return rM
+       }
```

#### 58. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L608-L635` → after: `L6127-L6129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6127-L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6127-L6129) · [Before (L608-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L608-L635)

```diff
-     function UG(GG) {
-       return "notWhitelisted" === GG ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const YG = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
-     }
-   },
-   36808: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => fG,
-       f: () => VG,
-       g: () => QG,
-       h: () => pG
- ... (12 more removed lines; see GitHub link above)
+       function Yr(MM) {
+         return ri(MM) ? MM : Kr(MM)
+       }
```

#### 59. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L637-L640` → after: `L6131-L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6131-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6131-L6163) · [Before (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L637-L640)

```diff
-     function VG() {
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
-       (0, LG.j)(GG, kG)
-     }
+       function Nr(MM, rM, iM, OM, SM, jM) {
+         var aM = 2 & SM,
+           PM = MM.length,
+           nM = rM.length;
+         if (PM != nM && !(aM && nM > PM)) return !1;
+         var QM = jM.get(MM);
+         if (QM && jM.get(rM)) return QM == rM;
+         var zM = -1,
+           LM = !0,
+           mM = 1 & SM ? new wr : void 0;
+         for (jM.set(MM, rM), jM.set(rM, MM); ++zM < PM;) {
+           var HM = MM[zM],
+             hM = rM[zM];
+           if (OM) var JM = aM ? OM(hM, HM, zM, rM, MM, jM) : OM(HM, hM, zM, MM, rM, jM);
+           if (void 0 !== JM) {
+             if (JM) continue;
+ ... (17 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L642-L644` → after: `L6165-L6171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6165-L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6165-L6171) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L642-L644)

```diff
-     function pG() {
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).setItem(YG, !0)
-     }
+       function Ar(MM, rM) {
+         var iM = MM.__data__;
+         return function(MM) {
+           var rM = typeof MM;
+           return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
+         }(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
+       }
```

#### 61. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L646-L649` → after: `L6173-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6173-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6173-L6181) · [Before (L646-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L646-L649)

```diff
-     function fG() {
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
-       return (0, LG.e)(GG, kG)
-     }
+       function xr(MM, rM) {
+         var iM = function(MM, rM) {
+           return null == MM ? void 0 : MM[rM]
+         }(MM, rM);
+         return Zr(iM) ? iM : void 0
+       }
+       var vr = function(MM) {
+         return cM.call(MM)
+       };
```

#### 62. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L651-L659` → after: `L6183-L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6183-L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6183-L6225) · [Before (L651-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L651-L659)

```diff
-     function QG(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG.l;
-       const ZG = (0, LG.e)(bG, kG),
-         VG = function(GG) {
-           const bG = GG.getItem(UG);
-           return "string" !== typeof bG ? null : bG
-         }(bG),
-         pG = function() {
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).getItem(YG)
+       function Fr(MM, rM) {
+         return !!(rM = null == rM ? OM : rM) && ("number" == typeof MM || uM.test(MM)) && MM > -1 && MM % 1 == 0 && MM < rM
+       }
+ 
+       function Br(MM, rM) {
+         if (ri(MM)) return !1;
+         var iM = typeof MM;
+         return !("number" != iM && "symbol" != iM && "boolean" != iM && null != MM && !Pi(MM)) || (eM.test(MM) || !CM.test(MM) || null != rM && MM in Object(rM))
+       }
+ 
+       function Xr(MM) {
+         return MM === MM && !ji(MM)
+       }
+ 
+       function Ir(MM, rM) {
+         return function(iM) {
+ ... (27 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L661-L696` → after: `L6227-L6231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6227-L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6227-L6231) · [Before (L661-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L661-L696)

```diff
-       let fG;
-       return fG = null !== ZG && null !== VG && (0, LG.f)(bG, kG) && function(GG, bG, ZG) {
-           const SG = (0, wG.Yb)(GG),
-             LG = (0, wG.Yb)(bG),
-             yG = (0, wG.Vb)(GG),
-             kG = (0, wG.Vb)(bG);
-           return !(SG !== LG || !ZG) || SG === LG && yG === kG
-         }(VG, GG, pG) ? ZG : (0, SG.d)(), (0, LG.n)(bG, kG, fG), bG.setItem(UG, GG),
-         function() {
-           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).removeItem(YG)
-         }(bG), fG
-     }
-   },
-   36801: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => oG,
- ... (20 more removed lines; see GitHub link above)
+         var iM = [];
+         return bM.test(MM) && iM.push(""), MM.replace(wM, (function(MM, rM, OM, SM) {
+           iM.push(OM ? SM.replace(tM, "$1") : rM || MM)
+         })), iM
+       }));
```

#### 64. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L698-L740` → after: `L6233-L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6233-L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6233-L6259) · [Before (L698-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L698-L740)

```diff
-     function oG() {
-       var GG, bG;
-       return [...null !== (GG = navigator.languages) && void 0 !== GG ? GG : [null !== (bG = navigator.language) && void 0 !== bG ? bG : "none"], "en-Gb"]
-     }
- 
-     function XG(GG, bG, ZG, XG, uG) {
-       const iG = (0, wG.h)(bG) ? (0, wG.j)(bG) : null,
-         CG = GG.isLoggedIn() && void 0 !== (0, SG.c)(LG.l, QG.siteUsed) ? (0, zG.e)() : null,
-         WG = {
-           cookies: (0, KG.getAllCookiesForGameNameWithVariation)(bG),
-           isMobile: (0, fG.isMobile)(),
-           isUsingCustomGameTexturePack: null !== iG && uG(iG),
-           generalCookies: {
-             joinDiscord: !!JG.h.getItem("DiscordPressed"),
-             newGo: pG.c,
-             ...GG.getMetricsCookies(),
- ... (27 more removed lines; see GitHub link above)
+       function qr(MM) {
+         if ("string" == typeof MM || Pi(MM)) return MM;
+         var rM = MM + "";
+         return "0" == rM && 1 / MM == -1 / 0 ? "-0" : rM
+       }
+ 
+       function Tr(MM) {
+         if (null != MM) {
+           try {
+             return TM.call(MM)
+           } catch (rM) {}
+           try {
+             return MM + ""
+           } catch (rM) {}
+         }
+         return ""
+ ... (11 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L742-L747` → after: `L6261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6261) · [Before (L742-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L742-L747)

```diff
-       return null !== iG && (0, kG.Oc)(iG) ? (WG.lobbyName = (0, wG.g)(iG, (0, wG.i)(bG), ZG), {
-         roomName: `classic_${UG.e}`,
-         joinOptions: WG
-       }) : {
-         roomName: bG,
-         joinOptions: WG
+         return iM.cache = new(Vr.Cache || br), iM
```

#### 66. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L763-L770` → after: `L6264-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6264-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6264-L6266) · [Before (L763-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L763-L770)

```diff
-     function UG(GG, bG, ZG, LG, UG) {
-       const YG = "string" === typeof GG && SG.includes(GG) ? GG : "other";
-       let VG = "n";
-       return "string" === typeof bG ? VG = kG.test(bG) ? `k${bG}` : "n" : "number" === typeof ZG && Number.isInteger(ZG) && ZG >= 0 && ZG <= yG && (VG = `b${ZG}`), `${wG}${YG}:${VG}:${LG?1:0}${UG?1:0}`
-     }
-     var YG = ZG(1606),
-       VG = ZG(1709);
-     let pG = null;
+       function cr(MM, rM) {
+         return MM === rM || MM !== MM && rM !== rM
+       }
```

#### 67. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L772-L776` → after: `L6268-L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6268-L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6268-L6271) · [Before (L772-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L772-L776)

```diff
-     function fG(GG) {
-       const bG = GG instanceof Element && GG !== document.body && GG !== document.documentElement && !(0, YG.q)(GG) && !GG.closest("#root");
-       return {
-         editable: (0, VG.d)(GG),
-         outsideView: bG
+       function Mi(MM) {
+         return function(MM) {
+           return ai(MM) && ii(MM)
+         }(MM) && VM.call(MM, "callee") && (!jr.call(MM, "callee") || cM.call(MM) == jM)
```

#### 68. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L778` → after: `L6273-L6274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6273-L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6273-L6274) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L778)

```diff
-     }
+       Vr.Cache = br;
+       var ri = Array.isArray;
```

#### 69. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L780-L805` → after: `L6276-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6276-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6276-L6278) · [Before (L780-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L780-L805)

```diff
-     function QG(GG) {
-       return pG ??= function(GG) {
-         try {
-           const {
-             editable: bG,
-             outsideView: ZG
-           } = fG(GG.target), wG = GG;
-           return UG(GG.type, wG.code, wG.button, bG, ZG)
-         } catch {
-           return UG(null, null, null, !1, !1)
-         }
-       }(GG), pG
-     }
-   },
-   39478: (GG, bG, ZG) => {
-     ZG.d(bG, {
- ... (10 more removed lines; see GitHub link above)
+       function ii(MM) {
+         return null != MM && Si(MM.length) && !Oi(MM)
+       }
```

#### 70. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L807-L811` → after: `L6280-L6282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6280-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6280-L6282) · [Before (L807-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L807-L811)

```diff
-     function yG(GG) {
-       const bG = GG.endsWith(wG.j);
-       return {
-         text: (bG ? GG.slice(0, -wG.j.length) : GG) || null,
-         dropsCache: bG
+       function Oi(MM) {
+         var rM = ji(MM) ? cM.call(MM) : "";
+         return rM == zM || "[object GeneratorFunction]" == rM
```

#### 71. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L816-L820` → after: `L6285-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6285-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6285-L6287) · [Before (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L816-L820)

```diff
-     function UG(GG, bG) {
-       const ZG = VG(GG);
-       return null !== ZG.name && "" === wG.b[ZG.name].text && null !== bG ? bG : ZG.reason
-     }
-     const YG = "You were removed from the game.";
+       function Si(MM) {
+         return "number" == typeof MM && MM > -1 && MM % 1 == 0 && MM <= OM
+       }
```

#### 72. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L822-L832` → after: `L6289-L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6289-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6289-L6304) · [Before (L822-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L822-L832)

```diff
-     function VG(GG) {
-       var bG;
-       let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const SG = null !== (bG = Object.keys(wG.b).find((bG => wG.b[bG].code === GG))) && void 0 !== bG ? bG : null;
-       if (null === SG) return {
-         code: GG,
-         name: SG,
-         reason: null !== ZG && void 0 !== ZG ? ZG : `${kG}\nCode: ${GG}`,
-         canReconnect: !1,
-         automaticallyReconnect: !1,
-         requiresRefresh: !1
+       function ji(MM) {
+         var rM = typeof MM;
+         return !!MM && ("object" == rM || "function" == rM)
+       }
+ 
+       function ai(MM) {
+         return !!MM && "object" == typeof MM
+       }
+ 
+       function Pi(MM) {
+         return "symbol" == typeof MM || ai(MM) && cM.call(MM) == lM
+       }
+       var ni, Qi = fM ? (ni = fM, function(MM) {
+         return ni(MM)
+       }) : function(MM) {
+         return ai(MM) && Si(MM.length) && !!RM[cM.call(MM)]
```

#### 73. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L834-L844` → after: `L6306-L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6306-L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6306-L6308) · [Before (L834-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L834-L844)

```diff
-       const {
-         text: LG,
-         canReconnect: yG = !1
-       } = wG.b[SG], UG = GG === wG.b.outdatedVersion.code || GG === wG.b.loadRecaptchaError.code;
-       return {
-         code: GG,
-         name: SG,
-         reason: "" !== LG ? LG : null !== ZG && void 0 !== ZG ? ZG : GG === wG.b.gameOrPluginKick.code ? YG : `Code: ${GG}`,
-         canReconnect: yG,
-         automaticallyReconnect: GG === wG.b.customGameUpdated.code || GG === wG.b.duplicateLobbyNameError.code,
-         requiresRefresh: UG
+ 
+       function zi(MM) {
+         return ii(MM) ? gr(MM) : fr(MM)
```

#### 74. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L846` → after: `L6310-L6329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6310-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/160.js#L6310-L6329) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/160.js#L846)

```diff
-     }
+ 
+       function Li(MM) {
+         return MM
+       }
+       MM.exports = function(MM, rM, iM) {
+         var OM, SM = ri(MM) || Qi(MM);
+         if (rM = or(rM), null == iM)
+           if (SM || ji(MM)) {
+             var jM = MM.constructor;
+             iM = SM ? ri(MM) ? new jM : [] : Oi(jM) ? ji(OM = Or(MM)) ? Sr(OM) : {} : {}
+           } else iM = {};
+         return (SM ? YM : Wr)(MM, (function(MM, OM, SM) {
+           return rM(iM, MM, OM, SM)
+         })), iM
+       }
+     }(fj, fj.exports);
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   8987: (GG, bG, ZG) => {
+   7190: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/161.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/161.js#L6)

```diff
-       pageBody: () => wG
+       BloxdMsnAccountSdk: () => LM,
+       MsnSdkAdaptor: () => JM
```

#### 3. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L8-L41` → after: `L9-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L9-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/161.js#L9-L209) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/161.js#L8-L41)

```diff
-     const wG = {
-       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
-       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
-       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
-       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
-       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
-       faq: [{
-         question: "What is Bedwars?",
-         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
-       }, {
-         question: "How do you win Bedwars?",
-         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
-       }, {
-         question: "What happens after your bed is destroyed?",
-         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
-       }, {
- ... (18 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177),
+       jM = iM(3868),
+       aM = iM(625),
+       PM = iM(1821);
+     const nM = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     let QM = null;
+ 
+     function zM() {
+       return QM ??= async function() {
+         await (0, SM.d)(nM, {}, !1);
+         for (let MM = 0; MM < 50 && !window.$msstart; MM++) await (0, aM.Q)(100)
+       }(), QM
+     }
+     class LM {
+       constructor() {}
+ ... (185 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   8994: (GG, bG, ZG) => {
+   7195: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/162.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/162.js#L6)

```diff
-       pageBody: () => wG
+       GameDistributionSdkAdaptor: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L8-L32` → after: `L8-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L8-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/162.js#L8-L62) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/162.js#L8-L32)

```diff
-     const wG = {
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
-       faq: [{
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
-       }, {
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
-       }, {
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
-       }, {
- ... (9 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177);
+     class jM extends OM.d {
+       constructor(MM) {
+         super(), this.setOnEndCb = MM, this.name = "gamedistribution"
+       }
+       static async setup() {
+         let MM;
+         let rM;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: iM => {
+             const OM = () => {
+               rM && (window.adCompleteSoResume(), rM = !1), MM && (MM(), MM = null)
+             };
+             switch (iM.name) {
+ ... (39 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   8997: (GG, bG, ZG) => {
+   7204: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/163.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/163.js#L6)

```diff
-       pageBody: () => wG
+       CoolMathGamesSdkAdaptor: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L8-L38` → after: `L8-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L8-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/163.js#L8-L53) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/163.js#L8-L38)

```diff
-     const wG = {
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
-       faq: [{
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
-       }, {
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
-       }, {
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
-       }, {
- ... (15 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177);
+     class jM extends OM.d {
+       constructor() {
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
+       }
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const MM = document.getElementsByClassName("ads-popup");
+         for (const rM of MM) rM instanceof HTMLElement && (rM.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+ ... (30 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   9004: (GG, bG, ZG) => {
+   7206: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/164.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/164.js#L6)

```diff
-       pageBody: () => wG
+       AdMobSdkAdaptor: () => zM
```

#### 3. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L9-L35` → after: `L15-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L15-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/164.js#L15-L118) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/164.js#L9-L35)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
-       faq: [{
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
-       }, {
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
-       }, {
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
-       }, {
-         question: "What items can you get in Lucky Towers?",
- ... (11 more removed lines; see GitHub link above)
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+         rewarded: "ca-app-pub-5991928098122027/5726886857",
+         interstitial: "ca-app-pub-5991928098122027/1979213537"
+       },
+       mobileIos: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/4652945503",
+           leaderboard_4: "ca-app-pub-5991928098122027/2921518285",
+ ... (88 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/165.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/165.js#L4)

```diff
-   9008: (GG, bG, ZG) => {
+   7221: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => QM
+     });
+     var OM = iM(3241);
+     const SM = [1, 8, 9],
+       jM = 5,
+       aM = 200,
+       PM = 150;
+ 
+     function nM(MM, rM) {
+       let iM = 0;
+       MM("addEventListener", 2, ((MM, aM) => {
+         if (!aM) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const PM = function(MM) {
+           const rM = "useractioncomplete" === MM.eventStatus || "tcloaded" === MM.eventStatus && !!MM.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/165.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/165.js#L6)

```diff
-       pageBody: () => wG
+       AdinPlaySdkAdaptor: () => QM
```

#### 3. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L8-L35` → after: `L48-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L48-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/165.js#L48-L110) · [Before (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/165.js#L8-L35)

```diff
-     const wG = {
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
-       faq: [{
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
-       }, {
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
-       }, {
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
-       }, {
- ... (12 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177),
+       jM = iM(212),
+       aM = iM(7221),
+       PM = iM(3241);
+     const nM = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class QM extends OM.d {
+       constructor() {
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = nM
+       }
+       static async setup() {
+         return (0, jM.canonicaliseZonesWhenIdle)(nM), (0, PM.setUpGtag)(), await (0, SM.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, aM.e)("inMobi"), new QM
+       }
+       playRewarded(MM, rM) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+ ... (47 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/166.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/166.js#L4)

```diff
-   9013: (GG, bG, ZG) => {
+   7221: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => QM
+     });
+     var OM = iM(3241);
+     const SM = [1, 8, 9],
+       jM = 5,
+       aM = 200,
+       PM = 150;
+ 
+     function nM(MM, rM) {
+       let iM = 0;
+       MM("addEventListener", 2, ((MM, aM) => {
+         if (!aM) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const PM = function(MM) {
+           const rM = "useractioncomplete" === MM.eventStatus || "tcloaded" === MM.eventStatus && !!MM.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/166.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/166.js#L6)

```diff
-       pageBody: () => wG
+       NitroSdkAdaptor: () => nM
```

#### 3. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L8-L38` → after: `L48-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L48-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/166.js#L48-L183) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/166.js#L8-L38)

```diff
-     const wG = {
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
-       faq: [{
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
-       }, {
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
-       }, {
-         question: "Why did my build disappear?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
-       }, {
- ... (15 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177),
+       jM = iM(7221),
+       aM = iM(3241);
+     const PM = "NitroOutstreamVideo";
+     class nM extends OM.d {
+       constructor() {
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+       }
+       static async setup() {
+         return window.nitroAds = window.nitroAds || {
+           createAd: function() {
+             for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+             return new Promise((MM => {
+               window.nitroAds.queue.push(["createAd", rM, MM])
+             }))
+ ... (120 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   9017: (GG, bG, ZG) => {
+   7228: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/167.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/167.js#L6)

```diff
-       pageBody: () => wG
+       AdsenseForGamesSdkAdaptor: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L8-L41` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/167.js#L8-L50) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/167.js#L8-L41)

```diff
-     const wG = {
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
-       faq: [{
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
-       }, {
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
-       }, {
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
-       }, {
- ... (18 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177);
+     class jM extends OM.d {
+       constructor() {
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(MM) {
+           window.adsbygoogle.push(MM)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+           onReady: () => {
+             console.log("adsense for games ready")
+           }
+         }), await (0, SM.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+ ... (27 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   9019: (GG, bG, ZG) => {
+   7230: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/168.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/168.js#L6)

```diff
-       pageBody: () => wG
+       AditudeSdkAdaptor: () => aM
```

#### 3. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L9-L32` → after: `L11-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L11-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/168.js#L11-L79) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/168.js#L9-L32)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
-       faq: [{
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
-       }, {
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
-       }, {
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
-       }, {
-         question: "What happens to monsters when the sun comes up?",
- ... (8 more removed lines; see GitHub link above)
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class aM extends OM.d {
+       constructor() {
+         super(), this.name = "aditude"
+       }
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, SM.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new aM
+       }
+       playVideoAd(MM, rM) {
+         this.playVideoOrRewarded("video", MM, MM)
+       }
+       playRewarded(MM, rM) {
+ ... (53 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/169.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/169.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2)

#### 1. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L4-L36` → after: `L5-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L5-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/169.js#L5-L2614) · [Before (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/169.js#L4-L36)

```diff
-   9025: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       pageBody: () => wG
-     });
-     const wG = {
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
-       faq: [{
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
-       }, {
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
- ... (17 more removed lines; see GitHub link above)
+   7259: (MM, rM, iM) => {
+     var OM = iM(7263);
+     rM.e = {
+       prefix: OM.prefix,
+       iconName: OM.iconName,
+       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
+     }, rM.i = rM.e, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+   },
+   7265: (MM, rM, iM) => {
+     var OM = iM(7273);
+     rM.d = {
+       prefix: OM.prefix,
+       iconName: OM.iconName,
+       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
+     }, rM.f = rM.d, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+   },
+ ... (2594 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/170.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/170.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251)

#### 1. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L4-L6` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/170.js#L4-L17) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/170.js#L4-L6)

```diff
-   9030: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       pageBody: () => wG
+   8703: (MM, rM) => {
+     var iM = "youtube",
+       OM = [61802],
+       SM = "f167",
+       jM = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     rM.b = {
+       prefix: "fab",
+       iconName: iM,
+       icon: [576, 512, OM, SM, jM]
+     }, rM.c = rM.b
+   },
+   7398: (MM, rM) => {
+     Object.defineProperty(rM, "__esModule", {
+       value: !0
```

#### 2. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L9-L16` → after: `L169-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L169-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/170.js#L169-L703) · [Before (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/170.js#L9-L16)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
-       faq: [{
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
+       youtube: hM.c,
+       "person-military-pointing": JM.f,
+       sparkle: dM.e,
+       user: yM.f,
+       wrench: lM.f,
+       zap: EM.f
+     };
+ 
+     function GM(MM) {
+       const [rM, iM, , , OM] = MM.icon;
+       return {
+         width: rM,
+         height: iM,
+         path: "string" === typeof OM ? OM : OM.join(" ")
+       }
+     }
+ ... (519 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L18-L19` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/170.js#L705-L706) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/170.js#L18-L19)

```diff
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
+         healthFraction: .5,
+         colour: "#ffaa00"
```

#### 4. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L21-L35` → after: `L708-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L708-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/170.js#L708-L1106) · [Before (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/170.js#L21-L35)

```diff
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
-       }, {
-         question: "How do I make a free build server in Bloxd?",
-         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
-       }, {
-         question: "Can you use TNT in Bloxd Creative?",
-         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
-       }, {
-         question: "Why did my build disappear in Bloxd Creative?",
-         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
-       }, {
-         question: "What's the difference between Creative and Plots?",
-         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
-       }]
+         healthFraction: 1,
+         colour: "#00ff00"
+       }],
+       kM = 64,
+       ZM = 69,
+       oM = {
+         icon: RM.e,
+         mainRGB: "transparent",
+         chatTag: [],
+         nameTag: {
+           iconRGB: "#f38ab6",
+           iconShadowRGB: "black"
+         },
+         visible: !0
+       };
+ 
+ ... (383 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/171.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/171.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d)

#### 1. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/171.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/171.js#L4-L6)

```diff
-   9036: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       pageBody: () => wG
+   9463: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM
```

#### 2. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L9-L28` → after: `L60-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L60-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/171.js#L60-L1049) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/171.js#L9-L28)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
-       faq: [{
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
-       }, {
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
-       }, {
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
-       }, {
-         question: "Can other players break my build?",
- ... (4 more removed lines; see GitHub link above)
+       floating: "settingsMenu:joystickFloating",
+       fixed_shown: "settingsMenu:joystickFixed",
+       fixed_hidden: "settingsMenu:joystickHidden"
+     };
+     var eM = iM(9467);
+     var bM = iM(1548),
+       wM = iM(1429),
+       tM = iM(9472),
+       gM = iM(1474),
+       uM = iM(1398),
+       RM = iM(9479),
+       pM = iM(2666);
+ 
+     function WM(MM) {
+       let {
+         className: rM,
+ ... (974 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L30-L32` → after: `L1051-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L1051-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/171.js#L1051-L1087) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/171.js#L30-L32)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
-       }]
+         vars: nM,
+         safe: nM,
+         classes: nM
+       }), nM.style.setProperty("--preview-joystick-shift-left", `${zM[3]}px`), nM.style.setProperty("--preview-joystick-shift-bottom", `${zM[2]}px`), nM.style.setProperty("--preview-joystick-scale", String(jM[2])), (0, lr.c)(nM, rM, iM, OM);
+       for (const LM of gr) nM.style.setProperty(LM, MM.documentElement.style.getPropertyValue(LM) || "0px")
+     }
+ 
+     function Rr() {
+       return (0, qM.O)(zM.d.get("notchSize"), window.innerWidth, window.innerHeight)
+     }
+ 
+     function pr(MM) {
+       return (0, qM.v)(Rr(), (0, qM.T)(MM))
+     }
+ 
+     function Wr(MM, rM, iM) {
+ ... (21 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/172.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/172.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413)

#### 1. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/172.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/172.js#L4-L6)

```diff
-   9044: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       pageBody: () => wG
+   37538: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => HM,
+       i: () => hM,
+       m: () => mM,
+       p: () => LM
```

#### 2. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L9-L39` → after: `L376-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L376-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/172.js#L376-L758) · [Before (L9-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/172.js#L9-L39)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
-       faq: [{
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
-       }, {
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
-       }, {
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
-       }, {
-         question: "What are the Dungeons in Bloxd Skyblock?",
- ... (15 more removed lines; see GitHub link above)
+       ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
+       auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
+       bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
+       carrot: JM,
+       castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
+       cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
+       combat_1: dM,
+       cow: PM,
+       craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
+       dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
+       emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
+       enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
+       farm: iM(26682),
+       farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
+       fishing: OM,
+       fishing_1: OM,
+ ... (367 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/173.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/173.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e)

#### 1. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L4-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/173.js#L4-L174) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/173.js#L4)

```diff
-   9047: (GG, bG, ZG) => {
+   37544: (MM, rM, iM) => {
+     iM.d(rM, {
+       B: () => lM,
+       b: () => jM,
+       f: () => JM,
+       i: () => dM,
+       j: () => PM,
+       m: () => mM,
+       q: () => yM,
+       u: () => LM,
+       x: () => EM,
+       y: () => hM
+     });
+     var OM = iM(19),
+       SM = iM(22);
+     const jM = "clientGameInventoryButtonsChanged",
+ ... (155 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L6-L36` → after: `L176-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L176-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/173.js#L176-L211) · [Before (L6-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/173.js#L6-L36)

```diff
-       pageBody: () => wG
-     });
-     const wG = {
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
-       faq: [{
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
-       }, {
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
-       }, {
-         question: "How many phases are in Bloxd One Block?",
- ... (15 more removed lines; see GitHub link above)
+       getClientGameMapKey: () => OM.p,
+       shopIsEmpty: () => SM.d
+     });
+     var OM = iM(37542),
+       SM = iM(9366)
+   },
+   9374: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       return !MM.hidden && (rM || !MM.isRewardedAd)
+     }
+ 
+     function SM(MM) {
+       return "object" === typeof MM ? MM.option : MM
+     }
+ 
+     function jM(MM, rM) {
+ ... (20 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/174.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/174.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045)

#### 1. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L4` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/174.js#L4-L199) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/174.js#L4)

```diff
-   9053: (GG, bG, ZG) => {
+   40118: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       h: () => aM
+     });
+     var OM = iM(22);
+     let SM = !1;
+ 
+     function jM() {
+       return SM
+     }
+ 
+     function aM(MM) {
+       SM !== MM && (SM = MM, OM.i.Tz("replayViewer|videoExportChanged"))
+     }
+   },
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L6-L7` → after: `L201-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L201-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/174.js#L201-L556) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/174.js#L6-L7)

```diff
-       pageBody: () => wG
-     });
+       LOOK_DEBUG_HEADER: () => zM,
+       endLookDebugTake: () => yM,
+       noteLookDroppedCopy: () => lM,
+       saveLookCapture: () => EM,
+       startLookDebug: () => dM
+     });
+     var OM = iM(5200),
+       SM = iM(3122),
+       jM = iM(2e3);
+     const aM = new Map(Object.entries(OM.l).map((MM => {
+       let [rM, iM] = MM;
+       return [iM, rM]
+     })));
+ 
+     function PM(MM) {
+       return (0, jM.J)(MM).toFixed(1)
+ ... (340 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L9-L32` → after: `L558-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L558-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/174.js#L558-L845) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/174.js#L9-L32)

```diff
-       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
-       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
-       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
-       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
-       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
-       faq: [{
-         question: "What is Bloxd Sky Islands?",
-         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
-       }, {
-         question: "How is the winner decided in Bloxd Sky Islands?",
-         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
-       }, {
-         question: "How do I claim an island in Sky Islands?",
-         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
-       }, {
-         question: "Which modes does Sky Islands have?",
- ... (8 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       PM = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function nM(MM, rM) {
+       if (MM instanceof SM.i) return {
+         at: aM[rM],
+         code: 0
+       };
+       const iM = (0, OM.f)(MM),
+ ... (272 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/175.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/175.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9)

#### 1. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L4)

```diff
-   9061: (GG, bG, ZG) => {
+   9533: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L9-L13)

```diff
-       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
-       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
-       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
-       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
-       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L15-L16)

```diff
-         question: "What is Bloxd Build a Factory?",
-         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L18-L19)

```diff
-         question: "How do you build a rocket in Bloxd Build a Factory?",
-         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L21-L22)

```diff
-         question: "What's the goal in Build a Factory?",
-         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L24-L25)

```diff
-         question: "How often does the Build a Factory world reset?",
-         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L27-L28)

```diff
-         question: "What is the Persistent world in Build a Factory?",
-         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L30-L31)

```diff
-         question: "How do you get to the Moon in Build a Factory?",
-         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
```

#### 9. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L33-L34)

```diff
-         question: "What does Lunite do?",
-         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
```

#### 10. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L36-L37` → after: `L36-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/175.js#L36-L40) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/175.js#L36-L37)

```diff
-         question: "What's the difference between Build a Factory and Build a Factory 2?",
-         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/176.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/176.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c)

#### 1. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L4)

```diff
-   9065: (GG, bG, ZG) => {
+   9540: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L9-L13)

```diff
-       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
-       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
-       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
-       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
-       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L15-L16)

```diff
-         question: "What is Build a Factory 2 on Bloxd?",
-         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L18-L19)

```diff
-         question: "Is Build a Factory 2 an idle factory game?",
-         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L21-L22)

```diff
-         question: "How do I unlock new machines in Build a Factory 2?",
-         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L24-L25)

```diff
-         question: "What's the best way to power my factory?",
-         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L27-L28)

```diff
-         question: "What are the Wilds?",
-         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/176.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/176.js#L30-L31)

```diff
-         question: "Can friends help build my factory?",
-         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/177.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/177.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046)

#### 1. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L4)

```diff
-   9072: (GG, bG, ZG) => {
+   9548: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L9-L13)

```diff
-       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
-       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
-       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
-       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
-       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L15-L16)

```diff
-         question: "What is Bloxd Greenville?",
-         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L18-L19)

```diff
-         question: "How do I earn gold in Greenville?",
-         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L21-L22)

```diff
-         question: "Can I build my own house in Greenville?",
-         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L24-L25)

```diff
-         question: "How do I change my house in Bloxd Greenville?",
-         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L27-L28)

```diff
-         question: "Can my friends visit my house?",
-         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/177.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/177.js#L30-L31)

```diff
-         question: "Which mini-games are in Greenville?",
-         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
+       }, {
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
+       }, {
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/178.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/178.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2)

#### 1. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L4)

```diff
-   9074: (GG, bG, ZG) => {
+   9554: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L9-L13)

```diff
-       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
-       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
-       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
-       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
-       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L15-L16)

```diff
-         question: "What is Bloxd Fishing?",
-         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L18-L19)

```diff
-         question: "How many fish are in Bloxd Fishing?",
-         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L21-L22)

```diff
-         question: "How do I catch Mythic fish in Bloxd Fishing?",
-         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L24-L25)

```diff
-         question: "Where can I get better rods?",
-         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L27-L28)

```diff
-         question: "How do I travel between islands?",
-         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/178.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/178.js#L30-L31)

```diff
-         question: "What are the catch minigames?",
-         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+       }, {
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/179.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/179.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14)

#### 1. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L4)

```diff
-   9077: (GG, bG, ZG) => {
+   9562: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L9-L13)

```diff
-       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
-       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
-       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
-       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
-       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L15-L16)

```diff
-         question: "What is Cube Warfare?",
-         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L18-L19)

```diff
-         question: "What modes are in Cube Warfare?",
-         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L21-L22)

```diff
-         question: "How does team deathmatch work in Cube Warfare?",
-         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L24-L25)

```diff
-         question: "What is Gun Game in Bloxd Cube Warfare?",
-         answer: "It's a mode with its own queue. Each elimination upgrades your weapon, and a final takedown with the sword wins it."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L27-L28)

```diff
-         question: "How do I unlock new guns in Cube Warfare?",
-         answer: "Through the shop. Once they're unlocked you can take them into Free-For-All or Team Deathmatch, and Gun Game lets you try the lot."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L30-L31)

```diff
-         question: "How many guns are in Cube Warfare?",
-         answer: "Over 15. That includes the AK-47, AWP, M16, MP40, SKAR, Deagle and Striker-12."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L33-L43` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/179.js#L33-L34) · [Before (L33-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/179.js#L33-L43)

```diff
-         question: "What are killstreaks in Cube Warfare?",
-         answer: "Rewards for taking down opponents without being eliminated, like Healthup, Hitem, Speedy and Autoblocks. There are 3 tiers, and your streak resets when you go down."
-       }, {
-         question: "What is Collect Diamonds?",
-         answer: "A match modifier for Free-For-All and Team Deathmatch. You need 30 diamonds to win in FFA, or 100 as a team. When someone's taken down they drop all their diamonds, so you can steal theirs. Shoot the diamonds placed around the map and they'll drop too. Those resp … [truncated]
-       }, {
-         question: "What is the Explosives modifier?",
-         answer: "You keep getting explosives all match, and every takedown gives you more."
-       }, {
-         question: "What maps are in Cube Warfare?",
-         answer: "Snowbase, Sienna and Cabins, among others. You get to vote for the next one."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/180.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/180.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19)

#### 1. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L4)

```diff
-   9084: (GG, bG, ZG) => {
+   9565: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L9-L13)

```diff
-       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
-       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
-       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
-       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
-       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L15-L16)

```diff
-         question: "What is Bloxd Frontline?",
-         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L18-L19)

```diff
-         question: "How does a team win in Bloxd Frontline?",
-         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L21-L22)

```diff
-         question: "What do kits do in Bloxd Frontline?",
-         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L24-L25)

```diff
-         question: "How do I unlock new kits?",
-         answer: "Spend gold on a mystery kit draw. Draw one you already own and you'll get gems instead, which you can use to buy a specific locked kit."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L27-L28)

```diff
-         question: "Does Bloxd Frontline have vehicles?",
-         answer: "Yep. They spawn at each base and around the map. Guns and explosives can destroy them, so drive carefully."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L30-L31)

```diff
-         question: "How is Frontline different from Cube Warfare?",
-         answer: "Frontline is 12v12 objective play with points, kits and vehicles. Cube Warfare is quicker Free-For-All, Team Deathmatch and Gun Game fights where killstreaks matter most."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
```

#### 9. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/180.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/180.js#L33-L34)

```diff
-         question: "Can I squad up with friends in Bloxd Frontline?",
-         answer: "Yes. Party up with your friends and you'll play together as a squad."
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/181.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/181.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8)

#### 1. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L4)

```diff
-   9086: (GG, bG, ZG) => {
+   9573: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L9-L13)

```diff
-       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
-       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
-       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
-       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
-       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L15-L16)

```diff
-         question: "What is Bloxd Pirates?",
-         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Pirates?",
-         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L21-L22)

```diff
-         question: "How do cannons work in Bloxd Pirates?",
-         answer: "Click your team's coloured glass to fire. Each cannon takes 15 seconds to reload, and you can break enemy cannons to knock them out for a while."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L24-L25)

```diff
-         question: "Which kits can I pick in Bloxd Pirates?",
-         answer: "There are 26, each with its own items or powers. The Scout can double jump, the Scoundrel can go invisible and the Portalmaster makes portals. You pick one in the lobby and unlock more with Gold or gems."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L27-L28)

```diff
-         question: "How do I get Gold in Bloxd Pirates?",
-         answer: "A win is worth 25 Gold. You also get 5 Gold for every spawn block you break and every final kill."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L30-L31` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/181.js#L30-L40) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/181.js#L30-L31)

```diff
-         question: "What maps are in Bloxd Pirates?",
-         answer: "There are 11: Classic, Classic (4 Teams), Scurvy Shore, Cutthroat Cliffs, Treasure Island, Double Trouble, Stowaway Seas, Woesome Waters, Cannon Storm, Scorched Sails and Dynasty Docks."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+       }, {
+         question: "Can I play Bloxd Peaceful with friends?",
+         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+       }, {
+         question: "How do I keep my builds safe in Peaceful?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
+       }, {
+         question: "How do I save my progress in Bloxd Peaceful?",
+         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/182.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/182.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa)

#### 1. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L4)

```diff
-   9093: (GG, bG, ZG) => {
+   9580: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L9-L13)

```diff
-       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
-       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
-       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
-       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
-       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L15-L16)

```diff
-         question: "What is Bloxd Infection?",
-         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L18-L19)

```diff
-         question: "How does the infection spread in Bloxd Infection?",
-         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L21-L22)

```diff
-         question: "How do humans win?",
-         answer: "Get through all the obstacles and escape before you're infected."
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L24-L25)

```diff
-         question: "How do zombies win?",
-         answer: "By infecting every human before they escape."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L27-L28)

```diff
-         question: "How are points earned?",
-         answer: "Humans get 100 points for taking down a zombie and 25 for an assist, plus extra for shooting diamonds."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/182.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/182.js#L30-L34)

```diff
-         question: "What kits are in Bloxd Infection?",
-         answer: "Humans can pick kits like Veteran, who starts with an AK-47, or Scout, who has a sniper rifle. On the zombie side there's Puker, who can puke acid, and Tank, who has more health. Win awards to earn gold for the kit shop."
-       }, {
-         question: "What's the player limit in Infection?",
-         answer: "18 players per match."
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/183.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/183.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad)

#### 1. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L4)

```diff
-   9100: (GG, bG, ZG) => {
+   9588: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L9-L13)

```diff
-       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
-       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
-       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
-       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
-       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L15-L16)

```diff
-         question: "What is Bloxd Murder Mystery?",
-         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L18-L19)

```diff
-         question: "What are the roles in Murder Mystery?",
-         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L21-L22)

```diff
-         question: "Who wins a round of Murder Mystery?",
-         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L24-L25)

```diff
-         question: "How do I get a gun?",
-         answer: "Collect 10 Moonstone, or pick up the Detective's gun if it's been dropped. On the Dinosaur map the dino might hand you one too."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L27-L28)

```diff
-         question: "How long is a round?",
-         answer: "4 minutes."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L30-L31)

```diff
-         question: "How many people do you need to play Murder Mystery?",
-         answer: "You need at least 2 to start, and a round can hold up to 12."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
```

#### 9. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/183.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/183.js#L33-L37)

```diff
-         question: "Can I play Murder Mystery with friends?",
-         answer: "Yes. Jump into the same game and see which of you spots the Murderer first."
-       }, {
-         question: "How do I earn gold?",
-         answer: "Survive, collect Moonstone, stop the Murderer or win as the Murderer. Rewards only kick in when there are at least 5 players in the game."
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/184.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/184.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e)

#### 1. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L4)

```diff
-   9105: (GG, bG, ZG) => {
+   9595: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L9-L13)

```diff
-       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
-       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
-       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
-       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
-       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L15-L16)

```diff
-         question: "What is Bloxd Escape the Forest?",
-         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L18-L19)

```diff
-         question: "In Escape the Forest, how do you survive 99 nights?",
-         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L21-L22)

```diff
-         question: "How many players can team up in Escape the Forest?",
-         answer: "Up to 6 in each game, and others can join to spectate."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L24-L25)

```diff
-         question: "Where are the lost kids?",
-         answer: "Out in the forest. Level up your fire to find more of them, then go searching. Every kid you find adds to your day count."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L27-L28)

```diff
-         question: "What happens if you go down?",
-         answer: "A teammate can revive you with a Revive Splash Potion. You can fire a Call for Help flare too, and the Respawn Pod can bring back players who die."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L30-L31)

```diff
-         question: "How do you escape the forest?",
-         answer: "Follow Maverick the wizard's guidance to the frozen forest, collect the portal keystones, open the portal and send the kids home."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
```

#### 9. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/184.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/184.js#L33-L34)

```diff
-         question: "Is there anything after night 99?",
-         answer: "You've beaten the challenge by then, but how much longer can you survive? Your best number of nights survived shows on your nametag."
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/185.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/185.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072)

#### 1. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L4)

```diff
-   9112: (GG, bG, ZG) => {
+   9601: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L9-L13)

```diff
-       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
-       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
-       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
-       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
-       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L15-L16)

```diff
-         question: "What is Bloxd Containment Breach?",
-         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L18-L19)

```diff
-         question: "How many players can play Containment Breach?",
-         answer: "Up to 6 on Normal, or up to 4 on Hard."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L21-L22)

```diff
-         question: "Can I play Containment Breach solo?",
-         answer: "Not on your own, sorry. A run needs at least 2 players, so bring a friend or team up with someone in the lobby."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L24-L25)

```diff
-         question: "What happens when you go down in Containment Breach?",
-         answer: "You become a ghost until a teammate revives you with a splash healing potion. If everyone ends up as a ghost, the run is lost."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L27-L28)

```diff
-         question: "How do I upgrade guns in Containment Breach?",
-         answer: "Go to the Loadout NPC and spend gold and boss parts there. Gold comes from kills, and your squad gets a boss part every time it contains an anomaly."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/185.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/185.js#L30-L31)

```diff
-         question: "Can I choose which anomaly I fight?",
-         answer: "Yes. Buy a Locator from the Locator NPC and arm it before you deploy. It shatters after one use."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/186.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/186.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f)

#### 1. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L4)

```diff
-   9116: (GG, bG, ZG) => {
+   9609: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L9-L13)

```diff
-       whatIs: ["You might not be the only one checking in. Bloxd Horror Hotel sends you down an infinite hallway of hotel rooms, collecting items so you can level up and decorate a room of your own. Anyone can play for free, straight from a browser tab. Just be careful what's wai … [truncated]
-       howToPlay: ["Your stay starts in a tiny room, so first things first: go and complain to the manager. The first upgrade is free. After that, upgrades cost items, beginning with a red bed you'll have to \"borrow\" from someone else's room. Head down the corridor to find what  … [truncated]
-       features: ["An Infinite Hallway of Hotel Rooms to Explore", "Forest, Mining, Maze and Buried Treasure Rooms", "Quirky Guests Who Need Your Help", "Upgrade Your Room All the Way to Level 22", "Pick from a Range of Room Colours", "Invite Friends and Control PvP, Visitors and  … [truncated]
-       tips: ["Talk to the manager first and grab your free room upgrade", "Check what your next upgrade costs, then go looking for those items in other rooms", "Help guests with their requests, like the thirsty guest in the desert room", "Use the home button on the left to fast t … [truncated]
-       similarGames: ["ninetyNineNights", "containmentBreach", "backrooms", "murderMystery"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L15-L16)

```diff
-         question: "What is Bloxd Horror Hotel?",
-         answer: "A spooky exploration game. You wander an endless hotel, collect items from other rooms and use them to upgrade and decorate your own."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L18-L19)

```diff
-         question: "Does Horror Hotel really have infinite rooms?",
-         answer: "It does. The hallway just keeps going, with bedrooms, forests, mines, mazes and buried treasure rooms to find. There's even a secret room hidden somewhere."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L21-L22)

```diff
-         question: "How do I upgrade my room in Horror Hotel?",
-         answer: "Talk to the manager. The first upgrade's free, then each level costs items you find around the hotel, starting with a red bed."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L24-L25)

```diff
-         question: "What is the max room level in Horror Hotel?",
-         answer: "Level 22. Once you hit it, your room is maxed out."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L27-L28)

```diff
-         question: "Can friends visit my hotel room?",
-         answer: "Yes, as long as their room level is high enough. You can also choose whether to allow visitors, editors and PvP."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/186.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/186.js#L30-L31)

```diff
-         question: "Is Horror Hotel scary?",
-         answer: "A bit! It's spooky, with odd guests, eerie sounds and a skinwalker lurking about. It's creepy rather than gory, and you can explore at your own pace."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+       }, {
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/187.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/187.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3)

#### 1. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L4-L7242` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/187.js#L4) · [Before (L4-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/187.js#L4-L7242)

```diff
-   9232: (GG, bG) => {
-     bG.discordURLBuilder = function(GG) {
-       var bG;
-       const ZG = (null === (bG = null === window || void 0 === window ? void 0 : window.location) || void 0 === bG ? void 0 : bG.hostname) || "localhost",
-         wG = GG.hostname.split("."),
-         SG = !GG.hostname.includes("trycloudflare.com") && !GG.hostname.includes("discordsays.com") && wG.length > 2 ? `/${wG[0]}` : "";
-       return GG.pathname.startsWith("/.proxy") ? `${GG.protocol}//${ZG}${SG}${GG.pathname}${GG.search}` : `${GG.protocol}//${ZG}/.proxy/colyseus${SG}${GG.pathname}${GG.search}`
-     }
-   },
-   9225: (GG, bG, ZG) => {
-     var wG, SG, LG, yG, kG = ZG(9136),
-       UG = ZG(9229),
-       YG = ZG(9184);
-     wG = new WeakMap, SG = new WeakMap, LG = new WeakMap, yG = new WeakMap, bG.Auth = class {
-       constructor(GG) {
-         this.http = GG, this.settings = {
- ... (7223 more removed lines; see GitHub link above)
+   9618: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L7244-L7784` → after: `L6-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L6-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/187.js#L6-L35) · [Before (L7244-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/187.js#L7244-L7784)

```diff
-       __addDisposableResource: () => PG,
-       __assign: () => LG,
-       __asyncDelegator: () => CG,
-       __asyncGenerator: () => iG,
-       __asyncValues: () => WG,
-       __await: () => uG,
-       __awaiter: () => KG,
-       __classPrivateFieldGet: () => cG,
-       __classPrivateFieldIn: () => jG,
-       __classPrivateFieldSet: () => lG,
-       __createBinding: () => dG,
-       __decorate: () => kG,
-       __disposeResources: () => AG,
-       __esDecorate: () => YG,
-       __exportStar: () => JG,
-       __extends: () => SG,
- ... (525 more removed lines; see GitHub link above)
+       pageBody: () => OM
+     });
+     const OM = {
+       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
+       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
+       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
+       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
+       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       faq: [{
+         question: "What is Bloxd One Block?",
+         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+       }, {
+         question: "Is Bloxd One Block a skyblock game?",
+         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+       }, {
+         question: "How many phases are in Bloxd One Block?",
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/188.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/188.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071)

#### 1. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/188.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/188.js#L4-L7)

```diff
-   9356: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => SG,
-       f: () => LG
+   9621: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
```

#### 2. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L9-L1367` → after: `L8-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/188.js#L8-L33) · [Before (L9-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/188.js#L9-L1367)

```diff
-     var wG = ZG(9303);
-     const SG = "Air",
-       LG = Object.freeze(new wG.h(SG, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   27278: GG => {
-     GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   33521: GG => {
-     GG.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   33524: GG => {
-     GG.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   27284: GG => {
-     GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1343 more removed lines; see GitHub link above)
+     const OM = {
+       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
+       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
+       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
+       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
+       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
+       faq: [{
+         question: "What is Bloxd Sky Islands?",
+         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
+       }, {
+         question: "How is the winner decided in Bloxd Sky Islands?",
+         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
+       }, {
+         question: "How do I claim an island in Sky Islands?",
+         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
+       }, {
+ ... (10 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/189.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/189.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63)

#### 1. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L4-L12` → after: `L4-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/189.js#L4-L38) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/189.js#L4-L12)

```diff
-   38135: (GG, bG, ZG) => {
-     var wG = ZG(38141);
- 
-     function SG(GG) {
-       for (var bG, ZG, SG = 0, LG = GG.length, yG = 0; yG < GG.length;) {
-         for (bG = GG[yG], ZG = 0; yG < LG && GG[yG] === bG;) ++yG, ++ZG;
-         SG += wG.log2(ZG) / 7 | 0, SG += wG.log2(bG >>> 0) / 7 | 0, SG += 2
-       }
-       return SG
+   9626: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
+     });
+     const OM = {
+       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
+       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
+       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
+       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
+       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       faq: [{
+         question: "What is Bloxd Build a Factory?",
+         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+       }, {
+         question: "How do you build a rocket in Bloxd Build a Factory?",
+         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/190.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/190.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f)

#### 1. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/190.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/190.js#L4)

```diff
-   40868: (GG, bG, ZG) => {
+   9634: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/190.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/190.js#L6-L8)

```diff
-       FORMER_BLOCK_IMAGE_NAMES: () => wG.d,
-       textureAnimationData: () => SG.y,
-       textureNameToIndex: () => SG.B
+       pageBody: () => OM
```

#### 3. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L10-L31` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/190.js#L8-L32) · [Before (L10-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/190.js#L10-L31)

```diff
-     var wG = ZG(39130),
-       SG = ZG(9249)
-   },
-   9356: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => SG,
-       f: () => LG
-     });
-     var wG = ZG(9303);
-     const SG = "Air",
-       LG = Object.freeze(new wG.h(SG, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   39130: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => wG,
-       e: () => SG
- ... (6 more removed lines; see GitHub link above)
+     const OM = {
+       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
+       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
+       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
+       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
+       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       faq: [{
+         question: "What is Build a Factory 2 on Bloxd?",
+         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+       }, {
+         question: "Is Build a Factory 2 an idle factory game?",
+         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+       }, {
+         question: "How do I unlock new machines in Build a Factory 2?",
+         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+       }, {
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/191.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/191.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f)

#### 1. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/191.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/191.js#L4-L8)

```diff
-   40993: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => UG,
-       f: () => kG,
-       j: () => yG
+   9640: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
```

#### 2. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L75-L1365` → after: `L9-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/191.js#L9-L32) · [Before (L75-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/191.js#L75-L1365)

```diff
-       fire: function(GG) {
-         if ("connection" === GG.type) {
-           const bG = GG.phase === wG.M.Activated && GG.conn !== UG && GG.conn > YG,
-             ZG = (GG.phase === wG.M.Left || GG.phase === wG.M.Closed) && GG.conn === UG;
-           return void(bG || ZG ? (UG = bG ? GG.conn : 0, hG(!0)) : GG.phase === wG.M.Resumed && 0 !== UG && GG.conn > YG && (UG = GG.conn, hG(!0, kG)))
-         }
-         const bG = LG.get(GG.vV);
-         if (bG && GG.conn === UG && 0 !== UG)
-           for (const wG of bG) try {
-             wG(GG)
-           } catch (ZG) {
-             (0, SG.n)(ZG, KG)
-           }
-       },
-       close: function(GG) {
-         YG = Math.max(YG, GG, UG), 0 !== UG && (UG = 0, hG(!1))
- ... (1275 more removed lines; see GitHub link above)
+       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
+       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
+       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
+       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
+       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       faq: [{
+         question: "What is Bloxd Greenville?",
+         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+       }, {
+         question: "How do I earn gold in Greenville?",
+         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+       }, {
+         question: "Can I build my own house in Greenville?",
+         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+       }, {
+         question: "How do I change my house in Bloxd Greenville?",
+ ... (8 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/192.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/192.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4)

#### 1. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L2)

```diff
- export const ids = [52, 192];
+ export const ids = [192];
```

#### 2. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L4-L150` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L4) · [Before (L4-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L4-L150)

```diff
-   39061: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => SG,
-       d: () => LG
-     });
-     const wG = new WeakMap;
- 
-     function SG(GG, bG) {
-       return wG.set(GG, bG), GG
-     }
- 
-     function LG(GG) {
-       var bG;
-       return null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : null
-     }
-   },
- ... (131 more removed lines; see GitHub link above)
+   9645: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L152-L153` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L6) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L152-L153)

```diff
-       SkyblockEntityFacing: () => kG,
-       needsSkyblockEntityFacing: () => yG
+       pageBody: () => OM
```

#### 4. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L1554-L2425` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L9-L16) · [Before (L1554-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L1554-L2425)

```diff
-       talk: "quest_talk",
-       search: "quest_search"
-     };
-     class LZ {
-       constructor(GG, bG, ZG, wG) {
-         this.map = GG, this.quests = bG, this.compass = ZG, this.display = new GZ, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.pK = !1, this.snapshot = null, this.texts = new Map, this.translate = wG
-       }
-       setTranslator(GG, bG) {
-         this.translate = GG, this.locale = bG, this.metresFormat = new Intl.NumberFormat(bG), this.texts.clear()
-       }
-       translateCached(GG, bG) {
-         const ZG = void 0 === bG ? GG : `${GG} ${bG}`;
-         let wG = this.texts.get(ZG);
-         return void 0 === wG && (this.texts.size >= 500 && this.texts.clear(), wG = this.translate(GG, void 0 === bG ? void 0 : {
-           distance: bG
-         }), this.texts.set(ZG, wG)), wG
- ... (856 more removed lines; see GitHub link above)
+       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
+       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
+       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
+       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
+       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       faq: [{
+         question: "What is Bloxd Fishing?",
+         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
```

#### 5. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2427-L8282` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L18-L19) · [Before (L2427-L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L2427-L8282)

```diff
-         id: "beetroot",
-         category: "farming",
-         item: "Beetroot",
-         blocks: {
-           "Beetroot Plant|FreshlyGrown": 1
-         },
-         tiers: XZ
-       }, {
-         id: "melon",
-         category: "farming",
-         item: "Melon",
-         blocks: {
-           Melon: 1
-         },
-         tiers: oZ
-       }, {
- ... (5840 more removed lines; see GitHub link above)
+         question: "How many fish are in Bloxd Fishing?",
+         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
```

#### 6. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L8284-L8405` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L21-L22) · [Before (L8284-L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L8284-L8405)

```diff
-         "--left": "62%",
-         "--tilt": "-10deg",
-         "--duration": "14s",
-         "--delay": "-9s"
-       }],
-       vy = Array.from({
-         length: 6
-       }, ((GG, bG) => ({
-         "--x": `${(88*(.618034*bG%1)).toFixed(1)}%`,
-         "--y": `${(10+37*bG%70).toFixed(1)}%`,
-         "--size": 7 + bG % 3 * 3 + "rem",
-         "--drift-x": 3 * (bG % 3 - 1) + "rem",
-         "--drift-y": 2 * (bG % 2 === 0 ? -1 : 1) + "rem",
-         "--duration": 14 + bG % 4 * 3 + "s",
-         "--delay": 2.5 * -bG + "s"
-       }))),
- ... (106 more removed lines; see GitHub link above)
+         question: "How do I catch Mythic fish in Bloxd Fishing?",
+         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
```

#### 7. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L8407-L8409` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L24-L25) · [Before (L8407-L8409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L8407-L8409)

```diff
-         className: "Chart",
-         titleKey: "skyblockGame:reachLogRibbonChartTitle",
-         legendKey: "skyblockGame:reachLogLegendChart"
+         question: "Where can I get better rods?",
+         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
```

#### 8. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L8411-L10169` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L27-L28) · [Before (L8411-L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L8411-L10169)

```diff
-         className: "LetGo",
-         titleKey: "skyblockGame:reachLogRibbonLetGoTitle",
-         legendKey: "skyblockGame:reachLogLegendLetGo"
-       }],
-       sy = Ay.slice(0, 2);
- 
-     function qy(GG) {
-       return GG ? Ay : sy
-     }
- 
-     function ny(GG) {
-       let {
-         fish: bG,
-         letGoShown: ZG
-       } = GG;
-       const {
- ... (1743 more removed lines; see GitHub link above)
+         question: "How do I travel between islands?",
+         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
```

#### 9. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L10171-L10172` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/192.js#L30-L31) · [Before (L10171-L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/192.js#L10171-L10172)

```diff
-         timeFraction: 1,
-         minColor: [0, 0, 0, 1]
+         question: "What are the catch minigames?",
+         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/193.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/193.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2)

#### 1. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L1590` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/193.js#L4-L6) · [Before (L4-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/193.js#L4-L1590)

```diff
-   39547: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => wG
-     });
-     class wG {
-       constructor(GG, bG) {
-         this.read = GG, this.apply = bG, this.release = null
-       }
-       turn(GG, bG) {
-         const ZG = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: bG,
-           forcedCameraDirection: [GG[0], GG[1], GG[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
- ... (1571 more removed lines; see GitHub link above)
+   9652: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
```

#### 2. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L1593-L1711` → after: `L9-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L9-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/193.js#L9-L44) · [Before (L1593-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/193.js#L1593-L1711)

```diff
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
-         },
-         interstellar: {
-           type: "custom",
-           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
- ... (103 more removed lines; see GitHub link above)
+       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
+       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
+       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
+       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
+       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
+       faq: [{
+         question: "What is Cube Warfare?",
+         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
+       }, {
+         question: "What modes are in Cube Warfare?",
+         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
+       }, {
+         question: "How does team deathmatch work in Cube Warfare?",
+         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
+       }, {
+         question: "What is Gun Game in Bloxd Cube Warfare?",
+ ... (20 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/194.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/194.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27)

#### 1. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/194.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/194.js#L4)

```diff
-   34329: (GG, bG, ZG) => {
+   9654: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/194.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/194.js#L6-L7)

```diff
-       getLatestPublishedUpdateLog: () => kG,
-       updateLogsData: () => yG
+       pageBody: () => OM
```

#### 3. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L9-L2779` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/194.js#L8-L35) · [Before (L9-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/194.js#L9-L2779)

```diff
-     var wG = ZG(800),
-       SG = ZG(333);
-     const LG = "\xa0\xa0\xa0\xa0",
-       yG = [{
-         author: ["Oliver", "Harry"],
-         date: new Date("2026-11-17T16:00:00Z"),
-         title: "\u2728Characters are back in the Store!\u2728",
-         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
-         image: "CosmeticPacks.jpg",
-         onClickImage: {
-           type: "openMenu",
-           menu: SG.u.COSMETIC_SHOP
-         },
-         callToAction: {
-           color: "rainbow",
-           label: "Go to Store!",
- ... (2755 more removed lines; see GitHub link above)
+     const OM = {
+       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
+       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
+       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
+       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
+       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
+       faq: [{
+         question: "What is Bloxd Frontline?",
+         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
+       }, {
+         question: "How does a team win in Bloxd Frontline?",
+         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
+       }, {
+         question: "What do kits do in Bloxd Frontline?",
+         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
+       }, {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/195.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/195.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985)

#### 1. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L11892` → after: `L4-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L4-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/195.js#L4-L33) · [Before (L4-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/195.js#L4-L11892)

```diff
-   34333: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(GG, bG, ZG) {
-               GG.exports = ZG(7588)
-             },
-             5036: function(GG, bG, ZG) {
-               ZG(1719), ZG(5677), ZG(6394), ZG(5334), ZG(6969), ZG(2021), ZG(8328), ZG(2129);
-               var wG = ZG(1287);
-               GG.exports = wG.Promise
-             },
-             2582: function(GG, bG, ZG) {
-               ZG(1646), ZG(6394), ZG(2004), ZG(462), ZG(8407), ZG(2429), ZG(1172), ZG(8288), ZG(1274), ZG(8201), ZG(6626), ZG(3211), ZG(9952), ZG(15), ZG(9831), ZG(7521), ZG(2972), ZG(6956), ZG(5222), ZG(2257);
-               var wG = ZG(1287);
- ... (11873 more removed lines; see GitHub link above)
+   9656: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
+     });
+     const OM = {
+       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
+       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
+       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
+       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
+       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
+       faq: [{
+         question: "What is Bloxd Pirates?",
+         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
+       }, {
+         question: "How do you win in Bloxd Pirates?",
+         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/196.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/196.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38)

#### 1. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/196.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/196.js#L4)

```diff
-   34362: (GG, bG, ZG) => {
+   9665: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/196.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/196.js#L6-L8)

```diff
-       ALL_DEV_TOOLS: () => yG,
-       coreDevTools: () => YG,
-       devTools: () => UG
+       pageBody: () => OM
```

#### 3. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L10-L18` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/196.js#L8-L35) · [Before (L10-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/196.js#L10-L18)

```diff
-     var wG = ZG(631),
-       SG = ZG(1260),
-       LG = ZG(34368);
-     const yG = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function kG() {
-       const {
-         noaDevTools: GG
-       } = await ZG.e(242).then((() => ZG(41454)));
-       return GG
+     const OM = {
+       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
+       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
+       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
+       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
+       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
+       faq: [{
+         question: "What is Bloxd Infection?",
+         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
+       }, {
+         question: "How does the infection spread in Bloxd Infection?",
+         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
+       }, {
+         question: "How do humans win?",
+         answer: "Get through all the obstacles and escape before you're infected."
+       }, {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/197.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/197.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b)

#### 1. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/197.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/197.js#L4)

```diff
-   36715: (GG, bG, ZG) => {
+   9668: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/197.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/197.js#L6)

```diff
-       showOnboardingPopup: () => jG
+       pageBody: () => OM
```

#### 3. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L497-L566` → after: `L9-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L9-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/197.js#L9-L38) · [Before (L497-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/197.js#L497-L566)

```diff
-       offline: "homePage:onboardingNameNoAccount",
-       outdated: "general:updatedReloading",
-       busy: "homePage:changeNameTooFast",
-       server: "homePage:changeNameFailed"
-     };
- 
-     function YG(GG) {
-       return UG[GG]
-     }
- 
-     function VG(GG) {
-       return (0, kG.d)(GG) ? "outdated" : GG instanceof wG.b ? 429 === GG.httpCode ? "busy" : "server" : "offline"
-     }
- 
-     function pG(GG, bG, ZG) {
-       return (0, yG.postJsonWithMetricsCookiesAndJsonResponse)(`${LG.clientSideServerUrls.indexUrl}${bG}`, ZG, {
- ... (54 more removed lines; see GitHub link above)
+       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
+       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
+       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
+       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
+       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
+       faq: [{
+         question: "What is Bloxd Murder Mystery?",
+         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
+       }, {
+         question: "What are the roles in Murder Mystery?",
+         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
+       }, {
+         question: "Who wins a round of Murder Mystery?",
+         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
+       }, {
+         question: "How do I get a gun?",
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/198.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/198.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31)

#### 1. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L4-L14` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/198.js#L4-L6) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/198.js#L4-L14)

```diff
-   34414: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => RG,
-       e: () => Eb,
-       g: () => zb,
-       h: () => Xb,
-       l: () => yb,
-       p: () => Ub,
-       q: () => Vb,
-       u: () => ob,
-       v: () => Yb
+   9677: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
```

#### 2. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L16-L518` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/198.js#L8-L35) · [Before (L16-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/198.js#L16-L518)

```diff
-     var wG = ZG(273),
-       SG = ZG(17),
-       LG = ZG(80),
-       yG = ZG(1579),
-       kG = ZG(4437),
-       UG = ZG(2889),
-       YG = ZG(2894),
-       VG = ZG(29);
-     const {
-       windows: pG,
-       target: fG,
-       stepDown: QG,
-       stepUp: KG,
-       noGain: hG
-     } = YG.c, dG = 1e3 / 60 * 1.08, JG = 1e3 / 55, rG = 1e3 / 45, zG = 1e3 / 30 * .92, EG = 1e3 / 30 * 1.08;
-     class oG {
- ... (487 more removed lines; see GitHub link above)
+     const OM = {
+       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
+       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
+       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
+       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
+       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
+       faq: [{
+         question: "What is Bloxd Escape the Forest?",
+         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
+       }, {
+         question: "In Escape the Forest, how do you survive 99 nights?",
+         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
+       }, {
+         question: "How many players can team up in Escape the Forest?",
+         answer: "Up to 6 in each game, and others can join to spectate."
+       }, {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/199.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/199.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93)

#### 1. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/199.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/199.js#L4-L9)

```diff
-   37317: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => SG,
-       h: () => LG,
-       i: () => kG,
-       m: () => yG
+   9680: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
```

#### 2. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L787-L789` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/199.js#L9-L16) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/199.js#L787-L789)

```diff
-       "Wood Enchanting Table": [{
-         min: 1,
-         max: 2
+       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
+       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
+       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
+       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
+       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       faq: [{
+         question: "What is Bloxd Containment Breach?",
+         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
```

#### 3. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L791-L792` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/199.js#L18-L19) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/199.js#L791-L792)

```diff
-         min: 3,
-         max: 4
+         question: "How many players can play Containment Breach?",
+         answer: "Up to 6 on Normal, or up to 4 on Hard."
```

#### 4. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L794-L799` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/199.js#L21-L22) · [Before (L794-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/199.js#L794-L799)

```diff
-         min: 5,
-         max: 6
-       }],
-       "Stone Enchanting Table": [{
-         min: 2,
-         max: 4
+         question: "Can I play Containment Breach solo?",
+         answer: "Not on your own, sorry. A run needs at least 2 players, so bring a friend or team up with someone in the lobby."
```

#### 5. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L801-L802` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/199.js#L24-L25) · [Before (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/199.js#L801-L802)

```diff
-         min: 5,
-         max: 10
+         question: "What happens when you go down in Containment Breach?",
+         answer: "You become a ghost until a teammate revives you with a splash healing potion. If everyone ends up as a ghost, the run is lost."
```

#### 6. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L804-L809` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/199.js#L27-L28) · [Before (L804-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/199.js#L804-L809)

```diff
-         min: 11,
-         max: 15
-       }],
-       "Iron Enchanting Table": [{
-         min: 5,
-         max: 10
+         question: "How do I upgrade guns in Containment Breach?",
+         answer: "Go to the Loadout NPC and spend gold and boss parts there. Gold comes from kills, and your squad gets a boss part every time it contains an anomaly."
```

#### 7. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L811-L835` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/199.js#L30-L31) · [Before (L811-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/199.js#L811-L835)

```diff
-         min: 11,
-         max: 20
-       }, {
-         min: 21,
-         max: 30
-       }],
-       "Gold Enchanting Table": [{
-         min: 20,
-         max: 30
-       }, {
-         min: 31,
-         max: 40
-       }, {
-         min: 41,
-         max: 50
-       }],
- ... (9 more removed lines; see GitHub link above)
+         question: "Can I choose which anomaly I fight?",
+         answer: "Yes. Buy a Locator from the Locator NPC and arm it before you deploy. It shatters after one use."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/200.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/200.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f)

#### 1. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/200.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/200.js#L4-L7)

```diff
-   39522: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => kG,
-       d: () => LG
+   9682: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       pageBody: () => OM
```

#### 2. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L9-L13` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/200.js#L8-L32) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/200.js#L9-L13)

```diff
-     var wG = ZG(4105);
-     let SG = null;
- 
-     function LG(GG) {
-       return null !== SG && GG === SG
+     const OM = {
+       whatIs: ["You might not be the only one checking in. Bloxd Horror Hotel sends you down an infinite hallway of hotel rooms, collecting items so you can level up and decorate a room of your own. Anyone can play for free, straight from a browser tab. Just be careful what's wai … [truncated]
+       howToPlay: ["Your stay starts in a tiny room, so first things first: go and complain to the manager. The first upgrade is free. After that, upgrades cost items, beginning with a red bed you'll have to \"borrow\" from someone else's room. Head down the corridor to find what  … [truncated]
+       features: ["An Infinite Hallway of Hotel Rooms to Explore", "Forest, Mining, Maze and Buried Treasure Rooms", "Quirky Guests Who Need Your Help", "Upgrade Your Room All the Way to Level 22", "Pick from a Range of Room Colours", "Invite Friends and Control PvP, Visitors and  … [truncated]
+       tips: ["Talk to the manager first and grab your free room upgrade", "Check what your next upgrade costs, then go looking for those items in other rooms", "Help guests with their requests, like the thirsty guest in the desert room", "Use the home button on the left to fast t … [truncated]
+       similarGames: ["ninetyNineNights", "containmentBreach", "backrooms", "murderMystery"],
+       faq: [{
+         question: "What is Bloxd Horror Hotel?",
+         answer: "A spooky exploration game. You wander an endless hotel, collect items from other rooms and use them to upgrade and decorate your own."
+       }, {
+         question: "Does Horror Hotel really have infinite rooms?",
+         answer: "It does. The hallway just keeps going, with bedrooms, forests, mines, mazes and buried treasure rooms to find. There's even a secret room hidden somewhere."
+       }, {
+         question: "How do I upgrade my room in Horror Hotel?",
+         answer: "Talk to the manager. The first upgrade's free, then each level costs items you find around the hotel, starting with a red bed."
+       }, {
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/201.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/201.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9)

#### 1. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L4-L51` → after: `L4-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L4-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L4-L304) · [Before (L4-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L4-L51)

```diff
-   34492: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       MAX_BLOCK_ID: () => wG,
-       armourReductionOf: () => nG,
-       clipSizeOf: () => qG,
-       creativeAltNames: () => yb,
-       creativeCategoryOf: () => xG,
-       creativeItemCategories: () => kG,
-       creativeItemCategoryIcons: () => UG,
-       creativeItemIds: () => OG,
-       descriptionOf: () => MG,
-       displayNameOf: () => PG,
-       dropsNothing: () => RG,
-       enchantmentPerksOf: () => DG,
-       gunTypeOf: () => eG,
-       harvestsNullLevelOf: () => TG,
- ... (32 more removed lines; see GitHub link above)
+   9794: (MM, rM) => {
+     rM.discordURLBuilder = function(MM) {
+       var rM;
+       const iM = (null === (rM = null === window || void 0 === window ? void 0 : window.location) || void 0 === rM ? void 0 : rM.hostname) || "localhost",
+         OM = MM.hostname.split("."),
+         SM = !MM.hostname.includes("trycloudflare.com") && !MM.hostname.includes("discordsays.com") && OM.length > 2 ? `/${OM[0]}` : "";
+       return MM.pathname.startsWith("/.proxy") ? `${MM.protocol}//${iM}${SM}${MM.pathname}${MM.search}` : `${MM.protocol}//${iM}/.proxy/colyseus${SM}${MM.pathname}${MM.search}`
+     }
+   },
+   9782: (MM, rM, iM) => {
+     var OM, SM, jM, aM, PM = iM(9696),
+       nM = iM(9788),
+       QM = iM(9751);
+     OM = new WeakMap, SM = new WeakMap, jM = new WeakMap, aM = new WeakMap, rM.Auth = class {
+       constructor(MM) {
+         this.http = MM, this.settings = {
+ ... (285 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L54-L55` → after: `L307-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L307-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L307-L468) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L54-L55)

```diff
-       let bG = null;
-       return ZG => {
+       var rM = Object.create(null);
+       return MM && Object.keys(MM).forEach((function(iM) {
+         if ("default" !== iM) {
+           var OM = Object.getOwnPropertyDescriptor(MM, iM);
+           Object.defineProperty(rM, iM, OM.get ? OM : {
+             enumerable: !0,
+             get: function() {
+               return MM[iM]
+             }
+           })
+         }
+       })), rM.default = MM, Object.freeze(rM)
+     }
+     var jM = SM(iM(9779));
+     rM.HTTP = class {
+       constructor(MM) {
+ ... (146 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L57` → after: `L470-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L470-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L470-L484) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L57)

```diff
-         return bG ??= (0, VG.t)(GG, 10091), null !== (wG = bG[ZG]) && void 0 !== wG ? wG : 0
+         const OM = this.getMessageHandlerKey(MM);
+         this.onMessageHandlers.events[OM] ? this.onMessageHandlers.emit(OM, rM) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", MM, rM) : null === (iM = console.warn) || void 0 === iM || iM.call(console, `colyseus.js: onMessage() not registered for type '$ … [truncated]
+       }
+       destroy() {
+         this.QE && this.QE.teardown()
+       }
+       getMessageHandlerKey(MM) {
+         switch (typeof MM) {
+           case "string":
+             return MM;
+           case "number":
+             return `i${MM}`;
+           default:
+             throw new Error("invalid message type.")
+         }
```

#### 4. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L61-L67` → after: `L493-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L493-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L493-L585) · [Before (L61-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L61-L67)

```diff
-     function QG(GG, bG, ZG) {
-       const wG = fG(GG);
-       let SG = null,
-         LG = [];
-       return GG => {
-         const yG = wG(GG);
-         if (0 !== yG) return null === SG && (SG = bG.split(VG.o), LG = new Array(SG.length)), LG[yG - 1] ??= ZG(SG[yG - 1])
+     function jM() {
+       if (!SM) try {
+         SM = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
+       } catch (MM) {}
+       return SM || "undefined" === typeof globalThis.indexedDB || (SM = new aM), SM || (SM = {
+         cache: {},
+         setItem: function(MM, rM) {
+           this.cache[MM] = rM
+         },
+         getItem: function(MM) {
+           this.cache[MM]
+         },
+         removeItem: function(MM) {
+           delete this.cache[MM]
+         }
+       }), SM
+ ... (77 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L71` → after: `L591-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L591-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L591-L688) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L71)

```diff
-     function KG(GG) {
+       function rM(rM) {
+         return MM.register(rM, null === this)
+       }
+       return rM.once = rM => {
+         const iM = function() {
+           for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
+           rM.apply(this, SM), MM.remove(iM)
+         };
+         MM.register(iM)
+       }, rM.remove = rM => MM.remove(rM), rM.invoke = function() {
+         return MM.invoke(...arguments)
+       }, rM.invokeAsync = function() {
+         return MM.invokeAsync(...arguments)
+       }, rM.clear = () => MM.clear(), rM
+     }
+   },
+ ... (82 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L74-L76` → after: `L693-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L693-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L693-L855) · [Before (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L74-L76)

```diff
- 
-     function hG(GG) {
-       return GG === VG.g ? null : (0, VG.x)(GG)
+   },
+   9720: (MM, rM, iM) => {
+     var OM = iM(9696),
+       SM = iM(9726);
+     rM.H3TransportTransport = class {
+       constructor(MM) {
+         this.events = MM, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
+       }
+       connect(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const iM = rM.fingerprint && {
+           serverCertificateHashes: [{
+             algorithm: "sha-256",
+             value: new Uint8Array(rM.fingerprint).buffer
+           }]
+         } || void 0;
+ ... (147 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L85-L87` → after: `L859-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L859-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L859-L1004) · [Before (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L85-L87)

```diff
-       EG !== (0, YG.j)() && (EG = (0, YG.j)(), rG.clear(), zG.clear());
-       let wG = GG.get(bG);
-       return void 0 === wG && (wG = ZG(), void 0 !== wG && GG.set(bG, wG)), wG
+       return new Promise((function(SM, jM) {
+         iM = iM || {};
+         var aM, PM, nM, QM = new XMLHttpRequest,
+           zM = iM.body,
+           LM = iM.headers || {};
+         for (aM in iM.timeout && (QM.timeout = iM.timeout), QM.ontimeout = QM.onerror = function(MM) {
+             MM.timeout = "timeout" == MM.type, jM(MM)
+           }, QM.onabort = function(MM) {
+             MM.aborted = !0, jM(MM)
+           }, QM.open(MM, rM.href || rM), QM.onload = function() {
+             for (nM = QM.getAllResponseHeaders().trim().split(/[\r\n]+/), OM(QM, QM); PM = nM.shift();) PM = PM.split(": "), QM.headers[PM.shift().toLowerCase()] = PM.join(": ");
+             if ((PM = QM.headers["content-type"]) && ~PM.indexOf("application/json")) try {
+               QM.data = JSON.parse(QM.data, iM.reviver)
+             } catch (MM) {
+               return OM(QM, MM), jM(MM)
+             }(QM.status >= 400 ? jM : SM)(QM)
+ ... (130 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L104-L108` → after: `L1008-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1008-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1008-L1030) · [Before (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L104-L108)

```diff
-       const bG = dG(GG);
-       return null !== bG ? bG : oG(rG, GG, (() => {
-         const bG = (0, YG.f)(GG);
-         return void 0 === bG ? void 0 : (0, VG.E)(bG)
-       }))
+       try {
+         if (!JM.trusted && !wM) {
+           let MM = nM.sharedLength || 0;
+           MM < nM.length && (nM.length = MM)
+         }
+         let rM;
+         if (JM.randomAccessStructure && SM[aM] < 64 && SM[aM] >= 32 && CM ? (rM = CM(SM, aM, jM, JM), SM = null, MM && MM.lazy || !rM || (rM = rM.toJSON()), aM = jM) : rM = pM(), zM && (aM = zM.postBundlePosition, zM = null), wM && (nM.restoreStructures = null), aM == jM) nM && n … [truncated]
+         else {
+           if (aM > jM) throw new Error("Unexpected end of MessagePack data");
+           if (!wM) {
+             let MM;
+             try {
+               MM = JSON.stringify(rM, ((MM, rM) => "bigint" === typeof rM ? `${rM}n` : rM)).slice(0, 100)
+             } catch (Oi) {
+               MM = "(JSON view not available " + Oi + ")"
+             }
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L111-L116` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1033-L1035) · [Before (L111-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L111-L116)

```diff
-     function MG(GG) {
-       const bG = JG(GG);
-       return null !== bG ? bG : oG(zG, GG, (() => {
-         var bG;
-         return null !== (bG = (0, VG.A)(PG(GG))) && void 0 !== bG ? bG : void 0
-       }))
+     function RM() {
+       for (let MM in nM.restoreStructures) nM[MM] = nM.restoreStructures[MM];
+       nM.restoreStructures = null
```
