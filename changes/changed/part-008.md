# Changed — Bundle Modifications Report (Part 008 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `8 / 126` (**372** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (977 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 161. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5444-L5447` → after: `L5444-L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5444-L5447) · [Before (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5444-L5447)

```diff
-       const yR = [...RR.settings, ...vy(RR)].map((RR => `- ${RR.key} (${RR.kind}, default ${RR.value}): ${RR.about}`)).join("\n"),
-         tR = null !== (GR = RR.changeable) && void 0 !== GR && GR.length ? `\nFunctions to replace by name for a game of their own:\n${RR.changeable.map((RR=>`- ${RR.name}: ${RR.about}`)).join("\n")}` : "",
-         uR = JR ? `\nIts code, as it goes in with the default settings:\n${My(RR)}` : "";
-       return `${RR.name} (${RR.title}): ${RR.summary}.\nHow it plays: ${RR.howItPlays}\nSettings:\n${yR}${tR}${RR.setup?`\nThe creator sets up: ${RR.setup}`:""}${uR}`
+       const Zr = [...rr.settings, ...XZ(rr)].map((rr => `- ${rr.key} (${rr.kind}, default ${rr.value}): ${rr.about}`)).join("\n"),
+         Wr = null !== (Qr = rr.changeable) && void 0 !== Qr && Qr.length ? `\nFunctions to replace by name for a game of their own:\n${rr.changeable.map((rr=>`- ${rr.name}: ${rr.about}`)).join("\n")}` : "",
+         ar = Sr ? `\nIts code, as it goes in with the default settings:\n${BZ(rr)}` : "";
+       return `${rr.name} (${rr.title}): ${rr.summary}.\nHow it plays: ${rr.howItPlays}\nSettings:\n${Zr}${Wr}${rr.setup?`\nThe creator sets up: ${rr.setup}`:""}${ar}`
```

#### 162. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5455` → after: `L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5455) · [Before (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5455)

```diff
-         yR = ` ${RR.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
+         Zr = ` ${rr.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
```

#### 163. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5457-L5458` → after: `L5457-L5458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5457-L5458) · [Before (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5457-L5458)

```diff
-         const JR = RR.keywords.map((RR => RR.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((RR => RR.includes(" ") ? yR.includes(` ${RR} `) : GR.has(RR))),
-           tR = Math.min(...JR.map((RR => yR.indexOf(` ${RR} `))));
+         const Sr = rr.keywords.map((rr => rr.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((rr => rr.includes(" ") ? Zr.includes(` ${rr} `) : Qr.has(rr))),
+           Wr = Math.min(...Sr.map((rr => Zr.indexOf(` ${rr} `))));
```

#### 164. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5494` → after: `L5494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5494) · [Before (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5494)

```diff
-               ZR = RR => "string" === typeof RR ? RR : "boolean" === typeof RR ? String(RR) : Array.isArray(RR) ? RR.filter((RR => "string" === typeof RR)).join("\n") : void 0,
+               jr = rr => "string" === typeof rr ? rr : "boolean" === typeof rr ? String(rr) : Array.isArray(rr) ? rr.filter((rr => "string" === typeof rr)).join("\n") : void 0,
```

#### 165. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5508` → after: `L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5508) · [Before (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5508)

```diff
-             return yR.startsWith("[") ? tR : RR
+             return Zr.startsWith("[") ? Wr : rr
```

#### 166. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5511-L5512` → after: `L5511-L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5511-L5512) · [Before (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5511-L5512)

```diff
-         iR = null !== (JR = null === (GR = qR.question) || void 0 === GR ? void 0 : GR.replace(/\s+/g, " ").trim()) && void 0 !== JR ? JR : "",
-         fR = (null !== (yR = qR.choices) && void 0 !== yR ? yR : "").includes("\n") ? (null !== (tR = qR.choices) && void 0 !== tR ? tR : "").split("\n") : (null !== (uR = qR.choices) && void 0 !== uR ? uR : "").split("|"),
+         fr = null !== (Sr = null === (Qr = Ir.question) || void 0 === Qr ? void 0 : Qr.replace(/\s+/g, " ").trim()) && void 0 !== Sr ? Sr : "",
+         Er = (null !== (Zr = Ir.choices) && void 0 !== Zr ? Zr : "").includes("\n") ? (null !== (Wr = Ir.choices) && void 0 !== Wr ? Wr : "").split("\n") : (null !== (ar = Ir.choices) && void 0 !== ar ? ar : "").split("|"),
```

#### 167. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5536-L5539` → after: `L5536-L5539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5536-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5536-L5539) · [Before (L5536-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5536-L5539)

```diff
-       Ey = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${dy})\s*\(|(?:${dy})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-       Yy = new RegExp(`^(?:${dy})$`),
-       ky = new RegExp(String.raw`^(${dy})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-       Qy = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${dy})\b|\buse_?prefab\s*\(`, "i");
+       FZ = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${cZ})\s*\(|(?:${cZ})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       oZ = new RegExp(`^(?:${cZ})$`),
+       bZ = new RegExp(String.raw`^(${cZ})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       JZ = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${cZ})\b|\buse_?prefab\s*\(`, "i");
```

#### 168. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5552` → after: `L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5552) · [Before (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5552)

```diff
-           return void 0 === JR.path ? JR : {
+           return void 0 === Sr.path ? Sr : {
```

#### 169. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5556` → after: `L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5556) · [Before (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5556)

```diff
-           return void 0 === JR.url ? JR : {
+           return void 0 === Sr.url ? Sr : {
```

#### 170. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5602-L5604` → after: `L5602-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5602-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5602-L5604) · [Before (L5602-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5602-L5604)

```diff
-       const LR = Object.keys(GR).some(aR.i),
-         nR = RR => null !== RR && LR && (0, aR.i)(RR),
-         UR = RR => nR(RR) ? `${aR.n}${(0,aR.k)(RR)}` : null !== uR && void 0 !== uR ? uR : hy(RR),
+       const hr = Object.keys(Qr).some(tr.f),
+         zr = rr => null !== rr && hr && (0, tr.f)(rr),
+         Yr = rr => zr(rr) ? `${tr.m}${(0,tr.j)(rr)}` : null !== ar && void 0 !== ar ? ar : uZ(rr),
```

#### 171. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5644-L5646` → after: `L5644-L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5644-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5644-L5646) · [Before (L5644-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5644-L5646)

```diff
-               return `${GR.slice(0,Math.max(GR.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-             }(null !== JR && void 0 !== JR ? JR : ""),
-             uR = null !== (yR = OR.get(RR)) && void 0 !== yR ? yR : [];
+               return `${Qr.slice(0,Math.max(Qr.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== Sr && void 0 !== Sr ? Sr : ""),
+             ar = null !== (Zr = Pr.get(rr)) && void 0 !== Zr ? Zr : [];
```

#### 172. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5648` → after: `L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5648) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5648)

```diff
-           ("" === tR || uR.includes(tR) || OR.set(RR, [...uR, tR]), "" !== tR) && oR.set(RR, [...null !== (ZR = oR.get(RR)) && void 0 !== ZR ? ZR : [], {
+           ("" === Wr || ar.includes(Wr) || Pr.set(rr, [...ar, Wr]), "" !== Wr) && Cr.set(rr, [...null !== (jr = Cr.get(rr)) && void 0 !== jr ? jr : [], {
```

#### 173. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5666` → after: `L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5666) · [Before (L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5666)

```diff
-               error: `There is no prefab called ${JR}. The prefabs are: ${Uy.map((RR=>RR.name)).join(", ")}.`
+               error: `There is no prefab called ${Sr}. The prefabs are: ${YZ.map((rr=>rr.name)).join(", ")}.`
```

#### 174. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5668` → after: `L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5668) · [Before (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5668)

```diff
-           }(null !== (tR = fR[RR]) && void 0 !== tR ? tR : "", JR, GR, iR);
+           }(null !== (Wr = Er[rr]) && void 0 !== Wr ? Wr : "", Sr, Qr, fr);
```

#### 175. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5674` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5674) · [Before (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5674)

```diff
-           }), PR(RR, null !== yR && void 0 !== yR ? yR : ZR.prefab.title, ZR.text), mR.push({
+           }), Gr(rr, null !== Zr && void 0 !== Zr ? Zr : jr.prefab.title, jr.text), Ar.push({
```

#### 176. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5680` → after: `L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5680) · [Before (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5680)

```diff
-             setup: null !== (uR = ZR.prefab.setup) && void 0 !== uR ? uR : null
+             setup: null !== (ar = jr.prefab.setup) && void 0 !== ar ? ar : null
```

#### 177. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5699` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5699) · [Before (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5699)

```diff
-         const RR = null !== (qJ = ZJ.get(aR.name)) && void 0 !== qJ ? qJ : 0;
+         const rr = null !== (IS = jS.get(tr.name)) && void 0 !== IS ? IS : 0;
```

#### 178. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5709` → after: `L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5709) · [Before (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5709)

```diff
-               path: null !== (iJ = null !== (fJ = null !== (VJ = aR.args.path) && void 0 !== VJ ? VJ : uR) && void 0 !== fJ ? fJ : yR) && void 0 !== iJ ? iJ : void 0
+               path: null !== (fS = null !== (ES = null !== (pS = tr.args.path) && void 0 !== pS ? pS : ar) && void 0 !== ES ? ES : Zr) && void 0 !== fS ? fS : void 0
```

#### 179. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5720` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5720) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5720)

```diff
-           CR = `${JR.name}\n${JSON.stringify({...JR.args,why:void 0})}`,
+           Kr = `${Sr.name}\n${JSON.stringify({...Sr.args,why:void 0})}`,
```

#### 180. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5740` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5740) · [Before (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5740)

```diff
-             const RR = void 0 !== tR && "" !== tR.trim() ? UR(tR) : void 0 === uR ? null !== yR && void 0 !== yR ? yR : "index.js" : null;
+             const rr = void 0 !== Wr && "" !== Wr.trim() ? Yr(Wr) : void 0 === ar ? null !== Zr && void 0 !== Zr ? Zr : "index.js" : null;
```

#### 181. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5744` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5744) · [Before (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5744)

```diff
-               TR(RR, JR.args.name, null !== (KJ = JR.args.settings) && void 0 !== KJ ? KJ : "", JR.args.why)
+               dr(rr, Sr.args.name, null !== (xS = Sr.args.settings) && void 0 !== xS ? xS : "", Sr.args.why)
```

#### 182. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5751` → after: `L5751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5751) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5751)

```diff
-             if (0 === YR.length) YR = eJ(null !== (wJ = JR.args.steps) && void 0 !== wJ ? wJ : "")
+             if (0 === or.length) or = US(null !== (mS = Sr.args.steps) && void 0 !== mS ? mS : "")
```

#### 183. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5754` → after: `L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5754) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5754)

```diff
-             const RR = tJ(null !== (rJ = JR.args.note) && void 0 !== rJ ? rJ : "");
+             const rr = WS(null !== (NS = Sr.args.note) && void 0 !== NS ? NS : "");
```

#### 184. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5769` → after: `L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5769) · [Before (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5769)

```diff
-               if (void 0 !== ZR && ("" === ZR.trim() && !uJ || zy(Fy(ZR), void 0 === tR ? "" : null !== (LJ = fR[UR(tR)]) && void 0 !== LJ ? LJ : ""))) rR(JR.name, void 0 === tR ? null : UR(tR), "placeholder");
+               if (void 0 !== jr && ("" === jr.trim() && !aS || VZ(DZ(jr), void 0 === Wr ? "" : null !== (hS = Er[Yr(Wr)]) && void 0 !== hS ? hS : ""))) Nr(Sr.name, void 0 === Wr ? null : Yr(Wr), "placeholder");
```

#### 185. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5771` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5771) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5771)

```diff
-               else if (void 0 !== tR && AR(UR(tR)) && "" !== (null !== (nJ = GR[UR(tR)]) && void 0 !== nJ ? nJ : "").trim()) rR(JR.name, UR(tR), "unread", void 0 === ZR ? void 0 : {
+               else if (void 0 !== Wr && er(Yr(Wr)) && "" !== (null !== (zS = Qr[Yr(Wr)]) && void 0 !== zS ? zS : "").trim()) Nr(Sr.name, Yr(Wr), "unread", void 0 === jr ? void 0 : {
```

#### 186. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5789` → after: `L5789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5789) · [Before (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5789)

```diff
-               uR = null === RR ? "" : null !== (WJ = fR[RR]) && void 0 !== WJ ? WJ : "",
+               ar = null === rr ? "" : null !== (nS = Er[rr]) && void 0 !== nS ? nS : "",
```

#### 187. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5796-L5797` → after: `L5796-L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5796-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5796-L5797) · [Before (L5796-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5796-L5797)

```diff
-               })) || void 0 === CJ ? void 0 : CJ.text) && void 0 !== AJ ? AJ : null : "replace_function" === JR.name ? kR(uR, GR, ZR) : RJ(uR, GR, ZR);
-             null === RR || null === KR ? rR(JR.name, RR, KG(JR) ? "brokenCode" : "missingArgs") : zy(ZR, uR) ? rR(JR.name, RR, "placeholder") : "replace_function" === JR.name && AR(RR) && QR(uR, null !== GR && void 0 !== GR ? GR : "", ZR) ? (rR(JR.name, RR, "unread", {
+               })) || void 0 === KS ? void 0 : KS.text) && void 0 !== eS ? eS : null : "replace_function" === Sr.name ? br(ar, Qr, jr) : rS(ar, Qr, jr);
+             null === rr || null === xr ? Nr(Sr.name, rr, xQ(Sr) ? "brokenCode" : "missingArgs") : VZ(jr, ar) ? Nr(Sr.name, rr, "placeholder") : "replace_function" === Sr.name && er(rr) && Jr(ar, null !== Qr && void 0 !== Qr ? Qr : "", jr) ? (Nr(Sr.name, rr, "unread", {
```

#### 188. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5802-L5803` → after: `L5802-L5803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5802-L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5802-L5803) · [Before (L5802-L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5802-L5803)

```diff
-             const RR = !0 === (null === (XJ = nR._meta) || void 0 === XJ ? void 0 : XJ.appliesAtOnce) ? null !== uR && void 0 !== uR ? uR : yR : void 0 === tR ? null : UR(tR),
-               GR = null === RR ? "" : null !== (MJ = fR[RR]) && void 0 !== MJ ? MJ : "",
+             const rr = !0 === (null === (yS = zr._meta) || void 0 === yS ? void 0 : yS.appliesAtOnce) ? null !== ar && void 0 !== ar ? ar : Zr : void 0 === Wr ? null : Yr(Wr),
+               Qr = null === rr ? "" : null !== (BS = Er[rr]) && void 0 !== BS ? BS : "",
```

#### 189. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5807-L5809` → after: `L5807-L5809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5807-L5809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5807-L5809) · [Before (L5807-L5809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5807-L5809)

```diff
-               eR = null !== iR && void 0 !== iR ? iR : wR,
-               aR = null !== wR ? cJ(null !== KR && void 0 !== KR ? KR : "") : null !== KR && void 0 !== KR ? KR : "",
-               LR = null === eR || void 0 === qR ? aR : NR(GR.slice(eR.from, eR.to), xR(GR, eR, null !== wR ? cJ(qR) : qR, aR), DR(GR.slice(eR.to)));
+               Ur = null !== fr && void 0 !== fr ? fr : mr,
+               tr = null !== mr ? MS(null !== xr && void 0 !== xr ? xr : "") : null !== xr && void 0 !== xr ? xr : "",
+               hr = null === Ur || void 0 === Ir ? tr : qr(Qr.slice(Ur.from, Ur.to), Hr(Qr, Ur, null !== mr ? MS(Ir) : Ir, tr), Rr(Qr.slice(Ur.to)));
```

#### 190. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5816-L5817` → after: `L5816-L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5816-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5816-L5817) · [Before (L5816-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5816-L5817)

```diff
-               const yR = WR(RR) ? sR(GR, eR.from, eR.to, null !== qR && void 0 !== qR ? qR : "", aR) : null;
-               fR[RR] = null !== yR && void 0 !== yR ? yR : GR.slice(0, eR.from) + LR + GR.slice(eR.to), VR.add(RR), PR(RR, JR.args.why, LR)
+               const Zr = nr(rr) ? sr(Qr, Ur.from, Ur.to, null !== Ir && void 0 !== Ir ? Ir : "", tr) : null;
+               Er[rr] = null !== Zr && void 0 !== Zr ? Zr : Qr.slice(0, Ur.from) + hr + Qr.slice(Ur.to), pr.add(rr), Gr(rr, Sr.args.why, hr)
```

#### 191. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5827-L5828` → after: `L5827-L5828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5827-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5827-L5828) · [Before (L5827-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5827-L5828)

```diff
-           tR = null !== (pJ = null !== uR && void 0 !== uR ? uR : yR) && void 0 !== pJ ? pJ : "index.js",
-           ZR = null !== (gJ = fR[tR]) && void 0 !== gJ ? gJ : "";
+           Wr = null !== (OS = null !== ar && void 0 !== ar ? ar : Zr) && void 0 !== OS ? OS : "index.js",
+           jr = null !== (LS = Er[Wr]) && void 0 !== LS ? LS : "";
```

#### 192. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5843` → after: `L5843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5843) · [Before (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5843)

```diff
-           fR[aR] = iy(qy(RR ? fR[aR] : fR[aR].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (vJ = GR[aR]) && void 0 !== vJ ? vJ : "");
+           Er[tr] = fZ(IZ(rr ? Er[tr] : Er[tr].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (XS = Qr[tr]) && void 0 !== XS ? XS : "");
```

#### 193. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5848` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5848) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5848)

```diff
-         const RR = UJ(Jt(Rt(fR[aR])), WR(aR) ? tR : [], null !== (bJ = GR[aR]) && void 0 !== bJ ? bJ : "");
+         const rr = YS(SW(rW(Er[tr])), nr(tr) ? Wr : [], null !== (lS = Qr[tr]) && void 0 !== lS ? lS : "");
```

#### 194. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5852-L5854` → after: `L5852-L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5852-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5852-L5854) · [Before (L5852-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5852-L5854)

```diff
-         const RR = aR.problems.length > 0 ? ` Kept as it was: ${aR.problems.join("; ")}.` : "",
-           JR = aR.fixed.length > 0 ? ` Names changed to real ones: ${aR.fixed.join(", ")}.` : "";
-         eR += `\n\nThis uses the ready-made ${aR.title}.${JR}${RR}${aR.setup?` ${aR.setup}`:""}`
+         const rr = tr.problems.length > 0 ? ` Kept as it was: ${tr.problems.join("; ")}.` : "",
+           Sr = tr.fixed.length > 0 ? ` Names changed to real ones: ${tr.fixed.join(", ")}.` : "";
+         Ur += `\n\nThis uses the ready-made ${tr.title}.${Sr}${rr}${tr.setup?` ${tr.setup}`:""}`
```

#### 195. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5860` → after: `L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5860) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5860)

```diff
-         of bR) eR += `\n\nI renamed \`${aR}\` to \`${vR}\`, the name World Code calls.`;
+         of lr) Ur += `\n\nI renamed \`${tr}\` to \`${Xr}\`, the name World Code calls.`;
```

#### 196. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5864` → after: `L5864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5864) · [Before (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5864)

```diff
-         const RR = null !== (NJ = GR[aR]) && void 0 !== NJ ? NJ : "";
+         const rr = null !== (qS = Qr[tr]) && void 0 !== qS ? qS : "";
```

#### 197. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5959` → after: `L5959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5959) · [Before (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5959)

```diff
-       const JR = null === RR.path ? RR.tool : `${RR.tool} ${RR.path}`;
+       const Sr = null === rr.path ? rr.tool : `${rr.tool} ${rr.path}`;
```

#### 198. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5961-L5966` → after: `L5961-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5961-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5961-L5966) · [Before (L5961-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5961-L5966)

```diff
-       if ("prefab" === RR.reason) return `${JR}: ${null!==(GR=RR.detail)&&void 0!==GR?GR:"the prefab couldn't go in."} Nothing changed.`;
-       if ("missingArgs" === RR.reason) return `${JR}: the call was missing an argument it needs, so nothing changed.`;
-       if ("placeholder" === RR.reason) return "write_file" === RR.tool ? `${JR}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${JR}: the code had a line standing in for code left out ("// ... exi … [truncated]
-       if ("unread" === RR.reason) return `${JR}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==RR.path&&(0,aR.i)(RR.path)?"view_world_code":"view_file"} shows.`;
-       if ("brokenCode" === RR.reason) return `${JR}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-       return `${JR}: search matched nothing in the file, so nothing changed. ${RR.closest?`The closest lines (${RR.closest.line}-${RR.closest.lastLine}) are:\n${RR.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${RR.functions.length>0?`, or use replace … [truncated]
+       if ("prefab" === rr.reason) return `${Sr}: ${null!==(Qr=rr.detail)&&void 0!==Qr?Qr:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === rr.reason) return `${Sr}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === rr.reason) return "write_file" === rr.tool ? `${Sr}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${Sr}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === rr.reason) return `${Sr}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==rr.path&&(0,tr.f)(rr.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === rr.reason) return `${Sr}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${Sr}: search matched nothing in the file, so nothing changed. ${rr.closest?`The closest lines (${rr.closest.line}-${rr.closest.lastLine}) are:\n${rr.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${rr.functions.length>0?`, or use replace … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5983` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5983) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5983)

```diff
-       Lt = RR => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
+       tW = rr => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5985` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5985) · [Before (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5985)

```diff
-       Ut = RR => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       zW = rr => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5995` → after: `L5995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L5995) · [Before (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L5995)

```diff
-     const Ct = `You looked at World Code: its files are below, their paths starting ${aR.n}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${a … [truncated]
+     const eW = `You looked at World Code: its files are below, their paths starting ${tr.m}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${t … [truncated]
```

#### 202. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6009-L6010` → after: `L6009-L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6009-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6009-L6010) · [Before (L6009-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6009-L6010)

```diff
-       const UR = JR ? aR.e : LR,
-         WR = JR ? `${aR.n}index.js` : UR,
+       const Yr = Sr ? tr.d : hr,
+         nr = Sr ? `${tr.m}index.js` : Yr,
```

#### 203. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6014-L6029` → after: `L6014-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6014-L6029) · [Before (L6014-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6014-L6029)

```diff
-         MR = CR("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${AR("edit … [truncated]
-         BR = CR("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         lR = CR("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         pR = CR("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${AR("edit_fil … [truncated]
-         gR = JR ? `2. Then give the whole new code with a write_file call, exactly like this:\n${AR("write_file",{path:UR,why:"what the change does",content:Wt.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${AR("write_fi … [truncated]
-         bR = JR ? "" : ` If there is no code yet, write it in ${UR}.`,
-         vR = AR("switch_to_world_code", {}),
-         OR = JR ? iR ? `\n${Ct}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
-         xR = wR && CR("use_prefab") && KR.length >= 2,
-         NR = xR ? KR.slice(0, 3).map((RR => RR.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
-         DR = xR ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-         HR = CR("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         oR = CR("plan") ? `\n${"deepseek"===GR?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         cR = null !== (tR = KR[0]) && void 0 !== tR ? tR : Cy("parkour"),
-         PR = (null !== (uR = null === cR || void 0 === cR ? void 0 : cR.settings) && void 0 !== uR ? uR : []).slice(0, 2).map((RR => `${RR.key}: ${RR.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         Br = Kr("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${er("edit … [truncated]
+         Tr = Kr("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         vr = Kr("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         Or = Kr("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${er("edit_fil … [truncated]
+         Lr = Sr ? `2. Then give the whole new code with a write_file call, exactly like this:\n${er("write_file",{path:Yr,why:"what the change does",content:YW.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${er("write_fi … [truncated]
+         lr = Sr ? "" : ` If there is no code yet, write it in ${Yr}.`,
+         Xr = er("switch_to_world_code", {}),
+         Pr = Sr ? fr ? `\n${eW}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         Hr = mr && Kr("use_prefab") && xr.length >= 2,
+         qr = Hr ? xr.slice(0, 3).map((rr => rr.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
+         Rr = Hr ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
+         gr = Kr("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         Cr = Kr("plan") ? `\n${"deepseek"===Qr?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         Mr = null !== (Wr = xr[0]) && void 0 !== Wr ? Wr : KZ("parkour"),
+         Gr = (null !== (ar = null === Mr || void 0 === Mr ? void 0 : Mr.settings) && void 0 !== ar ? ar : []).slice(0, 2).map((rr => `${rr.key}: ${rr.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 204. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6031` → after: `L6031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6031) · [Before (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6031)

```diff
-         yR ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         Zr ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 205. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6034` → after: `L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6034) · [Before (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6034)

```diff
-         uR.join("\n")
+         ar.join("\n")
```

#### 206. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6036` → after: `L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6036) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6036)

```diff
-       `}(RR,AR,fR)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(rr,er,Er)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 207. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6039-L6040` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6039-L6040) · [Before (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6039-L6040)

```diff
-     function Mt(RR, JR, GR) {
-       return Object.keys(RR).filter((RR => !GR || !(0, aR.i)(RR))).sort(((RR, GR) => (GR === JR ? 1 : 0) - (RR === JR ? 1 : 0) || RR.localeCompare(GR)))
+     function yW(rr, Sr, Qr) {
+       return Object.keys(rr).filter((rr => !Qr || !(0, tr.f)(rr))).sort(((rr, Qr) => (Qr === Sr ? 1 : 0) - (rr === Sr ? 1 : 0) || rr.localeCompare(Qr)))
```

#### 208. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6043-L6046` → after: `L6043-L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6043-L6046) · [Before (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6043-L6046)

```diff
-     function Bt(RR, JR, GR) {
-       var yR;
-       const tR = Mt(RR, JR, GR);
-       return null !== JR && tR.includes(JR) ? JR : null !== (yR = tR[0]) && void 0 !== yR ? yR : null
+     function BW(rr, Sr, Qr) {
+       var Zr;
+       const Wr = yW(rr, Sr, Qr);
+       return null !== Sr && Wr.includes(Sr) ? Sr : null !== (Zr = Wr[0]) && void 0 !== Zr ? Zr : null
```

#### 209. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6049-L6050` → after: `L6049-L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6049-L6050) · [Before (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6049-L6050)

```diff
-     function lt(RR) {
-       return RR.includes("index.ts") ? "index.ts" : "index.js"
+     function TW(rr) {
+       return rr.includes("index.ts") ? "index.ts" : "index.js"
```

#### 210. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6053-L6055` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6053-L6055) · [Before (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6053-L6055)

```diff
-     function pt(RR) {
-       const JR = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${lt(RR)}`;
-       return `Only ${JR} runs by itself: another file runs when ${JR} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${JR}.\n`
+     function vW(rr) {
+       const Sr = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${TW(rr)}`;
+       return `Only ${Sr} runs by itself: another file runs when ${Sr} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${Sr}.\n`
```

#### 211. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6058-L6059` → after: `L6058-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6058-L6059) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6058-L6059)

```diff
-     function gt(RR, JR) {
-       var GR;
+     function OW(rr, Sr) {
+       var Qr;
```

#### 212. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6061-L6066` → after: `L6061-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6061-L6066) · [Before (L6061-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6061-L6066)

```diff
-         files: yR,
-         activePath: tR
-       } = RR, uR = !0 === RR.codeBlock, ZR = Mt(yR, tR, uR);
-       if (0 === ZR.length || ZR.every((RR => "" === yR[RR].trim()))) return uR ? "There is no code yet: the code block is empty." : ZR.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const qR = null !== (GR = Bt(yR, tR, uR)) && void 0 !== GR ? GR : ZR[0];
-       return `${ZR.length>1?`Their files:\n${ZR.map((RR=>{const JR=""===(GR=yR[RR])?0:GR.replace(/\n$/,"").split("\n").length;var GR;return`- ${RR}: ${1===JR?"1 line":`${JR} lines`}${RR===qR?" (open in the editor, its code below)":""}`})).join("\n")}\n${uR?"":pt(ZR)}\n`:""}${func … [truncated]
+         files: Zr,
+         activePath: Wr
+       } = rr, ar = !0 === rr.codeBlock, jr = yW(Zr, Wr, ar);
+       if (0 === jr.length || jr.every((rr => "" === Zr[rr].trim()))) return ar ? "There is no code yet: the code block is empty." : jr.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const Ir = null !== (Qr = BW(Zr, Wr, ar)) && void 0 !== Qr ? Qr : jr[0];
+       return `${jr.length>1?`Their files:\n${jr.map((rr=>{const Sr=""===(Qr=Zr[rr])?0:Qr.replace(/\n$/,"").split("\n").length;var Qr;return`- ${rr}: ${1===Sr?"1 line":`${Sr} lines`}${rr===Ir?" (open in the editor, its code below)":""}`})).join("\n")}\n${ar?"":vW(jr)}\n`:""}${func … [truncated]
```

#### 213. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6069-L6070` → after: `L6069-L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6069-L6070) · [Before (L6069-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6069-L6070)

```diff
-     function bt(RR) {
-       var JR, GR, yR, tR, uR, ZR;
+     function LW(rr) {
+       var Sr, Qr, Zr, Wr, ar, jr;
```

#### 214. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6072-L6087` → after: `L6072-L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6072-L6087) · [Before (L6072-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6072-L6087)

```diff
-         codeBlock: !0 === RR.codeBlock,
-         hasCode: "" !== (null !== (JR = RR.files[null !== (GR = RR.activePath) && void 0 !== GR ? GR : ""]) && void 0 !== JR ? JR : "").trim(),
-         hasBigFile: Object.values(RR.files).some((RR => RR.length > 6e3)),
-         wantsExport: ut(RR.request),
-         canAsk: !0 === RR.canAsk,
-         canRemember: !0 === (null === (yR = RR.about) || void 0 === yR ? void 0 : yR.canRemember),
-         isBigRequest: rJ(RR.request),
-         canLookUp: !0 === RR.canLookUp,
-         hasOtherFiles: Object.keys(RR.files).length > 1,
-         hasErrors: RR.errors.length > 0,
-         canChangeWorldCode: !0 === RR.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(RR.files).some(aR.i),
-         addsToEntryFile: !0 === RR.addsToEntryFile,
-         offersPrefabs: (tR = RR.request, uR = RR.files, ZR = vt(RR), "never" !== ZR.offer && ("always" === ZR.offer || Hy(tR, 1).length > 0 || rJ(tR) || !rt(uR) && wt.test(tR))),
-         listsPrefabs: vt(RR).categories,
-         looksUpDocs: !0 === RR.looksUpDocs
+         codeBlock: !0 === rr.codeBlock,
+         hasCode: "" !== (null !== (Sr = rr.files[null !== (Qr = rr.activePath) && void 0 !== Qr ? Qr : ""]) && void 0 !== Sr ? Sr : "").trim(),
+         hasBigFile: Object.values(rr.files).some((rr => rr.length > 6e3)),
+         wantsExport: aW(rr.request),
+         canAsk: !0 === rr.canAsk,
+         canRemember: !0 === (null === (Zr = rr.about) || void 0 === Zr ? void 0 : Zr.canRemember),
+         isBigRequest: NS(rr.request),
+         canLookUp: !0 === rr.canLookUp,
+         hasOtherFiles: Object.keys(rr.files).length > 1,
+         hasErrors: rr.errors.length > 0,
+         canChangeWorldCode: !0 === rr.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(rr.files).some(tr.f),
+         addsToEntryFile: !0 === rr.addsToEntryFile,
+         offersPrefabs: (Wr = rr.request, ar = rr.files, jr = lW(rr), "never" !== jr.offer && ("always" === jr.offer || gZ(Wr, 1).length > 0 || NS(Wr) || !NW(ar) && mW.test(Wr))),
+         listsPrefabs: lW(rr).categories,
+         looksUpDocs: !0 === rr.looksUpDocs
```

#### 215. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6091-L6093` → after: `L6091-L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6091-L6093) · [Before (L6091-L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6091-L6093)

```diff
-     function vt(RR) {
-       var JR;
-       return null !== (JR = RR.prefabs) && void 0 !== JR ? JR : Kt
+     function lW(rr) {
+       var Sr;
+       return null !== (Sr = rr.prefabs) && void 0 !== Sr ? Sr : xW
```

#### 216. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6096-L6104` → after: `L6096-L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6096-L6104) · [Before (L6096-L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6096-L6104)

```diff
-     function Ot(RR, JR) {
-       return "deepseek" === JR ? function(RR) {
-         const JR = Zt[RR ? "codeBlock" : "worldCode"];
-         return MJ.filter((RR => JR.has(RR.name)))
-       }(!0 === RR.codeBlock) : function(RR) {
-         const JR = (RR.hasCode || RR.hasBigFile) && !RR.codeBlock || !0 === RR.hasWorldCodeFiles || !0 === RR.addsToEntryFile,
-           GR = !0 === RR.canLookUp,
-           yR = RR.codeBlock && !0 === RR.canChangeWorldCode && !0 !== RR.hasWorldCodeFiles && GR,
-           tR = {
+     function XW(rr, Sr) {
+       return "deepseek" === Sr ? function(rr) {
+         const Sr = jW[rr ? "codeBlock" : "worldCode"];
+         return BS.filter((rr => Sr.has(rr.name)))
+       }(!0 === rr.codeBlock) : function(rr) {
+         const Sr = (rr.hasCode || rr.hasBigFile) && !rr.codeBlock || !0 === rr.hasWorldCodeFiles || !0 === rr.addsToEntryFile,
+           Qr = !0 === rr.canLookUp,
+           Zr = rr.codeBlock && !0 === rr.canChangeWorldCode && !0 !== rr.hasWorldCodeFiles && Qr,
+           Wr = {
```

#### 217. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6106-L6107` → after: `L6106-L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6106-L6107) · [Before (L6106-L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6106-L6107)

```diff
-             edit_file: RR.hasBigFile,
-             replace_function: JR,
+             edit_file: rr.hasBigFile,
+             replace_function: Sr,
```

#### 218. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6109-L6126` → after: `L6109-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6109-L6126) · [Before (L6109-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6109-L6126)

```diff
-             add_world_code: RR.codeBlock && !0 !== RR.hasWorldCodeFiles,
-             edit_code_in_place: RR.hasCode,
-             export_game: RR.wantsExport,
-             switch_to_world_code: RR.codeBlock,
-             ask_creator: RR.canAsk,
-             remember: !0 === RR.canRemember && !RR.codeBlock,
-             plan: !0 === RR.isBigRequest && RR.canAsk && !RR.codeBlock,
-             view_file: GR && !0 === RR.hasOtherFiles && !RR.codeBlock,
-             view_world_code: yR,
-             view_chunk: GR,
-             view_game_state: GR,
-             get_docs: GR,
-             fetch_url: GR && !0 === RR.looksUpDocs,
-             find_names: GR,
-             view_errors: GR && !0 === RR.hasErrors,
-             use_prefab: !0 === RR.offersPrefabs && !RR.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: rr.codeBlock && !0 !== rr.hasWorldCodeFiles,
+             edit_code_in_place: rr.hasCode,
+             export_game: rr.wantsExport,
+             switch_to_world_code: rr.codeBlock,
+             ask_creator: rr.canAsk,
+             remember: !0 === rr.canRemember && !rr.codeBlock,
+             plan: !0 === rr.isBigRequest && rr.canAsk && !rr.codeBlock,
+             view_file: Qr && !0 === rr.hasOtherFiles && !rr.codeBlock,
+             view_world_code: Zr,
+             view_chunk: Qr,
+             view_game_state: Qr,
+             get_docs: Qr,
+             fetch_url: Qr && !0 === rr.looksUpDocs,
+             find_names: Qr,
+             view_errors: Qr && !0 === rr.hasErrors,
+             use_prefab: !0 === rr.offersPrefabs && !rr.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 219. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6128-L6131` → after: `L6128-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6128-L6131) · [Before (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6128-L6131)

```diff
-         let uR = MJ.filter((RR => tR[RR.name]));
-         for (const ZR of ["remember", "plan"]) uR.filter((RR => !BJ(RR.name))).length > 7 && (uR = uR.filter((RR => RR.name !== ZR)));
-         return uR
-       }(bt(RR))
+         let ar = BS.filter((rr => Wr[rr.name]));
+         for (const jr of ["remember", "plan"]) ar.filter((rr => !TS(rr.name))).length > 7 && (ar = ar.filter((rr => rr.name !== jr)));
+         return ar
+       }(LW(rr))
```

#### 220. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6134-L6141` → after: `L6134-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6134-L6141) · [Before (L6134-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6134-L6141)

```diff
-     function xt(RR, JR) {
-       var GR, yR;
-       const tR = bt(RR),
-         uR = !0 === tR.canLookUp,
-         ZR = (null !== (GR = null === (yR = RR.lookups) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) > 0,
-         qR = !0 === tR.hasWorldCodeFiles,
-         iR = [tR.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", tR.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", uR ? "" : ZR ? "You have looked things up as many times as you can: answer n … [truncated]
-       return iR.length > 0 ? `\n\nFor this request: ${iR.join(" ")}` : ""
+     function PW(rr, Sr) {
+       var Qr, Zr;
+       const Wr = LW(rr),
+         ar = !0 === Wr.canLookUp,
+         jr = (null !== (Qr = null === (Zr = rr.lookups) || void 0 === Zr ? void 0 : Zr.length) && void 0 !== Qr ? Qr : 0) > 0,
+         Ir = !0 === Wr.hasWorldCodeFiles,
+         fr = [Wr.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", Wr.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", ar ? "" : jr ? "You have looked things up as many times as you can: answer n … [truncated]
+       return fr.length > 0 ? `\n\nFor this request: ${fr.join(" ")}` : ""
```

#### 221. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6144-L6146` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6144-L6146) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6144-L6146)

```diff
-     function Nt(RR, JR) {
-       var GR, yR, tR, uR, ZR, qR;
-       let iR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et,
+     function HW(rr, Sr) {
+       var Qr, Zr, Wr, ar, jr, Ir;
+       let fr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UW,
```

#### 222. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6148-L6149` → after: `L6148-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6148-L6149) · [Before (L6148-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6148-L6149)

```diff
-           docsInTurn: fR = !1,
-           lL: VR = !1
+           docsInTurn: Er = !1,
+           Xh: pr = !1
```

#### 223. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6151-L6183` → after: `L6151-L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6151-L6183) · [Before (L6151-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6151-L6183)

```diff
-       const KR = "deepseek" === iR.format,
-         wR = Object.values(JR.files).join("\n"),
-         rR = JR.history.slice(-2).map((RR => RR.text)).join("\n"),
-         eR = `${JR.request}\n${rR}\n${JR.errors.join("\n")}`,
-         aR = !0 === JR.looksUpDocs,
-         LR = aR && !0 === JR.canLookUp ? [] : RR.find(eR, wR, 12),
-         nR = RR.matchItemAndBlockNames(eR, 12),
-         UR = !0 === JR.codeBlock,
-         WR = UR ? "myId" : "playerId",
-         AR = Ot(JR, iR.format),
-         CR = AR.some((RR => "use_prefab" === RR.name)),
-         XR = !CR || KR && !0 !== bt(JR).offersPrefabs ? [] : function(RR, JR, GR) {
-           if ("never" === GR.offer || "none" === GR.list) return [];
-           if ("all" === GR.list) return [...Uy];
-           const yR = Hy(RR, 4);
-           if (rt(JR) || !wt.test(RR) && !rJ(RR)) return yR;
- ... (17 more removed lines; see GitHub link above)
+       const xr = "deepseek" === fr.format,
+         mr = Object.values(Sr.files).join("\n"),
+         Nr = Sr.history.slice(-2).map((rr => rr.text)).join("\n"),
+         Ur = `${Sr.request}\n${Nr}\n${Sr.errors.join("\n")}`,
+         tr = !0 === Sr.looksUpDocs,
+         hr = tr && !0 === Sr.canLookUp ? [] : rr.find(Ur, mr, 12),
+         zr = rr.matchItemAndBlockNames(Ur, 12),
+         Yr = !0 === Sr.codeBlock,
+         nr = Yr ? "myId" : "playerId",
+         er = XW(Sr, fr.format),
+         Kr = er.some((rr => "use_prefab" === rr.name)),
+         yr = !Kr || xr && !0 !== LW(Sr).offersPrefabs ? [] : function(rr, Sr, Qr) {
+           if ("never" === Qr.offer || "none" === Qr.list) return [];
+           if ("all" === Qr.list) return [...YZ];
+           const Zr = gZ(rr, 4);
+           if (NW(Sr) || !mW.test(rr) && !NS(rr)) return Zr;
+ ... (17 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6185` → after: `L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6185) · [Before (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6185)

```diff
-           content: it([UR ? Ut(aR) : Lt(aR), ...aR ? [] : [UR ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${RR.index("callback")}` : `## Callbacks (all of them)\n${RR.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: fW([Yr ? zW(tr) : tW(tr), ...tr ? [] : [Yr ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${rr.index("callback")}` : `## Callbacks (all of them)\n${rr.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 225. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6192-L6197` → after: `L6192-L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6192-L6197) · [Before (L6192-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6192-L6197)

```diff
-             hasWorldCodeFiles: !0 === bt(JR).hasWorldCodeFiles,
-             hasLookedUp: (null !== (GR = null === (yR = JR.lookups) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) > 0,
-             movesToWorldCode: !0 === JR.canChangeWorldCode,
-             listedPrefabs: XR,
-             guidesToPrefabs: !0 === vt(JR).guide
-           })].filter((RR => "" !== RR)).join("\n\n"), AR, iR.format, iR.nativeTools)
+             hasWorldCodeFiles: !0 === LW(Sr).hasWorldCodeFiles,
+             hasLookedUp: (null !== (Qr = null === (Zr = Sr.lookups) || void 0 === Zr ? void 0 : Zr.length) && void 0 !== Qr ? Qr : 0) > 0,
+             movesToWorldCode: !0 === Sr.canChangeWorldCode,
+             listedPrefabs: yr,
+             guidesToPrefabs: !0 === lW(Sr).guide
+           })].filter((rr => "" !== rr)).join("\n\n"), er, fr.format, fr.nativeTools)
```

#### 226. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6199-L6202` → after: `L6199-L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6199-L6202) · [Before (L6199-L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6199-L6202)

```diff
-       if (!KR)
-         for (const cR of JR.history) pR.push({
-           role: cR.role,
-           content: cR.text
+       if (!xr)
+         for (const Mr of Sr.history) Or.push({
+           role: Mr.role,
+           content: Mr.text
```

#### 227. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6204-L6212` → after: `L6204-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6204-L6212) · [Before (L6204-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6204-L6212)

```diff
-       const gR = KR && !VR && JR.history.length > 0 ? `Earlier in this chat:\n${JR.history.map((RR=>`${"user"===RR.role?"They asked":"You answered"}: ${RR.text}`)).join("\n")}\n\n` : "",
-         bR = null !== (tR = JR.about) && void 0 !== tR && tR.notes.length ? `AI notes (notes they kept):\n${JR.about.notes.map((RR=>`- ${RR}`)).join("\n")}\n\n` : "",
-         vR = null !== (uR = JR.about) && void 0 !== uR && uR.outline ? `Outline of their code:\n${JR.about.outline}\n\n` : "",
-         OR = JR.errors.length > 0 ? `\n\nErrors their world showed recently:\n${JR.errors.slice(-5).join("\n")}` : "",
-         xR = null === (ZR = JR.failedEdits) || void 0 === ZR || !ZR.length || KR && VR ? "" : `\n\nWhat happened to your last answer's changes:\n${function(RR,JR){return RR.map((RR=>RG[JR].editFailure(RR.tool,Vt(RR)))).join("\n\n")}(JR.failedEdits,iR.format)}`,
-         NR = [...fR ? lR : [], ...KR ? [MR, BR] : []].filter((RR => "" !== RR)).map((RR => `${RR}\n\n`)).join(""),
-         DR = null === (qR = JR.lookups) || void 0 === qR || !qR.length || KR && VR ? "" : `\n\nWhat you looked up for this request:\n${HR=JR.lookups,oR=iR.format,HR.map((RR=>RG[oR].lookupResult(RR.tool,RR.about,RR.text))).join("\n\n")}`;
-       var HR, oR;
-       return pR.push({
+       const Lr = xr && !pr && Sr.history.length > 0 ? `Earlier in this chat:\n${Sr.history.map((rr=>`${"user"===rr.role?"They asked":"You answered"}: ${rr.text}`)).join("\n")}\n\n` : "",
+         lr = null !== (Wr = Sr.about) && void 0 !== Wr && Wr.notes.length ? `AI notes (notes they kept):\n${Sr.about.notes.map((rr=>`- ${rr}`)).join("\n")}\n\n` : "",
+         Xr = null !== (ar = Sr.about) && void 0 !== ar && ar.outline ? `Outline of their code:\n${Sr.about.outline}\n\n` : "",
+         Pr = Sr.errors.length > 0 ? `\n\nErrors their world showed recently:\n${Sr.errors.slice(-5).join("\n")}` : "",
+         Hr = null === (jr = Sr.failedEdits) || void 0 === jr || !jr.length || xr && pr ? "" : `\n\nWhat happened to your last answer's changes:\n${function(rr,Sr){return rr.map((rr=>rQ[Sr].editFailure(rr.tool,pW(rr)))).join("\n\n")}(Sr.failedEdits,fr.format)}`,
+         qr = [...Er ? vr : [], ...xr ? [Br, Tr] : []].filter((rr => "" !== rr)).map((rr => `${rr}\n\n`)).join(""),
+         Rr = null === (Ir = Sr.lookups) || void 0 === Ir || !Ir.length || xr && pr ? "" : `\n\nWhat you looked up for this request:\n${gr=Sr.lookups,Cr=fr.format,gr.map((rr=>rQ[Cr].lookupResult(rr.tool,rr.about,rr.text))).join("\n\n")}`;
+       var gr, Cr;
+       return Or.push({
```

#### 228. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6215` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6215) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6215)

```diff
-       }), pR
+       }), Or
```

#### 229. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6217` → after: `L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6217) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6217)

```diff
-     var Dt = GR(40978);
+     var qW = Qr(41324);
```

#### 230. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6219-L6220` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6219-L6220) · [Before (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6219-L6220)

```diff
-     function Ht(RR) {
-       var JR, GR, yR, tR, uR, ZR;
+     function RW(rr) {
+       var Sr, Qr, Zr, Wr, ar, jr;
```

#### 231. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6222-L6224` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6222-L6224) · [Before (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6222-L6224)

```diff
-         args: qR
-       } = RR;
-       switch (RR.name) {
+         args: Ir
+       } = rr;
+       switch (rr.name) {
```

#### 232. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6226` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6226) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6226)

```diff
-           return null !== (JR = qR.path) && void 0 !== JR ? JR : "a file";
+           return null !== (Sr = Ir.path) && void 0 !== Sr ? Sr : "a file";
```

#### 233. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6230` → after: `L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6230) · [Before (L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6230)

```diff
-           return qR.position ? `the blocks near ${null!==(GR=null===(yR=(0,Dt.f)(qR.position))||void 0===yR?void 0:yR.map(Math.floor).join(", "))&&void 0!==GR?GR:qR.position}` : "the blocks around you";
+           return Ir.position ? `the blocks near ${null!==(Qr=null===(Zr=(0,qW.f)(Ir.position))||void 0===Zr?void 0:Zr.map(Math.floor).join(", "))&&void 0!==Qr?Qr:Ir.position}` : "the blocks around you";
```

#### 234. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6234` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6234) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6234)

```diff
-           return qR.name ? `the docs for ${qR.name}` : `the list of ${ct(null!==(tR=qR.list)&&void 0!==tR?tR:ot)}`;
+           return Ir.name ? `the docs for ${Ir.name}` : `the list of ${CW(null!==(Wr=Ir.list)&&void 0!==Wr?Wr:gW)}`;
```

#### 235. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6236-L6240` → after: `L6236-L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6236-L6240) · [Before (L6236-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6236-L6240)

```diff
-           return function(RR) {
-             const JR = void 0 === RR ? null : AR(RR);
-             if (null === JR) return null !== RR && void 0 !== RR ? RR : "a docs page";
-             return CR(JR) ? "the list of docs pages" : `the docs page ${function(RR){const JR=(0,nR.t)(RR);return null===JR?RR:`${JR.name}${null===JR.part?"":`/${JR.part}`}`}(JR)}`
-           }(qR.url);
+           return function(rr) {
+             const Sr = void 0 === rr ? null : er(rr);
+             if (null === Sr) return null !== rr && void 0 !== rr ? rr : "a docs page";
+             return Kr(Sr) ? "the list of docs pages" : `the docs page ${function(rr){const Sr=(0,zr.x)(rr);return null===Sr?rr:`${Sr.name}${null===Sr.part?"":`/${Sr.part}`}`}(Sr)}`
+           }(Ir.url);
```

#### 236. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6242` → after: `L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6242) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6242)

```diff
-           return `names for "${null!==(uR=qR.words)&&void 0!==uR?uR:""}"`;
+           return `names for "${null!==(ar=Ir.words)&&void 0!==ar?ar:""}"`;
```

#### 237. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6246)

```diff
-           return qR.category ? `the ready-made ${qR.category} games` : "the ready-made games";
+           return Ir.category ? `the ready-made ${Ir.category} games` : "the ready-made games";
```

#### 238. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6248` → after: `L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6248) · [Before (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6248)

```diff
-           return `the ready-made ${null!==(ZR=qR.name)&&void 0!==ZR?ZR:"game"}`
+           return `the ready-made ${null!==(jr=Ir.name)&&void 0!==jr?jr:"game"}`
```

#### 239. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6251` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6251) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6251)

```diff
-     const ot = "functions";
+     const gW = "functions";
```

#### 240. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6253-L6254` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6253-L6254) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6253-L6254)

```diff
-     function ct(RR) {
-       return RR.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
+     function CW(rr) {
+       return rr.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
```

#### 241. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6257-L6258` → after: `L6257-L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6257-L6258) · [Before (L6257-L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6257-L6258)

```diff
-     function Pt(RR) {
-       return "get_docs" === RR.name || "fetch_url" === RR.name
+     function MW(rr) {
+       return "get_docs" === rr.name || "fetch_url" === rr.name
```

#### 242. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6260-L6263` → after: `L6260-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6260-L6263) · [Before (L6260-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6260-L6263)

```diff
-     async function It(RR, JR) {
-       var GR;
-       const yR = Ht(RR),
-         tR = JR => ({
+     async function GW(rr, Sr) {
+       var Qr;
+       const Zr = RW(rr),
+         Wr = Sr => ({
```

#### 243. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6265-L6267` → after: `L6265-L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6265-L6267) · [Before (L6265-L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6265-L6267)

```diff
-             tool: RR.name,
-             about: yR,
-             text: JR
+             tool: rr.name,
+             about: Zr,
+             text: Sr
```

#### 244. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6270` → after: `L6270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6270) · [Before (L6270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6270)

```diff
-       switch (RR.name) {
+       switch (rr.name) {
```

#### 245. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6272` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6272) · [Before (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6272)

```diff
-           return tR((qR = RR.args.path, iR = JR.files, void 0 === qR ? "No path was given: give the path of a file from the list." : Object.hasOwn(iR, qR) ? "" === iR[qR] ? `${qR} is empty.` : iR[qR] : `There is no file called ${qR}. Their files are: ${Object.keys(iR).join(", ")} … [truncated]
+           return Wr((Ir = rr.args.path, fr = Sr.files, void 0 === Ir ? "No path was given: give the path of a file from the list." : Object.hasOwn(fr, Ir) ? "" === fr[Ir] ? `${Ir} is empty.` : fr[Ir] : `There is no file called ${Ir}. Their files are: ${Object.keys(fr).join(", ")} … [truncated]
```

#### 246. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6274-L6279` → after: `L6274-L6279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6274-L6279) · [Before (L6274-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6274-L6279)

```diff
-           const RR = JR.readWorldCode ? await JR.readWorldCode() : null;
-           if (null === RR) return tR("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const GR = Object.keys(RR).sort(),
-             yR = Object.fromEntries(GR.map((JR => [`${aR.n}${JR}`, RR[JR]]))),
-             uR = GR.map((JR => `${aR.n}${JR}:\n${""===RR[JR]?"(empty)":RR[JR]}`)).join("\n\n"),
-             ZR = GR.length > 1 ? `\n\n${pt(GR,aR.n)}` : "";
+           const rr = Sr.readWorldCode ? await Sr.readWorldCode() : null;
+           if (null === rr) return Wr("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const Qr = Object.keys(rr).sort(),
+             Zr = Object.fromEntries(Qr.map((Sr => [`${tr.m}${Sr}`, rr[Sr]]))),
+             ar = Qr.map((Sr => `${tr.m}${Sr}:\n${""===rr[Sr]?"(empty)":rr[Sr]}`)).join("\n\n"),
+             jr = Qr.length > 1 ? `\n\n${vW(Qr,tr.m)}` : "";
```

#### 247. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6281-L6282` → after: `L6281-L6282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6281-L6282) · [Before (L6281-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6281-L6282)

```diff
-             ...tR("" === uR ? `World Code has no code yet: ${aR.n}index.js is empty.` : `${uR}${ZR}`),
-             worldCodeFiles: yR
+             ...Wr("" === ar ? `World Code has no code yet: ${tr.m}index.js is empty.` : `${ar}${jr}`),
+             worldCodeFiles: Zr
```

#### 248. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6286` → after: `L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6286) · [Before (L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6286)

```diff
-           return tR(await JR.viewChunk((0, Dt.f)(RR.args.position)));
+           return Wr(await Sr.viewChunk((0, qW.f)(rr.args.position)));
```

#### 249. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6288` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6288) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6288)

```diff
-           return tR(await JR.viewGameState());
+           return Wr(await Sr.viewGameState());
```

#### 250. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6290-L6293` → after: `L6290-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6290-L6293) · [Before (L6290-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6290-L6293)

```diff
-           return tR(function(RR, JR, GR) {
-             if (void 0 === RR) {
-               const RR = (0, MR.b)(WJ, ct(null !== JR && void 0 !== JR ? JR : ot));
-               return void 0 === RR ? `There is no list called ${JR}: ask for ${AJ}.` : GR.index(RR)
+           return Wr(function(rr, Sr, Qr) {
+             if (void 0 === rr) {
+               const rr = (0, Br.b)(nS, CW(null !== Sr && void 0 !== Sr ? Sr : gW));
+               return void 0 === rr ? `There is no list called ${Sr}: ask for ${eS}.` : Qr.index(rr)
```

#### 251. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6295-L6299` → after: `L6295-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6295-L6299) · [Before (L6295-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6295-L6299)

```diff
-             const yR = GR.section(RR);
-             if (yR) return yR.text;
-             const tR = GR.find(RR, "", 3).map((RR => RR.name)).join(", ");
-             return `Nothing is called ${RR}.${""===tR?"":` The closest names are: ${tR}.`}`
-           }(RR.args.name, RR.args.list, JR.docs));
+             const Zr = Qr.section(rr);
+             if (Zr) return Zr.text;
+             const Wr = Qr.find(rr, "", 3).map((rr => rr.name)).join(", ");
+             return `Nothing is called ${rr}.${""===Wr?"":` The closest names are: ${Wr}.`}`
+           }(rr.args.name, rr.args.list, Sr.docs));
```

#### 252. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6301` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6301) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6301)

```diff
-           return tR(await JR.fetchDocsPage(null !== (GR = RR.args.url) && void 0 !== GR ? GR : ""));
+           return Wr(await Sr.fetchDocsPage(null !== (Qr = rr.args.url) && void 0 !== Qr ? Qr : ""));
```

#### 253. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6303-L6305` → after: `L6303-L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6303-L6305) · [Before (L6303-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6303-L6305)

```diff
-           var uR, ZR;
-           const GR = JR.docs.searchNames(null !== (uR = RR.args.words) && void 0 !== uR ? uR : "", 20);
-           return tR(GR.length > 0 ? GR.join(", ") : `No block, item or mob name has any of the words "${null!==(ZR=RR.args.words)&&void 0!==ZR?ZR:""}".`)
+           var ar, jr;
+           const Qr = Sr.docs.searchNames(null !== (ar = rr.args.words) && void 0 !== ar ? ar : "", 20);
+           return Wr(Qr.length > 0 ? Qr.join(", ") : `No block, item or mob name has any of the words "${null!==(jr=rr.args.words)&&void 0!==jr?jr:""}".`)
```

#### 254. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6308)

```diff
-           return tR(JR.errors.length > 0 ? JR.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return Wr(Sr.errors.length > 0 ? Sr.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 255. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6310` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6310) · [Before (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6310)

```diff
-           return tR(Ny(RR.args.category));
+           return Wr(qZ(rr.args.category));
```

#### 256. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6312-L6315` → after: `L6312-L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6312-L6315) · [Before (L6312-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6312-L6315)

```diff
-           return tR(function(RR, JR) {
-             const GR = void 0 === RR ? null : Cy(RR);
-             return GR ? Dy(GR, JR) : `There is no prefab called ${null!==RR&&void 0!==RR?RR:"that"}.\n${Ny()}`
-           }(RR.args.name, !0 === JR.showPrefabCode))
+           return Wr(function(rr, Sr) {
+             const Qr = void 0 === rr ? null : KZ(rr);
+             return Qr ? RZ(Qr, Sr) : `There is no prefab called ${null!==rr&&void 0!==rr?rr:"that"}.\n${qZ()}`
+           }(rr.args.name, !0 === Sr.showPrefabCode))
```

#### 257. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6317` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6317) · [Before (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6317)

```diff
-       var qR, iR
+       var Ir, fr
```

#### 258. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6319` → after: `L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6319) · [Before (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6319)

```diff
-     const mt = [
+     const kW = [
```

#### 259. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6345-L6402` → after: `L6345-L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6345-L6402) · [Before (L6345-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6345-L6402)

```diff
-     function zt(RR) {
-       let JR = RR;
-       for (const [GR, yR] of mt) JR = JR.replace(GR, (RR => RR.length > 1 && RR[0] !== RR[0].toLowerCase() && RR.slice(1) === RR.slice(1).toLowerCase() ? yR[0].toUpperCase() + yR.slice(1) : yR));
-       return JR
-     }
-     const St = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       jt = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       dt = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       Et = 12e3,
-       Yt = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function kt(RR) {
-       var JR, GR, yR;
-       const tR = null === (JR = /Safety:\s*(\w+)/.exec(RR)) || void 0 === JR ? void 0 : JR[1],
-         uR = null !== (GR = null === (yR = /Categories:\s*(.+)/.exec(RR)) || void 0 === yR ? void 0 : yR[1]) && void 0 !== GR ? GR : "";
-       return /PII/.test(uR) ? "personalInfo" : "Safe" === tR ? "ok" : "unsafe"
- ... (42 more removed lines; see GitHub link above)
+     function AW(rr) {
+       let Sr = rr;
+       for (const [Qr, Zr] of kW) Sr = Sr.replace(Qr, (rr => rr.length > 1 && rr[0] !== rr[0].toLowerCase() && rr.slice(1) === rr.slice(1).toLowerCase() ? Zr[0].toUpperCase() + Zr.slice(1) : Zr));
+       return Sr
+     }
+     const VW = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       iW = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       wW = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       cW = 12e3,
+       FW = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function oW(rr) {
+       var Sr, Qr, Zr;
+       const Wr = null === (Sr = /Safety:\s*(\w+)/.exec(rr)) || void 0 === Sr ? void 0 : Sr[1],
+         ar = null !== (Qr = null === (Zr = /Categories:\s*(.+)/.exec(rr)) || void 0 === Zr ? void 0 : Zr[1]) && void 0 !== Qr ? Qr : "";
+       return /PII/.test(ar) ? "personalInfo" : "Safe" === Wr ? "ok" : "unsafe"
+ ... (42 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6404-L6407` → after: `L6404-L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6404-L6407) · [Before (L6404-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6404-L6407)

```diff
-           if ("\n" === JR) break;
-           if (GR) GR = "]" !== JR;
-           else if ("[" === JR) GR = !0;
-           else if ("/" === JR) return yR + 1
+           if ("\n" === Sr) break;
+           if (Qr) Qr = "]" !== Sr;
+           else if ("[" === Sr) Qr = !0;
+           else if ("/" === Sr) return Zr + 1
```

#### 261. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6410-L6431` → after: `L6410-L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6410-L6431) · [Before (L6410-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6410-L6431)

```diff
-       return JR + 1
-     }
- 
-     function Ju(RR, JR, GR, yR) {
-       let tR = JR,
-         uR = 0;
-       for (; tR < RR.length;) {
-         const JR = RR[tR],
-           ZR = RR[tR + 1];
-         if ("/" === JR && "/" === ZR) {
-           const JR = RR.indexOf("\n", tR);
-           yR.push(RR.slice(tR + 2, -1 === JR ? RR.length : JR)), tR = -1 === JR ? RR.length : JR
-         } else if ("/" === JR && "*" === ZR) {
-           const JR = RR.indexOf("*/", tR + 2);
-           yR.push(RR.slice(tR + 2, -1 === JR ? RR.length : JR)), tR = -1 === JR ? RR.length : JR + 2
-         } else if ("/" === JR && ht(RR, tR)) tR = Ru(RR, tR);
- ... (6 more removed lines; see GitHub link above)
+       return Sr + 1
+     }
+ 
+     function ra(rr, Sr, Qr, Zr) {
+       let Wr = Sr,
+         ar = 0;
+       for (; Wr < rr.length;) {
+         const Sr = rr[Wr],
+           jr = rr[Wr + 1];
+         if ("/" === Sr && "/" === jr) {
+           const Sr = rr.indexOf("\n", Wr);
+           Zr.push(rr.slice(Wr + 2, -1 === Sr ? rr.length : Sr)), Wr = -1 === Sr ? rr.length : Sr
+         } else if ("/" === Sr && "*" === jr) {
+           const Sr = rr.indexOf("*/", Wr + 2);
+           Zr.push(rr.slice(Wr + 2, -1 === Sr ? rr.length : Sr)), Wr = -1 === Sr ? rr.length : Sr + 2
+         } else if ("/" === Sr && sW(rr, Wr)) Wr = uW(rr, Wr);
+ ... (6 more added lines; see GitHub link above)
```

#### 262. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6433-L6436` → after: `L6433-L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6433-L6436) · [Before (L6433-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6433-L6436)

```diff
-           if (GR && "{" === JR) uR++;
-           else if (GR && "}" === JR) {
-             if (0 === uR) return tR + 1;
-             uR--
+           if (Qr && "{" === Sr) ar++;
+           else if (Qr && "}" === Sr) {
+             if (0 === ar) return Wr + 1;
+             ar--
```

#### 263. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6438` → after: `L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6438) · [Before (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6438)

```diff
-           tR++
+           Wr++
```

#### 264. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6441` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6441) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6441)

```diff
-       return tR
+       return Wr
```

#### 265. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6443-L6447` → after: `L6443-L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6443-L6447) · [Before (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6443-L6447)

```diff
-     const Gu = 4e5;
-     var yu = GR(53499);
-     let tu = [],
-       uu = 0,
-       Zu = null;
+     const Sa = 4e5;
+     var Qa = Qr(54037);
+     let Za = [],
+       Wa = 0,
+       aa = null;
```

#### 266. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6449-L6450` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6449-L6450) · [Before (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6449-L6450)

```diff
-     function qu(RR) {
-       return Math.ceil(RR.length / 4)
+     function ja(rr) {
+       return Math.ceil(rr.length / 4)
```

#### 267. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6453-L6454` → after: `L6453-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6453-L6454) · [Before (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6453-L6454)

```diff
-     function iu(RR) {
-       return "number" === typeof RR && Number.isInteger(RR) && RR >= 0
+     function Ia(rr) {
+       return "number" === typeof rr && Number.isInteger(rr) && rr >= 0
```

#### 268. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6457-L6460` → after: `L6457-L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6457-L6460) · [Before (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6457-L6460)

```diff
-     function fu(RR, JR, GR) {
-       var yR;
-       let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ! function(RR) {
+     function fa(rr, Sr, Qr) {
+       var Zr;
+       let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(rr) {
```

#### 269. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6462-L6465` → after: `L6462-L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6462-L6465) · [Before (L6462-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6462-L6465)

```diff
-         if (tu.push(RR), tu.length >= 40) return void Ku();
-         Vu()
-       }(null !== (yR = function(RR) {
-         if (null === RR || "object" !== typeof RR) return null;
+         if (Za.push(rr), Za.length >= 40) return void pa();
+         Ea()
+       }(null !== (Zr = function(rr) {
+         if (null === rr || "object" !== typeof rr) return null;
```

#### 270. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6467-L6472` → after: `L6467-L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6467-L6472) · [Before (L6467-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6467-L6472)

```diff
-           prompt_tokens: JR,
-           completion_tokens: GR,
-           prompt_tokens_details: yR
-         } = RR;
-         if (!iu(JR) || !iu(GR)) return null;
-         const tR = null !== yR && "object" === typeof yR ? yR.cached_tokens : void 0;
+           prompt_tokens: Sr,
+           completion_tokens: Qr,
+           prompt_tokens_details: Zr
+         } = rr;
+         if (!Ia(Sr) || !Ia(Qr)) return null;
+         const Wr = null !== Zr && "object" === typeof Zr ? Zr.cached_tokens : void 0;
```

#### 271. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6474-L6476` → after: `L6474-L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6474-L6476) · [Before (L6474-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6474-L6476)

```diff
-           sent: JR,
-           cached: iu(tR) ? tR : 0,
-           received: GR
+           sent: Sr,
+           cached: Ia(Wr) ? Wr : 0,
+           received: Qr
```

#### 272. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6478-L6479` → after: `L6478-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6478-L6479) · [Before (L6478-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6478-L6479)

```diff
-       }(RR)) && void 0 !== yR ? yR : {
-         sent: qu(JSON.stringify(JR)),
+       }(rr)) && void 0 !== Zr ? Zr : {
+         sent: ja(JSON.stringify(Sr)),
```

#### 273. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6481` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6481) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6481)

```diff
-         received: qu(GR) + tR
+         received: ja(Qr) + Wr
```

#### 274. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6485-L6487` → after: `L6485-L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6485-L6487) · [Before (L6485-L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6485-L6487)

```diff
-     function Vu() {
-       Zu ??= setTimeout((() => {
-         Ku()
+     function Ea() {
+       aa ??= setTimeout((() => {
+         pa()
```

#### 275. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6490-L6494` → after: `L6490-L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6490-L6494) · [Before (L6490-L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6490-L6494)

```diff
-     async function Ku() {
-       null !== Zu && (clearTimeout(Zu), Zu = null);
-       const RR = tu.slice(0, 40);
-       tu = tu.slice(40), tu.length > 0 && (Zu = setTimeout((() => {
-         Ku()
+     async function pa() {
+       null !== aa && (clearTimeout(aa), aa = null);
+       const rr = Za.slice(0, 40);
+       Za = Za.slice(40), Za.length > 0 && (aa = setTimeout((() => {
+         pa()
```

#### 276. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6496-L6500` → after: `L6496-L6500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6496-L6500) · [Before (L6496-L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6496-L6500)

```diff
-       const JR = uu;
-       if (uu = 0, 0 !== RR.length || 0 !== JR) try {
-         await (0, yu.postToGameServer)("/ai-helper/usage", {
-           calls: RR,
-           pastes: JR
+       const Sr = Wa;
+       if (Wa = 0, 0 !== rr.length || 0 !== Sr) try {
+         await (0, Qa.postToGameServer)("/ai-helper/usage", {
+           calls: rr,
+           pastes: Sr
```

#### 277. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6504-L6505` → after: `L6504-L6505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6504-L6505) · [Before (L6504-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6504-L6505)

```diff
-     const wu = 6e4;
-     const ru = new class {
+     const xa = 6e4;
+     const ma = new class {
```

#### 278. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6509-L6511` → after: `L6509-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6509-L6511) · [Before (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6509-L6511)

```diff
-       record(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(RR, [...this.recent(RR, JR), JR])
+       record(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(rr, [...this.recent(rr, Sr), Sr])
```

#### 279. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6513-L6517` → after: `L6513-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6513-L6517) · [Before (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6513-L6517)

```diff
-       markFull(RR) {
-         var JR;
-         let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(RR, Math.max(null !== (JR = this.fullUntil.get(RR)) && void 0 !== JR ? JR : 0, GR + Math.max(yR, wu)))
+       markFull(rr) {
+         var Sr;
+         let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(rr, Math.max(null !== (Sr = this.fullUntil.get(rr)) && void 0 !== Sr ? Sr : 0, Qr + Math.max(Zr, xa)))
```

#### 280. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6519-L6521` → after: `L6519-L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6519-L6521) · [Before (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6519-L6521)

```diff
-       callsInLastMinute(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(RR, JR).length
+       callsInLastMinute(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(rr, Sr).length
```

#### 281. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6523-L6528` → after: `L6523-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6523-L6528) · [Before (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6523-L6528)

```diff
-       freeAt(RR) {
-         var JR;
-         let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const yR = this.recent(RR, GR),
-           tR = yR.length < 2 ? GR : yR[yR.length - 2] + wu;
-         return Math.max(tR, null !== (JR = this.fullUntil.get(RR)) && void 0 !== JR ? JR : 0, GR)
+       freeAt(rr) {
+         var Sr;
+         let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const Zr = this.recent(rr, Qr),
+           Wr = Zr.length < 2 ? Qr : Zr[Zr.length - 2] + xa;
+         return Math.max(Wr, null !== (Sr = this.fullUntil.get(rr)) && void 0 !== Sr ? Sr : 0, Qr)
```

#### 282. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6530-L6532` → after: `L6530-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6530-L6532) · [Before (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6530-L6532)

```diff
-       firstFreeAt(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...RR.map((RR => this.freeAt(RR, JR))))
+       firstFreeAt(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...rr.map((rr => this.freeAt(rr, Sr))))
```

#### 283. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6537-L6539` → after: `L6537-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6537-L6539) · [Before (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6537-L6539)

```diff
-       recent(RR, JR) {
-         var GR;
-         return (null !== (GR = this.calls.get(RR)) && void 0 !== GR ? GR : []).filter((RR => JR - RR < wu))
+       recent(rr, Sr) {
+         var Qr;
+         return (null !== (Qr = this.calls.get(rr)) && void 0 !== Qr ? Qr : []).filter((rr => Sr - rr < xa))
```

#### 284. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6543-L6544` → after: `L6543-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6543-L6544) · [Before (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6543-L6544)

```diff
-     function eu(RR) {
-       return RR > 36e5
+     function Na(rr) {
+       return rr > 36e5
```

#### 285. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6547-L6550` → after: `L6547-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6547-L6550) · [Before (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6547-L6550)

```diff
-     function au(RR, JR) {
-       var GR;
-       const yR = null === (GR = RR.headers.get(JR)) || void 0 === GR ? void 0 : GR.trim();
-       return void 0 !== yR && /^\d+$/.test(yR) ? Number(yR) : null
+     function Ua(rr, Sr) {
+       var Qr;
+       const Zr = null === (Qr = rr.headers.get(Sr)) || void 0 === Qr ? void 0 : Qr.trim();
+       return void 0 !== Zr && /^\d+$/.test(Zr) ? Number(Zr) : null
```

#### 286. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6553-L6556` → after: `L6553-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6553-L6556) · [Before (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6553-L6556)

```diff
-     function Lu(RR) {
-       var JR;
-       const GR = null !== (JR = au(RR, "retry-after")) && void 0 !== JR ? JR : au(RR, "ratelimit-reset");
-       return null === GR ? null : 1e3 * GR
+     function ta(rr) {
+       var Sr;
+       const Qr = null !== (Sr = Ua(rr, "retry-after")) && void 0 !== Sr ? Sr : Ua(rr, "ratelimit-reset");
+       return null === Qr ? null : 1e3 * Qr
```

#### 287. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6559-L6562` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6559-L6562) · [Before (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6559-L6562)

```diff
-     function nu(RR, JR) {
-       var GR;
-       const yR = null !== (GR = Lu(JR)) && void 0 !== GR ? GR : 0;
-       (429 === JR.status || eu(yR) && 0 === au(JR, "ratelimit-remaining")) && ru.markFull(RR, Date.now(), yR)
+     function ha(rr, Sr) {
+       var Qr;
+       const Zr = null !== (Qr = ta(Sr)) && void 0 !== Qr ? Qr : 0;
+       (429 === Sr.status || Na(Zr) && 0 === Ua(Sr, "ratelimit-remaining")) && ma.markFull(rr, Date.now(), Zr)
```

#### 288. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6565-L6568` → after: `L6565-L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6565-L6568) · [Before (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6565-L6568)

```diff
-     function Uu(RR) {
-       const JR = Date.now(),
-         GR = ru.freeAt(RR, JR) - JR;
-       return GR <= 0 ? null : eu(GR) ? "unavailable" : "busy"
+     function za(rr) {
+       const Sr = Date.now(),
+         Qr = ma.freeAt(rr, Sr) - Sr;
+       return Qr <= 0 ? null : Na(Qr) ? "unavailable" : "busy"
```

#### 289. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6571-L6572` → after: `L6571-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6571-L6572) · [Before (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6571-L6572)

```diff
-     function Wu(RR, JR) {
-       return `${function(RR){var JR;if("string"===typeof RR)return RR;if(429!==RR.status)return`http-${RR.status}`;if(eu(null!==(JR=Lu(RR))&&void 0!==JR?JR:0))return"yearly-limit";const GR=au(RR,"retry-after");return null===GR?"busy":`busy-ra${GR}`}(JR)}__${RR.replace(/[^A-Za-z0- … [truncated]
+     function Ya(rr, Sr) {
+       return `${function(rr){var Sr;if("string"===typeof rr)return rr;if(429!==rr.status)return`http-${rr.status}`;if(Na(null!==(Sr=ta(rr))&&void 0!==Sr?Sr:0))return"yearly-limit";const Qr=Ua(rr,"retry-after");return null===Qr?"busy":`busy-ra${Qr}`}(Sr)}__${rr.replace(/[^A-Za-z0- … [truncated]
```

#### 290. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6574-L6576` → after: `L6574-L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6574-L6576) · [Before (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6574-L6576)

```diff
-     const Au = new class {
-         constructor(RR) {
-           this.loadReporter = RR, this.reportedCodes = new Set
+     const na = new class {
+         constructor(rr) {
+           this.loadReporter = rr, this.reportedCodes = new Set
```

#### 291. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6578-L6580` → after: `L6578-L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6578-L6580) · [Before (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6578-L6580)

```diff
-         fK(RR, JR) {
-           const GR = Wu(RR, JR);
-           "undefined" === typeof window || this.reportedCodes.has(GR) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(GR), this.loadReporter().then((JR => {
+         jx(rr, Sr) {
+           const Qr = Ya(rr, Sr);
+           "undefined" === typeof window || this.reportedCodes.has(Qr) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(Qr), this.loadReporter().then((Sr => {
```

#### 292. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6582-L6586` → after: `L6582-L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6582-L6586) · [Before (L6582-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6582-L6586)

```diff
-               reportCappedWasmFailure: yR
-             } = JR;
-             yR("ai_helper_failed", `World Code AI: ${RR} failed`, GR)
-           })).catch((RR => {
-             console.error("World Code AI: couldn't report a failure", RR)
+               reportCappedWasmFailure: Zr
+             } = Sr;
+             Zr("ai_helper_failed", `World Code AI: ${rr} failed`, Qr)
+           })).catch((rr => {
+             console.error("World Code AI: couldn't report a failure", rr)
```

#### 293. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6589-L6601` → after: `L6589-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6589-L6601) · [Before (L6589-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6589-L6601)

```diff
-       }((() => GR.e(218).then((() => GR(34980))))),
-       Cu = /\n{3,}/,
-       Xu = /<tool_call\b|<function=/;
- 
-     function Mu(RR) {
-       const JR = RR.trimStart(),
-         GR = Cu.exec(JR),
-         yR = Xu.exec(JR);
-       if (null === GR || null !== yR && yR.index < GR.index) return null;
-       const tR = JR.slice(GR.index + GR[0].length);
-       return "" === tR.trim() ? null : tR
-     }
-     const Bu = [{
+       }((() => Qr.e(218).then((() => Qr(35287))))),
+       ea = /\n{3,}/,
+       Ka = /<tool_call\b|<function=/;
+ 
+     function ya(rr) {
+       const Sr = rr.trimStart(),
+         Qr = ea.exec(Sr),
+         Zr = Ka.exec(Sr);
+       if (null === Qr || null !== Zr && Zr.index < Qr.index) return null;
+       const Wr = Sr.slice(Qr.index + Qr[0].length);
+       return "" === Wr.trim() ? null : Wr
+     }
+     const Ba = [{
```

#### 294. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6620` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6620) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6620)

```diff
-     const lu = {
+     const Ta = {
```

#### 295. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6627-L6628` → after: `L6627-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6627-L6628) · [Before (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6627-L6628)

```diff
-     function pu(RR) {
-       return [...Bu, lu].find((JR => JR.name === RR))
+     function va(rr) {
+       return [...Ba, Ta].find((Sr => Sr.name === rr))
```

#### 296. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6631-L6633` → after: `L6631-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6631-L6633) · [Before (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6631-L6633)

```diff
-     function gu(RR) {
-       var JR, GR;
-       return null !== (JR = null === (GR = pu(RR)) || void 0 === GR ? void 0 : GR.callFormat) && void 0 !== JR ? JR : "simple"
+     function Oa(rr) {
+       var Sr, Qr;
+       return null !== (Sr = null === (Qr = va(rr)) || void 0 === Qr ? void 0 : Qr.callFormat) && void 0 !== Sr ? Sr : "simple"
```

#### 297. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6636-L6637` → after: `L6636-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6636-L6637) · [Before (L6636-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6636-L6637)

```diff
-     function bu(RR) {
-       var JR;
+     function La(rr) {
+       var Sr;
```

#### 298. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6639-L6640` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6639-L6640) · [Before (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6639-L6640)

```diff
-         format: null !== (JR = RR.callFormat) && void 0 !== JR ? JR : "simple",
-         nativeTools: !0 === RR.nativeTools
+         format: null !== (Sr = rr.callFormat) && void 0 !== Sr ? Sr : "simple",
+         nativeTools: !0 === rr.nativeTools
```

#### 299. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6644-L6645` → after: `L6644-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6644-L6645) · [Before (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6644-L6645)

```diff
-     function vu(RR, JR) {
-       return "function" === typeof RR ? RR(JR) : RR
+     function la(rr, Sr) {
+       return "function" === typeof rr ? rr(Sr) : rr
```

#### 300. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6647-L6653` → after: `L6647-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6647-L6653) · [Before (L6647-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6647-L6653)

```diff
-     const Ou = "TOO_COMPLEX",
-       xu = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Ou} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       Nu = 24e4,
-       Du = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class Hu extends Error {
-       constructor(RR) {
-         super(`World Code AI ${RR}`), this.reason = RR
+     const Xa = "TOO_COMPLEX",
+       Pa = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Xa} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       Ha = 24e4,
+       qa = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class Ra extends Error {
+       constructor(rr) {
+         super(`World Code AI ${rr}`), this.reason = rr
```

#### 301. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6657-L6659` → after: `L6657-L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6657-L6659) · [Before (L6657-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6657-L6659)

```diff
-     function ou(RR, JR) {
-       var GR, yR, tR, uR, ZR;
-       const qR = RR[null !== (GR = JR.index) && void 0 !== GR ? GR : 0] ??= {
+     function ga(rr, Sr) {
+       var Qr, Zr, Wr, ar, jr;
+       const Ir = rr[null !== (Qr = Sr.index) && void 0 !== Qr ? Qr : 0] ??= {
```

#### 302. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6663)

```diff
-       qR.name += null !== (yR = null === (tR = JR.function) || void 0 === tR ? void 0 : tR.name) && void 0 !== yR ? yR : "", qR.args += null !== (uR = null === (ZR = JR.function) || void 0 === ZR ? void 0 : ZR.arguments) && void 0 !== uR ? uR : ""
+       Ir.name += null !== (Zr = null === (Wr = Sr.function) || void 0 === Wr ? void 0 : Wr.name) && void 0 !== Zr ? Zr : "", Ir.args += null !== (ar = null === (jr = Sr.function) || void 0 === jr ? void 0 : jr.arguments) && void 0 !== ar ? ar : ""
```

#### 303. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6666-L6667` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6666-L6667) · [Before (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6666-L6667)

```diff
-     function cu(RR) {
-       return "mcp" === RR ? "simple" : RR
+     function Ca(rr) {
+       return "mcp" === rr ? "simple" : rr
```

#### 304. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6670-L6672` → after: `L6670-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6670-L6672) · [Before (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6670-L6672)

```diff
-     function Pu(RR, JR, GR, yR) {
-       let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return Iu(RR, JR, GR, cu(yR), tR).answer
+     function Ma(rr, Sr, Qr, Zr) {
+       let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return Ga(rr, Sr, Qr, Ca(Zr), Wr).answer
```

#### 305. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6675-L6678` → after: `L6675-L6678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6675-L6678) · [Before (L6675-L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6675-L6678)

```diff
-     function Iu(RR, JR, GR, yR, tR) {
-       const uR = GR.flatMap((RR => {
-         const JR = wG(RR.name, RR.args);
-         return null === JR ? [] : [qt(yG(yR), JR.name, JR.args)]
+     function Ga(rr, Sr, Qr, Zr, Wr) {
+       const ar = Qr.flatMap((rr => {
+         const Sr = mQ(rr.name, rr.args);
+         return null === Sr ? [] : [IW(ZQ(Zr), Sr.name, Sr.args)]
```

#### 306. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6680-L6687` → after: `L6680-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6680-L6687) · [Before (L6680-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6680-L6687)

```diff
-       let ZR = !1;
-       return 0 !== uR.length || 0 !== eG(RR, yR).length || RR.includes("```") || (uR.push(...tR ? [] : function(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const yR = new Map;
-         for (const qR of rG(RR, JR)) {
-           const RR = Object.values(qR.args).some((RR => void 0 !== RR && GR.includes(RR.trim())));
-           var tR, uR, ZR;
-           "export_game" === qR.name || "switch_to_world_code" === qR.name || BJ(qR.name) || RR || yR.set(`${qR.name} ${null!==(tR=qR.args.path)&&void 0!==tR?tR:""} ${null!==(uR=qR.args.search)&&void 0!==uR?uR:""} ${null!==(ZR=qR.args.name)&&void 0!==ZR?ZR:""}`, qR.source)
+       let jr = !1;
+       return 0 !== ar.length || 0 !== UQ(rr, Zr).length || rr.includes("```") || (ar.push(...Wr ? [] : function(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const Zr = new Map;
+         for (const Ir of NQ(rr, Sr)) {
+           const rr = Object.values(Ir.args).some((rr => void 0 !== rr && Qr.includes(rr.trim())));
+           var Wr, ar, jr;
+           "export_game" === Ir.name || "switch_to_world_code" === Ir.name || TS(Ir.name) || rr || Zr.set(`${Ir.name} ${null!==(Wr=Ir.args.path)&&void 0!==Wr?Wr:""} ${null!==(ar=Ir.args.search)&&void 0!==ar?ar:""} ${null!==(jr=Ir.args.name)&&void 0!==jr?jr:""}`, Ir.source)
```

#### 307. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6689-L6692` → after: `L6689-L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6689-L6692) · [Before (L6689-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6689-L6692)

```diff
-         return [...new Set(yR.values())]
-       }(JR, yR, At)), ZR = uR.length > 0), {
-         answer: [RR, ...uR].join("\n\n").trim(),
-         hasCallsFromReasoning: ZR
+         return [...new Set(Zr.values())]
+       }(Sr, Zr, nW)), jr = ar.length > 0), {
+         answer: [rr, ...ar].join("\n\n").trim(),
+         hasCallsFromReasoning: jr
```

#### 308. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6695-L6698` → after: `L6695-L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6695-L6698) · [Before (L6695-L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6695-L6698)

```diff
-     async function mu(RR, JR) {
-       const GR = RR.getReader(),
-         yR = new TextDecoder;
-       let tR = "";
+     async function ka(rr, Sr) {
+       const Qr = rr.getReader(),
+         Zr = new TextDecoder;
+       let Wr = "";
```

#### 309. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6701-L6705` → after: `L6701-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6701-L6705) · [Before (L6701-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6701-L6705)

```diff
-           done: RR,
-           value: uR
-         } = await GR.read();
-         if (RR) break;
-         tR += yR.decode(uR, {
+           done: rr,
+           value: ar
+         } = await Qr.read();
+         if (rr) break;
+         Wr += Zr.decode(ar, {
```

#### 310. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6708-L6714` → after: `L6708-L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6708-L6714) · [Before (L6708-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6708-L6714)

```diff
-         let ZR = tR.indexOf("\n");
-         for (; - 1 !== ZR;) {
-           const RR = tR.slice(0, ZR).trim();
-           if (tR = tR.slice(ZR + 1), ZR = tR.indexOf("\n"), !RR.startsWith("data:")) continue;
-           const GR = RR.slice(5).trim();
-           if ("[DONE]" === GR) return;
-           let yR;
+         let jr = Wr.indexOf("\n");
+         for (; - 1 !== jr;) {
+           const rr = Wr.slice(0, jr).trim();
+           if (Wr = Wr.slice(jr + 1), jr = Wr.indexOf("\n"), !rr.startsWith("data:")) continue;
+           const Qr = rr.slice(5).trim();
+           if ("[DONE]" === Qr) return;
+           let Zr;
```

#### 311. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6716` → after: `L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6716) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6716)

```diff
-             yR = JSON.parse(GR)
+             Zr = JSON.parse(Qr)
```

#### 312. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6720` → after: `L6720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6720) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6720)

```diff
-           JR(yR)
+           Sr(Zr)
```

#### 313. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6725-L6726` → after: `L6725-L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6725-L6726) · [Before (L6725-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6725-L6726)

```diff
-     function zu(RR) {
-       return RR.map((RR => ({
+     function Aa(rr) {
+       return rr.map((rr => ({
```

#### 314. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6729-L6731` → after: `L6729-L6731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6729-L6731) · [Before (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6729-L6731)

```diff
-           name: RR.name,
-           description: RR.description,
-           parameters: RR.inputSchema
+           name: rr.name,
+           description: rr.description,
+           parameters: rr.inputSchema
```

#### 315. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6736-L6737` → after: `L6736-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6736-L6737) · [Before (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6736-L6737)

```diff
-     function Su(RR) {
-       return "object" === typeof RR
+     function Va(rr) {
+       return "object" === typeof rr
```

#### 316. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6739-L6744` → after: `L6739-L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6739-L6744) · [Before (L6739-L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6739-L6744)

```diff
-     async function ju(RR, JR, GR, yR) {
-       let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const uR = Uu(RR.name);
-       if (null !== uR) return uR;
-       ru.record(RR.name);
-       const ZR = await fetch(St, {
+     async function ia(rr, Sr, Qr, Zr) {
+       let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const ar = za(rr.name);
+       if (null !== ar) return ar;
+       ma.record(rr.name);
+       const jr = await fetch(VW, {
```

#### 317. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6750-L6751` → after: `L6750-L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6750-L6751) · [Before (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6750-L6751)

```diff
-           model: RR.name,
-           messages: JR,
+           model: rr.name,
+           messages: Sr,
```

#### 318. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6753-L6754` → after: `L6753-L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6753-L6754) · [Before (L6753-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6753-L6754)

```diff
-           temperature: RR.temperature,
-           reasoning_effort: RR.reasoningEffort,
+           temperature: rr.temperature,
+           reasoning_effort: rr.reasoningEffort,
```

#### 319. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6759-L6760` → after: `L6759-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6759-L6760) · [Before (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6759-L6760)

```diff
-           ...RR.nativeTools && tR.length > 0 ? {
-             tools: zu(tR)
+           ...rr.nativeTools && Wr.length > 0 ? {
+             tools: Aa(Wr)
```

#### 320. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6765` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6765) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6765)

```diff
-         signal: GR
+         signal: Qr
```

#### 321. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6767-L6775` → after: `L6767-L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6767-L6775) · [Before (L6767-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6767-L6775)

```diff
-       if (nu(RR.name, ZR), 429 === ZR.status) return Au.fK(RR.name, ZR), "unavailable" === Uu(RR.name) ? "unavailable" : "busy";
-       if (!ZR.ok || !ZR.body) return console.warn(`World Code AI: ${RR.name} answered ${ZR.status}`), Au.fK(RR.name, ZR.ok ? "empty" : ZR), ZR.ok ? "failed" : 429 === (qR = ZR.status) ? "busy" : 400 === qR || 413 === qR ? "tooLarge" : 401 === qR || 403 === qR ? "turnedAway" : "fa … [truncated]
-       var qR;
-       let iR = "",
-         fR = "";
-       const VR = [];
-       let KR = !1,
-         wR = !1,
-         rR = null;
+       if (ha(rr.name, jr), 429 === jr.status) return na.jx(rr.name, jr), "unavailable" === za(rr.name) ? "unavailable" : "busy";
+       if (!jr.ok || !jr.body) return console.warn(`World Code AI: ${rr.name} answered ${jr.status}`), na.jx(rr.name, jr.ok ? "empty" : jr), jr.ok ? "failed" : 429 === (Ir = jr.status) ? "busy" : 400 === Ir || 413 === Ir ? "tooLarge" : 401 === Ir || 403 === Ir ? "turnedAway" : "fa … [truncated]
+       var Ir;
+       let fr = "",
+         Er = "";
+       const pr = [];
+       let xr = !1,
+         mr = !1,
+         Nr = null;
```

#### 322. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6777-L6783` → after: `L6777-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6777-L6783) · [Before (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6777-L6783)

```diff
-         await async function(RR, JR, GR) {
-           await mu(RR, (RR => {
-             var yR;
-             const tR = RR,
-               uR = null === (yR = tR.choices) || void 0 === yR ? void 0 : yR[0];
-             var ZR, qR;
-             uR && JR(null !== (ZR = uR.delta) && void 0 !== ZR ? ZR : {}, null !== (qR = uR.finish_reason) && void 0 !== qR ? qR : null), tR.usage && (null === GR || void 0 === GR || GR(tR.usage))
+         await async function(rr, Sr, Qr) {
+           await ka(rr, (rr => {
+             var Zr;
+             const Wr = rr,
+               ar = null === (Zr = Wr.choices) || void 0 === Zr ? void 0 : Zr[0];
+             var jr, Ir;
+             ar && Sr(null !== (jr = ar.delta) && void 0 !== jr ? jr : {}, null !== (Ir = ar.finish_reason) && void 0 !== Ir ? Ir : null), Wr.usage && (null === Qr || void 0 === Qr || Qr(Wr.usage))
```

#### 323. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6785-L6790` → after: `L6785-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6785-L6790) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6785-L6790)

```diff
-         }(ZR.body, ((JR, GR) => {
-           var tR, uR, ZR, qR;
-           KR ||= "length" === GR, fR += null !== (tR = null !== (uR = JR.reasoning) && void 0 !== uR ? uR : JR.reasoning_content) && void 0 !== tR ? tR : "", iR += null !== (ZR = JR.content) && void 0 !== ZR ? ZR : "";
-           for (const RR of null !== (rR = JR.tool_calls) && void 0 !== rR ? rR : []) {
-             var rR;
-             wR ||= "" !== fR && "" === iR.trim(), ou(VR, RR)
+         }(jr.body, ((Sr, Qr) => {
+           var Wr, ar, jr, Ir;
+           xr ||= "length" === Qr, Er += null !== (Wr = null !== (ar = Sr.reasoning) && void 0 !== ar ? ar : Sr.reasoning_content) && void 0 !== Wr ? Wr : "", fr += null !== (jr = Sr.content) && void 0 !== jr ? jr : "";
+           for (const rr of null !== (Nr = Sr.tool_calls) && void 0 !== Nr ? Nr : []) {
+             var Nr;
+             mr ||= "" !== Er && "" === fr.trim(), ga(pr, rr)
```

#### 324. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6792-L6797` → after: `L6792-L6797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6792-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6792-L6797) · [Before (L6792-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6792-L6797)

```diff
-           const eR = RR.nativeTools && wR ? null !== (qR = Mu(iR)) && void 0 !== qR ? qR : "" : iR;
-           null === yR || void 0 === yR || yR({
-             model: RR.name,
-             reasoningChars: fR.length,
-             answer: eR,
-             isCalling: VR.length > 0
+           const Ur = rr.nativeTools && mr ? null !== (Ir = ya(fr)) && void 0 !== Ir ? Ir : "" : fr;
+           null === Zr || void 0 === Zr || Zr({
+             model: rr.name,
+             reasoningChars: Er.length,
+             answer: Ur,
+             isCalling: pr.length > 0
```

#### 325. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6799-L6800` → after: `L6799-L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6799-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6799-L6800) · [Before (L6799-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6799-L6800)

```diff
-         }), (RR => {
-           rR = RR
+         }), (rr => {
+           Nr = rr
```

#### 326. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6803` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6803) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6803)

```diff
-         fu(rR, JR, iR + fR, 20 * VR.length)
+         fa(Nr, Sr, fr + Er, 20 * pr.length)
```

#### 327. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6805-L6822` → after: `L6805-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6805-L6822) · [Before (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6805-L6822)

```diff
-       const eR = du(RR, iR, fR, VR, KR, wR);
-       return null === eR ? (Au.fK(RR.name, "empty"), "failed") : eR
-     }
- 
-     function du(RR, JR, GR, yR, tR) {
-       var uR;
-       let ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         qR = JR;
-       var iR;
-       RR.nativeTools && ZR && (qR = null !== (iR = Mu(qR)) && void 0 !== iR ? iR : qR);
-       qR = qR.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const fR = Iu(qR, GR, yR, null !== (uR = RR.callFormat) && void 0 !== uR ? uR : "simple", tR);
-       return "" === fR.answer ? null : {
-         model: RR.name,
-         answer: fR.answer,
-         reasoning: GR,
- ... (2 more removed lines; see GitHub link above)
+       const Ur = wa(rr, fr, Er, pr, xr, mr);
+       return null === Ur ? (na.jx(rr.name, "empty"), "failed") : Ur
+     }
+ 
+     function wa(rr, Sr, Qr, Zr, Wr) {
+       var ar;
+       let jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Ir = Sr;
+       var fr;
+       rr.nativeTools && jr && (Ir = null !== (fr = ya(Ir)) && void 0 !== fr ? fr : Ir);
+       Ir = Ir.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const Er = Ga(Ir, Qr, Zr, null !== (ar = rr.callFormat) && void 0 !== ar ? ar : "simple", Wr);
+       return "" === Er.answer ? null : {
+         model: rr.name,
+         answer: Er.answer,
+         reasoning: Qr,
+ ... (2 more added lines; see GitHub link above)
```

#### 328. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6826-L6827` → after: `L6826-L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6826-L6827) · [Before (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6826-L6827)

```diff
-     function Eu(RR) {
-       return RR.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     function ca(rr) {
+       return rr.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 329. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6830-L6831` → after: `L6830-L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6830-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6830-L6831) · [Before (L6830-L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6830-L6831)

```diff
-     function Yu(RR) {
-       return Su(RR) && !RR.isCutShort
+     function Fa(rr) {
+       return Va(rr) && !rr.isCutShort
```

#### 330. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6833-L6836` → after: `L6833-L6836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6833-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6833-L6836) · [Before (L6833-L6836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6833-L6836)

```diff
-     async function ku(RR, JR, GR, yR, tR) {
-       const uR = RR.map((() => new AbortController)),
-         ZR = () => {
-           for (const RR of uR) RR.abort()
+     async function oa(rr, Sr, Qr, Zr, Wr) {
+       const ar = rr.map((() => new AbortController)),
+         jr = () => {
+           for (const rr of ar) rr.abort()
```

#### 331. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6838` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6838) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6838)

```diff
-       null !== GR && void 0 !== GR && GR.aborted && ZR(), null === GR || void 0 === GR || GR.addEventListener("abort", ZR, {
+       null !== Qr && void 0 !== Qr && Qr.aborted && jr(), null === Qr || void 0 === Qr || Qr.addEventListener("abort", jr, {
```

#### 332. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6841-L6855` → after: `L6841-L6855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6841-L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6841-L6855) · [Before (L6841-L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6841-L6855)

```diff
-       const qR = RR.map((() => {})),
-         iR = RR.map((() => {}));
-       let fR = null;
-       const VR = RR => void 0 !== RR && ("" !== Eu(RR.answer).trim() || !0 === RR.isCalling);
-       let KR = () => {};
-       RR.forEach(((RR, GR) => {
-         const ZR = (0, UR.e)(Nu, uR[GR].signal);
-         ju(RR, vu(JR, RR), ZR.signal, (RR => {
-           iR[GR] = RR, null === fR && VR(RR) && (fR = GR), fR === GR && (null === yR || void 0 === yR || yR(RR))
-         }), tR).catch((JR => {
-           if (uR[GR].signal.aborted) return "failed";
-           const yR = ZR.signal.aborted;
-           return console.warn(`World Code AI: ${RR.name} ${yR?"took longer than 240 s":"couldn't be reached"}`, JR), Au.fK(RR.name, yR ? "timeout" : "network"), yR ? "timeout" : "failed"
-         })).then((RR => {
-           ZR.clear(), qR[GR] = RR, fR !== GR || Yu(RR) || (fR = null), KR()
+       const Ir = rr.map((() => {})),
+         fr = rr.map((() => {}));
+       let Er = null;
+       const pr = rr => void 0 !== rr && ("" !== ca(rr.answer).trim() || !0 === rr.isCalling);
+       let xr = () => {};
+       rr.forEach(((rr, Qr) => {
+         const jr = (0, Yr.d)(Ha, ar[Qr].signal);
+         ia(rr, la(Sr, rr), jr.signal, (rr => {
+           fr[Qr] = rr, null === Er && pr(rr) && (Er = Qr), Er === Qr && (null === Zr || void 0 === Zr || Zr(rr))
+         }), Wr).catch((Sr => {
+           if (ar[Qr].signal.aborted) return "failed";
+           const Zr = jr.signal.aborted;
+           return console.warn(`World Code AI: ${rr.name} ${Zr?"took longer than 240 s":"couldn't be reached"}`, Sr), na.jx(rr.name, Zr ? "timeout" : "network"), Zr ? "timeout" : "failed"
+         })).then((rr => {
+           jr.clear(), Ir[Qr] = rr, Er !== Qr || Fa(rr) || (Er = null), xr()
```

#### 333. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6858-L6863` → after: `L6858-L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6858-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6858-L6863) · [Before (L6858-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6858-L6863)

```diff
-       const wR = () => {
-         var RR;
-         if (null !== fR) {
-           const RR = qR[fR];
-           return Yu(RR) ? {
-             reply: RR
+       const mr = () => {
+         var rr;
+         if (null !== Er) {
+           const rr = Ir[Er];
+           return Fa(rr) ? {
+             reply: rr
```

#### 334. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6866-L6868` → after: `L6866-L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6866-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6866-L6868) · [Before (L6866-L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6866-L6868)

```diff
-         const JR = qR.find(Yu);
-         if (JR) return {
-           reply: JR
+         const Sr = Ir.find(Fa);
+         if (Sr) return {
+           reply: Sr
```

#### 335. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6870-L6871` → after: `L6870-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6870-L6871) · [Before (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6870-L6871)

```diff
-         if (!qR.includes(void 0)) return {
-           reply: null !== (RR = qR.find(Su)) && void 0 !== RR ? RR : null
+         if (!Ir.includes(void 0)) return {
+           reply: null !== (rr = Ir.find(Va)) && void 0 !== rr ? rr : null
```

#### 336. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6874-L6878` → after: `L6874-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6874-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6874-L6878) · [Before (L6874-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6874-L6878)

```diff
-           const RR = qR.findIndex(((RR, JR) => void 0 === RR && VR(iR[JR])));
-           if (-1 !== RR) {
-             fR = RR;
-             const JR = iR[RR];
-             JR && (null === yR || void 0 === yR || yR(JR))
+           const rr = Ir.findIndex(((rr, Sr) => void 0 === rr && pr(fr[Sr])));
+           if (-1 !== rr) {
+             Er = rr;
+             const Sr = fr[rr];
+             Sr && (null === Zr || void 0 === Zr || Zr(Sr))
```

#### 337. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6884-L6887` → after: `L6884-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6884-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6884-L6887) · [Before (L6884-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6884-L6887)

```diff
-           if (null !== GR && void 0 !== GR && GR.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const RR = wR();
-           if (RR) {
-             const JR = qR.filter((RR => "string" === typeof RR));
+           if (null !== Qr && void 0 !== Qr && Qr.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const rr = mr();
+           if (rr) {
+             const Sr = Ir.filter((rr => "string" === typeof rr));
```

#### 338. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6889-L6890` → after: `L6889-L6890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6889-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6889-L6890) · [Before (L6889-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6889-L6890)

```diff
-               reply: RR.reply,
-               failures: JR
+               reply: rr.reply,
+               failures: Sr
```

#### 339. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6893-L6894` → after: `L6893-L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6893-L6894) · [Before (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6893-L6894)

```diff
-           await new Promise((RR => {
-             KR = RR
+           await new Promise((rr => {
+             xr = rr
```

#### 340. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6898` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6898) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6898)

```diff
-         null === GR || void 0 === GR || GR.removeEventListener("abort", ZR), ZR()
+         null === Qr || void 0 === Qr || Qr.removeEventListener("abort", jr), jr()
```

#### 341. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6902-L6917` → after: `L6902-L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6902-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6902-L6917) · [Before (L6902-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6902-L6917)

```diff
-     function Qu() {
-       let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-       const JR = ru.firstFreeAt(Bu.map((RR => RR.name)), RR);
-       return eu(JR - RR) ? RR : JR
-     }
-     async function Fu(RR) {
-       var JR;
-       let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const yR = Date.now(),
-         tR = null !== (JR = GR.models) && void 0 !== JR ? JR : Bu,
-         uR = void 0 === GR.models ? function(RR, JR) {
-           let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const yR = RR.map((RR => ({
-               model: RR,
-               key: GR()
-             }))).sort(((RR, JR) => RR.key - JR.key)).map((RR => {
+     function ba() {
+       let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const Sr = ma.firstFreeAt(Ba.map((rr => rr.name)), rr);
+       return Na(Sr - rr) ? rr : Sr
+     }
+     async function Ja(rr) {
+       var Sr;
+       let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const Zr = Date.now(),
+         Wr = null !== (Sr = Qr.models) && void 0 !== Sr ? Sr : Ba,
+         ar = void 0 === Qr.models ? function(rr, Sr) {
+           let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const Zr = rr.map((rr => ({
+               model: rr,
+               key: Qr()
+             }))).sort(((rr, Sr) => rr.key - Sr.key)).map((rr => {
```

#### 342. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6919-L6921` → after: `L6919-L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6919-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6919-L6921) · [Before (L6919-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6919-L6921)

```diff
-                 model: JR
-               } = RR;
-               return JR
+                 model: Sr
+               } = rr;
+               return Sr
```

#### 343. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6923-L6937` → after: `L6923-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6923-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6923-L6937) · [Before (L6923-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6923-L6937)

```diff
-             tR = [],
-             uR = [];
-           for (const iR of yR) JR(iR) ? tR.push(iR) : uR.push(iR);
-           const ZR = [...tR, ...uR],
-             qR = [];
-           for (let iR = 0; iR < ZR.length; iR += 2) qR.push(ZR.slice(iR, iR + 2));
-           return qR
-         }(tR, (RR => ru.freeAt(RR.name, yR) <= yR)) : tR.map((RR => [RR])),
-         ZR = [];
-       for (const iR of uR) {
-         const JR = await ku(iR, RR, GR.signal, GR.onProgress, GR.tools);
-         if (null !== JR.reply) {
-           const tR = iR.find((RR => {
-             var GR;
-             return RR.name === (null === (GR = JR.reply) || void 0 === GR ? void 0 : GR.model)
+             Wr = [],
+             ar = [];
+           for (const fr of Zr) Sr(fr) ? Wr.push(fr) : ar.push(fr);
+           const jr = [...Wr, ...ar],
+             Ir = [];
+           for (let fr = 0; fr < jr.length; fr += 2) Ir.push(jr.slice(fr, fr + 2));
+           return Ir
+         }(Wr, (rr => ma.freeAt(rr.name, Zr) <= Zr)) : Wr.map((rr => [rr])),
+         jr = [];
+       for (const fr of ar) {
+         const Sr = await oa(fr, rr, Qr.signal, Qr.onProgress, Qr.tools);
+         if (null !== Sr.reply) {
+           const Wr = fr.find((rr => {
+             var Qr;
+             return rr.name === (null === (Qr = Sr.reply) || void 0 === Qr ? void 0 : Qr.model)
```

#### 344. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6940-L6941` → after: `L6940-L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6940-L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6940-L6941) · [Before (L6940-L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6940-L6941)

```diff
-             ...tR && !1 !== GR.canNudge ? await hu(tR, vu(RR, tR), JR.reply, GR.signal, GR.onProgress, GR.tools) : JR.reply,
-             ms: Date.now() - yR
+             ...Wr && !1 !== Qr.canNudge ? await sa(Wr, la(rr, Wr), Sr.reply, Qr.signal, Qr.onProgress, Qr.tools) : Sr.reply,
+             ms: Date.now() - Zr
```

#### 345. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6944` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6944) · [Before (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6944)

```diff
-         ZR.push(...JR.failures)
+         jr.push(...Sr.failures)
```

#### 346. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6946-L6947` → after: `L6946-L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6946-L6947) · [Before (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6946-L6947)

```diff
-       const qR = Du.find((RR => ZR.includes(RR)));
-       throw new Hu(null !== qR && void 0 !== qR ? qR : "failed")
+       const Ir = qa.find((rr => jr.includes(rr)));
+       throw new Ra(null !== Ir && void 0 !== Ir ? Ir : "failed")
```

#### 347. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6949` → after: `L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6949) · [Before (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6949)

```diff
-     const Tu = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const Da = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 348. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6951-L6953` → after: `L6951-L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6951-L6953) · [Before (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6951-L6953)

```diff
-     function su(RR) {
-       const JR = RR.trim();
-       return JR.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(JR) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(JR) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function da(rr) {
+       const Sr = rr.trim();
+       return Sr.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(Sr) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(Sr) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6960` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6960) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6960)

```diff
-         }(GR, null !== (ZR = RR.callFormat) && void 0 !== ZR ? ZR : "simple")) return GR;
+         }(Qr, null !== (jr = rr.callFormat) && void 0 !== jr ? jr : "simple")) return Qr;
```

#### 350. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6968` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6968) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6968)

```diff
-         fR = (0, UR.e)(qR, yR);
+         Er = (0, Yr.d)(Ir, Zr);
```

#### 351. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6971` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6971) · [Before (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6971)

```diff
-         return Su(JR) && "" !== JR.answer.trim() ? JR : GR
+         return Va(Sr) && "" !== Sr.answer.trim() ? Sr : Qr
```

#### 352. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6974` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L6974) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L6974)

```diff
-         return Au.fK(RR.name, fR.signal.aborted ? "timeout" : "network"), GR
+         return na.jx(rr.name, Er.signal.aborted ? "timeout" : "network"), Qr
```

#### 353. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7009` → after: `L7009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7009) · [Before (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7009)

```diff
-       const yR = (0, UR.e)(2e4, GR);
+       const Zr = (0, Yr.d)(2e4, Qr);
```

#### 354. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7027-L7028` → after: `L7027-L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7027-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7027-L7028) · [Before (L7027-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7027-L7028)

```diff
-         if (nu(RR, GR), 429 === GR.status) return Au.fK(RR, GR), "busy";
-         if (!GR.ok) return Au.fK(RR, GR), null;
+         if (ha(rr, Qr), 429 === Qr.status) return na.jx(rr, Qr), "busy";
+         if (!Qr.ok) return na.jx(rr, Qr), null;
```

#### 355. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7030)

```diff
-           fR = String(null !== (tR = null === (uR = iR.choices) || void 0 === uR || null === (ZR = uR[0]) || void 0 === ZR || null === (qR = ZR.message) || void 0 === qR ? void 0 : qR.content) && void 0 !== tR ? tR : "");
+           Er = String(null !== (Wr = null === (ar = fr.choices) || void 0 === ar || null === (jr = ar[0]) || void 0 === jr || null === (Ir = jr.message) || void 0 === Ir ? void 0 : Ir.content) && void 0 !== Wr ? Wr : "");
```

#### 356. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7034)

```diff
-           }(fR) ? fR : null
+           }(Er) ? Er : null
```

#### 357. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7037` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7037) · [Before (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7037)

```diff
-         return Au.fK(RR, yR.signal.aborted ? "timeout" : "network"), null
+         return na.jx(rr, Zr.signal.aborted ? "timeout" : "network"), null
```

#### 358. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7059-L7060` → after: `L7059-L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7059-L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7059-L7060) · [Before (L7059-L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7059-L7060)

```diff
-     var ZZ = GR(46),
-       qZ = GR(37970);
+     var aj = Qr(43),
+       jj = Qr(38332);
```

#### 359. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7064-L7065` → after: `L7064-L7065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7064-L7065) · [Before (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7064-L7065)

```diff
-       const RR = ZZ.i.getItem(iZ);
-       return null !== RR && "object" === typeof RR ? RR : {}
+       const rr = aj.j.getItem(Ij);
+       return null !== rr && "object" === typeof rr ? rr : {}
```

#### 360. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7075` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7075) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7075)

```diff
-         return null === this.player ? null : null !== (RR = null !== (JR = this.unsaved.get(this.player)) && void 0 !== JR ? JR : fZ()[this.player]) && void 0 !== RR ? RR : null
+         return null === this.player ? null : null !== (rr = null !== (Sr = this.unsaved.get(this.player)) && void 0 !== Sr ? Sr : fj()[this.player]) && void 0 !== rr ? rr : null
```

#### 361. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7086-L7087` → after: `L7086-L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7086-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7086-L7087) · [Before (L7086-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7086-L7087)

```diff
-           } = await Promise.resolve().then((() => GR(1201)));
-           return null !== (RR = null === (JR = yR.peekCurrentUserContext()) || void 0 === JR ? void 0 : JR.whamm) && void 0 !== RR ? RR : null
+           } = await Promise.resolve().then((() => Qr(1187)));
+           return null !== (rr = null === (Sr = Zr.peekCurrentUserContext()) || void 0 === Sr ? void 0 : Sr.whamm) && void 0 !== rr ? rr : null
```

#### 362. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7092` → after: `L7092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7092) · [Before (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7092)

```diff
-         null !== this.player && (ZZ.i.setItem(iZ, {
+         null !== this.player && (aj.j.setItem(Ij, {
```

#### 363. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7115` → after: `L7115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7115) · [Before (L7115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7115)

```diff
-       const GR = `\n[... ${RR.length-JR} more characters cut]`;
+       const Qr = `\n[... ${rr.length-Sr} more characters cut]`;
```

#### 364. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7120-L7121` → after: `L7120-L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7120-L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7120-L7121) · [Before (L7120-L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7120-L7121)

```diff
-     var UZ = GR(688),
-       WZ = GR(5159);
+     var zj = Qr(692),
+       Yj = Qr(5080);
```

#### 365. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7143` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7143) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7143)

```diff
-         clientVersion: String(UZ.d),
+         clientVersion: String(zj.e),
```

#### 366. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7158` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7158) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7158)

```diff
-         this.fK = RR, this.chatId = (0, WZ.b)(12), this.open = new Map
+         this.jx = rr, this.chatId = (0, Yj.d)(12), this.open = new Map
```

#### 367. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7162)

```diff
-         GR && (clearTimeout(GR.timer), JR || (this.open.delete(RR), this.send(GR.fK)))
+         Qr && (clearTimeout(Qr.timer), Sr || (this.open.delete(rr), this.send(Qr.jx)))
```

#### 368. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7167` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7167) · [Before (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7167)

```diff
-         if (yR) return void(yR.fK.responses.length < aZ && yR.fK.responses.push(XZ(GR)));
+         if (Zr) return void(Zr.jx.responses.length < Uj && Zr.jx.responses.push(Kj(Qr)));
```

#### 369. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7170` → after: `L7170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7170) · [Before (L7170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7170)

```diff
-           fK: tR
+           jx: Wr
```

#### 370. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7180` → after: `L7180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7180) · [Before (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7180)

```diff
-           this.open.delete(RR), this.send(JR.fK)
+           this.open.delete(rr), this.send(Sr.jx)
```

#### 371. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7186` → after: `L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7186) · [Before (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7186)

```diff
-         })(RR) && this.fK(RR)
+         })(rr) && this.jx(rr)
```

#### 372. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7201` → after: `L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7201) · [Before (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7201)

```diff
-             fK: JR
+             jx: Sr
```

#### 373. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7212` → after: `L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7212) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7212)

```diff
-       "yes" === RR && GR.length > 0 && vZ(GR.map((RR => RR.fK)))
+       "yes" === rr && Qr.length > 0 && lj(Qr.map((rr => rr.jx)))
```

#### 374. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7215` → after: `L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7215) · [Before (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7215)

```diff
-       const JR = Promise.resolve().then((() => GR(53499)));
+       const Sr = Promise.resolve().then((() => Qr(54037)));
```

#### 375. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7225-L7226` → after: `L7225-L7226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7225-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7225-L7226) · [Before (L7225-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7225-L7226)

```diff
-     var OZ = GR(377),
-       xZ = GR(163);
+     var Xj = Qr(379),
+       Pj = Qr(161);
```

#### 376. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7283` → after: `L7283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7283) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7283)

```diff
-       return "https:" !== JR.protocol && ("http:" !== JR.protocol || !GR) || JR.username || JR.password || JR.search ? null : `${JR.origin}${JR.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== Sr.protocol && ("http:" !== Sr.protocol || !Qr) || Sr.username || Sr.password || Sr.search ? null : `${Sr.origin}${Sr.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 377. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7292` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7292) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7292)

```diff
-         super(`AI key request: ${RR}`), this.problem = RR, this.retryAfterMs = JR, this.status = GR, this.detail = yR
+         super(`AI key request: ${rr}`), this.problem = rr, this.retryAfterMs = Sr, this.status = Qr, this.detail = Zr
```

#### 378. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7297` → after: `L7297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7297) · [Before (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7297)

```diff
-       return ("" === JR ? RR : RR.split(JR).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === Sr ? rr : rr.split(Sr).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 379. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7304` → after: `L7304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7304) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7304)

```diff
-           return `${GR} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${Qr} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 380. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7308` → after: `L7308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7308) · [Before (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7308)

```diff
-           return `${GR} can't find that model. Check its name.`;
+           return `${Qr} can't find that model. Check its name.`;
```

#### 381. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7310` → after: `L7310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7310) · [Before (L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7310)

```diff
-           return "anthropic" === JR ? "Claude didn't accept your key: check it, or make a new one." : "custom" === JR ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === Sr ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Sr ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 382. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7312` → after: `L7312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7312) · [Before (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7312)

```diff
-           return "custom" === JR ? "That server stopped your key for now: it has used all it can." : `${GR} stopped your key for now: it has used all it can. Check it on ${GR}'s website.`;
+           return "custom" === Sr ? "That server stopped your key for now: it has used all it can." : `${Qr} stopped your key for now: it has used all it can. Check it on ${Qr}'s website.`;
```

#### 383. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7314` → after: `L7314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7314) · [Before (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7314)

```diff
-           return `${GR} doesn't work from where you are.`;
+           return `${Qr} doesn't work from where you are.`;
```

#### 384. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7318)

```diff
-           return `${GR} had a problem with that. Try again in a minute.`
+           return `${Qr} had a problem with that. Try again in a minute.`
```

#### 385. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7344` → after: `L7344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7344) · [Before (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7344)

```diff
-         }(JR)) throw new Error(`AI key request to an unknown host for ${RR}`);
+         }(Sr)) throw new Error(`AI key request to an unknown host for ${rr}`);
```

#### 386. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7353` → after: `L7353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7353) · [Before (L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7353)

```diff
-         throw console.warn(`AI key request: ${RR} answered ${tR.status}`), new mZ(function(RR, JR, GR) {
+         throw console.warn(`AI key request: ${rr} answered ${Wr.status}`), new kj(function(rr, Sr, Qr) {
```

#### 387. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7360` → after: `L7360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7360) · [Before (L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7360)

```diff
-           return Number.isFinite(GR) ? 1e3 * GR : Math.max(0, Date.parse(JR) - Date.now()) || void 0
+           return Number.isFinite(Qr) ? 1e3 * Qr : Math.max(0, Date.parse(Sr) - Date.now()) || void 0
```

#### 388. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7367` → after: `L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7367) · [Before (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7367)

```diff
-             GR = "string" === typeof tR ? tR : RR
+             Qr = "string" === typeof Wr ? Wr : rr
```

#### 389. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7381` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7381) · [Before (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7381)

```diff
-       const yR = (0, UR.e)(RR, JR);
+       const Zr = (0, Yr.d)(rr, Sr);
```

#### 390. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7416` → after: `L7416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7416) · [Before (L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7416)

```diff
-         ktR: ZR,
+         vWr: jr,
```

#### 391. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7424` → after: `L7424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7424) · [Before (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7424)

```diff
-         const ZR = null !== (GR = null === (yR = RR.match(/```/g)) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0,
+         const jr = null !== (Qr = null === (Zr = rr.match(/```/g)) || void 0 === Zr ? void 0 : Zr.length) && void 0 !== Qr ? Qr : 0,
```

#### 392. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7437` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7437) · [Before (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7437)

```diff
-         written: qR ? KR : void 0,
+         written: Ir ? xr : void 0,
```

#### 393. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7449` → after: `L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7449) · [Before (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7449)

```diff
-       const yR = null !== (GR = JR.tools) && void 0 !== GR ? GR : [];
+       const Zr = null !== (Qr = Sr.tools) && void 0 !== Qr ? Qr : [];
```

#### 394. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7500` → after: `L7500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7500) · [Before (L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7500)

```diff
-             models: (null !== (JR = (await GR.json()).data) && void 0 !== JR ? JR : []).map((RR => ({
+             models: (null !== (Sr = (await Qr.json()).data) && void 0 !== Sr ? Sr : []).map((rr => ({
```

#### 395. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7527` → after: `L7527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7527) · [Before (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7527)

```diff
-           return await mu(null !== (tR = uR.body) && void 0 !== tR ? tR : new ReadableStream, (JR => {
+           return await ka(null !== (Wr = ar.body) && void 0 !== Wr ? Wr : new ReadableStream, (Sr => {
```

#### 396. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7532-L7533` → after: `L7532-L7533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7532-L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7532-L7533) · [Before (L7532-L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7532-L7533)

```diff
-             qR += null !== (tR = null !== (uR = null === nR || void 0 === nR || null === (KR = nR.delta) || void 0 === KR ? void 0 : KR.reasoning) && void 0 !== uR ? uR : null === nR || void 0 === nR || null === (wR = nR.delta) || void 0 === wR ? void 0 : wR.reasoning_content) && … [truncated]
-             for (const RR of null !== (UR = null === nR || void 0 === nR || null === (WR = nR.delta) || void 0 === WR ? void 0 : WR.tool_calls) && void 0 !== UR ? UR : []) {
+             Ir += null !== (Wr = null !== (ar = null === zr || void 0 === zr || null === (xr = zr.delta) || void 0 === xr ? void 0 : xr.reasoning) && void 0 !== ar ? ar : null === zr || void 0 === zr || null === (mr = zr.delta) || void 0 === mr ? void 0 : mr.reasoning_content) && … [truncated]
+             for (const rr of null !== (Yr = null === zr || void 0 === zr || null === (nr = zr.delta) || void 0 === nr ? void 0 : nr.tool_calls) && void 0 !== Yr ? Yr : []) {
```

#### 397. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7546` → after: `L7546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7546) · [Before (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7546)

```diff
-             ktR: iR,
+             vWr: fr,
```

#### 398. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7566` → after: `L7566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7566) · [Before (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7566)

```diff
-         return await QZ(dZ, RR, (async RR => kZ("openrouter", `${NZ.openrouter.baseUrl}/key`, {
+         return await bj(wj, rr, (async rr => oj("openrouter", `${Hj.openrouter.baseUrl}/key`, {
```

#### 399. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7587` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7587) · [Before (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7587)

```diff
-             models: (null !== (JR = (await GR.json()).data) && void 0 !== JR ? JR : []).map((RR => ({
+             models: (null !== (Sr = (await Qr.json()).data) && void 0 !== Sr ? Sr : []).map((rr => ({
```

#### 400. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7620` → after: `L7620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7620) · [Before (L7620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7620)

```diff
-           await mu(null !== (uR = ZR.body) && void 0 !== uR ? uR : new ReadableStream, (JR => {
+           await ka(null !== (ar = jr.body) && void 0 !== ar ? ar : new ReadableStream, (Sr => {
```

#### 401. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7625-L7626` → after: `L7625-L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7625-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7625-L7626) · [Before (L7625-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7625-L7626)

```diff
-             if ("content_block_start" === uR.type && "tool_use" === (null === (yR = uR.content_block) || void 0 === yR ? void 0 : yR.type)) KR.set(null !== (rR = uR.index) && void 0 !== rR ? rR : KR.size, {
-               name: null !== (eR = uR.content_block.name) && void 0 !== eR ? eR : "",
+             if ("content_block_start" === ar.type && "tool_use" === (null === (Zr = ar.content_block) || void 0 === Zr ? void 0 : Zr.type)) xr.set(null !== (Nr = ar.index) && void 0 !== Nr ? Nr : xr.size, {
+               name: null !== (Ur = ar.content_block.name) && void 0 !== Ur ? Ur : "",
```

#### 402. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7631-L7632` → after: `L7631-L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7631-L7632) · [Before (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7631-L7632)

```diff
-               qR += null !== (aR = null === (LR = uR.delta) || void 0 === LR ? void 0 : LR.text) && void 0 !== aR ? aR : "", iR += null !== (nR = null === (UR = uR.delta) || void 0 === UR ? void 0 : UR.thinking) && void 0 !== nR ? nR : "";
-               const RR = KR.get(null !== (WR = uR.index) && void 0 !== WR ? WR : -1);
+               Ir += null !== (tr = null === (hr = ar.delta) || void 0 === hr ? void 0 : hr.text) && void 0 !== tr ? tr : "", fr += null !== (zr = null === (Yr = ar.delta) || void 0 === Yr ? void 0 : Yr.thinking) && void 0 !== zr ? zr : "";
+               const rr = xr.get(null !== (nr = ar.index) && void 0 !== nr ? nr : -1);
```

#### 403. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7634` → after: `L7634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7634) · [Before (L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7634)

```diff
-               if (RR && "input_json_delta" === (null === (AR = uR.delta) || void 0 === AR ? void 0 : AR.type)) RR.args += null !== (CR = uR.delta.partial_json) && void 0 !== CR ? CR : ""
+               if (rr && "input_json_delta" === (null === (er = ar.delta) || void 0 === er ? void 0 : er.type)) rr.args += null !== (Kr = ar.delta.partial_json) && void 0 !== Kr ? Kr : ""
```

#### 404. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7650` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7650) · [Before (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7650)

```diff
-             ktR: fR,
+             vWr: Er,
```

#### 405. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7676)

```diff
-             models: (null !== (JR = (await GR.json()).models) && void 0 !== JR ? JR : []).filter((RR => {
+             models: (null !== (Sr = (await Qr.json()).models) && void 0 !== Sr ? Sr : []).filter((rr => {
```

#### 406. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7699` → after: `L7699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7699) · [Before (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7699)

```diff
-           const ZR = await kZ("gemini", `${this.baseUrl}/models/${encodeURIComponent(RR)}:streamGenerateContent?alt=sse`, {
+           const jr = await oj("gemini", `${this.baseUrl}/models/${encodeURIComponent(rr)}:streamGenerateContent?alt=sse`, {
```

#### 407. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7718` → after: `L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7718) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7718)

```diff
-           return await mu(null !== (uR = ZR.body) && void 0 !== uR ? uR : new ReadableStream, (JR => {
+           return await ka(null !== (ar = jr.body) && void 0 !== ar ? ar : new ReadableStream, (Sr => {
```

#### 408. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7722` → after: `L7722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7722) · [Before (L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7722)

```diff
-             for (const RR of null !== (rR = null === wR || void 0 === wR || null === (eR = wR.content) || void 0 === eR ? void 0 : eR.parts) && void 0 !== rR ? rR : []) {
+             for (const rr of null !== (Nr = null === mr || void 0 === mr || null === (Ur = mr.content) || void 0 === Ur ? void 0 : Ur.parts) && void 0 !== Nr ? Nr : []) {
```

#### 409. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7725-L7726` → after: `L7725-L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7725-L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7725-L7726) · [Before (L7725-L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7725-L7726)

```diff
-                 name: null !== (aR = RR.functionCall.name) && void 0 !== aR ? aR : "",
-                 args: JSON.stringify(null !== (LR = RR.functionCall.args) && void 0 !== LR ? LR : {})
+                 name: null !== (tr = rr.functionCall.name) && void 0 !== tr ? tr : "",
+                 args: JSON.stringify(null !== (hr = rr.functionCall.args) && void 0 !== hr ? hr : {})
```

#### 410. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7730` → after: `L7730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7730) · [Before (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7730)

```diff
-                 iR += null !== (nR = RR.text) && void 0 !== nR ? nR : ""
+                 fr += null !== (zr = rr.text) && void 0 !== zr ? zr : ""
```

#### 411. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7733` → after: `L7733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7733) · [Before (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7733)

```diff
-                 qR += null !== (UR = RR.text) && void 0 !== UR ? UR : ""
+                 Ir += null !== (Yr = rr.text) && void 0 !== Yr ? Yr : ""
```

#### 412. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7745` → after: `L7745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7745) · [Before (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7745)

```diff
-             ktR: fR,
+             vWr: Er,
```

#### 413. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7770` → after: `L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7770) · [Before (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7770)

```diff
-           return new Rq("custom", null !== GR && void 0 !== GR ? GR : "", JR)
+           return new uj("custom", null !== Qr && void 0 !== Qr ? Qr : "", Sr)
```

#### 414. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7898` → after: `L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7898) · [Before (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7898)

```diff
-         name: null !== (yR = null === tR || void 0 === tR ? void 0 : tR.name) && void 0 !== yR ? yR : JR,
+         name: null !== (Zr = null === Wr || void 0 === Wr ? void 0 : Wr.name) && void 0 !== Zr ? Zr : Sr,
```

#### 415. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7922` → after: `L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7922) · [Before (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7922)

```diff
-       return null !== (JR = RR.find((RR => "smart" === RR.tier))) && void 0 !== JR ? JR : RR[0]
+       return null !== (Sr = rr.find((rr => "smart" === rr.tier))) && void 0 !== Sr ? Sr : rr[0]
```

#### 416. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7928)

```diff
-       return null !== (JR = RR.name) && void 0 !== JR ? JR : IZ(RR.provider, RR.baseUrl, GR)
+       return null !== (Sr = rr.name) && void 0 !== Sr ? Sr : Gj(rr.provider, rr.baseUrl, Qr)
```

#### 417. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7945` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7945) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7945)

```diff
-         return new URL(null !== (JR = RR.baseUrl) && void 0 !== JR ? JR : "").protocol.startsWith("http")
+         return new URL(null !== (Sr = rr.baseUrl) && void 0 !== Sr ? Sr : "").protocol.startsWith("http")
```

#### 418. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7955` → after: `L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7955) · [Before (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7955)

```diff
-         return console.warn(`AI Helper: no ${RR}`, JR), null
+         return console.warn(`AI Helper: no ${rr}`, Sr), null
```

#### 419. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7967` → after: `L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7967) · [Before (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7967)

```diff
-         this.state = null !== yR && void 0 !== yR && yR.remember ? null !== tR && void 0 !== tR && tR.remember ? tR : {
+         this.state = null !== Zr && void 0 !== Zr && Zr.remember ? null !== Wr && void 0 !== Wr && Wr.remember ? Wr : {
```

#### 420. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7970` → after: `L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7970) · [Before (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7970)

```diff
-         } : null !== (GR = null !== yR && void 0 !== yR ? yR : tR) && void 0 !== GR ? GR : eq, this.ownsRemembered = this.state.remember && null !== tR
+         } : null !== (Qr = null !== Zr && void 0 !== Zr ? Zr : Wr) && void 0 !== Qr ? Qr : NI, this.ownsRemembered = this.state.remember && null !== Wr
```

#### 421. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7987-L7988` → after: `L7987-L7988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7987-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L7987-L7988) · [Before (L7987-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L7987-L7988)

```diff
-           qR = "custom" !== RR.provider ? RR.provider : null !== (yR = null === ZR || void 0 === ZR ? void 0 : ZR.id) && void 0 !== yR ? yR : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           iR = void 0 === JR ? Kq(RR.models) : null !== (tR = RR.models.find((RR => RR.id === JR))) && void 0 !== tR ? tR : RR.models[0],
+           Ir = "custom" !== rr.provider ? rr.provider : null !== (Zr = null === jr || void 0 === jr ? void 0 : jr.id) && void 0 !== Zr ? Zr : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           fr = void 0 === Sr ? pI(rr.models) : null !== (Wr = rr.models.find((rr => rr.id === Sr))) && void 0 !== Wr ? Wr : rr.models[0],
```

#### 422. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8003` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8003) · [Before (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8003)

```diff
-           rR = wR ? this.state.keys.filter((RR => RR.id !== qR)).map((RR => RR.id === GR ? VR : RR)) : KR ? [...this.state.keys, VR] : this.state.keys.map((RR => RR.id === qR ? VR : RR)),
+           Nr = mr ? this.state.keys.filter((rr => rr.id !== Ir)).map((rr => rr.id === Qr ? pr : rr)) : xr ? [...this.state.keys, pr] : this.state.keys.map((rr => rr.id === Ir ? pr : rr)),
```

#### 423. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8022` → after: `L8022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8022) · [Before (L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8022)

```diff
-             return "" === GR ? tR : {
+             return "" === Qr ? Wr : {
```

#### 424. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8117` → after: `L8117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8117) · [Before (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8117)

```diff
-           yR = (null !== (JR = null === GR || void 0 === GR ? void 0 : GR.keys) && void 0 !== JR ? JR : []).filter((RR => this.state.keys.every((JR => !aq(JR, RR)))));
+           Zr = (null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.keys) && void 0 !== Sr ? Sr : []).filter((rr => this.state.keys.every((Sr => !UI(Sr, rr)))));
```

#### 425. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8161` → after: `L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8161) · [Before (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8161)

```diff
-           return Array.isArray(JR.keys) && JR.keys.every(Lq) ? JR : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(Sr.keys) && Sr.keys.every(tI) ? Sr : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 426. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8203` → after: `L8203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8203) · [Before (L8203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8203)

```diff
-       const qR = null !== (GR = null === ZR || void 0 === ZR ? void 0 : ZR.trim()) && void 0 !== GR ? GR : "";
+       const Ir = null !== (Qr = null === jr || void 0 === jr ? void 0 : jr.trim()) && void 0 !== Qr ? Qr : "";
```

#### 427. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8233` → after: `L8233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8233) · [Before (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8233)

```diff
-               return 0 !== (null !== (GR = null === (yR = JR.tools) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) && RR instanceof mZ && "failed" === RR.problem && (400 === RR.status || 404 === RR.status && /\btool/i.test(null !== (tR = RR.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (Qr = null === (Zr = Sr.tools) || void 0 === Zr ? void 0 : Zr.length) && void 0 !== Qr ? Qr : 0) && rr instanceof kj && "failed" === rr.problem && (400 === rr.status || 404 === rr.status && /\btool/i.test(null !== (Wr = rr.detail) && void 0 != … [truncated]
```

#### 428. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8248` → after: `L8248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8248) · [Before (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8248)

```diff
-         return await (iR = Math.min(null !== (ZR = null !== (qR = KR.retryAfterMs) && void 0 !== qR ? qR : GR.retryWaitMs) && void 0 !== ZR ? ZR : 3e3, 2e4), fR = GR.signal, new Promise(((RR, JR) => {
+         return await (fr = Math.min(null !== (jr = null !== (Ir = xr.retryAfterMs) && void 0 !== Ir ? Ir : Qr.retryWaitMs) && void 0 !== jr ? jr : 3e3, 2e4), Er = Qr.signal, new Promise(((rr, Sr) => {
```

#### 429. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8260` → after: `L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8260) · [Before (L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8260)

```diff
-     var Xq = GR(4964);
+     var KI = Qr(4881);
```

#### 430. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8377` → after: `L8377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8377) · [Before (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8377)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${mq((null!==(JR=RR.availableFrom)&&void 0!==JR?JR:GR)-GR)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${kI((null!==(Sr=rr.availableFrom)&&void 0!==Sr?Sr:Qr)-Qr)} to go.`;
```

#### 431. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8379` → after: `L8379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8379) · [Before (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8379)

```diff
-           return RR.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(RR,JR){const GR=Math.ceil((RR-JR)/36e5);if(GR<=24)return GR<=1?"within the hour":`in ${GR} hours`;return`in ${mq(RR-JR)}`}(RR.resetsAt,GR)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return rr.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(rr,Sr){const Qr=Math.ceil((rr-Sr)/36e5);if(Qr<=24)return Qr<=1?"within the hour":`in ${Qr} hours`;return`in ${kI(rr-Sr)}`}(rr.resetsAt,Qr)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 432. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8410` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8410) · [Before (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8410)

```diff
-       return `Usage left: ${RR.left}`
+       return `Usage left: ${rr.left}`
```

#### 433. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8414-L8415` → after: `L8414-L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8414-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8414-L8415) · [Before (L8414-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8414-L8415)

```diff
-       const JR = Math.max(1, Math.ceil(RR / OZ.i));
-       return 1 === JR ? "1 day" : `${JR} days`
+       const Sr = Math.max(1, Math.ceil(rr / Xj.d));
+       return 1 === Sr ? "1 day" : `${Sr} days`
```

#### 434. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8420` → after: `L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8420) · [Before (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8420)

```diff
-       if (GR) return `${GR} Bot.xd is answering instead.`;
+       if (Qr) return `${Qr} Bot.xd is answering instead.`;
```

#### 435. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8439` → after: `L8439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8439) · [Before (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8439)

```diff
-           return RR.messages.length > 12 || RR.messages.some((RR => RR.content.length > Gu)) || (null !== (JR = null === (GR = RR.toolsJson) || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : 0) > 1e5 || (null !== (yR = null === (tR = RR.request) || void 0 === tR ? vo … [truncated]
+           return rr.messages.length > 12 || rr.messages.some((rr => rr.content.length > Sa)) || (null !== (Sr = null === (Qr = rr.toolsJson) || void 0 === Qr ? void 0 : Qr.length) && void 0 !== Sr ? Sr : 0) > 1e5 || (null !== (Zr = null === (Wr = rr.request) || void 0 === Wr ? vo … [truncated]
```

#### 436. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8446` → after: `L8446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8446) · [Before (L8446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8446)

```diff
-         if (JR instanceof xZ.d && 413 === JR.httpCode) return {
+         if (Sr instanceof Pj.b && 413 === Sr.httpCode) return {
```

#### 437. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8464-L8466` → after: `L8464-L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8464-L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8464-L8466) · [Before (L8464-L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8464-L8466)

```diff
-     var dq = GR(32),
-       Eq = GR(25),
-       Yq = GR(3213);
+     var wI = Qr(34),
+       cI = Qr(26),
+       FI = Qr(3184);
```

#### 438. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8470` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8470) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8470)

```diff
-       kq ??= Promise.resolve().then((() => GR(3217))), kq.then((RR => {
+       oI ??= Promise.resolve().then((() => Qr(3192))), oI.then((rr => {
```

#### 439. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8492` → after: `L8492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8492) · [Before (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8492)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => GR(1493))), GR.e(672).then((() => GR(64159)))]);
+         }] = await Promise.all([Promise.resolve().then((() => Qr(1475))), Qr.e(673).then((() => Qr(64632)))]);
```

#### 440. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8499` → after: `L8499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8499) · [Before (L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8499)

```diff
-                   dq.n.JK("OpenStoreFromCodeEditor"), (0, Yq.m)({
+                   wI.i.Jp("OpenStoreFromCodeEditor"), (0, FI.o)({
```

#### 441. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8504-L8505` → after: `L8504-L8505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8504-L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8504-L8505) · [Before (L8504-L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8504-L8505)

```diff
-                   const RR = dq.n.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === Eq.d.get("openEverythingMenuName") && (dq.n.unsubscribe(RR), vq.refresh())
+                   const rr = wI.i.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === cI.c.get("openEverythingMenuName") && (wI.i.unsubscribe(rr), lI.refresh())
```

#### 442. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8510` → after: `L8510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8510) · [Before (L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8510)

```diff
-           middleScreenPopupContainerClassName: qZ.e
+           middleScreenPopupContainerClassName: jj.c
```

#### 443. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8689)

```diff
-       return RR.length > 4 && RR.endsWith("ies") ? `${RR.slice(0,-3)}y` : RR.length > 3 && RR.endsWith("s") && !RR.endsWith("ss") ? RR.slice(0, -1) : RR
+       return rr.length > 4 && rr.endsWith("ies") ? `${rr.slice(0,-3)}y` : rr.length > 3 && rr.endsWith("s") && !rr.endsWith("ss") ? rr.slice(0, -1) : rr
```

#### 444. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8705)

```diff
-         tR = ii(JR ? RR : (0, aJ.s)(RR, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, aJ.n, (() => "projectRequire"))),
+         Wr = If(Sr ? rr : (0, tS.t)(rr, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, tS.o, (() => "projectRequire"))),
```

#### 445. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8708)

```diff
-         for (const tR of (0, aJ.d)(RR, /(global|window|document|process|require)\b\s*[.([]/g, aJ.n)) yR.has(tR[1]) || uR.has(tR[1]) || (yR.add(tR[1]), GR.push(`Line ${JR+1} uses "${tR[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const Wr of (0, tS.e)(rr, /(global|window|document|process|require)\b\s*[.([]/g, tS.o)) Zr.has(Wr[1]) || ar.has(Wr[1]) || (Zr.add(Wr[1]), Qr.push(`Line ${Sr+1} uses "${Wr[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 446. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8723` → after: `L8723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8723) · [Before (L8723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8723)

```diff
-         const rR = [null !== (uR = JR[yR - 2]) && void 0 !== uR ? uR : "", null !== (ZR = JR[yR - 1]) && void 0 !== ZR ? ZR : "", RR.slice(0, fR)].join(" ");
+         const Nr = [null !== (ar = Sr[Zr - 2]) && void 0 !== ar ? ar : "", null !== (jr = Sr[Zr - 1]) && void 0 !== jr ? jr : "", rr.slice(0, Er)].join(" ");
```

#### 447. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8725-L8726` → after: `L8725-L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8725-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8725-L8726) · [Before (L8725-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8725-L8726)

```diff
-         const eR = null !== (qR = null === (iR = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(KR)) || void 0 === iR ? void 0 : iR[1]) && void 0 !== qR ? qR : "coins";
-         GR.push(`Line ${yR+1} sets the saved "${eR}" back to ${wR} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${eR}") is null.`)
+         const Ur = null !== (Ir = null === (fr = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(xr)) || void 0 === fr ? void 0 : fr[1]) && void 0 !== Ir ? Ir : "coins";
+         Qr.push(`Line ${Zr+1} sets the saved "${Ur}" back to ${mr} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${Ur}") is null.`)
```

#### 448. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8732)

```diff
-       const yR = null !== (JR = null === (GR = RR.split("### Parameters:")[1]) || void 0 === GR ? void 0 : GR.split("###")[0]) && void 0 !== JR ? JR : "",
+       const Zr = null !== (Sr = null === (Qr = rr.split("### Parameters:")[1]) || void 0 === Qr ? void 0 : Qr.split("###")[0]) && void 0 !== Sr ? Sr : "",
```

#### 449. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8780-L8782` → after: `L8780-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8780-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8780-L8782) · [Before (L8780-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8780-L8782)

```diff
-         tR = `\\((?:[^()]*[\\s,])?${yR}(?![\\w$])[^()]*\\)`,
-         uR = new RegExp(`(?:const|let|var)\\s+${yR}(?![\\w$])|${yR}\\s*(?:\\+?=(?![=>])|=>)|${tR}\\s*=>|function\\s*[\\w$]*\\s*${tR}`, "g");
-       return 1 === (0, aJ.d)(RR, uR, aJ.n).length ? null === (GR = new RegExp(`\\b(?:const|let|var)\\s+${yR}\\s*=\\s*${ri}\\s*(?:;|//|$)`, "m").exec(RR)) || void 0 === GR ? void 0 : GR[1] : void 0
+         Wr = `\\((?:[^()]*[\\s,])?${Zr}(?![\\w$])[^()]*\\)`,
+         ar = new RegExp(`(?:const|let|var)\\s+${Zr}(?![\\w$])|${Zr}\\s*(?:\\+?=(?![=>])|=>)|${Wr}\\s*=>|function\\s*[\\w$]*\\s*${Wr}`, "g");
+       return 1 === (0, tS.e)(rr, ar, tS.o).length ? null === (Qr = new RegExp(`\\b(?:const|let|var)\\s+${Zr}\\s*=\\s*${mf}\\s*(?:;|//|$)`, "m").exec(rr)) || void 0 === Qr ? void 0 : Qr[1] : void 0
```

#### 450. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8791-L8792` → after: `L8791-L8792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8791-L8792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8791-L8792) · [Before (L8791-L8792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8791-L8792)

```diff
-           yR = -1 === GR ? JR : JR.slice(0, GR + 1);
-         return yR.length > 110 ? `${yR.slice(0,107)}...` : yR
+           Zr = -1 === Qr ? Sr : Sr.slice(0, Qr + 1);
+         return Zr.length > 110 ? `${Zr.slice(0,107)}...` : Zr
```

#### 451. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8794` → after: `L8794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8794) · [Before (L8794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8794)

```diff
-       return yR = "api" === RR ? `api.${JR}(${wi(GR).join(", ")})${tR?` \u2014 ${tR}`:""}` : "callback" === RR ? `${JR}(${wi(GR).join(", ")})${tR?` \u2014 ${tR}`:""}` : "clientOption" === RR ? `${JR}: ${function(RR){var JR,GR;return null!==(JR=null===(GR=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return Zr = "api" === rr ? `api.${Sr}(${xf(Qr).join(", ")})${Wr?` \u2014 ${Wr}`:""}` : "callback" === rr ? `${Sr}(${xf(Qr).join(", ")})${Wr?` \u2014 ${Wr}`:""}` : "clientOption" === rr ? `${Sr}: ${function(rr){var Sr,Qr;return null!==(Sr=null===(Qr=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 452. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8796` → after: `L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8796) · [Before (L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8796)

```diff
-         JR.map((RR => `"${RR}"`)).join(" or ")
+         Sr.map((rr => `"${rr}"`)).join(" or ")
```

#### 453. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8798` → after: `L8798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8798) · [Before (L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8798)

```diff
-       The closest name is "${JR[0]}", which may be something
+       The closest name is "${Sr[0]}", which may be something
```

#### 454. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8800` → after: `L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8800) · [Before (L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8800)

```diff
-       `}function Ai(RR){return RR.split("\n").slice(1).map((RR=>RR.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((RR=>""!==RR&&!RR.startsWith("#")))}class Ci{constructor(RR){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function nf(rr){return rr.split("\n").slice(1).map((rr=>rr.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((rr=>""!==rr&&!rr.startsWith("#")))}class ef{constructor(rr){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 455. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8804)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();JR.push({name:GR,text:tR})}return JR}(GR))JR.push(Li(RR,yR,tR))};GR("api",RR.apiReference),GR("callback",RR.callbacks),GR("clientOption",RR.clientOptions),GR("snippet",RR.snippets),GR("howTo",RR.howTo);const yR=function(){const RR … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Sr.push({name:Qr,text:Wr})}return Sr}(Qr))Sr.push(tf(rr,Zr,Wr))};Qr("api",rr.apiReference),Qr("callback",rr.callbacks),Qr("clientOption",rr.clientOptions),Qr("snippet",rr.snippets),Qr("howTo",rr.howTo);const Zr=function(){const rr … [truncated]
```

#### 456. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8815-L8816` → after: `L8815-L8816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8815-L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8815-L8816) · [Before (L8815-L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8815-L8816)

```diff
-       n\ nUsage: \`${RR.signature}\`\n\n\`\`\`js\n${RR.example}\n\`\`\``)),
-   JR = Uy.map((RR => `## ${RR.name}\nPrefab (${RR.kind}, ${RR.category}): put in with use_prefab. ${Dy(RR,!1)}`));
+       n\ nUsage: \`${rr.signature}\`\n\n\`\`\`js\n${rr.example}\n\`\`\``)),
+   Sr = YZ.map((rr => `## ${rr.name}\nPrefab (${rr.kind}, ${rr.category}): put in with use_prefab. ${RZ(rr,!1)}`));
```

#### 457. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8818-L8819` → after: `L8818-L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8818-L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8818-L8819) · [Before (L8818-L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8818-L8819)

```diff
-     helpers: `# Ready-made functions\n\n${RR.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${JR.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${rr.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${Sr.join("\n\n")}\n`
```

#### 458. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8827` → after: `L8827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8827) · [Before (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8827)

```diff
-     this.wordCounts.set(RR, (null !== (tR = this.wordCounts.get(RR)) && void 0 !== tR ? tR : 0) + 1)
+     this.wordCounts.set(rr, (null !== (Wr = this.wordCounts.get(rr)) && void 0 !== Wr ? Wr : 0) + 1)
```

#### 459. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8832` → after: `L8832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8832) · [Before (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8832)

```diff
-   const yR = null !== (JR = null === (GR = RR.split("## Mob Variations")[1]) || void 0 === GR ? void 0 : GR.split("```")[1]) && void 0 !== JR ? JR : "",
+   const Zr = null !== (Sr = null === (Qr = rr.split("## Mob Variations")[1]) || void 0 === Qr ? void 0 : Qr.split("```")[1]) && void 0 !== Sr ? Sr : "",
```

#### 460. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8855` → after: `L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8855) · [Before (L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8855)

```diff
-       return null !== (JR = RR[1]) && void 0 !== JR ? JR : RR[2]
+       return null !== (Sr = rr[1]) && void 0 !== Sr ? Sr : rr[2]
```

#### 461. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8862` → after: `L8862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8862) · [Before (L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8862)

```diff
-     for (const tR of (0, aJ.d)(RR, /([\w$]+)\s*\(/g, aJ.n)) {
+     for (const Wr of (0, tS.e)(rr, /([\w$]+)\s*\(/g, tS.o)) {
```

#### 462. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8866` → after: `L8866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8866) · [Before (L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8866)

```diff
-       uR.has(ZR) || yR.has(ZR) || qR || "api" !== (null === (GR = this.byName.get(ZR)) || void 0 === GR ? void 0 : GR.kind) || uR.set(ZR, `Line ${JR+1} calls ${ZR} without "api.", so it throws there. Did you mean api.${ZR}?`)
+       ar.has(jr) || Zr.has(jr) || Ir || "api" !== (null === (Qr = this.byName.get(jr)) || void 0 === Qr ? void 0 : Qr.kind) || ar.set(jr, `Line ${Sr+1} calls ${jr} without "api.", so it throws there. Did you mean api.${jr}?`)
```

#### 463. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8875-L8876` → after: `L8875-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8875-L8876) · [Before (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8875-L8876)

```diff
-     const JR = this.find(RR.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((RR => "api" === RR.kind)).slice(0, 2).map((RR => `api.${RR.name}`));
-     return `api.${RR} doesn't exist.${JR.length?` Did you mean ${JR.join(" or ")}?`:""}`
+     const Sr = this.find(rr.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((rr => "api" === rr.kind)).slice(0, 2).map((rr => `api.${rr.name}`));
+     return `api.${rr} doesn't exist.${Sr.length?` Did you mean ${Sr.join(" or ")}?`:""}`
```

#### 464. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8896` → after: `L8896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8896) · [Before (L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8896)

```diff
-         wR = KR ? null === (iR = new RegExp(`(?:^|[{,])\\s*${KR.replaceAll("$","\\$")}\\s*:\\s*${ri}`, "m").exec(RR)) || void 0 === iR ? void 0 : iR[1] : void 0,
+         mr = xr ? null === (fr = new RegExp(`(?:^|[{,])\\s*${xr.replaceAll("$","\\$")}\\s*:\\s*${mf}`, "m").exec(rr)) || void 0 === fr ? void 0 : fr[1] : void 0,
```

#### 465. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8898-L8899` → after: `L8898-L8899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8898-L8899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8898-L8899) · [Before (L8898-L8899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8898-L8899)

```diff
-         eR = null !== (fR = null === (VR = new RegExp(`\\?\\s*${ri}\\s*:\\s*${ri}$`).exec(yR)) || void 0 === VR ? void 0 : VR.slice(1)) && void 0 !== fR ? fR : [];
-       for (const RR of [null !== (aR = null !== wR && void 0 !== wR ? wR : rR) && void 0 !== aR ? aR : yR, ...eR]) {
+         Ur = null !== (Er = null === (pr = new RegExp(`\\?\\s*${mf}\\s*:\\s*${mf}$`).exec(Zr)) || void 0 === pr ? void 0 : pr.slice(1)) && void 0 !== Er ? Er : [];
+       for (const rr of [null !== (tr = null !== mr && void 0 !== mr ? mr : Nr) && void 0 !== tr ? tr : Zr, ...Ur]) {
```

#### 466. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8907` → after: `L8907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8907) · [Before (L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8907)

```diff
-   return [...GR].map((RR => `"${RR}" isn't an item or block name.${Wi(this.suggestNames(RR))}`))
+   return [...Qr].map((rr => `"${rr}" isn't an item or block name.${Yf(this.suggestNames(rr))}`))
```

#### 467. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8920` → after: `L8920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8920) · [Before (L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8920)

```diff
-     return `"${JR}" isn't an item or block name, so giving or selling it fails. Did you mean "${GR}"?`
+     return `"${Sr}" isn't an item or block name, so giving or selling it fails. Did you mean "${Qr}"?`
```

#### 468. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8936` → after: `L8936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8936) · [Before (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8936)

```diff
-       return `"${JR}" isn't a block or item name, so comparing with it is never true. Did you mean "${GR}"?`
+       return `"${Sr}" isn't a block or item name, so comparing with it is never true. Did you mean "${Qr}"?`
```

#### 469. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8941-L8942` → after: `L8941-L8942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8941-L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8941-L8942) · [Before (L8941-L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8941-L8942)

```diff
-       GR = this.blockNames.has(JR) || !this.itemAndBlockNames.includes(JR) ? void 0 : [`Block of ${JR}`, `${JR} Block`].find((RR => this.blockNames.has(RR)));
-     !GR || RR.includes(`"${GR}"`) || RR.includes(`'${GR}'`) || ZR.set(JR, GR)
+       Qr = this.blockNames.has(Sr) || !this.itemAndBlockNames.includes(Sr) ? void 0 : [`Block of ${Sr}`, `${Sr} Block`].find((rr => this.blockNames.has(rr)));
+     !Qr || rr.includes(`"${Qr}"`) || rr.includes(`'${Qr}'`) || jr.set(Sr, Qr)
```

#### 470. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8946` → after: `L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8946) · [Before (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8946)

```diff
-     return `"${JR}" is an item, not a block, so no block is ever called that. Did you mean "${GR}"?`
+     return `"${Sr}" is an item, not a block, so no block is ever called that. Did you mean "${Qr}"?`
```

#### 471. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8963-L8964` → after: `L8963-L8964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8963-L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8963-L8964) · [Before (L8963-L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8963-L8964)

```diff
-       } : yR.names.length > 0 || yR.isDecided ? yR : {
-         names: GR.length <= 2 ? GR : [],
+       } : Zr.names.length > 0 || Zr.isDecided ? Zr : {
+         names: Qr.length <= 2 ? Qr : [],
```

#### 472. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8968` → after: `L8968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8968) · [Before (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8968)

```diff
-     return `"${RR}" isn't a block or item name, so comparing a block with it is never true.${Wi(tR)}`
+     return `"${rr}" isn't a block or item name, so comparing a block with it is never true.${Yf(Wr)}`
```

#### 473. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8983-L8984` → after: `L8983-L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8983-L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8983-L8984) · [Before (L8983-L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8983-L8984)

```diff
-           name: null !== (tR = GR[1]) && void 0 !== tR ? tR : GR[2],
-           body: RR.slice(GR.index, null !== (uR = null === (ZR = JR[yR + 1]) || void 0 === ZR ? void 0 : ZR.index) && void 0 !== uR ? uR : RR.length)
+           name: null !== (Wr = Qr[1]) && void 0 !== Wr ? Wr : Qr[2],
+           body: rr.slice(Qr.index, null !== (ar = null === (jr = Sr[Zr + 1]) || void 0 === jr ? void 0 : jr.index) && void 0 !== ar ? ar : rr.length)
```

#### 474. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8992` → after: `L8992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8992) · [Before (L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8992)

```diff
-         if (RR.text.includes(`"${yR}"`)) continue;
+         if (rr.text.includes(`"${Zr}"`)) continue;
```

#### 475. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8994-L8995` → after: `L8994-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8994-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L8994-L8995) · [Before (L8994-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L8994-L8995)

```diff
-           ZR = uR.length > 0 ? `Did you mean ${uR.map((RR=>`"${RR}"`)).join(" or ")}?` : /Return false/i.test(RR.text) ? `To stop it, return false instead of "${yR}".` : "Check Show Docs for what it can return.";
-         JR.add(`${GR} can't use "${yR}" to stop anything. ${ZR}`)
+           jr = ar.length > 0 ? `Did you mean ${ar.map((rr=>`"${rr}"`)).join(" or ")}?` : /Return false/i.test(rr.text) ? `To stop it, return false instead of "${Zr}".` : "Check Show Docs for what it can return.";
+         Sr.add(`${Qr} can't use "${Zr}" to stop anything. ${jr}`)
```

#### 476. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9005)

```diff
-     return !GR.some((RR => RR.startsWith(`${JR} `)))
+     return !Qr.some((rr => rr.startsWith(`${Sr} `)))
```

#### 477. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9021` → after: `L9021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9021) · [Before (L9021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9021)

```diff
-     uR = null !== (JR = this.namesByLowerCase.get(GR)) && void 0 !== JR ? JR : this.namesByLowerCase.get(tR);
+     ar = null !== (Sr = this.namesByLowerCase.get(Qr)) && void 0 !== Sr ? Sr : this.namesByLowerCase.get(Wr);
```

#### 478. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9053` → after: `L9053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9053) · [Before (L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9053)

```diff
-       RR && yR.set(RR, (null !== (GR = yR.get(RR)) && void 0 !== GR ? GR : 0) + JR)
+       rr && Zr.set(rr, (null !== (Qr = Zr.get(rr)) && void 0 !== Qr ? Qr : 0) + Sr)
```

#### 479. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9059` → after: `L9059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9059) · [Before (L9059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9059)

```diff
-   for (const KR of `${RR}\n${JR}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const xr of `${rr}\n${Sr}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 480. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9061` → after: `L9061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9061) · [Before (L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9061)

```diff
-     tR(this.byName.get(null !== (qR = null !== (iR = KR[1]) && void 0 !== iR ? iR : KR[2]) && void 0 !== qR ? qR : KR[3]), KR[1] || KR[2] ? 4 : 2)
+     Wr(this.byName.get(null !== (Ir = null !== (fr = xr[1]) && void 0 !== fr ? fr : xr[2]) && void 0 !== Ir ? Ir : xr[3]), xr[1] || xr[2] ? 4 : 2)
```

#### 481. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9063` → after: `L9063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9063) · [Before (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9063)

```diff
-   for (const KR of (0, aJ.d)(JR, /([A-Za-z_$][\w$]*)\s*\(/g, aJ.n)) {
+   for (const xr of (0, tS.e)(Sr, /([A-Za-z_$][\w$]*)\s*\(/g, tS.o)) {
```

#### 482. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9072-L9073` → after: `L9072-L9073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9072-L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9072-L9073) · [Before (L9072-L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9072-L9073)

```diff
-       const GR = 1 / Math.log2(2 + (null !== (VR = this.wordCounts.get(JR)) && void 0 !== VR ? VR : 0));
-       KR.nameWords.has(JR) ? RR += 3 * GR : KR.textWords.has(JR) && (RR += GR)
+       const Qr = 1 / Math.log2(2 + (null !== (pr = this.wordCounts.get(Sr)) && void 0 !== pr ? pr : 0));
+       xr.nameWords.has(Sr) ? rr += 3 * Qr : xr.textWords.has(Sr) && (rr += Qr)
```

#### 483. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9089` → after: `L9089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9089) · [Before (L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9089)

```diff
-   return null !== (JR = null !== (GR = this.byName.get(yR)) && void 0 !== GR ? GR : this.sections.find((RR => RR.name.toLowerCase() === tR))) && void 0 !== JR ? JR : null
+   return null !== (Sr = null !== (Qr = this.byName.get(Zr)) && void 0 !== Qr ? Qr : this.sections.find((rr => rr.name.toLowerCase() === Wr))) && void 0 !== Sr ? Sr : null
```

#### 484. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9126` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9126) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9126)

```diff
-         yR = new RegExp(`(^|[^\\w$.])${GR}\\s*\\(`),
+         Zr = new RegExp(`(^|[^\\w$.])${Qr}\\s*\\(`),
```

#### 485. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9152)

```diff
-         when: `in ${GR[1]}`,
+         when: `in ${Qr[1]}`,
```

#### 486. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9159` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9159) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9159)

```diff
-     qR = uR && JR ? ` ${uR}` : "",
+     Ir = ar && Sr ? ` ${ar}` : "",
```

#### 487. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9163-L9164` → after: `L9163-L9164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9163-L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9163-L9164) · [Before (L9163-L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9163-L9164)

```diff
-     const RR = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (fR = null === (VR = tR[0]) || void 0 === VR ? void 0 : VR.trim()) && void 0 !== fR ? fR : ""),
-       JR = null === (KR = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (wR = null === (rR = tR[1]) || void 0 === rR ? void 0 : rR.trim()) && void 0 !== wR ? wR : "")) || void 0 === KR ? void 0 : KR[1],
+     const rr = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Er = null === (pr = Wr[0]) || void 0 === pr ? void 0 : pr.trim()) && void 0 !== Er ? Er : ""),
+       Sr = null === (xr = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (mr = null === (Nr = Wr[1]) || void 0 === Nr ? void 0 : Nr.trim()) && void 0 !== mr ? mr : "")) || void 0 === xr ? void 0 : xr[1],
```

#### 488. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9167` → after: `L9167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9167) · [Before (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9167)

```diff
-         return /^(a|an|the)\s/i.test(JR) || !/^[a-z]/i.test(JR) ? JR : `${/^[aeiou]/i.test(JR)?"an":"a"} ${JR}`
+         return /^(a|an|the)\s/i.test(Sr) || !/^[a-z]/i.test(Sr) ? Sr : `${/^[aeiou]/i.test(Sr)?"an":"a"} ${Sr}`
```

#### 489. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9169` → after: `L9169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9169) · [Before (L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9169)

```diff
-     return GR && null !== RR && void 0 !== RR && RR[3] ? `api.${iR[1]} needs ${GR}, but it got ${RR[3]}${qR}.` : RR ? `api.${iR[1]} couldn't use its ${eR=Number(RR[1]),1===eR?"first":2===eR?"second":3===eR?"third":4===eR?"fourth":`#${eR}`} argument${qR}.${GR?` It needs ${GR}.`:"" … [truncated]
+     return Qr && null !== rr && void 0 !== rr && rr[3] ? `api.${fr[1]} needs ${Qr}, but it got ${rr[3]}${Ir}.` : rr ? `api.${fr[1]} couldn't use its ${Ur=Number(rr[1]),1===Ur?"first":2===Ur?"second":3===Ur?"third":4===Ur?"fourth":`#${Ur}`} argument${Ir}.${Qr?` It needs ${Qr}.`:"" … [truncated]
```

#### 490. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9173)

```diff
-   if (aR) return aR[1] ? `${aR[1]} isn't a function${qR}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${qR}. Check each name it calls is spelt exactly right.`;
+   if (tr) return tr[1] ? `${tr[1]} isn't a function${Ir}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${Ir}. Check each name it calls is spelt exactly right.`;
```

#### 491. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9175` → after: `L9175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9175) · [Before (L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9175)

```diff
-   if (LR) return `${LR[1]} isn't defined${qR}. Check the spelling, or create it before using it.`;
+   if (hr) return `${hr[1]} isn't defined${Ir}. Check the spelling, or create it before using it.`;
```

#### 492. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9179-L9180` → after: `L9179-L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9179-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9179-L9180) · [Before (L9179-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9179-L9180)

```diff
-     const RR = null !== (UR = nR[1]) && void 0 !== UR ? UR : nR[3];
-     return `Your code tried to read${RR?` .${RR}`:" something"} from ${nR[2]}${qR}: a value it expected wasn't there.`
+     const rr = null !== (Yr = zr[1]) && void 0 !== Yr ? Yr : zr[3];
+     return `Your code tried to read${rr?` .${rr}`:" something"} from ${zr[2]}${Ir}: a value it expected wasn't there.`
```

#### 493. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9182` → after: `L9182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9182) · [Before (L9182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9182)

```diff
-   return `Your code hit an error${qR}: ${ZR.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${Ir}: ${jr.replace(/^\w*Error:\s*/,"")}`
```

#### 494. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9268` → after: `L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9268) · [Before (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9268)

```diff
-   return RR.replaceAll(`"${JR}"`, `"${GR}"`).replaceAll(`'${JR}'`, `'${GR}'`)
+   return rr.replaceAll(`"${Sr}"`, `"${Qr}"`).replaceAll(`'${Sr}'`, `'${Qr}'`)
```

#### 495. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9272` → after: `L9272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9272) · [Before (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9272)

```diff
-   const GR = RR => lR().isIdentifier(RR) ? RR.text === JR : RR.elements.some((RR => !lR().isOmittedExpression(RR) && GR(RR.name))),
+   const Qr = rr => vr().isIdentifier(rr) ? rr.text === Sr : rr.elements.some((rr => !vr().isOmittedExpression(rr) && Qr(rr.name))),
```

#### 496. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9285` → after: `L9285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9285) · [Before (L9285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9285)

```diff
-       return (null === RR || void 0 === RR || null === (GR = RR.name) || void 0 === GR ? void 0 : GR.text) === JR || void 0 !== yR && (lR().isNamespaceImport(yR) ? yR.name.text === JR : yR.elements.some((RR => RR.name.text === JR)))
+       return (null === rr || void 0 === rr || null === (Qr = rr.name) || void 0 === Qr ? void 0 : Qr.text) === Sr || void 0 !== Zr && (vr().isNamespaceImport(Zr) ? Zr.name.text === Sr : Zr.elements.some((rr => rr.name.text === Sr)))
```

#### 497. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9299` → after: `L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9299) · [Before (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9299)

```diff
-             text: `${GR}${JR}${GR}`
+             text: `${Qr}${Sr}${Qr}`
```

#### 498. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9311` → after: `L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9311) · [Before (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9311)

```diff
-                 edit: uR(tR, lR().isShorthandPropertyAssignment(RR) ? `${yR}: ${GR}` : yR),
+                 edit: ar(Wr, vr().isShorthandPropertyAssignment(rr) ? `${Zr}: ${Qr}` : Zr),
```

#### 499. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9313` → after: `L9313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9313) · [Before (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9313)

```diff
-                 tK: qR
+                 sp: Ir
```

#### 500. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9326` → after: `L9326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9326) · [Before (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9326)

```diff
-         return xG(RR, ZR.flatMap((RR => RR.depth !== JR || RR.tK ? [] : [RR.edit])))
+         return HQ(rr, jr.flatMap((rr => rr.depth !== Sr || rr.sp ? [] : [rr.edit])))
```

#### 501. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9351` → after: `L9351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9351) · [Before (L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9351)

```diff
-           JR && lR().isIdentifier(JR) ? (lR().isVariableDeclaration(RR) && Ry(RR.initializer, yR) ? tR : uR).add(JR.text) : lR().isIdentifier(RR) && Jy(RR) && uR.add(RR.text), lR().forEachChild(RR, ZR)
+           Sr && vr().isIdentifier(Sr) ? (vr().isVariableDeclaration(rr) && rZ(rr.initializer, Zr) ? Wr : ar).add(Sr.text) : vr().isIdentifier(rr) && SZ(rr) && ar.add(rr.text), vr().forEachChild(rr, jr)
```

#### 502. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9360)

```diff
-           text: `{ customAttributes: ${JR.getText(yR)} }`
+           text: `{ customAttributes: ${Sr.getText(Zr)} }`
```

#### 503. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9383)

```diff
-               text: lR().isShorthandPropertyAssignment(fR) ? `${JR}: ${GR}` : GR
+               text: vr().isShorthandPropertyAssignment(Er) ? `${Sr}: ${Qr}` : Qr
```

#### 504. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9393-L9394` → after: `L9393-L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9393-L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9393-L9394) · [Before (L9393-L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9393-L9394)

```diff
-       const JR = `(["'])${function(RR){return RR.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(GR)}\\1`;
-       return ("comparedBlock" === tR ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${JR}`, `${JR}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${JR}`, `${JR}\\s*[!=]==?`, `\\bcase\\s+${JR}\\s*:`, `\\.includes\\(\\s*${JR}\\s*\\)`]).reduce(((RR, JR) => RR.replace(new RegExp(JR, "g"), … [truncated]
+       const Sr = `(["'])${function(rr){return rr.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(Qr)}\\1`;
+       return ("comparedBlock" === Wr ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Sr}`, `${Sr}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Sr}`, `${Sr}\\s*[!=]==?`, `\\bcase\\s+${Sr}\\s*:`, `\\.includes\\(\\s*${Sr}\\s*\\)`]).reduce(((rr, Sr) => rr.replace(new RegExp(Sr, "g"), … [truncated]
```

#### 505. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9404` → after: `L9404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9404) · [Before (L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9404)

```diff
-   return "export" === RR.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === RR.kind ? `The enchantment given to ${RR.method} is now in { customAttributes: ... }.` : "null" === RR.kind ? `The null given to ${RR.method} i … [truncated]
+   return "export" === rr.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === rr.kind ? `The enchantment given to ${rr.method} is now in { customAttributes: ... }.` : "null" === rr.kind ? `The null given to ${rr.method} i … [truncated]
```

#### 506. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9406` → after: `L9406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9406) · [Before (L9406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9406)

```diff
- var di = GR(53483);
+ var wf = Qr(54025);
```

#### 507. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9423` → after: `L9423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9423) · [Before (L9423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9423)

```diff
- function Yi(RR) {
+ function of(rr) {
```

#### 508. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9466` → after: `L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9466) · [Before (L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9466)

```diff
-       return tR ? `${yR} didn't accept your key: it may be wrong or deleted.` : `${yR} didn't accept your key: it may be wrong or deleted. Check it on ${yR}'s website.`;
+       return Wr ? `${Zr} didn't accept your key: it may be wrong or deleted.` : `${Zr} didn't accept your key: it may be wrong or deleted. Check it on ${Zr}'s website.`;
```

#### 509. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9468` → after: `L9468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9468) · [Before (L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9468)

```diff
-       return tR ? `${yR} stopped your key for now: it has used all it can.` : `${yR} stopped your key for now: it has used all it can. Check it on ${yR}'s website.`;
+       return Wr ? `${Zr} stopped your key for now: it has used all it can.` : `${Zr} stopped your key for now: it has used all it can. Check it on ${Zr}'s website.`;
```

#### 510. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9470` → after: `L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9470) · [Before (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9470)

```diff
-       return `Too many requests to ${GR} right now. Wait a minute and try again.`;
+       return `Too many requests to ${Qr} right now. Wait a minute and try again.`;
```

#### 511. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9472` → after: `L9472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9472) · [Before (L9472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9472)

```diff
-       return `${yR} can't find ${GR}. Pick another model, or press Check for new models in AI settings.`;
+       return `${Zr} can't find ${Qr}. Pick another model, or press Check for new models in AI settings.`;
```

#### 512. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9474` → after: `L9474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9474) · [Before (L9474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9474)

```diff
-       return `${GR} took too long to answer.`;
+       return `${Qr} took too long to answer.`;
```

#### 513. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9476` → after: `L9476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9476) · [Before (L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9476)

```diff
-       return tR ? `Couldn't reach ${yR}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${yR}. Check your internet and your key.`;
+       return Wr ? `Couldn't reach ${Zr}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${Zr}. Check your internet and your key.`;
```

#### 514. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9478` → after: `L9478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9478) · [Before (L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9478)

```diff
-       return `${yR} doesn't work from where you are.`;
+       return `${Zr} doesn't work from where you are.`;
```

#### 515. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9482` → after: `L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9482) · [Before (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9482)

```diff
-       return `${GR} can't be used right now. Try again in a minute.`
+       return `${Qr} can't be used right now. Try again in a minute.`
```

#### 516. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9500` → after: `L9500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9500) · [Before (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9500)

```diff
-       ...di.g,
+       ...wf.h,
```

#### 517. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9576` → after: `L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9576) · [Before (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9576)

```diff
-       }, JR] = await Promise.all([Promise.resolve().then((() => GR(1493))), this.popup.notice()]), yR = RR.showPromptPopup({
+       }, Sr] = await Promise.all([Promise.resolve().then((() => Qr(1475))), this.popup.notice()]), Zr = rr.showPromptPopup({
```

#### 518. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9581` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9581) · [Before (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9581)

```diff
-         middleScreenPopupContainerClassName: qZ.e
+         middleScreenPopupContainerClassName: jj.c
```

#### 519. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9665` → after: `L9665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9665) · [Before (L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9665)

```diff
-       return "" === RR ? "no key needed" : RR.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === JR ? `key \u2026${RR.slice(-4)}` : `${(null!==(GR=null===(yR=/^[a-zA-Z]+-/.exec(RR))||void 0===yR?void 0:yR[0])&&void 0!==GR?GR:RR.slice(0,4)).slice(0,6)}\u2026${RR.slice(-4)}`
+       return "" === rr ? "no key needed" : rr.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Sr ? `key \u2026${rr.slice(-4)}` : `${(null!==(Qr=null===(Zr=/^[a-zA-Z]+-/.exec(rr))||void 0===Zr?void 0:Zr[0])&&void 0!==Qr?Qr:rr.slice(0,4)).slice(0,6)}\u2026${rr.slice(-4)}`
```

#### 520. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9687)

```diff
-         "aria-label": `Edit ${uR} key`,
+         "aria-label": `Edit ${ar} key`,
```

#### 521. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9692` → after: `L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9692) · [Before (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9692)

```diff
-         "aria-label": `Rename ${uR} key`,
+         "aria-label": `Rename ${ar} key`,
```

#### 522. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9713` → after: `L9713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9713) · [Before (L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9713)

```diff
-     nR = `${wR}-${null!==(JR=null===VR||void 0===VR?void 0:VR.keyId)&&void 0!==JR?JR:"botxd"}-${null!==(GR=null===VR||void 0===VR?void 0:VR.modelId)&&void 0!==GR?GR:"botxd"}`.replace(/[^\w-]/g, "_"),
+     zr = `${mr}-${null!==(Sr=null===pr||void 0===pr?void 0:pr.keyId)&&void 0!==Sr?Sr:"botxd"}-${null!==(Qr=null===pr||void 0===pr?void 0:pr.modelId)&&void 0!==Qr?Qr:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 523. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9717-L9719` → after: `L9717-L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9717-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9717-L9719) · [Before (L9717-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9717-L9719)

```diff
-     "data-key-id": null !== (tR = null === VR || void 0 === VR ? void 0 : VR.keyId) && void 0 !== tR ? tR : "botxd",
-     "data-model-id": null !== (qR = null === VR || void 0 === VR ? void 0 : VR.modelId) && void 0 !== qR ? qR : "botxd",
-     title: null !== aR && void 0 !== aR ? aR : void 0,
+     "data-key-id": null !== (Wr = null === pr || void 0 === pr ? void 0 : pr.keyId) && void 0 !== Wr ? Wr : "botxd",
+     "data-model-id": null !== (Ir = null === pr || void 0 === pr ? void 0 : pr.modelId) && void 0 !== Ir ? Ir : "botxd",
+     title: null !== tr && void 0 !== tr ? tr : void 0,
```

#### 524. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9727` → after: `L9727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9727) · [Before (L9727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9727)

```diff
-       "aria-describedby": fR ? nR : void 0,
+       "aria-describedby": Er ? zr : void 0,
```

#### 525. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9754` → after: `L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9754) · [Before (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9754)

```diff
-     eD: qR,
+     bq: Ir,
```

#### 526. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9777` → after: `L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9777) · [Before (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9777)

```diff
-           at: null !== (GR = RR.usedAt) && void 0 !== GR ? GR : 0,
+           at: null !== (Qr = rr.usedAt) && void 0 !== Qr ? Qr : 0,
```

#### 527. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9800` → after: `L9800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9800) · [Before (L9800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9800)

```diff
-     bR = `${JR}-model`,
+     lr = `${Sr}-model`,
```

#### 528. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9813` → after: `L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9813) · [Before (L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9813)

```diff
-       }, null !== (tR = null === yR || void 0 === yR ? void 0 : yR.modelId) && void 0 !== tR ? tR : "botxd")
+       }, null !== (Wr = null === Zr || void 0 === Zr ? void 0 : Zr.modelId) && void 0 !== Wr ? Wr : "botxd")
```

#### 529. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9821` → after: `L9821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9821) · [Before (L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9821)

```diff
-       hint: null !== LR && void 0 !== LR ? LR : `Bloxd's better AI. ${aR.status?Iq(aR.status):""}`.trim(),
+       hint: null !== hr && void 0 !== hr ? hr : `Bloxd's better AI. ${tr.status?GI(tr.status):""}`.trim(),
```

#### 530. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9827` → after: `L9827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9827) · [Before (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9827)

```diff
-         gq(null !== (RR = null === (JR = aR.status) || void 0 === JR ? void 0 : JR.provider) && void 0 !== RR ? RR : "ovh") && vq.Ur()
+         OI(null !== (rr = null === (Sr = tr.status) || void 0 === Sr ? void 0 : Sr.provider) && void 0 !== rr ? rr : "ovh") && lI.eN()
```

#### 531. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9832` → after: `L9832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9832) · [Before (L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9832)

```diff
-           if (gq(null !== (JR = null === RR || void 0 === RR ? void 0 : RR.provider) && void 0 !== JR ? JR : "ovh") || await wf.ask()) return vq.Ur(), !0;
+           if (OI(null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.provider) && void 0 !== Sr ? Sr : "ovh") || await pE.ask()) return lI.eN(), !0;
```

#### 532. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9843-L9844` → after: `L9843-L9844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9843-L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/107.js#L9843-L9844) · [Before (L9843-L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/107.js#L9843-L9844)

```diff
-         OR = bR ? null !== (JR = RR.models.find((JR => JR.id === RR.usedModelId))) && void 0 !== JR ? JR : Kq(RR.models) : void 0,
-         xR = null !== (GR = null === (yR = CR[RR.id]) || void 0 === yR ? void 0 : yR.trim().toLowerCase()) && void 0 !== GR ? GR : "",
+         Pr = lr ? null !== (Sr = rr.models.find((Sr => Sr.id === rr.usedModelId))) && void 0 !== Sr ? Sr : pI(rr.models) : void 0,
+         Hr = null !== (Qr = null === (Zr = Kr[rr.id]) || void 0 === Zr ? void 0 : Zr.trim().toLowerCase()) && void 0 !== Qr ? Qr : "",
```
