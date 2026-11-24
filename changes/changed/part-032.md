# Changed — Bundle Modifications Report (Part 032 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `32 / 65` (**256** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 031](part-031.md) · [Part 033 →](part-033.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (469 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 252. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6177-L6178` → after: `L7125-L7130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7125-L7130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7125-L7130) · [Before (L6177-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6177-L6178)

```diff
-       isBlockInLoadedChunk(DD, zD, wD) {
-         return this.bloxd.XF(DD, zD, wD)
+     }
+ 
+     function jS(pp) {
+       return {
+         model: pp.model,
+         text: tS(pp.text, US)
```

#### 253. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6180-L6181` → after: `L7132-L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7132-L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7132-L7149) · [Before (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6180-L6181)

```diff
-       getBlockId(DD, zD, wD) {
-         return this.bloxd.OJ(DD, zD, wD)
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

#### 254. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6183-L6187` → after: `L7151-L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7151-L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7151-L7153) · [Before (L6183-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6183-L6187)

```diff
-       playSound(DD, zD, wD, pD, sD) {
-         let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         if (!this.isLocalPlayer(DD)) return null;
-         const rD = this.sounds.play(zD, wD, null === sD || void 0 === sD ? void 0 : sD.ws, null === sD || void 0 === sD ? void 0 : sD.maxHearDist, null === sD || void 0 === sD ? void 0 : sD.refDistance, KD);
-         return 1 === pD ? rD : rD.rate(pD)
+       drop(pp) {
+         var ip;
+         clearTimeout(null === (ip = this.open.get(pp)) || void 0 === ip ? void 0 : ip.timer), this.open.delete(pp)
```

#### 255. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6189-L6190` → after: `L7155-L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7155-L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7155-L7159) · [Before (L6189-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6189-L6190)

```diff
-       preloadSounds(DD) {
-         for (const zD of DD) this.sounds.preload(zD)
+       requestEnded(pp) {
+         const ip = this.open.get(pp);
+         ip && (clearTimeout(ip.timer), ip.timer = setTimeout((() => {
+           this.open.delete(pp), this.send(ip.Yy)
+         }), 2e4))
```

#### 256. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6192-L6280` → after: `L7161-L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7161-L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7161-L7164) · [Before (L6192-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6192-L6280)

```diff
-       setBlockId(DD, zD, wD, pD) {
-         this.bloxd.jT(DD, zD, wD, pD)
-       }
-       particlesEnabled() {
-         return this.output.particles.enabled()
-       }
-       createParticles(DD, zD) {
-         return this.output.particles.create(DD, zD)
-       }
-       playParticleEffect(DD) {
-         this.output.particles.playEffect(DD)
-       }
-       burstParticlePreset(DD, zD, wD) {
-         this.output.particles.burstPreset(DD, zD, wD)
-       }
-       createGameMesh(DD, zD, wD) {
- ... (73 more removed lines; see GitHub link above)
+       send(pp) {
+         (function(pp) {
+           return (new TextEncoder).encode(JSON.stringify(pp)).length <= vS
+         })(pp) && this.Yy(pp)
```

#### 257. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6283-L6284` → after: `L7167-L7169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7167-L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7167-L7169) · [Before (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6283-L6284)

```diff
-     var Oc = wD(39092);
-     const Jc = 256;
+     const mS = [],
+       RS = 5;
+     let qS = !1;
```

#### 258. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6286-L6323` → after: `L7171-L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7171-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7171-L7201) · [Before (L6286-L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6286-L6323)

```diff
-     function Ec(DD, zD, wD) {
-       const pD = function(DD) {
-         const zD = (0, ED.j)(DD, "groundArrowPathTex", {
-             width: Jc,
-             height: Jc,
-             mipmaps: !1,
-             samplingMode: OD.i.nearestNearestMipLinear,
-             hasAlpha: !0,
-             wrap: OD.c.wrap
-           }),
-           wD = (0, ED.g)(zD),
-           pD = Jc;
-         wD.clearRect(0, 0, pD, pD), wD.fillStyle = "white";
-         const sD = 3,
-           KD = pD / sD,
-           rD = .1 * pD,
- ... (22 more removed lines; see GitHub link above)
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
+     }
+ 
+     function CS() {
+       const pp = AS.get();
+ ... (15 more added lines; see GitHub link above)
```

#### 259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6326-L6330` → after: `L7206-L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7206-L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7206-L7243) · [Before (L6326-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6326-L6330)

```diff
-       width: 1,
-       alpha: .8
-     };
-     let Xc = Qc;
-     const Vc = new Set;
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

#### 260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6333-L6336` → after: `L7246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7246) · [Before (L6333-L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6333-L6336)

```diff
-       Xc = null !== DD && void 0 !== DD ? DD : Qc;
-       for (const zD of Vc)(0, oD.e)(zD, {
-         alpha: Xc.alpha
-       })
+       return pp.trim().replace(/^[A-Z_]+\s*=\s*/, "").replace(/^["'`]+|["'`]+$/g, "").replace(/^Bearer\s+/i, "").replace(/\s+/g, "")
```

#### 261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6338-L6356` → after: `L7248-L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7248-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7248-L7258) · [Before (L6338-L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6338-L6356)

```diff
-     const Cc = .02;
-     class xc {
-       constructor(DD, zD, wD) {
-         this.AU = DD, this.buffers = zD, this.positions = void 0, this.uvs = void 0, this.cachedIndices = void 0, this.edgeResult = {
-           pos: new Float32Array(2),
-           axis: "x"
-         }, this.wallClimbResult = new Float32Array(2), this.mesh = null, this.material = null, this.lastVertPairCount = 0, this.uvOffset = 0, this.colour = void 0, this.positions = new Float32Array(6 * wD), this.uvs = new Float32Array(4 * wD), this.cachedIndices = new Uint16Array … [truncated]
-       }
-       setColour(DD) {
-         this.colour = DD, this.material && function(DD, zD) {
-           (0, oD.e)(DD, {
-             emissiveColor: (0, Oc.b)(zD)
-           })
-         }(this.material, DD)
-       }
-       render(DD, zD) {
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

#### 262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6358-L6360` → after: `L7260-L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7260-L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7260-L7270) · [Before (L6358-L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6358-L6360)

```diff
-       hide() {
-         var DD;
-         null === (DD = this.mesh) || void 0 === DD || DD.nC(!1)
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

#### 263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6362-L6363` → after: `L7272-L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7272-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7272-L7296) · [Before (L6362-L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6362-L6363)

```diff
-       dispose() {
-         this.mesh && (this.mesh.dispose(), this.mesh = null), this.material && (Vc.delete(this.material), this.material.dispose(!0, !0), this.material = null)
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

#### 264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6365-L6388` → after: `L7298-L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7298-L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7298-L7307) · [Before (L6365-L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6365-L6388)

```diff
-       buildStripGeometry(DD) {
-         const {
-           sampleX: zD,
-           sampleY: wD,
-           sampleZ: pD,
-           sampleAirborne: sD,
-           perp: KD,
-           direction: rD
-         } = this.buffers, [LD, cD] = KD, [gD, RD] = rD, AD = this.positions, UD = this.uvs;
-         let fD = 0,
-           ID = 0;
-         fD = this.writeStripVerts(AD, UD, fD, zD[0], wD[0] + Cc, pD[0], LD, cD, ID);
-         for (let BD = 1; BD < DD; BD++) {
-           const DD = wD[BD - 1],
-             KD = wD[BD],
-             rD = KD - DD,
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

#### 265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6390-L6392` → after: `L7309-L7354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7309-L7354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7309-L7354) · [Before (L6390-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6390-L6392)

```diff
-           fD = this.writeStripVerts(AD, UD, fD, zD[BD], KD + Cc, pD[BD], LD, cD, ID)
-         }
-         return fD
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

#### 266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6394-L6400` → after: `L7356-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7356-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7356-L7366) · [Before (L6394-L6400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6394-L6400)

```diff
-       writeStripVerts(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
-         const gD = this.buffers.worldOffset,
-           RD = Xc.width / 2;
-         DD[wD] = pD + rD * RD - gD[0], DD[wD + 1] = sD - gD[1], DD[wD + 2] = KD + LD * RD - gD[2], DD[wD + 3] = pD - rD * RD - gD[0], DD[wD + 4] = sD - gD[1], DD[wD + 5] = KD - LD * RD - gD[2];
-         const AD = wD / 6 * 4,
-           UD = cD / 3;
-         return zD[AD] = 0, zD[AD + 1] = UD, zD[AD + 2] = 1, zD[AD + 3] = UD, wD + 6
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

#### 267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6402-L6414` → after: `L7368-L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7368-L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7368-L7381) · [Before (L6402-L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6402-L6414)

```diff
-       buildWallClimb(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD) {
-         const {
-           sampleX: UD,
-           sampleZ: fD
-         } = this.buffers, ID = this.findBlockEdge(UD[sD - 1], fD[sD - 1], UD[sD], fD[sD]);
-         let BD, GD, hD = ID.pos[0],
-           nD = ID.pos[1];
-         if ("x" === ID.axis) {
-           BD = 0, GD = Math.sign(gD) || 1;
-           hD += (LD > 0 ? -(Math.sign(RD) || 1) : Math.sign(RD) || 1) * Cc
-         } else {
-           BD = Math.sign(cD) || 1, GD = 0;
-           nD += (LD > 0 ? -(Math.sign(AD) || 1) : Math.sign(AD) || 1) * Cc
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

#### 268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6416-L6454` → after: `L7383-L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7383-L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7383-L7385) · [Before (L6416-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6416-L6454)

```diff
-         const MD = ID.pos[0] - UD[sD - 1],
-           OD = ID.pos[1] - fD[sD - 1];
-         pD += Math.sqrt(MD * MD + OD * OD), wD = this.writeStripVerts(DD, zD, wD, hD, KD + Cc, nD, BD, GD, pD), pD += Math.abs(LD), wD = this.writeStripVerts(DD, zD, wD, hD, rD + Cc, nD, BD, GD, pD);
-         const JD = UD[sD] - ID.pos[0],
-           ED = fD[sD] - ID.pos[1];
-         return pD += Math.sqrt(JD * JD + ED * ED), this.wallClimbResult[0] = wD, this.wallClimbResult[1] = pD, this.wallClimbResult
-       }
-       findBlockEdge(DD, zD, wD, pD) {
-         const sD = Tc(DD, wD),
-           KD = Tc(zD, pD),
-           rD = Math.min(sD, KD);
-         return this.edgeResult.axis = sD <= KD ? "x" : "z", this.edgeResult.pos[0] = DD + (wD - DD) * rD, this.edgeResult.pos[1] = zD + (pD - zD) * rD, this.edgeResult
-       }
-       applyGeometry(DD) {
-         if (0 === DD) return void this.hide();
-         this.material || (this.material = Ec(this.AU.wB.Ul(), this.colour, Xc.alpha), Vc.add(this.material));
- ... (23 more removed lines; see GitHub link above)
+         return null
+       }(pp, ip.index)));
+       return Op && Op.index < ip && (ip = Op.index), pp.slice(0, ip).replace(/```[\w-]*\s*$/, "").trim()
```

#### 269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6458-L6464` → after: `L7389-L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7389-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7389-L7422) · [Before (L6458-L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6458-L6464)

```diff
-       const wD = zD - DD;
-       if (Math.abs(wD) <= .001) return 1;
-       const pD = Math.floor(DD),
-         sD = Math.floor(zD);
-       if (pD === sD) return 1;
-       const KD = ((wD > 0 ? sD : pD) - DD) / wD;
-       return KD <= 0 || KD >= 1 ? 1 : KD
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

#### 270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6470-L6477` → after: `L7426-L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7426-L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7426-L7465) · [Before (L6470-L6477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6470-L6477)

```diff
-       const wD = jc.get(DD);
-       if (null === zD) return void(wD && (DD.childrenNodeParams = wD, jc.delete(DD)));
-       const pD = null !== wD && void 0 !== wD ? wD : DD.childrenNodeParams,
-         sD = DD.childrenNodeParams.every((DD => DD.softTolerance === zD));
-       wD && sD || (jc.set(DD, pD), DD.childrenNodeParams = pD.map((DD => ({
-         ...DD,
-         softTolerance: zD
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

#### 271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6480-L6481` → after: `L7468-L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7468-L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7468-L7469) · [Before (L6480-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6480-L6481)

```diff
-       constructor(DD) {
-         this.AU = DD, this.nametagBases = new WeakMap, this.nametags = new Map, this.rotations = new Set
+       constructor(pp, ip, cp) {
+         this.provider = pp, this.baseUrl = ip, this.key = cp
```

#### 272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6483-L6493` → after: `L7471-L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7471-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7471-L7483) · [Before (L6483-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6483-L6493)

```diff
-       setNametagOffset(DD, zD) {
-         const wD = this.AU.yJ.wwD(DD);
-         if (this.nametags.get(DD) !== wD && this.nametags.delete(DD), !wD) return;
-         const pD = this.nametagBases.get(wD),
-           sD = pD && wD.nameYOffset === pD.written ? pD.base : wD.nameYOffset;
-         if (0 === zD) return void(pD && (wD.nameYOffset = sD, this.nametagBases.delete(wD), this.nametags.delete(DD)));
-         const KD = (null !== sD && void 0 !== sD ? sD : bc.b) + zD;
-         this.nametagBases.set(wD, {
-           base: sD,
-           written: KD
-         }), this.nametags.set(DD, wD), wD.nameYOffset = KD
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

#### 273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6495-L6497` → after: `L7485-L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7485-L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7485-L7528) · [Before (L6495-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6495-L6497)

```diff
-       setFacingTolerance(DD, zD) {
-         const wD = this.rotationState(DD);
-         wD ? (dc(wD, zD), null === zD ? this.rotations.delete(DD) : this.rotations.add(DD)) : this.rotations.delete(DD)
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

#### 274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6499-L6507` → after: `L7530-L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7530-L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7530-L7535) · [Before (L6499-L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6499-L6507)

```diff
-       restoreAll() {
-         for (const [DD, zD] of this.nametags) {
-           const wD = this.nametagBases.get(zD);
-           wD && this.AU.yJ.wwD(DD) === zD && zD.nameYOffset === wD.written && (zD.nameYOffset = wD.base), this.nametagBases.delete(zD)
-         }
-         this.nametags.clear();
-         for (const DD of this.rotations) {
-           const zD = this.rotationState(DD);
-           zD && dc(zD, null)
+       headers() {
+         return "" === this.key ? {
+           "Content-Type": "application/json"
+         } : {
+           Authorization: `Bearer ${this.key}`,
+           "Content-Type": "application/json"
```

#### 275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6519-L6536` → after: `L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7541) · [Before (L6519-L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6519-L6536)

```diff
-         this.AU = DD, this.meshes = new Map, this.materials = new Map, this.nextKey = 1
-       }
-       create(DD, zD, wD) {
-         const pD = this.nextKey++,
-           sD = this.AU.wB,
-           KD = (0, MD.q)(sD, `gameMesh${pD}`, {
-             positions: DD.positions.slice(),
-             indices: DD.indices.slice(),
-             ...DD.uvs ? {
-               uvs: DD.uvs.slice()
-             } : {}
-           }),
-           rD = this.material(zD);
-         return KD.material = rD, KD.uB = !1, KD.receiveShadows = !1, KD.lI = !0, sD.tB(KD, !1, wD), this.meshes.set(pD, {
-           node: KD,
-           material: rD,
- ... (2 more removed lines; see GitHub link above)
+         this.key = pp, this.chat = void 0, this.chat = new ix("openrouter", QS.openrouter.baseUrl, pp)
```

#### 276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6538-L6547` → after: `L7543-L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7543-L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7543-L7548) · [Before (L6538-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6538-L6547)

```diff
-       set(DD, zD) {
-         let {
-           anchor: wD,
-           visible: pD,
-           uvOffset: sD,
-           visibility: KD,
-           scale: rD
-         } = zD;
-         const LD = this.meshes.get(DD);
-         LD && (wD && LD.node.position.cwD(this.AU.JzD(wD, null, [])), void 0 !== pD && LD.node.nC(pD), sD && LD.scrolls && (0, ED.J)(LD.material, sD[1]), void 0 !== KD && (LD.node.visibility = KD), rD && LD.node.rc.set(rD[0], rD[1], rD[2]))
+       async check(pp) {
+         return await zS(gS, pp, (async pp => ZS("openrouter", `${QS.openrouter.baseUrl}/key`, {
+           headers: {
+             Authorization: `Bearer ${this.key}`
+           }
+         }, pp))), this.chat.check(pp)
```

#### 277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6549-L6551` → after: `L7550-L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7550-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7550-L7551) · [Before (L6549-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6549-L6551)

```diff
-       dispose(DD) {
-         var zD;
-         null === (zD = this.meshes.get(DD)) || void 0 === zD || zD.node.dispose(), this.meshes.delete(DD)
+       ask(pp, ip, cp) {
+         return this.chat.ask(pp, ip, cp)
```

#### 278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6553-L6560` → after: `L7553-L7556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7553-L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7553-L7556) · [Before (L6553-L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6553-L6560)

```diff
-       disposeAll() {
-         for (const {
-             node: DD
-           }
-           of this.meshes.values()) DD.dispose();
-         this.meshes.clear();
-         for (const DD of this.materials.values()) DD.dispose();
-         this.materials.clear()
+     }
+     class Ox {
+       constructor(pp) {
+         this.key = pp, this.baseUrl = QS.anthropic.baseUrl
```

#### 279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6562-L6571` → after: `L7558-L7568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7558-L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7558-L7568) · [Before (L6562-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6562-L6571)

```diff
-       material(DD) {
-         const zD = function(DD) {
-           switch (DD.kind) {
-             case void 0:
-             case "flatEmissive":
-               return DD.opaque ? `flat ${DD.rgb.join(" ")} opaque` : `flat ${DD.rgb.join(" ")} ${DD.alpha}${DD.onTop?" onTop":""}`;
-             case "chevronPath":
-               return `chevrons ${DD.colour} ${DD.alpha}`;
-             case "furnaceFire":
-               return "furnaceFire"
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
```

#### 280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6573-L6575` → after: `L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7570) · [Before (L6573-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6573-L6575)

```diff
-         }(DD);
-         let wD = this.materials.get(zD);
-         return wD || (wD = this.cachedMaterial(DD), this.materials.set(zD, wD)), wD.material
+         }))
```

#### 281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6577-L6580` → after: `L7572-L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7572-L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7572-L7598) · [Before (L6577-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6577-L6580)

```diff
-       cachedMaterial(DD) {
-         switch (DD.kind) {
-           case void 0:
-           case "flatEmissive": {
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
+ ... (11 more added lines; see GitHub link above)
```

#### 282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6582-L6605` → after: `L7600-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7600-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7600-L7615) · [Before (L6582-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6582-L6605)

```diff
-             const pD = this.flatEmissive(DD.rgb, DD.alpha, null !== (zD = DD.opaque) && void 0 !== zD && zD, null !== (wD = DD.onTop) && void 0 !== wD && wD);
-             return {
-               material: pD,
-               dispose: () => {
-                 pD.dispose()
-               }
-             }
-           }
-           case "chevronPath": {
-             const zD = Ec(this.AU.wB.Ul(), DD.colour, DD.alpha);
-             return {
-               material: zD,
-               dispose: () => {
-                 zD.dispose(!0, !0)
-               }
-             }
- ... (8 more removed lines; see GitHub link above)
+             const Ip = ip;
+             var Sp, Pp, Wp, yp;
+             if ("error" === Ip.type) throw new hS("overloaded_error" === (null === (Sp = Ip.error) || void 0 === Sp ? void 0 : Sp.type) || "rate_limit_error" === (null === (Pp = Ip.error) || void 0 === Pp ? void 0 : Pp.type) ? "busy" : "failed");
+             if ("content_block_start" === Ip.type && "tool_use" === (null === (Op = Ip.content_block) || void 0 === Op ? void 0 : Op.type)) Ap.set(null !== (Wp = Ip.index) && void 0 !== Wp ? Wp : Ap.size, {
+               name: null !== (yp = Ip.content_block.name) && void 0 !== yp ? yp : "",
+               args: ""
+             });
+             else if ("content_block_delta" === Ip.type) {
+               var Up, wp, vp, tp, Hp, dp;
+               xp += null !== (Up = null === (wp = Ip.delta) || void 0 === wp ? void 0 : wp.text) && void 0 !== Up ? Up : "", Lp += null !== (vp = null === (tp = Ip.delta) || void 0 === tp ? void 0 : tp.thinking) && void 0 !== vp ? vp : "";
+               const pp = Ap.get(null !== (Hp = Ip.index) && void 0 !== Hp ? Hp : -1);
+               var ep;
+               if (pp && "input_json_delta" === (null === (dp = Ip.delta) || void 0 === dp ? void 0 : dp.type)) pp.args += null !== (ep = Ip.delta.partial_json) && void 0 !== ep ? ep : ""
+             } else if ("message_delta" === Ip.type) {
+               var jp, kp;
+               Yp ||= "refusal" === (null === (jp = Ip.delta) || void 0 === jp ? void 0 : jp.stop_reason), Dp ||= "max_tokens" === (null === (kp = Ip.delta) || void 0 === kp ? void 0 : kp.stop_reason)
```

#### 283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6607-L6637` → after: `L7617-L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7617-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7617-L7632) · [Before (L6607-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6607-L6637)

```diff
-           }
-         }
-       }
-       furnaceFire() {
-         var DD;
-         const zD = this.AU.wB.Ul(),
-           wD = {
-             wrapU: OD.c.clamp,
-             wrapV: OD.c.clamp,
-             hasAlpha: !0
-           },
-           pD = (0, OD.A)(zD, {
-             url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADUSURBVCiRnVI7DoMwDH1GDKzNyFIOkgNUohKnYWTq2LkHiUSlHqAH6cSYuVs6hHxwAqV9UiQnmGf7+REijLI28f38nMjFBRjaXqPtNX9OE9EIoBFoew2jKl+hdIF91ABE+AEAMDHGmQnHgz2s7yI3RA70 … [truncated]
-             noMipmap: !0,
-             invertY: !1,
-             samplingMode: OD.i.nearest,
- ... (15 more removed lines; see GitHub link above)
+             null === (op = cp.onProgress) || void 0 === op || op.call(cp, {
+               model: pp,
+               reasoningChars: Lp.length,
+               answer: xp,
+               isCalling: Ap.size > 0
+             })
+           }));
+           const Pp = [...Ap.values()];
+           return KS(pp, {
+             answer: xp,
+             reasoning: Lp,
+             hOp: Yp,
+             isCutShort: Dp,
+             nativeCalls: Pp
+           }, cp.callFormat, cp.continueFrom)
+         }))
```

#### 284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6639-L6658` → after: `L7634-L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7634-L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7634-L7640) · [Before (L6639-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6639-L6658)

```diff
-       flatEmissive(DD, zD, wD, pD) {
-         const sD = wD ? {} : {
-           alpha: zD,
-           transparencyMode: PD.o.alphaBlend,
-           disableDepthWrite: !0,
-           depthFunction: pD ? PD.h.always : 0
-         };
-         return (0, oD.c)({
-           name: "gameMeshFlatEmissive",
-           oB: this.AU.wB.Ul(),
-           sets: {
-             specularColor: [0, 0, 0],
-             diffuseColor: [0, 0, 0],
-             emissiveColor: [DD[0], DD[1], DD[2]],
-             disableLighting: !0,
-             backFaceCulling: !0,
- ... (4 more removed lines; see GitHub link above)
+       headers() {
+         return {
+           "x-api-key": this.key,
+           "anthropic-version": "2023-06-01",
+           "anthropic-dangerous-direct-browser-access": "true",
+           "Content-Type": "application/json"
+         }
```

#### 285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6665-L6675` → after: `L7645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7645) · [Before (L6665-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6665-L6675)

```diff
-         this.AU = DD, this.pools = new Set, this.ctx = {
-           budget: 0,
-           frame: 0,
-           lit: !1
-         }, this.onBeforeRender = () => {
-           const {
-             ctx: DD
-           } = this;
-           DD.budget = 24, DD.frame++, DD.lit = this.AU.wB.ZB;
-           for (const zD of this.pools) zD.render(DD)
-         }
+         this.key = pp, this.baseUrl = QS.gemini.baseUrl
```

#### 286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6677-L6683` → after: `L7647-L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7647-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7647-L7662) · [Before (L6677-L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6677-L6683)

```diff
-       create(DD, zD) {
-         const wD = vD.i.itemsClient[DD.item];
-         if (!wD) return null;
-         const pD = new yc(this.AU, wD, DD, zD, (DD => {
-           this.remove(DD)
-         }));
-         return 0 === this.pools.size && this.AU.on("beforeRender", this.onBeforeRender), this.pools.add(pD), pD
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

#### 287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6685-L6686` → after: `L7664-L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7664-L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7664-L7727) · [Before (L6685-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6685-L6686)

```diff
-       disposeAll() {
-         for (const DD of [...this.pools]) DD.dispose()
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

#### 288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6688-L6689` → after: `L7729-L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7729-L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7729-L7733) · [Before (L6688-L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6688-L6689)

```diff
-       remove(DD) {
-         this.pools.delete(DD) && 0 === this.pools.size && this.AU.off("beforeRender", this.onBeforeRender)
+       headers() {
+         return {
+           "x-goog-api-key": this.key,
+           "Content-Type": "application/json"
+         }
```

#### 289. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6692-L6705` → after: `L7736-L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7736-L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7736-L7748) · [Before (L6692-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6692-L6705)

```diff
-     class yc {
-       constructor(DD, zD, wD, pD, sD) {
-         this.AU = DD, this.type = zD, this.model = wD, this.onDispose = sD, this.bA = void 0, this.records = void 0, this.count = 0, this.origin = [0, 0, 0], this.placedOffset = [0, 0, 0], this.wasLit = !1, this.dirtyList = [], this.isDirty = void 0, this.dirtyAll = !1, this.ids  … [truncated]
-         const KD = DD.CU;
-         this.placedOffset[0] = KD[0], this.placedOffset[1] = KD[1], this.placedOffset[2] = KD[2]
-       }
-       setOrigin(DD, zD, wD) {
-         const {
-           origin: pD
-         } = this;
-         pD[0] === DD && pD[1] === zD && pD[2] === wD || (pD[0] = DD, pD[1] = zD, pD[2] = wD, this.dirtyAll = !0)
-       }
-       markDirty(DD) {
-         !this.MI && DD >= 0 && DD < this.bA && this.mI(DD, DD + 1)
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

#### 290. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6707-L6722` → after: `L7750-L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7750-L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7750-L7859) · [Before (L6707-L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6707-L6722)

```diff
-       commit(DD) {
-         this.MI || (DD = Math.min(Math.max(DD, 0), this.bA)) !== this.count && (this.mI(Math.min(DD, this.count), Math.max(DD, this.count)), this.count = DD)
-       }
-       grow(DD) {
-         (DD = Math.ceil(DD)) <= this.bA || this.MI || (this.records = (0, Wc.d)(this.records, new Float32Array(DD * ic.c)), this.ids = (0, Wc.d)(this.ids, new Int32Array(DD)), this.isDirty = (0, Wc.d)(this.isDirty, new Uint8Array(DD)), this.state = (0, Wc.d)(this.state, new Uint8 … [truncated]
-       }
-       dispose() {
-         if (!this.MI) {
-           this.MI = !0;
-           try {
-             const DD = [];
-             for (let zD = 0; zD < this.bA; zD++) 3 === this.state[zD] && DD.push(this.ids[zD]);
-             DD.length > 0 && this.AU.wB.Ql.delete(...DD)
-           } finally {
-             this.count = 0, this.toBuild.length = 0, this.onDispose(this)
-           }
+     }
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
+ ... (94 more added lines; see GitHub link above)
```

#### 291. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6725-L6739` → after: `L7880-L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7880-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7880-L7925) · [Before (L6725-L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6725-L6739)

```diff
-       render(DD) {
-         if (this.MI) return;
-         const zD = this.AU.CU,
-           {
-             placedOffset: wD
-           } = this;
-         zD[0] === wD[0] && zD[1] === wD[1] && zD[2] === wD[2] || (wD[0] = zD[0], wD[1] = zD[1], wD[2] = zD[2], this.dirtyAll = !0), DD.lit && !this.wasLit && (this.cells.fill(NaN), this.dirtyAll = !0), this.wasLit = DD.lit;
-         const {
-           dirtyList: pD,
-           isDirty: sD
-         } = this;
-         if (this.dirtyAll)
-           for (let KD = 0; KD < this.count; KD++) this.place(KD, DD);
-         for (const KD of pD) sD[KD] = 0, (!this.dirtyAll || KD >= this.count) && this.place(KD, DD);
-         pD.length = 0, this.dirtyAll = !1, this.build(DD), DD.lit && this.sweepLight(DD)
+     }
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
+ ... (30 more added lines; see GitHub link above)
```

#### 292. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6741-L6746` → after: `L7927-L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7927-L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7927-L7933) · [Before (L6741-L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6741-L6746)

```diff
-       mI(DD, zD) {
-         const {
-           dirtyList: wD,
-           isDirty: pD
-         } = this;
-         for (let sD = DD; sD < zD; sD++) 0 === pD[sD] && (pD[sD] = 1, wD.push(sD))
+     }
+ 
+     function tx(pp) {
+       try {
+         return "undefined" === typeof window ? null : window[pp]
+       } catch (ip) {
+         return console.warn(`AI Helper: no ${pp}`, ip), null
```

#### 293. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6748-L6749` → after: `L7935-L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7935-L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7935-L7948) · [Before (L6748-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6748-L6749)

```diff
-       visible(DD) {
-         return DD < this.count && 0 === this.records[DD * ic.c + ic.e]
+     }
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

#### 294. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6751-L6778` → after: `L7950-L7951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7950-L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7950-L7951) · [Before (L6751-L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6751-L6778)

```diff
-       place(DD, zD) {
-         const wD = this.AU.wB.Ql;
-         if (!this.visible(DD)) return void(this.shown[DD] && (wD.nC(this.ids[DD], !1), this.shown[DD] = 0));
-         const pD = this.state[DD];
-         if (3 !== pD) return void(0 === pD && (this.state[DD] = 1, this.toBuild.push(DD)));
-         const sD = this.ids[DD],
-           KD = DD * ic.c,
-           {
-             records: rD,
-             origin: LD,
-             placedOffset: cD
-           } = this,
-           gD = LD[0] + rD[KD],
-           RD = LD[1] + rD[KD + 1],
-           AD = LD[2] + rD[KD + 2];
-         wD.setPosition(sD, gD - cD[0], RD - cD[1], AD - cD[2]);
- ... (12 more removed lines; see GitHub link above)
+       nextUsedAt() {
+         return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
```

#### 295. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6780-L6793` → after: `L7953-L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7953-L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7953-L7960) · [Before (L6780-L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6780-L6793)

```diff
-       relight(DD, zD, wD) {
-         const pD = 3 * DD;
-         Nc[0] = this.cells[pD] + .5, Nc[1] = this.cells[pD + 1] + .5, Nc[2] = this.cells[pD + 2] + .5;
-         const sD = (0, HD.i)(this.AU, Nc),
-           {
-             light: KD
-           } = this,
-           rD = 4 * DD;
-         let LD = wD;
-         for (let cD = 0; cD < 4; cD++) {
-           const DD = Math.fround(sD[cD]);
-           KD[rD + cD] !== DD && (KD[rD + cD] = DD, LD = !0)
-         }
-         this.litFrame[DD] = zD, LD && this.AU.wB.Ql.set(this.ids[DD], "aLightLevels", KD[rD], KD[rD + 1], KD[rD + 2], KD[rD + 3])
+       activeKey() {
+         const pp = this.state.selected,
+           ip = pp ? this.state.keys.find((ip => ip.id === pp.keyId)) : void 0,
+           cp = null === ip || void 0 === ip ? void 0 : ip.models.find((ip => ip.id === (null === pp || void 0 === pp ? void 0 : pp.modelId)));
+         return ip && cp ? {
+           ...ip,
+           model: cp
+         } : null
```

#### 296. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6795-L6815` → after: `L7962-L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7962-L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7962-L7989) · [Before (L6795-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6795-L6815)

```diff
-       build(DD) {
-         const {
-           toBuild: zD
-         } = this;
-         let wD = 0;
-         for (; wD < zD.length && DD.budget > 0;) {
-           const pD = zD[wD++];
-           if (1 !== this.state[pD]) continue;
-           if (!this.visible(pD)) {
-             this.state[pD] = 0;
-             continue
-           }
-           DD.budget--, this.state[pD] = 2;
-           const {
-             frame: sD
-           } = DD;
- ... (5 more removed lines; see GitHub link above)
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

#### 297. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6817-L6827` → after: `L7991-L8004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7991-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7991-L8004) · [Before (L6817-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6817-L6827)

```diff
-       onBuilt(DD, zD, wD) {
-         const pD = this.AU.wB.Ql;
-         if (this.MI) return void pD.delete(zD);
-         const {
-           scale: sD,
-           yaw: KD
-         } = this.model;
-         pD.setScale(zD, sD, sD, sD), pD.setRotationEulerY(zD, KD), this.ids[DD] = zD, this.state[DD] = 3, this.shown[DD] = 0, this.place(DD, {
-           budget: 0,
-           frame: wD,
-           lit: this.AU.wB.ZB
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
```

#### 298. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6830-L6843` → after: `L8007-L8017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8007-L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8007-L8017) · [Before (L6830-L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6830-L6843)

```diff
-       sweepLight(DD) {
-         const {
-           count: zD
-         } = this;
-         if (0 !== zD)
-           for (let wD = Math.ceil(zD / 30); wD > 0; wD--) {
-             const wD = this.sweep = (this.sweep + 1) % zD;
-             this.shown[wD] && DD.frame - this.litFrame[wD] >= 30 && this.relight(wD, DD.frame, !1)
-           }
-       }
-     }
-     class kc {
-       constructor(DD) {
-         this.AU = DD, this.gameFar = null, this.engineFar = 0
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

#### 299. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6845-L6849` → after: `L8019-L8046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8019-L8046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8019-L8046) · [Before (L6845-L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6845-L6849)

```diff
-       set(DD) {
-         const zD = this.AU.wB.Mq(),
-           wD = null !== this.gameFar && zD.far === this.gameFar;
-         var pD, sD, KD, rD;
-         null !== DD ? !Number.isFinite(DD) || DD <= zD.near || (wD || (this.engineFar = zD.far), this.gameFar = DD, zD.far !== DD && (zD.far = DD, null === (pD = (sD = this.AU.wB).gwD) || void 0 === pD || pD.call(sD))) : (wD && (zD.far = this.engineFar, null === (KD = (rD = this. … [truncated]
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

#### 300. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6851-L6866` → after: `L8048-L8061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8048-L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8048-L8061) · [Before (L6851-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6851-L6866)

```diff
-     }
-     var mc = wD(616),
-       ec = wD(38445);
-     class oc {
-       constructor(DD) {
-         this.AU = DD, this.models = new Set, this.ctx = {
-           frame: 0,
-           lit: !1,
-           offset: [0, 0, 0]
-         }, this.onBeforeRender = () => {
-           const {
-             ctx: DD
-           } = this;
-           DD.frame++, DD.lit = this.AU.wB.ZB, DD.offset = this.AU.CU;
-           for (const zD of this.models) zD.render(DD)
-         }
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

#### 301. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6868-L6870` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8063) · [Before (L6868-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6868-L6870)

```diff
-       create(DD, zD) {
-         const wD = this.AU.wB.Ql;
-         if (pD = DD, !mc.n.includes(pD) || !wD.hasType(DD)) return null;
+       removeKey(pp) {
```

#### 302. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6872-L6880` → after: `L8065-L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8065-L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8065-L8087) · [Before (L6872-L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6872-L6880)

```diff
-         const sD = (0, bD.o)(DD, zD, !1),
-           {
-             meshApi: KD
-           } = bD.d[DD];
-         KD.updateVariation(sD, DD, "default"), KD.updateMeshOpacity(sD, 1), wD.setPickable(sD, !1);
-         const rD = new ac(this.AU, DD, sD, (DD => {
-           this.remove(DD)
-         }));
-         return 0 === this.models.size && this.AU.on("beforeRender", this.onBeforeRender), this.models.add(rD), rD
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
+           const Sp = [...this.state.keys];
+           Sp.splice(Math.min(Op, Sp.length), 0, op);
+ ... (7 more added lines; see GitHub link above)
```

#### 303. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6882-L6883` → after: `L8089-L8090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8089-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8089-L8090) · [Before (L6882-L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6882-L6883)

```diff
-       disposeAll() {
-         for (const DD of [...this.models]) DD.dispose()
+       removeAll() {
+         this.update(Ux), this.local && null !== this.local.getItem(yx) && (this.local.setItem(yx, JSON.stringify(Ux)), this.local.removeItem(yx))
```

#### 304. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6885-L6886` → after: `L8092-L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8092-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8092-L8099) · [Before (L6885-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6885-L6886)

```diff
-       remove(DD) {
-         this.models.delete(DD) && 0 === this.models.size && this.AU.off("beforeRender", this.onBeforeRender)
+       setRemember(pp) {
+         var ip;
+         const cp = pp && !this.ownsRemembered ? this.read(this.local) : null,
+           Op = (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.keys) && void 0 !== ip ? ip : []).filter((pp => this.state.keys.every((ip => !wx(ip, pp)))));
+         this.update({
+           remember: pp,
+           keys: [...Op, ...this.state.keys]
+         })
```

#### 305. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6888-L6890` → after: `L8101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8101) · [Before (L6888-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6888-L6890)

```diff
-     }
-     class ac {
-       constructor(DD, zD, wD, pD) {
+       otherTabChanged(pp) {
```

#### 306. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6892` → after: `L8103-L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8103-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8103-L8108) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6892)

```diff
-         this.AU = DD, this.type = zD, this.id = wD, this.onDispose = pD, this.pos = [0, 0, 0], this.yaw = 0, this.posed = !1, this.visible = !1, this.needsPlace = !1, this.needsRelight = !1, this.placedOffset = [NaN, NaN, NaN], this.light = new Float32Array(4), this.litFrame = -1 … [truncated]
+         if (!this.state.remember) return;
+         const cp = pp ? this.parse(pp) : null;
+         cp ? (this.state = cp, this.ownsRemembered = cp.remember) : (this.ownsRemembered = !1, this.state = {
+           ...this.state,
+           remember: !1
+         }), null === (ip = this.session) || void 0 === ip || ip.setItem(yx, JSON.stringify(this.state)), this.notify()
```

#### 307. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6894-L6895` → after: `L8110-L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8110-L8111) · [Before (L6894-L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6894-L6895)

```diff
-       setPose(DD, zD) {
-         this.MI || (this.posed && DD[0] === this.pos[0] && DD[1] === this.pos[1] && DD[2] === this.pos[2] || (this.pos[0] = DD[0], this.pos[1] = DD[1], this.pos[2] = DD[2], this.needsRelight = !0), this.yaw = zD, this.posed = !0, this.needsPlace = !0)
+       notify() {
+         for (const pp of this.listeners) pp()
```

#### 308. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6897-L6898` → after: `L8113-L8127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8113-L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8113-L8127) · [Before (L6897-L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6897-L6898)

```diff
-       setVisible(DD) {
-         this.MI || DD === this.visible || (this.visible = DD, this.needsPlace = !0)
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

#### 309. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6900-L6901` → after: `L8129-L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8129-L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8129-L8131) · [Before (L6900-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6900-L6901)

```diff
-       dispose() {
-         this.MI || (this.MI = !0, this.AU.wB.Ql.delete(this.id), this.onDispose(this))
+       read(pp) {
+         const ip = null === pp || void 0 === pp ? void 0 : pp.getItem(yx);
+         return ip ? this.parse(ip) : null
```

#### 310. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6903-L6914` → after: `L8133-L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8133-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8133-L8141) · [Before (L6903-L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6903-L6914)

```diff
-       render(DD) {
-         const zD = this.AU.wB.Ql;
-         if (!(this.visible && this.posed)) return void(this.needsPlace && (zD.nC(this.id, !1), this.needsPlace = !1));
-         const {
-           offset: wD
-         } = DD, {
-           placedOffset: pD
-         } = this, sD = wD[0] !== pD[0] || wD[1] !== pD[1] || wD[2] !== pD[2];
-         if (this.needsPlace || sD) {
-           pD[0] = wD[0], pD[1] = wD[1], pD[2] = wD[2];
-           const [DD, sD, KD] = this.pos;
-           zD.setPosition(this.id, DD - wD[0], sD - wD[1], KD - wD[2]), zD.setRotationEulerY(this.id, this.yaw + this.yawOffset), zD.nC(this.id, !0), this.needsPlace = !1
+       parse(pp) {
+         try {
+           const ip = {
+             ...Ux,
+             ...JSON.parse(pp)
+           };
+           return Array.isArray(ip.keys) && ip.keys.every(vx) ? ip : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+         } catch (ip) {
+           return console.warn("AI Helper: saved keys couldn't be read", ip instanceof Error ? ip.name : "error"), null
```

#### 311. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6918-L6925` → after: `L8144-L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8144-L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8144-L8169) · [Before (L6918-L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6918-L6925)

```diff
-       relight() {
-         const [DD, zD, wD] = this.pos, pD = (0, HD.i)(this.AU, [DD, zD + .25, wD]), {
-           light: sD
-         } = this;
-         let KD = !1;
-         for (let rD = 0; rD < 4; rD++) {
-           const DD = Math.fround(pD[rD]);
-           sD[rD] !== DD && (sD[rD] = DD, KD = !0)
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

#### 312. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6930-L6952` → after: `L8173-L8186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8173-L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8173-L8186) · [Before (L6930-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6930-L6952)

```diff
-     var uc = wD(38692);
-     const vc = 1 / .6,
-       tc = ["..1111..", ".122221.", "12222221", "12222221", "12222221", "12222221", ".122221.", "..1111.."];
-     class Fc extends uc.e {
-       constructor(DD) {
-         super(), this.bA = DD, this.queue = void 0, this.length = 0, this.cursor = 0, this.speed = 0, this.queue = new Float32Array(4 * DD)
-       }
-       push(DD, zD, wD, pD) {
-         const sD = 4 * this.length;
-         this.queue[sD] = DD, this.queue[sD + 1] = zD, this.queue[sD + 2] = wD, this.queue[sD + 3] = pD, this.length++
-       }
-       startPositionFunction(DD, zD, wD, pD) {
-         if (this.cursor >= this.length) return this.speed = 0, void FD.WI.TransformCoordinatesFromFloatsToRef(0, -1e3, 0, DD, zD);
-         const sD = 4 * this.cursor;
-         this.cursor++, this.speed = this.queue[sD + 3], FD.WI.TransformCoordinatesFromFloatsToRef(this.queue[sD], this.queue[sD + 1], this.queue[sD + 2], DD, zD)
-       }
- ... (7 more removed lines; see GitHub link above)
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

#### 313. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6955-L6988` → after: `L8194-L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8194-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8194-L8218) · [Before (L6955-L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6955-L6988)

```diff
-     const Yc = [0, 1, 0];
-     class Hc {
-       constructor(DD, zD, wD, pD, sD) {
-         var KD, rD, LD;
-         this.AU = DD, this.system = zD, this.onFree = sD, this.box = void 0, this.points = null, this.boxAt = new FD.WI, this.pointsAt = new FD.WI, this.lifeMs = void 0, this.bA = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
-         const cD = null !== (KD = wD.dir1) && void 0 !== KD ? KD : Yc,
-           gD = null !== (rD = wD.dir2) && void 0 !== rD ? rD : Yc,
-           RD = null !== (LD = pD.half) && void 0 !== LD ? LD : [0, 0, 0];
-         this.box = zD.createBoxEmitter(new FD.WI(cD[0], cD[1], cD[2]), new FD.WI(gD[0], gD[1], gD[2]), new FD.WI(-RD[0], -RD[1], -RD[2]), new FD.WI(RD[0], RD[1], RD[2])), this.boxAt.set(pD.pos[0], pD.pos[1], pD.pos[2]), zD.emitter = this.boxAt, zD.manualEmitCount = 0, zD.onAnimat … [truncated]
-           this.idle = !0, this.stopped && (zD.disposeOnStop = !1, queueMicrotask((() => {
-             this.dispose()
-           })))
-         }, (0, dD.u)(DD, zD), this.setEmitRate(wD.emitRate)
-       }
-       moveTo(DD, zD) {
-         this.stopped || (this.boxAt.set(DD[0], DD[1], DD[2]), zD && (this.box.minEmitBox.set(-zD[0], -zD[1], -zD[2]), this.box.maxEmitBox.set(zD[0], zD[1], zD[2])), (0, dD.u)(this.AU, this.system))
- ... (18 more removed lines; see GitHub link above)
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
+       };
+       const Ip = async () => {
+         try {
+           return await Op.ask(pp.model.id, ip, op)
+         } catch (cp) {
+           if (! function(pp, ip) {
+ ... (9 more added lines; see GitHub link above)
```

#### 314. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6990` → after: `L8220-L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8220-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8220-L8234) · [Before (L6990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6990)

```diff
-         this.system.manualEmitCount = pD.length, this.emitted()
+       };
+       try {
+         return await Ip()
+       } catch (Ap) {
+         var Sp, xp;
+         if (!((Dp = Ap) instanceof hS && void 0 !== Dp.status && "noCredit" !== Dp.problem && (429 === Dp.status || 408 === Dp.status || Dp.status >= 500))) throw Ap;
+         return await (Lp = Math.min(null !== (Sp = null !== (xp = Ap.retryAfterMs) && void 0 !== xp ? xp : cp.retryWaitMs) && void 0 !== Sp ? Sp : 3e3, 2e4), Yp = cp.signal, new Promise(((pp, ip) => {
+           if (null !== Yp && void 0 !== Yp && Yp.aborted) return void ip(new DOMException("The AI key request was stopped", "AbortError"));
+           const cp = setTimeout(pp, Lp);
+           null === Yp || void 0 === Yp || Yp.addEventListener("abort", (() => {
+             clearTimeout(cp), ip(new DOMException("The AI key request was stopped", "AbortError"))
+           }), {
+             once: !0
+           })
+         }))), Ip()
```

#### 315. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6992-L6993` → after: `L8236-L8262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8236-L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8236-L8262) · [Before (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6992-L6993)

```diff
-       setDirections(DD, zD) {
-         this.box.direction1.set(DD[0], DD[1], DD[2]), this.box.direction2.set(zD[0], zD[1], zD[2])
+       var Lp, Yp, Dp
+     }
+     var jx = cp(3740);
+     const kx = "Super Bot.xd",
+       mx = {
+         ovh: {
+           name: kx,
+           temperature: .6,
+           nativeTools: !0,
+           callFormat: "qwenXml"
+         },
+         deepseek: {
+           name: kx,
+           temperature: 1,
+           nativeTools: !0,
+           callFormat: "deepseek"
+ ... (11 more added lines; see GitHub link above)
```

#### 316. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6995-L6996` → after: `L8264-L8270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8264-L8270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8264-L8270) · [Before (L6995-L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6995-L6996)

```diff
-       stop() {
-         this.stopped || (this.stopped = !0, this.system.emitRate = 0, this.idle ? this.dispose() : (this.system.manualEmitCount > 0 ? (this.system.disposeOnStop = !0, this.stopAfterLifetime()) : (this.clearStopTimer(), this.system.stop()), this.running = !1))
+     }
+ 
+     function Cx() {
+       try {
+         return "undefined" !== typeof window && "1" === window.sessionStorage.getItem(Rx)
+       } catch {
+         return !1
```

#### 317. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6998-L6999` → after: `L8272-L8285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8272-L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8272-L8285) · [Before (L6998-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6998-L6999)

```diff
-       dispose() {
-         this.freed || (this.freed = !0, this.stopped = !0, this.clearStopTimer(), this.system.onAnimationEnd = null, this.system.disposeOnStop = !1, this.system.dispose(!1), this.onFree(this))
+     }
+     const Ex = new class {
+       constructor() {
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
+         }))
```

#### 318. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7001-L7002` → after: `L8287-L8289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8287-L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8287-L8289) · [Before (L7001-L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7001-L7002)

```diff
-       useBox() {
-         this.system.particleEmitterType !== this.box && (this.system.particleEmitterType = this.box, this.system.emitter = this.boxAt)
+       isAnswering() {
+         var pp;
+         return this.state.picked && "ok" === (null === (pp = this.state.status) || void 0 === pp ? void 0 : pp.availability)
```

#### 319. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7004-L7005` → after: `L8291-L8294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8291-L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8291-L8294) · [Before (L7004-L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7004-L7005)

```diff
-       start() {
-         this.running || (this.system.start(), this.running = !0, this.idle = !1)
+       SW() {
+         Hx.select(null), this.update({
+           picked: !0
+         })
```

#### 320. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7007-L7008` → after: `L8296-L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8296-L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8296-L8299) · [Before (L7007-L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7007-L7008)

```diff
-       emitted() {
-         (0, dD.u)(this.AU, this.system), this.start(), this.system.emitRate > 0 || this.stopAfterLifetime()
+       unpick() {
+         this.update({
+           picked: !1
+         })
```

#### 321. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7010-L7012` → after: `L8301-L8306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8301-L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8301-L8306) · [Before (L7010-L7012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7010-L7012)

```diff
-       stopAfterLifetime() {
-         const DD = this.lifeMs + 250;
-         this.stopAt = performance.now() + DD, null === this.stopTimer && this.scheduleStop(DD)
+       setStatus(pp) {
+         const ip = this.state.picked && Jx(pp, this.state.canBuySuperRank) && Mx(pp.provider);
+         this.update({
+           status: pp,
+           picked: ip
+         })
```

#### 322. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7014-L7019` → after: `L8308-L8315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8308-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8308-L8315) · [Before (L7014-L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7014-L7019)

```diff
-       scheduleStop(DD) {
-         this.stopTimer = setTimeout((() => {
-           this.stopTimer = null;
-           const DD = this.stopAt - performance.now();
-           DD > 0 ? this.scheduleStop(DD) : (this.system.stop(), this.running = !1)
-         }), DD)
+       setCanBuySuperRank(pp) {
+         const {
+           status: ip
+         } = this.state;
+         this.update({
+           canBuySuperRank: pp,
+           picked: this.state.picked && (null === ip || Jx(ip, pp))
+         })
```

#### 323. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7021-L7022` → after: `L8317-L8324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8317-L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8317-L8324) · [Before (L7021-L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7021-L7022)

```diff
-       clearStopTimer() {
-         null !== this.stopTimer && (clearTimeout(this.stopTimer), this.stopTimer = null)
+       async refresh() {
+         return this.refreshing ??= (0, SI.postToGameServer)("/ai-helper/super-bot-xd/status", {}).then((pp => {
+           this.setStatus(pp)
+         })).catch((pp => {
+           console.warn("AI Helper: Super Bot.xd's usage couldn't be checked", pp)
+         })).finally((() => {
+           this.refreshing = null
+         })), this.refreshing
```

#### 324. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7024-L7078` → after: `L8326-L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8326-L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8326-L8334) · [Before (L7024-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7024-L7078)

```diff
-     }
-     class qc {
-       constructor(DD) {
-         this.AU = DD, this.live = new Set, this.textures = new Map
-       }
-       enabled() {
-         return this.AU.wB.Ul().particlesEnabled
-       }
-       create(DD, zD) {
-         var wD, pD;
-         const sD = "string" === typeof DD.texture ? DD.texture : DD.texture.kind,
-           KD = this.AU.wB.EW(`game|${sD}`, DD.bA);
-         KD.texture = this.texture(DD.texture, null === (wD = DD.mipmaps) || void 0 === wD || wD), KD.blendMode = DD.blendMode, KD.minLifeTime = DD.minLifeTime, KD.maxLifeTime = DD.maxLifeTime, KD.minSize = DD.minSize, KD.maxSize = DD.maxSize, KD.minEmitPower = DD.minEmitPower, KD … [truncated]
-         const rD = null !== (pD = DD.gravity) && void 0 !== pD ? pD : [0, 0, 0];
-         KD.gravity = new FD.WI(rD[0], rD[1], rD[2]);
-         for (const cD of DD.colorGradients) KD.addColorGradient(cD.timeFraction, (0, dD.i)(cD.minColor), cD.maxColor ? (0, dD.i)(cD.maxColor) : void 0);
- ... (39 more removed lines; see GitHub link above)
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

#### 325. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7081-L7124` → after: `L8344-L8359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8344-L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8344-L8359) · [Before (L7081-L7124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7081-L7124)

```diff
-     const Dg = 1 / 3;
-     class zg {
-       constructor(DD) {
-         this.AU = DD, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = DD => {
-           this.offset = (this.offset + Math.min(DD, 250) / 1e3 * 1.2 * Dg) % 1, (0, ED.J)(this.material, -this.offset)
-         }
-       }
-       set(DD) {
-         if (this.clear(), !DD || 0 === DD.cells.length) return;
-         const zD = this.AU.wB,
-           wD = (0, MD.q)(zD, "routeChevrons", function(DD) {
-             const [zD, wD, pD] = DD[0].pos, sD = [], KD = [], rD = [];
-             return DD.forEach(((DD, LD) => {
-               let {
-                 pos: cD,
-                 way: [gD, RD]
- ... (28 more removed lines; see GitHub link above)
+ 
+     function lx(pp) {
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

#### 326. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7127-L7165` → after: `L8362-L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8362-L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8362-L8364) · [Before (L7127-L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7127-L7165)

```diff
-     var wg = wD(39102);
-     class pg {
-       constructor(DD) {
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new wg.e((() => Dc.e.get("forcedCameraDirectionTransitionMs")), (DD => {
-           Dc.e.apply(DD)
-         })), this.particles = new qc(DD), this.meshes = new lc(DD), this.pools = new Zc(DD), this.routeChevrons = new zg(DD), this.entityPresentation = new Sc(DD), this.mobModels = new oc(DD), this.cameraFar = new kc(DD)
-       }
-       hasPackModel(DD) {
-         return Boolean(BD.b.getModelOverride(DD))
-       }
-       setGroundArrowStyle(DD) {
-         Pc(DD)
-       }
-       disposeAll() {
-         const DD = [() => {
-           this.particles.disposeAll()
- ... (23 more removed lines; see GitHub link above)
+ 
+     function Qx(pp) {
+       return null !== pp && !pp.isSuper && "noUsageLeft" === pp.availability
```

#### 327. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7167-L7273` → after: `L8366-L8368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8366-L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8366-L8368) · [Before (L7167-L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7167-L7273)

```diff
-     var sg = wD(1332),
-       Kg = wD(4468),
-       rg = wD(38963),
-       Lg = wD(1806),
-       cg = wD(1775);
-     class gg {
-       constructor() {
-         this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
-       }
-       set(DD, zD, wD, pD) {
-         this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
-         const sD = 1023 & DD | (1023 & zD) << 10 | (1023 & wD) << 20;
-         let KD = pD;
-         if (Rg(DD) && Rg(zD) && Rg(wD) || (KD = new Ag(DD, zD, wD, pD), this.hasBoxes = !0), Math.abs(DD) < 512 && Math.abs(zD) < 512 && Math.abs(wD) < 512) {
-           const DD = this.unbox(this.zeroStorage.get(sD));
-           return this.zeroStorage.has(sD) || this.itemCount++, this.zeroStorage.set(sD, KD), DD
- ... (91 more removed lines; see GitHub link above)
+ 
+     function Jx(pp, ip) {
+       return "ok" === pp.availability || !1 !== ip && Qx(pp)
```

#### 328. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7277` → after: `L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8372) · [Before (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7277)

```diff
-       return DD << 12 >> 12 === DD && (0 !== DD || 1 / DD > 0)
+       return !0 === pp.canBuySuperRank && Qx(pp.status)
```

#### 329. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7279-L7282` → after: `L8374-L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8374-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8374-L8376) · [Before (L7279-L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7279-L7282)

```diff
-     class Ag {
-       constructor(DD, zD, wD, pD) {
-         this.x = DD, this.y = zD, this.z = wD, this.val = pD, Ug.add(this)
-       }
+ 
+     function Nx(pp) {
+       return Bx(pp) ? null : lx(pp.status)
```

#### 330. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7287` → after: `L8380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8380) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7287)

```diff
-       return "object" === typeof DD && null !== DD && Ug.has(DD)
+       return pp.picked && null === Nx(pp)
```

#### 331. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7291` → after: `L8384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8384) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7291)

```diff
-       return Array.from(DD.keys()).sort(((DD, zD) => DD - zD))
+       return pp.picked && Bx(pp)
```

#### 332. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7293-L7296` → after: `L8386-L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8386-L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8386-L8388) · [Before (L7293-L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7293-L7296)

```diff
-     class Bg extends Error {
-       constructor() {
-         super(`${gg.name} has been mutated during iteration`)
-       }
+ 
+     function bx(pp) {
+       return `Usage left: ${pp.left}`
```

#### 333. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7298-L7314` → after: `L8390-L8411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8390-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8390-L8411) · [Before (L7298-L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7298-L7314)

```diff
-     class Gg {
-       constructor() {
-         this.cache = new gg
-       }
-       getCachedPasskeyForChest(DD) {
-         var zD, wD, pD;
-         const sD = this.cache.get(DD[0], DD[1], DD[2]);
-         if (!sD) return null;
-         const KD = (0, vD.b)().blockDataOwner.getBlockData(DD[0], DD[1], DD[2]),
-           rD = null !== (zD = null === KD || void 0 === KD || null === (wD = KD.persisted) || void 0 === wD || null === (pD = wD.shared) || void 0 === pD ? void 0 : pD.passkeyLastUpdated) && void 0 !== zD ? zD : 0;
-         return sD.lastOpened < rD ? (this.cache.remove(DD[0], DD[1], DD[2]), null) : [...sD.passkeyOnLastOpen]
-       }
-       onChestOpened(DD, zD) {
-         this.cache.set(DD[0], DD[1], DD[2], {
-           passkeyOnLastOpen: [...zD],
-           lastOpened: Date.now()
- ... (1 more removed lines; see GitHub link above)
+ 
+     function hx(pp) {
+       const ip = Math.max(1, Math.ceil(pp / XS.i));
+       return 1 === ip ? "1 day" : `${ip} days`
+     }
+ 
+     function ax(pp, ip) {
+       const cp = "unavailable" === pp ? lx(ip) : null;
+       if (cp) return `${cp} Bot.xd is answering instead.`;
+       switch (pp) {
+         case "busy":
+           return "Super Bot.xd is busy, so Bot.xd is answering this one.";
+         case "tooLong":
+           return "That message is too big for your Super Bot.xd usage, so Bot.xd is answering this one.";
+         case "tooLarge":
+           return "That request is too large for Super Bot.xd, so Bot.xd is answering this one.";
+ ... (6 more added lines; see GitHub link above)
```

#### 334. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7317-L7329` → after: `L8414-L8425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8414-L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8414-L8425) · [Before (L7317-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7317-L7329)

```diff
-     var hg = wD(39111),
-       ng = wD(8740),
-       Mg = wD(39117),
-       Og = wD(4445),
-       Jg = wD(4518),
-       Eg = wD(1324),
-       Qg = wD(39124),
-       Xg = wD(4460);
-     class Vg {
-       constructor(DD) {
-         this.AU = DD, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.AU.camera.JY = (DD, zD) => {
-           const wD = this.AU.camera.fY;
-           this.AU.yJ.zwD(this.AU.vW).cameraZoomChanged(zD, DD), 0 !== wD && 0 === this.AU.camera.fY && this.disableFrontFacing()
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
```

#### 335. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7331-L7339` → after: `L8427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8427) · [Before (L7331-L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7331-L7339)

```diff
-         const zD = GD.l.subscribe("SwapCameraZoom", (() => {
-             this.swapCameraZoom()
-           })),
-           wD = Dc.e.subscribe("playerZoom", (DD => {
-             this.setCameraZoom(DD)
-           }));
-         (0, WD.onGameResetOnce)((() => {
-           this.endTemporaryThirdPerson(), this.AU.camera.EY.reset(), GD.l.unsubscribe(zD), wD()
-         }))
+         throw ip
```

#### 336. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7341` → after: `L8429-L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8429-L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8429-L8448) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7341)

```diff
-       setLocked(DD) {
+     }
+     async function Fx(pp, ip) {
+       return ip ? await new Promise(((cp, Op) => {
+         const op = () => {
+           Op(new DOMException("The Super Bot.xd request was stopped", "AbortError"))
+         };
+         ip.aborted ? op() : (ip.addEventListener("abort", op, {
+           once: !0
+         }), pp.then(cp, Op).finally((() => {
+           ip.removeEventListener("abort", op)
+         })))
+       })) : await pp
+     }
+     var gx = cp(34),
+       Gx = cp(25),
+       rx = cp(2314);
+ ... (4 more added lines; see GitHub link above)
```

#### 337. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7343-L7396` → after: `L8450-L8487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8450-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8450-L8487) · [Before (L7343-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7343-L7396)

```diff
-           applyDeferred: zD = !0
-         } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         if (DD === this.locked) return;
-         if (DD) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.AU.camera.fY, void(this.locked = !0);
-         this.locked = !1;
-         const wD = this.deferredZoom,
-           pD = this.deferredThirdPersonEndsAt;
-         if (this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, zD && (wD && (wD.validated ? this.setCameraZoom(wD.zoom) : this.setCameraZoomNoValidation(wD.zoom)), null !== pD)) {
-           const DD = pD - performance.now();
-           DD > 0 && this.applyTemporaryThirdPerson(DD === 1 / 0 ? void 0 : DD)
-         }
-       }
-       getZoomDistance() {
-         var DD, zD;
-         return this.locked ? null !== (DD = null === (zD = this.deferredZoom) || void 0 === zD ? void 0 : zD.zoom) && void 0 !== DD ? DD : this.lockedZoom : this.AU.camera.fY
-       }
- ... (38 more removed lines; see GitHub link above)
+           purchasesAllowed: ip
+         } = pp;
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
+ ... (22 more added lines; see GitHub link above)
```

#### 338. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7398-L7414` → after: `L8489-L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8489-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8489-L8495) · [Before (L7398-L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7398-L7414)

```diff
-         const zD = this.AU.camera.fY;
-         DD < 0 ? this.AU.camera.fY = 0 : DD > (this.AU.NJ.maxPlayerZoom || 10) ? this.AU.camera.fY = this.AU.NJ.maxPlayerZoom || 10 : this.AU.camera.fY = DD, this.onCameraZoomSet(zD, DD)
-       }
-       changeCameraZoom(DD) {
-         this.AU.yJ.zwD(this.AU.vW).shouldChangeCameraZoom(DD) && (0 === this.AU.camera.fY && 1 === DD ? DD++ : 2 === this.AU.camera.fY && -1 === DD && DD--, this.setCameraZoomNoValidation(this.AU.camera.fY + DD))
-       }
-       swapCameraZoom() {
-         this.locked || (this.AU.yJ.getState(this.AU.vW, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.AU.camera.fY ? this.setCameraZoom(this.AU.NJ.zoomOutDistance || 3) : (this.setCameraZoom(this.AU.NJ.zoomOutDistance || 3), 0 !== th … [truncated]
-       }
-       disableFrontFacing() {
-         this.AU.yJ.getState(this.AU.vW, "cameraShake").frontFacing = !1, this.AU.camera.pG[0] = 0, this.AU.camera.pG[1] = 0, this.AU.camera.pG[2] = 0
-       }
-       enableFrontFacing() {
-         this.AU.yJ.getState(this.AU.vW, "cameraShake").frontFacing = !0, this.AU.camera.pG[0] = Math.PI, this.AU.camera.pG[1] = 0, this.AU.camera.pG[2] = Math.PI
-       }
-       onCameraZoomSet(DD, zD) {
- ... (1 more removed lines; see GitHub link above)
+         return Kx = op, op.getResult().finally((() => {
+           Kx === op && (Kx = null)
+         })), !0
+       } catch (ip) {
+         return console.warn("AI Helper: the out of usage popup couldn't be opened", ip), !0
+       } finally {
+         sx = !1
```

#### 339. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7417-L7419` → after: `L8498-L8659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8498-L8659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8498-L8659) · [Before (L7417-L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7417-L7419)

```diff
-     var Pg = wD(36561),
-       Cg = wD(39133);
-     const xg = .05;
+     const pL = {
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
+ ... (146 more added lines; see GitHub link above)
```

#### 340. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7421-L7422` → after: `L8661-L8662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8661-L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8661-L8662) · [Before (L7421-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7421-L7422)

```diff
-     function Tg(DD, zD, wD) {
-       return (DD[0] - zD[0]) * wD[0] + (DD[1] - zD[1]) * wD[1] + (DD[2] - zD[2]) * wD[2]
+     function IL(pp) {
+       return pp.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter((pp => pp.length > 1))
```

#### 341. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7424-L7458` → after: `L8664-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8664-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8664-L8666) · [Before (L7424-L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7424-L7458)

```diff
-     const bg = 1e-6;
-     const jg = "CursorAim";
-     class dg {
-       constructor(DD, zD) {
-         this.AU = DD, this.pointerLockWrapper = zD, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = DD => {
-           Sg(DD) && this.followPoint(DD.clientX, DD.clientY)
-         }, this.onPointerDown = DD => {
-           var zD;
-           "mouse" !== DD.pointerType ? "pen" !== DD.pointerType && !Sg(DD) || !this.AU.container.element.contains(DD.target) || (0, Pg.l)(DD.target) || null === (zD = this.tapListener) || void 0 === zD || zD.call(this, DD.clientX, DD.clientY) : this.followPoint(DD.clientX, DD.cli … [truncated]
-         }
-       }
-       setActive(DD) {
-         DD !== this.active && (this.active = DD, this.AU.container.mN(!DD), DD ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(jg)) : (window.removeEventListener(" … [truncated]
-       }
-       isInGame() {
-         return this.pointerLockWrapper.isInGame()
- ... (19 more removed lines; see GitHub link above)
+ 
+     function SL(pp) {
+       return pp.length > 4 && pp.endsWith("ies") ? `${pp.slice(0,-3)}y` : pp.length > 3 && pp.endsWith("s") && !pp.endsWith("ss") ? pp.slice(0, -1) : pp
```

#### 342. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7462` → after: `L8670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8670) · [Before (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7462)

```diff
-       return "mouse" === DD.pointerType || !ir.e.get("isTouchScreen")
+       return new Set(IL(pp).map((pp => SL(pp))))
```

#### 343. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7464-L7616` → after: `L8672-L8675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8672-L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8672-L8675) · [Before (L7464-L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7464-L7616)

```diff
-     var ig = wD(6516),
-       lg = wD(37394),
-       Wg = wD(1981),
-       Ng = wD(39148),
-       Zg = wD(39055);
-     class yg {
-       constructor(DD) {
-         this.AU = DD, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
-           freeCamForward: !1,
-           freeCamBackward: !1,
-           freeCamLeft: !1,
-           freeCamRight: !1,
-           freeCamUp: !1,
-           freeCamDown: !1
-         }, this.analogueMove = {
-           forward: 0,
- ... (137 more removed lines; see GitHub link above)
+     const LL = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(|^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)/gm;
+ 
+     function YL(pp) {
+       return pp.split("\n").map((pp => pp.replace(/\/\/.*$/, "").replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""'))).join("\n").replace(/\/\*[^]*?\*\//g, (pp => pp.replace(/[^\n]/g, ""))).split("\n")
```

#### 344. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7627-L7630` → after: `L8678-L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8678-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8678-L8686) · [Before (L7627-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7627-L7630)

```diff
-     function Fg(DD, zD, wD, pD, sD) {
-       sD.heading = zD + DD.pG[1] + (pD ? DD.cameraRotationOffset[1] : 0);
-       const KD = wD + DD.pG[0] + (pD ? DD.cameraRotationOffset[0] : 0);
-       (0, eg.j)((0, eg.e)(sD.heading, KD, tg), sD)
+     function DL(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       const cp = [],
+         Op = new Set,
+         op = YL(ip ? pp : (0, vi.r)(pp, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, vi.m, (() => "projectRequire"))),
+         Ip = new Set([...op.join("\n").matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)/g)].map((pp => pp[1])));
+       return op.forEach(((pp, ip) => {
+         for (const op of (0, vi.f)(pp, /(global|window|document|process|require)\b\s*[.([]/g, vi.m)) Op.has(op[1]) || Ip.has(op[1]) || (Op.add(op[1]), cp.push(`Line ${ip+1} uses "${op[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+       })), cp
```

#### 345. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7634-L7636` → after: `L8689-L8704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8689-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8689-L8704) · [Before (L7634-L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7634-L7636)

```diff
-     function Hg(DD, zD, wD, pD, sD, KD) {
-       const rD = pD ? DD.cameraRotationOffset : nD().ZERO;
-       nD().set(Yg, sD[0], sD[1], 0), nD().GL(Yg, Yg, nD().ZERO, DD.nf + DD.pG[2] + rD[2]), nD().pr(Yg, Yg, nD().ZERO, wD + DD.pG[0] + rD[0]), nD().gr(Yg, Yg, nD().ZERO, zD + DD.pG[1] + rD[1]), nD().add(KD, KD, Yg)
+     function AL(pp) {
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

#### 346. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7641-L7642` → after: `L8707-L8718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8707-L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8707-L8718) · [Before (L7641-L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7641-L7642)

```diff
-     function zR(DD, zD, wD, pD) {
-       return lg.b.copyReattachedTargetPosition(DD, qg) ? DD.camera.wq(qg, zD, wD, lg.b.getSavedZoomDistance(DD), pD) : null
+     function PL(pp) {
+       var ip, cp;
+       const Op = null !== (ip = null === (cp = pp.split("### Parameters:")[1]) || void 0 === cp ? void 0 : cp.split("###")[0]) && void 0 !== ip ? ip : "",
+         op = [];
+       for (const Ip of Op.split("\n")) {
+         const pp = /^\|\s*([A-Za-z_$][\w$]*)\s*\|(?:\s*`([^`]*)`)?/.exec(Ip);
+         pp && "Parameter" !== pp[1] && op.push({
+           name: pp[1],
+           type: pp[2]
+         })
+       }
+       return op
```

#### 347. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7646` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8722) · [Before (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7646)

```diff
-       return (0, ug.e)(DD) ? (0, ND.b)(DD) : null
+       return PL(pp).map((pp => pp.name))
```

#### 348. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7648-L7806` → after: `L8724-L8748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8724-L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8724-L8748) · [Before (L7648-L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7648-L7806)

```diff
-     class pR {
-       constructor(DD, zD, wD) {
-         this.AU = DD, this.view = zD, this.pickEntity = wD, this.defaultPose = (0, Cg.h)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (DD, zD, wD) => this.pickDistance(DD, zD, wD, this.AU.bDD), t … [truncated]
-           var pD;
-           const sD = this.pickTargetedBlockFromOutside(DD, zD, wD);
-           return null !== (pD = this.pickEntity(DD, zD, null !== sD && void 0 !== sD ? sD : wD)) && void 0 !== pD ? pD : sD
-         }, this.isUntargeted = DD => !this.AU.bDD(DD)
-       }
-       get localPlayerId() {
-         return this.AU.vDD
-       }
-       getEntityPosition(DD) {
-         const zD = wR(DD);
-         return null !== zD && this.AU.yJ.AY(zD) ? (0, mL.getDrawnPosition)(this.AU, zD, this.feet) : null
-       }
-       getEntityAimPoint(DD) {
- ... (143 more removed lines; see GitHub link above)
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
+         if (op) "\\" === ip ? xp++ : ip === op && (op = "");
+         else if ("/" === ip && "/" === pp[xp + 1]) {
+           Ip += pp.slice(Sp, xp);
+           const ip = pp.indexOf("\n", xp);
+           xp = -1 === ip ? pp.length : ip, Sp = xp
+         } else if ('"' === ip || "'" === ip || "`" === ip) op = ip;
+ ... (9 more added lines; see GitHub link above)
```

#### 349. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7812-L7820` → after: `L8754-L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8754-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8754-L8759) · [Before (L7812-L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7812-L7820)

```diff
-       return DD[0] === zD[0] && DD[1] === zD[1] && DD[2] === zD[2]
-     }
-     const cR = {
-       heading: 0,
-       pitch: 0
-     };
- 
-     function gR(DD, zD, wD, pD) {
-       cR.heading = wD, cR.pitch = pD, (0, eg.j)(zD, cR), lg.b.setPlayerFacing(DD, cR.heading, cR.pitch)
+       var cp;
+       if (!/^[A-Za-z_$][\w$]*$/.test(ip)) return;
+       const Op = ip.replaceAll("$", "\\$"),
+         op = `\\((?:[^()]*[\\s,])?${Op}(?![\\w$])[^()]*\\)`,
+         Ip = new RegExp(`(?:const|let|var)\\s+${Op}(?![\\w$])|${Op}\\s*(?:\\+?=(?![=>])|=>)|${op}\\s*=>|function\\s*[\\w$]*\\s*${op}`, "g");
+       return 1 === (0, vi.f)(pp, Ip, vi.m).length ? null === (cp = new RegExp(`\\b(?:const|let|var)\\s+${Op}\\s*=\\s*${yL}\\s*(?:;|//|$)`, "m").exec(pp)) || void 0 === cp ? void 0 : cp[1] : void 0
```

#### 350. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7823-L7842` → after: `L8762-L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8762-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8762-L8880) · [Before (L7823-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7823-L7842)

```diff
-     function RR(DD, zD) {
-       return nD().copy(zD, DD.bloxd.getLifeformEyePos(DD.vW, !1))
-     }
-     var AR = wD(39177);
-     const UR = 4 * Math.PI;
-     class fR {
-       constructor() {
-         this.heading = 0, this.writtenHeading = 0, this.writtenPitch = 0, this.hasWritten = !1, this.pointedAt = {
-           heading: 0,
-           pitch: 0
-         }
-       }
-       followBody(DD) {
-         this.heading = DD, this.hasWritten = !1
-       }
-       readLook(DD, zD, wD, pD, sD) {
- ... (4 more removed lines; see GitHub link above)
+     function vL(pp, ip, cp) {
+       let Op;
+       const op = function(pp) {
+         const ip = pp.split("\n").slice(1).map((pp => pp.trim())).find((pp => "" !== pp && !pp.startsWith("#") && !pp.startsWith("|") && !pp.startsWith("**") && !pp.startsWith("```")));
+         if (!ip) return "";
+         const cp = ip.search(/\.\s/),
+           Op = -1 === cp ? ip : ip.slice(0, cp + 1);
+         return Op.length > 110 ? `${Op.slice(0,107)}...` : Op
+       }(cp);
+       return Op = "api" === pp ? `api.${ip}(${WL(cp).join(", ")})${op?` \u2014 ${op}`:""}` : "callback" === pp ? `${ip}(${WL(cp).join(", ")})${op?` \u2014 ${op}`:""}` : "clientOption" === pp ? `${ip}: ${function(pp){var ip,cp;return null!==(ip=null===(cp=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       Did you mean $ {
+         ip.map((pp => `"${pp}"`)).join(" or ")
+       } ? `:`
+       The closest name is "${ip[0]}", which may be something
+       else.
+       `}function eL(pp){return pp.split("\n").slice(1).map((pp=>pp.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((pp=>""!==pp&&!pp.startsWith("#")))}class uL{constructor(pp){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+ ... (103 more added lines; see GitHub link above)
```

#### 351. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7844-L7845` → after: `L8882-L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8882-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8882-L8972) · [Before (L7844-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7844-L7845)

```diff
-       noteWritten(DD, zD) {
-         this.writtenHeading = DD, this.writtenPitch = zD, this.hasWritten = !0
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
+ ... (75 more added lines; see GitHub link above)
```

#### 352. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7848-L7869` → after: `L8996-L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8996-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L8996-L9050) · [Before (L7848-L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7848-L7869)

```diff
-     const IR = [0, 0, 0];
- 
-     function BR(DD, zD, wD, pD, sD, KD) {
-       const rD = Math.max(0, Tg(DD, zD, wD)),
-         LD = IR;
-       for (let UD = 0; UD < 3; UD++) LD[UD] = zD[UD] + wD[UD] * rD;
-       const cD = function(DD, zD, wD, pD) {
-           let sD = 0,
-             KD = 0;
-           for (let LD = 0; LD < 3; LD++) {
-             const pD = zD[LD] - DD[LD];
-             sD += pD * wD[LD], KD += pD * pD
-           }
-           const rD = sD * sD - KD + pD * pD;
-           return rD > 0 ? Math.max(0, Math.sqrt(rD) - sD) : 0
-         }(DD, LD, wD, pD),
- ... (6 more removed lines; see GitHub link above)
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

#### 353. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7872-L7895` → after: `L9162-L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9162-L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9162-L9328) · [Before (L7872-L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7872-L7895)

```diff
-     function GR(DD, zD, wD) {
-       const pD = UR * (wD / 1e3),
-         sD = Math.max(-pD, Math.min(pD, (0, eg.u)(DD, zD)));
-       return (0, eg.s)(DD + sD)
-     }
-     class hR {
-       constructor(DD, zD, wD, pD, sD, KD) {
-         this.AU = DD, this.cameraController = zD, this.freeCameraController = wD, this.cursor = pD, this.KU = void 0, this.director = void 0, this.view = new fR, this.look = {
-           aT: 0,
-           qT: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.tDD = [0, 0, 0], this.FDD = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
-         const rD = Dc.e.subscribe("gameCamera", (DD => {
-             this.setSettings(DD)
-           })),
-           LD = DD => {
-             this.update(DD)
- ... (8 more removed lines; see GitHub link above)
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
+ ... (151 more added lines; see GitHub link above)
```

#### 354. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7897-L7899` → after: `L9330-L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9330-L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9330-L9365) · [Before (L7897-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7897-L7899)

```diff
-         DD.on("beforePhysicsTick", gD);
-         const RD = () => {
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && DD.KU.UwD([])
+       Sp(Op);
+       for (const xp of Ip) op.delete(xp);
+       return Jc(pp, mL(Op, ip).flatMap((pp => {
+         const ip = pp.arguments[cp - 1];
+         return ip && (OO(ip, Op) || Rp().isIdentifier(ip) && op.has(ip.text)) ? [{
+           from: ip.getStart(Op),
+           to: ip.getEnd(),
+           text: `{ customAttributes: ${ip.getText(Op)} }`
+         }] : []
+       })))
+     }(pp, ip.method, ip.value);
+     const {
+       from: cp,
+       to: Op,
+       kind: op,
+       callback: Ip
+ ... (20 more added lines; see GitHub link above)
```

#### 355. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7901-L8022` → after: `L9367-L9563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9367-L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9367-L9563) · [Before (L7901-L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L7901-L8022)

```diff
-         DD.on("DU", RD), pD.listenForTaps(((zD, wD) => {
-           this.aimAtClientPoint(zD, wD), DD.iDD()
-         }));
-         const AD = GD.l.subscribe("localPlayerTeleported", (DD => {
-           let {
-             isCorrection: zD
-           } = DD;
-           zD || this.cursorAim.forgetTap()
-         }));
-         (0, WD.onGameResetOnce)((() => {
-           rD(), pD.listenForTaps(null), GD.l.unsubscribe(AD), DD.off("beforeRender", LD), DD.off("afterRender", cD), DD.off("beforePhysicsTick", gD), DD.off("DU", RD), this.release({
-             applyDeferred: !1
-           }), this.screen.clear(), DD.KU.UwD([])
-         }))
-       }
-       setSettings(DD) {
- ... (106 more removed lines; see GitHub link above)
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
+ 
+ function nL(pp) {
+   return "export" === pp.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === pp.kind ? `The enchantment given to ${pp.method} is now in { customAttributes: ... }.` : "null" === pp.kind ? `The null given to ${pp.method} i … [truncated]
+ }
+ ... (181 more added lines; see GitHub link above)
```

#### 356. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8024-L8027` → after: `L9565-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9565-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9565-L9573) · [Before (L8024-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8024-L8027)

```diff
-     var nR = wD(34051);
-     const MR = [0, 1, 0],
-       OR = !1,
-       JR = [0, 100, 0];
+   }
+   close() {
+     return !!this.closePopup && (this.closePopup(), !0)
+   }
+ }
+ const oY = {
+   keyId: "bloxd",
+   modelId: "superbotxd"
+ };
```

#### 357. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8029` → after: `L9575-L9639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9575-L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9575-L9639) · [Before (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8029)

```diff
-     function ER(DD, zD) {
+ function IY(pp, ip) {
+   const cp = Array.from(pp.querySelectorAll(".WorldCodeAiModelGroup")),
+     Op = cp.findIndex((pp => pp.contains(ip)));
+   if (Op < 0) return !1;
+   const op = pp.getBoundingClientRect(),
+     Ip = ip => pp.scrollTop + ip.top - op.top,
+     Sp = Ip(ip.getBoundingClientRect()) + ip.getBoundingClientRect().height,
+     xp = pp.scrollHeight - pp.clientHeight,
+     Lp = cp.slice(0, Op + 1).map((pp => Ip(pp.getBoundingClientRect()))).filter((pp => Sp - pp <= op.height + 1));
+   if (0 === Lp.length) return !1;
+   const Yp = Lp.filter((pp => pp <= xp + 1)),
+     Dp = Yp.length > 0 ? Math.max(...Yp) : Math.min(...Lp);
+   return Dp > xp && (pp.style.paddingBottom = (parseFloat(getComputedStyle(pp).paddingBottom) || 0) + Dp - xp + "px"), pp.scrollTop = Dp, !0
+ }
+ 
+ function SY(pp) {
+ ... (49 more added lines; see GitHub link above)
```

#### 358. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8031-L8049` → after: `L9641-L9750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9641-L9750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9641-L9750) · [Before (L8031-L8049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8031-L8049)

```diff
-       return null !== (wD = null !== (pD = DD.inclination) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.inclination) && void 0 !== wD ? wD : -.2
-     }
- 
-     function QR(DD, zD, wD) {
-       const pD = function(DD, zD) {
-         var wD, pD;
-         return null !== (wD = null !== (pD = DD.useSunPosition) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.useSunPosition) && void 0 !== wD ? wD : OR
-       }(DD, zD);
-       if (pD) {
-         const [pD, sD, KD] = function(DD, zD) {
-           var wD, pD;
-           return null !== (wD = null !== (pD = DD.sunPosition) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.sunPosition) && void 0 !== wD ? wD : JR
-         }(DD, zD), rD = new FD.WI(pD, sD, KD);
-         rD.normalize(), void 0 !== wD && rD.scaleInPlace(-1);
-         const {
-           x: LD,
- ... (3 more removed lines; see GitHub link above)
+       return "" === pp ? "no key needed" : pp.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === ip ? `key \u2026${pp.slice(-4)}` : `${(null!==(cp=null===(Op=/^[a-zA-Z]+-/.exec(pp))||void 0===Op?void 0:Op[0])&&void 0!==cp?cp:pp.slice(0,4)).slice(0,6)}\u2026${pp.slice(-4)}`
+     }(ip.key, ip.provider);
+   return (0, Sp.jsxs)("span", {
+     className: "WorldCodeAiModelGroupName",
+     title: ip.baseUrl,
+     children: [Ip, " ", ip.name && (0, Sp.jsxs)("span", {
+       className: "WorldCodeAiModelHint",
+       children: ["\xb7 ", xp, " "]
+     }), "" === ip.key ? (0, Sp.jsx)("span", {
+       className: "WorldCodeAiModelHint",
+       children: Lp
+     }) : (0, Sp.jsx)("code", {
+       children: Lp
+     }), cp && (0, Sp.jsxs)(Sp.Fragment, {
+       children: [" ", (0, Sp.jsx)("span", {
+         className: "WorldCodeAiInUseTag",
+ ... (94 more added lines; see GitHub link above)
```

#### 359. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8051-L8053` → after: `L9752-L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9752-L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9752-L9754) · [Before (L8051-L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8051-L8053)

```diff
-           x: LD,
-           y: cD,
-           z: gD
+           id: pp.id,
+           at: null !== (cp = pp.usedAt) && void 0 !== cp ? cp : 0,
+           i: ip
```

#### 360. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8055-L8160` → after: `L9756-L9759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9756-L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9756-L9759) · [Before (L8055-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8055-L8160)

```diff
-       }
-       const sD = null !== wD && void 0 !== wD ? wD : ER(DD, zD),
-         KD = function(DD, zD) {
-           var wD, pD;
-           return null !== (wD = null !== (pD = DD.azimuth) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.azimuth) && void 0 !== wD ? wD : .55
-         }(DD, zD),
-         rD = function(DD, zD) {
-           var wD, pD;
-           return null !== (wD = null !== (pD = DD.up) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.up) && void 0 !== wD ? wD : MR
-         }(DD, zD),
-         LD = Math.PI * (sD - .5),
-         cD = 2 * Math.PI * (KD - .5),
-         gD = new FD.WI(Math.cos(cD) * Math.cos(LD), Math.sin(-LD), Math.sin(cD) * Math.cos(LD)),
-         RD = new FD.WI(rD[0], rD[1], rD[2]),
-         AD = new FD.Quaternion;
-       FD.Quaternion.FromUnitVectorsToRef(FD.WI.UpReadOnly, RD, AD);
- ... (90 more removed lines; see GitHub link above)
+       })).sort(((pp, ip) => ip.at - pp.at || ip.i - pp.i));
+       return new Set(ip.slice(0, 2).map((pp => {
+         let {
+           id: ip
```

#### 361. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8162-L8239` → after: `L9761-L9779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9761-L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9761-L9779) · [Before (L8162-L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8162-L8239)

```diff
-         this.starsMesh = (0, MD.q)(DD, "dayNightStars", (0, JD.n)());
-         const wD = nR.e.map((DD => nR.f + DD)),
-           pD = {
-             rootUrl: nR.f,
-             files: wD,
-             noMipmap: !0,
-             luminance: !0,
-             samplingMode: OD.i.nearest
-           },
-           sD = (0, OD.t)(zD, pD),
-           KD = {
-             ...XR,
-             reflectionTexture: sD,
-             alphaMode: PD.c.add,
-             transparencyMode: PD.o.alphaBlend
-           };
- ... (62 more removed lines; see GitHub link above)
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
+         var pp;
+         null === ip || void 0 === ip || null === (pp = ip.querySelector(".WorldCodeAiModelRemove")) || void 0 === pp || pp.focus()
+       }))
+     },
+     Cp = `${ip}-model`,
+ ... (3 more added lines; see GitHub link above)
```

#### 362. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8241-L8310` → after: `L9781-L9806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9781-L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9781-L9806) · [Before (L8241-L8310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8241-L8310)

```diff
-         oB: DD,
-         sets: {
-           ...XR,
-           emissiveColor: [1, 1, 1],
-           diffuseTexture: pD,
-           useAlphaFromDiffuseTexture: !0
-         }
-       }).mirror
-     }
-     var xR = wD(4257),
-       TR = wD(37891),
-       bR = wD(37306),
-       jR = wD(37594),
-       dR = wD(37422),
-       SR = wD(760),
-       iR = wD(2779),
- ... (54 more removed lines; see GitHub link above)
+         hint: ip,
+         choice: Op,
+         selected: Pp(Op) && !(null === Op && Up.picked && null === wp),
+         radioName: Cp,
+         onSelect: () => {
+           Wp(Op), Ex.unpick()
+         },
+         onChosen: cp
+       }, null !== (op = null === Op || void 0 === Op ? void 0 : Op.modelId) && void 0 !== op ? op : "botxd")
+     };
+   return (0, Sp.jsxs)("div", {
+     className: "WorldCodeAiModelList",
+     role: "radiogroup",
+     "aria-labelledby": ip,
+     children: [Ep("Bot.xd (free)", "Bloxd's own AI.", null), (0, Sp.jsx)(LY, {
+       name: kx,
+ ... (10 more added lines; see GitHub link above)
```

#### 363. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8312-L8335` → after: `L9808-L9836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9808-L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9808-L9836) · [Before (L8312-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8312-L8335)

```diff
-           const LD = function(DD) {
-             const zD = qK.exec(DD);
-             if (zD) return {
-               program: "model",
-               packVariant: Number(zD[1])
-             };
-             const wD = HK.exec(DD);
-             return wD ? {
-               program: wD[3] ? "liquid" : "terrain",
-               packVariant: Number(wD[2]),
-               lighting: void 0 !== wD[1]
-             } : null
-           }(pD);
-           if (null === LD) return;
-           const cD = null !== (rD = null !== KD && void 0 !== KD ? KD : null === sD || void 0 === sD ? void 0 : sD.message) && void 0 !== rD ? rD : sD,
-             gD = () => LD.packVariant === DD.defineFor(LD.program) && ("model" === LD.program || LD.lighting === DD.ZB());
- ... (8 more removed lines; see GitHub link above)
+           if (Mx(null !== (ip = null === pp || void 0 === pp ? void 0 : pp.provider) && void 0 !== ip ? ip : "ovh") || await DY.ask()) return Ex.SW(), !0;
+           return !1
+         })(Up.status).then((pp => {
+           pp && (null === cp || void 0 === cp || cp())
+         }))
+       },
+       disabledWhy: wp
+     }), Ap.map((pp => {
+       var ip, cp, Op, Wp, Up;
+       const wp = Wx(pp),
+         Cp = Ap.length >= 4 && !qp(pp) && !kp.has(pp.id) && !mp.has(pp.id),
+         Xp = Cp ? null !== (ip = pp.models.find((ip => ip.id === pp.usedModelId))) && void 0 !== ip ? ip : Px(pp.models) : void 0,
+         lp = null !== (cp = null === (Op = ep[pp.id]) || void 0 === Op ? void 0 : Op.trim().toLowerCase()) && void 0 !== cp ? cp : "",
+         Qp = Xp ? [Xp] : "" === lp ? pp.models : pp.models.filter((ip => ip.name.toLowerCase().includes(lp) || Pp({
+           keyId: pp.id,
+           modelId: ip.id
+ ... (13 more added lines; see GitHub link above)
```

#### 364. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8337-L8355` → after: `L9838-L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9838-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L9838-L10030) · [Before (L8337-L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8337-L8355)

```diff
-           };
-           setTimeout((() => {
-             this.inGame && (this.checksRunning > 0 ? this.heldFailures.push(RD) : RD.stillCounts() && (RD.log(), this.failInGame()))
-           }), 0)
-         }, jr.add(pD), () => {
-           jr.delete(pD)
-         };
-         var pD
-       }
-       endGame() {
-         this.leaveGame(), this.checkGeneration++
-       }
-       failForPage(DD) {
-         this.endGame(), this.lastPassedCheck = null, this.page.block(DD)
-       }
-       leaveGame() {
- ... (3 more removed lines; see GitHub link above)
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
+ ... (177 more added lines; see GitHub link above)
```

#### 365. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8357-L8366` → after: `L10032-L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10032-L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10032-L10154) · [Before (L8357-L8366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8357-L8366)

```diff
-         const sD = await this.page.load();
-         if ("none" === sD.status) return {
-           status: "ok"
-         };
-         const KD = null !== (pD = (0, ZR.harnessShaderPackMode)()) && void 0 !== pD ? pD : (0, SR.i)(zD);
-         if ("blocked" === sD.status) {
-           if ((0, vK.f)(sD.variants, KD)) {
-             return {
-               status: "failed",
-               messageKey: "shaderPack:failedUnchecked" === sD.messageKey && !await (0, SD.hasUsableWebGpuAdapter)() ? kR() : sD.messageKey
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
+ ... (107 more added lines; see GitHub link above)
```

#### 366. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8368-L8373` → after: `L10156-L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10156-L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10156-L10162) · [Before (L8368-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8368-L8373)

```diff
-           }
-           return null === DD || void 0 === DD || DD.setMode(KD), {
-             status: "ok"
-           }
-         }
-         if (!DD) {
+             Hp((ip => {
+               const cp = new Set(ip);
+               return cp.delete(pp.id), cp
+             }))
+           })(pp)
+         },
+         uE: pp => {
```

#### 367. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8375-L8390` → after: `L10164-L10172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10164-L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10164-L10172) · [Before (L8375-L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8375-L8390)

```diff
-           if (!(0, vK.f)(sD.pack.variants, KD)) return {
-             status: "ok"
-           };
-           return {
-             status: "ok",
-             couldntRun: null !== (rD = await async function() {
-               var DD;
-               if (!await (0, SD.hasUsableWebGpuAdapter)()) return kR();
-               const zD = (0, iR.j)();
-               if ("default" === (null === zD || void 0 === zD ? void 0 : zD.source)) return (0, NR.i)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
-               return !0 === (null === zD || void 0 === zD || null === (DD = zD.fallbackReason) || void 0 === DD ? void 0 : DD.endsWith(WR.d)) ? "shaderPack:failedNoWebGpu" : null
-             }()) && void 0 !== rD ? rD : function() {
-               const DD = (0, iR.j)();
-               return null !== DD && "lite" !== DD.requested && "default" !== DD.source
-             }() ? "shaderPack:failedRendererOverride" : "shaderPack:failedNoLite"
-           }
+           const cp = (null === (ip = Hx.activeKey()) || void 0 === ip ? void 0 : ip.id) === pp.id,
+             Op = Lp(pp.id);
+           Dp({
+             name: Wx(pp, !0),
+             label: bS(pp.provider, pp.baseUrl, !0),
+             keyPage: QS[pp.provider].keyPage,
+             wasInUse: cp,
+             undo: Op
+           })
```

#### 368. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8392-L8407` → after: `L10174-L10219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10174-L10219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10174-L10219) · [Before (L8392-L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8392-L8407)

```diff
-         if (DD.setMode(KD), !DD.isRunning()) return {
-           status: "ok"
-         };
-         const LD = mR(DD);
-         if (LD === this.lastPassedCheck) return {
-           status: "ok"
-         };
-         this.lastPassedCheck = null;
-         const cD = await this.runCheck(DD, wD, "failed");
-         return "sw" === cD.status ? {
-           status: "sw"
-         } : "failed" === cD.status ? (eR(cD), {
-           status: "failed",
-           messageKey: "shaderPack:failedToCompile"
-         }) : ("ok" === cD.status && (this.lastPassedCheck = LD), {
-           status: "ok"
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

#### 369. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8410-L8413` → after: `L10222-L10341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10222-L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10222-L10341) · [Before (L8410-L8413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8410-L8413)

```diff
-       recheck(DD) {
-         if (!this.inGame || !DD) return;
-         const zD = this.startCheck();
-         if (!DD.isRunning()) return;
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
+ ... (104 more added lines; see GitHub link above)
```

#### 370. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8415-L8424` → after: `L10343-L10353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10343-L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10343-L10353) · [Before (L8415-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8415-L8424)

```diff
-         wD !== this.lastPassedCheck && this.runCheck(DD, zD, "skipped").then((DD => {
-           zD() || ("failed" === DD.status ? (eR(DD), this.failInGame()) : "ok" === DD.status && (this.lastPassedCheck = wD))
-         }))
-       }
-       startCheck() {
-         const DD = ++this.checkGeneration;
-         return () => DD !== this.checkGeneration
-       }
-       async runCheck(DD, zD, wD) {
-         this.checksRunning++;
+         vp(ip), np(null);
+         const cp = null !== Pp && void 0 !== Pp ? Pp : TS(ip),
+           Op = Rp(cp, ip);
+         if ("" === Op && "custom" !== cp) return void hp("Paste your key first.");
+         if (!cp) return void hp("Pick the company your key is from.");
+         const op = "custom" === cp ? fS(ep) : null;
+         if ("custom" === cp && null === op) return void hp("That address doesn't look right. It should start with https://");
+         if (Xp && "" === qp.trim()) return void hp("Type the name of the model to use.");
+         Wp(cp), fp(!0), hp(null);
+         const Ip = new AbortController;
+         gp.current = Ip;
```

#### 371. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8426` → after: `L10355-L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10355-L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10355-L10366) · [Before (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8426)

```diff
-           return await DD.checkCompilation(zD)
+           var Sp, xp;
+           const pp = await ex({
+             provider: cp,
+             key: Op,
+             baseUrl: null !== op && void 0 !== op ? op : void 0,
+             modelName: Xp ? qp : void 0
+           }, Ip.signal);
+           if (fp(!1), 0 === pp.length) return lp(!0), void hp("custom" === cp ? "This address doesn't list its models. Type the name of the model to use." : "Type the name of the model to use.");
+           Jp(pp);
+           const ip = Hx.getState().selected,
+             Yp = Lp && (null === ip || void 0 === ip ? void 0 : ip.keyId) === Lp.id ? pp.find((pp => pp.id === ip.modelId)) : void 0;
+           Np(null !== (Sp = null === (xp = null !== Yp && void 0 !== Yp ? Yp : Px(pp)) || void 0 === xp ? void 0 : xp.id) && void 0 !== Sp ? Sp : "")
```

#### 372. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8428-L8514` → after: `L10368-L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10368-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10368-L10373) · [Before (L8428-L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8428-L8514)

```diff
-           return console.error("The shader pack compile check failed", pD), "skipped" === wD ? {
-             status: "skipped"
-           } : {
-             status: "failed",
-             failure: {
-               material: "terrain",
-               message: `The check failed: ${pD instanceof Error?pD.message:String(pD)}`
-             }
-           }
-         } finally {
-           this.checksRunning--, 0 === this.checksRunning && this.heldFailures.length > 0 && setTimeout((() => {
-             this.releaseHeldFailures()
-           }), 0)
-         }
-       }
-       releaseHeldFailures() {
- ... (71 more removed lines; see GitHub link above)
+           if (Ip.signal.aborted) return;
+           fp(!1);
+           const op = pp instanceof hS ? pp.problem : "failed";
+           if (np(pp instanceof hS && pp.detail ? aS(pp.detail, Op) : null), "badKey" === op && "" === Op) return void hp("This address needs a key.");
+           const Sp = "badKey" !== op || yp ? "" : ` If it isn't from ${QS[cp].shortName}, pick the company it's from.`;
+           hp(`${nS(op,cp)}${Sp}`)
```

#### 373. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8516-L8547` → after: `L10375-L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10375-L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10375-L10489) · [Before (L8516-L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8516-L8547)

```diff
-         const {
-           oB: KD,
-           pB: rD
-         } = this.AU.wB, LD = "earth" === zD || "earth" === wD.type;
-         if (LD && rD) {
-           (0, TR.c)();
-           const zD = {};
-           return YR(null, zD, DD, wD), void this.showSkyBox(null, zD)
-         }
-         const cD = (0, MD.q)(this.AU.wB, xR.b.SKYBOX, (0, JD.n)()),
-           gD = LD ? (0, aR.g)(KD) : null;
-         if (gD) YR(cD, gD, DD, wD), gD.fogEnabled = !0, cD.material = gD;
-         else if ("custom" === wD.type) {
-           const DD = [wD.px, wD.py, wD.pz, wD.nx, wD.ny, wD.nz],
-             zD = (0, uR.c)(ir.e.get("clientEscMenuOptions").pixelScale),
-             pD = (0, uR.g)(DD, zD, (0, vg.getSettingsFov)()),
- ... (16 more removed lines; see GitHub link above)
+       })()
+     },
+     children: [(0, Sp.jsxs)("label", {
+       className: "WorldCodeAiAddKeyField",
+       children: [(0, Sp.jsx)("span", {
+         children: "Company"
+       }), (0, Sp.jsxs)("select", {
+         className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyCompany",
+         value: null !== Pp && void 0 !== Pp ? Pp : "",
+         onChange: pp => {
+           Wp(pp.target.value), Up(!0), lp(!1), Zp()
+         },
+         onKeyDown: dY,
+         children: [null === Pp && (0, Sp.jsx)("option", {
+           value: "",
+           disabled: !0,
+ ... (99 more added lines; see GitHub link above)
```

#### 374. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8549-L8676` → after: `L10491-L10526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10491-L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10491-L10526) · [Before (L8549-L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8549-L8676)

```diff
-         cD.uB = !1, cD.ZI = !0, cD.lI = !0, cD.applyFog = this.shouldApplyFogToSkyBox(), cD.renderingGroupId = -1, cD.kI();
-         const RD = cD.material;
-         (0, oD.e)(RD, {
-           backFaceCulling: !1,
-           disableDepthWrite: !0
-         }, {
-           unrendered: !0
-         }), (0, sz.c)(RD), (0, aR.d)(cD, (() => {
-           pD === this.skyBoxRequestId ? this.showSkyBox(cD, gD) : cD.dispose(!1, !0)
-         }), rD)
-       }
-       showSkyBox(DD, zD) {
-         var wD, pD;
-         null === (wD = this.skyBoxMesh) || void 0 === wD || wD.dispose(!1, !0), this.skyBoxMesh = DD, this.earthSkyKey = zD, this.updateSkyboxSize(), DD && this.AU.wB.tB(DD, !1, this.AU.CU, !1), this.AU.wB.model.earthSky = null !== (pD = zD && (0, bR.c)(zD)) && void 0 !== pD ? pD … [truncated]
-       }
-       setupFog() {
- ... (112 more removed lines; see GitHub link above)
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
+ ... (20 more added lines; see GitHub link above)
```

#### 375. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8679-L8684` → after: `L10529-L10584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10529-L10584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10529-L10584) · [Before (L8679-L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8679-L8684)

```diff
-       }(DD, zD, null !== (yD = null !== (kD = wD.vertexTint) && void 0 !== kD ? kD : null === pD || void 0 === pD ? void 0 : pD.vertexTint) && void 0 !== yD ? yD : [255, 255, 255])
-     }
- 
-     function HR(DD, zD) {
-       var wD, pD;
-       return null !== (wD = null !== (pD = DD.dithering) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.dithering) && void 0 !== wD && wD
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
+ ... (40 more added lines; see GitHub link above)
```

#### 376. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8686-L8698` → after: `L10586-L10641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10586-L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10586-L10641) · [Before (L8686-L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8686-L8698)

```diff
-     var qR = wD(37254);
-     const DA = lD.r / 8,
-       zA = .01,
-       wA = function() {
-         const DD = [];
-         for (let zD = 0; zD <= lD.r; zD += DA) DD.push({
-           offset: zD,
-           isChunkBound: zD % lD.r === 0
-         });
-         return DD
-       }();
-     class pA {
-       constructor(DD, zD, wD) {
+     qY(pp)
+   }
+ }
+ 
+ function qY(pp) {
+   const ip = pp.getBoundingClientRect().top;
+   for (const cp of Array.from(pp.querySelectorAll(".WorldCodeAiModelGroup"))) {
+     const pp = cp.querySelector(".WorldCodeAiModelGroupHeader");
+     if (!pp) continue;
+     const Op = ip + pp.offsetHeight,
+       op = Array.from(cp.querySelectorAll(".WorldCodeAiModelRow")).some((pp => pp.getBoundingClientRect().bottom > Op + 2));
+     pp.classList.toggle("Unpinned", !op)
+   }
+ }
+ 
+ function MY(pp) {
+ ... (40 more added lines; see GitHub link above)
```

#### 377. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8700-L8711` → after: `L10643-L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10643-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10643-L10703) · [Before (L8700-L8711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8700-L8711)

```diff
-         this.AU = DD, this.rendererId = zD, this.config = wD, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
-           this.tornDown || this.teardown()
-         })), pA.registerRenderer(this.AU, this)
-       }
-       teardown() {
-         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), pA.unregisterRenderer(this.AU, this))
-       }
-       static registerRenderer(DD, zD) {
-         pA.allRenderers[zD.rendererId] = zD, pA.tickHandler || (pA.tickHandler = () => {
-           for (const zD in pA.allRenderers) {
-             var DD;
-             null === (DD = pA.allRenderers[zD]) || void 0 === DD || DD.update()
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

#### 378. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8713-L8763` → after: `L10705-L10711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10705-L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10705-L10711) · [Before (L8713-L8763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8713-L8763)

```diff
-         }, DD.on("DU", pA.tickHandler))
-       }
-       static unregisterRenderer(DD, zD) {
-         delete pA.allRenderers[zD.rendererId], pA.tickHandler && 0 === Object.keys(pA.allRenderers).length && (DD.off("DU", pA.tickHandler), pA.tickHandler = null)
-       }
-       update() {
-         if (this.tornDown) return;
-         const DD = this.config.getChunkPos();
-         if (!DD) return this.disposeMeshes(), this.lastChunkI = NaN, this.lastChunkJ = NaN, void(this.lastChunkK = NaN);
-         const [zD, wD, pD] = DD;
-         zD === this.lastChunkI && wD === this.lastChunkJ && pD === this.lastChunkK || (this.lastChunkI = zD, this.lastChunkJ = wD, this.lastChunkK = pD, this.rebuildMeshes(zD, wD, pD))
-       }
-       rebuildMeshes(DD, zD, wD) {
-         this.disposeMeshes();
-         const pD = [(0, lD.q)(DD), (0, lD.q)(zD), (0, lD.q)(wD)],
-           [sD, KD] = function(DD) {
- ... (35 more removed lines; see GitHub link above)
+         })
+       }), (0, Sp.jsxs)("div", {
+         className: "WorldCodeAiModelMenuActions",
+         children: [(0, Sp.jsxs)("button", {
+           className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
+           onClick: () => {
+             Wp(!1), ip()
```

#### 379. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8765-L8881` → after: `L10713-L10769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10713-L10769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10713-L10769) · [Before (L8765-L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8765-L8881)

```diff
-           freeze: !0
-         }).mirror
-       }
-       disposeMeshes() {
-         this.borderMesh && (this.borderMesh.dispose(), this.borderMesh = null), this.subdivMesh && (this.subdivMesh.dispose(), this.subdivMesh = null), this.borderMaterial && (this.borderMaterial.dispose(), this.borderMaterial = null), this.subdivMaterial && (this.subdivMaterial. … [truncated]
-       }
-     }
-     pA.allRenderers = {}, pA.tickHandler = void 0;
-     const sA = lD.r / 2,
-       KA = Math.PI / 2,
-       rA = [(DD, zD, wD) => [
-         [DD, lD.r, zD, sA, wD, 0, 0],
-         [DD, lD.r, zD, sA, wD, KA, 0]
-       ], (DD, zD, wD) => [
-         [lD.r, DD, sA, zD, wD, 0, 0],
-         [lD.r, DD, sA, zD, wD, 0, KA]
- ... (101 more removed lines; see GitHub link above)
+           children: [(0, Sp.jsx)("span", {
+             "aria-hidden": "true",
+             children: "+ "
+           }), "Add API key"]
+         }), Yp && (0, Sp.jsxs)("span", {
+           className: "WorldCodeAiModelMenuBotxd",
+           children: [xp && (tp ? (0, Sp.jsxs)("button", {
+             className: "WorldCodeAiKeyLearnMore",
+             onClick: () => {
+               xp(!1), vp()
+             },
+             children: ["Back to ", Yp.model.name]
+           }) : (0, Sp.jsx)("button", {
+             className: "WorldCodeAiKeyLearnMore",
+             onClick: () => {
+               xp(!0), vp()
+ ... (41 more added lines; see GitHub link above)
```

#### 380. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8883-L8914` → after: `L10771-L10823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10771-L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10771-L10823) · [Before (L8883-L8914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8883-L8914)

```diff
-     var AA = wD(36774),
-       UA = wD(37791);
-     class fA {
-       constructor(DD, zD) {
-         this.AU = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (DD, zD, wD, pD, sD) => {
-           this.bloxd.setBlockNoMulti(DD, zD, wD, pD, sD)
-         }, this.AU = DD, this.bloxd = zD
-       }
-       playerCanPlaceItem(DD, zD, wD, pD, sD) {
-         if (!(sD in UA.g)) return console.error(`Called for non multiblock ${sD}`), !1;
-         for (const {
-             block: KD,
-             x: rD,
-             y: LD,
-             z: cD
-           }
- ... (16 more removed lines; see GitHub link above)
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

#### 381. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8916-L8944` → after: `L10825-L10977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10825-L10977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L10825-L10977) · [Before (L8916-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8916-L8944)

```diff
-       getMultiblockInfo(DD, zD, wD) {
-         if (DD in UA.e) {
-           const pD = {
-               positions: []
-             },
-             {
-               mainMultiblock: sD,
-               rootX: KD,
-               rootY: rD,
-               rootZ: LD
-             } = this.getMultiblockRoot(DD, zD[0], zD[1], zD[2]);
-           for (const {
-               block: DD,
-               id: zD,
-               x: cD,
-               y: gD,
- ... (13 more removed lines; see GitHub link above)
+     }
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
+ ... (137 more added lines; see GitHub link above)
```

#### 382. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8947-L9033` → after: `L11237-L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11237-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11237-L11256) · [Before (L8947-L9033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8947-L9033)

```diff
-           return pD
-         }
-         return {
-           positions: [{
-             block: (0, RD.h)(DD),
-             id: DD,
-             x: zD[0],
-             y: zD[1],
-             z: zD[2]
-           }]
-         }
-       }
-       getMultiblockRoot(DD, zD, wD, pD) {
-         const {
-           mainMultiblock: sD,
-           compX: KD,
- ... (71 more removed lines; see GitHub link above)
+         }, pp)))
+       }), ip.allowOther && op && (0, Sp.jsx)("span", {
+         className: "WorldCodeAiHint",
+         children: "Or type your own answer in the box below."
+       }), ip.allowOther && !op && (0, Sp.jsxs)("form", {
+         className: "WorldCodeAiQuestionOther",
+         onSubmit: pp => {
+           pp.preventDefault(), "" !== Ip.trim() && cp(Ip.trim(), !0)
+         },
+         children: [(0, Sp.jsx)("input", {
+           className: "WorldCodeAiInput",
+           value: Ip,
+           maxLength: 200,
+           placeholder: "Or type your own answer",
+           "aria-label": "Your own answer",
+           onChange: pp => {
+ ... (4 more added lines; see GitHub link above)
```

#### 383. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9035-L9064` → after: `L11258-L11320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11258-L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11258-L11320) · [Before (L9035-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9035-L9064)

```diff
-         } else KD(DD, zD, wD, cD, !0);
-         this.updateAttachedTop(DD, zD, wD, LD, cD, KD, rD)
-       }
-       holdsRestoredTop(DD, zD, wD, pD) {
-         var sD, KD;
-         const rD = null === (sD = RD.l[pD]) || void 0 === sD ? void 0 : sD.attachedTop;
-         return !!rD && (null === (KD = RD.l[this.bloxd.OJ(DD, zD, wD)]) || void 0 === KD ? void 0 : KD.meta.rootId) === RD.l[rD].meta.rootId
-       }
-       getRestoredTop(DD, zD, wD, pD, sD, KD) {
-         var rD;
-         const LD = RD.l[sD],
-           cD = (null === LD || void 0 === LD ? void 0 : LD.attachedTop) && RD.l[LD.attachedTop],
-           gD = null === (rD = RD.l[pD]) || void 0 === rD ? void 0 : rD.meta.rootId;
-         if (null === KD || !cD || gD === LD.meta.rootId || gD === cD.meta.rootId || !this.bloxd.XF(DD, zD - 1, wD)) return null;
-         const AD = RD.l[this.bloxd.OJ(DD, zD - 1, wD)];
-         return (null === AD || void 0 === AD ? void 0 : AD.meta.rootId) === LD.meta.rootId ? RD.l[AD.attachedTop].id : null
- ... (14 more removed lines; see GitHub link above)
+         }), (0, Sp.jsx)("button", {
+           className: "WorldCodeAiSecondaryButton",
+           type: "submit",
+           disabled: "" === Ip.trim(),
+           children: "Send"
+         })]
+       }), (0, Sp.jsx)("button", {
+         ...FL.f,
+         className: "WorldCodeAiSecondaryButton WorldCodeAiQuestionAiPicks",
+         onClick: () => {
+           cp(null, !1)
+         },
+         children: "Let the AI pick"
+       })]
+     })]
+   })
+ ... (47 more added lines; see GitHub link above)
```

#### 384. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9066-L9070` → after: `L11322-L11685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11322-L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11322-L11685) · [Before (L9066-L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9066-L9070)

```diff
-     var IA = wD(9244);
-     const BA = Object.freeze(Object.create(null));
- 
-     function GA(DD) {
-       (null === DD || void 0 === DD ? void 0 : DD.chestStr) !== lD.e || Object.isFrozen(DD) || (DD.chestStr = (0, lD.z)(DD.chestStr))
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
+ ... (348 more added lines; see GitHub link above)
```

#### 385. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9072-L9074` → after: `L11687-L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11687-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11687-L11819) · [Before (L9072-L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9072-L9074)

```diff
-     class hA {
-       constructor(DD) {
-         this.bloxd = void 0, this.storage = new gg, this.bloxd = DD
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

#### 386. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9076-L9084` → after: `L11821-L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11821-L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11821-L11874) · [Before (L9076-L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9076-L9084)

```diff
-       chunkAdded(DD, zD, wD, pD) {
-         if (this.storage.get(DD, zD, wD) && console.error(new Error(`adding chunk x y z ${DD} ${zD} ${wD} to dataowner that already exists`).stack), 0 === pD.length) return void this.storage.set(DD, zD, wD, BA);
-         const sD = {};
-         this.storage.set(DD, zD, wD, sD);
-         for (const {
-             pos: KD,
-             data: rD,
-             persisted: LD,
-             gameCreated: cD
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

#### 387. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9086-L9091` → after: `L11876-L11882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11876-L11882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11876-L11882) · [Before (L9086-L9091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9086-L9091)

```diff
-           of pD) {
-           let DD = KD;
-           (DD[0] > 31 || DD[1] > 31 || DD[2] > 31 || DD[0] < 0 || DD[1] < 0 || DD[2] < 0) && (DD = (0, lD.Z)(DD));
-           const zD = null !== rD && void 0 !== rD ? rD : {
-             persisted: LD,
-             gameCreated: cD
+           const yp = [Ip.length > 0 ? `changes ${kD(Ip.map(Pp))}` : "", Sp.length > 0 ? `adds ${kD(Sp.map(Pp))}` : "", xp.length > 0 ? `takes out ${kD(xp.map(Pp))}` : ""].filter(Boolean);
+           if (yp.length > 0) return {
+             named: RD(yp.join(", ")),
+             codeNames: Wp,
+             takesOut: xp,
+             isPlain: !1,
+             about: Dp([], !1)
```

#### 388. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9093-L9110` → after: `L11884-L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11884-L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11884-L11904) · [Before (L9093-L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9093-L9110)

```diff
-           GA(zD.persisted), sD[`${DD[0]}|${DD[1]}|${DD[2]}`] = zD
-         }
-       }
-       hasNoBlockData(DD, zD, wD) {
-         return this.storage.get(DD, zD, wD) === BA
-       }
-       getPersistedBlockArr(DD, zD, wD) {
-         const pD = [],
-           sD = this.storage.get(DD, zD, wD);
-         for (const KD in sD) {
-           const DD = sD[KD];
-           if (void 0 !== DD.persisted) {
-             const [zD, wD, sD] = KD.split("|"), rD = [Number(zD), Number(wD), Number(sD)];
-             pD.push({
-               pos: rD,
-               persisted: DD.persisted,
- ... (2 more removed lines; see GitHub link above)
+           const Up = ip.flatMap((pp => "same" === pp.kind ? [pp.text] : pp.added));
+           for (let wp = Up.length - 1; wp >= 0; wp--) {
+             const pp = Up[wp],
+               ip = /^\s/.test(pp) ? void 0 : dD(pp);
+             if (!ip && "" !== pp.trim() && !/^\s/.test(pp) && !/^(?:\/\/|\/\*|\*)/.test(pp.trim())) break;
+             if (ip) {
+               const cp = eD(pp);
+               return cp ? (Lp.set(ip, cp), {
+                 named: `${cp} \u2014 changed`,
+                 codeNames: [ip],
+                 takesOut: [],
+                 isPlain: !0,
+                 about: Dp([ip], !1)
+               }) : {
+                 named: `Changes ${/\bfunction\b|=>/.test(pp)?`"${mD(ip)}"`:mD(ip)}`,
+                 codeNames: [ip],
+ ... (5 more added lines; see GitHub link above)
```

#### 389. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9112-L9128` → after: `L11906-L11911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11906-L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11906-L11911) · [Before (L9112-L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9112-L9128)

```diff
-         }
-         return pD
-       }
-       getSharedBlockArr(DD, zD, wD, pD) {
-         const sD = [],
-           KD = this.storage.get(DD, zD, wD);
-         for (const rD in KD) {
-           const DD = KD[rD],
-             [zD, wD, LD] = rD.split("|"),
-             cD = [Number(zD), Number(wD), Number(LD)];
-           if ((0, lD.B)(DD)) console.error("ChunkInfo block at local pos", rD, "was nullish:", DD);
-           else {
-             const zD = this.getSharedDataForBlock(cD[0], cD[1], cD[2], DD);
-             !zD || pD && !pD(cD) || sD.push({
-               pos: cD,
-               data: zD
- ... (1 more removed lines; see GitHub link above)
+           return {
+             named: 0 === pp.added.length ? `Takes out lines from line ${cp}` : `Changes line ${cp}`,
+             codeNames: [],
+             takesOut: [],
+             isPlain: !1,
+             about: Dp([], !1)
```

#### 390. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9131-L9201` → after: `L11949-L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11949-L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L11949-L12083) · [Before (L9131-L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9131-L9201)

```diff
-         return sD
-       }
-       removingChunk(DD, zD, wD, pD) {
-         const sD = this.storage.get(DD, zD, wD),
-           KD = [DD * ID.f.CI, zD * ID.f.CI, wD * ID.f.CI];
-         for (const rD in sD) {
-           const DD = rD.split("|"),
-             zD = [Number(DD[0]), Number(DD[1]), Number(DD[2])],
-             wD = nD().add([0, 0, 0], zD, KD),
-             sD = this.bloxd.OJ(wD[0], wD[1], wD[2]);
-           this.bloxd.onBlockRemoved(wD[0], wD[1], wD[2], sD, 0, pD)
-         }
-         this.storage.remove(DD, zD, wD)
-       }
-       blockChanged(DD, zD, wD) {
-         const pD = (0, lD.L)(DD),
- ... (55 more removed lines; see GitHub link above)
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
+ ... (119 more added lines; see GitHub link above)
```

#### 391. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9204-L9269` → after: `L12086-L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12086-L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12086-L12202) · [Before (L9204-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9204-L9269)

```diff
-     var nA = wD(37015),
-       MA = wD(39200),
-       OA = wD(39203),
-       JA = wD(38029),
-       EA = wD.n(JA);
-     const QA = [],
-       XA = Object.freeze({}),
-       VA = Object.freeze([]);
-     class PA {
-       constructor(DD) {
-         this.bloxd = void 0, this.books = new Map, this.bloxd = DD, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.AU.vW)
-       }
-       onPlayerJoin(DD) {
-         this.resetAllPlayerRecipes(DD)
-       }
-       resetAllPlayerRecipes(DD) {
- ... (50 more removed lines; see GitHub link above)
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
+         children: cp.key
+ ... (101 more added lines; see GitHub link above)
```

#### 392. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9271-L9273` → after: `L12204-L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12204-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12204-L12205) · [Before (L9271-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9271-L9273)

```diff
-           name: pD,
-           AL: sD,
-           haveIngredients: KD
+           path: ip,
+           fields: Op
```

#### 393. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9275-L9289` → after: `L12207-L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12207-L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12207-L12220) · [Before (L9275-L9289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9275-L9289)

```diff
-         return KD || this.getRecipesForItem(DD, pD)[sD].isStarterRecipe || this.haveOneOrMoreIngredientOf(DD, zD, pD, sD)
-       }
-       getRecipesAtStation(DD, zD, wD) {
-         const pD = [],
-           sD = [];
-         return this.forEachRecipes(DD, ((KD, rD) => {
-           rD.forEach(((rD, LD) => {
-             this.canUseRecipeAtStation(DD, KD, LD, wD) && (this.getMaxCraftTimesFromIngredientAmt(DD, zD, KD, LD) > 0 ? pD.push({
-               name: KD,
-               AL: LD,
-               haveIngredients: !0
-             }) : sD.push({
-               name: KD,
-               AL: LD,
-               haveIngredients: !1
+         return (0, Sp.jsxs)("div", {
+           children: [xp.length > 1 && (0, Sp.jsx)("p", {
+             className: "WorldCodeAiAboutHeading",
+             children: ip
+           }), (0, Sp.jsx)("ul", {
+             className: "WorldCodeAiSettingList",
+             children: Op.map((pp => {
+               const Op = void 0 === (null === Ip || void 0 === Ip ? void 0 : Ip[ip]) ? void 0 : VY(Ip[ip]).find((ip => ip.key === pp.key));
+               return (0, Sp.jsx)(bD, {
+                 isChanged: !!Ip && (null === Op || void 0 === Op ? void 0 : Op.value) !== pp.value,
+                 path: ip,
+                 field: pp,
+                 onWrite: cp
+               }, pp.key)
```

#### 394. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9291-L9307` → after: `L12222-L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12222-L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12222-L12418) · [Before (L9291-L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9291-L9307)

```diff
-           }))
-         })), pD.concat(sD)
-       }
-       canUseRecipeAtStation(DD, zD, wD, pD) {
-         const sD = this.getRecipesForItem(DD, zD)[wD].station;
-         let KD;
-         Array.isArray(sD) ? KD = sD : (KD = QA, QA[0] = sD, QA.length = 1);
-         for (const rD of KD) {
-           if (("Workbench" === pD || "Artisan Bench" === pD) && !rD) return !0;
-           if (pD && pD === rD || !pD && !rD) return !0
-         }
-         return !1
-       }
-       haveOneOrMoreIngredientOf(DD, zD, wD, pD) {
-         const sD = this.getRecipesForItem(DD, wD);
-         for (const {
- ... (1 more removed lines; see GitHub link above)
+           })]
+         }, ip)
+       }))]
+     })]
+   })
+ }
+ const aD = /<tool_call\b|<function=|```|^\s*\{|<\|/m;
+ const nD = ["Reading your code", "Planning", "Writing", "Safety check"];
+ 
+ function FD(pp) {
+   if (pp > 9e4) return `It starts in about ${Math.ceil(pp/6e4)} minutes.`;
+   if (pp <= 1e4) return "It starts in a few seconds.";
+   const ip = 10 * Math.ceil(pp / 1e4);
+   return ip >= 60 ? "It starts in about a minute." : `It starts in about ${ip} seconds.`
+ }
+ var gD = cp(1216);
+ ... (181 more added lines; see GitHub link above)
```

#### 395. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9309-L9325` → after: `L12420-L12464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12420-L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12420-L12464) · [Before (L9309-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9309-L9325)

```diff
-           of sD[pD].requires)
-           for (const DD of KD)
-             if (0 !== zD.getAmountOfItem(DD)) return !0;
-         return !1
-       }
-       getMaxCraftTimes(DD, zD, wD, pD) {
-         const sD = this.getMaxCraftTimesFromIngredientAmt(DD, zD, wD, pD),
-           KD = this.getCraftTimesInAvailableSpace(DD, zD, wD, pD, sD);
-         return Math.min(sD, KD)
-       }
-       getMaxCraftTimesFromIngredientAmt(DD, zD, wD, pD) {
-         const sD = this.getRecipesForItem(DD, wD);
-         if (void 0 === sD[pD]) return 0;
-         let KD = 1 / 0;
-         for (const {
-             items: rD,
- ... (1 more removed lines; see GitHub link above)
+         })))
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
+ ... (29 more added lines; see GitHub link above)
```

#### 396. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9327-L9331` → after: `L12466-L12721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12466-L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12466-L12721) · [Before (L9327-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9327-L9331)

```diff
-           of sD[pD].requires) {
-           let DD = 0;
-           for (const pD of rD) DD += zD.getAmountOfItem(pD);
-           const wD = Math.floor(DD / LD);
-           KD = Math.min(KD, wD)
+         }), (0, Sp.jsx)(Dp.o, {
+           className: "WorldCodeAiSend",
+           ariaLabel: "Use ChatGPT's answer",
+           analyticsClick: {
+             id: "ai_helper.use_chatgpt_answer"
+           },
+           disabled: "" === Lp.trim(),
+           onClick: () => {
+             Ip(Lp, xp)
+           },
+           children: (0, Sp.jsx)(Pp.d, {
+             name: "arrow-up"
+           })
+         })]
+       })]
+     })]
+ ... (240 more added lines; see GitHub link above)
```

#### 397. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9333` → after: `L12723-L12860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12723-L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12723-L12860) · [Before (L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9333)

```diff
-         return KD
+         of Pp) {
+         const pp = (0, kp.e)(cL, ip),
+           cp = void 0 !== pp && Sp.includes(pp) && !Yp.some((cp => cp.name === pp || cp.name !== ip && (0, kp.e)(cL, cp.name) === pp));
+         let Op;
+         void 0 !== op && xp.getTypeAtLocation(op).getCallSignatures().length > 0 || Sp.includes(ip) || (Op = cp ? `"${pp}"` : CA(ip, Sp)), Lp.add(`${Ip} has no setting called "${ip}".${Op?` Did you mean ${Op}?`:Wp}`)
+       }
+       continue
+     }
+     const hp = null !== (yp = null === Dp || void 0 === Dp ? void 0 : Dp.initializer) && void 0 !== yp ? yp : op,
+       ap = hp && Rp().isExpression(hp) ? xp.getContextualType(hp) : void 0;
+     if (hp && IO(hp, ap, Sp, xp)) continue;
+     const np = (null !== (Tp = ap) && void 0 !== Tp && Tp.isUnion() ? Tp.types : Tp ? [Tp] : []).filter((pp => pp.isStringLiteral())).map((pp => pp.value)),
+       Fp = ip.includes("keyof ") ? "setting" : "name",
+       gp = null !== (Up = null === hp || void 0 === hp ? void 0 : hp.getText(Sp)) && void 0 !== Up ? Up : Ap,
+       Gp = np.length > 0 ? null === (wp = /^CONFIG\.([\w$]+)$/.exec(gp)) || void 0 === wp ? void 0 : wp[1] : void 0;
+     if (void 0 !== Gp) {
+ ... (122 more added lines; see GitHub link above)
```

#### 398. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9335-L9348` → after: `L12862-L12921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12862-L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12862-L12921) · [Before (L9335-L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9335-L9348)

```diff
-       getCraftTimesInAvailableSpace(DD, zD, wD, pD, sD) {
-         const KD = this.getRecipesForItem(DD, wD)[pD].produces,
-           rD = zD.cloneZeroAlloc();
-         let LD = 0;
-         for (; LD < sD;) {
-           const zD = this.naiveGetCraftTimesInAvailableSpace(DD, rD, wD, pD);
-           let cD = Math.min(zD, sD - LD);
-           cD = Math.max(cD, 1), this.consumeIngredientsForCrafting(DD, rD, wD, pD, cD);
-           const gD = KD * cD,
-             {
-               itemsProvided: RD
-             } = this.provideItemsFromCrafting(rD, wD, gD);
-           if (RD !== gD) break;
-           LD += cD
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
+ ... (44 more added lines; see GitHub link above)
```

#### 399. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9350-L9359` → after: `L12923-L12927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12923-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12923-L12927) · [Before (L9350-L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9350-L9359)

```diff
-         return LD
-       }
-       naiveGetCraftTimesInAvailableSpace(DD, zD, wD, pD) {
-         const sD = this.getRecipesForItem(DD, wD)[pD].produces,
-           KD = zD.getNumFreeSlots();
-         if (!1 !== this.bloxd.Lf.metadatas[wD].stackable) {
-           let DD = 999 * KD,
-             pD = zD.findItem(wD, 0);
-           for (; null !== pD;) DD += Math.max(999 - zD.getItemAtIdx(pD).amount, 0), pD = zD.findItem(wD, pD + 1);
-           return Math.floor(DD / sD)
+       }, Sp = async () => {
+         if ("unknown" === cp) try {
+           await op(), cp = "indexedDB"
+         } catch {
+           cp = "fallback"
```

#### 400. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9361-L9385` → after: `L12929-L12947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12929-L12947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12929-L12947) · [Before (L9361-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9361-L9385)

```diff
-         return Math.floor(KD / sD)
-       }
-       craftItem(DD, zD, wD, pD, sD) {
-         const KD = {
-             UL: 0,
-             Pr: null,
-             amountAddedToSlot: 0
-           },
-           rD = this.getMaxCraftTimes(DD, zD, wD, pD);
-         if (0 === rD) return KD;
-         const LD = Math.min(sD, rD),
-           cD = this.getRecipesForItem(DD, wD);
-         this.consumeIngredientsForCrafting(DD, zD, wD, pD, LD);
-         const gD = cD[pD].produces,
-           RD = gD * LD,
-           AD = cD[pD].attributes,
- ... (9 more removed lines; see GitHub link above)
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
+         try {
+           const pp = await Ip("readwrite");
+ ... (3 more added lines; see GitHub link above)
```

#### 401. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9388-L9404` → after: `L12961-L12997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12961-L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12961-L12997) · [Before (L9388-L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9388-L9404)

```diff
-       consumeIngredientsForCrafting(DD, zD, wD, pD, sD) {
-         const KD = this.getRecipesForItem(DD, wD);
-         for (const {
-             items: rD,
-             amt: LD
-           }
-           of KD[pD].requires) {
-           const DD = [];
-           for (const pD of rD) DD.push({
-             item: pD,
-             amt: zD.getAmountOfItem(pD)
-           });
-           DD.sort(((DD, zD) => DD.amt - zD.amt));
-           let wD = LD * sD;
-           for (const {
-               item: pD,
- ... (1 more removed lines; see GitHub link above)
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
+ ... (21 more added lines; see GitHub link above)
```

#### 402. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9406-L9478` → after: `L12999-L13014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12999-L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L12999-L13014) · [Before (L9406-L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9406-L9478)

```diff
-             of DD)
-             if (sD > 0 && (sD >= wD ? (zD.removeItemName(pD, wD), wD = 0) : (zD.removeItemName(pD, sD), wD -= sD)), 0 === wD) break
-         }
-       }
-       provideItemsFromCrafting(DD, zD, wD, pD) {
-         let sD = 0,
-           KD = null,
-           rD = 0;
-         if (!1 !== this.bloxd.Lf.metadatas[zD].stackable) {
-           const LD = DD.pickUpItem({
-             name: zD,
-             typeObj: this.bloxd.getItemTypeObj(zD),
-             amount: wD,
-             attributes: pD ? EA()(pD) : {}
-           });
-           sD = LD.amountPickedUp, KD = LD.slotIdx, rD = LD.amountAddedToSlot
- ... (57 more removed lines; see GitHub link above)
+           }].slice(-30)
+         },
+         Sp = this.load(pp).then((async ip => this.save(pp, (pp => Ip(ip, pp)))));
+       this.aW.set(pp, Sp.then((pp => {
+         let {
+           snapshots: ip
+         } = pp;
+         return ip
+       })));
+       const {
+         snapshots: xp,
+         isSaved: Lp
+       } = await Sp;
+       var Yp;
+       Lp && (null === (Yp = this.signal) || void 0 === Yp || Yp.post(pp));
+       return xp
```

#### 403. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9480-L9483` → after: `L13016-L13021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13016-L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13016-L13021) · [Before (L9480-L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9480-L9483)

```diff
- 
-     function CA(DD, zD) {
-       const wD = MA.g[DD];
-       return wD ? void 0 === zD ? wD : (zD <= 0 && (zD = 1), wD.map((DD => {
+     async relabel(pp, ip, cp) {
+       const Op = this.load(pp).then((async Op => this.save(pp, (pp => NY(Op, pp).map((pp => pp.id === ip ? {
+         ...pp,
+         label: cp
+       } : pp))))));
+       this.aW.set(pp, Op.then((pp => {
```

#### 404. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9485-L9486` → after: `L13023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13023) · [Before (L9485-L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9485-L9486)

```diff
-           item: wD,
-           amt: pD
+           snapshots: ip
```

#### 405. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9488-L9492` → after: `L13025-L13033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13025-L13033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13025-L13033) · [Before (L9488-L9492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9488-L9492)

```diff
-         return {
-           item: wD,
-           amt: pD * zD
-         }
-       }))) : null
+         return ip
+       })));
+       const {
+         snapshots: op,
+         isSaved: Ip
+       } = await Op;
+       var Sp;
+       Ip && (null === (Sp = this.signal) || void 0 === Sp || Sp.post(pp));
+       return op
```

#### 406. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9494-L9501` → after: `L13035-L13039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13035-L13039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13035-L13039) · [Before (L9494-L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9494-L9501)

```diff
-     var xA = wD(38455),
-       TA = wD(38463),
-       bA = wD(1245),
-       jA = wD(6520);
-     class dA {
-       constructor() {
-         this.metadatas = {
-           ...nA.m
+     async save(pp, ip) {
+       if (this.store.update) try {
+         return {
+           snapshots: await this.store.update(this.storeKey(pp), (pp => ip(BY(pp) ? pp : null))),
+           isSaved: !0
```

#### 407. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9505-L9547` → after: `L13048-L13049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13048-L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13048-L13049) · [Before (L9505-L9547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9505-L9547)

```diff
-     var SA = wD(38448),
-       iA = wD(37611),
-       lA = wD(34211);
-     let WA;
-     class NA {
-       constructor(DD) {
-         this.bloxd = DD, this.enchanter = void 0, WA ??= new iA.e(nA.m), this.enchanter = WA
-       }
-       getPossibleEnchantments(DD, zD) {
-         return this.bloxd.isClient && console.assert(DD === this.bloxd.AU.vW || DD === this.bloxd.AU.vDD, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(zD)
-       }
-       canUseEnchantingTable(DD, zD, wD) {
-         if (this.bloxd.isClient && console.assert(DD === this.bloxd.AU.vW || DD === this.bloxd.AU.vDD, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(DD, "canCraft")) return !1;
-         if (!(0, lA.n)(wD)) return !1;
-         const pD = this.bloxd.yJ.jzD(DD).getItemAtIdx(zD);
-         return 0 !== this.getPossibleEnchantments(DD, null === pD || void 0 === pD ? void 0 : pD.name).length && !(!pD || (0, lA.m)(pD.attributes))
- ... (27 more removed lines; see GitHub link above)
+     read(pp) {
+       return this.store.getItem(this.storeKey(pp)).then((pp => BY(pp) ? pp : null)).catch((() => null))
```

#### 408. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9549-L9568` → after: `L13051-L13085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13051-L13085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13051-L13085) · [Before (L9549-L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9549-L9568)

```diff
-     class oA {
-       constructor(DD) {
-         this.overrides = DD, this.resolved = null, this.blockLookups = null, this.cachedType = null, this.cachedTier = null, this.version = 0
-       }
-       getOverrides() {
-         return this.overrides
-       }
-       setOverride(DD, zD) {
-         this.overrides[DD] = zD, this.version++, this.resolved = null, mA.has(DD) && (this.blockLookups = null)
-       }
-       mergeOverrides(DD) {
-         Object.assign(this.overrides, DD), this.version++, this.resolved = null, this.blockLookups = null
-       }
-       getResolvedSettings(DD, zD) {
-         var wD;
-         this.dropCachesForNewPhysicsState(DD, zD);
- ... (4 more removed lines; see GitHub link above)
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
+     watch(pp, ip) {
+       var cp, Op;
+       return null !== (cp = null === (Op = this.signal) || void 0 === Op ? void 0 : Op.listen((cp => {
+         if (cp !== pp) return;
+ ... (19 more added lines; see GitHub link above)
```

#### 409. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9570-L9572` → after: `L13087-L13154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13087-L13154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13087-L13154) · [Before (L9570-L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9570-L9572)

```diff
-         this.dropCachesForNewPhysicsState(DD, zD);
-         const pD = null !== (wD = this.blockLookups) && void 0 !== wD ? wD : this.buildBlockLookups(DD, zD);
-         return this.blockLookups = pD, pD
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
+ ... (52 more added lines; see GitHub link above)
```

#### 410. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9574-L9575` → after: `L13156-L13172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13156-L13172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13156-L13172) · [Before (L9574-L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9574-L9575)

```diff
-       dropCachesForNewPhysicsState(DD, zD) {
-         this.cachedType === DD && this.cachedTier === zD || (this.resolved = null, this.blockLookups = null, this.cachedType = DD, this.cachedTier = zD)
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

#### 411. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9577-L9586` → after: `L13174-L13289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13174-L13289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13174-L13289) · [Before (L9577-L9586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9577-L9586)

```diff
-       buildResolvedSettings(DD, zD) {
-         const wD = (0, ZA.k)(DD, zD),
-           {
-             canAutoStepByBlock: pD,
-             speedMultiplierByBlock: sD
-           } = this.overrides;
-         return void 0 === pD && void 0 === sD ? {
-           ...wD,
-           ...this.overrides
-         } : {
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
+ ... (100 more added lines; see GitHub link above)
```

#### 412. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9588-L9622` → after: `L13291-L13559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13291-L13559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13291-L13559) · [Before (L9588-L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9588-L9622)

```diff
-           ...this.overrides,
-           canAutoStepByBlock: eA(wD.canAutoStepByBlock, pD),
-           speedMultiplierByBlock: eA(wD.speedMultiplierByBlock, sD)
-         }
-       }
-       buildBlockLookups(DD, zD) {
-         const wD = (0, ZA.g)(DD).getBlockLookupsForTier(zD),
-           {
-             canAutoStepByBlock: pD,
-             speedMultiplierByBlock: sD
-           } = this.overrides;
-         if (void 0 === pD && void 0 === sD) return wD;
-         const KD = (0, ZA.k)(DD, zD);
-         return {
-           speedMultiplier: void 0 === sD ? wD.speedMultiplier : (0, ZA.f)(eA(KD.speedMultiplierByBlock, sD)),
-           canAutoStep: void 0 === pD ? wD.canAutoStep : (0, ZA.b)(eA(KD.canAutoStepByBlock, pD))
- ... (19 more removed lines; see GitHub link above)
+           after: Op
+         }]
+       }))
+     }), [Pp.changes, Zp, Fp]),
+     oi = (0, Op.useMemo)((() => Oi && kp ? kp(Oi) : []), [Oi, kp]);
+   (0, Op.useEffect)((() => {
+     "applied" === Cp && Xp(!1)
+   }), [Cp]);
+   const Ii = !!Pp.editedInPlace;
+   (0, Op.useEffect)((() => {
+     Ii || "offered" !== Pp.status || Xp(!0)
+   }), [Ii, Pp.status]);
+   const Si = Pp.changes.map((pp => pp.path)).join(", "),
+     xi = !Ii || Bp || oi.length > 0 || "undone" === Cp || "stale" === Cp;
+   return (0, Sp.jsxs)("div", {
+     className: "WorldCodeAiToolCard",
+ ... (253 more added lines; see GitHub link above)
```

#### 413. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9624-L9731` → after: `L13561-L13756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13561-L13756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13561-L13756) · [Before (L9624-L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9624-L9731)

```diff
-       }
-       heldSize(DD) {
-         return this.Qg.get(DD)
-       }
-       clear(DD) {
-         this.Qg.delete(DD)
-       }
-     }
-     var tA = wD(9286),
-       FA = wD(39209);
-     class YA {
-       constructor(DD, zD, wD) {
-         this.isClient = zD, this.callbacks = wD, this.AU = void 0, this.yJ = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.Lf = new  … [truncated]
-       }
-       getBlockSolidityForPlayer(DD, zD, wD, pD, sD) {
-         return !!this.getBlockCollisionForPlayer(DD, zD, wD, pD, sD)
- ... (92 more removed lines; see GitHub link above)
+       })
+     }), (0, Sp.jsxs)("div", {
+       className: "WorldCodeAiChangeActions",
+       children: [(0, Sp.jsx)("span", {
+         className: "WorldCodeAiHint",
+         children: "A code block only runs when clicked, so this part goes in World Code."
+       }), cp && (0, Sp.jsx)("button", {
+         className: "WorldCodeAiPrimaryButton",
+         onClick: cp,
+         children: "Switch to World Code"
+       }), (0, Sp.jsx)("button", {
+         className: "WorldCodeAiLinkButton",
+         onClick: () => {
+           navigator.clipboard.writeText(ip).then((() => {
+             Yp(!0)
+           })).catch((() => {}))
+ ... (180 more added lines; see GitHub link above)
```

#### 414. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9733-L9770` → after: `L13758-L13764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13758-L13764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13758-L13764) · [Before (L9733-L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9733-L9770)

```diff
-         return null !== (zD = this.getClientPredictedOption(DD, "blockReach")) && void 0 !== zD ? zD : ID.f.aG
-       }
-       getBlockTypeIsHarvestable(DD, zD) {
-         const wD = this.getInvenHeldItem(DD);
-         if (zD && !this.getClientPredictedOption(DD, "creative")) {
-           var pD, sD, KD;
-           const rD = null === (pD = nA.m[null === wD || void 0 === wD ? void 0 : wD.name]) || void 0 === pD ? void 0 : pD.harvests,
-             cD = null === (sD = nA.m[null === wD || void 0 === wD ? void 0 : wD.name]) || void 0 === sD ? void 0 : sD.level;
-           return !(0, LD.Cc)({
-             blockHarvestType: this.Lf.metadatas[zD].harvestType,
-             blockHarvestLevel: this.Lf.metadatas[zD].harvestLevel,
-             harvestLevel: null !== (KD = this.getItemStat(DD, zD, "harvestLevel")) && void 0 !== KD ? KD : 0,
-             heldToolType: rD,
-             heldToolLevel: cD
-           })
-         }
- ... (22 more removed lines; see GitHub link above)
+         const ip = JSON.parse(null !== (pp = localStorage.getItem(sD)) && void 0 !== pp ? pp : "{}");
+         return "object" !== typeof ip || null === ip ? {} : Object.fromEntries(Object.entries(ip).filter((pp => {
+           let [, ip] = pp;
+           return Array.isArray(ip) && ip.every((pp => "number" === typeof pp))
+         })))
+       } catch {
+         return {}
```

#### 415. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9772` → after: `L13766-L13824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13766-L13824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13766-L13824) · [Before (L9772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9772)

```diff
-       getBlockSpeedMultiplier(DD, zD) {
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

#### 416. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9774-L9781` → after: `L13826-L13842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13826-L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13826-L13842) · [Before (L9774-L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9774-L9781)

```diff
-         const pD = this.Lf.metadatas;
-         let sD, KD, rD;
-         pD !== this.stoodOnMetadatas && (this.stoodOnMetadatas = pD, this.stoodOnOptions = [], this.stoodOnDefaults = [], this.stoodOnKnown = []);
-         for (const LD of zD) {
-           if (!Number.isInteger(LD) || LD < 0) {
-             const zD = this.getItemStat(DD, LD, "stoodOnSpeedMultiplier");
-             !(0, lD.B)(zD) && (void 0 === sD || zD > sD) && (sD = zD);
-             continue
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
+ ... (1 more added lines; see GitHub link above)
```

#### 417. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9791` → after: `L13845-L13894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13845-L13894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13845-L13894) · [Before (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9791)

```diff
-         return null !== (wD = sD) && void 0 !== wD ? wD : 1
+         pp.scrollTo({
+           top: op
+         })
+       } else pp.scrollTo({
+         top: pp.scrollHeight
+       })
+     }), [Ii, xi, Pi, wi, oi, ki]), (0, Op.useEffect)((() => {
+       Ii.entries = xi, Ii.dismissedErrorCounts.set(ap.key, si)
+     }), [Ii, xi, si, ap.key]), (0, Op.useEffect)((() => () => {
+       var pp;
+       null === (pp = Oc.current) || void 0 === pp || pp.abort(), Uc(),
+         function() {
+           var pp;
+           null === (pp = PS) || void 0 === pp || pp.tearDownNotification()
+         }()
+     }), []), (0, Op.useEffect)((() => {
+ ... (34 more added lines; see GitHub link above)
```

#### 418. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9793-L9805` → after: `L13896-L13906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13896-L13906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13896-L13906) · [Before (L9793-L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9793-L9805)

```diff
-       getStoodOnDefaultList(DD) {
-         const zD = this.Lf.metadatas,
-           wD = [],
-           pD = [];
-         for (let sD = 0; sD < DD; sD++) {
-           if (void 0 === zD[sD]) continue;
-           const DD = this.getDefaultItemStat(sD, "stoodOnSpeedMultiplier");
-           (0, lD.B)(DD) || (wD.push(sD), pD.push(Number(DD)))
-         }
-         return {
-           ids: Uint32Array.from(wD),
-           values: Float64Array.from(pD)
-         }
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

#### 419. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9807-L9815` → after: `L13908-L13924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13908-L13924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13908-L13924) · [Before (L9807-L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9807-L9815)

```diff
-       getPlayerStoodOnList(DD, zD, wD) {
-         const pD = this.Lf.metadatas;
-         if (pD !== this.stoodOnOptionBlocksMetadatas || wD !== this.stoodOnOptionBlocksCount) {
-           this.stoodOnOptionBlocksMetadatas = pD, this.stoodOnOptionBlocksCount = wD, this.stoodOnOptionBlocks = new Map;
-           for (let DD = 0; DD < wD; DD++) {
-             if (void 0 === pD[DD]) continue;
-             const zD = (0, FA.i)(this.getItemName(DD), "stoodOnSpeedMultiplier");
-             let wD = this.stoodOnOptionBlocks.get(zD);
-             void 0 === wD && (wD = [], this.stoodOnOptionBlocks.set(zD, wD)), wD.push(DD)
+     }), [Mc]);
+     const Cc = Bp > si && Jp.length > 0 ? Jp[Jp.length - 1] : null,
+       Ec = (0, Op.useMemo)((() => Cc ? function(pp, ip) {
+         var cp;
+         let Op;
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
+ ... (1 more added lines; see GitHub link above)
```

#### 420. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9818-L9871` → after: `L13927-L13962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13927-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13927-L13962) · [Before (L9818-L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9818-L9871)

```diff
-         const sD = this.getSyncedClientOptions(this.getPlayerReader(DD)),
-           KD = [];
-         for (const rD of zD) {
-           const zD = this.stoodOnOptionBlocks.get(rD);
-           if (void 0 === zD) continue;
-           const wD = null === sD ? this.getClientPredictedOption(DD, rD) : sD[rD];
-           if (!(0, lD.B)(wD))
-             for (const DD of zD) KD.push([DD, Number(wD)])
-         }
-         return KD.sort(((DD, zD) => DD[0] - zD[0])), {
-           ids: Uint32Array.from(KD, (DD => DD[0])),
-           values: Float64Array.from(KD, (DD => DD[1]))
-         }
-       }
-       getBhopMultiplier(DD, zD) {
-         const wD = this.getClientPredictedOption(DD, "bunnyhopMaxMultiplier") - 1;
- ... (38 more removed lines; see GitHub link above)
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
+ ... (20 more added lines; see GitHub link above)
```

#### 421. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9873-L9893` → after: `L13964-L14004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13964-L14004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L13964-L14004) · [Before (L9873-L9893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9873-L9893)

```diff
-         const pD = RD.l[DD].name.split("|");
-         return `${pD[0]}|meta|${null!==(wD=pD[2])&&void 0!==wD?wD:"rot1"}|${zD>0?"full":"empty"}`
-       }
-       getUpdatedBookshelfName(DD, zD) {
-         const wD = RD.l[DD].name,
-           pD = wD.split("|");
-         if (zD <= 6) {
-           var sD;
-           return `${0===zD?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(sD=pD[2])&&void 0!==sD?sD:"rot1"}|books${zD}`
-         }
-         return wD
-       }
-       getNearestArrowInInven(DD, zD) {
-         let wD = null,
-           pD = 1e6;
-         const sD = this.yJ.jzD(DD).getItems();
- ... (5 more removed lines; see GitHub link above)
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
+ ... (25 more added lines; see GitHub link above)
```

#### 422. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9895-L9902` → after: `L14006-L14045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14006-L14045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14006-L14045) · [Before (L9895-L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9895-L9902)

```diff
-         }
-         return wD
-       }
-       removeEatenItem(DD, zD, wD) {
-         if (this.getClientPredictedOption(DD, "creative")) return;
-         const pD = zD.getItemAtIdx(wD),
-           sD = this.getItemStat(DD, pD.name, "afterEatenItem");
-         if (void 0 !== sD) zD.setItemSlot(wD, sD, this.getItemStat(DD, sD, "stackable") ? 1 : null);
+         })()));
+         const Cp = null !== Wp && void 0 !== Wp ? Wp : Ri && !Ap && void 0 === wp && void 0 === vp;
+         if (!Cp && SP(op) && Nc((() => {
+             nc.current(pp, ip, op)
+           }))) return;
+         const Ep = null !== (Op = null !== mp && void 0 !== mp ? mp : null === qp || void 0 === qp ? void 0 : qp.openPath) && void 0 !== Op ? Op : lp;
+         void 0 === Wp && Cp && qi(!1), Uc();
+         const Xp = Hx.activeKey(),
+           Bp = Cp ? null : Xp,
+           Np = null !== Bp,
+           Tp = Np && !yp.c.get(),
+           fp = void 0 !== qp,
+           bp = Tp || fp,
+           ap = fp ? 3 : Pp,
+           np = xi.some((pp => pp.isUnchecked && lc(pp) && (void 0 === kp || pp.id >= kp))),
+           Fp = Ip || !Tp && np,
+ ... (24 more added lines; see GitHub link above)
```

#### 423. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9904-L9927` → after: `L14047-L14062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14047-L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14047-L14062) · [Before (L9904-L9927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9904-L9927)

```diff
-           const DD = null === pD.amount ? 0 : pD.amount - 1;
-           DD <= 0 ? zD.setItemSlot(wD, tA.c, null) : zD.setItemSlot(wD, pD.name, DD, pD.attributes)
-         }
-       }
-       getEntityType(DD) {
-         if (this.yJ.aDD(DD, "itemState")) return "Item";
-         const zD = this.getEntityTypeImpl(DD);
-         if (zD) {
-           const DD = zD.indexOf("|");
-           return -1 === DD ? zD : zD.slice(0, DD)
-         }
-         return console.error(new Error(`Tried to get entity type for entity ${DD} but it doesn't exist in networked state`).stack), null
-       }
-       onCollisionBoxCapped() {}
-       updatePositionAndPhysics(DD, zD, wD, pD) {
-         let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.isClient || wD;
- ... (8 more removed lines; see GitHub link above)
+           const pp = Ap && ap > 0;
+           Si = Xc({
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

#### 424. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9929-L9962` → after: `L14064-L14148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14064-L14148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14064-L14148) · [Before (L9929-L9962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9929-L9962)

```diff
-         let gD = LD,
-           RD = cD;
-         pD && (gD += Math.max(Math.abs(pD[0]), Math.abs(pD[2])), RD += pD[1]), (gD > TA.d || RD > TA.b) && ((zD.type !== jA.q.DEFAULT || pD) && this.onCollisionBoxCapped(), gD = Math.min(gD, TA.d), RD = Math.min(RD, TA.b)), this.updatePositionAndPhysicsImpl(DD, zD, wD, null !== p … [truncated]
-       }
-       setPhysicsBodySize(DD, zD, wD, pD, sD) {
-         const KD = this.AU.yJ.AY(DD),
-           rD = null === wD && ((0, YD.u)(zD.type) || zD.type === jA.q.SLEEPING),
-           LD = this.playerBodyGrowth.resize(KD, KD.width, KD.height, pD, sD, rD);
-         this.AU.yJ.GwD(DD, LD.width, LD.height, LD.width)
-       }
-       regrowPlayerBody(DD) {
-         var zD;
-         const wD = this.AU.yJ.AY(DD),
-           pD = this.playerBodyGrowth.heldSize(wD);
-         if (void 0 === pD) return;
-         const sD = null !== (zD = wD.CU) && void 0 !== zD ? zD : this.AU.CU,
- ... (18 more removed lines; see GitHub link above)
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
+ ... (69 more added lines; see GitHub link above)
```

#### 425. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9964-L10115` → after: `L14150-L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14150-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14150-L14557) · [Before (L9964-L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L9964-L10115)

```diff
-             return !0
-           }(wD.LzD, sD, pD.width, pD.height, ((zD, wD, pD) => this.XF(zD, wD, pD) ? this.getBlockCollisionForPlayer(DD, zD, wD, pD, this.getClientPredictedBlock(DD, zD, wD, pD)) : null));
-         KD && this.takeHeldPlayerBodySize(DD)
-       }
-       takeHeldPlayerBodySize(DD) {
-         const zD = this.AU.yJ.AY(DD),
-           wD = this.playerBodyGrowth.heldSize(zD);
-         void 0 !== wD && (this.playerBodyGrowth.clear(zD), this.AU.yJ.GwD(DD, wD.width, wD.height, wD.width))
-       }
-       getVehicleSettingOverrides(DD) {
-         var zD, wD;
-         return null !== (zD = null === (wD = this.vehicleSettingOverridesByEId.get(DD)) || void 0 === wD ? void 0 : wD.getOverrides()) && void 0 !== zD ? zD : null
-       }
-       getVehicleSettingOverrideStore(DD) {
-         return this.vehicleSettingOverridesByEId.get(DD)
-       }
- ... (136 more removed lines; see GitHub link above)
+               }(Mp, yi.signal, Np);
+               return "unchecked" === ip && Bp ? (Xc({
+                 role: "assistant",
+                 text: "",
+                 changes: [],
+                 status: "offered",
+                 isNotice: !0,
+                 ...Di,
+                 keyNotice: {
+                   notice: "unchecked",
+                   model: Bp.model.name,
+                   company: bS(Bp.provider, Bp.baseUrl, !0)
+                 }
+               }), null) : "personalInfo" === ip || "unsafe" === ip ? (op(ip), null) : Ip
+             };
+           let Yp = rp || fp ? null !== Rp && void 0 !== Rp ? Rp : Mp : await Ip();
+ ... (392 more added lines; see GitHub link above)
```

#### 426. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10117-L10119` → after: `L14559-L14587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14559-L14587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14559-L14587) · [Before (L10117-L10119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10117-L10119)

```diff
-         }) : "Empty Bookshelf" === this.getMetaInfo(pD).rootName && this.blockDataOwner.setBlockData(DD, zD, wD, {
-           persisted: {
-             books: []
+           const bi = KA(),
+             ai = oo(qi.answer, Ji, Wp, Ep, bi.callbackNames(), Oi ? Up.b : void 0, wi, new Set([Ro(Wp, Ep, Oi), Ep, ...jp, ...Object.keys(null !== ep && void 0 !== ep ? ep : {})].filter((pp => null !== pp))), bi.realName),
+             ni = Lp ? {
+               ...ai,
+               changes: [],
+               failedEdits: [],
+               inPlace: !1,
+               worldCode: [],
+               plan: [],
+               actions: []
+             } : ai;
+           if (!fi && !bp) {
+             const pp = Date.now();
+             cc(pp), Wi({
+               phase: "screening",
+               startedAt: pp,
+ ... (13 more added lines; see GitHub link above)
```

#### 427. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10121-L10150` → after: `L14589-L14824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14589-L14824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14589-L14824) · [Before (L10121-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10121-L10150)

```diff
-         }))
-       }
-       playerAttacked(DD, zD, wD) {
-         const pD = this.AU.yJ.gzD(DD);
-         pD.isGliding && (pD.hitWhilstGliding = !0), pD.isFloating && (pD.hitWhilstFloating = !0);
-         const sD = this.AU.yJ.Vk(DD);
-         sD.UG[0] = 0, sD.UG[2] = 0, wD && (sD.UG[1] > 0 && (sD.UG[1] = 0), sD.Py[1] > 0 && (sD.Py[1] = 0), this.AU.yJ.TzD(DD).hitInPrevTick = !0);
-         const {
-           maxImpulse: KD
-         } = ID.f;
-         zD[0] = LD.c.clampAbs(zD[0], KD), zD[1] = LD.c.clampAbs(zD[1], KD), zD[2] = LD.c.clampAbs(zD[2], KD), sD.applyImpulse(zD)
-       }
-       jzD(DD) {
-         var zD;
-         return null === (zD = this.AU.yJ.bzD(DD)) || void 0 === zD ? void 0 : zD.inventory
-       }
- ... (14 more removed lines; see GitHub link above)
+           null !== Ni && Ui.answered(Si, {
+             input: yp,
+             responder: Ni.responder,
+             promptVersion: Ni.promptVersion
+           }, {
+             model: Ni.model,
+             text: qi.answer
+           });
+           const Fi = function(pp) {
+               let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oi;
+               return pp.flatMap((pp => hA(bi, pp, ip && !(0, Up.e)(pp.path))))
+             },
+             Gi = Fi(ni.changes),
+             ri = "direct" === wi ? function(pp) {
+               return pp.flatMap((pp => {
+                 var ip;
+ ... (220 more added lines; see GitHub link above)
```

#### 428. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10152-L10273` → after: `L14826-L14838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14826-L14838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14826-L14838) · [Before (L10152-L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10152-L10273)

```diff
-         return sD
-       }
-       canWearCape(DD, zD) {
-         return (0, LD.Nd)(this.getPlayerRanks(DD), zD)
-       }
-       canUseNameColour(DD, zD) {
-         return (0, LD.Pd)(this.getPlayerRanks(DD), zD)
-       }
-       getBlockCollisionForWalkThroughContext(DD, zD, wD, pD, sD, KD, rD) {
-         const LD = null !== pD && void 0 !== pD ? pD : this.OJ(DD, zD, wD),
-           cD = this.AU.Lf.gf(LD);
-         return (0, Pp.d)(DD, zD, wD, LD, cD, sD, KD, rD)
-       }
-       updateWalkThroughRectContext(DD, zD, wD, pD, sD) {
-         switch ((0, Ez.$)(zD, pD), (0, Ez.$)(zD, sD), wD) {
-           case bA.k.CAN_WALK_THROUGH:
- ... (106 more removed lines; see GitHub link above)
+           })), ...pp]));
+           const rc = Oc && Ic && !!zp && Oi && 0 === zi.length && (Ac || "switchToWorldCode" === (null === hc || void 0 === hc ? void 0 : hc.kind) && !Lp);
+           if (rc && ac) Ai((pp => pp.map((pp => pp.id === Jc && Ki.worldCode.length > 0 ? {
+             ...pp,
+             worldCode: Ki.worldCode
+           } : pp)))), Xc({
+             role: "assistant",
+             text: PP(Ki.worldCode.length > 0),
+             changes: [],
+             status: "offered",
+             isNotice: !0
+           });
+           else if (rc) {
```

#### 429. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10275-L10280` → after: `L14840-L14862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14840-L14862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14840-L14862) · [Before (L10275-L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10275-L10280)

```diff
-             const {
-               shared: DD
-             } = pD.persisted;
-             this.bloxd.client.meshCreator.addNoticeboardText(wD.rect, DD.text, null !== (KD = DD.textSize) && void 0 !== KD ? KD : 0), this.drawnText.set(wD.rect.anchor.join(), {
-               anchor: wD.rect.anchor,
-               textCell: wD.textCell
+             const pp = Ki.worldCode.join("\n\n"),
+               ip = "switchToWorldCode" === (null === hc || void 0 === hc ? void 0 : hc.kind) ? hc.request : null,
+               cp = Ac ? Gc((ip => function(pp, ip) {
+                 return `In a code block, they asked: "${pp}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never de … [truncated]
+               }(ip, pp))) : null;
+             LO(null !== (ui = null === cp || void 0 === cp ? void 0 : cp.request) && void 0 !== ui ? ui : ip ? function(pp) {
+               return `In a code block, they asked for this in World Code, which is open now: ${pp}`
+             }(ip) : null, {
+               check: bp,
+               about: Sp,
+               useFree: Cp,
+               lookupOf: Si,
+               ...cp ? {
+                 guardWords: cp.guardWords
+               } : {}
+             }, Ac ? pp : void 0)
+ ... (7 more added lines; see GitHub link above)
```

#### 430. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10283-L10297` → after: `L14865-L14905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14865-L14905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14865-L14905) · [Before (L10283-L10297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10283-L10297)

```diff
-         }
-       }
-       collectBoard(DD, zD, wD) {
-         const pD = this.bloxd.OJ(...DD);
-         if (!(0, HA.f)(pD) || zD.has(DD.join())) return;
-         const {
-           rootId: sD,
-           rot: rD
-         } = RD.l[pD].meta, LD = KD.z[rD], cD = [DD];
-         zD.add(DD.join());
-         const gD = wD.length;
-         for (; cD.length > 0 && wD.length - gD < HA.g;) {
-           const DD = cD.pop();
-           wD.push(DD);
-           for (const [wD, pD, KD] of LD) {
+           if (Nc && Vi.length > 0 && ap < 3 && (!(Zc || Fc || rc) || ac) && (Qc(Jc, {
+               warningsSentBack: !0
+             }), gi((pp => [{
+               id: Hc(),
+               text: (0, lY.C)(Vi),
+               shown: 1 === Vi.length ? "Fix this line" : "Fix these lines",
+               check: !1,
+               isAutoFix: !0,
+               autoFixRound: ap + 1,
+               replaced: nc,
+               until: Date.now() + DP
+             }, ...pp]))), Oc && Yc.length > 0 && (Nc || 0 === Ki.changes.length && !qi.isCutShort && !ic && !qi.hasCallsFromReasoning) && !mc && 0 === Vi.length && 0 === Uc.length && 0 === xc.length && ap < 3 && !Zc && !Fc && !rc && gi((pp => [{
+               id: Hc(),
+               text: lY.s,
+               shown: YP,
+               replaced: nc,
+ ... (25 more added lines; see GitHub link above)
```

#### 431. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10299-L10307` → after: `L14907-L14937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14907-L14937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14907-L14937) · [Before (L10299-L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10299-L10307)

```diff
-             const LD = [DD[0] + wD, DD[1] + pD, DD[2] + KD],
-               gD = LD.join();
-             if (zD.has(gD)) continue;
-             if (!this.bloxd.XF(...LD)) {
-               this.waitOnChunk(LD, DD);
-               continue
-             }
-             const UD = null === (AD = RD.l[this.bloxd.OJ(...LD)]) || void 0 === AD ? void 0 : AD.meta;
-             (null === UD || void 0 === UD ? void 0 : UD.rootId) === sD && UD.rot === rD && (zD.add(gD), cD.push(LD))
+             const pp = Qi instanceof TI ? Qi.reason : "failed",
+               cp = "unavailable" === pp && null === Xp ? null === (ki = Ex.getState()).status || null === Nx(ki) ? ki.picked ? "Try again to ask Super Bot.xd." : "Pick Super Bot.xd in the AI model menu, then try again." : "guest" === ki.status.availability ? "Log in to use Super  … [truncated]
+               Op = ("busy" === pp || "unavailable" === pp) && !Bp && !rp && void 0 === ip && void 0 === kp && SA.featureFlags.isOwnTopLevelSite,
+               op = Op ? "Bot.xd doesn't seem to be working right now." : function(pp) {
+                 switch (pp) {
+                   case "busy":
+                     return "Bot.xd is busy right now.";
+                   case "tooLarge":
+                   case "failed":
+                     return "The AI couldn't answer this time. Try again, or ask in fewer words.";
+                   case "timeout":
+                     return "Bot.xd was thinking for too long and timed out.";
+                   case "turnedAway":
+                     return "Bot.xd was unable to answer.";
+                   case "unavailable":
+                     return "Bot.xd (free) can't answer for now."
+ ... (15 more added lines; see GitHub link above)
```

#### 432. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10309-L10344` → after: `L14939-L15002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14939-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L14939-L15002) · [Before (L10309-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10309-L10344)

```diff
-         }
-       }
-       waitOnChunk(DD, zD) {
-         var wD;
-         const pD = (0, lD.P)(DD).join(),
-           sD = null !== (wD = this.waitingOnChunk.get(pD)) && void 0 !== wD ? wD : new Map;
-         sD.set(zD.join(), zD), this.waitingOnChunk.set(pD, sD)
-       }
-     }
-     var zU = wD(38986),
-       wU = wD(36719),
-       pU = wD(38888),
-       sU = wD(1270),
-       KU = wD(1932),
-       rU = wD(36766);
-     const LU = new Set(["Board", "Bookshelf", "Empty Bookshelf"]);
- ... (20 more removed lines; see GitHub link above)
+         } finally {
+           Oc.current = null, Wi(null), Ui.requestEnded(Si)
+         }
+         var ki, mi, Mi, Ci, Ei, Xi
+       }, bc = (pp, ip, cp, Op) => {
+         const op = function(pp, ip) {
+           return "refused" === pp.problem ? null : {
+             notice: pp.problem,
+             model: ip.model.name,
+             company: bS(ip.provider, ip.baseUrl, !0),
+             isServer: "custom" === ip.provider,
+             detail: pp.detail && aS(pp.detail, ip.key)
+           }
+         }(pp, ip);
+         if (!op) return (pp => {
+           Qc(pp, {
+ ... (48 more added lines; see GitHub link above)
```

#### 433. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10368-L10381` → after: `L15006-L15027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15006-L15027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15006-L15027) · [Before (L10368-L10381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10368-L10381)

```diff
-       }
-       setBlockNoMulti(DD, zD, wD, pD, sD) {
-         const KD = this.OJ(DD, zD, wD);
-         super.setBlockNoMulti(DD, zD, wD, pD, sD), ((0, HA.f)(KD) || (0, HA.f)(pD)) && this.noticeboardTextRenderer.changed(DD, zD, wD)
-       }
-       setBlockNoMultiImpl(DD, zD, wD, pD, sD) {
-         this.XF(DD, zD, wD) && (this.AU.jT(sD, DD, zD, wD), this.client.gameRecorder.onBlockPlaced(DD, zD, wD, pD, sD), this.applyingServerBlocks || this.recentChunkEdits.noteEdit(DD, zD, wD))
-       }
-       applyServerBlocks(DD) {
-         this.applyingServerBlocks = !0;
-         try {
-           DD()
-         } finally {
-           this.applyingServerBlocks = !1
+       }, ac = (0, Op.useRef)(hc);
+     ac.current = hc;
+     const nc = (0, Op.useRef)(fc);
+     nc.current = fc;
+     const Fc = (0, Op.useRef)(Xc);
+     Fc.current = Xc;
+     const gc = (0, Op.useRef)(null),
+       [Gc, rc] = (0, Op.useState)(null),
+       Zc = Fi.filter((pp => void 0 === pp.followUp));
+ 
+     function zc(pp, ip, cp) {
+       if (Pi) {
+         if (Fi.length < 3) {
+           var Op;
+           const op = null !== (Op = cp.useFree) && void 0 !== Op ? Op : Ri && null !== nO;
+           op && qi(!1), gi([...Fi, {
+ ... (6 more added lines; see GitHub link above)
```

#### 434. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10383-L10393` → after: `L15029-L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15029-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15029-L15043) · [Before (L10383-L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10383-L10393)

```diff
-       }
-       removingChunk(DD, zD, wD, pD) {
-         this.client.gameRecorder.onChunkRemoved(DD, zD, wD), super.removingChunk(DD, zD, wD, pD)
-       }
-       getItemTypeObjImpl(DD) {
-         return vD.i.itemsClient[DD]
-       }
-       getEntityTypeImpl(DD) {
-         return this.client.getEntityType(DD)
-       }
-       updatePositionAndPhysicsImpl(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
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

#### 435. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10395-L10399` → after: `L15045-L15051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15045-L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15045-L15051) · [Before (L10395-L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10395-L10399)

```diff
-         this.setPhysicsBodySize(DD, zD, pD, LD, cD);
-         const RD = this.AU.yJ.Vk(DD);
-         if (RD.Ug = KD.Ug, RD.fluidDrag = KD.fluidDrag, RD.fluidDragHoriz = KD.fluidDragHorizontal, RD.fluidDragVert = KD.fluidDragVertical, RD.gravityMultiplier = KD.gravityMultiplier, RD.Ay = KD.canAutoStep, sD && this.AU.yJ.TzD(DD).setPose(KD.pose, rD), null === (gD = this.AU. … [truncated]
-           const DD = this.AU.yJ.gzD(this.AU.vW);
-           DD ? DD.physicsState = zD : console.error("No movement component found for player entity")
+         const pp = (null !== (Sp = Op.until) && void 0 !== Sp ? Sp : 0) - Date.now();
+         if (pp <= 0) return void gi(op);
+         const ip = setTimeout((() => {
+           gi((pp => [...pp]))
+         }), pp);
+         return () => {
+           clearTimeout(ip)
```

#### 436. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10402-L10411` → after: `L15056-L15074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15056-L15074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15056-L15074) · [Before (L10402-L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10402-L10411)

```diff
-         KD.effect && this.client.updateEffect(DD, KD.effect.name, {
-           icon: KD.effect.icon,
-           duration: null !== (AD = KD.effect.duration) && void 0 !== AD ? AD : null,
-           level: 1,
-           showInNametag: !1
-         });
-         for (const fD of (0, ZA.l)()) {
-           var UD;
-           const zD = (0, ZA.k)(fD, null).effect;
-           zD && zD.name !== (null === (UD = KD.effect) || void 0 === UD ? void 0 : UD.name) && this.client.removeEffect(DD, zD.name)
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
+             gi((pp => [...pp]))
+           }), pp);
+ ... (3 more added lines; see GitHub link above)
```

#### 437. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10414-L10422` → after: `L15077-L15090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15077-L15090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15077-L15090) · [Before (L10414-L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10414-L10422)

```diff
-       useConsumableVehicleImpl(DD, zD, wD) {
-         const pD = this.AU.yJ.gzD(this.AU.vW),
-           sD = wD.physicsState;
-         pD.physicsState.type !== jA.q.DEFAULT && pD.physicsState.type !== wD.physicsState.type && this.updatePositionAndPhysics(this.AU.vW, {
-           type: jA.q.DEFAULT,
-           tier: null
-         }, !0), pD.physicsState = sD
-       }
-       getPlayerUseDir(DD) {
+       const Lp = null !== (cp = Op.followUp) && void 0 !== cp ? cp : {
+         ...void 0 === Op.shown ? {} : {
+           check: Op.check,
+           wordsOnly: Op.wordsOnly,
+           isAutoFix: Op.isAutoFix,
+           autoFixRound: Op.autoFixRound
+         },
+         useFree: Op.useFree
+       };
+       SP(Lp) && fx(Ex.getState()) ? Gc !== Op.id && (rc(Op.id), Vx()) : (gi(op), nc.current(Op.text, Op.shown, Lp))
+     }), [Pi, Fi, Sc, Xp, xi, lp, hp, Bc, Gc]);
+     const sc = (0, Op.useRef)(zc);
+     sc.current = zc, (0, Op.useEffect)((() => {
+       if (ii) {
```

#### 438. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10424-L10437` → after: `L15092-L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15092-L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15092-L15096) · [Before (L10424-L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10424-L10437)

```diff
-         return console.assert(DD === this.AU.vW, "Should only get targeted block for local player"), null !== (zD = this.AU.FDD) && void 0 !== zD ? zD : this.AU.camera.WH()
-       }
-       getEntityMeshOffset(DD) {
-         var zD, wD;
-         return null !== (zD = null === (wD = this.AU.yJ.TzD(DD)) || void 0 === wD ? void 0 : wD.meshOffset) && void 0 !== zD ? zD : null
-       }
-       OJ(DD, zD, wD) {
-         return this.AU.OJ(DD, zD, wD)
-       }
-       getClientPredictedOption(DD, zD) {
-         return console.assert(DD === this.AU.vW || DD === this.AU.vDD, "eId in client getClientPredictedOption must be local player"), this.AU.NJ[zD]
-       }
-       getEntityPos(DD) {
-         return this.AU.yJ.PJ(DD)
+         if (null === ci || void 0 === ci || ci(), "change" === ii.action) return ri(ii), void(null === (pp = tc.current) || void 0 === pp || pp.focus());
+         ri(null), sc.current(WA(ii), yA(ii), {
+           check: !1,
+           wordsOnly: "explain" === ii.action
+         })
```

#### 439. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10439-L10639` → after: `L15098-L15151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15098-L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15098-L15151) · [Before (L10439-L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10439-L10639)

```diff
-       getEntityHeading(DD) {
-         var zD, wD, pD;
-         var sD, KD;
-         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return null !== (sD = null === (KD = (0, WL.getCaughtUpMeshRotation)(this.AU, (0, ND.b)(DD))) || void 0 === KD ? void 0 : KD.renderRotation[1]) && void 0 !== sD ? sD : 0;
-         const rD = this.AU.yJ.getState((0, ND.b)(DD), "meshRotation");
-         return null !== (zD = null !== (wD = null === (pD = this.client.getColyseusEntity(DD)) || void 0 === pD ? void 0 : pD.yRotation) && void 0 !== wD ? wD : null === rD || void 0 === rD ? void 0 : rD.serverSetRotation[1]) && void 0 !== zD ? zD : 0
-       }
-       getRiddenVehicleEId(DD) {
-         var zD, wD;
-         return DD !== this.AU.vW && DD !== this.AU.vDD ? null !== (zD = null === (wD = this.AU.yJ.TzD(DD)) || void 0 === wD ? void 0 : wD.ridingVehicleEId) && void 0 !== zD ? zD : null : this.riddenVehicleEId
-       }
-       getVehicleRiderEIds(DD) {
-         return this.riddenVehicleEId === DD ? [this.AU.vW] : []
-       }
-       getRiderPositionOffset(DD) {
-         return DD !== this.AU.vW && DD !== this.AU.vDD ? null : this.appliedPositionOffset
- ... (185 more removed lines; see GitHub link above)
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

#### 440. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10641-L10657` → after: `L15153-L15396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15153-L15396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15153-L15396) · [Before (L10641-L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10641-L10657)

```diff
-       "aiState" in pD && DD.updateEntityField(zD, "aiState", null === (sD = wD.aiState) || void 0 === sD ? -1 : mc.l.indexOf(sD))
-     }
- 
-     function JU(DD) {
-       return [DD[0], DD[1], DD[2]]
-     }
- 
-     function EU(DD) {
-       return DD ? JU(DD) : [0, 0, 0]
-     }
- 
-     function QU(DD) {
-       const zD = {};
-       if (!DD.armour) return zD;
-       for (const [wD, pD] of DD.armour.entries()) zD[wD] = {
-         itemName: pD.itemName,
- ... (1 more removed lines; see GitHub link above)
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
+ ... (228 more added lines; see GitHub link above)
```

#### 441. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10659-L10668` → after: `L15398-L15426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15398-L15426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15398-L15426) · [Before (L10659-L10668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10659-L10668)

```diff
-       return zD
-     }
- 
-     function XU(DD) {
-       const zD = {};
-       for (const [pD, sD] of Object.entries((0, bD.l)(DD))) {
-         var wD;
-         if (null !== sD.itemName) zD[pD] = {
-           itemName: sD.itemName,
-           enchantmentTier: null !== (wD = sD.enchantmentTier) && void 0 !== wD ? wD : ""
+     (0, Op.useEffect)((() => {
+       if (!sp || void 0 === (null === Dc || void 0 === Dc ? void 0 : Dc.endedAt) || (null === Pc || void 0 === Pc ? void 0 : Pc.target.key) !== ap.key) return void(void 0 === (null === Dc || void 0 === Dc ? void 0 : Dc.endedAt) || Pc || (0, lY.l)(np));
+       const pp = (0, lY.l)(np);
+       if (!pp) return;
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
+ ... (13 more added lines; see GitHub link above)
```

#### 442. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10671-L10674` → after: `L15433-L15435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15433-L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15433-L15435) · [Before (L10671-L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10671-L10674)

```diff
-       return zD
-     }
- 
-     function VU(DD) {
+     }, yO = (0, Op.useCallback)((pp => pp.flatMap((pp => hA(KA(), pp, Oi)))), [Oi]), UO = (0, Op.useRef)({}), wO = (0, Op.useRef)({}), vO = (0, Op.useRef)(Promise.resolve()), tO = (0, Op.useRef)([]), HO = (0, Op.useRef)(new Map), dO = (0, Op.useRef)(new Map), eO = (0, Op.useRef)( … [truncated]
+       Ti.current = !1, tO.current = [], HO.current = new Map, dO.current = new Map, eO.current = null, UO.current = {}, wO.current = {}, bi(null)
+     }, jO = async () => {
```

#### 443. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10676-L10700` → after: `L15437-L15467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15437-L15467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15437-L15467) · [Before (L10676-L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10676-L10700)

```diff
-       const zD = {};
-       for (const wD of fU.y) wD in DD && (zD[wD] = DD[wD]);
-       return zD
-     }
- 
-     function PU(DD) {
-       var zD;
-       return {
-         ...DD,
-         followingEId: GU(DD.followingEId),
-         ridingVehicleEId: GU(null !== (zD = DD.ridingVehicleEId) && void 0 !== zD ? zD : null)
-       }
-     }
- 
-     function CU(DD) {
-       return DD ? "string" !== typeof DD.ws ? DD : {
- ... (9 more removed lines; see GitHub link above)
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
+               const ip = VY(Yp).find((ip => ip.key === pp));
+               ip && ip.value !== cp && Lp.get(pp) === ip.value && (Yp = null !== (Dp = pD(Yp, ip, cp)) && void 0 !== Dp ? Dp : Yp)
+             }
+             return Yp === Sp ? [] : [{
+ ... (15 more added lines; see GitHub link above)
```

#### 444. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10702-L10710` → after: `L15469-L15542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15469-L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15469-L15542) · [Before (L10702-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10702-L10710)

```diff
-       void 0 !== zD.leaderboardTop && (DD.leaderboardTop = zD.leaderboardTop), void 0 !== zD.meshKind && (DD.meshKind = zD.meshKind, DD.meshOpts = zD.meshOpts)
-     }
- 
-     function TU(DD) {
-       var zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD;
-       const {
-         moveState: JD,
-         colyEntity: ED,
-         heldItemState: QD
+       uO()
+     }, kO = !Oi && Object.values(Xp).some((pp => VY(pp).length > 0)), mO = function(pp) {
+       let {
+         codeBlock: ip,
+         hasSettings: cp,
+         canEdit: op
+       } = pp;
+       return (0, Op.useEffect)((() => {
+         (0, jY.D)("aiNotes", !ip)
+       }), [ip]), (0, Op.useEffect)((() => {
+         (0, jY.D)("aiGameSettings", cp)
+       }), [cp]), (0, Op.useEffect)((() => {
+         (0, jY.D)("aiEdits", op)
+       }), [op]), (0, kY.o)("aiHelperOverview")
+     }({
+       codeBlock: Oi,
+ ... (58 more added lines; see GitHub link above)
```

#### 445. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10713-L10734` → after: `L15548-L15572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15548-L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15548-L15572) · [Before (L10713-L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10713-L10734)

```diff
-         type: DD.type,
-         name: DD.name,
-         position: DD.position,
-         rotation: DD.rotation,
-         scale: DD.scale,
-         speed: null !== (zD = null !== (wD = null === JD || void 0 === JD ? void 0 : JD.speed) && void 0 !== wD ? wD : null === ED || void 0 === ED ? void 0 : ED.speed) && void 0 !== zD ? zD : 0,
-         jumping: null !== (pD = null !== (sD = null === JD || void 0 === JD ? void 0 : JD.jumping) && void 0 !== sD ? sD : null === ED || void 0 === ED ? void 0 : ED.jumping) && void 0 !== pD && pD,
-         crouching: null !== (KD = null !== (rD = null === JD || void 0 === JD ? void 0 : JD.crouching) && void 0 !== rD ? rD : null === ED || void 0 === ED ? void 0 : ED.crouching) && void 0 !== KD && KD,
-         cameraPitch: null !== (LD = null !== (cD = null === JD || void 0 === JD ? void 0 : JD.cameraPitch) && void 0 !== cD ? cD : null === ED || void 0 === ED ? void 0 : ED.cameraPitch) && void 0 !== LD ? LD : 0,
-         armSwinging: null !== (gD = null !== (RD = null === JD || void 0 === JD ? void 0 : JD.armSwinging) && void 0 !== RD ? RD : null === ED || void 0 === ED ? void 0 : ED.armSwinging) && void 0 !== gD && gD,
-         heldItemName: null !== (AD = null !== (UD = null === QD || void 0 === QD ? void 0 : QD.heldItemName) && void 0 !== UD ? UD : null === ED || void 0 === ED ? void 0 : ED.heldItemName) && void 0 !== AD ? AD : null,
-         heldItemEnchantmentTier: null !== (fD = null !== (ID = null === QD || void 0 === QD ? void 0 : QD.heldItemEnchantmentTier) && void 0 !== ID ? ID : null === ED || void 0 === ED ? void 0 : ED.heldItemEnchantmentTier) && void 0 !== fD ? fD : null,
-         pose: null !== (BD = null !== (GD = null === JD || void 0 === JD ? void 0 : JD.pose) && void 0 !== GD ? GD : null === ED || void 0 === ED ? void 0 : ED.pose) && void 0 !== BD ? BD : "standing",
-         followingEId: DD.followingEId,
-         ridingVehicleEId: null !== (hD = null !== (nD = null === JD || void 0 === JD ? void 0 : JD.ridingVehicleEId) && void 0 !== nD ? nD : null === ED || void 0 === ED ? void 0 : ED.ridingVehicleEId) && void 0 !== hD ? hD : null,
-         followingOffset: DD.followingOffset,
- ... (6 more removed lines; see GitHub link above)
+         activeKey: Sp,
+         cutShortActions: (pp, ip) => ({
+           canFinish: !Op && pp === xp && (null === Sp || void 0 === Sp ? void 0 : Sp.id) === ip.keyId && Sp.model.id === ip.modelId,
+           onFinish: () => {
+             op(ip.request, {
+               retryOf: pp,
+               continueFrom: ip.written
+             })
+           }
+         }),
+         noticeActions: (pp, ip, cp) => ({
+           notice: cp.notice,
+           onRetry: () => {
+             op(ip, {
+               retryOf: pp
+             })
+ ... (9 more added lines; see GitHub link above)
```

#### 446. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10736-L10765` → after: `L15574-L15588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15574-L15588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15574-L15588) · [Before (L10736-L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10736-L10765)

```diff
-     }
- 
-     function bU(DD, zD) {
-       const wD = DD.getColyseusEntity(zD);
-       if (!wD) throw new Error(`Colyseus entity not found for entity ${zD}`);
-       return wD
-     }
- 
-     function jU(DD, zD, wD) {
-       return wD.toString() === zD.vW.toString() ? PU(function(DD, zD) {
-         var wD, pD, sD, KD, rD;
-         const LD = DD.yJ.TzD(zD),
-           cD = DD.yJ.qzD(zD),
-           gD = DD.yJ.nwD(zD),
-           RD = DD.yJ.getState(zD, "movement"),
-           AD = (0, ZA.q)(DD.bloxd.getResolvedPhysicsSettings(zD, RD.physicsState), RD.steeringHeading, lg.b.getPlayerFacingHeading(DD));
- ... (14 more removed lines; see GitHub link above)
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
```

#### 447. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10767-L10802` → after: `L15590-L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15590-L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15590-L15603) · [Before (L10767-L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10767-L10802)

```diff
-       }(zD, wD)) : function(DD, zD) {
-         const wD = DD.yJ.nwD(zD);
-         return (null === wD || void 0 === wD ? void 0 : wD.UI) === DD.vW
-       }(zD, wD) ? PU(function(DD, zD, wD) {
-         var pD, sD, KD, rD, LD, cD, gD;
-         const RD = bU(DD, wD),
-           AD = zD.yJ.TzD(wD),
-           UD = zD.yJ.qzD(wD),
-           fD = zD.yJ.nwD(wD),
-           ID = (0, WL.getCaughtUpMeshRotation)(zD, wD);
-         let BD;
-         if (null !== fD && void 0 !== fD && fD.MwD) {
-           var GD, hD, nD, MD, OD, JD;
-           const DD = zD.yJ.gzD(zD.vW),
-             wD = (0, ZA.q)(zD.bloxd.getResolvedPhysicsSettings(zD.vW, DD.physicsState), DD.steeringHeading, lg.b.getPlayerFacingHeading(zD));
-           BD = [null !== (GD = null !== (hD = null === ID || void 0 === ID || null === (nD = ID.serverSetRotation) || void 0 === nD ? void 0 : nD[0]) && void 0 !== hD ? hD : RD.xRotation) && void 0 !== GD ? GD : 0, wD, null !== (MD = null !== (OD = null === ID || void 0 === ID || … [truncated]
- ... (20 more removed lines; see GitHub link above)
+       },
+       onCheckKey: hO
+     }), GO = Tx(Bc) ? Bc.status : null, rO = null !== GO && void 0 !== GO && GO.isSuper ? GO.resetsAt : null, ZO = (0, Op.useRef)({
+       resetsAt: 0,
+       count: 0,
+       nextAt: 0
+     });
+     (0, Op.useEffect)((() => {
+       if (null === rO) return;
+       if (rO <= ic) {
+         ZO.current.resetsAt !== rO && (ZO.current = {
+           resetsAt: rO,
+           count: 0,
+           nextAt: 0
```

#### 448. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10804-L10838` → after: `L15605-L15617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15605-L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15605-L15617) · [Before (L10804-L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10804-L10838)

```diff
-         return xU(XD, RD), XD
-       }(DD, zD, wD)) : PU(function(DD, zD, wD) {
-         var pD, sD, KD, rD, LD, cD, gD;
-         const RD = bU(DD, wD),
-           AD = TU({
-             type: null !== (pD = null !== (sD = RD.type) && void 0 !== sD ? sD : DD.getEntityType(wD)) && void 0 !== pD ? pD : "Player",
-             name: null !== (KD = RD.name) && void 0 !== KD ? KD : "",
-             position: [RD.x, RD.y, RD.z],
-             rotation: [RD.xRotation, RD.yRotation, RD.zRotation],
-             scale: null !== (rD = RD.scale) && void 0 !== rD ? rD : 1,
-             followingEId: null !== (LD = RD.followingEId) && void 0 !== LD ? LD : null,
-             followingOffset: EU(RD.followingOffset),
-             shouldMatchFollowingEntityRotation: null === (cD = RD.shouldMatchFollowingEntityRotation) || void 0 === cD || cD,
-             armour: QU(RD),
-             oW: VU(null === (gD = zD.oW[zD.vW]) || void 0 === gD ? void 0 : gD[wD]),
-             playerCustomisations: nU.c[wD],
- ... (19 more removed lines; see GitHub link above)
+         const pp = ZO.current,
+           ip = [15e3, 6e4, 24e4];
+         if (pp.count > ip.length) return;
+         let cp = !1;
+         const Op = setTimeout((() => {
+           var Op;
+           pp.nextAt = Date.now() + (null !== (Op = ip[pp.count]) && void 0 !== Op ? Op : 0), pp.count++, Ex.refresh().then((() => {
+             cp || cc(Date.now())
+           }))
+         }), Math.max(0, pp.nextAt - Date.now()));
+         return () => {
+           cp = !0, clearTimeout(Op)
+         }
```

#### 449. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10840-L10849` → after: `L15619-L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15619-L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15619-L15641) · [Before (L10840-L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10840-L10849)

```diff
-     }
- 
-     function lU(DD, zD, wD) {
-       var pD;
-       const sD = zD.items[wD];
-       if (!sD) return null;
-       return {
-         name: null !== (pD = nA.m[sD.name]) && void 0 !== pD && pD.keepMetaInChest ? sD.name : DD.bloxd.getMetaInfo(sD.name).rootName,
-         amount: sD.amount,
-         attributes: dU(sD.attributes)
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
+ ... (7 more added lines; see GitHub link above)
```

#### 450. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10851-L11175` → after: `L15643-L15653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15643-L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15643-L15653) · [Before (L10851-L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L10851-L11175)

```diff
-     }
- 
-     function WU(DD, zD) {
-       if (!zD) return DD;
-       const wD = {};
-       DD.selectedSlotIndex !== zD.selectedSlotIndex && (wD.selectedSlotIndex = DD.selectedSlotIndex);
-       const pD = {};
-       for (let sD = 0; sD < lD.i; sD++) SU(DD.slots[sD], zD.slots[sD]) || (pD[sD] = DD.slots[sD]);
-       return (0, LD.Ac)(pD) || (wD.slots = pD), wD
-     }
- 
-     function NU(DD) {
-       return !!DD && (void 0 !== DD.selectedSlotIndex || void 0 !== DD.slots && !(0, LD.Ac)(DD.slots))
-     }
- 
-     function ZU(DD, zD) {
- ... (309 more removed lines; see GitHub link above)
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

#### 451. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11177-L11211` → after: `L15655-L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15655-L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15655-L15670) · [Before (L11177-L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L11177-L11211)

```diff
-       return zD
-     }
-     var Vf = wD(36495),
-       Pf = wD(36910);
-     class Cf {
-       constructor(DD, zD) {
-         this.client = DD, this.AU = zD, this.isRecording = !1, this.isClipping = !1, this.clippingWanted = !1, this.sessionAllowsClipping = !1, this.maxClipTicks = IU.i * ID.f.clientTicksPerSecond, this.windowStartChunks = new Map, this.state = {
-           meta: {
-             formatVersion: fU.e,
-             recordedAt: "",
-             Rl: ID.f.clientTicksPerSecond,
-             keyframeIntervalTicks: fU.c,
-             gameNameWithVariation: "",
-             lobbyName: "",
-             gameName: "",
-             variation: void 0,
- ... (19 more removed lines; see GitHub link above)
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
```

#### 452. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11213-L35164` → after: `L15672-L15692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15672-L15692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15672-L15692) · [Before (L11213-L35164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L11213-L35164)

```diff
-           this.recordTick()
-         };
-         this.AU.on("DU", wD);
-         const pD = GD.l.subscribe("EffectUpdate", (DD => {
-             this.isCapturing() && this.effectTracker.handleUpdate({
-               ...DD,
-               np: BU(DD.np)
-             })
-           })),
-           sD = GD.l.subscribe("RemoveEffect", (DD => {
-             this.isCapturing() && this.effectTracker.handleRemove(BU(DD.np), DD.name)
-           }));
-         (0, WD.onGameResetOnce)((() => {
-           this.AU.off("DU", wD), GD.l.unsubscribe(pD), GD.l.unsubscribe(sD)
-         }));
-         const KD = ir.e.get("clientEscMenuOptions");
- ... (23936 more removed lines; see GitHub link above)
+           const cp = document.createRange();
+           if (cp.selectNodeContents(ip), "function" !== typeof cp.getBoundingClientRect) return;
+           const Op = cp.getBoundingClientRect().width,
+             Sp = op.current;
+           if (Sp) {
+             const cp = pp.current,
+               op = cp && parseFloat(getComputedStyle(cp).columnGap) || 0;
+             Ip.current = Sp.getBoundingClientRect().width + op, Op > ip.clientWidth + 1 && xp(!1)
+           } else ip.clientWidth - Op >= Ip.current && xp(!0)
+         };
+         Op();
+         const Sp = new ResizeObserver(Op);
+         return Sp.observe(ip), () => {
+           Sp.disconnect()
+         }
+       }), [pp, ip]), {
+ ... (5 more added lines; see GitHub link above)
```

#### 453. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35166-L35172` → after: `L15694-L16613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15694-L16613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L15694-L16613) · [Before (L35166-L35172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35166-L35172)

```diff
-       return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : DD
-     }
-   },
-   39209: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD,
-       i: () => LD
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
+           ref: po,
+           className: "WorldCodeAiLinkButton WorldCodeAiBackButton",
+ ... (904 more added lines; see GitHub link above)
```

#### 454. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35174-L35177` → after: `L16615-L16632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16615-L16632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16615-L16632) · [Before (L35174-L35177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35174-L35177)

```diff
-     var pD = wD(351),
-       sD = wD(4486);
-     const KD = new Set(sD.r),
-       rD = new Map;
+     return (0, Sp.jsx)(mY, {
+       step: VO,
+       onPrevious: "aiPanel" === VO ? bp : void 0,
+       children: Yo
+     })
+   })),
+   MP = qP
+ }, 39840: (pp, ip, cp) => {
+   cp.d(ip, {
+     b: () => Lp,
+     f: () => Ip,
+     g: () => op
+   });
+   const Op = 6e3;
+ 
+   function op(pp, ip) {
+ ... (2 more added lines; see GitHub link above)
```

#### 455. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35179-L35206` → after: `L16634-L16637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16634-L16637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16634-L16637) · [Before (L35179-L35206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35179-L35206)

```diff
-     function LD(DD, zD) {
-       let wD = rD.get(zD);
-       void 0 === wD && (wD = new Map, rD.set(zD, wD));
-       let sD = wD.get(DD);
-       return void 0 === sD && (sD = `${DD}${(0,pD.y)(zD)}`, wD.set(DD, sD)), sD
-     }
-   },
-   39232: (DD, zD, wD) => {
-     var pD = {
-       "./bedwars/bedwarsClient": 39238,
-       "./bridgeBattle/bridgeBattleClient": 39244,
-       "./buildAFactory2/buildAFactory2Client": 38465,
-       "./classic/classicClient": 39248,
-       "./clutch/clutchClient": 39256,
-       "./containmentBreach/containmentBreachClient": 39262,
-       "./cooking/cookingClient": 39377,
- ... (12 more removed lines; see GitHub link above)
+   function Ip(pp) {
+     const ip = (null !== pp && void 0 !== pp ? pp : "").match(/-?\d+(?:\.\d+)?/g);
+     return ip && ip.length >= 3 ? [Number(ip[0]), Number(ip[1]), Number(ip[2])] : null
+   }
```

#### 456. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35208-L35210` → after: `L16639-L16641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16639-L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16639-L16641) · [Before (L35208-L35210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35208-L35210)

```diff
-     function sD(DD) {
-       return KD(DD).then(wD)
-     }
+   function Sp(pp, ip) {
+     return pp === ip ? String(pp) : `${pp}-${ip}`
+   }
```

#### 457. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35212-L35216` → after: `L16643-L16662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16643-L16662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16643-L16662) · [Before (L35212-L35216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35212-L35216)

```diff
-     function KD(DD) {
-       return Promise.resolve().then((() => {
-         if (!wD.o(pD, DD)) {
-           var zD = new Error("Cannot find module '" + DD + "'");
-           throw zD.code = "MODULE_NOT_FOUND", zD
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
+ ... (4 more added lines; see GitHub link above)
```

#### 458. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35218-L35219` → after: `L16664-L16666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16664-L16666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16664-L16666) · [Before (L35218-L35219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35218-L35219)

```diff
-         return pD[DD]
-       }))
+         Lp = Yp + 1
+       }
+       op.push(...Ip.values()), Ip = xp
```

#### 459. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35221-L35261` → after: `L16668-L16669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16668-L16669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16668-L16669) · [Before (L35221-L35261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35221-L35261)

```diff
-     sD.keys = () => Object.keys(pD), sD.resolve = KD, sD.id = 39232, DD.exports = sD
-   },
-   38778: (DD, zD, wD) => {
-     var pD = {
-       "./animator.ts": 37061,
-       "./autoRemoveMesh.ts": 38783,
-       "./autoRotate.js": 38753,
-       "./bullet.js": 38789,
-       "./cameraShake.ts": 38792,
-       "./cape.ts": 38755,
-       "./crouchingHandler.ts": 38809,
-       "./doOnFirstTick.ts": 38801,
-       "./entityMultilineText.ts": 38811,
-       "./entityName.ts": 38835,
-       "./flashingMeshOverlay.js": 38846,
-       "./floating.ts": 38864,
- ... (25 more removed lines; see GitHub link above)
+     return op.push(...Ip.values()), op.sort(((pp, ip) => pp.z0 - ip.z0 || pp.x0 - ip.x0)).map((pp => `x${Sp(pp.x0,pp.x1)} z${Sp(pp.z0,pp.z1)} ${pp.name}`))
+   }
```

#### 460. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35263-L35265` → after: `L16671-L16685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16671-L16685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16671-L16685) · [Before (L35263-L35265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35263-L35265)

```diff
-     function sD(DD) {
-       var zD = KD(DD);
-       return wD(zD)
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

#### 461. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35267-L35271` → after: `L16687-L16694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16687-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16687-L16694) · [Before (L35267-L35271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35267-L35271)

```diff
- 
-     function KD(DD) {
-       if (!wD.o(pD, DD)) {
-         var zD = new Error("Cannot find module '" + DD + "'");
-         throw zD.code = "MODULE_NOT_FOUND", zD
+     const Pp = Ap.filter((pp => "" !== pp.boxes));
+     0 === Pp.length && Dp.push("It is all air.");
+     let Wp = Dp.join("\n").length;
+     for (const Op of Pp) {
+       const pp = `y${Sp(Op.from,Op.to)}: ${Op.boxes}`;
+       if (Wp += pp.length + 1, Wp > Ip) {
+         Dp.push(`Cut short: the layers from y${Op.from} up aren't shown, as there are too many blocks.`);
+         break
```

#### 462. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35273` → after: `L16696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16696) · [Before (L35273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35273)

```diff
-       return pD[DD]
+       Dp.push(pp)
```

#### 463. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35275-L35292` → after: `L16698-L16721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16698-L16721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16698-L16721) · [Before (L35275-L35292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35275-L35292)

```diff
-     sD.keys = function() {
-       return Object.keys(pD)
-     }, sD.resolve = KD, DD.exports = sD, sD.id = 38778
-   },
-   38768: (DD, zD, wD) => {
-     var pD = {
-       "./cape_cow_cream.png": 27865,
-       "./cape_cow_normal.png": 27869,
-       "./cape_creator_level1.png": 27876,
-       "./cape_creator_level2.png": 27879,
-       "./cape_creator_level3.png": 27887,
-       "./cape_none.png": 27895,
-       "./cape_pig.png": 27903,
-       "./cape_sheep.png": 27906,
-       "./cape_super.png": 27912,
-       "./cape_super_inverted.png": 27917,
- ... (2 more removed lines; see GitHub link above)
+     return Dp.join("\n")
+   }
+ }, 4941: (pp, ip, cp) => {
+   cp.d(ip, {
+     e: () => xp,
+     f: () => op,
+     h: () => Lp,
+     k: () => Sp,
+     o: () => Ip
+   });
+   var Op = cp(4933);
+   const op = {
+       name: "ChatGPT",
+       url: "https://chatgpt.com/?hints=search&q="
+     },
+     Ip = {
+ ... (8 more added lines; see GitHub link above)
```

#### 464. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35294-L35296` → after: `L16723-L16730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16723-L16730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16723-L16730) · [Before (L35294-L35296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35294-L35296)

```diff
-     function sD(DD) {
-       var zD = KD(DD);
-       return wD(zD)
+   function Lp(pp) {
+     const ip = xp(op, pp);
+     return ip.length <= 3e4 ? {
+       url: ip,
+       sendsPrompt: !0
+     } : {
+       url: new URL(op.url).origin,
+       sendsPrompt: !1
```

#### 465. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35299-L35332` → after: `L16757-L16759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16757-L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16757-L16759) · [Before (L35299-L35332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35299-L35332)

```diff
-     function KD(DD) {
-       if (!wD.o(pD, DD)) {
-         var zD = new Error("Cannot find module '" + DD + "'");
-         throw zD.code = "MODULE_NOT_FOUND", zD
-       }
-       return pD[DD]
-     }
-     sD.keys = function() {
-       return Object.keys(pD)
-     }, sD.resolve = KD, DD.exports = sD, sD.id = 38768
-   },
-   39267: (DD, zD, wD) => {
-     var pD = {
-       "./breach-zero-uncaught.webp": 39275,
-       "./breach-zero.webp": 39278,
-       "./brood-father-uncaught.webp": 39283,
- ... (18 more removed lines; see GitHub link above)
+   function Dp(pp) {
+     return `/docs/${Yp(pp)}.md`
+   }
```

#### 466. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35334-L35337` → after: `L16761-L16764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16761-L16764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16761-L16764) · [Before (L35334-L35337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35334-L35337)

```diff
-     function sD(DD) {
-       var zD = KD(DD);
-       return wD(zD)
-     }
+   function Ap(pp, ip) {
+     return `/docs/${Yp(pp)}/${ip+1}.md`
+   }
+   const Pp = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
```

#### 467. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35339-L35344` → after: `L16766-L16770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16766-L16770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16766-L16770) · [Before (L35339-L35344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35339-L35344)

```diff
-     function KD(DD) {
-       if (!wD.o(pD, DD)) {
-         var zD = new Error("Cannot find module '" + DD + "'");
-         throw zD.code = "MODULE_NOT_FOUND", zD
-       }
-       return pD[DD]
+   function Wp(pp) {
+     const ip = Pp.exec(pp);
+     return null === ip ? null : {
+       name: ip[1],
+       part: void 0 === ip[2] ? null : Number(ip[2])
```

#### 468. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35346-L35415` → after: `L16772-L16773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16772-L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16772-L16773) · [Before (L35346-L35415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35346-L35415)

```diff
-     sD.keys = function() {
-       return Object.keys(pD)
-     }, sD.resolve = KD, DD.exports = sD, sD.id = 39267
-   },
-   39275: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
-   },
-   39278: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
-   },
-   39283: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
-   },
-   39288: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/brood-father.e48391955a574c1155fa.webp"
-   },
- ... (54 more removed lines; see GitHub link above)
+   }
+   const yp = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
```

#### 469. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L35417-L35453` → after: `L16775-L16783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16775-L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L16775-L16783) · [Before (L35417-L35453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L35417-L35453)

```diff
-     function KD() {
-       const DD = () => (0, pD.z)();
-       return {
-         memoryBytes: () => (0, pD.r)().buffer.byteLength,
-         reserveUpFront: zD => DD().hA(zD),
-         reserveAhead: zD => DD().BA(zD),
-         setCeiling: zD => {
-           DD().nA(zD)
-         },
-         lowWater: () => sD[DD().IA()] ?? "none",
-         stats: () => function(DD) {
-           const zD = new Uint32Array((0, pD.r)().buffer, DD, 17),
-             wD = DD => zD[DD] ?? 0,
-             sD = DD => ({
-               upFront: wD(DD),
-               ahead: wD(DD + 1),
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/93.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/93.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b)

#### 1. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/93.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/93.js#L4)

```diff
-   4875: (DD, zD, wD) => {
+   41507: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L6-L9` → after: `L6-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L6-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/93.js#L6-L130) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/93.js#L6-L9)

```diff
-       Howl: () => sD.Howl,
-       Howler: () => sD.Howler,
-       musicOutput: () => GD,
-       readyAudioContext: () => hD
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

#### 3. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L11-L16` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/93.js#L132-L134) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/93.js#L11-L16)

```diff
-     var pD, sD = wD(4877),
-       KD = wD(3444),
-       rD = wD(4682);
-     const LD = sD.Howler;
- 
-     function cD() {
+     var Op = cp(768);
+ 
+     function op(pp) {
```

#### 4. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L18-L27` → after: `L136-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L136-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/93.js#L136-L491) · [Before (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/93.js#L18-L27)

```diff
-       if (LD.ctx || !LD.usingWebAudio || "undefined" === typeof AudioContext || !(0, rD.l)()) return;
-       const wD = navigator.audioSession;
-       let pD;
-       "auto" === (null === wD || void 0 === wD ? void 0 : wD.type) && (wD.type = "ambient");
-       try {
-         pD = new AudioContext({
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

#### 5. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L29-L122` → after: `L493-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L493-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/93.js#L493-L505) · [Before (L29-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/93.js#L29-L122)

```diff
-       const sD = pD.createGain();
-       sD.gain.setValueAtTime(LD._muted ? 0 : null !== (DD = LD._volume) && void 0 !== DD ? DD : 1, pD.currentTime), sD.connect(pD.destination), LD.ctx = pD, LD.masterGain = sD, null === (zD = LD._setup) || void 0 === zD || zD.call(LD)
-     }
-     LD._mobileUnloaded = !0;
-     const gD = LD.volume.bind(sD.Howler);
-     LD.volume = function() {
-       return cD(), gD(...arguments)
-     };
-     const RD = LD.mute.bind(sD.Howler);
-     LD.mute = DD => (cD(), RD(DD));
-     const AD = sD.Howl.prototype,
-       UD = AD.init;
- 
-     function fD() {
-       for (; LD._html5AudioPool.length < LD.html5PoolSize;) {
-         const DD = new Audio;
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L2)

```diff
- export const ids = [93, 94];
+ export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 94, 137, 138];
```

#### 2. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L4` → after: `L5-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L5-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L5-L1304) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L4)

```diff
-   36432: (DD, zD, wD) => {
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

#### 3. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L6-L7` → after: `L1306-L29176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1306-L29176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L1306-L29176) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L6-L7)

```diff
-       countDecodesAs: () => AD,
-       decodedAudio: () => UD
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

#### 4. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9-L11` → after: `L29178-L29179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29178-L29179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29178-L29179) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L9-L11)

```diff
-     var pD = wD(3252),
-       sD = wD(4875);
-     const KD = sD.Howler,
+     var Op = cp(6788);
+     const op = new Map,
```

#### 5. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L13-L19` → after: `L29181-L29192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29181-L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29181-L29192) · [Before (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L13-L19)

```diff
-     let LD = 0;
-     const cD = {
-         song: 0,
-         sheet: 0
-       },
-       gD = new WeakMap,
-       RD = new WeakSet;
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

#### 6. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22` → after: `L29195-L29199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29195-L29199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29195-L29199) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L22)

```diff
-       return gD.set(DD, zD), DD
+       const cp = xp(pp);
+       if (!cp) throw new Error(`No shader pack code ${pp} for a ${ip} program`);
+       if (cp.program !== ip) throw new Error(`Shader pack code ${pp} is ${cp.program} code, for a ${ip} program`);
+       if (cp.strict && cp.hooks.vertex) throw new Error(`Shader pack code ${pp} is strict and has a vertex hook, which strict mode never runs`);
+       return cp
```

#### 7. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25-L29` → after: `L29202-L29218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29202-L29218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29202-L29218) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L25-L29)

```diff
-     function UD() {
-       return {
-         bytes: LD,
-         songsDecoded: cD.song,
-         sheetsDecoded: cD.sheet
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

#### 8. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L34-L52` → after: `L29245-L29252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29245-L29252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29245-L29252) · [Before (L34-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L34-L52)

```diff
-       if (RD.has(DD)) return;
-       RD.add(DD);
-       const zD = 1 === DD.decodeAudioData.length,
-         wD = DD.decodeAudioData.bind(DD);
-       DD.decodeAudioData = (DD, pD, sD) => {
-         const RD = DD => {
-           const zD = KD._howls.filter((DD => "loaded" !== DD._state));
-           try {
-             null === pD || void 0 === pD || pD(DD)
-           } finally {
-             const wD = zD.find((DD => "loaded" === DD._state));
-             void 0 !== wD && "string" === typeof wD._src && function(DD, zD, wD) {
-               var pD;
-               LD += wD - (null !== (pD = rD.get(zD)) && void 0 !== pD ? pD : 0), rD.set(zD, wD);
-               const sD = gD.get(DD);
-               void 0 !== sD && cD[sD]++
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

#### 9. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L54-L58` → after: `L29254-L29265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29254-L29265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29254-L29265) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L54-L58)

```diff
-         if (!zD) return wD(DD, RD, sD);
-         const AD = wD(DD).then(RD);
-         return AD.catch((DD => {
-           null === sD || void 0 === sD || sD(DD)
-         })), AD
+       if (!pp) return [op];
+       const Ip = [];
+       for (let Op = 0; Op < 3; Op++) {
+         const Sp = ip[Op] - pp[Op];
+         if (Math.abs(Sp) >= cp[Op]) return [op];
+         if (0 === Sp) continue;
+         const xp = [0, 0, 0],
+           Lp = [cp[0], cp[1], cp[2]];
+         xp[Op] = Sp > 0 ? cp[Op] - Sp : 0, Lp[Op] = Math.abs(Sp), Ip.push({
+           lo: xp,
+           size: Lp
+         })
```

#### 10. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L60-L74` → after: `L29267-L29307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29267-L29307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29267-L29307) · [Before (L60-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L60-L74)

```diff
-     }(0, pD.f)(UD);
-     const ID = sD.Howl.prototype,
-       BD = ID.init;
-     ID.init = function(DD) {
-       return sD.Howler.volume(), KD.ctx && fD(KD.ctx), BD.call(this, DD)
-     };
-     const GD = ID.unload;
-     ID.unload = function() {
-       const DD = this._src,
-         zD = GD.call(this);
-       if ("string" !== typeof DD) return zD;
-       const wD = rD.get(DD);
-       return void 0 !== wD && function(DD) {
-         return !KD._howls.some((zD => zD._src === DD || "string" === typeof zD._src && DD.indexOf(zD._src) >= 0))
-       }(DD) && (rD.delete(DD), LD -= wD), zD
+       return Ip
+     }
+ 
+     function Pp(pp, ip) {
+       const cp = Op,
+         op = cp[0] / Ip,
+         Sp = ip * op - pp[0] & cp[0] - 1,
+         xp = Math.min(op, cp[0] - Sp),
+         Lp = [{
+           lo: [Sp, 0, 0],
+           size: [xp, cp[1], cp[2]]
+         }];
+       return xp < op && Lp.push({
+         lo: [0, 0, 0],
+         size: [op - xp, cp[1], cp[2]]
+       }), Lp
+ ... (25 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L77-L82` → after: `L29310-L38882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R29310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L29310-L38882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L29310-L38882) · [Before (L77-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L77-L82)

```diff
-   4875: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       Howl: () => sD.Howl,
-       Howler: () => sD.Howler,
-       musicOutput: () => GD,
-       readyAudioContext: () => hD
+   39789: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       op(ip, 0, pp[3] + pp[2], pp[7] + pp[6], pp[11] + pp[10], pp[15] + pp[14]), op(ip, 4, pp[3] - pp[2], pp[7] - pp[6], pp[11] - pp[10], pp[15] - pp[14]), op(ip, 8, pp[3] + pp[0], pp[7] + pp[4], pp[11] + pp[8], pp[15] + pp[12]), op(ip, 12, pp[3] - pp[0], pp[7] - pp[4], pp[11] -  … [truncated]
+     }
+ 
+     function op(pp, ip, cp, Op, op, Ip) {
+       const Sp = Math.sqrt(cp * cp + Op * Op + op * op);
+       let xp = 0;
+       0 !== Sp && (xp = 1 / Sp), pp[ip] = cp * xp, pp[ip + 1] = Op * xp, pp[ip + 2] = op * xp, pp[ip + 3] = Ip * xp
+     }
+ 
+     function Ip(pp, ip, cp, Op, op) {
+       for (let Ip = 0; Ip < 24; Ip += 4) {
+         const Sp = pp[Ip],
+           xp = pp[Ip + 1],
+           Lp = pp[Ip + 2];
+ ... (9557 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L84-L87` → after: `L38884-L38895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R38884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L38884-L38895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L38884-L38895) · [Before (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L84-L87)

```diff
-     var pD, sD = wD(4877),
-       KD = wD(3444),
-       rD = wD(4682);
-     const LD = sD.Howler;
+     var Op = cp(2963),
+       op = cp(2980),
+       Ip = cp(6762),
+       Sp = cp(4791),
+       xp = cp(2975),
+       Lp = cp(2970);
+     const Yp = "bloxd-wasmDownloaded",
+       Dp = 12;
+ 
+     function Ap(pp) {
+       return pp.pathname.slice(pp.pathname.lastIndexOf("/") + 1)
+     }
```

#### 13. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L96-L100` → after: `L38899-L38903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R38899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L38899-L38903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L38899-L38903) · [Before (L96-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L96-L100)

```diff
-         pD = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
+         if ("undefined" === typeof localStorage) return null;
+         const pp = JSON.parse(localStorage.getItem(Yp) ?? "[]");
+         return Array.isArray(pp) ? pp.filter((pp => "string" === typeof pp)) : []
+       } catch (pp) {
+         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", pp), null
```

#### 14. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L105-L113` → after: `L38906-L38920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R38906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L38906-L38920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L38906-L38920) · [Before (L105-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L105-L113)

```diff
-     LD._mobileUnloaded = !0;
-     const gD = LD.volume.bind(sD.Howler);
-     LD.volume = function() {
-       return cD(), gD(...arguments)
-     };
-     const RD = LD.mute.bind(sD.Howler);
-     LD.mute = DD => (cD(), RD(DD));
-     const AD = sD.Howl.prototype,
-       UD = AD.init;
+     const Wp = Reflect.apply,
+       yp = "undefined" === typeof Worker ? void 0 : Worker,
+       Up = yp?.prototype.postMessage,
+       wp = yp?.prototype.terminate,
+       vp = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
+       tp = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
+       Hp = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
+       dp = function() {
+         try {
+           return (0, Sp.i)(yp, "Worker", !0) && (0, Sp.i)(Up, "postMessage") && (0, Sp.i)(wp, "terminate") && (0, Sp.i)(Hp, "buffer") && void 0 !== vp && void 0 !== tp
+         } catch {
+           return !1
+         }
+       }();
+     let ep = !1;
```

#### 15. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L116-L118` → after: `L38923-L38944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R38923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L38923-L38944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L38923-L38944) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L116-L118)

```diff
-       for (; LD._html5AudioPool.length < LD.html5PoolSize;) {
-         const DD = new Audio;
-         DD._unlocked = !0, LD._releaseHtml5Audio(DD)
+       return dp && !ep
+     }
+     class kp {
+       worker = null;
+       failed = !1;
+       constructor() {
+         if (jp()) try {
+           this.worker = Rp(), Wp(vp, this.worker, ["error", () => {
+             this.failed = !0
+           }])
+         } catch {
+           this.stop()
+         }
+       }
+       take() {
+         const pp = this.worker;
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L128-L145` → after: `L38947-L39026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R38947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L38947-L39026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L38947-L39026) · [Before (L128-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L128-L145)

```diff
-     AD.init = function(DD) {
-       return cD(), UD.call(this, DD)
-     }, (0, rD.l)() && (LD._unlockAudio = () => {
-       const DD = LD.ctx;
-       if (LD._audioUnlocked || !DD) return;
-       LD.autoUnlock = !1;
-       const zD = DD.createBuffer(1, 1, 22050);
-       LD._scratchBuffer = zD;
-       const wD = new AbortController;
-       let pD = "afterPaint";
-       const sD = () => {
-           var pD;
-           if (LD._audioUnlocked) return;
-           null === (pD = LD._autoResume) || void 0 === pD || pD.call(LD);
-           const sD = DD.createBufferSource();
-           sD.buffer = zD, sD.connect(DD.destination), sD.start(0), DD.resume().catch((() => {})), sD.onended = () => {
- ... (2 more removed lines; see GitHub link above)
+     class mp {
+       decoded;
+       worker;
+       reject;
+       constructor(pp, ip, cp, Op, Ip) {
+         try {
+           this.worker = Ip?.take() ?? Rp()
+         } catch (Yp) {
+           throw ep = !0, new Error(`The zstd decoder's worker did not start: ${(0,xp.f)(Yp)}`)
+         }
+         const Sp = this.worker;
+         this.decoded = (0, op.j)(((ip, op) => {
+           this.reject = op;
+           const Ip = (pp, ip) => {
+             Wp(vp, Sp, [pp, ip])
+           };
+ ... (64 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L147-L150` → after: `L39028-L39075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R39028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L39028-L39075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L39028-L39075) · [Before (L147-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L147-L150)

```diff
-         },
-         cD = () => {
-           fD(), sD()
-         },
+         }, {
+           __proto__: null
+         });
+         return pp
+       }(),
+       lp = function() {
+         try {
+           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Xp && (0, Sp.i)(Cp, "Response", !0) && (0, Sp.i)(Ep, "ReadableStream", !0) && (0, Sp.i)(Xp.enqueue, "enqueue") && (0, Sp.i)(Xp.close, "close") && (0, Sp.i)(Xp.e … [truncated]
+         } catch {
+           return !1
+         }
+       }();
+     async function Qp(pp, ip, cp, Op, Ip, Sp, Yp) {
+       const Dp = new Mp(ip),
+         {
+           controller: Ap,
+ ... (32 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L152-L157` → after: `L39077-L39079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R39077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L39077-L39079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L39077-L39079) · [Before (L152-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L152-L157)

```diff
-           if (fD(), "inTap" === pD) {
-             if ("running" === DD.state) return;
-             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), sD()
-           } else "afterPaint" === pD && (pD = "queued", (0, KD.d)(zD.timeStamp, (() => {
-             pD = "inTap", sD()
-           })))
+           try {
+             qp(Up, Ap, [pp])
+           } catch {}
```

#### 19. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L159-L165` → after: `L39081-L39262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R39081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L39081-L39262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L39081-L39262) · [Before (L159-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L159-L165)

```diff
-       for (const KD of ["touchstart", "touchend"]) document.addEventListener(KD, cD, {
-         capture: !0,
-         signal: wD.signal
-       });
-       for (const KD of rD.d) document.addEventListener(KD, gD, {
-         capture: !0,
-         signal: wD.signal
+       let vp = 0;
+       const tp = (cp, Op) => {
+         if (vp + Op > ip) throw new Error(`${pp} decoded past its module's ${ip} bytes`);
+         qp(Lp.Z, new Lp.k(Dp), [new Lp.k(cp), vp]);
+         try {
+           qp(Wp, Ap, [new Lp.k(Dp, vp, Op)])
+         } catch {}
+         vp += Op
+       };
+       let Hp, dp;
+       try {
+         Hp = new mp(pp, ip, tp, Op, Yp)
+       } catch (Rp) {
+         throw wp(Rp), Rp
+       }
+       const ep = pp => {
+ ... (166 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L168-L169` → after: `L39387-L39388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R39387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L39387-L39388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L39387-L39388) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L168-L169)

```diff
-     let ID = 0;
-     const BD = null === (pD = LD._autoSuspend) || void 0 === pD ? void 0 : pD.bind(sD.Howler);
+     var Op = cp(2963);
+     const op = ["none", "idle", "now"];
```

#### 21. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L172-L182` → after: `L39391-L39397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R39391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L39391-L39397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L39391-L39397) · [Before (L172-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L172-L182)

```diff
-       hD();
-       const {
-         ctx: DD,
-         masterGain: zD
-       } = LD;
-       return DD && zD ? {
-         ctx: DD,
-         destination: zD,
-         holdAwake: DD => {
-           var zD, wD;
-           (ID += DD ? 1 : -1, DD) ? null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD): null === (wD = LD._autoSuspend) || void 0 === wD || wD.call(LD)
+       const pp = () => (0, Op.H)();
+       return {
+         memoryBytes: () => (0, Op.z)().buffer.byteLength,
+         reserveUpFront: ip => pp().kA(ip),
+         reserveAhead: ip => pp().jA(ip),
+         setCeiling: ip => {
+           pp().mA(ip)
```

#### 22. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L184-L188` → after: `L39399-L39455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R39399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L39399-L39455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L39399-L39455) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L184-L188)

```diff
-         wake: () => {
-           var zD;
-           "running" !== DD.state && (null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD), DD.resume().catch((() => {})))
-         }
-       } : null
+         lowWater: () => op[pp().uA()] ?? "none",
+         stats: () => function(pp) {
+           const ip = new Uint32Array((0, Op.z)().buffer, pp, 17),
+             cp = pp => ip[pp] ?? 0,
+             op = pp => ({
+               upFront: cp(pp),
+               ahead: cp(pp + 1),
+               onDemandInFrame: cp(pp + 2),
+               onDemand: cp(pp + 3)
+             });
+           return {
+             memoryBytes: cp(0),
+             initialBytes: cp(1),
+             liveBytes: cp(2),
+             peakLiveBytes: cp(3),
+             headroomBytes: cp(4),
+ ... (41 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L192-L193` → after: `L39469-L39487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R39469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L39469-L39487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/94.js#L39469-L39487) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/94.js#L192-L193)

```diff
-       var DD;
-       (LD.volume(), LD.ctx && LD.autoUnlock) && (null === (DD = LD._unlockAudio) || void 0 === DD || DD.call(LD))
+       const pp = [];
+       for (const ip of [!1, !0])
+         for (const cp of Op) pp.push({
+           strict: ip,
+           program: cp
+         });
+       return pp
+     }
+ 
+     function Ip(pp) {
+       return `${pp.strict?"strict":"allow"}.${pp.program}`
+     }
+ 
+     function Sp(pp) {
+       return !pp.hooks.vertex && !pp.hooks.surface && !pp.hooks.light
+     }
+ ... (3 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/95.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/95.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557)

#### 1. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L2)

```diff
- export const ids = [93, 94, 95];
+ export const ids = [95];
```

#### 2. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L4-L222` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L4) · [Before (L4-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L4-L222)

```diff
-   36591: (DD, zD, wD) => {
-     function pD(DD, zD, wD, pD) {
-       return !(wD && !DD.aimable) && (!zD || DD.gun && "head" !== pD)
-     }
- 
-     function sD(DD) {
-       return Math.max(.1 * DD, 1)
-     }
- 
-     function KD(DD, zD) {
-       return !DD && zD
-     }
-     wD.d(zD, {
-       d: () => KD,
-       g: () => sD,
-       i: () => pD
- ... (203 more removed lines; see GitHub link above)
+   4974: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L229-L231` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L11-L13) · [Before (L229-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L229-L231)

```diff
-     var pD, sD = wD(4877),
-       KD = wD(3444),
-       rD = wD(4682);
+     var Op, op = cp(4977),
+       Ip = cp(3546),
+       Sp = cp(4743);
```

#### 4. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L236` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L18) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L236)

```diff
-       if (LD.ctx || !LD.usingWebAudio || "undefined" === typeof AudioContext || !(0, rD.l)()) return;
+       if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
```

#### 5. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L248` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L30) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L248)

```diff
-       sD.gain.setValueAtTime(LD._muted ? 0 : null !== (DD = LD._volume) && void 0 !== DD ? DD : 1, pD.currentTime), sD.connect(pD.destination), LD.ctx = pD, LD.masterGain = sD, null === (zD = LD._setup) || void 0 === zD || zD.call(LD)
+       op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
```

#### 6. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L275` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L57) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L275)

```diff
-     }, (0, rD.l)() && (LD._unlockAudio = () => {
+     }, (0, Sp.f)() && (xp._unlockAudio = () => {
```

#### 7. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L300` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L82) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L300)

```diff
-           } else "afterPaint" === pD && (pD = "queued", (0, KD.d)(zD.timeStamp, (() => {
+           } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
```

#### 8. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L308` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/95.js#L90) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/95.js#L308)

```diff
-       for (const KD of rD.d) document.addEventListener(KD, gD, {
+       for (const Ip of Sp.c) document.addEventListener(Ip, Yp, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/96.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/96.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926)

#### 1. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/96.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/96.js#L3)

```diff
- export const ids = [96];
+ export const ids = [95, 96];
```

#### 2. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L5-L68` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/96.js#L4-L40) · [Before (L5-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/96.js#L5-L68)

```diff
-   4877: (DD, zD, wD) => {
-     var pD;
-     ! function() {
-       var sD = function() {
-         this.init()
-       };
-       sD.prototype = {
-         init: function() {
-           var DD = this || KD;
-           return DD._counter = 1e3, DD._html5AudioPool = [], DD.html5PoolSize = 10, DD._codecs = {}, DD._howls = [], DD._muted = !1, DD._volume = 1, DD._canPlayEvent = "canplaythrough", DD._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, D … [truncated]
-         },
-         volume: function(DD) {
-           var zD = this || KD;
-           if (DD = parseFloat(DD), zD.ctx || fD(), "undefined" !== typeof DD && DD >= 0 && DD <= 1) {
-             if (zD._volume = DD, zD._muted) return zD;
-             zD.usingWebAudio && zD.masterGain.gain.setValueAtTime(DD, KD.ctx.currentTime);
- ... (48 more removed lines; see GitHub link above)
+   36654: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       countDecodesAs: () => Ap,
+       decodedAudio: () => Pp
+     });
+     var Op = cp(3363),
+       op = cp(4974);
+     const Ip = op.Howler,
+       Sp = new Map;
+     let xp = 0;
+     const Lp = {
+         song: 0,
+         sheet: 0
+       },
+       Yp = new WeakMap,
+       Dp = new WeakSet;
+ ... (21 more added lines; see GitHub link above)
```
