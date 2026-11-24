# Changed — Bundle Modifications Report (Part 011 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `11 / 65` (**319** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/190.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/190.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f)

#### 5. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L46` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L15-L16) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L46)

```diff
-       d: () => rD
+       d: () => op,
+       h: () => Ip
```

#### 6. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L48-L113` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L18-L20) · [Before (L48-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L48-L113)

```diff
-     const pD = 4,
-       sD = 12e3,
-       KD = 1e3;
-     class rD {
-       constructor() {
-         let {
-           limit: DD = pD,
-           windowMs: zD = sD,
-           spacingMs: wD = KD,
-           now: rD = Date.now
-         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = DD, this.windowMs = zD, this.spacingMs = wD, this.now = rD
-       }
-       isPacing() {
-         return !this.canSendPriority() || this.isPriorityWaiting()
-       }
- ... (50 more removed lines; see GitHub link above)
+     var Op = cp(9385);
+     const op = "Air",
+       Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 7. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L115` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L22) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L115)

```diff
-   38518: (DD, zD, wD) => {
+   38954: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L117-L198` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L24-L25) · [Before (L117-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L117-L198)

```diff
-       c: () => pD
-     });
-     class pD {
-       constructor(DD, zD, wD) {
-         this.KG = DD, this.beforeOpen = zD, this.afterClose = wD, this.open = !1, this.MI = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
-           this.isEnabled() && !this.MI && (this.open = !0, this.beforeOpen(this), this.emit())
-         }, this.close = () => {
-           this.closePanel(!1)
-         }, this.dismiss = () => {
-           this.closePanel(!0)
-         }
-       }
-       isOpen() {
-         return this.open
-       }
-       showOrRefresh() {
- ... (66 more removed lines; see GitHub link above)
+       e: () => Op,
+       f: () => op
```

#### 9. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L200-L5029` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L27) · [Before (L200-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L200-L5029)

```diff
-     const pD = "island";
-     var sD = wD(351);
-     const KD = (0, sD.Gb)([0, 0, -1]),
-       rD = [{
-         name: "S",
-         bearing: (0, sD.Gb)([0, 0, 1])
-       }, {
-         name: "E",
-         bearing: (0, sD.Gb)([-1, 0, 0])
-       }, {
-         name: "N",
-         bearing: KD
-       }, {
-         name: "W",
-         bearing: (0, sD.Gb)([1, 0, 0])
-       }];
- ... (4814 more removed lines; see GitHub link above)
+     const Op = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((pp => [pp, `${pp}_block`])));
```

#### 10. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L5036-L5205` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L31) · [Before (L5036-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L5036-L5205)

```diff
-       if (DD.shiftKey && wD <= 0) DD.preventDefault(), null === (pD = zD.at(-1)) || void 0 === pD || pD.focus();
-       else if (!DD.shiftKey && (-1 === wD || wD === zD.length - 1)) {
-         var sD;
-         DD.preventDefault(), null === (sD = zD[0]) || void 0 === sD || sD.focus()
-       }
-     }
- 
-     function as() {
-       const DD = (0, VD.useRef)(null);
-       return (0, VD.useCallback)((zD => {
-         var wD;
-         zD ? (DD.current = document.activeElement, zD.focus()) : null === (wD = DD.current) || void 0 === wD || wD.focus()
-       }), [])
-     }
- 
-     function us(DD) {
- ... (154 more removed lines; see GitHub link above)
+       return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/191.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/191.js` (120 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f)

#### 1. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L4)

```diff
-   39102: (DD, zD, wD) => {
+   40818: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L6)

```diff
-       e: () => pD
+       b: () => Lp,
+       f: () => xp,
+       i: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L8-L32` → after: `L10-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L10-L23) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L8-L32)

```diff
-     class pD {
-       constructor(DD, zD) {
-         this.read = DD, this.apply = zD, this.release = null
-       }
-       turn(DD, zD) {
-         const wD = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: zD,
-           forcedCameraDirection: [DD[0], DD[1], DD[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
-           }), zD + 100),
-           transitionMs: wD
-         }
-       }
- ... (9 more removed lines; see GitHub link above)
+     var Op = cp(40824),
+       op = cp(4903),
+       Ip = cp(40831);
+ 
+     function Sp(pp) {
+       return pp.payloadKind === op.kc.Msgpack ? (0, Op.c)(pp.payload) : void 0
+     }
+ 
+     function xp(pp, ip) {
+       if (ip.payloadKind === op.kc.Bytes || ip.payloadKind === op.kc.MsgpackBin) return (0, Ip.b)(pp, ip.payload)
+     }
+ 
+     function Lp(pp) {
+       return null !== pp && "object" === typeof pp
```

#### 4. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L35` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L26) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L35)

```diff
-   38638: (DD, zD, wD) => {
+   40837: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L38` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L30-L32) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L38)

```diff
-       f: () => sD
+       e: () => Wp,
+       h: () => Dp,
+       i: () => wp
```

#### 6. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L40` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L34-L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L40)

```diff
-     const pD = new Map;
+     var Op = cp(4903),
+       op = cp(40842);
+     const Ip = new Map,
+       Sp = new Set,
+       xp = new Set;
+     let Lp = 0,
+       Yp = 0;
```

#### 7. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L43` → after: `L43-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L43-L50) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L43)

```diff
-       pD.set(DD, zD)
+       let cp = Ip.get(pp);
+       return cp || (cp = new Set, Ip.set(pp, cp)), cp.add(ip), () => {
+         cp.delete(ip)
+       }
+     }
+ 
+     function Ap() {
+       return 0 !== Lp
```

#### 8. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L47` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L54-L56) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L47)

```diff
-       return DD ? pD.get(DD) : void 0
+       return Sp.add(pp), () => {
+         Sp.delete(pp)
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L56-L68` → after: `L59-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L59-L61) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L56-L68)

```diff
-     function sD(DD, zD, wD) {
-       var sD, KD, rD, LD, cD, gD, RD;
-       const AD = (0, pD.c)(DD, zD, wD[0], wD[1], wD[2]),
-         UD = AD ? null !== (sD = AD.textCell) && void 0 !== sD ? sD : AD.rect.anchor : wD,
-         fD = zD(UD[0], UD[1], UD[2]);
-       return {
-         pos: [wD[0], wD[1], wD[2]],
-         noticeboardSpan: AD && {
-           width: AD.rect.width,
-           height: AD.rect.height
-         },
-         text: null !== (KD = null === fD || void 0 === fD || null === (rD = fD.persisted) || void 0 === rD || null === (LD = rD.shared) || void 0 === LD ? void 0 : LD.text) && void 0 !== KD ? KD : "",
-         textSize: null !== (cD = null === fD || void 0 === fD || null === (gD = fD.persisted) || void 0 === gD || null === (RD = gD.shared) || void 0 === RD ? void 0 : RD.textSize) && void 0 !== cD ? cD : null
+     function Wp(pp) {
+       return xp.add(pp), () => {
+         xp.delete(pp)
```

#### 10. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L71-L72` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L64-L65) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L71-L72)

```diff
-   },
-   38486: (DD, zD, wD) => {
+     const yp = "A raw message listener threw";
+ 
```

#### 11. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L74-L80` → after: `L67-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L67-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L67-L90) · [Before (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L74-L80)

```diff
-       switch (DD.kind) {
-         case void 0:
-         case "flatEmissive":
-           return !1;
-         case "chevronPath":
-         case "furnaceFire":
-           return !0
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp;
+       for (const Op of ip) try {
+         Op()
+       } catch (cp) {
+         pp ? (0, op.i)(cp, yp) : console.error(yp, cp)
+       }
+     }
+     const wp = {
+       fire: function(pp) {
+         if ("connection" === pp.type) {
+           const ip = pp.phase === Op.H.Activated && pp.conn !== Lp && pp.conn > Yp,
+             cp = (pp.phase === Op.H.Left || pp.phase === Op.H.Closed) && pp.conn === Lp;
+           return void(ip || cp ? (Lp = ip ? pp.conn : 0, Up(!0)) : pp.phase === Op.H.Resumed && 0 !== Lp && pp.conn > Yp && (Lp = pp.conn, Up(!0, xp)))
+         }
+         const ip = Ip.get(pp.VD);
+         if (ip && pp.conn === Lp && 0 !== Lp)
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L84-L86` → after: `L96-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L96-L98) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L84-L86)

```diff
-       c: () => sD,
-       e: () => KD,
-       h: () => pD
+       d: () => Yp,
+       h: () => Lp,
+       k: () => xp
```

#### 13. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L88-L89` → after: `L100-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L100-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L100-L127) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L88-L89)

```diff
-     const sD = 4,
-       KD = 3
+     var Op = cp(1284),
+       op = cp(40769);
+     const Ip = new TextDecoder,
+       Sp = new TextEncoder;
+ 
+     function xp(pp, ip) {
+       const cp = pp.queries.entityName(ip);
+       if (cp === op.Dc) return;
+       const Sp = pp.memoryData(pp.scratch(), 4 + cp, 4, "entity_name's answer");
+       if (!Sp) return;
+       const xp = Sp.getUint32(0, !0),
+         Lp = Ip.decode(new Uint8Array(Sp.buffer, Sp.byteOffset + 4, cp));
+       return (0, Op.d)(Lp, !1, xp === op.Hd ? null : xp)
+     }
+ 
+     function Lp(pp, ip, cp) {
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L91` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L129) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L91)

```diff
-   39117: (DD, zD, wD) => {
+   40824: (pp, ip, cp) => {
```

#### 15. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L94` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L132) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L94)

```diff
-       g: () => KD
+       f: () => Dp
```

#### 16. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L96-L97` → after: `L134-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L134-L141) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L96-L97)

```diff
-     var pD = wD(351);
-     const sD = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
+     const Op = new TextDecoder;
+ 
+     function op(pp) {
+       const ip = new Ip(pp),
+         cp = ip.value();
+       if (ip.at !== pp.length) throw new Error(`msgpack: ${pp.length-ip.at} bytes after the value`);
+       return cp
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L100-L119` → after: `L144-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L144-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L144-L295) · [Before (L100-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L100-L119)

```diff
-         this.importGame = DD, this.loads = new Map, this.loaded = new Map
-       }
-       load(DD) {
-         const zD = (0, pD.Tb)(DD);
-         if (!sD.has(zD)) return Promise.resolve(void 0);
-         let wD = this.loads.get(zD);
-         return wD || (wD = this.importGame(zD).then((DD => {
-           const wD = DD.default;
-           if ("function" !== typeof wD) throw new Error(`${zD}'s client code has no default-exported factory`);
-           return this.loaded.set(zD, wD), wD
-         })).catch((DD => {
-           throw this.loads.delete(zD), DD
-         })), this.loads.set(zD, wD)), wD
-       }
-       loadedFactory(DD) {
-         const zD = (0, pD.Tb)(DD);
- ... (4 more removed lines; see GitHub link above)
+         this.bytes = pp, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(pp.buffer, pp.byteOffset, pp.byteLength)
+       }
+       value() {
+         const pp = this.u8();
+         if (pp <= 127) return pp;
+         if (pp >= 224) return pp - 256;
+         if (pp >= 128 && pp <= 143) return this.map(15 & pp);
+         if (pp >= 144 && pp <= 159) return this.array(15 & pp);
+         if (pp >= 160 && pp <= 191) return this.str(31 & pp);
+         switch (pp) {
+           case 192:
+             return null;
+           case 194:
+             return !1;
+           case 195:
+             return !0;
+ ... (136 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L122-L129` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L298-L301) · [Before (L122-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L122-L129)

```diff
-   },
-   39567: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD
-     });
-     var pD = wD(9286),
-       sD = wD(34218),
-       KD = wD(3288);
+     const Sp = new TextEncoder,
+       xp = -(2n ** 63n),
+       Lp = 2n ** 63n - 1n,
+       Yp = 2n ** 64n - 1n;
```

#### 19. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L132-L137` → after: `L304-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L304-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L304-L377) · [Before (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L132-L137)

```diff
-       if (DD === pD.c) return 0;
-       const zD = (0, KD.e)(DD);
-       if (void 0 !== zD && zD <= sD.MAX_BLOCK_ID) return zD;
-       const wD = (0, KD.e)(DD.split("|")[0]);
-       if (void 0 !== wD && wD <= sD.MAX_BLOCK_ID && (0, sD.rootMetaDescOf)(wD) === DD) return wD;
-       throw new Error(`Invalid block name. You sent ${DD}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+       const ip = new Ap;
+       return ip.value(pp, 0), ip.bytes()
+     }
+     class Ap {
+       constructor() {
+         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
+       }
+       bytes() {
+         return this.buf.subarray(0, this.at)
+       }
+       value(pp, ip) {
+         if (ip > 512) throw new Error("msgpack: nested too deep");
+         switch (typeof pp) {
+           case "undefined":
+             return this.u8(212), this.u8(0), void this.u8(0);
+           case "boolean":
+ ... (58 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L140` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L380) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L140)

```diff
-   39177: (DD, zD, wD) => {
+   40831: (pp, ip, cp) => {
```

#### 21. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L142` → after: `L382-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L382-L386) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L142)

```diff
-       c: () => sD
+       b: () => Sp
+     });
+     var Op = cp(40813);
+     const op = new TextDecoder("utf-8", {
+       ignoreBOM: !0
```

#### 22. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L147` → after: `L390-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L390-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L390-L426) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L147)

```diff
-         this.screen = DD, this.hidesHud = !1
+         this.buf = pp, this.at = 0, this.view = null
+       }
+       bool() {
+         return 0 !== this.u8()
+       }
+       long() {
+         let pp = this.u8(),
+           ip = 127 & pp,
+           cp = 128;
+         for (; 128 & pp;) {
+           if (cp > 2 ** 63) throw new RangeError("avro: varint too long");
+           pp = this.u8(), ip += (127 & pp) * cp, cp *= 128
+         }
+         return ip % 2 === 1 ? -(ip + 1) / 2 : ip / 2
+       }
+       float() {
+ ... (21 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L149-L150` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L428-L429) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L149-L150)

```diff
-       show(DD, zD) {
-         this.screen.setFade(DD.colour, DD.alpha), this.screen.setLetterbox(!0 === zD.letterbox, DD.alpha < 1), this.setHudHidden(!0 === zD.hideHud)
+       bytes() {
+         return this.fixed(this.size())
```

#### 24. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L152-L153` → after: `L431-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L431-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L431-L438) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L152-L153)

```diff
-       clear() {
-         this.screen.clear(), this.setHudHidden(!1)
+       fixed(pp) {
+         const ip = this.take(pp);
+         return this.buf.slice(ip, ip + pp)
+       }
+       index(pp) {
+         const ip = this.long();
+         if (!(ip >= 0 && ip < pp)) throw new RangeError(`avro: index ${ip} of ${pp}`);
+         return ip
```

#### 25. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L155-L158` → after: `L440-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L440-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L440-L482) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L155-L158)

```diff
-       setHudHidden(DD) {
-         this.hidesHud !== DD && (this.hidesHud = DD, pD.e.set({
-           isUiHiddenByCamera: DD
-         }))
+       qy(pp) {
+         const ip = [];
+         for (let cp = this.long(); 0 !== cp; cp = this.long()) {
+           cp = this.block(cp);
+           for (let Op = 0; Op < cp; Op++) ip.push(pp(this))
+         }
+         return ip
+       }
+       map(pp) {
+         const ip = {};
+         for (let cp = this.long(); 0 !== cp; cp = this.long()) {
+           cp = this.block(cp);
+           for (let Op = 0; Op < cp; Op++) {
+             ip[this.str()] = pp(this)
+           }
+         }
+ ... (27 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L162` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L492) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L162)

```diff
-   39140: (DD, zD, wD) => {
+   40813: (pp, ip, cp) => {
```

#### 27. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L164-L172` → after: `L494-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L494-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L494-L518) · [Before (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L164-L172)

```diff
-       c: () => pD,
-       e: () => UD,
-       f: () => AD,
-       i: () => rD,
-       j: () => ID,
-       k: () => cD,
-       o: () => BD,
-       s: () => gD,
-       u: () => LD,
+       A: () => Pp,
+       E: () => Yp,
+       F: () => Sp,
+       G: () => Mp,
+       H: () => op,
+       J: () => xp,
+       K: () => Wp,
+       O: () => Rp,
+       P: () => mp,
+       Q: () => jp,
+       S: () => Dp,
+       V: () => Ap,
+       X: () => qp,
+       _: () => yp,
+       cb: () => Hp,
+       d: () => ep,
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L175-L177` → after: `L521-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L521-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L521-L545) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L175-L177)

```diff
-     const pD = Math.PI / 2 - .001,
-       sD = 2 * Math.PI,
-       KD = 1e-9;
+     const Op = 2,
+       op = 12,
+       Ip = 27,
+       Sp = 40,
+       xp = 52,
+       Lp = 59,
+       Yp = 63,
+       Dp = 83,
+       Ap = 84,
+       Pp = 89,
+       Wp = 91,
+       yp = 93,
+       Up = 94,
+       wp = 95,
+       vp = 97,
+       tp = 101,
+ ... (9 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L180-L189` → after: `L548-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L548-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L548-L716) · [Before (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L180-L189)

```diff
-       zD.heading = DD.heading, zD.pitch = DD.pitch
-     }
- 
-     function LD(DD, zD) {
-       const wD = zD - DD;
-       return wD - sD * Math.floor((wD + Math.PI) / sD)
-     }
- 
-     function cD(DD, zD, wD) {
-       return DD + LD(DD, zD) * wD
+       switch (pp) {
+         case Op:
+           return function(pp) {
+             return {
+               pS: zp(pp),
+               iS: pp.float(),
+               cS: pp.long()
+             }
+           }(ip);
+         case op:
+           return function(pp) {
+             return {
+               xI: Jp(pp),
+               LI: Jp(pp)
+             }
+           }(ip);
+ ... (153 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L193-L195` → after: `L720-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L720-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L720-L722) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L193-L195)

```diff
-       if (!Number.isFinite(DD)) return DD;
-       const zD = DD - sD * Math.floor(DD / sD);
-       return zD < sD ? zD : 0
+       return {
+         entityName: pp.str()
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L198-L199` → after: `L725-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L725-L727) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L198-L199)

```diff
-     function RD(DD, zD) {
-       return DD + LD(DD, zD)
+     function Xp(pp) {
+       const ip = pp.index(4);
+       return 0 === ip ? pp.str() : 1 === ip ? pp.long() : 2 === ip ? pp.bool() : Ep(pp)
```

#### 32. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L203` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L731-L733) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L203)

```diff
-       return Math.max(-pD, Math.min(pD, DD))
+       return 0 === pp.index(2) ? null : function(pp) {
+         return pp.map(Xp)
+       }(pp)
```

#### 33. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L206-L208` → after: `L736-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L736-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L736-L740) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L206-L208)

```diff
-     function UD(DD, zD, wD) {
-       const pD = Math.cos(zD);
-       return wD[0] = pD * Math.sin(DD), wD[1] = -Math.sin(zD), wD[2] = pD * Math.cos(DD), wD
+     function Qp(pp) {
+       return {
+         translationKey: pp.str(),
+         params: lp(pp)
+       }
```

#### 34. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L211-L213` → after: `L743-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L743-L744) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L211-L213)

```diff
-     function fD(DD, zD, wD, pD) {
-       const sD = Math.sqrt(DD * DD + wD * wD);
-       return sD < KD && Math.abs(zD) < KD || (sD >= KD && (pD.heading = Math.atan2(DD, wD)), pD.pitch = AD(Math.atan2(-zD, sD) + 0)), pD
+     function Jp(pp) {
+       return 0 === pp.index(2) ? null : pp.str()
```

#### 35. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L216-L217` → after: `L747-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L747-L754) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L216-L217)

```diff
-     function ID(DD, zD) {
-       return fD(DD[0], DD[1], DD[2], zD)
+     function Bp(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           color: Jp(pp),
+           colour: Jp(pp),
+           fontSize: Jp(pp)
+         }
+       }(pp)
```

#### 36. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L220-L221` → after: `L757-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L757-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L757-L761) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L220-L221)

```diff
-     function BD(DD, zD, wD) {
-       return fD(zD[0] - DD[0], zD[1] - DD[1], zD[2] - DD[2], wD)
+     function Np(pp) {
+       return {
+         icon: pp.str(),
+         style: Bp(pp)
+       }
```

#### 37. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L232-L236` → after: `L765-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L765-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L765-L769) · [Before (L232-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L232-L236)

```diff
-       var zD;
-       const wD = "default" === DD.mode ? "movement" : null !== (zD = DD.playerFacing) && void 0 !== zD ? zD : "movement";
-       return "cursor" === wD ? {
-         facing: wD,
-         mouseTurns: null
+       const ip = pp.index(3);
+       return 0 === ip ? {
+         string: pp.str()
+       } : 1 === ip ? {
+         styledEntityName: Ep(pp)
```

#### 38. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L238-L239` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L771) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L238-L239)

```diff
-         facing: wD,
-         mouseTurns: "default" !== DD.mode && void 0 !== DD.playerLook ? "look" : "view"
+         styledTranslatedText: Qp(pp)
```

#### 39. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L243-L244` → after: `L775-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L775-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L775-L777) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L243-L244)

```diff
-     function KD(DD, zD, wD, sD, KD, rD) {
-       return rD.aT = 0, rD.qT = 0, rD.pointedAt = void 0, void 0 !== sD ? KD ? (rD.pointedAt = sD, DD) : (0, pD.s)(sD.heading) : KD ? (rD.aT = zD, rD.qT = wD, DD) : (0, pD.s)(DD + zD)
+     function fp(pp) {
+       const ip = pp.index(3);
+       return 0 === ip ? null : 1 === ip ? pp.str() : pp.long()
```

#### 40. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L255-L258` → after: `L780-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L780-L781) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L255-L258)

```diff
-     function rD(DD, zD, wD, pD) {
-       if (!(pD > 0)) return zD;
-       const sD = zD > DD ? Math.min(zD, DD + wD / pD) : Math.max(zD, DD - wD / pD);
-       return Math.abs(zD - sD) < 1e-9 ? zD : sD
+     function bp(pp) {
+       return 0 === pp.index(2) ? null : pp.float()
```

#### 41. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L260-L314` → after: `L783-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L783-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L783-L792) · [Before (L260-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L260-L314)

```diff
-     class LD {
-       constructor() {
-         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
-           colour: pD.c,
-           alpha: 0
-         }
-       }
-       getScreen() {
-         return this.screen
-       }
-       fadeOut(DD) {
-         !this.isGoingOut() && this.sinceTurnMs < pD.e.minFadeTurnMs ? this.waiting = {
-           turn: "out",
-           transition: DD
-         } : (this.waiting = null, this.startOut(DD))
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function hp(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           color: Jp(pp),
+           colour: Jp(pp),
+           fontWeight: fp(pp),
+           fontStyle: Jp(pp),
+           fontSize: Jp(pp),
+           opacity: bp(pp)
```

#### 42. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L316` → after: `L794-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L794-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L794-L801) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L316)

```diff
-         return "in" === this.phase && (zD.alpha = rD(zD.alpha, 0, KD, this.inMs), zD.alpha <= 0 && (this.phase = null, this.clearMs = 0)), wD
+       }(pp)
+     }
+ 
+     function ap(pp) {
+       return {
+         str: Tp(pp),
+         style: hp(pp),
+         clickableUrl: Jp(pp)
```

#### 43. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L324-L325` → after: `L805-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L805-L806) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L324-L325)

```diff
-     function UD(DD, zD) {
-       for (let wD = 0; wD < zD.length; wD++) zD[wD] = DD[wD]
+     function np(pp) {
+       return pp.str()
```

#### 44. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L328-L330` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L809-L810) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L328-L330)

```diff
-     function fD(DD, zD) {
-       var wD;
-       return null !== (wD = DD.fov) && void 0 !== wD ? wD : zD.getDefaultFov()
+     function Fp(pp) {
+       return pp.qy(np)
```

#### 45. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L333-L340` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L813-L814) · [Before (L333-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L333-L340)

```diff
-     function ID(DD, zD, wD, pD, sD) {
-       const KD = 2 / pD,
-         rD = Math.exp(-KD * sD);
-       for (let LD = 0; LD < DD.length; LD++) {
-         const pD = DD[LD] - wD[LD],
-           cD = (zD[LD] + KD * pD) * sD;
-         DD[LD] = wD[LD] + (pD + cD) * rD, zD[LD] = (zD[LD] - KD * cD) * rD
-       }
+     function gp(pp) {
+       return 0 === pp.index(2) ? null : Fp(pp)
```

#### 46. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L342-L407` → after: `L816-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L816-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L816-L824) · [Before (L342-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L342-L407)

```diff
-     class BD {
-       constructor(DD, zD, wD, pD) {
-         var KD, rD, LD, cD, gD;
-         this.settings = DD, this.KU = zD, this.targets = wD, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.UG = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
-           heading: 0,
-           pitch: 0
-         }, this.points = [], this.forward = [0, 0, 0], this.base = {
-           heading: (0, sD.s)((0, RD.l)(null !== (KD = DD.viewHeading) && void 0 !== KD ? KD : 0)),
-           pitch: (0, sD.f)((0, RD.l)(null !== (rD = DD.viewElevation) && void 0 !== rD ? rD : 45))
-         }, this.closestDistance = null !== (LD = DD.closestDistance) && void 0 !== LD ? LD : Math.min(6, null !== (cD = DD.furthestDistance) && void 0 !== cD ? cD : 1 / 0), this.furthestDistance = null !== (gD = DD.furthestDistance) && void 0 !== gD ? gD : Math.max(64, this.close … [truncated]
-         const AD = (0, sD.e)(this.base.heading, this.base.pitch, this.forward),
-           UD = pD.position,
-           fD = this.closestDistance;
-         this.goal = [UD[0] + AD[0] * fD, UD[1] + AD[1] * fD, UD[2] + AD[2] * fD, fD, this.base.heading, this.base.pitch]
-       }
-       update(DD, zD, wD) {
- ... (50 more removed lines; see GitHub link above)
+ 
+     function Gp(pp) {
+       return {
+         type: pp.str(),
+         progress: pp.float(),
+         width: Jp(pp),
+         height: Jp(pp),
+         colours: gp(pp),
+         backgroundColour: Jp(pp)
```

#### 47. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L410-L448` → after: `L827-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L827-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L827-L832) · [Before (L410-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L410-L448)

```diff
-     class GD {
-       constructor(DD) {
-         this.limits = DD, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
-       }
-       continueFrom(DD) {
-         this.limits && (this.yawOffset = DD.yawOffset, this.pitchOffset = DD.pitchOffset, this.idleMs = DD.idleMs)
-       }
-       update(DD, zD) {
-         const wD = this.limits;
-         if (!wD) return;
-         const pD = Number.isFinite(zD.aT) ? zD.aT : 0,
-           sD = Number.isFinite(zD.qT) ? zD.qT : 0;
-         if (zD.pointedAt) this.idleMs = 0, this.pointedAt = {
-           heading: zD.pointedAt.heading,
-           pitch: zD.pointedAt.pitch
-         };
- ... (23 more removed lines; see GitHub link above)
+ 
+     function rp(pp) {
+       return {
+         type: pp.str(),
+         action: pp.str(),
+         style: hp(pp)
```

#### 48. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L450-L451` → after: `L834-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L834-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L834-L851) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L450-L451)

```diff
-       unapply(DD, zD) {
-         zD.heading = (0, sD.s)(DD.heading - this.yawOffset), zD.pitch = (0, sD.f)(DD.pitch - this.pitchOffset)
+     }
+ 
+     function Zp(pp) {
+       const ip = pp.index(7);
+       return 0 === ip ? {
+         string: pp.str()
+       } : 1 === ip ? {
+         entityName: Ep(pp)
+       } : 2 === ip ? {
+         translatedText: Qp(pp)
+       } : 3 === ip ? {
+         styledIcon: Np(pp)
+       } : 4 === ip ? {
+         xi: ap(pp)
+       } : 5 === ip ? {
+         styledProgressBar: Gp(pp)
+ ... (2 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L457` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L856) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L457)

```diff
-       return Math.sqrt(DD[0] * DD[0] + DD[1] * DD[1] + DD[2] * DD[2])
+       return pp.qy(Zp)
```

#### 50. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L460-L463` → after: `L860-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L860-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L860-L861) · [Before (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L460-L463)

```diff
-     function MD(DD, zD, wD, pD, sD) {
-       const KD = sD * sD,
-         rD = KD * sD;
-       return (2 * rD - 3 * KD + 1) * DD + (rD - 2 * KD + sD) * zD + (-2 * rD + 3 * KD) * wD + (rD - KD) * pD
+     function Kp(pp) {
+       return sp[pp.index(5)]
```

#### 51. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L466-L468` → after: `L864-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L864-L865) · [Before (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L466-L468)

```diff
-     function OD(DD, zD, wD, pD, sD) {
-       const KD = sD * sD;
-       return (6 * KD - 6 * sD) * DD + (3 * KD - 4 * sD + 1) * zD + (-6 * KD + 6 * sD) * wD + (3 * KD - 2 * sD) * pD
+     function Vp(pp) {
+       return 0 === pp.index(2) ? null : pp.double()
```

#### 52. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L471-L484` → after: `L868-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L868-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L868-L878) · [Before (L471-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L471-L484)

```diff
-     function JD(DD, zD) {
-       const wD = zD[0] - DD[0],
-         pD = zD[1] - DD[1],
-         sD = zD[2] - DD[2];
-       return Math.sqrt(wD * wD + pD * pD + sD * sD)
-     }
- 
-     function ED(DD, zD, wD, pD, sD, KD) {
-       for (let rD = 0; rD < 3; rD++) KD[rD] = sD ? DD[rD] * pD : wD[rD] - zD[rD];
-       return sD && function(DD, zD) {
-         const wD = nD(DD);
-         if (wD > zD) {
-           const pD = zD / wD;
-           DD[0] *= pD, DD[1] *= pD, DD[2] *= pD
+     function ii(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           Oi: Vp(pp),
+           oi: pp.double(),
+           Ii: pp.double(),
+           Si: pp.bool(),
+           description: zp(pp),
+           Yi: pp.str(),
+           scale: Vp(pp),
+           rotation: Vp(pp)
```

#### 53. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L486` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L880) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L486)

```diff
-       }(KD, 3 * JD(zD, wD)), KD
+       }(pp)
```

#### 54. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L489-L493` → after: `L883-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L883-L884) · [Before (L489-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L489-L493)

```diff
-     function QD(DD, zD, wD, pD) {
-       for (let sD = 0; sD < 3; sD++) pD[sD] = 6 * (zD[sD] - DD[sD]) - 2 * wD[sD];
-       if (nD(pD) < hD)
-         for (let sD = 0; sD < 3; sD++) pD[sD] = zD[sD] - DD[sD];
-       return pD
+     function ci(pp) {
+       return 0 === pp.index(2) ? null : pp.bool()
```

#### 55. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L496-L497` → after: `L887-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L887-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L887-L898) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L496-L497)

```diff
-     function XD(DD, zD) {
-       return [2 * zD[0] - DD[0], 2 * zD[1] - DD[1], 2 * zD[2] - DD[2]]
+     function Oi(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           Ai: pp.double(),
+           icon: pp.str(),
+           label: zp(pp),
+           Pi: pp.bool(),
+           scale: Vp(pp),
+           rotation: Vp(pp),
+           Wi: ci(pp)
+         }
+       }(pp)
```

#### 56. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L500-L511` → after: `L901-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L901-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L901-L916) · [Before (L500-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L500-L511)

```diff
-     function VD(DD, zD, wD, pD, sD, KD, rD) {
-       if (!KD && !rD) return 0;
-       const LD = KD ? DD : 2 * zD - wD,
-         cD = rD ? wD : 2 * zD - DD,
-         gD = KD ? pD : sD,
-         RD = rD ? sD : pD,
-         AD = (zD - LD) / gD,
-         UD = (cD - zD) / RD;
-       if (AD * UD <= 0) return 0;
-       const fD = (cD - LD) / (gD + RD),
-         ID = 3 * Math.min(Math.abs(AD), Math.abs(UD));
-       return Math.max(-ID, Math.min(ID, fD))
+     function oi(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           Oi: Vp(pp),
+           Ui: pp.double(),
+           Hi: pp.double(),
+           ui: pp.double(),
+           gravity: pp.double(),
+           ji: pp.double(),
+           ki: pp.double(),
+           mi: pp.double(),
+           Si: pp.bool(),
+           description: zp(pp),
+           icon: Jp(pp)
+         }
+       }(pp)
```

#### 57. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L514-L520` → after: `L919-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L919-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L919-L929) · [Before (L514-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L514-L520)

```diff
-     function PD(DD, zD, wD, pD, sD, KD, rD) {
-       const {
-         u: LD,
-         segmentMs: cD
-       } = DD;
-       if (!DD.curved) return wD + (pD - wD) * LD;
-       return MD(wD, VD(zD, wD, pD, DD.beforeMs, cD, KD, !0) * cD, pD, VD(wD, pD, sD, cD, DD.afterMs, !0, rD) * cD, LD)
+     function Ii(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           speed: pp.double(),
+           qi: pp.double(),
+           label: zp(pp),
+           icon: Jp(pp),
+           scale: Vp(pp),
+           rotation: Vp(pp)
+         }
+       }(pp)
```

#### 58. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L524` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L933) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L524)

```diff
-       return Math.abs(DD.pitch) >= sD.c
+       return 0 === pp.index(2) ? null : pp.long()
```

#### 59. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L526-L574` → after: `L935-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L935-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L935-L944) · [Before (L526-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L526-L574)

```diff
-     class xD {
-       constructor(DD, zD, wD, pD, sD) {
-         this.nodes = DD, this.prevNodes = wD, this.nextNodes = pD, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.fromAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.toAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.afterAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.borrowedAngles = {
-           heading: 0,
- ... (33 more removed lines; see GitHub link above)
+ 
+     function xi(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           Ci: pp.long(),
+           Ei: pp.double(),
+           Xi: pp.double(),
+           li: Si(pp),
+           label: zp(pp),
+           icon: Jp(pp)
```

#### 60. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L576-L604` → after: `L946-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L946-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L946-L956) · [Before (L576-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L576-L604)

```diff
-         const rD = this.tangents[DD];
-         return rD ? ((0, sD.i)(rD, pD), "tangent") : "none"
-       }
-       liveTangent(DD, zD) {
-         const wD = this.nodes[DD.index].position,
-           pD = this.nodes[DD.toIndex].position,
-           KD = this.derivative;
-         for (let sD = 0; sD < 3; sD++) KD[sD] = OD(wD[sD], DD.fromTangent[sD], pD[sD], DD.toTangent[sD], DD.u);
-         return nD(KD) > 1e-9 ? ((0, sD.j)(KD, zD), !0) : !(JD(wD, pD) < hD) && ((0, sD.j)(QD(wD, pD, DD.u < .5 ? DD.toTangent : DD.fromTangent, KD), zD), !0)
-       }
-       nodeTangent(DD, zD, wD) {
-         var pD;
-         const KD = DD[wD];
-         if (nD(KD) > 1e-9) return (0, sD.j)(KD, {
-           heading: 0,
-           pitch: 0
- ... (13 more removed lines; see GitHub link above)
+       }(pp)
+     }
+ 
+     function Li(pp) {
+       return {
+         type: Kp(pp),
+         progressBar: ii(pp),
+         timedClick: Oi(pp),
+         gravityBar: oi(pp),
+         precisionBar: Ii(pp),
+         rhythmClick: xi(pp)
```

#### 61. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L608-L616` → after: `L961-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L961-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L961-L964) · [Before (L608-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L608-L616)

```diff
-     function TD(DD, zD) {
-       const wD = DD.lookDirection || zD.lookDirection ? function(DD, zD) {
-         if (!DD || !zD) return DD === zD;
-         const wD = nD(DD),
-           pD = nD(zD);
-         return Math.hypot(DD[0] / wD - zD[0] / pD, DD[1] / wD - zD[1] / pD, DD[2] / wD - zD[2] / pD) < hD
-       }(DD.lookDirection, zD.lookDirection) : (pD = DD.lookAt, sD = zD.lookAt, "object" !== typeof pD || "object" !== typeof sD ? pD === sD : JD(pD, sD) < hD);
-       var pD, sD;
-       return JD(DD.position, zD.position) < hD && DD.fov === zD.fov && wD
+     function Di(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return Yi[pp.index(2)]
+       }(pp)
```

#### 62. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L618-L724` → after: `L966-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L966-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L966-L968) · [Before (L618-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L618-L724)

```diff
-     class bD {
-       constructor(DD, zD, wD) {
-         if (this.smooth = zD, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
-             index: 0,
-             toIndex: 0,
-             u: 0,
-             segmentMs: 0,
-             curved: !1,
-             beforeIndex: -1,
-             afterIndex: -1,
-             beforeMs: 0,
-             afterMs: 0,
-             fromTangent: [0, 0, 0],
-             toTangent: [0, 0, 0]
-           }, 0 === DD.length) throw new Error("A camera path needs at least one keyframe");
-         for (let KD = 1; KD < DD.length; KD++)
- ... (91 more removed lines; see GitHub link above)
+ 
+     function Ai(pp) {
+       return pp.float()
```

#### 63. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L726-L750` → after: `L970-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L970-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L970-L972) · [Before (L726-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L726-L750)

```diff
-     class jD {
-       constructor(DD) {
-         this.KU = DD, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = zD => DD.getEntityPosition(zD), this.readAimPoint = zD => DD.getEntityAimPoint(zD)
-       }
-       aimPoint(DD) {
-         return "string" !== typeof DD ? (0, cD.l)(DD, 3) ? DD : null : this.resolve(DD, this.readAimPoint, this.lastAimPoints)
-       }
-       currentAimPoint(DD) {
-         const zD = "string" === typeof DD ? this.KU.getEntityAimPoint(DD) : DD;
-         return zD && (0, cD.l)(zD, 3) ? zD : null
-       }
-       feetPosition(DD) {
-         return this.resolve(DD, this.readFeet, this.lastFeet)
-       }
-       heading(DD) {
-         const zD = this.KU.getEntityHeading(DD);
- ... (9 more removed lines; see GitHub link above)
+ 
+     function Pi(pp) {
+       return pp.qy(Ai)
```

#### 64. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L754-L757` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L976) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L754-L757)

```diff
-       return {
-         heading: DD.heading,
-         pitch: DD.pitch
-       }
+       return 0 === pp.index(2) ? null : Pi(pp)
```

#### 65. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L760-L761` → after: `L979-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L979-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L979-L980) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L760-L761)

```diff
-     function SD(DD, zD) {
-       Number.isFinite(DD.heading) && Number.isFinite(DD.pitch) || (0, sD.i)(zD, DD)
+     function yi(pp) {
+       return 0 === pp.index(2) ? null : zp(pp)
```

#### 66. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L764-L767` → after: `L983-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L983-L984) · [Before (L764-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L764-L767)

```diff
-     function iD(DD, zD, wD, pD, KD) {
-       if (zD) return void(0, sD.j)(zD, KD);
-       const rD = pD.aimPoint(wD);
-       rD && (0, sD.o)(DD, rD, KD)
+     function Ui(pp) {
+       return pp.long()
```

#### 67. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L769-L783` → after: `L986-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L986-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L986-L990) · [Before (L769-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L769-L783)

```diff
-     class lD {
-       constructor(DD, zD, wD, pD) {
-         this.settings = DD, this.KU = zD, this.targets = wD, this.base = void 0, this.base = dD(pD)
-       }
-       update(DD, zD, wD) {
-         var pD;
-         const sD = this.settings;
-         (0, cD.g)(sD.position, wD.position), iD(sD.position, sD.lookDirection, null !== (pD = sD.lookAt) && void 0 !== pD ? pD : this.KU.localPlayerId, this.targets, this.base), zD.apply(this.base, wD), wD.fov = fD(sD, this.KU)
-       }
-       continueFrom(DD) {
-         DD instanceof lD && (0, sD.i)(DD.base, this.base)
-       }
-       reset(DD) {
-         SD(this.base, DD)
-       }
+ 
+     function wi(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return pp.qy(Ui)
+       }(pp)
```

#### 68. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L785-L840` → after: `L992-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L992-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L992-L997) · [Before (L785-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L785-L840)

```diff
-     class WD {
-       constructor(DD, zD, wD, pD) {
-         this.settings = DD, this.KU = zD, this.targets = wD, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.UG = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
-       }
-       update(DD, zD, wD) {
-         var pD, sD, KD;
-         const rD = this.settings,
-           LD = null !== (pD = rD.target) && void 0 !== pD ? pD : this.KU.localPlayerId,
-           gD = this.targets.feetPosition(LD);
-         let RD = !1;
-         gD && (RD = this.foundFeet && JD(this.lastFeet, gD) > 32 + .1 * DD, (0, cD.g)(gD, this.lastFeet), this.foundFeet = !0, this.placeGoal(gD, LD));
-         const AD = null !== (sD = rD.smoothMs) && void 0 !== sD ? sD : 0;
-         !this.started || AD < 1 || RD ? ((0, cD.g)(this.goal, this.smoothed), this.UG.fill(0), this.started = !0) : ID(this.smoothed, this.UG, this.goal, AD, DD), RD && (this.distance = -1), (0, cD.g)(this.smoothed, wD.position);
-         const UD = !0 === rD.avoidTerrain ? this.pullIn(LD, DD, wD) : 1;
-         let BD = this.goal;
-         if ("target" === rD.offsetSpace) BD = wD.position;
- ... (40 more removed lines; see GitHub link above)
+ 
+     function vi(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           HI: pp.str(),
+           dI: pp.long()
```

#### 69. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L842-L843` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L999) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L842-L843)

```diff
-         this.goal[0] = DD[0] + pD, this.goal[1] = DD[1] + wD[1], this.goal[2] = DD[2] + sD
-       }
+       }(pp)
```

#### 70. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L845-L856` → after: `L1001-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1001-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1001-L1011) · [Before (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L845-L856)

```diff
-     class ND {
-       constructor(DD, zD, wD, pD) {
-         var sD, KD;
-         this.settings = DD, this.KU = zD, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = DD.keyframes.length > 0 ? new bD(DD.keyframes, null === (sD = DD.smooth) || void 0 === sD || sD, null !== (KD = DD.loop) && void 0  … [truncated]
-       }
-       update(DD, zD, wD) {
-         this.elapsedMs += DD;
-         const pD = fD(this.settings, this.KU);
-         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, pD, this.base) : this.base.fov = pD, (0, cD.g)(this.base.position, wD.position), wD.fov = this.base.fov, zD.apply(this.base, wD)
-       }
-       continueFrom(DD) {
-         DD instanceof ND && (0, pD.m)(DD.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = DD.elapsedMs, (0, cD.e)(DD.base, this.base))
+ 
+     function ti(pp) {
+       const ip = pp.index(3);
+       return 0 === ip ? null : 1 === ip ? pp.str() : Qp(pp)
+     }
+ 
+     function Hi(pp) {
+       return {
+         sI: pp.str(),
+         KI: pp.str(),
+         VI: pp.str()
```

#### 71. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L858-L859` → after: `L1013-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1013-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1013-L1020) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L858-L859)

```diff
-       reset(DD) {
-         SD(this.base, DD), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+     }
+ 
+     function di(pp) {
+       return {
+         ap: pp.str(),
+         np: Jp(pp),
+         Fp: Jp(pp),
+         Gp: Fp(pp)
```

#### 72. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L863-L864` → after: `L1024-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1024-L1025) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L863-L864)

```diff
-     function ZD(DD, zD) {
-       return (0, pD.p)(DD, zD)
+     function ei(pp) {
+       return pp.qy(di)
```

#### 73. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L866-L888` → after: `L1027-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1027-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1027-L1033) · [Before (L866-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L866-L888)

```diff
-     class yD {
-       constructor(DD, zD, wD) {
-         var pD;
-         this.settings = DD, this.KU = zD, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
-         const sD = null !== wD && wD.settings.mode === DD.mode,
-           KD = sD ? wD.pose : zD.getDefaultPose();
-         this.pose = (0, cD.e)(KD, (0, cD.h)()), this.lastGoodPose = (0, cD.e)(sD ? wD.lastGoodPose : KD, (0, cD.h)()), this.look = new GD(DD.playerLook), this.targets = null !== (pD = null === wD || void 0 === wD ? void 0 : wD.targets) && void 0 !== pD ? pD : new jD(zD);
-         const rD = (0, cD.e)(KD, (0, cD.h)());
-         sD && wD.look.unapply(rD, rD), this.mode = function(DD, zD, wD, pD) {
-           switch (DD.mode) {
-             case "fixed":
-               return new lD(DD, zD, wD, pD);
-             case "follow":
-               return new WD(DD, zD, wD, pD);
-             case "path":
-               return new ND(DD, zD, wD, pD);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function ui(pp) {
+       return {
+         DO: pp.str(),
+         x: pp.long(),
+         y: pp.long(),
+         z: pp.long()
```

#### 74. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L893` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1038) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L893)

```diff
-       return [0, 0, DD[2], DD[3]]
+       return pp.qy(ui)
```

#### 75. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L895-L975` → after: `L1040-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1040-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1040-L1046) · [Before (L895-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L895-L975)

```diff
-     class mD {
-       constructor(DD) {
-         this.KU = DD, this.settings = {
-           mode: "default"
-         }, this.pending = null, this.fade = new LD, this.shot = null, this.blend = null, this.mixed = (0, cD.h)(), this.output = (0, cD.h)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
-           length: 3
-         }, (() => [0, 0, 0]))
-       }
-       setSettings(DD) {
-         const zD = (0, gD.c)(DD);
-         if ((0, pD.m)(zD, this.pending ? this.pending.settings : this.settings)) return;
-         const wD = ZD(this.settings, zD);
-         if (void 0 !== zD.transition && !wD) return this.pending = {
-           settings: zD,
-           shot: "default" === zD.mode ? null : new yD(zD, this.KU, null)
-         }, void this.fade.fadeOut(zD.transition);
- ... (65 more removed lines; see GitHub link above)
+ 
+     function ki(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           lO: pp.float(),
+           QO: pp.long(),
+           JO: pp.long()
```

#### 76. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L978-L985` → after: `L1062-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1062-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1062-L1073) · [Before (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L978-L985)

```diff
-       writeOutput(DD) {
-         const zD = this.output;
-         (0, cD.j)(DD) ? (0, cD.e)(DD, zD) : this.hasOutput || (0, cD.e)(this.KU.getDefaultPose(), zD), zD.pitch = (0, sD.f)(zD.pitch);
-         const wD = this.KU.getDefaultFov(),
-           KD = Number.isFinite(wD) && wD > 0 && wD < 180,
-           rD = KD ? Math.min(pD.e.minFov, wD) : pD.e.minFov,
-           LD = KD ? Math.max(pD.e.maxFov, wD) : pD.e.maxFov;
-         return zD.fov = Number.isFinite(zD.fov) ? Math.min(LD, Math.max(rD, zD.fov)) : LD, this.hasOutput = !0, zD
+     }
+ 
+     function Ri(pp) {
+       return 0 === pp.index(2) ? null : function(pp) {
+         return pp.qy(mi)
+       }(pp)
+     }
+ 
+     function qi(pp) {
+       return {
+         eO: pp.str(),
+         uO: Ri(pp)
```

#### 77. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1005` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1077) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1005)

```diff
-     function KD() {
+     function Mi(pp) {
```

#### 78. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1007-L1010` → after: `L1079-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1079-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1079-L1080) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1007-L1010)

```diff
-         position: [0, 0, 0],
-         heading: 0,
-         pitch: 0,
-         fov: 0
+         blockName: pp.str(),
+         frequency: pp.float()
```

#### 79. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1014-L1015` → after: `L1084-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1084-L1085) · [Before (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1014-L1015)

```diff
-     function rD(DD, zD) {
-       return zD[0] = DD[0], zD[1] = DD[1], zD[2] = DD[2], zD
+     function Ci(pp) {
+       return pp.qy(Mi)
```

#### 80. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1018-L1019` → after: `L1088-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1088-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1088-L1094) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1018-L1019)

```diff
-     function LD(DD, zD) {
-       return rD(DD.position, zD.position), zD.heading = DD.heading, zD.pitch = DD.pitch, zD.fov = DD.fov, zD
+     function Ei(pp) {
+       return {
+         TO: pp.str(),
+         fO: pp.str(),
+         frequency: pp.float(),
+         bO: Ci(pp)
+       }
```

#### 81. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1022-L1023` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1097-L1098) · [Before (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1022-L1023)

```diff
-     function cD(DD, zD) {
-       return Array.isArray(DD) && DD.length === zD && DD.every(Number.isFinite)
+     function Xi(pp) {
+       return pp.qy(Ei)
```

#### 82. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1027` → after: `L1102-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1102-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1102-L1109) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1027)

```diff
-       return cD(DD.position, 3) && Number.isFinite(DD.heading) && Number.isFinite(DD.pitch) && Number.isFinite(DD.fov)
+       return {
+         blockName: pp.str(),
+         radius: pp.long(),
+         FO: pp.long(),
+         UO: pp.long(),
+         wO: pp.long(),
+         gO: pp.float()
+       }
```

#### 83. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1030-L1032` → after: `L1112-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1112-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1112-L1113) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1030-L1032)

```diff
-     function RD(DD, zD, wD, sD, KD) {
-       for (let pD = 0; pD < 3; pD++) KD.position[pD] = DD.position[pD] + (zD.position[pD] - DD.position[pD]) * sD;
-       return KD.heading = (0, pD.s)(DD.heading + wD * sD), KD.pitch = DD.pitch + (zD.pitch - DD.pitch) * sD, KD.fov = DD.fov + (zD.fov - DD.fov) * sD, KD
+     function Qi(pp) {
+       return pp.qy(li)
```

#### 84. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1045-L1046` → after: `L1116-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1116-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1116-L1125) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1045-L1046)

```diff
-     function LD(DD, zD, wD, pD) {
-       return Number.isFinite(DD) ? Math.min(wD, Math.max(zD, DD)) : pD
+     function Ji(pp) {
+       return {
+         UO: pp.long(),
+         wO: pp.long(),
+         vO: pp.long(),
+         tO: pp.bool(),
+         HO: qi(pp),
+         BO: Xi(pp),
+         aO: Qi(pp)
+       }
```

#### 85. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1049-L1050` → after: `L1128-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1128-L1129) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1049-L1050)

```diff
-     function cD(DD, zD, wD) {
-       return void 0 !== DD && Number.isFinite(DD) ? Math.min(wD, Math.max(zD, DD)) : void 0
+     function Bi(pp) {
+       return pp.qy(Ji)
```

#### 86. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1054-L1055` → after: `L1133-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1133-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1133-L1138) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1054-L1055)

```diff
-       const zD = pD.e.maxCoordinate;
-       return [Math.min(zD, Math.max(-zD, DD[0])), Math.min(zD, Math.max(-zD, DD[1])), Math.min(zD, Math.max(-zD, DD[2]))]
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           name: pp.str(),
+           zO: Jp(pp)
+         }
+       }(pp)
```

#### 87. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1059` → after: `L1142-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1142-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1142-L1147) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1059)

```diff
-       return "string" === typeof DD ? DD : (0, sD.l)(DD, 3) ? gD(DD) : void 0
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           terrain: Ni(pp),
+           sO: Qi(pp)
+         }
+       }(pp)
```

#### 88. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1064` → after: `L1151-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1151-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1151-L1215) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1064)

```diff
-       return "string" === typeof DD && AD.test(DD)
+       return 0 === pp.index(2) ? null : function(pp) {
+         return {
+           layers: Bi(pp),
+           GO: Ti(pp)
+         }
+       }(pp)
+     }
+   },
+   40792: (pp, ip, cp) => {
+     cp.d(ip, {
+       A: () => Ep,
+       B: () => dp,
+       E: () => ep,
+       H: () => wp,
+       K: () => qp,
+       N: () => lp,
+ ... (49 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1068-L1072` → after: `L1219-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1219-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1219-L1222) · [Before (L1068-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1068-L1072)

```diff
-       const zD = [];
-       if (!Array.isArray(DD)) return zD;
-       for (const wD of DD.slice(0, pD.e.maxFrameTargets)) {
-         const DD = RD(wD);
-         void 0 === DD || "string" === typeof DD && !UD(DD) || zD.push(DD)
+       if ("string" !== typeof pp) return pp;
+       for (let ip = 0; ip < pp.length; ip++) {
+         const cp = pp.charCodeAt(ip);
+         if (cp >= 55296 && cp <= 57343) return Lp.decode(xp.encode(pp))
```

#### 90. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1078-L1081` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1230) · [Before (L1078-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1078-L1081)

```diff
-       if (!(0, sD.l)(DD, 3)) return;
-       const zD = Math.max(Math.abs(DD[0]), Math.abs(DD[1]), Math.abs(DD[2])),
-         wD = Math.hypot(DD[0] / zD, DD[1] / zD, DD[2] / zD);
-       return 0 === zD || zD * wD < pD.e.minDirectionLength ? void 0 : [DD[0] / zD / wD, DD[1] / zD / wD, DD[2] / zD / wD]
+       return pp
```

#### 91. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1085` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1235) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1085)

```diff
-       if (void 0 !== DD) return "string" === typeof DD ? KD.includes(DD) ? DD : void 0 : (0, sD.l)(DD, 4) ? [LD(DD[0], 0, 1, 0), LD(DD[1], pD.e.minEasingY, pD.e.maxEasingY, 0), LD(DD[2], 0, 1, 1), LD(DD[3], pD.e.minEasingY, pD.e.maxEasingY, 1)] : "linear"
+       return null === pp || "object" !== typeof pp ? pp : [Sp(pp.Cx), Sp(pp.Ex)]
```

#### 92. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1089-L1093` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1239) · [Before (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1089-L1093)

```diff
-       if (DD) return {
-         maxYaw: LD(DD.maxYaw, 0, pD.e.maxPlayerLook, 0),
-         maxPitch: LD(DD.maxPitch, 0, pD.e.maxPlayerLook, 0),
-         returnMs: cD(DD.returnMs, 0, pD.e.maxReturnMs)
-       }
+       return null === pp || "object" !== typeof pp ? pp : [Ip(pp.WI, Yp), Ip(pp.Zx, Yp)]
```

#### 93. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1098-L1107` → after: `L1243-L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1243-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1243-L1244) · [Before (L1098-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1098-L1107)

```diff
-       var zD;
-       if ("object" !== typeof DD || null === DD) return;
-       const wD = pD.e.maxTransitionMs,
-         sD = pD.e.minTransitionFadeMs;
-       return {
-         colour: "string" === typeof DD.colour && hD.test(DD.colour) ? DD.colour : pD.c,
-         outMs: LD(DD.outMs, sD, wD, sD),
-         holdMs: LD(null !== (zD = DD.holdMs) && void 0 !== zD ? zD : 0, 0, wD, 0),
-         inMs: LD(DD.inMs, sD, wD, sD)
-       }
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.VD), Sp(ip.pA)];
+       var ip
```

#### 94. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1111` → after: `L1248-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1248-L1249) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1111)

```diff
-       return !0 === DD || void 0
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.id, ip.bD];
+       var ip
```

#### 95. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1115-L1117` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1253-L1254) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1115-L1117)

```diff
-       if ("object" !== typeof DD || null === DD) return !1;
-       const zD = DD.lookAt;
-       return Number.isFinite(DD.timeMs) && (0, sD.l)(DD.position, 3) && (void 0 === zD || "string" === typeof zD || (0, sD.l)(zD, 3))
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.eI, Sp(ip.uI), ip.jI, Sp(ip.RI), ip.EI, ip.XI, ip.zD, Sp(ip.sD), Sp(ip.KD)];
+       var ip
```

#### 96. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1121-L1129` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1258-L1259) · [Before (L1121-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1121-L1129)

```diff
-       return {
-         ...DD,
-         timeMs: LD(DD.timeMs, 0, pD.e.maxPathMs, 0),
-         position: gD(DD.position),
-         lookAt: RD(DD.lookAt),
-         lookDirection: ID(DD.lookDirection),
-         fov: cD(DD.fov, pD.e.minFov, pD.e.maxFov),
-         easing: BD(DD.easing)
-       }
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.vx, Yp), ip.tx];
+       var ip
```

#### 97. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1133-L1140` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1263-L1264) · [Before (L1133-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1133-L1140)

```diff
-       const zD = [];
-       if (!Array.isArray(DD)) return zD;
-       for (const wD of DD.slice(0, pD.e.maxKeyframes)) {
-         if (!OD(wD)) continue;
-         const DD = JD(wD);
-         (0 === zD.length || DD.timeMs > zD[zD.length - 1].timeMs) && zD.push(DD)
-       }
-       return zD
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.yx, (pp => Sp(pp))), Sp(ip.Ux), ip.wx];
+       var ip
```

#### 98. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1144-L1185` → after: `L1268-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1268-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1268-L1269) · [Before (L1144-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1144-L1185)

```diff
-       if ("object" !== typeof DD || null === DD) return {
-         mode: "default"
-       };
-       const zD = {
-           blendInMs: cD(DD.blendInMs, 0, pD.e.maxBlendInMs),
-           blendEasing: BD(DD.blendEasing),
-           transition: nD(DD.transition),
-           letterbox: MD(DD.letterbox),
-           hideHud: MD(DD.hideHud)
-         },
-         wD = {
-           mode: "default",
-           ...zD
-         };
-       if ("default" === DD.mode || "fixed" === DD.mode && !(0, sD.l)(DD.position, 3)) return wD;
-       const KD = {
- ... (26 more removed lines; see GitHub link above)
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.nL, Yp), Sp(ip.FL), ip.gL];
+       var ip
```

#### 99. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1195-L1196` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1273-L1274) · [Before (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1195-L1196)

```diff
-       const zD = /(\d*\.?\d+)px/.exec(DD);
-       return zD ? Number(zD[1]) : null
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.KI), Sp(ip.VI)];
+       var ip
```

#### 100. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1200` → after: `L1278-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1278-L1279) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1200)

```diff
-       return DD.split(/[\s,]+/).pop()
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.IL)];
+       var ip
```

#### 101. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1357-L1364` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1282-L1283) · [Before (L1357-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1357-L1364)

```diff
-     function RD(DD, zD, wD) {
-       if ("string" !== typeof DD) return zD;
-       try {
-         const wD = JSON.parse(DD);
-         return wD && "object" === typeof wD ? wD : zD
-       } catch (pD) {
-         return void 0 !== wD && console.error(`Couldn't parse ${wD}`, pD), zD
-       }
+     function ep(pp) {
+       return Sp(pp)
```

#### 102. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1368` → after: `L1287-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1287-L1288) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1368)

```diff
-       return RD(DD, null, "a leaderboard's rows")
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.ND), Sp(ip.TD), Sp(ip.Cx), Sp(ip.Ex)];
+       var ip
```

#### 103. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1371-L1376` → after: `L1291-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1291-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1291-L1292) · [Before (L1371-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1371-L1376)

```diff
-     function UD(DD, zD) {
-       var wD, pD;
-       return null !== zD && void 0 !== zD ? zD : {
-         status: null !== (wD = DD.status) && void 0 !== wD ? wD : "loading",
-         entries: null !== (pD = DD.entries) && void 0 !== pD ? pD : []
-       }
+     function kp(pp) {
+       return Ap(pp)
```

#### 104. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1379-L1380` → after: `L1295-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1295-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1295-L1296) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1379-L1380)

```diff
-     function fD(DD, zD) {
-       return "number" === typeof DD && Number.isFinite(DD) && DD > 0 ? DD : zD
+     function mp(pp) {
+       return Ap(pp)
```

#### 105. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1383-L1495` → after: `L1299-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1299-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1299-L1301) · [Before (L1383-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1383-L1495)

```diff
-     function ID(DD, zD) {
-       const wD = fD(DD.size, 1);
-       let pD = fD(DD.width, fD(2.5 * wD, 2.5)),
-         sD = fD(DD.height, fD(3.75 * wD, 3.75));
-       Number.isFinite(KD * sD / pD) && Number.isFinite(rD * pD / sD) || (pD = 2.5, sD = 3.75);
-       const LD = sD / pD,
-         cD = Math.max(1, Math.min(KD, zD / LD));
-       return {
-         width: pD,
-         height: sD,
-         layoutWidth: Math.max(KD, rD / LD),
-         layoutHeight: Math.max(rD, KD * LD),
-         pixelWidth: Math.round(cD),
-         pixelHeight: Math.round(Math.max(1, Math.min(zD, cD * LD)))
-       }
-     }
- ... (97 more removed lines; see GitHub link above)
+     function Rp(pp) {
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.JL)];
+       var ip
```

#### 106. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1498-L1499` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1304-L1305) · [Before (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1498-L1499)

```diff
-     function GD(DD, zD) {
-       return Array.isArray(DD) ? DD.slice(0, zD).filter((DD => DD && Number.isFinite(DD.rank) && Number.isFinite(DD.value))) : []
+     function qp(pp) {
+       return pp
```

#### 107. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1502-L1509` → after: `L1308-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1308-L1310) · [Before (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1502-L1509)

```diff
-     function hD(DD, zD) {
-       const wD = [];
-       let pD = !1;
-       return DD.forEach(((sD, KD) => {
-         if (null !== zD && sD.value === zD.value) return void wD.push(zD.rank);
-         const rD = KD > 0 && sD.value === DD[KD - 1].value;
-         rD || (pD = 0 === KD && 1 !== sD.rank), wD.push(rD && !pD ? wD[KD - 1] : sD.rank)
-       })), wD
+     function Mp(pp) {
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.qx), Sp(ip.Mx)];
+       var ip
```

#### 108. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1520` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1314) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1520)

```diff
-       return Array.from(DD).length
+       return Sp(pp)
```

#### 109. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1524-L1538` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1318) · [Before (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1524-L1538)

```diff
-       const zD = [""];
-       let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         sD = "";
-       const KD = () => {
-         zD.push(""), wD = 0, sD = ""
-       };
-       for (const rD of DD.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
-         if (/^\r?\n$/.test(rD)) KD();
-         else if (/^\s+$/.test(rD)) sD += rD;
-       else if (rD.length > 0) {
-         const DD = Array.from(rD);
-         wD > 0 && wD + sD.length + DD.length > pD && KD(), zD[zD.length - 1] += sD, wD += sD.length, sD = "";
-         for (const sD of DD) wD >= pD && KD(), zD[zD.length - 1] += sD, wD++
-       }
-       return zD[zD.length - 1] += sD, zD
+       return Pp(pp)
```

#### 110. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1550-L1556` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1322) · [Before (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1550-L1556)

```diff
-       if (!DD) return [...KD];
-       try {
-         const [zD, wD, pD] = sD()(DD).rgb().array();
-         return [zD / 255, wD / 255, pD / 255]
-       } catch (zD) {
-         return console.warn(`Invalid groundArrowPath colour "${DD}":`, zD), [...KD]
-       }
+       return Pp(pp)
```

#### 111. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1571-L1573` → after: `L1326-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1326-L1327) · [Before (L1571-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1571-L1573)

```diff
-       var zD;
-       const wD = Math.min(screen.width, screen.height) * (null !== (zD = (0, pD.c)()) && void 0 !== zD ? zD : (0, sD.o)());
-       return Math.max(window.innerHeight * (0, sD.o)(), wD) / (0, sD.r)(DD)
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.rL)];
+       var ip
```

#### 112. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1576-L1577` → after: `L1330-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1330-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1330-L1334) · [Before (L1576-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1576-L1577)

```diff
-     function cD(DD, zD, wD) {
-       return zD / (2 * Math.tan(wD / 2)) > rD ? DD : gD(DD)
+     function Qp(pp) {
+       return (Dp ??= (0, Op.c)().map((pp => pp.name)), Dp).map((ip => {
+         return "string" === typeof(cp = pp[ip]) ? Sp(cp) : Ip(cp, Yp);
+         var cp
+       }))
```

#### 113. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1581` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1338-L1339) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1581)

```diff
-       return DD.map((DD => DD.replace(KD, "/textures/skyBoxes/$1/1024/$2")))
+       return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.XL, ip.lL, ip.QL];
+       var ip
```

#### 114. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1584` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1342) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1584)

```diff
-   34051: (DD, zD, wD) => {
+   9436: (pp, ip, cp) => {
```

#### 115. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1586-L1590` → after: `L1344-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1344-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1344-L1345) · [Before (L1586-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1586-L1590)

```diff
-       b: () => KD,
-       e: () => LD,
-       f: () => rD,
-       j: () => sD,
-       n: () => pD
+       d: () => op,
+       h: () => Ip
```

#### 116. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1592-L1682` → after: `L1347-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1347-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1347-L1349) · [Before (L1592-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1592-L1682)

```diff
-     const pD = {
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
- ... (75 more removed lines; see GitHub link above)
+     var Op = cp(9385);
+     const op = "Air",
+       Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 117. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1684` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1351) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1684)

```diff
-   39155: (DD, zD, wD) => {
+   39425: (pp, ip, cp) => {
```

#### 118. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1687-L1693` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1354) · [Before (L1687-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1687-L1693)

```diff
-       c: () => AD,
-       d: () => pD,
-       e: () => cD,
-       h: () => sD,
-       k: () => gD,
-       m: () => LD,
-       p: () => rD
+       d: () => xp
```

#### 119. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1695-L1697` → after: `L1356-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1356-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1356-L1359) · [Before (L1695-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1695-L1697)

```diff
-     const pD = ["linear", "easeIn", "easeOut", "easeInOut"],
-       sD = ["movement", "camera", "cursor"],
-       KD = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];
+     var Op = cp(337),
+       op = cp(4543);
+     const Ip = new Set(op.s),
+       Sp = new Map;
```

#### 120. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1700` → after: `L1362-L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1362-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/191.js#L1362-L1365) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/191.js#L1700)

```diff
-       return LD(DD, zD, KD)
+       let cp = Sp.get(ip);
+       void 0 === cp && (cp = new Map, Sp.set(ip, cp));
+       let op = cp.get(pp);
+       return void 0 === op && (op = `${pp}${(0,Op.C)(ip)}`, cp.set(pp, op)), op
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/192.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/192.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4)

#### 1. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L2)

```diff
- export const ids = [192];
+ export const ids = [52, 192];
```

#### 2. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L4` → after: `L4-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L4-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L4-L230) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L4)

```diff
-   34057: (DD, zD, wD) => {
+   38774: (pp, ip, cp) => {
+     var Op = {
+       "./combat_1.png": 38776,
+       "./dungeon_crumbling_crypt.png": 38783,
+       "./dungeon_frozen_hollow.png": 38791,
+       "./dungeon_wildwood_grove.png": 38798,
+       "./dungeons.png": 38807,
+       "./farming_1.png": 38814,
+       "./fishing_1.png": 38817,
+       "./hub.png": 38819,
+       "./island.png": 38824,
+       "./mining_1.png": 38828,
+       "./mining_1_bridge.png": 38831,
+       "./mining_1_gallery.png": 38836,
+       "./mining_1_hollow.png": 38842,
+       "./mining_1_village.png": 38849
+ ... (211 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6-L7` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L232) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L6-L7)

```diff
-       getLatestPublishedUpdateLog: () => LD,
-       updateLogsData: () => rD
+       default: () => PL
```

#### 4. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L9-L11` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L234-L236) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L9-L11)

```diff
-     var pD = wD(817),
-       sD = wD(338);
-     const KD = "\xa0\xa0\xa0\xa0",
+     const Op = "island";
+     var op = cp(337);
+     const Ip = (0, op.zb)([0, 0, -1]),
```

#### 5. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L13-L137` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L238-L239) · [Before (L13-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L13-L137)

```diff
-         author: ["Oliver", "Harry"],
-         date: new Date("2026-11-17T16:00:00Z"),
-         title: "\u2728Characters are back in the Store!\u2728",
-         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
-         image: "CosmeticPacks.jpg",
-         onClickImage: {
-           type: "openMenu",
-           menu: sD.l.COSMETIC_SHOP
-         },
-         callToAction: {
-           color: "rainbow",
-           label: "Go to Store!",
-           action: {
-             type: "openMenu",
-             menu: sD.l.COSMETIC_SHOP
-           }
- ... (109 more removed lines; see GitHub link above)
+         name: "S",
+         bearing: (0, op.zb)([0, 0, 1])
```

#### 6. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L139-L226` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L241-L242) · [Before (L139-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L139-L226)

```diff
-         author: "pegasys",
-         date: new Date("2026-10-22T12:00:00Z"),
-         title: "New Game: Build a Factory 2 \ud83c\udfed",
-         description: "Your own floating island, your own factory!\n\n Mine ore in the Wilds below, automate it with machines and conveyor belts, and power up your Core to unlock new tech. Your factory keeps working even while you're away!",
-         image: "build_a_factory_2.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "buildAFactory2"
-         },
-         mobileNotification: {
-           title: "New Game: Build a Factory 2 \ud83c\udfed",
-           body: "Build machines on your own floating island and watch them work - even while you're away!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Start building",
- ... (72 more removed lines; see GitHub link above)
+         name: "E",
+         bearing: (0, op.zb)([-1, 0, 0])
```

#### 7. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L228-L248` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L244-L245) · [Before (L228-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L228-L248)

```diff
-         author: "pegasys",
-         date: new Date("2026-10-09T12:00:00Z"),
-         title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
-         description: "Open Super Armour and Super Weapon lucky blocks to loot powerful new gear sets, each with its own special ability:\n \u2022 Spectral Armour - stand still to turn invisible.\n \u2022 Astral Armour - jump higher.\n \u2022 Magmasteel Weapons - set the ground un … [truncated]
-         image: "lucky_bedwars_gear_sets.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "luckyBedwars"
-         },
-         mobileNotification: {
-           title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
-           body: "Loot new armour and weapon sets with special abilities - turn invisible, set enemies on fire and more!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Play now!",
- ... (5 more removed lines; see GitHub link above)
+         name: "N",
+         bearing: Ip
```

#### 8. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L250-L264` → after: `L247-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L247-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L247-L701) · [Before (L250-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L250-L264)

```diff
-         author: ["Dirty Flea Sack", "ellie", "Harry", "AnxietreeDev"],
-         date: new Date("2026-10-07T08:00:00Z"),
-         title: "New Game: Skyblock!",
-         description: "Your Skyblock adventure begins! Complete quests, explore new islands and conquer dungeons in our new questing RPG!",
-         image: "skyblock_thumbnail_large.jpg",
-         onClickImage: {
-           type: "playGame",
-           game: "skyblock"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Start your adventure",
-           action: {
-             type: "playGame",
-             game: "skyblock"
+         name: "W",
+         bearing: (0, op.zb)([1, 0, 0])
+       }];
+ 
+     function xp(pp, ip, cp) {
+       return [100 * (cp.mapMaxX - pp) / (cp.mapMaxX - cp.mapMinX), 100 * (ip - cp.mapMinZ) / (cp.mapMaxZ - cp.mapMinZ)]
+     }
+ 
+     function Lp(pp, ip, cp) {
+       const op = "local" === ip,
+         Ip = pp.background,
+         Sp = ip => Ip ? xp(ip[0] - pp.mapOrigin[0], ip[2] - pp.mapOrigin[2], Ip.bounds) : [50, 50],
+         Lp = (pp.insideDungeon ? [] : pp.landmarks).map((pp => {
+           var ip, Op;
+           return {
+             id: pp.id,
+ ... (439 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L277-L297` → after: `L704-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L704-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L704-L2389) · [Before (L277-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L277-L297)

```diff
-         mobileNotification: {
-           title: "New Lucky Bedwars Map: Turtles! \ud83d\udc22",
-           body: "Play the new Lucky Bedwars map - Turtles!"
-         },
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "luckyBedwars"
-           }
-         }
-       }, {
-         author: "pegasys",
-         date: new Date("2026-09-30T12:00:00Z"),
-         title: "New Game: Lucky Bedwars \ud83c\udf40",
- ... (5 more removed lines; see GitHub link above)
+         combat_1: {
+           tower_roof: {
+             min: [202, 69, 151],
+             max: [203, 71, 151],
+             unlockedBlock: "Red Portal",
+             lockedBlock: "Grey Portal"
+           },
+           tower_exit: {
+             min: [202, 80, 133],
+             max: [203, 82, 133],
+             unlockedBlock: "Red Portal",
+             lockedBlock: "Grey Portal"
+           }
+         }
+       },
+       Tp = "Compressed Messy Stone",
+ ... (1670 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L299-L301` → after: `L2391-L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2391-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2391-L2398) · [Before (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L299-L301)

```diff
-         mobileNotification: {
-           title: "New Game: Lucky Bedwars \ud83c\udf40",
-           body: "Open lucky blocks, upgrade your gear and break enemy beds. Last team standing wins!"
+         tiers: kc
+       }, {
+         id: "iron",
+         category: "mining",
+         item: "Raw Iron",
+         blocks: {
+           "Iron Ore": 1,
+           "Pure Iron Ore": 9
```

#### 11. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L303-L338` → after: `L2400-L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2400-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2400-L2407) · [Before (L303-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L303-L338)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "luckyBedwars"
-           }
-         }
-       }, {
-         author: "Slushie",
-         date: new Date("2026-09-29T12:00:00Z"),
-         title: "Stairs!!!",
-         description: "At long last, stairs are finally here!\nThey have collision, just like stairs should do!\nDid you know, slabs also have half-block collision?\nUse them in your builds!",
-         image: "stairs.jpg"
-       }, {
-         author: ["JBL", "AnxietreeDev"],
- ... (20 more removed lines; see GitHub link above)
+         tiers: mc
+       }, {
+         id: "gold",
+         category: "mining",
+         item: "Raw Gold",
+         blocks: {
+           "Gold Ore": 1,
+           "Pure Gold Ore": 9
```

#### 12. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L340-L370` → after: `L2409-L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2409-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2409-L2416) · [Before (L340-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L340-L370)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Go to Parkour Place",
-           action: {
-             type: "navigate",
-             to: "/place/parkourPlace"
-           }
-         }
-       }, {
-         date: new Date("2026-09-22T12:00:00Z"),
-         title: "Oasis Biome",
-         image: "oasis_biome.jpg",
-         author: "Slushie",
-         description: "Discover a new oasis biome in Sandbox, with big palm trees, and lakes surrounded by lush grass!\n \u2022 Hop across lily pads that you can stand on!\n \u2022 Tame and saddle a camel, then bring a friend along for the ride! Two people can ride on a camel.\n \ … [truncated]
-         callToAction: {
-           color: "blue",
- ... (15 more removed lines; see GitHub link above)
+         tiers: mc
+       }, {
+         id: "diamond",
+         category: "mining",
+         item: "Diamond",
+         blocks: {
+           "Diamond Ore": 1,
+           "Pure Diamond Ore": 9
```

#### 13. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L372-L388` → after: `L2418-L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2418-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2418-L2425) · [Before (L372-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L372-L388)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "bedwars_duo"
-           }
-         }
-       }, {
-         date: new Date("2026-09-10T12:00:00Z"),
-         title: "New Bedwars Map: Blossom! \ud83c\udf38",
-         description: "Redesigned, revamped and rebalanced! Back from its brief spotlight as a permanent addition - play now in Squads and Trios!",
-         image: "bedwars_blossom.jpg",
-         author: "AnxietreeDev",
-         mobileNotification: {
-           title: "New Bedwars Map: Blossom! \ud83c\udf38",
- ... (1 more removed lines; see GitHub link above)
+         tiers: Rc
+       }, {
+         id: "moonstone",
+         category: "mining",
+         item: "Moonstone",
+         blocks: {
+           "Moonstone Ore": 1,
+           "Pure Moonstone Ore": 9
```

#### 14. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L390-L411` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2427) · [Before (L390-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L390-L411)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
-       }, {
-         date: new Date("2026-09-09T12:00:00Z"),
-         title: "Featured Game: The Dark!",
-         description: "We are featuring The Dark as a really cool custom game we like! Play it to see what all the hype is about!",
-         image: "the_dark.jpg",
-         author: "Harry",
-         callToAction: {
-           color: "blue",
- ... (6 more removed lines; see GitHub link above)
+         tiers: Rc
```

#### 15. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L413-L420` → after: `L2429-L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2429-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2429-L2433) · [Before (L413-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L413-L420)

```diff
-         date: new Date("2026-09-04T12:00:00Z"),
-         title: "Bedwars Arena Collapse! \ud83d\udd25",
-         description: "No more late game stalling - towards the end of the match the arena will now start collapsing from the edges inwards until only the void is left.\n \u2022 Beds, generators and shops caught by the collapse are destroyed\n \u2022 Watch the countdown and stay i … [truncated]
-         image: "bedwars_arena_collapse.jpg",
-         author: "pegasys",
-         mobileNotification: {
-           title: "Bedwars Arena Collapse! \ud83d\udd25",
-           body: "Late game, the arena now collapses from the edges - no more stalling!"
+         id: "stone",
+         category: "mining",
+         item: "Stone",
+         blocks: {
+           Stone: 1
```

#### 16. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L422-L429` → after: `L2435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2435) · [Before (L422-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L422-L429)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Play now!",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
+         tiers: kc
```

#### 17. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L431-L438` → after: `L2437-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2437-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2437-L2441) · [Before (L431-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L431-L438)

```diff
-         date: new Date("2026-08-27T12:00:00Z"),
-         title: "New Bedwars Map: Enchanted! \u2728",
-         description: "Play now in Squads and Trios",
-         image: "bedwars_enchanted.jpg",
-         author: "Harry",
-         mobileNotification: {
-           title: "New Bedwars Map: Enchanted! \u2728",
-           body: "Play the new Bedwars map - Enchanted!"
+         id: "wheat",
+         category: "farming",
+         item: "Wheat",
+         blocks: {
+           "Wheat|FreshlyGrown": 1
```

#### 18. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L440-L447` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2443) · [Before (L440-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L440-L447)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
+         tiers: jc
```

#### 19. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L449-L456` → after: `L2445-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2445-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2445-L2449) · [Before (L449-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L449-L456)

```diff
-         date: new Date("2026-08-21T12:00:00Z"),
-         title: "Bedwars Mutations! \ud83e\uddec",
-         description: "Four new Bedwars mutations, picked on the map vote:\n \u2022 Treasure Guardians - Guardians protect the Diamond and Moonstone generators.\n \u2022 Weapon Roulette - every respawn rolls you a new random weapon.\n \u2022 Specialists - your chosen role grants r … [truncated]
-         image: "bedwars_mutations.jpg",
-         author: "pegasys",
-         mobileNotification: {
-           title: "Bedwars Mutations! \ud83e\uddec",
-           body: "Four new mutations - Guardians, random weapons, role perks and faster ores!"
+         id: "carrot",
+         category: "farming",
+         item: "Carrot",
+         blocks: {
+           "Carrot Plant|FreshlyGrown": 1
```

#### 20. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L458-L505` → after: `L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2451) · [Before (L458-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L458-L505)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Play now!",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
-         }
-       }, {
-         date: new Date("2026-08-14T12:00:00Z"),
-         title: "Miner's Delight! \u26cf\ufe0f \n Bedwars",
-         description: "A new Bedwars mutation!\n\n Ores respawn twice as fast, and have a 50% chance of dropping double.\n\n Look for it on the map vote.",
-         image: "bedwars_miners_delight.png",
-         author: "pegasys",
-         callToAction: {
-           color: "blue",
- ... (32 more removed lines; see GitHub link above)
+         tiers: jc
```

#### 21. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L507-L514` → after: `L2453-L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2453-L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2453-L2457) · [Before (L507-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L507-L514)

```diff
-         date: new Date("2026-07-21T13:00:00Z"),
-         title: "Frontline - Missile Silo! \ud83d\ude80",
-         image: "missile_silo_map.jpg",
-         description: "The front has a second battlefield - a hidden mountain missile facility!\n \u2022 Maps now rotate every round: Shipment and Missile Silo back to back\n \u2022 Play with your friends in parties or solo\n \u2022 Earn brand new kits, like the Demon Ripper and W … [truncated]
-         author: ["Harry", "ellie"],
-         mobileNotification: {
-           title: "The new Missile Silo map for Frontline is here!",
-           body: "Fight it out on a brand new map!"
+         id: "potato",
+         category: "farming",
+         item: "Raw Potato",
+         blocks: {
+           "Potato Plant|FreshlyGrown": 1
```

#### 22. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L516-L523` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2459) · [Before (L516-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L516-L523)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Storm the frontline!",
-           action: {
-             type: "playGame",
-             game: "frontline"
-           }
-         }
+         tiers: jc
```

#### 23. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L525-L532` → after: `L2461-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2461-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2461-L2465) · [Before (L525-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L525-L532)

```diff
-         date: new Date("2026-07-20T13:00:00Z"),
-         title: "Slimes and Night are in Survival! \ud83c\udf19",
-         image: "day_night_slime.jpg",
-         description: "Will tamed slimes help you survive the night?\n \u2022 Day & Night is now enabled by default in survival\n \u2022 New rare slime mobs with bright slime trails\n \u2022 New mob settings for custom game devs",
-         author: ["Harry", "Tom"],
-         mobileNotification: {
-           title: "Slimes and Day & Night in Survival!",
-           body: "Survival is bigger than ever!"
+         id: "beetroot",
+         category: "farming",
+         item: "Beetroot",
+         blocks: {
+           "Beetroot Plant|FreshlyGrown": 1
```

#### 24. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L534-L541` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2467) · [Before (L534-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L534-L541)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Try it now!",
-           action: {
-             type: "playGame",
-             game: "classic_survival"
-           }
-         }
+         tiers: mc
```

#### 25. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L543-L550` → after: `L2469-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2469-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2469-L2473) · [Before (L543-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L543-L550)

```diff
-         date: new Date("2026-07-15T09:00:00Z"),
-         title: "Containment Breach - New Anomalies! \ud83e\uddea",
-         image: "containmentBreachBroodfather.jpg",
-         description: 'Two new anomalies just breached containment:\n \u2022 ANOM-0808 "Broodfather" \ud83e\udddf - spawns zombies faster than you can kill them, and the corpses explode. Don\'t stand near the bodies!\n \u2022 ANOM-1033 "Deadlock" \ud83d\udca3 - the room is rigged  … [truncated]
-         author: "ellie",
-         mobileNotification: {
-           title: "Containment Breach update \ud83e\uddea",
-           body: "Face the Broodfather & Deadlock, and build your perfect loadout!"
+         id: "melon",
+         category: "farming",
+         item: "Melon",
+         blocks: {
+           Melon: 1
```

#### 26. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L552-L559` → after: `L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2475) · [Before (L552-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L552-L559)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Fight the new anomalies!",
-           action: {
-             type: "playGame",
-             game: "containmentBreach"
-           }
-         }
+         tiers: kc
```

#### 27. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L561-L568` → after: `L2477-L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2477-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2477-L2481) · [Before (L561-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L561-L568)

```diff
-         date: new Date("2026-07-08T09:00:00Z"),
-         title: "Bedwars ranked 1v1 and new 4v4 map",
-         image: "4v4_interchange.jpg",
-         description: "New ranked Bedwars mode for 1v1! \u2694\ufe0f\nSmaller map and faster pace, no teammates to blame now.\n\nAnd try out the new 4v4 map, Interchange! \ud83d\ude97\n\nAlso includes quality of life changes:\n \u2022 Win streak system\n \u2022 MVP system\n \u2022 … [truncated]
-         author: ["Harry", "jasninus", "pixelbaker"],
-         mobileNotification: {
-           title: "Play 1v1 Bedwars now!",
-           body: "Also try out new 4v4 Map: Interchange! \u2694\ufe0f"
+         id: "watermelon",
+         category: "farming",
+         item: "Watermelon",
+         blocks: {
+           Watermelon: 1
```

#### 28. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L570-L577` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2483) · [Before (L570-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L570-L577)

```diff
-         callToAction: {
-           color: "blue",
-           label: "Play 1v1 now!",
-           action: {
-             type: "playGame",
-             game: "bedwars_1v1"
-           }
-         }
+         tiers: kc
```

#### 29. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L579-L600` → after: `L2485-L2489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2485-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2485-L2489) · [Before (L579-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L579-L600)

```diff
-         date: new Date("2026-07-06T09:00:00Z"),
-         title: "Frontline \u2694\ufe0f vs Containment Breach \ud83e\uddea",
-         image: "FrontlineVContainmentBreach.png",
-         description: "Two new games are here, with two completely different fights. Which one's your favorite?\nFrontline \u2694\ufe0f :\n \u2022 Classic all-out warfare on a massive scale\n \u2022 Grab a vehicle, capture points for your team, and earn new powerful kits!\nContain … [truncated]
-         author: ["ellie", "Harry"],
-         mobileNotification: {
-           title: "Two new squad shooters \u2694\ufe0f\ud83e\uddea",
-           body: "Frontline 12v12 war or co-op Containment Breach - pick your fight!"
-         }
-       }, {
-         date: new Date("2026-07-01T09:00:00Z"),
-         title: "New Pirates map \ud83c\udff4\u200d\u2620\ufe0f",
-         description: "Play the new Pirates map - Dynasty Docks!",
-         image: "dynasty_docks.jpg",
-         author: "Harry",
-         callToAction: {
- ... (6 more removed lines; see GitHub link above)
+         id: "maple_log",
+         category: "foraging",
+         item: "Maple Log",
+         blocks: {
+           "Maple Log": 1
```

#### 30. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L602-L605` → after: `L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2491) · [Before (L602-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L602-L605)

```diff
-         mobileNotification: {
-           title: "New Pirates map \ud83c\udff4\u200d\u2620\ufe0f",
-           body: "Play the new Pirates map - Dynasty Docks!"
-         }
+         tiers: kc
```

#### 31. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L607-L618` → after: `L2493-L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2493-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2493-L2497) · [Before (L607-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L607-L618)

```diff
-         date: new Date("2026-06-23T12:00:00Z"),
-         title: "\ud83d\udfe8Backrooms Update!\ud83d\udfe8",
-         description: "Backrooms just got deadlier - escaping isn't always as simple as finding the blue room.\n\u2022 Meet the Crone: a new hostile mob that charges at you and hits hard \ud83d\udc80\n\u2022 Floor exits can now be locked - search the level for keys before you can  … [truncated]
-         image: "backrooms_crone_keys.png",
-         author: "pegasys",
-         callToAction: {
-           color: "blue",
-           label: "Play Backrooms!",
-           action: {
-             type: "playGame",
-             game: "backrooms"
-           }
+         id: "pear_log",
+         category: "foraging",
+         item: "Pear Log",
+         blocks: {
+           "Pear Log": 1
```

#### 32. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L620-L651` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2499) · [Before (L620-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L620-L651)

```diff
-         mobileNotification: {
-           title: "\ud83d\udfe8New Mob in the Backrooms!\ud83d\udfe8",
-           body: "the Crone now walks the endless halls, and some exits now have keys! \ud83d\udc80\ud83d\udd11"
-         }
-       }, {
-         date: new Date("2026-06-23T11:00:00Z"),
-         title: "One Block new skill and rotating trader!",
-         description: "Try out the Farming skill in One Block! \ud83c\udf3e\nWhile farming, you now sometimes get gold crops \ud83e\ude99\nActivate the skill to grow and harvest everything around you \ud83e\uddd1\u200d\ud83c\udf3e\nOther skills have also been reworked slightly.\n\ … [truncated]
-         image: "one_block_skills_rework.jpg",
-         author: ["jasninus"],
-         callToAction: {
-           color: "blue",
-           label: "Try it now!",
-           action: {
-             type: "playGame",
-             game: "oneBlock"
- ... (16 more removed lines; see GitHub link above)
+         tiers: mc
```

#### 33. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L653-L678` → after: `L2501-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2501-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2501-L2505) · [Before (L653-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L653-L678)

```diff
-         date: new Date("2026-06-22T12:00:00Z"),
-         title: "\u2694\ufe0f New Weapons in PvP Civilisation! \u2694\ufe0f",
-         description: "Pick your loadout at the Weaponmaster in the safe zone!\n\u2022 Sword: Balanced reach and speed - the all-rounder\n\u2022 Axe: Slow swing, heavy hits\n\u2022 Spear: Long reach plus a dash - difficult to master but rewarding\n\u2022 Dagger: Fast combos and ba … [truncated]
-         image: "pvp_civ_weapons.png",
-         author: "pegasys",
-         callToAction: {
-           color: "blue",
-           label: "Try it now!",
-           action: {
-             type: "playGame",
-             game: "pvpCiv"
-           }
-         }
-       }, {
-         date: new Date("2026-06-12T14:00:00Z"),
-         title: "Go to the moon! \ud83d\ude80\ud83c\udf15",
- ... (10 more removed lines; see GitHub link above)
+         id: "palm_log",
+         category: "foraging",
+         item: "Palm Log",
+         blocks: {
+           "Palm Log": 1
```

#### 34. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L680-L1982` → after: `L2507-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2507-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L2507-L6149) · [Before (L680-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L680-L1982)

```diff
-         mobileNotification: {
-           title: "Go to the moon! \ud83d\ude80\ud83c\udf15",
-           body: "You can now go to the moon in Build a Factory \ud83c\udfed"
-         }
-       }, {
-         date: new Date("2026-06-11T14:00:00Z"),
-         title: "Chunklock Protectors!\ud83d\udd10",
-         description: "Chunklock now has Protectors! Place a Protector block to protect your chunk from attackers\ud83d\udee1\ufe0f\nBut you need to fuel your Protectors to keep them protected from attackers\ud83d\udd25\nAttackers can raid your Protectors if they are willing to do … [truncated]
-         image: "chunklock_thumbnail.jpg",
-         author: ["pixelbaker", "jasninus"]
-       }, {
-         date: new Date("2026-06-10T13:00:00Z"),
-         title: "Chunklock is here!\ud83d\udd13",
-         description: "In Chunklock, you have to unlock every chunk first!\nMine, gather, and pay to crack open each chunk and claim the next.",
-         image: "chunklock_thumbnail.jpg",
-         author: ["pixelbaker", "jasninus"],
- ... (1287 more removed lines; see GitHub link above)
+         tiers: mc
+       }, Cc("wheatfish", "Wheatfish"), Cc("darter", "Darter"), Cc("sunset_minnow", "Sunset Minnow"), Cc("root_flounder", "Root Flounder"), Cc("greenfin_loach", "Greenfin Loach"), Cc("red_strongfish", "Red Strongfish"), Cc("green_strongfish", "Green Strongfish"), Cc("boomerang_fis … [truncated]
+         id: "rotten_flesh",
+         category: "combat",
+         item: "Rotten Flesh",
+         drops: ["Rotten Flesh"],
+         tiers: kc
+       }, {
+         id: "rotten_brain",
+         category: "combat",
+         item: "Rotten Brain",
+         drops: ["Rotten Brain"],
+         tiers: Rc
+       }, {
+         id: "iron_fragment",
+         category: "combat",
+ ... (3627 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L1984-L2008` → after: `L6151-L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L6151-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L6151-L6190) · [Before (L1984-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L1984-L2008)

```diff
-       }, {
-         date: new Date("2025-07-29T10:00:00Z"),
-         title: "Fruity Leaves!",
-         description: "Fruity Trees now have Fruity Leaves! No more guessing which Maple leaf has an Apple, or which Palm leaf has a Coconut - you can just pluck the fruit you want! And they make for pretty cool building blocks, too.",
-         image: "fruity_leaves.jpg",
-         author: "Dirty Flea Sack"
-       }, {
-         date: new Date("2025-07-24T14:00:00Z"),
-         title: "Custom Lobby Roles!",
-         description: "You can now promote (and demote) players in your custom lobbies! Co-Owners can use World Builder, edit Code Blocks and manage other world settings. Moderators can kick, ban and unban players. More custom-lobby upgrades coming soon!",
-         image: "world_roles.jpg",
-         author: "Dirty Flea Sack"
-       }, {
-         date: new Date("2025-07-16T14:48:00Z"),
-         title: "Solos/Duos Bedwars Map!",
-         description: "Try the new Bedwars map: Siege!",
- ... (9 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function RI(pp, ip, cp) {
+       return dI(mI, pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
+     }
+ 
+     function qI(pp) {
+       return "number" === typeof pp ? [pp, pp] : pp
+     }
+ 
+     function MI(pp, ip, cp) {
+       const {
+         rise: Op = 0,
+         shift: op = 0,
+         torso: Ip = 0,
+ ... (24 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2010-L2022` → after: `L6192-L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L6192-L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L6192-L6241) · [Before (L2010-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L2010-L2022)

```diff
-       }, {
-         date: new Date("2025-07-14T11:00:00Z"),
-         title: "Rocket Obby Map!",
-         description: "New rocket obby map! It's a bit harder than the original map, try it out now!",
-         image: "rocket_parkour_january.jpg",
-         author: "Tom",
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "rocketParkour_january"
-           }
+       }
+     }
+     const CI = [1.0625, -1, 0];
+ 
+     function EI(pp) {
+       return "number" === typeof pp ? [pp, pp] : pp
+     }
+ 
+     function XI(pp, ip, cp) {
+       const {
+         drop: Op = 0,
+         shift: op = 0,
+         torso: Ip = 0,
+         tilt: Sp = 0,
+         nod: xp = 0,
+         cock: Lp = 0,
+ ... (34 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2024-L2031` → after: `L6243-L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L6243-L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L6243-L9030) · [Before (L2024-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L2024-L2031)

```diff
-       }, {
-         date: new Date("2025-07-14T10:00:00Z"),
-         title: "\ud83d\udcf2 iOS Mobile App",
-         description: "Bloxd.io has landed on the Apple App Store! Download it by clicking the button below or searching bloxd.io on the Apple App Store! Please leave us a review if you enjoy playing bloxd!",
-         image: "AppleAppQRCode.jpg",
-         onClickImage: {
-           type: "openUrl",
-           url: "https://apps.apple.com/gb/app/bloxd-io/id6720761703"
+       }
+     }
+     var lI = cp(37395),
+       QI = cp(38690),
+       JI = cp(38856);
+ 
+     function BI(pp, ip, cp) {
+       var Op, op;
+       const Ip = function() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+           return pp + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - pp) * cp
+         },
+         [Sp, xp] = null !== (Op = pp.legs) && void 0 !== Op ? Op : [0, 0],
+         [Lp, Yp] = null !== (op = ip.legs) && void 0 !== op ? op : [0, 0];
+       return {
+         drop: Ip(pp.drop, ip.drop),
+ ... (2772 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2033-L2097` → after: `L9032-L9263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R9032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L9032-L9263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L9032-L9263) · [Before (L2033-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L2033-L2097)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on the Apple App Store",
-           action: {
-             type: "openUrl",
-             url: "https://apps.apple.com/gb/app/bloxd-io/id6720761703"
-           }
-         }
-       }, {
-         date: new Date("2025-07-03T13:00:00Z"),
-         title: "Jungle Update!",
-         description: "Jungle biomes can now be found in Bloxd! Explore the dense foliage to find jungle ruins, mango trees, wildcats and gorillas! You can tame wildcats with meat, and they'll get the zoomies if you feed them a very special plant... The gorillas may look friendly, … [truncated]
-         image: "jungle.jpg",
-         author: "Dirty Flea Sack",
-         callToAction: {
- ... (49 more removed lines; see GitHub link above)
+         role: "status",
+         "aria-live": "polite",
+         children: [(0, Bo.jsx)("div", {
+           className: "SkyblockPortalTransitVeil",
+           "aria-hidden": "true"
+         }), (0, Bo.jsx)("div", {
+           className: "SkyblockPortalTransitRim",
+           "aria-hidden": "true",
+           onAnimationEnd: () => {
+             ip.finishArrival(Op.token)
+           }
+         }), (0, Bo.jsxs)("div", {
+           className: "SkyblockPortalTransitTitle",
+           children: [(0, Bo.jsx)("div", {
+             className: "SkyblockPortalTransitBand",
+             "aria-hidden": "true"
+ ... (216 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2099-L2145` → after: `L9265-L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L9265-L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L9265-L9427) · [Before (L2099-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L2099-L2145)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on Play Store",
-           action: {
-             type: "openUrl",
-             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
-           }
-         }
-       }, {
-         date: new Date("2025-05-30T12:00:00Z"),
-         title: "Knight Sword, Golem Pickaxe and Fur Armour!",
-         description: "A bunch of new items have dropped in Bloxd! Draugr Knights now carry a new sword - it's more powerful than a Diamond Sword, and it has knockback too! Golems now drop Golem Eyes, which can be used to craft a Golem Pickaxe. This special pickaxe has a chance to … [truncated]
-         image: "unique_tools_and_armour.jpg",
-         author: "Dirty Flea Sack"
-       }, {
- ... (31 more removed lines; see GitHub link above)
+         role: "status",
+         "aria-live": "polite",
+         children: [(0, Bo.jsx)("div", {
+           className: "SkyblockDailyRewardGlow",
+           "aria-hidden": "true"
+         }), (0, Bo.jsxs)("div", {
+           className: "SkyblockDailyRewardCard",
+           children: [(0, Bo.jsxs)("div", {
+             className: "SkyblockDailyRewardHeading",
+             children: [(0, Bo.jsx)("span", {
+               className: "SkyblockDailyRewardTitle",
+               children: cp("skyblockGame:dailyRewardTitle")
+             }), (0, Bo.jsx)("span", {
+               className: "SkyblockDailyRewardDay",
+               children: cp("skyblockGame:dailyRewardDay", {
+                 day: String(ip.day)
+ ... (147 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2147-L2773` → after: `L9429-L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R9429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L9429-L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L9429-L9464) · [Before (L2147-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L2147-L2773)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on Play Store",
-           action: {
-             type: "openUrl",
-             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
-           }
-         }
-       }, {
-         date: new Date("2025-05-02T12:00:00Z"),
-         title: "Frozen Badlands!",
-         description: "Hostile mobs have made their way to the surface... and they've brought a new biome with them - the Frozen Badlands! Explore this new biome to find a new tree type, new blocks, and new mobs. Pay special attention for the Draugr Knight, which will now spawn de … [truncated]
-         image: "frozen_badlands.jpg",
-         author: "Dirty Flea Sack",
-         callToAction: {
- ... (611 more removed lines; see GitHub link above)
+         role: "status",
+         "aria-live": "polite",
+         children: (0, Bo.jsxs)("div", {
+           className: "SkyblockMailboxCard",
+           children: [(0, Bo.jsxs)("div", {
+             className: "SkyblockMailboxHeading",
+             children: [(0, Bo.jsx)(ux, {
+               letterCount: ip.letters.length
+             }), (0, Bo.jsx)("span", {
+               className: "SkyblockMailboxTitle",
+               children: cp("skyblockGame:mailboxTitle")
+             })]
+           }), (0, Bo.jsx)("ol", {
+             className: "SkyblockMailboxLetters",
+             children: ip.letters.map(((pp, ip) => (0, Bo.jsx)(jx, {
+               letter: pp,
+ ... (20 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2776-L2779` → after: `L9467-L11133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L9467-L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/192.js#L9467-L11133) · [Before (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/192.js#L2776-L2779)

```diff
-       const zD = Date.now();
-       let wD = null;
-       for (const pD of rD) pD.date.getTime() > zD || DD && !DD(pD) || (!wD || pD.date.getTime() > wD.date.getTime()) && (wD = pD);
-       return wD
+       let {
+         controller: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, Qo.H)(), Op = (0, Jo.i)(hO, ip.getSnapshot());
+       if (null === Op) return null;
+       const op = Op.fullSet ? "empty" === Op.fuelState ? {
+         text: cp("skyblockGame:magmawardHudNoFuel"),
+         tone: "empty"
+       } : null : {
+         text: cp("skyblockGame:magmawardHudFullSet", {
+           worn: String(Op.wornCount)
+         }),
+         tone: "partial"
+       };
+ ... (1651 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/193.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/193.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2)

#### 1. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L9170` → after: `L4-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L4-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L4-L431) · [Before (L4-L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L4-L9170)

```diff
-   34066: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(DD, zD, wD) {
-               DD.exports = wD(7588)
-             },
-             5036: function(DD, zD, wD) {
-               wD(1719), wD(5677), wD(6394), wD(5334), wD(6969), wD(2021), wD(8328), wD(2129);
-               var pD = wD(1287);
-               DD.exports = pD.Promise
-             },
-             2582: function(DD, zD, wD) {
-               wD(1646), wD(6394), wD(2004), wD(462), wD(8407), wD(2429), wD(1172), wD(8288), wD(1274), wD(8201), wD(6626), wD(3211), wD(9952), wD(15), wD(9831), wD(7521), wD(2972), wD(6956), wD(5222), wD(2257);
-               var pD = wD(1287);
- ... (9151 more removed lines; see GitHub link above)
+   39310: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
+     });
+     class Op {
+       constructor(pp, ip) {
+         this.read = pp, this.apply = ip, this.release = null
+       }
+       turn(pp, ip) {
+         const cp = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: ip,
+           forcedCameraDirection: [pp[0], pp[1], pp[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+ ... (412 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L9172-L9442` → after: `L433-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L433-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L433-L667) · [Before (L9172-L9442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L9172-L9442)

```diff
-           var Zp = function(DD, wD) {
-               void 0 === wD && (wD = {}), zD.Kn(wD) || (wD = {});
-               var pD = DD ? DD.split("?") : [];
-               if (pD.shift(), pD.length > 0)
-                 for (var sD, KD = Wp(pD = pD.join("?").split("&")); !(sD = KD()).done;) {
-                   var rD = sD.value.split("=");
-                   try {
-                     wD[rD[0]] = decodeURIComponent(rD[1])
-                   } catch (DD) {
-                     wD[rD[0]] = rD[1]
-                   }
-                 }
-               return wD
-             },
-             yp = function(DD, wD) {
-               var pD = "";
- ... (255 more removed lines; see GitHub link above)
+         }
+         this.clampOffsets(cp)
+       }
+       clampOffsets(pp) {
+         if (pp.maxYaw >= 180) this.yawOffset = (0, op.B)(0, this.yawOffset);
+         else {
+           const ip = (0, Dp.o)(pp.maxYaw);
+           this.yawOffset = Math.max(-ip, Math.min(ip, this.yawOffset))
+         }
+         const ip = (0, Dp.o)(pp.maxPitch);
+         this.pitchOffset = Math.max(-ip, Math.min(ip, this.pitchOffset))
+       }
+       apply(pp, ip) {
+         this.pointedAt && this.limits && (this.yawOffset = (0, op.B)(pp.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - pp.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
+         const cp = (0, op.l)(pp.pitch + this.pitchOffset);
+         this.pitchOffset = cp - pp.pitch, ip.heading = (0, op.y)(pp.heading + this.yawOffset), ip.pitch = cp
+ ... (219 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L9574-L9694` → after: `L670-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L670-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L670-L1169) · [Before (L9574-L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L9574-L9694)

```diff
-           }
-           qp.origFetch = fetch;
-           var zs = function(DD) {
-               return DD instanceof Blob ? DD.type : DD instanceof FormData ? "multipart/form-data" : DD instanceof URLSearchParams ? "application/x-www-form-urlencoded;charset=UTF-8" : "text/plain;charset=UTF-8"
-             },
-             ws = function() {
-               function DD(DD) {
-                 this.onUpdateCallback = void 0, this.onUpdateCallback = DD
-               }
-               return DD.prototype.apply = function(DD, zD, wD) {
-                 var pD = wD[0],
-                   sD = wD[1],
-                   KD = new ep,
-                   rD = mp(pD);
-                 if (KD.method = "POST", KD.url = pD, KD.name = (rD.pathname.split("/").pop() || "") + rD.search, KD.requestType = "ping", KD.requestHeader = {
-                     "Content-Type": zs(sD)
- ... (105 more removed lines; see GitHub link above)
+           }(cp >= 0 ? this.nodes[cp].position : null, pp.position, Op >= 0 ? this.nodes[Op].position : null, this.prevGaps[ip], this.nextGaps[ip], [0, 0, 0])
+         })), this.aim = new Cp(this.nodes, this.velocities, this.prevNodes, this.nextNodes, ip)
+       }
+       sample(pp, ip, cp, Op) {
+         const op = this.findSegment(this.pathTime(pp));
+         this.samplePosition(op, Op.position), this.aim.sample(op, ip, Op);
+         const {
+           beforeIndex: Ip,
+           afterIndex: Sp
+         } = op;
+         Op.fov = qp(op, Ip >= 0 ? this.fovAt(Ip, cp) : 0, this.fovAt(op.index, cp), this.fovAt(op.toIndex, cp), Sp >= 0 ? this.fovAt(Sp, cp) : 0, Ip >= 0, Sp >= 0)
+       }
+       pathTime(pp) {
+         const ip = this.nodes[0].timeMs;
+         if (this.loopMs <= 0 || pp <= ip) return pp;
+         const cp = pp - ip;
+ ... (484 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L9696-L10295` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L1171-L1173) · [Before (L9696-L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L9696-L10295)

```diff
-           var As = Ls;
- 
-           function Us(DD, zD, wD) {
-             var pD = DD.slice();
-             return pD[11] = zD[wD][0], pD[12] = zD[wD][1], pD
-           }
- 
-           function fs(DD, zD, wD) {
-             var pD = DD.slice();
-             return pD[11] = zD[wD][0], pD[12] = zD[wD][1], pD
-           }
- 
-           function Is(DD, zD, wD) {
-             var pD = DD.slice();
-             return pD[11] = zD[wD][0], pD[12] = zD[wD][1], pD
-           }
- ... (584 more removed lines; see GitHub link above)
+         case "follow":
+           return {
+             ...pp, ...Ip, target: "string" === typeof pp.target ? pp.target : void 0, lookAt: Dp(pp.lookAt), offset: (Pp = pp.offset, Array.isArray(Pp) ? [xp(Pp[0], -Op.j.maxOffset, Op.j.maxOffset, 0), xp(Pp[1], -Op.j.maxOffset, Op.j.maxOffset, 0), xp(Pp[2], -Op.j.maxOffset, Op.j … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L10297-L10438` → after: `L1175-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1175-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L1175-L1229) · [Before (L10297-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L10297-L10438)

```diff
-           var Fs = as;
- 
-           function Ys(DD, zD, wD) {
-             var pD = DD.slice();
-             return pD[8] = zD[wD], pD
-           }
- 
-           function Hs(DD, zD, wD) {
-             var pD = DD.slice();
-             return pD[11] = zD[wD], pD
-           }
- 
-           function qs(DD) {
-             var zD, wD, pD, sD = DD[0].nodeType === Node.ELEMENT_NODE && DK(DD),
-               KD = DD[0].nodeType === Node.TEXT_NODE && AK(DD);
-             return {
- ... (126 more removed lines; see GitHub link above)
+         case "path":
+           return {
+             ...pp, ...Ip, keyframes: jp(pp.keyframes)
+           };
+         case "frame":
+           return {
+             ...pp, ...Ip, targets: Wp(pp.targets), viewHeading: Lp(pp.viewHeading, -Op.j.maxFrameHeading, Op.j.maxFrameHeading), viewElevation: Lp(pp.viewElevation, 0, Op.j.maxFrameElevation), padding: Lp(pp.padding, 0, Op.j.maxFrameDistance), closestDistance: Lp(pp.closestDistan … [truncated]
+           };
+         default:
+           return cp
+       }
+     }
+   },
+   38883: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => xp
+ ... (39 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L10440-L10955` → after: `L1231-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1231-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L1231-L1253) · [Before (L10440-L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L10440-L10955)

```diff
-             return {
-               c: function() {
-                 zD = (0, rD.fLW)("\xa0\n            "), KD.c(), wD = (0, rD.cSb)()
-               },
-               m: function(DD, pD) {
-                 (0, rD.$Tr)(DD, zD, pD), KD.m(DD, pD), (0, rD.$Tr)(DD, wD, pD)
-               },
-               p: function(DD, zD) {
-                 sD === (sD = pD(DD)) && KD ? KD.p(DD, zD) : (KD.d(1), (KD = sD(DD)) && (KD.c(), KD.m(wD.parentNode, wD)))
-               },
-               d: function(DD) {
-                 DD && (0, rD.ogt)(zD), KD.d(DD), DD && (0, rD.ogt)(wD)
-               }
-             }
-           }
- 
- ... (500 more removed lines; see GitHub link above)
+             if (null !== ip && Math.abs(ip - cp) <= .5 && pp.font.toLowerCase().includes(Sp.toLowerCase())) return Op
+           }
+           return null
+         }(pp, [Up, ...wp], Wp);
+         tp !== Up && function(pp, ip, Op) {
+           Sp || (Sp = !0, Promise.resolve().then((() => cp(1080))).then((cp => {
+             let {
+               NU: op
+             } = cp;
+             op(new Error("A canvas didn't take canvasTxt's font"), {
+               font: pp,
+               aW: ip,
+               drawnWith: null !== Op && void 0 !== Op ? Op : "the kept font, scaled"
+             })
+           })).catch((() => {})))
+         }(Up, vp, tp);
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L10957` → after: `L1255-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L1255-L1256) · [Before (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L10957)

```diff
-             return DD
+           } finally {
+             pp.restore()
```

#### 8. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L10959-L10974` → after: `L1258-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1258-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L1258-L1436) · [Before (L10959-L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L10959-L10974)

```diff
-           var PK = function(DD) {
-               if (!DD || 0 === DD.length) return {};
-               for (var zD = {}, wD = DD.split(";"), pD = 0; pD < wD.length; pD++) {
-                 var sD = wD[pD].indexOf("=");
-                 if (!(sD < 0)) {
-                   var KD = wD[pD].substring(0, sD).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
-                     rD = wD[pD].substring(sD + 1, wD[pD].length);
-                   try {
-                     KD = decodeURIComponent(KD)
-                   } catch (DD) {}
-                   try {
-                     rD = decodeURIComponent(rD)
-                   } catch (DD) {}
-                   zD[KD] = rD
-                 }
-               }
+         }
+         return this.drawLines(pp, ip, Op, xp, Lp, Yp, Wp)
+       },
+       drawLines: function(pp, ip, cp, op, Ip, Sp, xp) {
+         const Lp = cp + Ip,
+           Yp = op + Sp;
+         let Dp, Ap = op + Sp / 2 + xp / 2;
+         "right" === this.align ? (Dp = Lp, pp.textAlign = "right") : "left" === this.align ? (Dp = cp, pp.textAlign = "left") : (Dp = cp + Ip / 2, pp.textAlign = "center");
+         for (const Op of ip) {
+           pp.measureText(Op).width >= Ip && (ip = ip.replace(Op, ""))
+         }
+         ip = (0, Op.P)(ip);
+         const Pp = [],
+           Wp = ip.split("\n"),
+           yp = this.justify ? pp.measureText("\u200a").width : 0;
+         Wp.forEach((ip => {
+ ... (163 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L10976-L11892` → after: `L1438-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1438-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/193.js#L1438-L1737) · [Before (L10976-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/193.js#L10976-L11892)

```diff
-             },
-             CK = function(DD, zD, wD) {
-               "undefined" != typeof document && void 0 !== document.cookie && (document.cookie = encodeURIComponent(DD) + "=" + encodeURIComponent(zD) + function(DD) {
-                 void 0 === DD && (DD = {});
-                 var zD = DD,
-                   wD = zD.path,
-                   pD = zD.domain,
-                   sD = zD.expires,
-                   KD = zD.secure,
-                   rD = zD.sameSite,
-                   LD = ["none", "lax", "strict"].indexOf((rD || "").toLowerCase()) > -1 ? rD : null;
-                 return [null == wD ? "" : ";path=" + wD, null == pD ? "" : ";domain=" + pD, null == sD ? "" : ";expires=" + sD.toUTCString(), void 0 === KD || !1 === KD ? "" : ";secure", null === LD ? "" : ";SameSite=" + LD].join("")
-               }(wD))
-             },
-             xK = function() {
-               return "undefined" == typeof document || void 0 === document.cookie ? "" : document.cookie
- ... (901 more removed lines; see GitHub link above)
+             }(yp.standing),
+             lp = Cp.find(Rp),
+             Qp = qp.find(Rp),
+             Jp = null === Xp || void 0 === lp ? null : {
+               value: lp.value,
+               rank: Xp.rank
+             },
+             Bp = vp(qp, void 0 === Qp || Qp.value === (null === Jp || void 0 === Jp ? void 0 : Jp.value) ? Jp : null),
+             Np = vp(Cp, Jp),
+             Tp = (pp, ip) => {
+               const cp = pp.findIndex(Rp);
+               return cp >= 0 ? ip[cp] : null
+             },
+             fp = null !== (Sp = null !== (Dp = null === Xp || void 0 === Xp ? void 0 : Xp.rank) && void 0 !== Dp ? Dp : Tp(Cp, Np)) && void 0 !== Sp ? Sp : Tp(qp, Bp);
+           pp.font = "bold 34px 'Jetbrains Mono', monospace";
+           const bp = [...Mp ? Bp : [], ...Ep ? [] : Np],
+ ... (284 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/194.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/194.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27)

#### 1. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L4)

```diff
-   34095: (DD, zD, wD) => {
+   34267: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L6-L8)

```diff
-       ALL_DEV_TOOLS: () => rD,
-       coreDevTools: () => gD,
-       devTools: () => cD
+       getLatestPublishedUpdateLog: () => xp,
+       updateLogsData: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L10-L22` → after: `L9-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L9-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L9-L118) · [Before (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L10-L22)

```diff
-     var pD = wD(638),
-       sD = wD(1309),
-       KD = wD(34103);
-     const rD = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function LD() {
-       const {
-         noaDevTools: DD
-       } = await wD.e(236).then((() => wD(40984)));
-       return DD
-     }
-     const cD = new class {
-         constructor() {
-           this.loadHost = LD, this.tools = rD
+     var Op = cp(817),
+       op = cp(322);
+     const Ip = "\xa0\xa0\xa0\xa0",
+       Sp = [{
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: op.n.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+ ... (94 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L24-L25` → after: `L120-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L120-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L120-L136) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L24-L25)

```diff
-         setHost(DD) {
-           this.tools = null === DD ? rD : DD.tools, this.loadHost = null === DD ? LD : async () => DD
+       }, {
+         author: ["januaryboy", "Oliver"],
+         date: new Date("2026-10-27T12:00:00Z"),
+         title: "New Texture Pack: January 16x16 \ud83c\udfa8",
+         description: "A brand new 16x16 texture pack by januaryboy, giving every block, crop and model a fresh, crisp look!\n\n Pick it in Settings > Texture Pack.",
+         image: "january_16x16_texture_pack.jpg",
+         onClickImage: {
+           type: "openSettings",
+           category: "texturePack"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "openSettings",
+             category: "texturePack"
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L27-L28` → after: `L138-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L138-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L138-L158) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L27-L28)

```diff
-         supports(DD) {
-           return this.tools.has(DD)
+       }, {
+         author: "pegasys",
+         date: new Date("2026-10-22T12:00:00Z"),
+         title: "New Game: Build a Factory 2 \ud83c\udfed",
+         description: "Your own floating island, your own factory!\n\n Mine ore in the Wilds below, automate it with machines and conveyor belts, and power up your Core to unlock new tech. Your factory keeps working even while you're away!",
+         image: "build_a_factory_2.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "buildAFactory2"
+         },
+         mobileNotification: {
+           title: "New Game: Build a Factory 2 \ud83c\udfed",
+           body: "Build machines on your own floating island and watch them work - even while you're away!"
+         },
+         callToAction: {
+           color: "blue",
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L30-L32` → after: `L160-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L160-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L160-L171) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L30-L32)

```diff
-         async downloadScene(DD, zD) {
-           const wD = await this.loadHost();
-           await wD.downloadScene(DD, zD)
+       }, {
+         date: new Date("2026-10-21T13:00:00Z"),
+         title: "Skyblock Official Trailer",
+         description: "We have released the official trailer for Bloxd Skyblock!",
+         youtubeVideoId: "A2LktM6_YFM",
+         callToAction: {
+           color: "blue",
+           label: "Watch on YouTube",
+           action: {
+             type: "openUrl",
+             url: "https://www.youtube.com/watch?v=A2LktM6_YFM"
+           }
```

#### 7. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L34-L36` → after: `L173-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L173-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L173-L189) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L34-L36)

```diff
-         async setAmbientLightIntensity(DD) {
-           const zD = await this.loadHost();
-           await zD.setAmbientLightIntensity(DD)
+       }, {
+         author: ["Dirty Flea Sack", "ellie", "Harry"],
+         date: Op.c,
+         title: "Skyblock: Cragrock Mines! \u26cf\ufe0f",
+         description: "A meteor has struck Cragrock Mines, and the dwarves need your help!\n\n Ride a cannon over a lava lake, drive a gold-mining drill and earn the trust of the wary Elder Crag. Finish Ruby's mining lessons in the Hub and she'll show you the way.",
+         image: "skyblock_cragrock_mines.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "skyblock"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Explore the mines",
+           action: {
+             type: "playGame",
+             game: "skyblock"
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L38-L39` → after: `L191-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L191-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L191-L225) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L38-L39)

```diff
-         async capturePhoto(DD, zD, wD) {
-           return (await this.loadHost()).capturePhoto(DD, zD, wD)
+       }, {
+         author: "Oliver",
+         date: new Date("2026-10-14T12:00:00Z"),
+         title: "Invite Your Friends! \ud83d\udce8",
+         description: "Invite a friend to your game or party from their profile, and they'll get a notification to join you.\n\n Missed one? Your invites wait in the Social menu until they expire.",
+         callToAction: {
+           color: "blue",
+           label: "Open Social",
+           action: {
+             type: "openMenu",
+             menu: op.n.SOCIAL
+           }
+         },
+         showPopupOnLoad: !1
+       }, {
+         author: ["JBL", "AnxietreeDev"],
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L41-L45` → after: `L227-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L227-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L227-L235) · [Before (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L41-L45)

```diff
-       },
-       gD = {
-         tools: KD.e,
-         downloadScene: async () => {
-           throw new Error("This client can't download the scene")
+       }, {
+         author: "pegasys",
+         date: new Date("2026-10-09T12:00:00Z"),
+         title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+         description: "Open Super Armour and Super Weapon lucky blocks to loot powerful new gear sets, each with its own special ability:\n \u2022 Spectral Armour - stand still to turn invisible.\n \u2022 Astral Armour - jump higher.\n \u2022 Magmasteel Weapons - set the ground un … [truncated]
+         image: "lucky_bedwars_gear_sets.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "luckyBedwars"
```

#### 10. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L47-L48` → after: `L237-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L237-L239) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L47-L48)

```diff
-         setAmbientLightIntensity: async () => {
-           throw new Error("This client can't set the ambient light")
+         mobileNotification: {
+           title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+           body: "Loot new armour and weapon sets with special abilities - turn invisible, set enemies on fire and more!"
```

#### 11. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L50-L51` → after: `L241-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L241-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L241-L1112) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L50-L51)

```diff
-         capturePhoto: async () => {
-           throw new Error("No game is drawing yet")
+         callToAction: {
+           color: "blue",
+           label: "Play now!",
+           action: {
+             type: "playGame",
+             game: "luckyBedwars"
+           }
+         }
+       }, {
+         author: ["Dirty Flea Sack", "ellie", "Harry", "AnxietreeDev"],
+         date: new Date("2026-10-07T08:00:00Z"),
+         title: "New Game: Skyblock!",
+         description: "Your Skyblock adventure begins! Complete quests, explore new islands and conquer dungeons in our new questing RPG!",
+         image: "skyblock_thumbnail_large.jpg",
+         onClickImage: {
+           type: "playGame",
+ ... (856 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L53-L56` → after: `L1114-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L1114-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/194.js#L1114-L2780) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/194.js#L53-L56)

```diff
-       };
-     pD.v && cD.setHost(gD), (0, sD.v)((() => {
-       cD.setHost(gD)
-     }))
+       }, {
+         date: new Date("2026-04-15T12:00:00Z"),
+         title: "Nuketown has been reworked",
+         description: "The Nuketown map has been completely remade from the ground up.\n\nTry it out now in Clutch and let us know what you think!",
+         image: "nuketown_rework.jpg",
+         author: ["Harry", "pegasys"],
+         callToAction: {
+           color: "blue",
+           label: "Try it out",
+           action: {
+             type: "playGame",
+             game: "clutch"
+           }
+         }
+       }, {
+         date: new Date("2026-04-10T15:02:00Z"),
+ ... (1651 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/195.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/195.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985)

#### 1. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L94` → after: `L4-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L4-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L4-L1013) · [Before (L4-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L4-L94)

```diff
-   36367: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       showOnboardingPopup: () => iD
-     });
-     var pD = wD(58),
-       sD = wD(1200),
-       KD = wD(1355),
-       rD = wD(1447),
-       LD = wD(4342),
-       cD = wD(1570),
-       gD = wD(1562),
-       RD = wD(2197),
-       AD = wD(1044),
-       UD = wD.n(AD),
-       fD = wD(1130),
-       ID = wD(36374),
- ... (75 more removed lines; see GitHub link above)
+   34271: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(pp, ip, cp) {
+               pp.exports = cp(7588)
+             },
+             5036: function(pp, ip, cp) {
+               cp(1719), cp(5677), cp(6394), cp(5334), cp(6969), cp(2021), cp(8328), cp(2129);
+               var Op = cp(1287);
+               pp.exports = Op.Promise
+             },
+             2582: function(pp, ip, cp) {
+               cp(1646), cp(6394), cp(2004), cp(462), cp(8407), cp(2429), cp(1172), cp(8288), cp(1274), cp(8201), cp(6626), cp(3211), cp(9952), cp(15), cp(9831), cp(7521), cp(2972), cp(6956), cp(5222), cp(2257);
+               var Op = cp(1287);
+ ... (994 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L97-L150` → after: `L1030-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L1030-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L1030-L1361) · [Before (L97-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L97-L150)

```diff
-             }, sD)
-           }))
-         })]
-       })
-     }
- 
-     function CD() {
-       const {
-         t: DD
-       } = (0, sD.E)(), {
-         userContext: zD,
-         isUserContextUpdating: wD
-       } = (0, nD.c)(), [KD, rD] = (0, pD.useState)(!1), [, cD] = (0, pD.useReducer)((DD => DD + 1), 0), gD = (0, pD.useRef)({}), RD = (0, pD.useRef)(null), AD = (0, hD.c)(), JD = {
-         ...zD.getPlayerCosmetics(),
-         ...RD.current
-       }, CD = (0, pD.useRef)(null);
- ... (38 more removed lines; see GitHub link above)
+             },
+             783: function(pp, ip, cp) {
+               var Op = cp(7583);
+               pp.exports = Op.Promise
+             },
+             8640: function(pp, ip, cp) {
+               var Op = cp(4061),
+                 op = cp(6544);
+               pp.exports = !!Object.getOwnPropertySymbols && !op((function() {
+                 var pp = Symbol();
+                 return !String(pp) || !(Object(pp) instanceof Symbol) || !Symbol.sham && Op && Op < 41
+               }))
+             },
+             9491: function(pp, ip, cp) {
+               var Op = cp(7583),
+                 op = cp(9212),
+ ... (316 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L152-L174` → after: `L1363-L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L1363-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L1363-L1399) · [Before (L152-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L152-L174)

```diff
-             }(JD, sD);
-             return (0, MD.jsx)("button", {
-               type: "button",
-               className: UD()("OnboardingPreset", {
-                 OnboardingPresetSelected: KD
-               }),
-               "aria-label": DD("homePage:onboardingPreset", {
-                 number: wD + 1
-               }),
-               "aria-pressed": KD,
-               onClick: () => {
-                 (0, LD.h)(`preset.${pD}`);
-                 const {
-                   eyes: DD,
-                   skin: zD
-                 } = gD.current;
- ... (7 more removed lines; see GitHub link above)
+             },
+             3955: function(pp, ip, cp) {
+               var Op = cp(7583).TypeError;
+               pp.exports = function(pp) {
+                 if (null == pp) throw Op("Can't call method on " + pp);
+                 return pp
+               }
+             },
+             460: function(pp, ip, cp) {
+               var Op = cp(7583),
+                 op = Object.defineProperty;
+               pp.exports = function(pp, ip) {
+                 try {
+                   op(Op, pp, {
+                     value: ip,
+                     configurable: !0,
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L177-L181` → after: `L1402-L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L1402-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L1402-L1677) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L177-L181)

```diff
-               },
-               children: (0, MD.jsx)("div", {
-                 className: "OnboardingPresetImage",
-                 style: {
-                   backgroundImage: `url(/textures/charSkins/previews/character_${pD}_preview.png)`
+               }
+             },
+             8821: function(pp, ip, cp) {
+               var Op = cp(4615).f,
+                 op = cp(2870),
+                 Ip = cp(3649)("toStringTag");
+               pp.exports = function(pp, ip, cp) {
+                 pp && !cp && (pp = pp.prototype), pp && !op(pp, Ip) && Op(pp, Ip, {
+                   configurable: !0,
+                   value: ip
+                 })
+               }
+             },
+             9137: function(pp, ip, cp) {
+               var Op = cp(7836),
+                 op = cp(8284),
+ ... (260 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L184-L213` → after: `L1723-L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L1723-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L1723-L1788) · [Before (L184-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L184-L213)

```diff
-             }, pD)
-           }))
-         }), (0, MD.jsxs)("button", {
-           type: "button",
-           className: "OnboardingMoreOptions",
-           "aria-expanded": KD,
-           onClick: () => {
-             KD || (0, LD.h)("more"), rD(!KD)
-           },
-           children: [DD("homePage:onboardingMoreOptions"), (0, MD.jsx)(BD.e, {
-             name: KD ? "caret-up" : "caret-down"
-           })]
-         }), KD && (0, MD.jsxs)("div", {
-           ref: CD,
-           className: "OnboardingMore",
-           children: [(0, MD.jsx)("div", {
- ... (14 more removed lines; see GitHub link above)
+             },
+             1646: function(pp, ip, cp) {
+               var Op = cp(7263),
+                 op = cp(7583),
+                 Ip = cp(6544),
+                 Sp = cp(4521),
+                 xp = cp(794),
+                 Lp = cp(1324),
+                 Yp = cp(1825),
+                 Dp = cp(5999),
+                 Ap = cp(4822),
+                 Pp = cp(9269),
+                 Wp = cp(3649),
+                 yp = cp(4061),
+                 Up = Wp("isConcatSpreadable"),
+                 wp = 9007199254740991,
+ ... (50 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L215-L222` → after: `L1790-L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L1790-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L1790-L1947) · [Before (L215-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L215-L222)

```diff
-               }
-             }), (0, MD.jsx)(PD, {
-               label: DD("homePage:onboardingSkinColour"),
-               colours: QD,
-               picked: null === jD || void 0 === jD ? void 0 : jD[1],
-               onPick: DD => {
-                 (0, LD.h)("skin"), gD.current.skin = DD, TD({
-                   skin: VD("skin", "0", DD)
+               }), (function() {
+                 var pp = Wp(this),
+                   ip = pp.target,
+                   cp = pp.kind,
+                   Op = pp.index++;
+                 return !ip || Op >= ip.length ? (pp.target = void 0, {
+                   value: void 0,
+                   done: !0
+                 }) : "keys" == cp ? {
+                   value: Op,
+                   done: !1
+                 } : "values" == cp ? {
+                   value: ip[Op],
+                   done: !1
+                 } : {
+                   value: [Op, ip[Op]],
+ ... (142 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L225-L354` → after: `L1950-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L1950-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L1950-L2054) · [Before (L225-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L225-L354)

```diff
-             })]
-           })]
-         })]
-       })
-     }
-     var xD = wD(1270),
-       TD = wD(20),
-       bD = wD(34109),
-       jD = wD(1346),
-       dD = wD(1687);
- 
-     function SD(DD) {
-       const {
-         t: zD
-       } = (0, sD.E)(), {
-         userContext: wD,
- ... (114 more removed lines; see GitHub link above)
+             },
+             5334: function(pp, ip, cp) {
+               var Op, op, Ip, Sp, xp = cp(7263),
+                 Lp = cp(6268),
+                 Yp = cp(7583),
+                 Dp = cp(5897),
+                 Ap = cp(8262),
+                 Pp = cp(783),
+                 Wp = cp(1270),
+                 yp = cp(6893),
+                 Up = cp(7496),
+                 wp = cp(8821),
+                 vp = cp(7730),
+                 tp = cp(8257),
+                 Hp = cp(9212),
+                 dp = cp(794),
+ ... (89 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L356-L359` → after: `L2056-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L2056-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L2056-L2208) · [Before (L356-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L356-L359)

```diff
-                 })()
-               },
-               children: (0, MD.jsx)(BD.e, {
-                 name: "dice"
+                 },
+                 Wi = function(pp) {
+                   return 1 !== pp.rejection && !pp.parent
+                 },
+                 yi = function(pp) {
+                   Ap(qp, Yp, (function() {
+                     var ip = pp.facade;
+                     fp ? Kp.emit("rejectionHandled", ip) : Ai("rejectionhandled", ip, pp.value)
+                   }))
+                 },
+                 Ui = function(pp, ip, cp) {
+                   return function(Op) {
+                     pp(ip, Op, cp)
+                   }
+                 },
+                 wi = function(pp, ip, cp) {
+ ... (137 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L361-L567` → after: `L2210-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L2210-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/195.js#L2210-L11892) · [Before (L361-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/195.js#L361-L567)

```diff
-             })]
-           }), "suffixed" === (null === UD || void 0 === UD ? void 0 : UD.kind) && (0, MD.jsx)("div", {
-             className: "OnboardingNameNote",
-             children: zD("homePage:onboardingNameSuffixed", {
-               taken: UD.taken,
-               name: UD.name
-             })
-           }), null !== yD && (0, MD.jsx)("div", {
-             className: "OnboardingNameNote OnboardingNameError",
-             children: yD
-           })]
-         }),
-         submit: () => {
-           if (!ID && null !== XD) {
-             if (null === cD) {
-               if (ND(XD)) return;
- ... (191 more removed lines; see GitHub link above)
+             },
+             2257: function(pp, ip, cp) {
+               var Op = cp(7263),
+                 op = cp(7583),
+                 Ip = cp(8821);
+               Op({
+                 global: !0
+               }, {
+                 Reflect: {}
+               }), Ip(op.Reflect, "Reflect", !0)
+             },
+             2129: function(pp, ip, cp) {
+               var Op = cp(6389).charAt,
+                 op = cp(8320),
+                 Ip = cp(2743),
+                 Sp = cp(9012),
+ ... (9667 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/196.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/196.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38)

#### 1. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L4-L14` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/196.js#L4-L8) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/196.js#L4-L14)

```diff
-   34158: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => eD,
-       f: () => Mz,
-       i: () => nz,
-       j: () => Jz,
-       n: () => Kz,
-       q: () => Lz,
-       u: () => gz,
-       y: () => Oz,
-       B: () => cz
+   34306: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       ALL_DEV_TOOLS: () => Sp,
+       coreDevTools: () => Yp,
+       devTools: () => Lp
```

#### 2. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L16-L284` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/196.js#L10-L17) · [Before (L16-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/196.js#L16-L284)

```diff
-     var pD = wD(20),
-       sD = wD(103),
-       KD = wD(1648),
-       rD = wD(4454),
-       LD = wD(2890),
-       cD = wD(2894),
-       gD = wD(35);
-     const {
-       windows: RD,
-       target: AD,
-       stepDown: UD,
-       stepUp: fD,
-       noGain: ID
-     } = cD.b, BD = 1e3 / 60 * 1.08, GD = 1e3 / 55, hD = 1e3 / 45, nD = 1e3 / 30 * .92, MD = 1e3 / 30 * 1.08;
-     class OD {
-       constructor() {
- ... (253 more removed lines; see GitHub link above)
+     var Op = cp(657),
+       op = cp(1317),
+       Ip = cp(34310);
+     const Sp = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function xp() {
+       const {
+         noaDevTools: pp
+       } = await cp.e(242).then((() => cp(41280)));
```

#### 3. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L287-L316` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/196.js#L20-L22) · [Before (L287-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/196.js#L287-L316)

```diff
- 
-     function oD(DD) {
-       const zD = "number" === typeof DD ? Date.now() - DD : -1;
-       return zD >= 0 && zD < iD
-     }
-     let aD = null;
- 
-     function uD() {
-       return aD ??= (0, sD.getDeviceDefaultPixelScale)(), vD(aD)
-     }
- 
-     function vD(DD) {
-       const zD = pD.e.get("clientEscMenuOptions");
-       return zD.pixelSmoothing && !(0, rD.b)("pixelScale") && zD.pixelScale === DD
-     }
-     let tD = null,
- ... (14 more removed lines; see GitHub link above)
+     const Lp = new class {
+         constructor() {
+           this.loadHost = xp, this.tools = Sp
```

#### 4. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L318-L376` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/196.js#L24-L25) · [Before (L318-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/196.js#L318-L376)

```diff
-       }
-       return tD
-     }
- 
-     function HD(DD, zD) {
-       var wD;
-       const pD = zD.indexOf(null !== (wD = DD.failedUpN) && void 0 !== wD ? wD : -1);
-       return pD >= 0 && oD(DD.failedUpAt) ? {
-         step: pD,
-         untilMs: performance.now() + cD.b.stepUp.failWaitsMs[0]
-       } : null
-     }
-     let qD = null,
-       Dz = !1,
-       zz = "";
-     const wz = new Set;
- ... (43 more removed lines; see GitHub link above)
+         setHost(pp) {
+           this.tools = null === pp ? Sp : pp.tools, this.loadHost = null === pp ? xp : async () => pp
```

#### 5. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L378-L385` → after: `L27-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L27-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/196.js#L27-L45) · [Before (L378-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/196.js#L378-L385)

```diff
-       }))
-     }
-     let Rz = 0;
- 
-     function Az() {
-       var DD;
-       const zD = null !== (DD = ZD()) && void 0 !== DD ? DD : {
-           gpu: zz
+         supports(pp) {
+           return this.tools.has(pp)
+         }
+         async downloadScene(pp, ip) {
+           const cp = await this.loadHost();
+           await cp.downloadScene(pp, ip)
+         }
+         async setAmbientLightIntensity(pp) {
+           const ip = await this.loadHost();
+           await ip.setAmbientLightIntensity(pp)
+         }
+         async capturePhoto(pp, ip, cp) {
+           return (await this.loadHost()).capturePhoto(pp, ip, cp)
+         }
+       },
+       Yp = {
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L387-L481` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/196.js#L47-L51) · [Before (L387-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/196.js#L387-L481)

```diff
-         wD = ND();
-       Rz = WD(), qD = new TD({
-           changed: pz,
-           Nf: () => {
-             fz({
-               heldN: void 0
-             })
-           },
-           Qg: DD => {
-             var zD;
-             const wD = ND()[DD],
-               pD = {
-                 heldN: wD,
-                 heldAt: Date.now(),
-                 heldTarget: WD()
-               };
- ... (79 more removed lines; see GitHub link above)
+         setAmbientLightIntensity: async () => {
+           throw new Error("This client can't set the ambient light")
+         },
+         capturePhoto: async () => {
+           throw new Error("No game is drawing yet")
```

#### 7. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L483-L518` → after: `L53-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/196.js#L53-L56) · [Before (L483-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/196.js#L483-L518)

```diff
-       }
-     }
- 
-     function Jz() {
-       var DD;
-       null === (DD = qD) || void 0 === DD || DD.resized(performance.now())
-     }
-   },
-   34167: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD
-     });
-     var pD = wD(103),
-       sD = wD(125);
- 
-     function KD(DD, zD, wD) {
- ... (20 more removed lines; see GitHub link above)
+       };
+     Op.z && Lp.setHost(Yp), (0, op.y)((() => {
+       Lp.setHost(Yp)
+     }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/197.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/197.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b)

#### 1. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L4-L49` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L4-L6) · [Before (L4-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L4-L49)

```diff
-   36776: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD
-     });
-     var pD = wD(58),
-       sD = wD(25);
- 
-     function KD(DD, zD) {
-       const [wD, KD] = (0, pD.useState)(zD);
-       return (0, pD.useEffect)((() => {
-         KD(zD());
-         const wD = sD.l.subscribe(DD, (DD => {
-           KD(DD)
-         }));
-         return () => {
-           sD.l.unsubscribe(wD)
- ... (30 more removed lines; see GitHub link above)
+   36593: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       showOnboardingPopup: () => Bp
```

#### 2. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L51-L60` → after: `L8-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L8-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L8-L28) · [Before (L51-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L51-L60)

```diff
-     var pD = wD(36910);
-     let sD = {
-       open: async () => {
-         throw new Error(pD.e.viewerLoadFailed.text)
-       },
-       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
-       encode: async () => null,
-       fileHandle: () => null,
-       markSaved: () => {}
-     };
+     var Op = cp(62),
+       op = cp(1201),
+       Ip = cp(1372),
+       Sp = cp(1480),
+       xp = cp(4417),
+       Lp = cp(1579),
+       Yp = cp(1577),
+       Dp = cp(2276),
+       Ap = cp(1049),
+       Pp = cp.n(Ap),
+       Wp = cp(1149),
+       yp = cp(36602),
+       Up = cp(1060),
+       wp = cp(2429),
+       vp = cp(3587),
+       tp = cp(1141),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L63-L167` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L31-L39) · [Before (L63-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L63-L167)

```diff
-       sD = DD
-     }
- 
-     function rD() {
-       return sD
-     }
-   },
-   36910: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => rD,
-       f: () => gD,
-       g: () => cD
-     });
-     var pD = wD(25);
-     const sD = 1500,
-       KD = 1e3,
- ... (89 more removed lines; see GitHub link above)
+       return Yp.e.default.colourGroups[pp].colours.map(((pp, ip) => {
+         let {
+           rbg: cp,
+           order: Op
+         } = pp;
+         return {
+           rbg: cp,
+           order: Op,
+           index: ip
```

#### 4. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L169-L194` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L41) · [Before (L169-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L169-L194)

```diff
-       },
-       LD = new Set(Object.values(rD).filter((DD => "Error" === DD.type)).map((DD => DD.text)));
- 
-     function cD(DD) {
-       return DD instanceof Error && LD.has(DD.message) ? DD.message : void 0
-     }
- 
-     function gD(DD) {
-       var zD;
-       const wD = null !== (zD = DD.timeoutMs) && void 0 !== zD ? zD : "Error" === DD.type ? sD : KD;
-       pD.l.KG("showBottomMessage", {
-         message: DD.text,
-         timeoutLength: wD,
-         type: DD.type
-       })
-     }
- ... (10 more removed lines; see GitHub link above)
+       })).sort(((pp, ip) => pp.order - ip.order))
```

#### 5. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L196-L206` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L43-L44) · [Before (L196-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L196-L206)

```diff
- 
-     function KD(DD) {
-       return pD !== DD && (pD = DD, !0)
-     }
-   },
-   34174: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => KD,
-       h: () => sD
-     });
-     var pD = wD(20);
+     const jp = ep("eyes"),
+       kp = ep("skin");
```

#### 6. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L209-L286` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L47-L50) · [Before (L209-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L209-L286)

```diff
-       return DD && !zD
-     }
- 
-     function KD() {
-       return sD(pD.e.get("isTouchScreen"), pD.e.get("clientEscMenuOptions").touchActionButtons)
-     }
-   },
-   36759: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD
-     });
-     const pD = 3
-   },
-   36774: (DD, zD, wD) => {
-     wD.d(zD, {
-       B: () => XD,
- ... (62 more removed lines; see GitHub link above)
+       var cp;
+       if (void 0 === ip || "default" !== (null === (cp = (0, Dp.m)(pp, ip)) || void 0 === cp ? void 0 : cp.cosmeticPack)) return null;
+       const Op = (0, Dp.j)(ip);
+       return Op && [Op[0], Number(Op[1])]
```

#### 7. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L290-L296` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L54) · [Before (L290-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L290-L296)

```diff
-       const pD = [...zD.keys()].sort(((DD, wD) => zD.get(DD) - zD.get(wD)));
-       return DD.forEach(((sD, KD) => {
-         const rD = wD(sD);
-         zD.has(rD) || (pD.splice(0 === KD ? 0 : pD.indexOf(wD(DD[KD - 1])) + 1, 0, rD), zD.set(rD, -1))
-       })), pD.forEach(((DD, wD) => {
-         zD.set(DD, wD)
-       })), [...DD].sort(((DD, pD) => zD.get(wD(DD)) - zD.get(wD(pD))))
+       return `${pp}_${ip}_${cp}`
```

#### 8. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L331-L355` → after: `L58-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L58-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L58-L100) · [Before (L331-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L331-L355)

```diff
-       pD = DD
-     }
- 
-     function KD(DD, zD) {
-       return pD(DD, zD)
-     }
-   },
-   36561: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => fD,
-       i: () => sD,
-       l: () => rD,
-       n: () => cD
-     });
-     var pD = wD(36568);
-     const sD = "data-camera-fade",
- ... (9 more removed lines; see GitHub link above)
+       let {
+         label: ip,
+         colours: cp,
+         picked: Op,
+         onPick: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, op.H)();
+       return (0, Hp.jsxs)("div", {
+         className: "OnboardingColours",
+         children: [(0, Hp.jsx)("div", {
+           className: "OnboardingColoursLabel",
+           children: ip
+         }), (0, Hp.jsx)("div", {
+           className: "OnboardingSwatches",
+ ... (27 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L359-L374` → after: `L104-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L104-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L104-L228) · [Before (L359-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L359-L374)

```diff
-       const DD = document.createElement("div"),
-         {
-           style: zD
-         } = DD;
-       return zD.position = "absolute", zD.left = "0", zD.right = "0", zD.pointerEvents = "none", DD
-     }
- 
-     function RD(DD) {
-       const zD = gD();
-       zD.style[DD] = "0", zD.style.height = 100 * pD.b + "%", zD.style.background = "#000000", zD.style.pointerEvents = "auto", zD.setAttribute(KD, ""), zD.addEventListener("mousedown", UD), zD.addEventListener("contextmenu", AD);
-       for (const wD of ["touchstart", "touchmove", "touchend", "touchcancel"]) zD.addEventListener(wD, AD);
-       return zD
-     }
- 
-     function AD(DD) {
-       DD.preventDefault(), DD.stopPropagation()
+       const {
+         t: pp
+       } = (0, op.H)(), {
+         userContext: ip,
+         isUserContextUpdating: cp
+       } = (0, tp.b)(), [Ip, Sp] = (0, Op.useState)(!1), [, Lp] = (0, Op.useReducer)((pp => pp + 1), 0), Yp = (0, Op.useRef)({}), Dp = (0, Op.useRef)(null), Ap = (0, vp.b)(), ep = {
+         ...ip.getPlayerCosmetics(),
+         ...Dp.current
+       }, Mp = (0, Op.useRef)(null);
+       (0, Op.useEffect)((() => {
+         var pp;
+         Ip && (null === (pp = Mp.current) || void 0 === pp || pp.scrollIntoView({
+           block: "nearest"
+         }))
+       }), [Ip]);
+       const Cp = (pp, ip) => {
+ ... (109 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L378-L419` → after: `L237-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L237-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L237-L250) · [Before (L378-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L378-L419)

```diff
-       AD(DD);
-       const zD = document.activeElement;
-       zD instanceof HTMLElement && zD !== document.body && zD.blur()
-     }
-     class fD {
-       constructor(DD) {
-         this.getContainer = DD, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
-       }
-       setFade(DD, zD) {
-         var wD;
-         if (!this.elements && zD <= 0) return;
-         const {
-           fade: pD
-         } = this.getElements(), sD = null !== (wD = LD) && void 0 !== wD ? wD : this.getContainer();
-         pD.parentElement !== sD && sD.appendChild(pD);
-         const KD = this.markHost(zD > 0 ? LD : null, zD >= 1);
- ... (26 more removed lines; see GitHub link above)
+       const {
+         t: ip
+       } = (0, op.H)(), {
+         userContext: cp,
+         isUserContextUpdating: Ip
+       } = (0, tp.b)(), Lp = Ip ? null : cp.getPlayerName(), Yp = (0, Op.useRef)(null), [Dp, Ap] = (0, Op.useState)((() => null === Lp ? (0, Cp.e)() : null)), [Pp, Wp] = (0, Op.useState)(null), [yp, wp] = (0, Op.useState)(!1), dp = (0, Op.useRef)("aW"), ep = (0, vp.b)(), jp = (0,  … [truncated]
+         Yp.current && (Yp.current.value = pp), Ap(pp)
+       }, Mp = (0, Op.useRef)(!1);
+       (0, Op.useEffect)((() => {
+         var pp, ip;
+         !yp && Mp.current && (Mp.current = !1, null === (pp = Yp.current) || void 0 === pp || pp.focus(), null === (ip = Yp.current) || void 0 === ip || ip.select())
+       }), [yp]);
+       const Jp = (0, Op.useRef)(null);
+       (0, Op.useEffect)((() => {
```

#### 11. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L421-L422` → after: `L252-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L252-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L252-L262) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L421-L422)

```diff
-         const pD = DD !== this.markedHost;
-         if (!pD && zD === this.markedCovered) return !1;
+         null !== Pp && (null === (pp = Jp.current) || void 0 === pp || pp.scrollIntoView({
+           block: "nearest"
+         }))
+       }), [Pp]);
+       const Bp = (pp, ip) => {
+         const cp = document.activeElement === Yp.current || Mp.current;
+         wp(!0), Wp(null), pp.then((pp => {
+           ep.current && (wp(!1), Mp.current = cp, ip(pp))
+         }))
+       };
+       (0, Op.useEffect)((() => {
```

#### 12. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L424-L500` → after: `L264-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L264-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L264-L303) · [Before (L424-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L424-L500)

```diff
-         pD && (null === (KD = this.markedHost) || void 0 === KD || null === (rD = KD.parentElement) || void 0 === rD || rD.removeAttribute(sD));
-         return null === DD || void 0 === DD || null === (wD = DD.parentElement) || void 0 === wD || wD.setAttribute(sD, zD ? "covered" : ""), this.markedHost = DD, this.markedCovered = zD, pD
-       }
-       getElements() {
-         if (this.elements) return this.elements;
-         const DD = RD("top"),
-           zD = RD("bottom");
-         DD.style.transform = "translateY(-100%)", zD.style.transform = "translateY(100%)";
-         const wD = gD();
-         wD.style.top = "0", wD.style.bottom = "0", wD.style.display = "none", wD.setAttribute("data-camera-fade-layer", "");
-         const pD = this.getContainer();
-         return pD.appendChild(DD), pD.appendChild(zD), DD.getBoundingClientRect(), this.elements = {
-           fade: wD,
-           top: DD,
-           bottom: zD
-         }, this.elements
- ... (61 more removed lines; see GitHub link above)
+         Ep.c.get("isTouchScreen") || (null === (pp = Yp.current) || void 0 === pp || pp.focus(), null === (ip = Yp.current) || void 0 === ip || ip.select())
+       }), []);
+       const Np = () => {
+           (0, xp.n)(dp.current), pp()
+         },
+         Tp = pp => "refused" === pp.outcome ? pp.message : ip((0, Xp.h)(pp.failure)),
+         fp = pp => !(pp.length >= Cp.m) && (Wp({
+           kind: "error",
+           message: ip("homePage:changeNameMinLengthError", {
+             length: Cp.m
+           })
+         }), !0),
+         bp = pp => {
+           var Op, op, Ip;
+           pp.toLowerCase() !== (null === (Op = null !== (op = null === (Ip = Rp.current) || void 0 === Ip ? void 0 : Ip.name) && void 0 !== op ? op : Lp) || void 0 === Op ? void 0 : Op.toLowerCase()) ? fp(pp) || Bp((0, Xp.d)(cp, pp), (cp => {
+             "taken" !== cp.outcome ? "refused" !== cp.outcome && "failed" !== cp.outcome ? cp.name !== pp ? (dp.current = "suffixed", Rp.current = {
+ ... (24 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L506-L518` → after: `L387-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L387-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L387-L402) · [Before (L506-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L506-L518)

```diff
-     function AD(DD) {
-       switch (DD) {
-         case "linear":
-           return pD;
-         case "easeIn":
-           return sD;
-         case "easeOut":
-           return KD;
-         case "easeInOut":
-           return rD;
-         default:
-           return DD
-       }
+     function Bp() {
+       const pp = {
+         finished: !1
+       };
+       return Ip.NotificationProvider.showCustomPopup({
+         body: ip => (0, Hp.jsx)(Np, {
+           onFinish: () => {
+             (0, xp.g)(), pp.finished = !0, ip()
+           }
+         }),
+         middleScreenPopupClassName: "OnboardingPopup",
+         ignoreBackgroundPress: !0,
+         onClose: () => {
+           pp.finished || (0, xp.d)()
+         }
+       })
```

#### 14. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L531` → after: `L406-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L406-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L406-L433) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L531)

```diff
-       return Math.abs(DD) > sD
+       let {
+         onFinish: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, op.H)(), Ip = Jp(ip);
+       return (0, Op.useEffect)((() => {
+         (0, xp.p)()
+       }), []), (0, Hp.jsxs)("div", {
+         className: "Onboarding",
+         children: [(0, Hp.jsx)("div", {
+           className: "OnboardingTitle",
+           children: cp("homePage:onboardingTitle")
+         }), (0, Hp.jsxs)("div", {
+           className: "OnboardingBody",
+           children: [Ip.field, (0, Hp.jsx)(Mp, {})]
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L534` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L436) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L534)

```diff
-   34172: (DD, zD, wD) => {
+   36602: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L536` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L438) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L536)

```diff
-       c: () => KD
+       b: () => Sp
```

#### 17. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L538-L543` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L440-L441) · [Before (L538-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L538-L543)

```diff
-     var pD = wD(1075);
- 
-     function sD() {
-       var DD, zD;
-       return null !== (DD = null === (zD = screen.orientation) || void 0 === zD ? void 0 : zD.type) && void 0 !== DD ? DD : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
+     var Op = cp(1956),
+       op = cp(1520);
```

#### 18. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L546-L548` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L444) · [Before (L546-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L546-L548)

```diff
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
```

#### 19. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L550-L551` → after: `L446-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L446-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L446-L455) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L550-L551)

```diff
-       isHeld() {
-         return this.holding && sD() !== this.heldOrientation && (this.holding = !1), this.holding
+       save(pp, ip) {
+         pp !== this.userContext && this.sendHeld(), this.userContext = pp;
+         for (const [Op, op] of ip) this.pending.set(Op, op);
+         if (null !== this.timer) return;
+         const cp = this.lastSentAt + 1100 - Date.now();
+         cp <= 0 ? this.send(pp) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), cp), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
```

#### 20. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L553-L556` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L457-L458) · [Before (L553-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L553-L556)

```diff
-       hold() {
-         this.heldOrientation = sD(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-           this.holding && (0, pD.CB)(new Error("Game view size held for 60 s"))
-         }), 6e4)
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
```

#### 21. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L558-L563` → after: `L460-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L460-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L460-L465) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L558-L563)

```diff
-       release() {
-         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
-           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
-           else {
-             this.holding = !1;
-             for (const DD of this.resizers) DD()
+       send(pp) {
+         const ip = Array.from(this.pending, (pp => {
+           let [ip, cp] = pp;
+           return {
+             KI: ip,
+             VI: cp
```

#### 22. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L565-L691` → after: `L467-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L467-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L467-L470) · [Before (L565-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L565-L691)

```diff
-         }), 1e3)
-       }
-       heldSizer(DD) {
-         let zD = !1;
-         return () => {
-           if (zD && this.isHeld()) return null;
-           const wD = DD();
-           return zD ||= null !== wD, wD
-         }
-       }
-       onRelease(DD) {
-         return this.resizers.add(DD), () => {
-           this.resizers.delete(DD)
-         }
-       }
-     }
- ... (111 more removed lines; see GitHub link above)
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), op.b.updateCosmetics(pp, ip).catch((pp => {
+           console.error("Failed to update cosmetics", pp)
+         }))
```

#### 23. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L696-L711` → after: `L475-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L475-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L475-L481) · [Before (L696-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L696-L711)

```diff
-       const {
-         numLines: wD,
-         charsPerLine: pD
-       } = hD[zD];
-       return MD(DD, wD, pD, !1)
-     }
- 
-     function MD(DD, zD, wD, pD, sD) {
-       (sD || pD) && (DD = DD.slice(0, null !== sD && void 0 !== sD ? sD : zD * wD));
-       const KD = DD.split("\n");
-       if (KD.length > zD && KD.splice(zD, KD.length - zD), !pD)
-         for (let rD = 0; rD < KD.length; rD++) {
-           const DD = KD[rD];
-           DD.length > wD && (KD[rD] = DD.substring(0, wD), KD.length < zD && KD.splice(rD + 1, 0, DD.substring(wD)))
-         }
-       return KD.join("\n")
+       for (const [cp, Op] of ip) pp.setPlayerCosmetics(cp, Op);
+       if (null === Op.gameBridge.latest("connectedGame").websocketUrl) Ip.save(pp, ip);
+       else
+         for (const [cp, op] of ip) Op.gameBridge.send("updateMyCosmetic", {
+           KI: cp,
+           VI: op
+         })
```

#### 24. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L714` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L484) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L714)

```diff
-   34211: (DD, zD, wD) => {
+   34316: (pp, ip, cp) => {
```

#### 25. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L718-L720` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L488) · [Before (L718-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L718-L720)

```diff
-       i: () => AD,
-       k: () => rD,
-       m: () => gD,
+       l: () => Up,
```

#### 26. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L723-L805` → after: `L491-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L491-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L491-L495) · [Before (L723-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L723-L805)

```diff
-     var pD = wD(351);
-     const sD = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       KD = {
-         Damage: {
-           translationKey: "enchantments:damageDescription"
-         },
-         "Attack Speed": {
-           translationKey: "enchantments:attackSpeedDescription"
-         },
-         "Critical Damage": {
-           translationKey: "enchantments:criticalDamageDescription"
-         },
-         Protection: {
-           translationKey: "enchantments:protectionDescription"
-         },
-         Health: {
- ... (67 more removed lines; see GitHub link above)
+     var Op = cp(156),
+       op = cp(1284),
+       Ip = cp(1211),
+       Sp = cp(1149),
+       xp = cp(1758);
```

#### 27. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L807-L856` → after: `L497-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L497-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L497-L500) · [Before (L807-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L807-L856)

```diff
-       "Wood Enchanting Table": [{
-         min: 1,
-         max: 2
-       }, {
-         min: 3,
-         max: 4
-       }, {
-         min: 5,
-         max: 6
-       }],
-       "Stone Enchanting Table": [{
-         min: 2,
-         max: 4
-       }, {
-         min: 5,
-         max: 10
- ... (34 more removed lines; see GitHub link above)
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
```

#### 28. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L860` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L504) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L860)

```diff
-       return sD.includes(DD)
+       return Lp[pp]
```

#### 29. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L864-L865` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L508) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L864-L865)

```diff
-       var zD;
-       return !0 === (null === DD || void 0 === DD || null === (zD = DD.customAttributes) || void 0 === zD ? void 0 : zD.cannotEnchant)
+       return (0, xp.e)(pp) ? "outdated" : pp instanceof Op.e ? 429 === pp.httpCode ? "busy" : "server" : "offline"
```

#### 30. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L868-L872` → after: `L511-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L511-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L511-L517) · [Before (L868-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L868-L872)

```diff
-     function RD(DD, zD) {
-       const {
-         max: wD
-       } = LD[DD].at(-1);
-       return zD <= wD
+     function Ap(pp, ip, cp) {
+       return (0, Sp.postJsonWithMetricsCookiesAndJsonResponse)(`${Ip.clientSideServerUrls.indexUrl}${ip}`, cp, {
+         retries: 3
+       }, pp.getMetricsCookies()).catch((pp => (console.error("Bad response from the server when trying to change name:", ip, pp), {
+         outcome: "failed",
+         failure: Dp(pp)
+       })))
```

#### 31. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L876-L901` → after: `L521-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L521-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L521-L527) · [Before (L876-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L876-L901)

```diff
-       const zD = Math.sin(DD / 80),
-         wD = DD => {
-           if (DD <= 0) return 0;
-           if (DD > 1) return 1;
-           let zD = 0;
-           const wD = [1, 7, 21, 35, 35, 21, 7, 1];
-           for (let pD = 0; pD < wD.length; pD++) {
-             zD += (pD % 2 === 0 ? 1 : -1) * wD[pD] * Math.pow(DD, 2 + pD) / (2 + pD)
-           }
-           return 72 * zD
-         },
-         pD = .3 - .78 * zD,
-         sD = .5 - .78 * zD,
-         KD = .6 - .7 * zD,
-         rD = .8 - .6 * zD;
-       let LD = wD(pD),
- ... (10 more removed lines; see GitHub link above)
+       return "outcome" in pp && "failed" === pp.outcome
+     }
+ 
+     function Wp(pp) {
+       return console.error("Error when trying to get with new name from DB", pp), {
+         outcome: "refused",
+         message: pp
```

#### 32. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L906-L909` → after: `L550-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L550-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L550-L563) · [Before (L906-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L906-L909)

```diff
-       const {
-         min: wD,
-         max: sD
-       } = LD[DD][zD], KD = pD.c.sampleUniformIntDistribution(wD, sD, "includeMax");
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const Op = 1 === ip ? 1 : 10 ** (ip - 1),
+         Ip = String(Op + Math.floor(cp() * (10 ** ip - Op)));
+       return `${pp.slice(0,op.i-ip)}${Ip}`
+     }
+     const vp = [1, 2, 3, 4];
+     async function tp(pp, ip) {
+       const cp = await Up(pp, ip);
+       if ("taken" !== cp.outcome) return cp;
+       for (const Op of vp) {
+         const cp = wp(ip, Op),
+           op = await Up(pp, cp);
+         if ("taken" !== op.outcome) return op
+       }
```

#### 33. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L911-L912` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/197.js#L565) · [Before (L911-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/197.js#L911-L912)

```diff
-         ...AD(KD),
-         level: KD
+         outcome: "taken"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/198.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/198.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31)

#### 1. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L4-L29` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L4-L14) · [Before (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L4-L29)

```diff
-   34218: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       MAX_BLOCK_ID: () => pD,
-       armourReductionOf: () => kD,
-       clipSizeOf: () => yD,
-       creativeAltNames: () => rz,
-       creativeCategoryOf: () => HD,
-       creativeItemCategories: () => LD,
-       creativeItemCategoryIcons: () => cD,
-       creativeItemIds: () => YD,
-       descriptionOf: () => WD,
-       displayNameOf: () => lD,
-       dropsNothing: () => oD,
-       enchantmentPerksOf: () => tD,
-       gunTypeOf: () => eD,
-       harvestsNullLevelOf: () => aD,
- ... (10 more removed lines; see GitHub link above)
+   34364: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => gp,
+       h: () => ui,
+       l: () => ei,
+       p: () => ki,
+       r: () => Li,
+       v: () => Di,
+       w: () => Pi,
+       y: () => ji,
+       C: () => Ai
```

#### 2. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L31-L57` → after: `L16-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L16-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L16-L47) · [Before (L31-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L31-L57)

```diff
-     const pD = 8558,
-       sD = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       KD = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       rD = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       LD = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       cD = {
-         building: "Stone Bricks",
-         colours: "Magenta Wool",
-         nature: "Grass Block",
-         decoration: "Lantern",
-         utility: "Workbench",
-         tools: "Iron Pickaxe",
-         combat: "Iron Sword",
-         food: "Apple",
-         mobs: "Pig Spawn Orb",
-         materials: "Iron Bar",
- ... (11 more removed lines; see GitHub link above)
+     var Op = cp(259),
+       op = cp(25),
+       Ip = cp(104),
+       Sp = cp(1650),
+       xp = cp(4515),
+       Lp = cp(2993),
+       Yp = cp(3e3),
+       Dp = cp(44);
+     const {
+       windows: Ap,
+       target: Pp,
+       stepDown: Wp,
+       stepUp: yp,
+       noGain: Up
+     } = Yp.d, wp = 1e3 / 60 * 1.08, vp = 1e3 / 55, tp = 1e3 / 45, Hp = 1e3 / 30 * .92, dp = 1e3 / 30 * 1.08;
+     class ep {
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L60-L67` → after: `L50-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L50-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L50-L241) · [Before (L60-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L60-L67)

```diff
- 
-     function fD(DD, zD, wD) {
-       const pD = UD(DD);
-       let sD = null,
-         KD = [];
-       return DD => {
-         const rD = pD(DD);
-         if (0 !== rD) return null === sD && (sD = zD.split(RD.t), KD = new Array(sD.length)), KD[rD - 1] ??= wD(sD[rD - 1])
+     const jp = Ap.windowMs,
+       kp = Ap.settleMs,
+       mp = Ap.graceMs,
+       Rp = Ap.minIntervals,
+       qp = 1e3 * Rp / jp,
+       Mp = Math.floor(1e4 / jp),
+       Cp = Up.backoffMs,
+       Ep = Up.maxMs;
+     class Xp {
+       constructor(pp, ip) {
+         let {
+           lowest: cp,
+           startStep: Op = 0,
+           noGain: op = null,
+           upWait: Ip = null
+         } = ip;
+ ... (176 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L71-L72` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L251-L252) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L71-L72)

```diff
-     function ID(DD) {
-       return DD
+     function fp() {
+       return (0, Lp.G)(op.c.get("clientEscMenuOptions").pixelScale) * (0, Lp.C)()
```

#### 5. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L75-L76` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L255-L256) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L75-L76)

```diff
-     function BD(DD) {
-       return DD === RD.h ? null : (0, RD.B)(DD)
+     function bp() {
+       return (0, Lp.s)(fp())
```

#### 6. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L84-L108` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L259-L261) · [Before (L84-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L84-L108)

```diff
-     function JD(DD, zD, wD) {
-       OD !== (0, gD.k)() && (OD = (0, gD.k)(), nD.clear(), MD.clear());
-       let pD = DD.get(zD);
-       return void 0 === pD && (pD = wD(), void 0 !== pD && DD.set(zD, pD)), pD
-     }
-     const ED = fD("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
-       QD = fD("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
-       XD = fD(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
-       VD = fD("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
-       PD = fD(">W]+#%#)$)%9$", "none|sniper", ID),
-       CD = fD("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", ID),
-       xD = UD("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
-       TD = UD("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
-       bD = fD("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (DD => "" === DD ? null : Number(DD))),
-       jD = fD("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
-       dD = fD(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
- ... (9 more removed lines; see GitHub link above)
+     function hp() {
+       const pp = Dp.h.getItem(Bp);
+       return "object" !== typeof pp || null === pp || "string" !== typeof pp.gpu ? null : pp
```

#### 7. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L112-L116` → after: `L265-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L265-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L265-L269) · [Before (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L112-L116)

```diff
-       const zD = hD(DD);
-       return null !== zD ? zD : JD(MD, DD, (() => {
-         var zD;
-         return null !== (zD = (0, RD.C)(lD(DD))) && void 0 !== zD ? zD : void 0
-       }))
+       return {
+         untilEpochMs: Date.now() + (pp.untilMs - performance.now()),
+         backoffMs: pp.backoffMs,
+         fps: pp.fps
+       }
```

#### 8. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L120` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L273-L277) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L120)

```diff
-       return ED(DD)
+       return void 0 === pp || "number" !== typeof pp.fps ? null : {
+         untilMs: performance.now() + (pp.untilEpochMs - Date.now()),
+         backoffMs: pp.backoffMs,
+         fps: pp.fps
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L123-L124` → after: `L281-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L281-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L281-L286) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L123-L124)

```diff
-     function ZD(DD) {
-       return QD(DD)
+     function gp() {
+       if (null === Fp) {
+         const pp = new URLSearchParams(window.location.search).get("msaa");
+         Fp = op.c.get("clientEscMenuOptions").antiAliasing && ("0" === pp || "1" !== pp && !(0, xp.c)("antiAliasing") && (0, Qp.e)())
+       }
+       return Fp
```

#### 10. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L128` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L290-L291) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L128)

```diff
-       return XD(DD)
+       const ip = "number" === typeof pp ? Date.now() - pp : -1;
+       return ip >= 0 && ip < Np
```

#### 11. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L131-L132` → after: `L295-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L295-L296) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L131-L132)

```diff
-     function kD(DD) {
-       return VD(DD)
+     function Zp() {
+       return rp ??= (0, Ip.getDeviceDefaultPixelScale)(), zp(rp)
```

#### 12. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L136` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L300-L301) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L136)

```diff
-       return PD(DD)
+       const ip = op.c.get("clientEscMenuOptions");
+       return ip.pixelSmoothing && !(0, xp.c)("pixelScale") && ip.pixelScale === pp
```

#### 13. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L139-L140` → after: `L306-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L306-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L306-L320) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L139-L140)

```diff
-     function eD(DD) {
-       return CD(DD)
+     function Vp() {
+       if (null === sp || Kp !== fp()) {
+         var pp;
+         Kp = fp();
+         const ip = Number(null !== (pp = new URLSearchParams(window.location.search).get(Tp)) && void 0 !== pp ? pp : ""),
+           cp = bp();
+         if (ip > 0 && ip <= 1) sp = (0, Lp.z)(cp, cp[0] / ip);
+         else {
+           const pp = hp(),
+             ip = (0, Lp.z)(cp, (0, Lp.A)(fp())),
+             Op = !(0, Qp.g)() && Gp(null === pp || void 0 === pp ? void 0 : pp.heldAt) && (null === pp || void 0 === pp ? void 0 : pp.heldTarget) === fp() ? null === pp || void 0 === pp ? void 0 : pp.heldN : void 0;
+           sp = "number" === typeof Op ? Math.min(ip, (0, Lp.z)(cp, Op)) : ip
+         }
+       }
+       return sp
```

#### 14. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L143-L144` → after: `L323-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L323-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L323-L329) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L143-L144)

```diff
-     function oD(DD) {
-       return 0 !== TD(DD)
+     function ii(pp, ip) {
+       var cp;
+       const Op = ip.indexOf(null !== (cp = pp.failedUpN) && void 0 !== cp ? cp : -1);
+       return Op >= 0 && Gp(pp.failedUpAt) ? {
+         step: Op,
+         untilMs: performance.now() + Yp.d.stepUp.failWaitsMs[0]
+       } : null
```

#### 15. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L147-L148` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L336-L337) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L147-L148)

```diff
-     function aD(DD) {
-       return bD(DD)
+     function Si() {
+       for (const pp of Ii) pp()
```

#### 16. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L151-L152` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L340-L341) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L151-L152)

```diff
-     function uD(DD) {
-       return 0 !== xD(DD)
+     function xi() {
+       return Oi ? null : (Ui(), null === ci ? (null !== rp || null !== (0, Ip.peekGpuVendor)() ? Zp() : zp(1)) ? Vp() : null : Zp() ? ci.currentStep() : null)
```

#### 17. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L155-L159` → after: `L344-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L344-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L344-L349) · [Before (L155-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L155-L159)

```diff
-     function vD(DD) {
-       const zD = jD(DD);
-       if (void 0 === zD || zD.startsWith(RD.r)) return null === zD || void 0 === zD ? void 0 : zD.slice(RD.r.length);
-       const wD = (0, gD.g)(DD);
-       return void 0 === wD ? void 0 : `${wD}${RD.t}${zD}`
+     function Li() {
+       const pp = xi();
+       if (null === pp) return null;
+       const ip = bp(),
+         cp = ip[Math.min(pp, ip.length - 1)];
+       return cp === Yi() ? null : cp
```

#### 18. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L162-L164` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L352-L353) · [Before (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L162-L164)

```diff
-     function tD(DD) {
-       var zD;
-       return null !== (zD = dD(DD)) && void 0 !== zD ? zD : AD
+     function Yi() {
+       return (0, Lp.x)(op.c.get("clientEscMenuOptions").pixelScale, (0, Lp.C)())
```

#### 19. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L169-L176` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L357) · [Before (L169-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L169-L176)

```diff
-       if (null === FD) {
-         const DD = [],
-           zD = new RD.u(sD);
-         let wD = 0;
-         for (; !zD.done;) wD += (0, RD.H)(zD.next()), DD.push(wD);
-         FD = Object.freeze(DD)
-       }
-       return FD
+       return null !== ci && null !== Li()
```

#### 20. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L180` → after: `L361-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L361-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L361-L363) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L180)

```diff
-       return SD(DD)
+       return Ii.add(pp), () => {
+         Ii.delete(pp)
+       }
```

#### 21. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L183` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L366) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L183)

```diff
-     function qD(DD, zD) {
+     function Pi(pp, ip, cp) {
```

#### 22. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L185` → after: `L368-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L368-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L368-L379) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L185)

```diff
-       return 0 !== ((null !== (wD = iD(DD)) && void 0 !== wD ? wD : 0) & zD)
+       if (null !== ci || Oi || (0, Qp.g)()) return;
+       const Ip = (0, lp.d)(pp, ip, cp);
+       null !== Ip && ((0, Qp.j)(Ip.vendor), "" !== Ip.renderer && (0, Op.l)(Ip.vendor, Ip.renderer)), oi = `${pp}:${(null===Ip||void 0===Ip?void 0:Ip.renderer)||(null===Ip||void 0===Ip?void 0:Ip.vendor)||""}`, (null === (op = hp()) || void 0 === op ? void 0 : op.gpu) !== oi && (D … [truncated]
+         gpu: oi
+       }), sp = null), yi(), document.addEventListener("visibilitychange", (() => {
+         if (document.hidden) try {
+           var pp;
+           null === (pp = ci) || void 0 === pp || pp.hidden()
+         } catch (ip) {
+           ji(), console.error("The quality steps stopped", ip)
+         }
+       }))
```

#### 23. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L188-L189` → after: `L383-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L383-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L383-L446) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L188-L189)

```diff
-     function Dz(DD) {
-       return qD(DD, RD.e.OnlyInSearch)
+     function yi() {
+       var pp;
+       const ip = null !== (pp = hp()) && void 0 !== pp ? pp : {
+           gpu: oi
+         },
+         cp = bp();
+       Wi = fp(), ci = new Xp({
+           changed: Si,
+           aW: () => {
+             wi({
+               heldN: void 0
+             })
+           },
+           sx: pp => {
+             var ip;
+             const cp = bp()[pp],
+ ... (48 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L192-L193` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L449-L450) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L192-L193)

```diff
-     function zz(DD) {
-       return qD(DD, RD.e.OnlyInCategory)
+     function Ui() {
+       null !== ci && fp() !== Wi && (sp = null, yi())
```

#### 25. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L197` → after: `L454-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L454-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L454-L458) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L197)

```diff
-       return qD(DD, RD.e.DevOnly)
+       Dp.h.setItem(Bp, {
+         ...hp(),
+         ...pp,
+         gpu: oi
+       })
```

#### 26. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L200-L201` → after: `L465-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L465-L466) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L200-L201)

```diff
-     function pz(DD) {
-       return !qD(DD, RD.e.HiddenByDefault) && void 0
+     function ei() {
+       vi++
```

#### 27. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L204-L207` → after: `L469-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L469-L471) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L204-L207)

```diff
-     function sz(DD, zD, wD, pD) {
-       var sD;
-       const KD = null !== (sD = iD(DD)) && void 0 !== sD ? sD : 0;
-       return 0 !== (KD & RD.e.DisabledInPublicLobbies) && zD || 0 !== (KD & RD.e.DisabledInProduction) && !0 || !wD || !pD && 0 !== (KD & RD.e.DevOnly)
+     function ui(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       Ui(), null !== ci && (pp - Hi >= 1e3 && (di = vi - ti > Yp.d.sceneChange.meshesPerSecond, ti = vi, Hi = pp), Jp.c.isHeld() ? ci.paused(pp) : ci.frame(pp, ip, cp && !document.hidden && Zp(), di || Op > 0 || (0, Sp.l)()))
```

#### 28. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L212-L221` → after: `L475-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L475-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L475-L482) · [Before (L212-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L212-L221)

```diff
-       if (null === Kz) {
-         const DD = rD.split(RD.t),
-           zD = new Map,
-           wD = new RD.u(KD);
-         let pD = 0,
-           sD = 0;
-         for (; !wD.done;) {
-           pD += (0, RD.H)(wD.next());
-           const KD = wD.next();
-           zD.set(pD, Object.freeze(DD.slice(sD, sD + KD))), sD += KD
+       if (!Oi) {
+         Oi = !0, null !== ci && (ci = null, wi({
+           noGain: void 0
+         }));
+         try {
+           Si()
+         } catch (pp) {
+           console.error("The quality steps' resize to the player's n failed", pp)
```

#### 29. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L225` → after: `L485-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L485-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/198.js#L485-L518) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/198.js#L225)

```diff
-       return Kz
+     }
+ 
+     function ki() {
+       var pp;
+       null === (pp = ci) || void 0 === pp || pp.resized(performance.now())
+     }
+   },
+   34367: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip
+     });
+     var Op = cp(104),
+       op = cp(129);
+ 
+     function Ip(pp, ip, cp) {
+       if ("webgpu" === pp) return cp ? ((0, Op.seedGpuVendor)(cp), {
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/199.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/199.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93)

#### 1. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L4)

```diff
-   41421: (DD, zD, wD) => {
+   37169: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L6)

```diff
-       c: () => KD
+       b: () => op,
+       e: () => Ip,
+       h: () => xp,
+       l: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L8-L9` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L11-L13) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L8-L9)

```diff
-     var pD = wD(58),
-       sD = wD(2750);
+     var Op = cp(1779);
+     const op = ".bloxdreplay",
+       Ip = "application/octet-stream";
```

#### 4. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L11-L20` → after: `L15-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L15-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L15-L147) · [Before (L11-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L11-L20)

```diff
-     function KD(DD, zD, wD) {
-       const KD = (0, pD.useRef)(null),
-         {
-           width: rD,
-           height: LD
-         } = (0, sD.d)(DD);
-       (0, pD.useEffect)((() => {
-         const wD = zD(DD.current);
-         return KD.current = wD, () => {
-           wD.close(), KD.current = null
+     function Sp() {
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${op}`
+     }
+ 
+     function xp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp();
+       return (0, Op.c)(new Blob([pp], {
+         type: Ip
+       }), ip), ip
+     }
+   },
+   37151: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       f: () => Ip
+     });
+ ... (117 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L22-L26` → after: `L149-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L149-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L149-L163) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L22-L26)

```diff
-       }), [DD, zD]), (0, pD.useEffect)((() => {
-         rD <= 0 || LD <= 0 || KD.current.resize(rD, LD)
-       }), [rD, LD]), (0, pD.useEffect)((() => {
-         KD.current.show(wD)
-       }), [wD])
+       },
+       xp = new Set(Object.values(Sp).filter((pp => "Error" === pp.type)).map((pp => pp.text)));
+ 
+     function Lp(pp) {
+       return pp instanceof Error && xp.has(pp.message) ? pp.message : void 0
+     }
+ 
+     function Yp(pp) {
+       var ip;
+       const cp = null !== (ip = pp.timeoutMs) && void 0 !== ip ? ip : "Error" === pp.type ? op : Ip;
+       Op.m.GA("showBottomMessage", {
+         message: pp.text,
+         timeoutLength: cp,
+         type: pp.type
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L29` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L166) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L29)

```diff
-   41423: (DD, zD, wD) => {
+   36693: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L32-L33` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L169) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L32-L33)

```diff
-       d: () => AD,
-       e: () => cD
+       f: () => Ip
```

#### 8. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L35-L36` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L171) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L35-L36)

```diff
-     var pD = wD(37164),
-       sD = wD(38621);
+     let Op = !1;
```

#### 9. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L38-L46` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L173-L174) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L38-L46)

```diff
-     function KD(DD, zD) {
-       let [wD, pD, sD] = DD;
-       return [0, .5, 1].map((DD => ({
-         timeFraction: DD,
-         rotation: {
-           XK: "catmull-rom-spline",
-           point: [wD, pD, sD + (.5 === DD ? zD : 0)]
-         }
-       })))
+     function op() {
+       return Op
```

#### 10. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L49-L79` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L177-L178) · [Before (L49-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L49-L79)

```diff
-     function rD(DD, zD, wD) {
-       return {
-         nK: 3200,
-         loop: !0,
-         JK: {
-           Root: {
-             timeline: [0, .5, 1].map((DD => ({
-               timeFraction: DD,
-               position: {
-                 XK: "catmull-rom-spline",
-                 point: [0, .5 === DD ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((DD => ({
- ... (15 more removed lines; see GitHub link above)
+     function Ip(pp) {
+       return Op !== pp && (Op = pp, !0)
```

#### 11. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L88` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L181) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L88)

```diff
-   38621: (DD, zD, wD) => {
+   34386: (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L90` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L183) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L90)

```diff
-       d: () => sD,
+       c: () => Ip,
```

#### 13. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L93` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L186) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L93)

```diff
-     const pD = new WeakMap;
+     var Op = cp(25);
```

#### 14. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L96` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L189) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L96)

```diff
-       return pD.set(DD, zD), DD
+       return pp && !ip
```

#### 15. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L99-L101` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L192-L193) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L99-L101)

```diff
-     function KD(DD) {
-       var zD;
-       return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : null
+     function Ip() {
+       return op(Op.c.get("isTouchScreen"), Op.c.get("clientEscMenuOptions").touchActionButtons)
```

#### 16. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L104` → after: `L196-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L196-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L196-L202) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L104)

```diff
-   34238: (DD, zD, wD) => {
+   37010: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op
+     });
+     const Op = 3
+   },
+   37021: (pp, ip, cp) => {
```

#### 17. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L108` → after: `L211-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L211-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L211-L215) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L108)

```diff
-       j: () => RD
+       j: () => Hp,
+       n: () => jp,
+       q: () => ep,
+       u: () => wp,
+       y: () => yp
```

#### 18. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L110` → after: `L217-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L217-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L217-L230) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L110)

```diff
-     var pD = wD(1570);
+     var Op = cp(1424),
+       op = cp(37025),
+       Ip = cp(34);
+     const Sp = "clientGameCraftableMarksChanged",
+       xp = "clientGameCraftableLocksChanged",
+       Lp = "clientGameCraftableOrderChanged",
+       Yp = "selectCraftable";
+     let Dp = new Set,
+       Ap = new Map,
+       Pp = new Map;
+ 
+     function Wp() {
+       return Dp
+     }
```

#### 19. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L113-L117` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L233-L234) · [Before (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L113-L117)

```diff
-       var zD;
-       return {
-         ...rD.store,
-         yaw: rD.store.yaw + (null !== (zD = pD.b[DD].previewYaw) && void 0 !== zD ? zD : 0)
-       }
+       const ip = new Set(pp);
+       (0, op.b)(ip, Dp) || (Dp = ip, Ip.m.GA(Sp, Dp))
```

#### 20. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L134-L137` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L237-L238) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L134-L137)

```diff
-     function LD(DD, zD) {
-       DD instanceof Promise ? DD.then(zD).catch((DD => {
-         console.error("Couldn't open the preview", DD)
-       })) : zD(DD)
+     function Up() {
+       return Ap
```

#### 21. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L139-L159` → after: `L240-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L240-L242) · [Before (L139-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L139-L159)

```diff
-     class cD {
-       constructor(DD) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, LD(DD, (DD => {
-           this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
-         }))
-       }
-       show(DD) {
-         var zD;
-         this.view = DD, null === (zD = this.opened) || void 0 === zD || zD.show(DD)
-       }
-       resize(DD, zD) {
-         var wD;
-         this.size = {
-           width: DD,
-           height: zD
-         }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
- ... (5 more removed lines; see GitHub link above)
+ 
+     function wp(pp) {
+       0 === pp.size && 0 === Ap.size || (Ap = new Map(pp), Ip.m.GA(xp, Ap))
```

#### 22. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L161-L201` → after: `L244-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L244-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L244-L258) · [Before (L161-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L161-L201)

```diff
-     class gD {
-       constructor(DD) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), LD(DD, (DD => {
-           this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
-         }))
-       }
-       get dev() {
-         return this.opened.dev
-       }
-       isReady() {
-         var DD, zD;
-         return null !== (DD = null === (zD = this.opened) || void 0 === zD ? void 0 : zD.isReady()) && void 0 !== DD && DD
-       }
-       setCosmetic(DD, zD) {
-         var wD;
-         null === (wD = this.opened) || void 0 === wD || wD.setCosmetic(DD, zD)
- ... (25 more removed lines; see GitHub link above)
+ 
+     function vp() {
+       return Pp
+     }
+ 
+     function tp(pp) {
+       pp.length === Pp.size && pp.every(((pp, ip) => Pp.get(pp) === ip)) || (Pp = new Map(pp.map(((pp, ip) => [pp, ip]))), Ip.m.GA(Lp, Pp))
+     }
+ 
+     function Hp(pp, ip, cp, Op) {
+       if (! function(pp, ip, cp) {
+           return pp.size > 0 || ip.size > 0 || cp.size > 0
+         }(ip, cp, Op)) return pp;
+       const op = pp => {
+         const Op = cp.get(pp.name);
```

#### 23. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L203-L204` → after: `L260-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L260-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L260-L266) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L203-L204)

```diff
-         this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
-       }
+         return Op ? null !== (op = Op.stepsAway) && void 0 !== op ? op : 1 : ip.has(pp.name) ? -1 : 0
+       };
+       return [...pp].sort(((pp, ip) => op(pp) - op(ip) || ((pp, ip) => {
+         const cp = Op.get(pp.name),
+           op = Op.get(ip.name);
+         return void 0 === cp || void 0 === op ? (void 0 === cp ? 1 : 0) - (void 0 === op ? 1 : 0) : Number(ip.haveIngredients) - Number(pp.haveIngredients) || cp - op
+       })(pp, ip)))
```

#### 24. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L206-L234` → after: `L268-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L268-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L268-L276) · [Before (L206-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L206-L234)

```diff
-     const RD = new class {
-       constructor() {
-         this.host = null, this.makeDefault = null
-       }
-       setHost(DD) {
-         this.host = DD
-       }
-       setDefaultHost(DD) {
-         this.makeDefault = DD
-       }
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
-         }
-         return this.host
- ... (13 more removed lines; see GitHub link above)
+ 
+     function dp(pp, ip, cp) {
+       const Op = [...ip.keys()].sort(((pp, cp) => ip.get(pp) - ip.get(cp)));
+       return pp.forEach(((op, Ip) => {
+         const Sp = cp(op);
+         ip.has(Sp) || (Op.splice(0 === Ip ? 0 : Op.indexOf(cp(pp[Ip - 1])) + 1, 0, Sp), ip.set(Sp, -1))
+       })), Op.forEach(((pp, cp) => {
+         ip.set(pp, cp)
+       })), [...pp].sort(((pp, Op) => ip.get(cp(pp)) - ip.get(cp(Op))))
```

#### 25. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L236-L252` → after: `L278-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L278-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L278-L284) · [Before (L236-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L236-L252)

```diff
-   },
-   34233: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD.d,
-       c: () => pD.h,
-       e: () => pD.j
-     });
-     var pD = wD(34238);
-     class sD {
-       constructor(DD) {
-         this.load = DD, this.loaded = null, this.loading = null
-       }
-       run(DD) {
-         return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
-           throw this.loading = null, DD
-         })), this.loading.then(DD))
- ... (1 more removed lines; see GitHub link above)
+ 
+     function ep(pp, ip) {
+       const cp = {
+         variation: pp,
+         itemName: ip
+       };
+       Ip.m.GA(Yp, cp)
```

#### 26. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L254-L269` → after: `L286-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L286-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L286-L300) · [Before (L254-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L254-L269)

```diff
-     class KD {
-       constructor() {
-         this.mobScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e … [truncated]
-       }
-       openMob(DD) {
-         return this.mobScene.run((zD => zD.openMobPreview(DD)))
-       }
-       openPet(DD) {
-         return this.mobScene.run((zD => zD.openPetPreview(DD)))
-       }
-       openMobLineup(DD) {
-         return this.mobScene.run((zD => zD.openMobLineupPreview(DD)))
-       }
-       openCharacter(DD, zD) {
-         return this.characterScene.run((wD => wD.openCharacterPreview(DD, zD)))
-       }
+ 
+     function jp() {
+       yp([]), wp(new Map), tp([])
+     }
+ 
+     function kp() {
+       return (0, Op.d)(Sp, Wp)
+     }
+ 
+     function mp() {
+       return (0, Op.d)(xp, Up)
+     }
+ 
+     function Rp() {
+       return (0, Op.d)(Lp, vp)
```

#### 27. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L273-L275` → after: `L303-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L303-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L303-L306) · [Before (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L273-L275)

```diff
-   41663: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       FrontlineMvpLineup: () => AD
+   37019: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip,
+       f: () => op
```

#### 28. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L277-L283` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L308) · [Before (L277-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L277-L283)

```diff
-     var pD = wD(58),
-       sD = wD(1044),
-       KD = wD.n(sD),
-       rD = wD(34233),
-       LD = wD(41423),
-       cD = wD(41421),
-       gD = wD(1096);
+     let Op = () => null;
```

#### 29. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L286-L332` → after: `L311-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L311-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L311-L316) · [Before (L286-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L286-L332)

```diff
-       return rD.e.openMobLineup(DD)
-     }
-     const AD = (0, pD.memo)((function(DD) {
-       let {
-         players: zD,
-         className: wD
-       } = DD;
-       const sD = (0, pD.useRef)(null),
-         rD = (0, pD.useMemo)((() => zD.map((DD => {
-           let {
-             cosmetics: zD,
-             size: wD,
-             heldGun: pD
-           } = DD;
-           return {
-             cosmetics: zD,
- ... (31 more removed lines; see GitHub link above)
+       Op = pp
+     }
+ 
+     function Ip(pp, ip) {
+       return Op(pp, ip)
+     }
```

#### 30. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L334` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L318) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L334)

```diff
-   37164: (DD, zD, wD) => {
+   36764: (pp, ip, cp) => {
```

#### 31. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L339-L341` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L325-L327) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L339-L341)

```diff
-     var pD = wD(37151),
-       sD = wD(351),
-       KD = wD(1886);
+     var Op = cp(36767);
+     const op = "data-camera-fade",
+       Ip = "data-letterbox-bar";
```

#### 32. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L344-L345` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L330) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L344-L345)

```diff
-       if ("nK" in DD) return ED.createAnimationScript(DD);
-       return new gD(DD).createAnimationScript()
+       return pp instanceof Element && pp.hasAttribute(Ip)
```

#### 33. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L348-L350` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L334-L335) · [Before (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L348-L350)

```diff
-     function LD(DD, zD, wD, sD) {
-       const KD = DD.nK <= 0 ? 1 : zD + wD * Math.max(0, sD) / DD.nK;
-       return DD.MK === pD.h.LoopOnLastFrame ? KD % 1 : DD.MK === pD.h.NoLoop && KD >= 1 ? null : Math.min(1, KD)
+     function Lp(pp) {
+       xp = pp
```

#### 34. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L352-L357` → after: `L337-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L337-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L337-L341) · [Before (L352-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L352-L357)

```diff
-     class cD {
-       createAnimationScript(DD) {
-         const {
-           nK: zD,
-           loop: wD,
-           JK: pD
+ 
+     function Yp() {
+       const pp = document.createElement("div"),
+         {
+           style: ip
```

#### 35. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L359-L363` → after: `L343-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L343-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L343-L364) · [Before (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L359-L363)

```diff
-         return {
-           nK: Math.round(zD),
-           MK: this.createLoopMode(null !== wD && void 0 !== wD && wD),
-           JK: this.createNodeSkeletonAnimationScript(null !== pD && void 0 !== pD ? pD : null)
-         }
+       return ip.position = "absolute", ip.left = "0", ip.right = "0", ip.pointerEvents = "none", pp
+     }
+ 
+     function Dp(pp) {
+       const ip = Yp();
+       ip.style[pp] = "0", ip.style.height = 100 * Op.e + "%", ip.style.background = "#000000", ip.style.pointerEvents = "auto", ip.setAttribute(Ip, ""), ip.addEventListener("mousedown", Pp), ip.addEventListener("contextmenu", Ap);
+       for (const cp of ["touchstart", "touchmove", "touchend", "touchcancel"]) ip.addEventListener(cp, Ap);
+       return ip
+     }
+ 
+     function Ap(pp) {
+       pp.preventDefault(), pp.stopPropagation()
+     }
+ 
+     function Pp(pp) {
+       Ap(pp);
+ ... (6 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L365-L374` → after: `L366-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L366-L374) · [Before (L365-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L365-L374)

```diff
-       createLoopMode(DD) {
-         switch (DD) {
-           case !1:
-             return pD.h.NoLoop;
-           case !0:
-             return pD.h.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return pD.h.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${DD}`)
+       setFade(pp, ip) {
+         var cp;
+         if (!this.elements && ip <= 0) return;
+         const {
+           fade: Op
+         } = this.getElements(), op = null !== (cp = xp) && void 0 !== cp ? cp : this.getContainer();
+         Op.parentElement !== op && op.appendChild(Op);
+         const Ip = this.markHost(ip > 0 ? xp : null, ip >= 1);
+         (pp !== this.colour || ip !== this.alpha || Ip) && (pp !== this.colour && (Op.style.background = pp), Op.style.opacity = String(ip), Op.style.display = ip > 0 ? "" : "none", this.fadeKeeperHosts(ip), this.colour = pp, this.alpha = ip)
```

#### 37. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L376-L383` → after: `L376-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L376-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L376-L380) · [Before (L376-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L376-L383)

```diff
-       createNodeSkeletonAnimationScript(DD) {
-         if (null === DD) return null;
-         const zD = {};
-         for (const wD in DD) {
-           const pD = DD[wD];
-           zD[wD] = this.createNodeAnimationScript(pD)
-         }
-         return zD
+       fadeKeeperHosts(pp) {
+         var ip;
+         const cp = null === (ip = this.markedHost) || void 0 === ip ? void 0 : ip.parentElement;
+         if (cp)
+           for (const Op of cp.querySelectorAll("[data-camera-keeper-host]")) Op.style.setProperty("--camera-fade-alpha", String(pp))
```

#### 38. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L385` → after: `L382-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L382-L384) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L385)

```diff
-       createNodeAnimationScript(DD) {
+       setLetterbox(pp, ip) {
+         if (pp === this.letterbox) return;
+         if (!this.elements && !pp) return;
```

#### 39. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L387-L415` → after: `L386-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L386-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L386-L397) · [Before (L387-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L387-L415)

```diff
-           timeline: zD
-         } = DD, wD = zD.filter((DD => Number.isFinite(DD.timeFraction)));
-         return wD.sort(((DD, zD) => DD.timeFraction - zD.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(wD, "rotation", UD),
-           position: this.createTimelineFromKeyframes(wD, "position", ID)
-         }
-       }
-       createTimelineFromKeyframes(DD, zD, wD) {
-         const pD = [];
-         for (const cD of DD) {
-           const DD = cD[zD];
-           if (DD) {
-             const zD = this.createAnimationFrameWithoutPrecomputes(cD.timeFraction, DD);
-             RD(zD) && pD.push(zD)
-           }
-         }
- ... (13 more removed lines; see GitHub link above)
+           top: cp,
+           bottom: Op
+         } = this.getElements();
+         this.letterbox = pp;
+         const op = !ip || "function" === typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "transform 400ms ease-in-out";
+         cp.style.transition = op, Op.style.transition = op, cp.style.transform = pp ? "translateY(0)" : "translateY(-100%)", Op.style.transform = pp ? "translateY(0)" : "translateY(100%)"
+       }
+       clear() {
+         const {
+           elements: pp
+         } = this;
+         pp && (this.markHost(null, !1), pp.fade.remove(), pp.top.remove(), pp.bottom.remove(), this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1)
```

#### 40. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L417-L418` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L399) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L417-L418)

```diff
-       createAnimationFrameWithoutPrecomputes(DD, zD) {
-         let wD, pD, sD = null;
+       markHost(pp, ip) {
```

#### 41. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L420-L433` → after: `L401-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L401-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L401-L419) · [Before (L420-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L420-L433)

```diff
-         if ("object" === typeof zD && "point" in zD) sD = null !== (KD = zD.XK) && void 0 !== KD ? KD : null, wD = zD.point, pD = zD.point;
-         else if ("object" === typeof zD && "pre" in zD) {
-           var rD;
-           sD = null !== (rD = zD.XK) && void 0 !== rD ? rD : null, wD = zD.pre, pD = zD.post
-         } else wD = zD, pD = zD;
-         return {
-           timeFraction: DD,
-           XK: this.createLerpMode(sD),
-           pre: wD,
-           post: pD
-         }
-       }
-       createLerpMode(DD) {
-         return null === DD ? pD.e.Linear : cD.LERP_MODE_SCHEMA_MAPPING[DD]
+         const Op = pp !== this.markedHost;
+         if (!Op && ip === this.markedCovered) return !1;
+         var Ip, Sp;
+         Op && (null === (Ip = this.markedHost) || void 0 === Ip || null === (Sp = Ip.parentElement) || void 0 === Sp || Sp.removeAttribute(op));
+         return null === pp || void 0 === pp || null === (cp = pp.parentElement) || void 0 === cp || cp.setAttribute(op, ip ? "covered" : ""), this.markedHost = pp, this.markedCovered = ip, Op
+       }
+       getElements() {
+         if (this.elements) return this.elements;
+         const pp = Dp("top"),
+           ip = Dp("bottom");
+         pp.style.transform = "translateY(-100%)", ip.style.transform = "translateY(100%)";
+         const cp = Yp();
+         cp.style.top = "0", cp.style.bottom = "0", cp.style.display = "none", cp.setAttribute("data-camera-fade-layer", "");
+         const Op = this.getContainer();
+         return Op.appendChild(pp), Op.appendChild(ip), pp.getBoundingClientRect(), this.elements = {
+           fade: cp,
+ ... (3 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L436-L453` → after: `L422-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L422-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L422-L467) · [Before (L436-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L436-L453)

```diff
-     cD.LERP_MODE_SCHEMA_MAPPING = {
-       linear: pD.e.Linear,
-       "catmull-rom-spline": pD.e.CatmullRomSpline
-     };
-     class gD {
-       constructor(DD) {
-         this.animationSchema = DD
-       }
-       createAnimationScript() {
-         const {
-           animation_length: DD,
-           loop: zD,
-           bones: wD
-         } = this.animationSchema;
-         return {
-           nK: Math.round(1e3 * DD),
- ... (2 more removed lines; see GitHub link above)
+   },
+   37207: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp,
+       d: () => op,
+       f: () => Ip,
+       h: () => Op,
+       i: () => Dp,
+       j: () => Ap,
+       m: () => Lp
+     });
+     const Op = [0, 0, 1, 1],
+       op = [.42, 0, 1, 1],
+       Ip = [0, 0, .58, 1],
+       Sp = [.42, 0, .58, 1];
+ 
+ ... (30 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L455-L463` → after: `L469-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L469-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L469-L480) · [Before (L455-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L455-L463)

```diff
-       }
-       createLoopMode(DD) {
-         switch (DD) {
-           case !1:
-             return pD.h.NoLoop;
-           case !0:
-             return pD.h.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return pD.h.HoldOnLastFrame
+         const ip = Yp(Op, Ip, Dp);
+         if (Math.abs(ip) < 1e-6) break;
+         Dp = xp(Dp - pp / ip)
+       }
+       if (!Ap) {
+         let pp = 0,
+           ip = 1;
+         Dp = cp;
+         for (let op = 0; op < 12; op++) {
+           const op = Lp(Op, Ip, Dp);
+           if (Math.abs(op - cp) < 1e-6) break;
+           cp > op ? pp = Dp : ip = Dp, Dp = (pp + ip) / 2
```

#### 44. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L467-L474` → after: `L483-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L483-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L483-L497) · [Before (L467-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L467-L474)

```diff
-       createNodeSkeletonAnimationScript(DD) {
-         if (null === DD) return null;
-         const zD = {};
-         for (const wD in DD) {
-           const pD = DD[wD];
-           zD[wD] = this.createNodeAnimationScript(pD)
-         }
-         return zD
+       return Lp(op, Sp, Dp)
+     }
+ 
+     function Ap(pp) {
+       switch (pp) {
+         case "linear":
+           return Op;
+         case "easeIn":
+           return op;
+         case "easeOut":
+           return Ip;
+         case "easeInOut":
+           return Sp;
+         default:
+           return pp
```

#### 45. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L476-L483` → after: `L499-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L499-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L499-L527) · [Before (L476-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L476-L483)

```diff
-       createNodeAnimationScript(DD) {
-         const {
-           rotation: zD,
-           position: wD
-         } = DD;
-         return {
-           rotation: this.createAnimationTimeline(null !== zD && void 0 !== zD ? zD : null, GD, UD, !0),
-           position: this.createAnimationTimeline(null !== wD && void 0 !== wD ? wD : null, nD, ID, !1)
+     }
+   },
+   36767: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op,
+       i: () => op,
+       j: () => Ip
+     });
+     const Op = .12,
+       op = 1 - 2 * Op;
+ 
+     function Ip(pp) {
+       return Math.abs(pp) > op
+     }
+   },
+   34375: (pp, ip, cp) => {
+ ... (13 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L486-L509` → after: `L530-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L530-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L530-L543) · [Before (L486-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L486-L509)

```diff
-       createAnimationTimeline(DD, zD, wD, pD) {
-         if (null === DD) return [];
-         if (Array.isArray(DD)) {
-           DD = {
-             "0.0": DD
-           }
-         }
-         const sD = Object.entries(DD).map((DD => {
-           let [wD, pD] = DD;
-           const sD = Number(wD) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(sD, pD, zD)
-         })).filter(RD);
-         sD.sort(((DD, zD) => DD.timeFraction - zD.timeFraction)), pD && function(DD) {
-           for (let zD = 1; zD < DD.length; zD++) {
-             const wD = DD[zD - 1].post,
-               pD = DD[zD],
- ... (8 more removed lines; see GitHub link above)
+       isHeld() {
+         return this.holding && op() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = op(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, Op.NU)(new Error("Game view size held for 60 s"))
+         }), 6e4)
+       }
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const pp of this.resizers) pp()
```

#### 47. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L511-L522` → after: `L545-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L545-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L545-L552) · [Before (L511-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L511-L522)

```diff
-         }(sD);
-         const KD = [];
-         for (let gD = 0; gD < sD.length; gD++) {
-           var rD, LD, cD;
-           const DD = sD[gD],
-             zD = null !== (rD = sD[gD - 1]) && void 0 !== rD ? rD : DD,
-             pD = null !== (LD = sD[gD + 1]) && void 0 !== LD ? LD : DD,
-             RD = null !== (cD = sD[gD + 2]) && void 0 !== cD ? cD : pD;
-           KD.push({
-             ...DD,
-             ...wD(zD.post, zD.timeFraction, DD.post, DD.timeFraction, pD.pre, pD.timeFraction, RD.pre, RD.timeFraction)
-           })
+         }), 1e3)
+       }
+       heldSizer(pp) {
+         let ip = !1;
+         return () => {
+           if (ip && this.isHeld()) return null;
+           const cp = pp();
+           return ip ||= null !== cp, cp
```

#### 48. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L526-L539` → after: `L555-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L555-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L555-L557) · [Before (L526-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L526-L539)

```diff
-       createAnimationFrameWithoutPrecomputes(DD, zD, wD) {
-         let pD, sD, KD = null;
-         if ("object" === typeof zD && "post" in zD) {
-           var rD;
-           KD = null !== (rD = zD.lerp_mode) && void 0 !== rD ? rD : null, sD = BD(zD.post, wD), pD = zD.pre ? BD(zD.pre, wD) : sD
-         } else {
-           const DD = BD(zD, wD);
-           sD = DD, pD = DD
-         }
-         return {
-           timeFraction: DD,
-           XK: this.createLerpMode(KD),
-           pre: pD,
-           post: sD
+       onRelease(pp) {
+         return this.resizers.add(pp), () => {
+           this.resizers.delete(pp)
```

#### 49. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L546-L548` → after: `L561-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L561-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L561-L568) · [Before (L546-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L546-L548)

```diff
- 
-     function RD(DD) {
-       return Number.isFinite(DD.timeFraction) && AD(DD.pre) && AD(DD.post)
+   },
+   36703: (pp, ip, cp) => {
+     const Op = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, cp(1201).d)(Op)
+   },
+   37025: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       return pp.size === ip.size && [...pp].every((pp => ip.has(pp)))
```

#### 50. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L551-L552` → after: `L606-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L606-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L606-L611) · [Before (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L551-L552)

```diff
-     function AD(DD) {
-       return Number.isFinite(DD[0]) && Number.isFinite(DD[1]) && Number.isFinite(DD[2])
+     function op(pp, ip) {
+       const {
+         numLines: cp,
+         charsPerLine: op
+       } = Op[ip];
+       return Hp(pp, cp, op, !1)
```

#### 51. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L555-L560` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L617) · [Before (L555-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L555-L560)

```diff
-     function UD(DD, zD, wD, pD, sD, KD, rD, LD) {
-       const cD = KD - zD,
-         gD = KD - pD,
-         RD = LD - pD,
-         AD = [null, null, null];
-       for (let UD = 0; UD < AD.length; UD++) AD[UD] = fD(DD[UD], wD[UD], sD[UD], rD[UD], cD, RD);
+     function Lp(pp, ip) {
```

#### 52. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L562-L563` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L619-L620) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L562-L563)

```diff
-         VK: gD,
-         PK: AD
+         width: Math.min(pp, xp) - 2 * Sp,
+         height: Math.min(ip, xp) - 2 * Sp
```

#### 53. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L567` → after: `L624-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L624-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/199.js#L624-L629) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/199.js#L567)

```diff
-     function fD(DD, zD, wD, pD, KD, rD) {
+     function Yp(pp, ip, cp) {
+       const op = Lp(pp, ip),
+         {
+           numLines: Sp,
+           charsPerLine: xp
+         } = Op[cp];
```
