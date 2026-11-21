# Changed — Bundle Modifications Report (Part 085 / 133)

- **Updated at**: `2026-11-21T12:06 JST`
- **Part**: `85 / 133` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 084](part-084.md) · [Part 086 →](part-086.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (x17cru.159bd7ce → bqoxjr.2558012f · continued)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (937 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 375. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7069-L7073` → after: `L7069-L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7069-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7069-L7073) · [Before (L7069-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7069-L7073)

```diff
-           postToGameServer: dd
-         } = await Jd;
-         await dd("/ai-helper/turn", kd)
-       } catch (pd) {
-         console.warn("AI Helper: couldn't share a turn", pd)
+           postToGameServer: QQ
+         } = await FQ;
+         await QQ("/ai-helper/turn", wQ)
+       } catch (LQ) {
+         console.warn("AI Helper: couldn't share a turn", LQ)
```

#### 376. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7076-L7078` → after: `L7076-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7076-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7076-L7078) · [Before (L7076-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7076-L7078)

```diff
-     var QP = kd(313),
-       LP = kd(149);
-     const OP = {
+     var YD = wQ(317),
+       xD = wQ(160);
+     const AD = {
```

#### 377. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7134` → after: `L7134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7134) · [Before (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7134)

```diff
-       return "https:" !== Jd.protocol && ("http:" !== Jd.protocol || !kd) || Jd.username || Jd.password || Jd.search ? null : `${Jd.origin}${Jd.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== FQ.protocol && ("http:" !== FQ.protocol || !wQ) || FQ.username || FQ.password || FQ.search ? null : `${FQ.origin}${FQ.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 378. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7143` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7143) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7143)

```diff
-         super(`AI key request: ${dd}`), this.problem = dd, this.retryAfterMs = Jd, this.status = kd, this.detail = pd
+         super(`AI key request: ${QQ}`), this.problem = QQ, this.retryAfterMs = FQ, this.status = wQ, this.detail = LQ
```

#### 379. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7148` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7148) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7148)

```diff
-       return ("" === Jd ? dd : dd.split(Jd).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === FQ ? QQ : QQ.split(FQ).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 380. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7155` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7155) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7155)

```diff
-           return `${kd} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${wQ} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 381. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7159` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7159) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7159)

```diff
-           return `${kd} can't find that model. Check its name.`;
+           return `${wQ} can't find that model. Check its name.`;
```

#### 382. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7161` → after: `L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7161) · [Before (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7161)

```diff
-           return "anthropic" === Jd ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Jd ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === FQ ? "Claude didn't accept your key: check it, or make a new one." : "custom" === FQ ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 383. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7163` → after: `L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7163) · [Before (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7163)

```diff
-           return "custom" === Jd ? "That server stopped your key for now: it has used all it can." : `${kd} stopped your key for now: it has used all it can. Check it on ${kd}'s website.`;
+           return "custom" === FQ ? "That server stopped your key for now: it has used all it can." : `${wQ} stopped your key for now: it has used all it can. Check it on ${wQ}'s website.`;
```

#### 384. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7165` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7165) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7165)

```diff
-           return `${kd} doesn't work from where you are.`;
+           return `${wQ} doesn't work from where you are.`;
```

#### 385. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7169` → after: `L7169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7169) · [Before (L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7169)

```diff
-           return `${kd} had a problem with that. Try again in a minute.`
+           return `${wQ} had a problem with that. Try again in a minute.`
```

#### 386. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7195` → after: `L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7195) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7195)

```diff
-         }(Jd)) throw new Error(`AI key request to an unknown host for ${dd}`);
+         }(FQ)) throw new Error(`AI key request to an unknown host for ${QQ}`);
```

#### 387. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7204` → after: `L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7204) · [Before (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7204)

```diff
-         throw console.warn(`AI key request: ${dd} answered ${Nd.status}`), new qP(function(dd, Jd, kd) {
+         throw console.warn(`AI key request: ${QQ} answered ${qQ.status}`), new CD(function(QQ, FQ, wQ) {
```

#### 388. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7211` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7211) · [Before (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7211)

```diff
-           return Number.isFinite(kd) ? 1e3 * kd : Math.max(0, Date.parse(Jd) - Date.now()) || void 0
+           return Number.isFinite(wQ) ? 1e3 * wQ : Math.max(0, Date.parse(FQ) - Date.now()) || void 0
```

#### 389. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7218` → after: `L7218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7218) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7218)

```diff
-             kd = "string" === typeof Nd ? Nd : dd
+             wQ = "string" === typeof qQ ? qQ : QQ
```

#### 390. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7267` → after: `L7267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7267) · [Before (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7267)

```diff
-         Ypd: Pd,
+         ULQ: DQ,
```

#### 391. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7275)

```diff
-         const Pd = null !== (kd = null === (pd = dd.match(/```/g)) || void 0 === pd ? void 0 : pd.length) && void 0 !== kd ? kd : 0,
+         const DQ = null !== (wQ = null === (LQ = QQ.match(/```/g)) || void 0 === LQ ? void 0 : LQ.length) && void 0 !== wQ ? wQ : 0,
```

#### 392. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7288` → after: `L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7288) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7288)

```diff
-         written: Zd ? od : void 0,
+         written: kQ ? HQ : void 0,
```

#### 393. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7300` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7300) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7300)

```diff
-       const pd = null !== (kd = Jd.tools) && void 0 !== kd ? kd : [];
+       const LQ = null !== (wQ = FQ.tools) && void 0 !== wQ ? wQ : [];
```

#### 394. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7351` → after: `L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7351) · [Before (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7351)

```diff
-             models: (null !== (Jd = (await kd.json()).data) && void 0 !== Jd ? Jd : []).map((dd => ({
+             models: (null !== (FQ = (await wQ.json()).data) && void 0 !== FQ ? FQ : []).map((QQ => ({
```

#### 395. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7378` → after: `L7378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7378) · [Before (L7378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7378)

```diff
-           return await sW(null !== (Nd = Wd.body) && void 0 !== Nd ? Nd : new ReadableStream, (Jd => {
+           return await Co(null !== (qQ = oQ.body) && void 0 !== qQ ? qQ : new ReadableStream, (FQ => {
```

#### 396. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7383-L7384` → after: `L7383-L7384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7383-L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7383-L7384) · [Before (L7383-L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7383-L7384)

```diff
-             Zd += null !== (Nd = null !== (Wd = null === Rd || void 0 === Rd || null === (od = Rd.delta) || void 0 === od ? void 0 : od.reasoning) && void 0 !== Wd ? Wd : null === Rd || void 0 === Rd || null === (ld = Rd.delta) || void 0 === ld ? void 0 : ld.reasoning_content) && … [truncated]
-             for (const dd of null !== (Id = null === Rd || void 0 === Rd || null === (Gd = Rd.delta) || void 0 === Gd ? void 0 : Gd.tool_calls) && void 0 !== Id ? Id : []) {
+             kQ += null !== (qQ = null !== (oQ = null === eQ || void 0 === eQ || null === (HQ = eQ.delta) || void 0 === HQ ? void 0 : HQ.reasoning) && void 0 !== oQ ? oQ : null === eQ || void 0 === eQ || null === (bQ = eQ.delta) || void 0 === bQ ? void 0 : bQ.reasoning_content) && … [truncated]
+             for (const QQ of null !== (MQ = null === eQ || void 0 === eQ || null === (GQ = eQ.delta) || void 0 === GQ ? void 0 : GQ.tool_calls) && void 0 !== MQ ? MQ : []) {
```

#### 397. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7397` → after: `L7397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7397) · [Before (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7397)

```diff
-             Ypd: gd,
+             ULQ: vQ,
```

#### 398. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7417` → after: `L7417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7417) · [Before (L7417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7417)

```diff
-         return await mP(aP, dd, (async dd => YP("openrouter", `${OP.openrouter.baseUrl}/key`, {
+         return await ID(RD, QQ, (async QQ => rD("openrouter", `${AD.openrouter.baseUrl}/key`, {
```

#### 399. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7438` → after: `L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7438) · [Before (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7438)

```diff
-             models: (null !== (Jd = (await kd.json()).data) && void 0 !== Jd ? Jd : []).map((dd => ({
+             models: (null !== (FQ = (await wQ.json()).data) && void 0 !== FQ ? FQ : []).map((QQ => ({
```

#### 400. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7471` → after: `L7471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7471) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7471)

```diff
-           await sW(null !== (Wd = Pd.body) && void 0 !== Wd ? Wd : new ReadableStream, (Jd => {
+           await Co(null !== (oQ = DQ.body) && void 0 !== oQ ? oQ : new ReadableStream, (FQ => {
```

#### 401. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7476-L7477` → after: `L7476-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7476-L7477) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7476-L7477)

```diff
-             if ("content_block_start" === Wd.type && "tool_use" === (null === (pd = Wd.content_block) || void 0 === pd ? void 0 : pd.type)) od.set(null !== (Qd = Wd.index) && void 0 !== Qd ? Qd : od.size, {
-               name: null !== (Ld = Wd.content_block.name) && void 0 !== Ld ? Ld : "",
+             if ("content_block_start" === oQ.type && "tool_use" === (null === (LQ = oQ.content_block) || void 0 === LQ ? void 0 : LQ.type)) HQ.set(null !== (YQ = oQ.index) && void 0 !== YQ ? YQ : HQ.size, {
+               name: null !== (xQ = oQ.content_block.name) && void 0 !== xQ ? xQ : "",
```

#### 402. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7482-L7483` → after: `L7482-L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7482-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7482-L7483) · [Before (L7482-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7482-L7483)

```diff
-               Zd += null !== (Od = null === (ed = Wd.delta) || void 0 === ed ? void 0 : ed.text) && void 0 !== Od ? Od : "", gd += null !== (Rd = null === (Id = Wd.delta) || void 0 === Id ? void 0 : Id.thinking) && void 0 !== Rd ? Rd : "";
-               const dd = od.get(null !== (Gd = Wd.index) && void 0 !== Gd ? Gd : -1);
+               kQ += null !== (AQ = null === (tQ = oQ.delta) || void 0 === tQ ? void 0 : tQ.text) && void 0 !== AQ ? AQ : "", vQ += null !== (eQ = null === (MQ = oQ.delta) || void 0 === MQ ? void 0 : MQ.thinking) && void 0 !== eQ ? eQ : "";
+               const QQ = HQ.get(null !== (GQ = oQ.index) && void 0 !== GQ ? GQ : -1);
```

#### 403. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7485` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7485) · [Before (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7485)

```diff
-               if (dd && "input_json_delta" === (null === (vd = Wd.delta) || void 0 === vd ? void 0 : vd.type)) dd.args += null !== (xd = Wd.delta.partial_json) && void 0 !== xd ? xd : ""
+               if (QQ && "input_json_delta" === (null === (pQ = oQ.delta) || void 0 === pQ ? void 0 : pQ.type)) QQ.args += null !== (cQ = oQ.delta.partial_json) && void 0 !== cQ ? cQ : ""
```

#### 404. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7501` → after: `L7501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7501) · [Before (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7501)

```diff
-             Ypd: Cd,
+             ULQ: mQ,
```

#### 405. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7527` → after: `L7527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7527) · [Before (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7527)

```diff
-             models: (null !== (Jd = (await kd.json()).models) && void 0 !== Jd ? Jd : []).filter((dd => {
+             models: (null !== (FQ = (await wQ.json()).models) && void 0 !== FQ ? FQ : []).filter((QQ => {
```

#### 406. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7550` → after: `L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7550) · [Before (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7550)

```diff
-           const Pd = await YP("gemini", `${this.baseUrl}/models/${encodeURIComponent(dd)}:streamGenerateContent?alt=sse`, {
+           const DQ = await rD("gemini", `${this.baseUrl}/models/${encodeURIComponent(QQ)}:streamGenerateContent?alt=sse`, {
```

#### 407. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7569` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7569) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7569)

```diff
-           return await sW(null !== (Wd = Pd.body) && void 0 !== Wd ? Wd : new ReadableStream, (Jd => {
+           return await Co(null !== (oQ = DQ.body) && void 0 !== oQ ? oQ : new ReadableStream, (FQ => {
```

#### 408. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7573` → after: `L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7573) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7573)

```diff
-             for (const dd of null !== (Qd = null === ld || void 0 === ld || null === (Ld = ld.content) || void 0 === Ld ? void 0 : Ld.parts) && void 0 !== Qd ? Qd : []) {
+             for (const QQ of null !== (YQ = null === bQ || void 0 === bQ || null === (xQ = bQ.content) || void 0 === xQ ? void 0 : xQ.parts) && void 0 !== YQ ? YQ : []) {
```

#### 409. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7576-L7577` → after: `L7576-L7577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7576-L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7576-L7577) · [Before (L7576-L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7576-L7577)

```diff
-                 name: null !== (Od = dd.functionCall.name) && void 0 !== Od ? Od : "",
-                 args: JSON.stringify(null !== (ed = dd.functionCall.args) && void 0 !== ed ? ed : {})
+                 name: null !== (AQ = QQ.functionCall.name) && void 0 !== AQ ? AQ : "",
+                 args: JSON.stringify(null !== (tQ = QQ.functionCall.args) && void 0 !== tQ ? tQ : {})
```

#### 410. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7581` → after: `L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7581) · [Before (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7581)

```diff
-                 gd += null !== (Rd = dd.text) && void 0 !== Rd ? Rd : ""
+                 vQ += null !== (eQ = QQ.text) && void 0 !== eQ ? eQ : ""
```

#### 411. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7584)

```diff
-                 Zd += null !== (Id = dd.text) && void 0 !== Id ? Id : ""
+                 kQ += null !== (MQ = QQ.text) && void 0 !== MQ ? MQ : ""
```

#### 412. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7596` → after: `L7596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7596) · [Before (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7596)

```diff
-             Ypd: Cd,
+             ULQ: mQ,
```

#### 413. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7621` → after: `L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7621) · [Before (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7621)

```diff
-           return new fP("custom", null !== kd && void 0 !== kd ? kd : "", Jd)
+           return new zD("custom", null !== wQ && void 0 !== wQ ? wQ : "", FQ)
```

#### 414. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7749` → after: `L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7749) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7749)

```diff
-         name: null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.name) && void 0 !== pd ? pd : Jd,
+         name: null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.name) && void 0 !== LQ ? LQ : FQ,
```

#### 415. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7773)

```diff
-       return null !== (Jd = dd.find((dd => "smart" === dd.tier))) && void 0 !== Jd ? Jd : dd[0]
+       return null !== (FQ = QQ.find((QQ => "smart" === QQ.tier))) && void 0 !== FQ ? FQ : QQ[0]
```

#### 416. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7779)

```diff
-       return null !== (Jd = dd.name) && void 0 !== Jd ? Jd : xP(dd.provider, dd.baseUrl, kd)
+       return null !== (FQ = QQ.name) && void 0 !== FQ ? FQ : cD(QQ.provider, QQ.baseUrl, wQ)
```

#### 417. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7796)

```diff
-         return new URL(null !== (Jd = dd.baseUrl) && void 0 !== Jd ? Jd : "").protocol.startsWith("http")
+         return new URL(null !== (FQ = QQ.baseUrl) && void 0 !== FQ ? FQ : "").protocol.startsWith("http")
```

#### 418. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7806` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7806) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7806)

```diff
-         return console.warn(`AI Helper: no ${dd}`, Jd), null
+         return console.warn(`AI Helper: no ${QQ}`, FQ), null
```

#### 419. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7818` → after: `L7818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7818) · [Before (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7818)

```diff
-         this.state = null !== pd && void 0 !== pd && pd.remember ? null !== Nd && void 0 !== Nd && Nd.remember ? Nd : {
+         this.state = null !== LQ && void 0 !== LQ && LQ.remember ? null !== qQ && void 0 !== qQ && qQ.remember ? qQ : {
```

#### 420. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7821` → after: `L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7821) · [Before (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7821)

```diff
-         } : null !== (kd = null !== pd && void 0 !== pd ? pd : Nd) && void 0 !== kd ? kd : HP, this.ownsRemembered = this.state.remember && null !== Nd
+         } : null !== (wQ = null !== LQ && void 0 !== LQ ? LQ : qQ) && void 0 !== wQ ? wQ : yD, this.ownsRemembered = this.state.remember && null !== qQ
```

#### 421. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7838-L7839` → after: `L7838-L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7838-L7839) · [Before (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7838-L7839)

```diff
-           Zd = "custom" !== dd.provider ? dd.provider : null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.id) && void 0 !== pd ? pd : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           gd = void 0 === Jd ? tP(dd.models) : null !== (Nd = dd.models.find((dd => dd.id === Jd))) && void 0 !== Nd ? Nd : dd.models[0],
+           kQ = "custom" !== QQ.provider ? QQ.provider : null !== (LQ = null === DQ || void 0 === DQ ? void 0 : DQ.id) && void 0 !== LQ ? LQ : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           vQ = void 0 === FQ ? gD(QQ.models) : null !== (qQ = QQ.models.find((QQ => QQ.id === FQ))) && void 0 !== qQ ? qQ : QQ.models[0],
```

#### 422. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7854` → after: `L7854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7854) · [Before (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7854)

```diff
-           Qd = ld ? this.state.keys.filter((dd => dd.id !== Zd)).map((dd => dd.id === kd ? Kd : dd)) : od ? [...this.state.keys, Kd] : this.state.keys.map((dd => dd.id === Zd ? Kd : dd)),
+           YQ = bQ ? this.state.keys.filter((QQ => QQ.id !== kQ)).map((QQ => QQ.id === wQ ? uQ : QQ)) : HQ ? [...this.state.keys, uQ] : this.state.keys.map((QQ => QQ.id === kQ ? uQ : QQ)),
```

#### 423. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7873)

```diff
-             return "" === kd ? Nd : {
+             return "" === wQ ? qQ : {
```

#### 424. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L7968` → after: `L7968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L7968) · [Before (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L7968)

```diff
-           pd = (null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.keys) && void 0 !== Jd ? Jd : []).filter((dd => this.state.keys.every((Jd => !wP(Jd, dd)))));
+           LQ = (null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.keys) && void 0 !== FQ ? FQ : []).filter((QQ => this.state.keys.every((FQ => !BD(FQ, QQ)))));
```

#### 425. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8012` → after: `L8012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8012) · [Before (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8012)

```diff
-           return Array.isArray(Jd.keys) && Jd.keys.every(AP) ? Jd : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(FQ.keys) && FQ.keys.every(dD) ? FQ : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 426. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8054` → after: `L8054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8054) · [Before (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8054)

```diff
-       const Zd = null !== (kd = null === Pd || void 0 === Pd ? void 0 : Pd.trim()) && void 0 !== kd ? kd : "";
+       const kQ = null !== (wQ = null === DQ || void 0 === DQ ? void 0 : DQ.trim()) && void 0 !== wQ ? wQ : "";
```

#### 427. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8084` → after: `L8084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8084) · [Before (L8084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8084)

```diff
-               return 0 !== (null !== (kd = null === (pd = Jd.tools) || void 0 === pd ? void 0 : pd.length) && void 0 !== kd ? kd : 0) && dd instanceof qP && "failed" === dd.problem && (400 === dd.status || 404 === dd.status && /\btool/i.test(null !== (Nd = dd.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (wQ = null === (LQ = FQ.tools) || void 0 === LQ ? void 0 : LQ.length) && void 0 !== wQ ? wQ : 0) && QQ instanceof CD && "failed" === QQ.problem && (400 === QQ.status || 404 === QQ.status && /\btool/i.test(null !== (qQ = QQ.detail) && void 0 != … [truncated]
```

#### 428. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8099` → after: `L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8099) · [Before (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8099)

```diff
-         return await (gd = Math.min(null !== (Pd = null !== (Zd = od.retryAfterMs) && void 0 !== Zd ? Zd : kd.retryWaitMs) && void 0 !== Pd ? Pd : 3e3, 2e4), Cd = kd.signal, new Promise(((dd, Jd) => {
+         return await (vQ = Math.min(null !== (DQ = null !== (kQ = HQ.retryAfterMs) && void 0 !== kQ ? kQ : wQ.retryWaitMs) && void 0 !== DQ ? DQ : 3e3, 2e4), mQ = wQ.signal, new Promise(((QQ, FQ) => {
```

#### 429. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8111` → after: `L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8111) · [Before (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8111)

```diff
-     var WZ = kd(3524);
+     var Dk = wQ(3516);
```

#### 430. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8228` → after: `L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8228) · [Before (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8228)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${qZ((null!==(Jd=dd.availableFrom)&&void 0!==Jd?Jd:kd)-kd)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${Sk((null!==(FQ=QQ.availableFrom)&&void 0!==FQ?FQ:wQ)-wQ)} to go.`;
```

#### 431. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8230` → after: `L8230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8230) · [Before (L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8230)

```diff
-           return dd.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(dd,Jd){const kd=Math.ceil((dd-Jd)/36e5);if(kd<=24)return kd<=1?"within the hour":`in ${kd} hours`;return`in ${qZ(dd-Jd)}`}(dd.resetsAt,kd)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return QQ.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(QQ,FQ){const wQ=Math.ceil((QQ-FQ)/36e5);if(wQ<=24)return wQ<=1?"within the hour":`in ${wQ} hours`;return`in ${Sk(QQ-FQ)}`}(QQ.resetsAt,wQ)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 432. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8261` → after: `L8261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8261) · [Before (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8261)

```diff
-       return `Usage left: ${dd.left}`
+       return `Usage left: ${QQ.left}`
```

#### 433. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8265-L8266` → after: `L8265-L8266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8265-L8266) · [Before (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8265-L8266)

```diff
-       const Jd = Math.max(1, Math.ceil(dd / QP.i));
-       return 1 === Jd ? "1 day" : `${Jd} days`
+       const FQ = Math.max(1, Math.ceil(QQ / YD.j));
+       return 1 === FQ ? "1 day" : `${FQ} days`
```

#### 434. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8271` → after: `L8271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8271) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8271)

```diff
-       if (kd) return `${kd} Bot.xd is answering instead.`;
+       if (wQ) return `${wQ} Bot.xd is answering instead.`;
```

#### 435. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8290` → after: `L8290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8290) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8290)

```diff
-           return dd.messages.length > 12 || dd.messages.some((dd => dd.content.length > tN)) || (null !== (Jd = null === (kd = dd.toolsJson) || void 0 === kd ? void 0 : kd.length) && void 0 !== Jd ? Jd : 0) > 1e5 || (null !== (pd = null === (Nd = dd.request) || void 0 === Nd ? vo … [truncated]
+           return QQ.messages.length > 12 || QQ.messages.some((QQ => QQ.content.length > Eq)) || (null !== (FQ = null === (wQ = QQ.toolsJson) || void 0 === wQ ? void 0 : wQ.length) && void 0 !== FQ ? FQ : 0) > 1e5 || (null !== (LQ = null === (qQ = QQ.request) || void 0 === qQ ? vo … [truncated]
```

#### 436. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8297` → after: `L8297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8297) · [Before (L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8297)

```diff
-         if (Jd instanceof LP.c && 413 === Jd.httpCode) return {
+         if (FQ instanceof xD.d && 413 === FQ.httpCode) return {
```

#### 437. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8315-L8317` → after: `L8315-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8315-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8315-L8317) · [Before (L8315-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8315-L8317)

```diff
-     var aZ = kd(29),
-       MZ = kd(22),
-       FZ = kd(2231);
+     var Ok = wQ(22),
+       sk = wQ(17),
+       rk = wQ(2188);
```

#### 438. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8321` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8321) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8321)

```diff
-       YZ ??= Promise.resolve().then((() => kd(2243))), YZ.then((dd => {
+       Ik ??= Promise.resolve().then((() => wQ(2197))), Ik.then((QQ => {
```

#### 439. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8343` → after: `L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8343) · [Before (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8343)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => kd(1371))), kd.e(347).then((() => kd(60901)))]);
+         }] = await Promise.all([Promise.resolve().then((() => wQ(1362))), wQ.e(347).then((() => wQ(60669)))]);
```

#### 440. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8350` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8350) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8350)

```diff
-                   aZ.j.nO("OpenStoreFromCodeEditor"), (0, FZ.q)({
+                   Ok.l.GA("OpenStoreFromCodeEditor"), (0, rk.o)({
```

#### 441. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8355-L8356` → after: `L8355-L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8355-L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8355-L8356) · [Before (L8355-L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8355-L8356)

```diff
-                   const dd = aZ.j.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === MZ.d.get("openEverythingMenuName") && (aZ.j.unsubscribe(dd), lZ.refresh())
+                   const QQ = Ok.l.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === sk.c.get("openEverythingMenuName") && (Ok.l.unsubscribe(QQ), Yk.refresh())
```

#### 442. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8539` → after: `L8539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8539) · [Before (L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8539)

```diff
-       return dd.length > 4 && dd.endsWith("ies") ? `${dd.slice(0,-3)}y` : dd.length > 3 && dd.endsWith("s") && !dd.endsWith("ss") ? dd.slice(0, -1) : dd
+       return QQ.length > 4 && QQ.endsWith("ies") ? `${QQ.slice(0,-3)}y` : QQ.length > 3 && QQ.endsWith("s") && !QQ.endsWith("ss") ? QQ.slice(0, -1) : QQ
```

#### 443. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8555` → after: `L8555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8555) · [Before (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8555)

```diff
-         Nd = hZ(Jd ? dd : (0, LJ.s)(dd, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, LJ.m, (() => "projectRequire"))),
+         qQ = Ek(FQ ? QQ : (0, YF.x)(QQ, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, YF.m, (() => "projectRequire"))),
```

#### 444. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8558` → after: `L8558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8558) · [Before (L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8558)

```diff
-         for (const Nd of (0, LJ.f)(dd, /(global|window|document|process|require)\b\s*[.([]/g, LJ.m)) pd.has(Nd[1]) || Wd.has(Nd[1]) || (pd.add(Nd[1]), kd.push(`Line ${Jd+1} uses "${Nd[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const qQ of (0, YF.d)(QQ, /(global|window|document|process|require)\b\s*[.([]/g, YF.m)) LQ.has(qQ[1]) || oQ.has(qQ[1]) || (LQ.add(qQ[1]), wQ.push(`Line ${FQ+1} uses "${qQ[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 445. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8573` → after: `L8573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8573) · [Before (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8573)

```diff
-         const Qd = [null !== (Wd = Jd[pd - 2]) && void 0 !== Wd ? Wd : "", null !== (Pd = Jd[pd - 1]) && void 0 !== Pd ? Pd : "", dd.slice(0, Cd)].join(" ");
+         const YQ = [null !== (oQ = FQ[LQ - 2]) && void 0 !== oQ ? oQ : "", null !== (DQ = FQ[LQ - 1]) && void 0 !== DQ ? DQ : "", QQ.slice(0, mQ)].join(" ");
```

#### 446. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8575-L8576` → after: `L8575-L8576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8575-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8575-L8576) · [Before (L8575-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8575-L8576)

```diff
-         const Ld = null !== (Zd = null === (gd = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(od)) || void 0 === gd ? void 0 : gd[1]) && void 0 !== Zd ? Zd : "coins";
-         kd.push(`Line ${pd+1} sets the saved "${Ld}" back to ${ld} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${Ld}") is null.`)
+         const xQ = null !== (kQ = null === (vQ = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(HQ)) || void 0 === vQ ? void 0 : vQ[1]) && void 0 !== kQ ? kQ : "coins";
+         wQ.push(`Line ${LQ+1} sets the saved "${xQ}" back to ${bQ} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${xQ}") is null.`)
```

#### 447. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8582` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8582) · [Before (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8582)

```diff
-       const pd = null !== (Jd = null === (kd = dd.split("### Parameters:")[1]) || void 0 === kd ? void 0 : kd.split("###")[0]) && void 0 !== Jd ? Jd : "",
+       const LQ = null !== (FQ = null === (wQ = QQ.split("### Parameters:")[1]) || void 0 === wQ ? void 0 : wQ.split("###")[0]) && void 0 !== FQ ? FQ : "",
```

#### 448. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8630-L8632` → after: `L8630-L8632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8630-L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8630-L8632) · [Before (L8630-L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8630-L8632)

```diff
-         Nd = `\\((?:[^()]*[\\s,])?${pd}(?![\\w$])[^()]*\\)`,
-         Wd = new RegExp(`(?:const|let|var)\\s+${pd}(?![\\w$])|${pd}\\s*(?:\\+?=(?![=>])|=>)|${Nd}\\s*=>|function\\s*[\\w$]*\\s*${Nd}`, "g");
-       return 1 === (0, LJ.f)(dd, Wd, LJ.m).length ? null === (kd = new RegExp(`\\b(?:const|let|var)\\s+${pd}\\s*=\\s*${zZ}\\s*(?:;|//|$)`, "m").exec(dd)) || void 0 === kd ? void 0 : kd[1] : void 0
+         qQ = `\\((?:[^()]*[\\s,])?${LQ}(?![\\w$])[^()]*\\)`,
+         oQ = new RegExp(`(?:const|let|var)\\s+${LQ}(?![\\w$])|${LQ}\\s*(?:\\+?=(?![=>])|=>)|${qQ}\\s*=>|function\\s*[\\w$]*\\s*${qQ}`, "g");
+       return 1 === (0, YF.d)(QQ, oQ, YF.m).length ? null === (wQ = new RegExp(`\\b(?:const|let|var)\\s+${LQ}\\s*=\\s*${yk}\\s*(?:;|//|$)`, "m").exec(QQ)) || void 0 === wQ ? void 0 : wQ[1] : void 0
```

#### 449. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8641-L8642` → after: `L8641-L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8641-L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8641-L8642) · [Before (L8641-L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8641-L8642)

```diff
-           pd = -1 === kd ? Jd : Jd.slice(0, kd + 1);
-         return pd.length > 110 ? `${pd.slice(0,107)}...` : pd
+           LQ = -1 === wQ ? FQ : FQ.slice(0, wQ + 1);
+         return LQ.length > 110 ? `${LQ.slice(0,107)}...` : LQ
```

#### 450. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8644` → after: `L8644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8644) · [Before (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8644)

```diff
-       return pd = "api" === dd ? `api.${Jd}(${VZ(kd).join(", ")})${Nd?` \u2014 ${Nd}`:""}` : "callback" === dd ? `${Jd}(${VZ(kd).join(", ")})${Nd?` \u2014 ${Nd}`:""}` : "clientOption" === dd ? `${Jd}: ${function(dd){var Jd,kd;return null!==(Jd=null===(kd=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return LQ = "api" === QQ ? `api.${FQ}(${Zk(wQ).join(", ")})${qQ?` \u2014 ${qQ}`:""}` : "callback" === QQ ? `${FQ}(${Zk(wQ).join(", ")})${qQ?` \u2014 ${qQ}`:""}` : "clientOption" === QQ ? `${FQ}: ${function(QQ){var FQ,wQ;return null!==(FQ=null===(wQ=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8646)

```diff
-         Jd.map((dd => `"${dd}"`)).join(" or ")
+         FQ.map((QQ => `"${QQ}"`)).join(" or ")
```

#### 452. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8648` → after: `L8648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8648) · [Before (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8648)

```diff
-       The closest name is "${Jd[0]}", which may be something
+       The closest name is "${FQ[0]}", which may be something
```

#### 453. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8650)

```diff
-       `}function pg(dd){return dd.split("\n").slice(1).map((dd=>dd.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((dd=>""!==dd&&!dd.startsWith("#")))}class Ng{constructor(dd){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function qv(QQ){return QQ.split("\n").slice(1).map((QQ=>QQ.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((QQ=>""!==QQ&&!QQ.startsWith("#")))}class ov{constructor(QQ){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8654)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Jd.push({name:kd,text:Nd})}return Jd}(kd))Jd.push(AZ(dd,pd,Nd))};kd("api",dd.apiReference),kd("callback",dd.callbacks),kd("clientOption",dd.clientOptions),kd("snippet",dd.snippets),kd("howTo",dd.howTo);const pd=function(){const dd … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();FQ.push({name:wQ,text:qQ})}return FQ}(wQ))FQ.push(Qv(QQ,LQ,qQ))};wQ("api",QQ.apiReference),wQ("callback",QQ.callbacks),wQ("clientOption",QQ.clientOptions),wQ("snippet",QQ.snippets),wQ("howTo",QQ.howTo);const LQ=function(){const QQ … [truncated]
```

#### 455. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8665-L8666` → after: `L8665-L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8665-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8665-L8666) · [Before (L8665-L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8665-L8666)

```diff
-       n\ nUsage: \`${dd.signature}\`\n\n\`\`\`js\n${dd.example}\n\`\`\``)),
-   Jd = Lp.map((dd => `## ${dd.name}\nPrefab (${dd.kind}, ${dd.category}): put in with use_prefab. ${Yp(dd,!1)}`));
+       n\ nUsage: \`${QQ.signature}\`\n\n\`\`\`js\n${QQ.example}\n\`\`\``)),
+   FQ = YL.map((QQ => `## ${QQ.name}\nPrefab (${QQ.kind}, ${QQ.category}): put in with use_prefab. ${sL(QQ,!1)}`));
```

#### 456. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8668-L8669` → after: `L8668-L8669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8668-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8668-L8669) · [Before (L8668-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8668-L8669)

```diff
-     helpers: `# Ready-made functions\n\n${dd.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${Jd.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${QQ.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${FQ.join("\n\n")}\n`
```

#### 457. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8677` → after: `L8677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8677) · [Before (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8677)

```diff
-     this.wordCounts.set(dd, (null !== (Nd = this.wordCounts.get(dd)) && void 0 !== Nd ? Nd : 0) + 1)
+     this.wordCounts.set(QQ, (null !== (qQ = this.wordCounts.get(QQ)) && void 0 !== qQ ? qQ : 0) + 1)
```

#### 458. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8682` → after: `L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8682) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8682)

```diff
-   const pd = null !== (Jd = null === (kd = dd.split("## Mob Variations")[1]) || void 0 === kd ? void 0 : kd.split("```")[1]) && void 0 !== Jd ? Jd : "",
+   const LQ = null !== (FQ = null === (wQ = QQ.split("## Mob Variations")[1]) || void 0 === wQ ? void 0 : wQ.split("```")[1]) && void 0 !== FQ ? FQ : "",
```

#### 459. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8705)

```diff
-       return null !== (Jd = dd[1]) && void 0 !== Jd ? Jd : dd[2]
+       return null !== (FQ = QQ[1]) && void 0 !== FQ ? FQ : QQ[2]
```

#### 460. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8712)

```diff
-     for (const Nd of (0, LJ.f)(dd, /([\w$]+)\s*\(/g, LJ.m)) {
+     for (const qQ of (0, YF.d)(QQ, /([\w$]+)\s*\(/g, YF.m)) {
```

#### 461. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8716)

```diff
-       Wd.has(Pd) || pd.has(Pd) || Zd || "api" !== (null === (kd = this.byName.get(Pd)) || void 0 === kd ? void 0 : kd.kind) || Wd.set(Pd, `Line ${Jd+1} calls ${Pd} without "api.", so it throws there. Did you mean api.${Pd}?`)
+       oQ.has(DQ) || LQ.has(DQ) || kQ || "api" !== (null === (wQ = this.byName.get(DQ)) || void 0 === wQ ? void 0 : wQ.kind) || oQ.set(DQ, `Line ${FQ+1} calls ${DQ} without "api.", so it throws there. Did you mean api.${DQ}?`)
```

#### 462. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8725-L8726` → after: `L8725-L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8725-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8725-L8726) · [Before (L8725-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8725-L8726)

```diff
-     const Jd = this.find(dd.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((dd => "api" === dd.kind)).slice(0, 2).map((dd => `api.${dd.name}`));
-     return `api.${dd} doesn't exist.${Jd.length?` Did you mean ${Jd.join(" or ")}?`:""}`
+     const FQ = this.find(QQ.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((QQ => "api" === QQ.kind)).slice(0, 2).map((QQ => `api.${QQ.name}`));
+     return `api.${QQ} doesn't exist.${FQ.length?` Did you mean ${FQ.join(" or ")}?`:""}`
```

#### 463. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8746` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8746) · [Before (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8746)

```diff
-         ld = od ? null === (gd = new RegExp(`(?:^|[{,])\\s*${od.replaceAll("$","\\$")}\\s*:\\s*${zZ}`, "m").exec(dd)) || void 0 === gd ? void 0 : gd[1] : void 0,
+         bQ = HQ ? null === (vQ = new RegExp(`(?:^|[{,])\\s*${HQ.replaceAll("$","\\$")}\\s*:\\s*${yk}`, "m").exec(QQ)) || void 0 === vQ ? void 0 : vQ[1] : void 0,
```

#### 464. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8748-L8749` → after: `L8748-L8749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8748-L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8748-L8749) · [Before (L8748-L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8748-L8749)

```diff
-         Ld = null !== (Cd = null === (Kd = new RegExp(`\\?\\s*${zZ}\\s*:\\s*${zZ}$`).exec(pd)) || void 0 === Kd ? void 0 : Kd.slice(1)) && void 0 !== Cd ? Cd : [];
-       for (const dd of [null !== (Od = null !== ld && void 0 !== ld ? ld : Qd) && void 0 !== Od ? Od : pd, ...Ld]) {
+         xQ = null !== (mQ = null === (uQ = new RegExp(`\\?\\s*${yk}\\s*:\\s*${yk}$`).exec(LQ)) || void 0 === uQ ? void 0 : uQ.slice(1)) && void 0 !== mQ ? mQ : [];
+       for (const QQ of [null !== (AQ = null !== bQ && void 0 !== bQ ? bQ : YQ) && void 0 !== AQ ? AQ : LQ, ...xQ]) {
```

#### 465. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8757` → after: `L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8757) · [Before (L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8757)

```diff
-   return [...kd].map((dd => `"${dd}" isn't an item or block name.${kg(this.suggestNames(dd))}`))
+   return [...wQ].map((QQ => `"${QQ}" isn't an item or block name.${Lv(this.suggestNames(QQ))}`))
```

#### 466. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8772` → after: `L8772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8772) · [Before (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8772)

```diff
-       return `"${Jd}" isn't a block or item name, so comparing with it is never true. Did you mean "${kd}"?`
+       return `"${FQ}" isn't a block or item name, so comparing with it is never true. Did you mean "${wQ}"?`
```

#### 467. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8777-L8778` → after: `L8777-L8778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8777-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8777-L8778) · [Before (L8777-L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8777-L8778)

```diff
-       kd = this.blockNames.has(Jd) || !this.itemAndBlockNames.includes(Jd) ? void 0 : [`Block of ${Jd}`, `${Jd} Block`].find((dd => this.blockNames.has(dd)));
-     !kd || dd.includes(`"${kd}"`) || dd.includes(`'${kd}'`) || Pd.set(Jd, kd)
+       wQ = this.blockNames.has(FQ) || !this.itemAndBlockNames.includes(FQ) ? void 0 : [`Block of ${FQ}`, `${FQ} Block`].find((QQ => this.blockNames.has(QQ)));
+     !wQ || QQ.includes(`"${wQ}"`) || QQ.includes(`'${wQ}'`) || DQ.set(FQ, wQ)
```

#### 468. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8782` → after: `L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8782) · [Before (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8782)

```diff
-     return `"${Jd}" is an item, not a block, so no block is ever called that. Did you mean "${kd}"?`
+     return `"${FQ}" is an item, not a block, so no block is ever called that. Did you mean "${wQ}"?`
```

#### 469. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8799-L8800` → after: `L8799-L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8799-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8799-L8800) · [Before (L8799-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8799-L8800)

```diff
-       } : pd.names.length > 0 || pd.isDecided ? pd : {
-         names: kd.length <= 2 ? kd : [],
+       } : LQ.names.length > 0 || LQ.isDecided ? LQ : {
+         names: wQ.length <= 2 ? wQ : [],
```

#### 470. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8804)

```diff
-     return `"${dd}" isn't a block or item name, so comparing a block with it is never true.${kg(Nd)}`
+     return `"${QQ}" isn't a block or item name, so comparing a block with it is never true.${Lv(qQ)}`
```

#### 471. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8819-L8820` → after: `L8819-L8820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8819-L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8819-L8820) · [Before (L8819-L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8819-L8820)

```diff
-           name: null !== (Nd = kd[1]) && void 0 !== Nd ? Nd : kd[2],
-           body: dd.slice(kd.index, null !== (Wd = null === (Pd = Jd[pd + 1]) || void 0 === Pd ? void 0 : Pd.index) && void 0 !== Wd ? Wd : dd.length)
+           name: null !== (qQ = wQ[1]) && void 0 !== qQ ? qQ : wQ[2],
+           body: QQ.slice(wQ.index, null !== (oQ = null === (DQ = FQ[LQ + 1]) || void 0 === DQ ? void 0 : DQ.index) && void 0 !== oQ ? oQ : QQ.length)
```

#### 472. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8828` → after: `L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8828) · [Before (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8828)

```diff
-         if (dd.text.includes(`"${pd}"`)) continue;
+         if (QQ.text.includes(`"${LQ}"`)) continue;
```

#### 473. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8830-L8831` → after: `L8830-L8831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8830-L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8830-L8831) · [Before (L8830-L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8830-L8831)

```diff
-           Pd = Wd.length > 0 ? `Did you mean ${Wd.map((dd=>`"${dd}"`)).join(" or ")}?` : /Return false/i.test(dd.text) ? `To stop it, return false instead of "${pd}".` : "Check Show Docs for what it can return.";
-         Jd.add(`${kd} can't use "${pd}" to stop anything. ${Pd}`)
+           DQ = oQ.length > 0 ? `Did you mean ${oQ.map((QQ=>`"${QQ}"`)).join(" or ")}?` : /Return false/i.test(QQ.text) ? `To stop it, return false instead of "${LQ}".` : "Check Show Docs for what it can return.";
+         FQ.add(`${wQ} can't use "${LQ}" to stop anything. ${DQ}`)
```

#### 474. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8853` → after: `L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8853) · [Before (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8853)

```diff
-     Wd = null !== (Jd = this.namesByLowerCase.get(kd)) && void 0 !== Jd ? Jd : this.namesByLowerCase.get(Nd);
+     oQ = null !== (FQ = this.namesByLowerCase.get(wQ)) && void 0 !== FQ ? FQ : this.namesByLowerCase.get(qQ);
```

#### 475. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8885` → after: `L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8885) · [Before (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8885)

```diff
-       dd && pd.set(dd, (null !== (kd = pd.get(dd)) && void 0 !== kd ? kd : 0) + Jd)
+       QQ && LQ.set(QQ, (null !== (wQ = LQ.get(QQ)) && void 0 !== wQ ? wQ : 0) + FQ)
```

#### 476. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8891` → after: `L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8891) · [Before (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8891)

```diff
-   for (const od of `${dd}\n${Jd}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const HQ of `${QQ}\n${FQ}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 477. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8893` → after: `L8893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8893) · [Before (L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8893)

```diff
-     Nd(this.byName.get(null !== (Zd = null !== (gd = od[1]) && void 0 !== gd ? gd : od[2]) && void 0 !== Zd ? Zd : od[3]), od[1] || od[2] ? 4 : 2)
+     qQ(this.byName.get(null !== (kQ = null !== (vQ = HQ[1]) && void 0 !== vQ ? vQ : HQ[2]) && void 0 !== kQ ? kQ : HQ[3]), HQ[1] || HQ[2] ? 4 : 2)
```

#### 478. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8895` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8895) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8895)

```diff
-   for (const od of (0, LJ.f)(Jd, /([A-Za-z_$][\w$]*)\s*\(/g, LJ.m)) {
+   for (const HQ of (0, YF.d)(FQ, /([A-Za-z_$][\w$]*)\s*\(/g, YF.m)) {
```

#### 479. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8904-L8905` → after: `L8904-L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8904-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8904-L8905) · [Before (L8904-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8904-L8905)

```diff
-       const kd = 1 / Math.log2(2 + (null !== (Kd = this.wordCounts.get(Jd)) && void 0 !== Kd ? Kd : 0));
-       od.nameWords.has(Jd) ? dd += 3 * kd : od.textWords.has(Jd) && (dd += kd)
+       const wQ = 1 / Math.log2(2 + (null !== (uQ = this.wordCounts.get(FQ)) && void 0 !== uQ ? uQ : 0));
+       HQ.nameWords.has(FQ) ? QQ += 3 * wQ : HQ.textWords.has(FQ) && (QQ += wQ)
```

#### 480. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8921` → after: `L8921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8921) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8921)

```diff
-   return null !== (Jd = null !== (kd = this.byName.get(pd)) && void 0 !== kd ? kd : this.sections.find((dd => dd.name.toLowerCase() === Nd))) && void 0 !== Jd ? Jd : null
+   return null !== (FQ = null !== (wQ = this.byName.get(LQ)) && void 0 !== wQ ? wQ : this.sections.find((QQ => QQ.name.toLowerCase() === qQ))) && void 0 !== FQ ? FQ : null
```

#### 481. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8958` → after: `L8958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8958) · [Before (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8958)

```diff
-         pd = new RegExp(`(^|[^\\w$.])${kd}\\s*\\(`),
+         LQ = new RegExp(`(^|[^\\w$.])${wQ}\\s*\\(`),
```

#### 482. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8984` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8984) · [Before (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8984)

```diff
-         when: `in ${kd[1]}`,
+         when: `in ${wQ[1]}`,
```

#### 483. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8991` → after: `L8991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8991) · [Before (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8991)

```diff
-     Zd = Wd && Jd ? ` ${Wd}` : "",
+     kQ = oQ && FQ ? ` ${oQ}` : "",
```

#### 484. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8995-L8996` → after: `L8995-L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8995-L8996) · [Before (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8995-L8996)

```diff
-     const dd = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Cd = null === (Kd = Nd[0]) || void 0 === Kd ? void 0 : Kd.trim()) && void 0 !== Cd ? Cd : ""),
-       Jd = null === (od = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (ld = null === (Qd = Nd[1]) || void 0 === Qd ? void 0 : Qd.trim()) && void 0 !== ld ? ld : "")) || void 0 === od ? void 0 : od[1],
+     const QQ = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (mQ = null === (uQ = qQ[0]) || void 0 === uQ ? void 0 : uQ.trim()) && void 0 !== mQ ? mQ : ""),
+       FQ = null === (HQ = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (bQ = null === (YQ = qQ[1]) || void 0 === YQ ? void 0 : YQ.trim()) && void 0 !== bQ ? bQ : "")) || void 0 === HQ ? void 0 : HQ[1],
```

#### 485. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L8999)

```diff
-         return /^(a|an|the)\s/i.test(Jd) || !/^[a-z]/i.test(Jd) ? Jd : `${/^[aeiou]/i.test(Jd)?"an":"a"} ${Jd}`
+         return /^(a|an|the)\s/i.test(FQ) || !/^[a-z]/i.test(FQ) ? FQ : `${/^[aeiou]/i.test(FQ)?"an":"a"} ${FQ}`
```

#### 486. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9001` → after: `L9001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9001) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9001)

```diff
-     return kd && null !== dd && void 0 !== dd && dd[3] ? `api.${gd[1]} needs ${kd}, but it got ${dd[3]}${Zd}.` : dd ? `api.${gd[1]} couldn't use its ${Ld=Number(dd[1]),1===Ld?"first":2===Ld?"second":3===Ld?"third":4===Ld?"fourth":`#${Ld}`} argument${Zd}.${kd?` It needs ${kd}.`:"" … [truncated]
+     return wQ && null !== QQ && void 0 !== QQ && QQ[3] ? `api.${vQ[1]} needs ${wQ}, but it got ${QQ[3]}${kQ}.` : QQ ? `api.${vQ[1]} couldn't use its ${xQ=Number(QQ[1]),1===xQ?"first":2===xQ?"second":3===xQ?"third":4===xQ?"fourth":`#${xQ}`} argument${kQ}.${wQ?` It needs ${wQ}.`:"" … [truncated]
```

#### 487. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9005)

```diff
-   if (Od) return Od[1] ? `${Od[1]} isn't a function${Zd}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${Zd}. Check each name it calls is spelt exactly right.`;
+   if (AQ) return AQ[1] ? `${AQ[1]} isn't a function${kQ}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${kQ}. Check each name it calls is spelt exactly right.`;
```

#### 488. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9007` → after: `L9007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9007) · [Before (L9007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9007)

```diff
-   if (ed) return `${ed[1]} isn't defined${Zd}. Check the spelling, or create it before using it.`;
+   if (tQ) return `${tQ[1]} isn't defined${kQ}. Check the spelling, or create it before using it.`;
```

#### 489. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9011-L9012` → after: `L9011-L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9011-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9011-L9012) · [Before (L9011-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9011-L9012)

```diff
-     const dd = null !== (Id = Rd[1]) && void 0 !== Id ? Id : Rd[3];
-     return `Your code tried to read${dd?` .${dd}`:" something"} from ${Rd[2]}${Zd}: a value it expected wasn't there.`
+     const QQ = null !== (MQ = eQ[1]) && void 0 !== MQ ? MQ : eQ[3];
+     return `Your code tried to read${QQ?` .${QQ}`:" something"} from ${eQ[2]}${kQ}: a value it expected wasn't there.`
```

#### 490. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9014` → after: `L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9014) · [Before (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9014)

```diff
-   return `Your code hit an error${Zd}: ${Pd.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${kQ}: ${DQ.replace(/^\w*Error:\s*/,"")}`
```

#### 491. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9093` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9093) · [Before (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9093)

```diff
-   return dd.replaceAll(`"${Jd}"`, `"${kd}"`).replaceAll(`'${Jd}'`, `'${kd}'`)
+   return QQ.replaceAll(`"${FQ}"`, `"${wQ}"`).replaceAll(`'${FQ}'`, `'${wQ}'`)
```

#### 492. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9097` → after: `L9097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9097) · [Before (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9097)

```diff
-   const kd = dd => ad().isIdentifier(dd) ? dd.text === Jd : dd.elements.some((dd => !ad().isOmittedExpression(dd) && kd(dd.name))),
+   const wQ = QQ => WQ().isIdentifier(QQ) ? QQ.text === FQ : QQ.elements.some((QQ => !WQ().isOmittedExpression(QQ) && wQ(QQ.name))),
```

#### 493. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9110` → after: `L9110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9110) · [Before (L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9110)

```diff
-       return (null === dd || void 0 === dd || null === (kd = dd.name) || void 0 === kd ? void 0 : kd.text) === Jd || void 0 !== pd && (ad().isNamespaceImport(pd) ? pd.name.text === Jd : pd.elements.some((dd => dd.name.text === Jd)))
+       return (null === QQ || void 0 === QQ || null === (wQ = QQ.name) || void 0 === wQ ? void 0 : wQ.text) === FQ || void 0 !== LQ && (WQ().isNamespaceImport(LQ) ? LQ.name.text === FQ : LQ.elements.some((QQ => QQ.name.text === FQ)))
```

#### 494. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9124` → after: `L9124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9124) · [Before (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9124)

```diff
-             text: `${kd}${Jd}${kd}`
+             text: `${wQ}${FQ}${wQ}`
```

#### 495. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9136` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9136) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9136)

```diff
-                 edit: Wd(Nd, ad().isShorthandPropertyAssignment(dd) ? `${pd}: ${kd}` : pd),
+                 edit: oQ(qQ, WQ().isShorthandPropertyAssignment(QQ) ? `${LQ}: ${wQ}` : LQ),
```

#### 496. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9138` → after: `L9138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9138) · [Before (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9138)

```diff
-                 qQ: Zd
+                 iY: kQ
```

#### 497. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9151` → after: `L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9151) · [Before (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9151)

```diff
-         return bk(dd, Pd.flatMap((dd => dd.depth !== Jd || dd.qQ ? [] : [dd.edit])))
+         return Iw(QQ, DQ.flatMap((QQ => QQ.depth !== FQ || QQ.iY ? [] : [QQ.edit])))
```

#### 498. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9189` → after: `L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9189) · [Before (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9189)

```diff
-               text: ad().isShorthandPropertyAssignment(Cd) ? `${Jd}: ${kd}` : kd
+               text: WQ().isShorthandPropertyAssignment(mQ) ? `${FQ}: ${wQ}` : wQ
```

#### 499. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9199-L9200` → after: `L9199-L9200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9199-L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9199-L9200) · [Before (L9199-L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9199-L9200)

```diff
-       const Jd = `(["'])${function(dd){return dd.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(kd)}\\1`;
-       return ("comparedBlock" === Nd ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Jd}`, `${Jd}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Jd}`, `${Jd}\\s*[!=]==?`, `\\bcase\\s+${Jd}\\s*:`, `\\.includes\\(\\s*${Jd}\\s*\\)`]).reduce(((dd, Jd) => dd.replace(new RegExp(Jd, "g"), … [truncated]
+       const FQ = `(["'])${function(QQ){return QQ.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(wQ)}\\1`;
+       return ("comparedBlock" === qQ ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${FQ}`, `${FQ}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${FQ}`, `${FQ}\\s*[!=]==?`, `\\bcase\\s+${FQ}\\s*:`, `\\.includes\\(\\s*${FQ}\\s*\\)`]).reduce(((QQ, FQ) => QQ.replace(new RegExp(FQ, "g"), … [truncated]
```

#### 500. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9210` → after: `L9210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9210) · [Before (L9210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9210)

```diff
-   return "export" === dd.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === dd.kind ? `The null given to ${dd.method} is gone.` : `"${dd.from}" is now "${dd.to}".`
+   return "export" === QQ.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "null" === QQ.kind ? `The null given to ${QQ.method} is gone.` : `"${QQ.from}" is now "${QQ.to}".`
```

#### 501. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9212` → after: `L9212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9212) · [Before (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9212)

```diff
- var sg = kd(41432);
+ var Wv = wQ(40855);
```

#### 502. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9269` → after: `L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9269) · [Before (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9269)

```diff
-       return Nd ? `${pd} didn't accept your key: it may be wrong or deleted.` : `${pd} didn't accept your key: it may be wrong or deleted. Check it on ${pd}'s website.`;
+       return qQ ? `${LQ} didn't accept your key: it may be wrong or deleted.` : `${LQ} didn't accept your key: it may be wrong or deleted. Check it on ${LQ}'s website.`;
```

#### 503. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9271` → after: `L9271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9271) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9271)

```diff
-       return Nd ? `${pd} stopped your key for now: it has used all it can.` : `${pd} stopped your key for now: it has used all it can. Check it on ${pd}'s website.`;
+       return qQ ? `${LQ} stopped your key for now: it has used all it can.` : `${LQ} stopped your key for now: it has used all it can. Check it on ${LQ}'s website.`;
```

#### 504. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9273` → after: `L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9273) · [Before (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9273)

```diff
-       return `Too many requests to ${kd} right now. Wait a minute and try again.`;
+       return `Too many requests to ${wQ} right now. Wait a minute and try again.`;
```

#### 505. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9275` → after: `L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9275) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9275)

```diff
-       return `${pd} can't find ${kd}. Pick another model, or press Check for new models in AI settings.`;
+       return `${LQ} can't find ${wQ}. Pick another model, or press Check for new models in AI settings.`;
```

#### 506. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9277` → after: `L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9277) · [Before (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9277)

```diff
-       return `${kd} took too long to answer.`;
+       return `${wQ} took too long to answer.`;
```

#### 507. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9279` → after: `L9279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9279) · [Before (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9279)

```diff
-       return Nd ? `Couldn't reach ${pd}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${pd}. Check your internet and your key.`;
+       return qQ ? `Couldn't reach ${LQ}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${LQ}. Check your internet and your key.`;
```

#### 508. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9281` → after: `L9281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9281) · [Before (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9281)

```diff
-       return `${pd} doesn't work from where you are.`;
+       return `${LQ} doesn't work from where you are.`;
```

#### 509. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9285` → after: `L9285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9285) · [Before (L9285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9285)

```diff
-       return `${kd} can't be used right now. Try again in a minute.`
+       return `${wQ} can't be used right now. Try again in a minute.`
```

#### 510. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9297` → after: `L9297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9297) · [Before (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9297)

```diff
-       return `Not answered: ${pd} didn't accept your key.`;
+       return `Not answered: ${LQ} didn't accept your key.`;
```

#### 511. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9299` → after: `L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9299) · [Before (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9299)

```diff
-       return `Not answered: ${pd} couldn't find ${kd}.`;
+       return `Not answered: ${LQ} couldn't find ${wQ}.`;
```

#### 512. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9301` → after: `L9301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9301) · [Before (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9301)

```diff
-       return `Not answered: ${pd} stopped your key for now.`;
+       return `Not answered: ${LQ} stopped your key for now.`;
```

#### 513. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9303)

```diff
-       return `Not answered: too many requests to ${kd}.`;
+       return `Not answered: too many requests to ${wQ}.`;
```

#### 514. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9305` → after: `L9305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9305) · [Before (L9305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9305)

```diff
-       return `Not answered: ${kd} took too long.`;
+       return `Not answered: ${wQ} took too long.`;
```

#### 515. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9307` → after: `L9307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9307) · [Before (L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9307)

```diff
-       return `Not answered: couldn't reach ${pd}.`;
+       return `Not answered: couldn't reach ${LQ}.`;
```

#### 516. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9309` → after: `L9309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9309) · [Before (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9309)

```diff
-       return `Not answered: ${pd} doesn't work from where you are.`;
+       return `Not answered: ${LQ} doesn't work from where you are.`;
```

#### 517. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9313` → after: `L9313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9313) · [Before (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9313)

```diff
-       return `Not answered: ${kd} couldn't be used.`
+       return `Not answered: ${wQ} couldn't be used.`
```

#### 518. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9331` → after: `L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9331) · [Before (L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9331)

```diff
-       ...sg.e,
+       ...Wv.g,
```

#### 519. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9464` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9464) · [Before (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9464)

```diff
-       return "" === dd ? "no key needed" : dd.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Jd ? `key \u2026${dd.slice(-4)}` : `${(null!==(kd=null===(pd=/^[a-zA-Z]+-/.exec(dd))||void 0===pd?void 0:pd[0])&&void 0!==kd?kd:dd.slice(0,4)).slice(0,6)}\u2026${dd.slice(-4)}`
+       return "" === QQ ? "no key needed" : QQ.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === FQ ? `key \u2026${QQ.slice(-4)}` : `${(null!==(wQ=null===(LQ=/^[a-zA-Z]+-/.exec(QQ))||void 0===LQ?void 0:LQ[0])&&void 0!==wQ?wQ:QQ.slice(0,4)).slice(0,6)}\u2026${QQ.slice(-4)}`
```

#### 520. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9486` → after: `L9486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9486) · [Before (L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9486)

```diff
-         "aria-label": `Edit ${Wd} key`,
+         "aria-label": `Edit ${oQ} key`,
```

#### 521. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9491` → after: `L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9491) · [Before (L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9491)

```diff
-         "aria-label": `Rename ${Wd} key`,
+         "aria-label": `Rename ${oQ} key`,
```

#### 522. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9512` → after: `L9512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9512) · [Before (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9512)

```diff
-     Rd = `${ld}-${null!==(Jd=null===Kd||void 0===Kd?void 0:Kd.keyId)&&void 0!==Jd?Jd:"botxd"}-${null!==(kd=null===Kd||void 0===Kd?void 0:Kd.modelId)&&void 0!==kd?kd:"botxd"}`.replace(/[^\w-]/g, "_"),
+     eQ = `${bQ}-${null!==(FQ=null===uQ||void 0===uQ?void 0:uQ.keyId)&&void 0!==FQ?FQ:"botxd"}-${null!==(wQ=null===uQ||void 0===uQ?void 0:uQ.modelId)&&void 0!==wQ?wQ:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 523. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9516-L9518` → after: `L9516-L9518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9516-L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9516-L9518) · [Before (L9516-L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9516-L9518)

```diff
-     "data-key-id": null !== (Nd = null === Kd || void 0 === Kd ? void 0 : Kd.keyId) && void 0 !== Nd ? Nd : "botxd",
-     "data-model-id": null !== (Zd = null === Kd || void 0 === Kd ? void 0 : Kd.modelId) && void 0 !== Zd ? Zd : "botxd",
-     title: null !== Od && void 0 !== Od ? Od : void 0,
+     "data-key-id": null !== (qQ = null === uQ || void 0 === uQ ? void 0 : uQ.keyId) && void 0 !== qQ ? qQ : "botxd",
+     "data-model-id": null !== (kQ = null === uQ || void 0 === uQ ? void 0 : uQ.modelId) && void 0 !== kQ ? kQ : "botxd",
+     title: null !== AQ && void 0 !== AQ ? AQ : void 0,
```

#### 524. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9526` → after: `L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9526) · [Before (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9526)

```diff
-       "aria-describedby": Cd ? Rd : void 0,
+       "aria-describedby": mQ ? eQ : void 0,
```

#### 525. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9553` → after: `L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9553) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9553)

```diff
-     RY: gd,
+     rU: vQ,
```

#### 526. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9576` → after: `L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9576) · [Before (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9576)

```diff
-           at: null !== (kd = dd.usedAt) && void 0 !== kd ? kd : 0,
+           at: null !== (wQ = QQ.usedAt) && void 0 !== wQ ? wQ : 0,
```

#### 527. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9599` → after: `L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9599) · [Before (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9599)

```diff
-     md = `${Jd}-model`,
+     rQ = `${FQ}-model`,
```

#### 528. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9612` → after: `L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9612) · [Before (L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9612)

```diff
-       }, null !== (pd = null === kd || void 0 === kd ? void 0 : kd.modelId) && void 0 !== pd ? pd : "botxd")
+       }, null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.modelId) && void 0 !== LQ ? LQ : "botxd")
```

#### 529. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9620` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9620) · [Before (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9620)

```diff
-       hint: null !== Rd && void 0 !== Rd ? Rd : `Bloxd's better AI. ${ed.status?xZ(ed.status):""}`.trim(),
+       hint: null !== eQ && void 0 !== eQ ? eQ : `Bloxd's better AI. ${tQ.status?Ck(tQ.status):""}`.trim(),
```

#### 530. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9626` → after: `L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9626) · [Before (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9626)

```diff
-         KZ(null !== (dd = null === (Jd = ed.status) || void 0 === Jd ? void 0 : Jd.provider) && void 0 !== dd ? dd : "ovh") && lZ.Tl()
+         Hk(null !== (QQ = null === (FQ = tQ.status) || void 0 === FQ ? void 0 : FQ.provider) && void 0 !== QQ ? QQ : "ovh") && Yk.Vb()
```

#### 531. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9631)

```diff
-           if (KZ(null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.provider) && void 0 !== Jd ? Jd : "ovh")) return lZ.Tl(), !0;
+           if (Hk(null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.provider) && void 0 !== FQ ? FQ : "ovh")) return Yk.Vb(), !0;
```

#### 532. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9639` → after: `L9639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9639) · [Before (L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9639)

```diff
-             }] = await Promise.all([Promise.resolve().then((() => kd(1371))), kd.e(348).then((() => kd(60904)))]), pd = dd.showPromptPopup({
+             }] = await Promise.all([Promise.resolve().then((() => wQ(1362))), wQ.e(348).then((() => wQ(60674)))]), LQ = QQ.showPromptPopup({
```

#### 533. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9650` → after: `L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9650) · [Before (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9650)

```diff
-             }(), lZ.Tl(), !0)
+             }(), Yk.Vb(), !0)
```

#### 534. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9663-L9664` → after: `L9663-L9664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9663-L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9663-L9664) · [Before (L9663-L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9663-L9664)

```diff
-         md = Rd ? null !== (Jd = dd.models.find((Jd => Jd.id === dd.usedModelId))) && void 0 !== Jd ? Jd : tP(dd.models) : void 0,
-         Sd = null !== (kd = null === (pd = qd[dd.id]) || void 0 === pd ? void 0 : pd.trim().toLowerCase()) && void 0 !== kd ? kd : "",
+         rQ = eQ ? null !== (FQ = QQ.models.find((FQ => FQ.id === QQ.usedModelId))) && void 0 !== FQ ? FQ : gD(QQ.models) : void 0,
+         UQ = null !== (wQ = null === (LQ = CQ[QQ.id]) || void 0 === LQ ? void 0 : LQ.trim().toLowerCase()) && void 0 !== wQ ? wQ : "",
```

#### 535. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9677` → after: `L9677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9677) · [Before (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9677)

```diff
-             keyName: null !== (Nd = dd.name) && void 0 !== Nd ? Nd : "",
+             keyName: null !== (qQ = QQ.name) && void 0 !== qQ ? qQ : "",
```

#### 536. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9693` → after: `L9693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9693) · [Before (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9693)

```diff
-             "aria-label": `Check ${ed} for new models`,
+             "aria-label": `Check ${tQ} for new models`,
```

#### 537. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9701` → after: `L9701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9701) · [Before (L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9701)

```diff
-             "aria-label": `Remove ${ed} key`,
+             "aria-label": `Remove ${tQ} key`,
```

#### 538. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9709` → after: `L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9709) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9709)

```diff
-             "aria-label": `Remove ${ed} key?`,
+             "aria-label": `Remove ${tQ} key?`,
```

#### 539. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9715` → after: `L9715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9715) · [Before (L9715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9715)

```diff
-               "aria-label": `Yes, remove ${ed} key`,
+               "aria-label": `Yes, remove ${tQ} key`,
```

#### 540. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9722` → after: `L9722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9722) · [Before (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9722)

```diff
-               "aria-label": `No, keep ${ed} key`,
+               "aria-label": `No, keep ${tQ} key`,
```

#### 541. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9736-L9738` → after: `L9736-L9738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9736-L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9736-L9738) · [Before (L9736-L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9736-L9738)

```diff
-           "aria-label": `Find a model from ${ed}`,
-           placeholder: `Find a model (${dd.models.length})`,
-           value: null !== (Ld = qd[dd.id]) && void 0 !== Ld ? Ld : "",
+           "aria-label": `Find a model from ${tQ}`,
+           placeholder: `Find a model (${QQ.models.length})`,
+           value: null !== (xQ = CQ[QQ.id]) && void 0 !== xQ ? xQ : "",
```

#### 542. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9754` → after: `L9754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9754) · [Before (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9754)

```diff
-           "aria-label": `Show all ${ed} models`,
+           "aria-label": `Show all ${tQ} models`,
```

#### 543. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9790` → after: `L9790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9790) · [Before (L9790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9790)

```diff
-         children: Jd ? Nd : Wd
+         children: FQ ? qQ : oQ
```

#### 544. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9910` → after: `L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9910) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9910)

```diff
-           children: [1 === Zd.length ? "Forget your key" : `Forget all ${Zd.length} keys`, " in this browser?", (0, Pd.jsx)("button", {
+           children: [1 === kQ.length ? "Forget your key" : `Forget all ${kQ.length} keys`, " in this browser?", (0, DQ.jsx)("button", {
```

#### 545. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9974)

```diff
-                 text: `${Jd} listed no models, so your models stay as they were.`
+                 text: `${FQ} listed no models, so your models stay as they were.`
```

#### 546. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9980` → after: `L9980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9980) · [Before (L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9980)

```diff
-                 text: `${Jd}'s models are up to date.`
+                 text: `${FQ}'s models are up to date.`
```

#### 547. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L9994` → after: `L9994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R9994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L9994) · [Before (L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L9994)

```diff
-         RY: dd => {
+         rU: QQ => {
```

#### 548. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10049` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10049) · [Before (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10049)

```diff
-         null === (kd = null !== pd && void 0 !== pd ? pd : Zd.current) || void 0 === kd || kd.scrollIntoView({
+         null === (wQ = null !== LQ && void 0 !== LQ ? LQ : kQ.current) || void 0 === wQ || wQ.scrollIntoView({
```

#### 549. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10069` → after: `L10069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10069) · [Before (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10069)

```diff
-         children: gd ? `An API key works like a password for ${gd.shortName}'s AI (it isn't your ${gd.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: vQ ? `An API key works like a password for ${vQ.shortName}'s AI (it isn't your ${vQ.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 550. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10071` → after: `L10071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10071) · [Before (L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10071)

```diff
-         children: ["You make it on ", gd ? `${gd.shortName}'s website` : (0, Pd.jsx)(wg, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", vQ ? `${vQ.shortName}'s website` : (0, DQ.jsx)(dv, {}), ", and see how much you've used or delete it there."]
```

#### 551. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10073` → after: `L10073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10073) · [Before (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10073)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (Jd = null === gd || void 0 === gd ? void 0 : gd.shortName) && void 0 !== Jd ? Jd : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (FQ = null === vQ || void 0 === vQ ? void 0 : vQ.shortName) && void 0 !== FQ ? FQ : "that company", ", never to Bloxd."]
```

#### 552. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10132` → after: `L10132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10132) · [Before (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10132)

```diff
-   } = kZ(), [ld, Qd] = (0, pd.useState)(null !== (Jd = null === gd || void 0 === gd ? void 0 : gd.provider) && void 0 !== Jd ? Jd : null), [Ld, Od] = (0, pd.useState)(!!gd), [ed, Rd] = (0, pd.useState)(""), Id = null !== (kd = null === gd || void 0 === gd ? void 0 : gd.key) && vo … [truncated]
+   } = wk(), [bQ, YQ] = (0, LQ.useState)(null !== (FQ = null === vQ || void 0 === vQ ? void 0 : vQ.provider) && void 0 !== FQ ? FQ : null), [xQ, AQ] = (0, LQ.useState)(!!vQ), [tQ, eQ] = (0, LQ.useState)(""), MQ = null !== (wQ = null === vQ || void 0 === vQ ? void 0 : vQ.key) && vo … [truncated]
```

#### 553. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10134` → after: `L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10134) · [Before (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10134)

```diff
-     return dd === (null === gd || void 0 === gd ? void 0 : gd.provider) && ("custom" !== dd || (null !== (Jd = vP(xd)) && void 0 !== Jd ? Jd : "") === (null !== (kd = gd.baseUrl) && void 0 !== kd ? kd : ""))
+     return QQ === (null === vQ || void 0 === vQ ? void 0 : vQ.provider) && ("custom" !== QQ || (null !== (FQ = pD(cQ)) && void 0 !== FQ ? FQ : "") === (null !== (wQ = vQ.baseUrl) && void 0 !== wQ ? wQ : ""))
```

#### 554. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10137-L10138` → after: `L10137-L10138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10137-L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10137-L10138) · [Before (L10137-L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10137-L10138)

```diff
-     return "" === Jd && "" !== Id && Bd(dd) ? Id : Jd
-   }, [Md, Fd] = (0, pd.useState)(""), [Yd, md] = (0, pd.useState)(null !== (Wd = null === gd || void 0 === gd ? void 0 : gd.name) && void 0 !== Wd ? Wd : ""), [bd, Sd] = (0, pd.useState)(!1), [jd, Xd] = (0, pd.useState)(null), [fd, nd] = (0, pd.useState)(""), [Ud, yd] = (0, pd.us … [truncated]
+     return "" === FQ && "" !== MQ && SQ(QQ) ? MQ : FQ
+   }, [RQ, OQ] = (0, LQ.useState)(""), [sQ, rQ] = (0, LQ.useState)(null !== (oQ = null === vQ || void 0 === vQ ? void 0 : vQ.name) && void 0 !== oQ ? oQ : ""), [IQ, UQ] = (0, LQ.useState)(!1), [NQ, TQ] = (0, LQ.useState)(null), [KQ, zQ] = (0, LQ.useState)(""), [lQ, jQ] = (0, LQ.us … [truncated]
```

#### 555. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10169` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10169) · [Before (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10169)

```diff
-           baseUrl: "custom" === ld && null !== (dd = vP(xd)) && void 0 !== dd ? dd : void 0,
+           baseUrl: "custom" === bQ && null !== (QQ = pD(cQ)) && void 0 !== QQ ? QQ : void 0,
```

#### 556. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10176` → after: `L10176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10176) · [Before (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10176)

```diff
-         const kd = null !== ld && void 0 !== ld ? ld : GP(Jd),
+         const wQ = null !== bQ && void 0 !== bQ ? bQ : GD(FQ),
```

#### 557. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10191-L10192` → after: `L10191-L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10191-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10191-L10192) · [Before (L10191-L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10191-L10192)

```diff
-             baseUrl: null !== Nd && void 0 !== Nd ? Nd : void 0,
-             modelName: bd ? Md : void 0
+             baseUrl: null !== qQ && void 0 !== qQ ? qQ : void 0,
+             modelName: IQ ? RQ : void 0
```

#### 558. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10198` → after: `L10198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10198) · [Before (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10198)

```diff
-           nd(null !== (Pd = null === (Zd = null !== Cd && void 0 !== Cd ? Cd : tP(dd)) || void 0 === Zd ? void 0 : Zd.id) && void 0 !== Pd ? Pd : "")
+           zQ(null !== (DQ = null === (kQ = null !== mQ && void 0 !== mQ ? mQ : gD(QQ)) || void 0 === kQ ? void 0 : kQ.id) && void 0 !== DQ ? DQ : "")
```

#### 559. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10204-L10205` → after: `L10204-L10205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10204-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10204-L10205) · [Before (L10204-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10204-L10205)

```diff
-           const Pd = "badKey" !== Nd || Ld ? "" : ` If it isn't from ${OP[kd].shortName}, pick the company it's from.`;
-           Td(`${sP(Nd,kd)}${Pd}`)
+           const DQ = "badKey" !== qQ || xQ ? "" : ` If it isn't from ${AD[wQ].shortName}, pick the company it's from.`;
+           XQ(`${iD(qQ,wQ)}${DQ}`)
```

#### 560. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10215` → after: `L10215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10215) · [Before (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10215)

```diff
-         value: null !== ld && void 0 !== ld ? ld : "",
+         value: null !== bQ && void 0 !== bQ ? bQ : "",
```

#### 561. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10243` → after: `L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10243) · [Before (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10243)

```diff
-       }), (!gd || xd !== (null !== (Zd = gd.baseUrl) && void 0 !== Zd ? Zd : "")) && (0, Pd.jsx)(dC, {})]
+       }), (!vQ || cQ !== (null !== (kQ = vQ.baseUrl) && void 0 !== kQ ? kQ : "")) && (0, DQ.jsx)(Fm, {})]
```

#### 562. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10315` → after: `L10315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10315) · [Before (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10315)

```diff
-           keyId: null !== ld && void 0 !== ld ? ld : "",
+           keyId: null !== bQ && void 0 !== bQ ? bQ : "",
```

#### 563. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10339` → after: `L10339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10339) · [Before (L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10339)

```diff
-         placeholder: ld && "custom" !== ld ? `Like My ${OP[ld].shortName}` : "Like Home server",
+         placeholder: bQ && "custom" !== bQ ? `Like My ${AD[bQ].shortName}` : "Like Home server",
```

#### 564. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10365` → after: `L10365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10365) · [Before (L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10365)

```diff
-         children: Ud ? hd ? "Testing the connection\u2026" : "Testing your key\u2026" : zd ? `Save and use ${zd.name}` : hd ? "Test connection" : "Test key"
+         children: lQ ? hQ ? "Testing the connection\u2026" : "Testing your key\u2026" : PQ ? `Save and use ${PQ.name}` : hQ ? "Test connection" : "Test key"
```

#### 565. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10370-L10372` → after: `L10370-L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10370-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10370-L10372) · [Before (L10370-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10370-L10372)

```diff
- var pC = kd(1211),
-   NC = kd(37068),
-   WC = kd(37061);
+ var qm = wQ(1207),
+   om = wQ(36514),
+   Dm = wQ(36508);
```

#### 566. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10383-L10384` → after: `L10383-L10384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10383-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10383-L10384) · [Before (L10383-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10383-L10384)

```diff
-   } = (0, pC.B)();
-   return (0, Pd.jsx)(WC.h, {
+   } = (0, qm.y)();
+   return (0, DQ.jsx)(Dm.i, {
```

#### 567. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10387)

```diff
-     text: Wd(`codeEditorAiTutorial:${Jd}`),
+     text: oQ(`codeEditorAiTutorial:${FQ}`),
```

#### 568. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10435` → after: `L10435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10435) · [Before (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10435)

```diff
-   return dd.model.name.toLowerCase().startsWith(Jd.toLowerCase()) ? dd.model.name : `${Jd} \xb7 ${dd.model.name}`
+   return QQ.model.name.toLowerCase().startsWith(FQ.toLowerCase()) ? QQ.model.name : `${FQ} \xb7 ${QQ.model.name}`
```

#### 569. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10485` → after: `L10485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10485) · [Before (L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10485)

```diff
-     Gd = Id ? "Bot.xd (free) \xb7 once" : Cd ? CC(Cd) : od ? PZ : "Bot.xd (free)";
+     GQ = MQ ? "Bot.xd (free) \xb7 once" : mQ ? Hm(mQ) : HQ ? kk : "Bot.xd (free)";
```

#### 570. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10497` → after: `L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10497) · [Before (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10497)

```diff
-       "aria-label": `AI model: ${Gd}`,
+       "aria-label": `AI model: ${GQ}`,
```

#### 571. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10515` → after: `L10515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10515) · [Before (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10515)

```diff
-         title: `Allow AI to make edits to my code is ${kd?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${wQ?"on":"off"}, in AI settings`,
```

#### 572. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10583` → after: `L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10583) · [Before (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10583)

```diff
-       kd(null !== (Jd = dd.error) && void 0 !== Jd ? Jd : new Error("IndexedDB transaction failed"))
+       wQ(null !== (FQ = QQ.error) && void 0 !== FQ ? FQ : new Error("IndexedDB transaction failed"))
```

#### 573. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10586` → after: `L10586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10586) · [Before (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10586)

```diff
-       kd(null !== (Jd = dd.error) && void 0 !== Jd ? Jd : new Error("IndexedDB transaction aborted"))
+       wQ(null !== (FQ = QQ.error) && void 0 !== FQ ? FQ : new Error("IndexedDB transaction aborted"))
```

#### 574. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10590` → after: `L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10590) · [Before (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10590)

```diff
- var QC = kd(37087);
+ var Am = wQ(36538);
```

#### 575. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10621` → after: `L10621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10621) · [Before (L10621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10621)

```diff
-           if (Jd) return dd.includes(`"${Jd}"`) ? `"${Jd}"` : dd.includes(Jd) ? Jd : void 0
+           if (FQ) return QQ.includes(`"${FQ}"`) ? `"${FQ}"` : QQ.includes(FQ) ? FQ : void 0
```

#### 576. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10625` → after: `L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10625) · [Before (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10625)

```diff
-         className: Wd()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${dd.kind}`, pd && "WorldCodeAiDiff-marked"),
+         className: oQ()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${QQ.kind}`, LQ && "WorldCodeAiDiff-marked"),
```

#### 577. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10688` → after: `L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10688) · [Before (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10688)

```diff
-   return Nd(dd) === Nd(Jd) ? pd : Nd(dd) === Nd(Jd - 864e5) ? `yesterday ${pd}` : function(dd, Jd) {
+   return qQ(QQ) === qQ(FQ) ? LQ : qQ(QQ) === qQ(FQ - 864e5) ? `yesterday ${LQ}` : function(QQ, FQ) {
```

#### 578. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10691` → after: `L10691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10691) · [Before (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10691)

```diff
-     if (kd < 60) return `${kd} min ago`;
+     if (wQ < 60) return `${wQ} min ago`;
```

#### 579. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10693` → after: `L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10693) · [Before (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10693)

```diff
-     if (pd < 24) return `${pd} h ago`;
+     if (LQ < 24) return `${LQ} h ago`;
```

#### 580. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10695` → after: `L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10695) · [Before (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10695)

```diff
-     return 1 === Nd ? "1 day ago" : `${Nd} days ago`
+     return 1 === qQ ? "1 day ago" : `${qQ} days ago`
```

#### 581. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10702-L10703` → after: `L10702-L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10702-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10702-L10703) · [Before (L10702-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10702-L10703)

```diff
-     const Wd = null !== (pd = dd.files[kd]) && void 0 !== pd ? pd : "";
-     return (null !== (Nd = Jd[kd]) && void 0 !== Nd ? Nd : "") === Wd ? [] : [{
+     const oQ = null !== (LQ = QQ.files[wQ]) && void 0 !== LQ ? LQ : "";
+     return (null !== (qQ = FQ[wQ]) && void 0 !== qQ ? qQ : "") === oQ ? [] : [{
```

#### 582. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10715` → after: `L10715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10715) · [Before (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10715)

```diff
-   return `${(pd>Jd/2?kd.slice(0,pd):kd).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(LQ>FQ/2?wQ.slice(0,LQ):wQ).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 583. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10726` → after: `L10726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10726) · [Before (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10726)

```diff
-   const [Cd, Kd] = (0, pd.useState)(!1), [od, ld] = (0, pd.useState)(!1), Qd = Jd.did ? `Before: ${Jd.did}` : Jd.label, Ld = vC(Qd), Od = Jd.did && Jd.label.startsWith('Before "') ? Jd.label.slice(7) : null, ed = null === Od ? null : vC(Od, 50), Rd = null !== ed && null !== Od && … [truncated]
+   const [mQ, uQ] = (0, LQ.useState)(!1), [HQ, bQ] = (0, LQ.useState)(!1), YQ = FQ.did ? `Before: ${FQ.did}` : FQ.label, xQ = Cm(YQ), AQ = FQ.did && FQ.label.startsWith('Before "') ? FQ.label.slice(7) : null, tQ = null === AQ ? null : Cm(AQ, 50), eQ = null !== tQ && null !== AQ && … [truncated]
```

#### 584. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10751-L10752` → after: `L10751-L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10751-L10752) · [Before (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10751-L10752)

```diff
-     const Wd = null !== (pd = Jd.files[dd]) && void 0 !== pd ? pd : "",
-       Pd = null !== (Nd = kd[dd]) && void 0 !== Nd ? Nd : "";
+     const oQ = null !== (LQ = FQ.files[QQ]) && void 0 !== LQ ? LQ : "",
+       DQ = null !== (qQ = wQ[QQ]) && void 0 !== qQ ? qQ : "";
```

#### 585. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10766` → after: `L10766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10766) · [Before (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10766)

```diff
-         children: [od || !Ld ? Qd : Ld, (Ld || Rd) && (0, Pd.jsx)("button", {
+         children: [HQ || !xQ ? YQ : xQ, (xQ || eQ) && (0, DQ.jsx)("button", {
```

#### 586. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10778` → after: `L10778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10778) · [Before (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10778)

```diff
-           children: ["You asked: ", od || !Rd ? Od : Rd]
+           children: ["You asked: ", HQ || !eQ ? AQ : eQ]
```

#### 587. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10859)

```diff
-     QG: Nd,
+     uC: qQ,
```

#### 588. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L10883` → after: `L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L10883) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L10883)

```diff
-           "aria-label": `Delete note: ${dd}`,
+           "aria-label": `Delete note: ${QQ}`,
```

#### 589. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11022` → after: `L11022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11022) · [Before (L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11022)

```diff
-       }, `${Jd}:${dd}`)))
+       }, `${FQ}:${QQ}`)))
```

#### 590. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11025` → after: `L11025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11025) · [Before (L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11025)

```diff
-       children: ["Apply ", kd - pd > 1 ? `steps ${pd+1} to ${kd}` : `step ${kd}`, " to your code and try it, then build step ", kd + 1, "."]
+       children: ["Apply ", wQ - LQ > 1 ? `steps ${LQ+1} to ${wQ}` : `step ${wQ}`, " to your code and try it, then build step ", wQ + 1, "."]
```

#### 591. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11027` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11027) · [Before (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11027)

```diff
-       ...sg.e,
+       ...Wv.g,
```

#### 592. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11032` → after: `L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11032) · [Before (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11032)

```diff
-       children: pd < kd ? `Build step ${kd+1} anyway` : `Build step ${kd+1}`
+       children: LQ < wQ ? `Build step ${wQ+1} anyway` : `Build step ${wQ+1}`
```

#### 593. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11044` → after: `L11044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11044) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11044)

```diff
-   return `${dd}\n\nYou asked me: "${Jd}" ${null===kd?"I don't mind: choose what works best.":`My answer: ${kd.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${QQ}\n\nYou asked me: "${FQ}" ${null===wQ?"I don't mind: choose what works best.":`My answer: ${wQ.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 594. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11063-L11064` → after: `L11063-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11063-L11064) · [Before (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11063-L11064)

```diff
-           ...sg.e,
-           key: `${Jd}:${dd}`,
+           ...Wv.g,
+           key: `${FQ}:${QQ}`,
```

#### 595. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11097` → after: `L11097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11097) · [Before (L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11097)

```diff
-         ...sg.e,
+         ...Wv.g,
```

#### 596. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11270` → after: `L11270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11270) · [Before (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11270)

```diff
-       xd = null !== Gd && void 0 !== Gd ? Gd : Nd;
+       cQ = null !== GQ && void 0 !== GQ ? GQ : qQ;
```

#### 597. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11274-L11276` → after: `L11274-L11276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11274-L11276) · [Before (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11274-L11276)

```diff
-       raw: null !== (gd = null === vd || void 0 === vd ? void 0 : vd.text) && void 0 !== gd ? gd : "",
-       start: null !== (Cd = null === vd || void 0 === vd ? void 0 : vd.start) && void 0 !== Cd ? Cd : 0,
-       end: null !== (Kd = null === vd || void 0 === vd ? void 0 : vd.end) && void 0 !== Kd ? Kd : 0,
+       raw: null !== (vQ = null === pQ || void 0 === pQ ? void 0 : pQ.text) && void 0 !== vQ ? vQ : "",
+       start: null !== (mQ = null === pQ || void 0 === pQ ? void 0 : pQ.start) && void 0 !== mQ ? mQ : 0,
+       end: null !== (uQ = null === pQ || void 0 === pQ ? void 0 : pQ.end) && void 0 !== uQ ? uQ : 0,
```

#### 598. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11319` → after: `L11319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11319) · [Before (L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11319)

```diff
-     Wd = kd, Nd = `${Pd=kd.includes(dd)&&!kd.includes(pd)?pd:dd}${Wd.slice(0,200).replace(/\\/g,"\\\\").replace('"'===Pd?/"/g:/'/g,`\\${Pd}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     oQ = wQ, qQ = `${DQ=wQ.includes(QQ)&&!wQ.includes(LQ)?LQ:QQ}${oQ.slice(0,200).replace(/\\/g,"\\\\").replace('"'===DQ?/"/g:/'/g,`\\${DQ}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 599. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11328` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11328) · [Before (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11328)

```diff
-     const kd = Math.min(3, (null !== (Jd = String(dd).split(".")[1]) && void 0 !== Jd ? Jd : "").length);
+     const wQ = Math.min(3, (null !== (FQ = String(QQ).split(".")[1]) && void 0 !== FQ ? FQ : "").length);
```

#### 600. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11343` → after: `L11343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11343) · [Before (L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11343)

```diff
-   return "boolean" === typeof dd ? dd ? "on" : "off" : "number" === typeof dd ? String(dd) : dd.length > 20 ? `\u201c${dd.slice(0,19)}\u2026\u201d` : `\u201c${dd}\u201d`
+   return "boolean" === typeof QQ ? QQ ? "on" : "off" : "number" === typeof QQ ? String(QQ) : QQ.length > 20 ? `\u201c${QQ.slice(0,19)}\u2026\u201d` : `\u201c${QQ}\u201d`
```

#### 601. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11348` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11348) · [Before (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11348)

```diff
-   if (0 === dd.length) return `Before ${Jd} settings`;
+   if (0 === QQ.length) return `Before ${FQ} settings`;
```

#### 602. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11350-L11352` → after: `L11350-L11352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11350-L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11350-L11352) · [Before (L11350-L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11350-L11352)

```diff
-     pd = dd.slice(0, kd).map((dd => `${dd.name} ${dd.from} \u2192 ${dd.to}`)),
-     Nd = dd.length > kd ? ` and ${dd.length-kd} more` : "";
-   return `Before ${Jd} settings: ${pd.join(", ")}${Nd}`
+     LQ = QQ.slice(0, wQ).map((QQ => `${QQ.name} ${QQ.from} \u2192 ${QQ.to}`)),
+     qQ = QQ.length > wQ ? ` and ${QQ.length-wQ} more` : "";
+   return `Before ${FQ} settings: ${LQ.join(", ")}${qQ}`
```

#### 603. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11360` → after: `L11360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11360) · [Before (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11360)

```diff
-     Jd.add(null !== (kd = null !== (pd = Nd[1]) && void 0 !== pd ? pd : Nd[2]) && void 0 !== kd ? kd : Nd[3])
+     FQ.add(null !== (wQ = null !== (LQ = qQ[1]) && void 0 !== LQ ? LQ : qQ[2]) && void 0 !== wQ ? wQ : qQ[3])
```

#### 604. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11403` → after: `L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11403) · [Before (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11403)

```diff
-     const Wd = null !== (Nd = TC.get(Jd)) && void 0 !== Nd ? Nd : [];
+     const oQ = null !== (qQ = hm.get(FQ)) && void 0 !== qQ ? qQ : [];
```

#### 605. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11455` → after: `L11455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11455) · [Before (L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11455)

```diff
-   return null !== (Jd = uC.get(dd)) && void 0 !== Jd ? Jd : "CONFIG" === dd ? "Settings" : void 0
+   return null !== (FQ = Pm.get(QQ)) && void 0 !== FQ ? FQ : "CONFIG" === QQ ? "Settings" : void 0
```

#### 606. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11481` → after: `L11481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11481) · [Before (L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11481)

```diff
-         name: void 0 === Wd ? null : null !== (Nd = JK(Wd)) && void 0 !== Nd ? Nd : null,
+         name: void 0 === oQ ? null : null !== (qQ = Lu(oQ)) && void 0 !== qQ ? qQ : null,
```

#### 607. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11533` → after: `L11533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11533) · [Before (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11533)

```diff
-   return Zd.every((dd => HC(dd.removed) && HC(dd.added))) ? Zd : [dd]
+   return kQ.every((QQ => dm(QQ.removed) && dm(QQ.added))) ? kQ : [QQ]
```

#### 608. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11585` → after: `L11585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11585) · [Before (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11585)

```diff
-   return pd ? null !== (Jd = null !== (kd = pd[1]) && void 0 !== kd ? kd : pd[2]) && void 0 !== Jd ? Jd : pd[3] : void 0
+   return LQ ? null !== (FQ = null !== (wQ = LQ[1]) && void 0 !== wQ ? wQ : LQ[2]) && void 0 !== FQ ? FQ : LQ[3] : void 0
```

#### 609. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11613` → after: `L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11613) · [Before (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11613)

```diff
-   return dd.length <= 1 ? null !== (Jd = dd[0]) && void 0 !== Jd ? Jd : "" : `${dd.slice(0,-1).join(", ")} and ${dd[dd.length-1]}`
+   return QQ.length <= 1 ? null !== (FQ = QQ[0]) && void 0 !== FQ ? FQ : "" : `${QQ.slice(0,-1).join(", ")} and ${QQ[QQ.length-1]}`
```

#### 610. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11628` → after: `L11628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11628) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11628)

```diff
-     return (0, LJ.f)(Jd, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, LJ.m).map((dd => dd[0])).filter((dd => !gK.has(dd)))
+     return (0, YF.d)(FQ, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, YF.m).map((QQ => QQ[0])).filter((QQ => !uu.has(QQ)))
```

#### 611. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11634` → after: `L11634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11634) · [Before (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11634)

```diff
-   const pd = (null !== (kd = dd.parts) && void 0 !== kd ? kd : []).map((dd => {
+   const LQ = (null !== (wQ = QQ.parts) && void 0 !== wQ ? wQ : []).map((QQ => {
```

#### 612. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11682)

```diff
-               return kd ? [null !== (Jd = kd[1]) && void 0 !== Jd ? Jd : kd[2]] : []
+               return wQ ? [null !== (FQ = wQ[1]) && void 0 !== FQ ? FQ : wQ[2]] : []
```

#### 613. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11686` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11686) · [Before (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11686)

```diff
-               return od.has(dd) ? `"${Jd}"` : Jd
+               return HQ.has(QQ) ? `"${FQ}"` : FQ
```

#### 614. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11694` → after: `L11694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11694) · [Before (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11694)

```diff
-                   return null !== (Jd = gd.get(dd)) && void 0 !== Jd ? Jd : dd
+                   return null !== (FQ = vQ.get(QQ)) && void 0 !== FQ ? FQ : QQ
```

#### 615. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11697` → after: `L11697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11697) · [Before (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11697)

```diff
-               Jd = [Wd.length > 0 ? `${dd(Wd)} \u2014 changed` : "", Pd.length > 0 ? `${dd(Pd)} \u2014 added` : "", Zd.length > 0 ? `${dd(Zd)} \u2014 taken out` : ""].filter(Boolean),
+               FQ = [oQ.length > 0 ? `${QQ(oQ)} \u2014 changed` : "", DQ.length > 0 ? `${QQ(DQ)} \u2014 added` : "", kQ.length > 0 ? `${QQ(kQ)} \u2014 taken out` : ""].filter(Boolean),
```

#### 616. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11708` → after: `L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11708) · [Before (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11708)

```diff
-           const Ld = [Wd.length > 0 ? `changes ${WK(Wd.map(ld))}` : "", Pd.length > 0 ? `adds ${WK(Pd.map(ld))}` : "", Zd.length > 0 ? `takes out ${WK(Zd.map(ld))}` : ""].filter(Boolean);
+           const xQ = [oQ.length > 0 ? `changes ${ku(oQ.map(bQ))}` : "", DQ.length > 0 ? `adds ${ku(DQ.map(bQ))}` : "", kQ.length > 0 ? `takes out ${ku(kQ.map(bQ))}` : ""].filter(Boolean);
```

#### 617. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11724` → after: `L11724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11724) · [Before (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11724)

```diff
-                 named: `${kd} \u2014 changed`,
+                 named: `${wQ} \u2014 changed`,
```

#### 618. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11730` → after: `L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11730) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11730)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(dd)?`"${PK(Jd)}"`:PK(Jd)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(QQ)?`"${vu(FQ)}"`:vu(FQ)}`,
```

#### 619. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11739` → after: `L11739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11739) · [Before (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11739)

```diff
-             named: 0 === dd.added.length ? `Takes out lines from line ${kd}` : `Changes line ${kd}`,
+             named: 0 === QQ.added.length ? `Takes out lines from line ${wQ}` : `Changes line ${wQ}`,
```

#### 620. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11764` → after: `L11764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11764) · [Before (L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11764)

```diff
-           return pd[Jd] && null !== (kd = dd.uses) && void 0 !== kd ? kd : []
+           return LQ[FQ] && null !== (wQ = QQ.uses) && void 0 !== wQ ? wQ : []
```

#### 621. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11768` → after: `L11768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11768) · [Before (L11768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11768)

```diff
-           return pd[Jd] || (null !== (kd = dd.uses) && void 0 !== kd ? kd : []).some((dd => Nd.has(dd)))
+           return LQ[FQ] || (null !== (wQ = QQ.uses) && void 0 !== wQ ? wQ : []).some((QQ => qQ.has(QQ)))
```

#### 622. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11775` → after: `L11775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11775) · [Before (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11775)

```diff
-           const pd = (null !== (Zd = dd.takesOut) && void 0 !== Zd ? Zd : []).filter((dd => ("CONFIG" === dd || TC.has(dd)) && !Pd.has(dd)));
+           const LQ = (null !== (kQ = QQ.takesOut) && void 0 !== kQ ? kQ : []).filter((QQ => ("CONFIG" === QQ || hm.has(QQ)) && !DQ.has(QQ)));
```

#### 623. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11779` → after: `L11779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11779) · [Before (L11779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11779)

```diff
-           }, Jd, kd) || void 0 !== dd.why && hC(kd, cC(dd.why)) || (null !== (gd = dd.removedUses) && void 0 !== gd ? gd : []).some((dd => Nd.has(dd))) ? void 0 : "takesOut"
+           }, FQ, wQ) || void 0 !== QQ.why && nm(wQ, Em(QQ.why)) || (null !== (vQ = QQ.removedUses) && void 0 !== vQ ? vQ : []).some((QQ => qQ.has(QQ))) ? void 0 : "takesOut"
```

#### 624. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11798` → after: `L11798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11798) · [Before (L11798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11798)

```diff
-         Kd = !Nd && Cd ? Cd : kd,
+         uQ = !qQ && mQ ? mQ : wQ,
```

#### 625. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11815` → after: `L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11815) · [Before (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11815)

```diff
-       return `${null!==(Jd=dd.also)&&void 0!==Jd?Jd:""}|${dd.label}|${null!==(kd=dd.detail)&&void 0!==kd?kd:""}`
+       return `${null!==(FQ=QQ.also)&&void 0!==FQ?FQ:""}|${QQ.label}|${null!==(wQ=QQ.detail)&&void 0!==wQ?wQ:""}`
```

#### 626. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11824` → after: `L11824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11824) · [Before (L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11824)

```diff
-       label: `${kd.label} (line ${Jd})`
+       label: `${wQ.label} (line ${FQ})`
```

#### 627. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11846` → after: `L11846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11846) · [Before (L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11846)

```diff
-   return !/^['\u2018]/.test(dd[0]) || !(0, LJ.e)(dd, "\\w\u2019'")
+   return !/^['\u2018]/.test(QQ[0]) || !(0, YF.c)(QQ, "\\w\u2019'")
```

#### 628. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11852` → after: `L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11852) · [Before (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11852)

```diff
-       return (0, LJ.f)(dd, OK, eK).map((dd => [dd.index, dd.index + dd[0].length]))
+       return (0, YF.d)(QQ, eu, Mu).map((QQ => [QQ.index, QQ.index + QQ[0].length]))
```

#### 629. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11859` → after: `L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11859) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11859)

```diff
-   for (const Wd of dd.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${lK})\\b`, "g"))) {
+   for (const oQ of QQ.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${xu})\\b`, "g"))) {
```

#### 630. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11869` → after: `L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11869) · [Before (L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11869)

```diff
-         words: `${Wd[2]?"It also":"This"} ${oK[Wd[3]]}`
+         words: `${oQ[2]?"It also":"This"} ${Yu[oQ[3]]}`
```

#### 631. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11871` → after: `L11871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11871) · [Before (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11871)

```diff
-       for (const dd of gd.matchAll(new RegExp(`\\b(and|then|also) (${lK})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) kd(Nd + dd.index) || pd.push({
+       for (const QQ of vQ.matchAll(new RegExp(`\\b(and|then|also) (${xu})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) wQ(qQ + QQ.index) || LQ.push({
```

#### 632. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11874` → after: `L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11874) · [Before (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11874)

```diff
-         words: `${dd[1]} ${oK[dd[2]]}`
+         words: `${QQ[1]} ${Yu[QQ[2]]}`
```

#### 633. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11887` → after: `L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11887) · [Before (L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11887)

```diff
-       words: `will ${Nd=Wd[1],"has"===Nd?"have":Nd.endsWith("ies")?`${Nd.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(Nd)?Nd.slice(0,-2):Nd.slice(0,-1)}`
+       words: `will ${qQ=oQ[1],"has"===qQ?"have":qQ.endsWith("ies")?`${qQ.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(qQ)?qQ.slice(0,-2):qQ.slice(0,-1)}`
```

#### 634. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11921` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11921) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11921)

```diff
-   }, Rd = `WorldCodeAiSetting-${Jd}-${kd.key}`;
+   }, eQ = `WorldCodeAiSetting-${FQ}-${wQ.key}`;
```

#### 635. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11949` → after: `L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11949) · [Before (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11949)

```diff
-         "aria-label": `Less ${od}`,
+         "aria-label": `Less ${HQ}`,
```

#### 636. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11961` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11961) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11961)

```diff
-         value: null !== Zd && void 0 !== Zd ? Zd : String(kd.value),
+         value: null !== kQ && void 0 !== kQ ? kQ : String(wQ.value),
```

#### 637. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11972` → after: `L11972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L11972) · [Before (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L11972)

```diff
-         "aria-label": `More ${od}`,
+         "aria-label": `More ${HQ}`,
```

#### 638. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12062` → after: `L12062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12062) · [Before (L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12062)

```diff
-   return Jd >= 60 ? "It starts in about a minute." : `It starts in about ${Jd} seconds.`
+   return FQ >= 60 ? "It starts in about a minute." : `It starts in about ${FQ} seconds.`
```

#### 639. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12064` → after: `L12064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12064) · [Before (L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12064)

```diff
- var sK = kd(1827);
+ var Ru = wQ(1804);
```

#### 640. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12070` → after: `L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12070) · [Before (L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12070)

```diff
-     kd.set(Nd, (null !== (pd = kd.get(Nd)) && void 0 !== pd ? pd : 0) + 1)
+     wQ.set(qQ, (null !== (LQ = wQ.get(qQ)) && void 0 !== LQ ? LQ : 0) + 1)
```

#### 641. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12074` → after: `L12074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12074) · [Before (L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12074)

```diff
-     const pd = null !== (Jd = kd.get(dd)) && void 0 !== Jd ? Jd : 0;
+     const LQ = null !== (FQ = wQ.get(QQ)) && void 0 !== FQ ? FQ : 0;
```

#### 642. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12081` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12081) · [Before (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12081)

```diff
-     if (null !== Jd && void 0 !== Jd && Jd.aborted) return void pd((0, sK.c)(Jd));
+     if (null !== FQ && void 0 !== FQ && FQ.aborted) return void LQ((0, Ru.e)(FQ));
```

#### 643. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12084` → after: `L12084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12084) · [Before (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12084)

```diff
-       clearTimeout(Nd), pd((0, sK.c)(Jd))
+       clearTimeout(qQ), LQ((0, Ru.e)(FQ))
```

#### 644. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12101` → after: `L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12101) · [Before (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12101)

```diff
-     const Cd = null !== (Pd = Zd.find((dd => NW.freeAt(dd) <= Date.now()))) && void 0 !== Pd ? Pd : Zd[0],
+     const mQ = null !== (DQ = kQ.find((QQ => wo.freeAt(QQ) <= Date.now()))) && void 0 !== DQ ? DQ : kQ[0],
```

#### 645. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12118` → after: `L12118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12118) · [Before (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12118)

```diff
-       return [...null !== (Jd = dd.why) && void 0 !== Jd ? Jd : [], ...(null !== (kd = dd.parts) && void 0 !== kd ? kd : []).map((dd => dd.why)), ...iK(dd.before, dd.after)]
+       return [...null !== (FQ = QQ.why) && void 0 !== FQ ? FQ : [], ...(null !== (wQ = QQ.parts) && void 0 !== wQ ? wQ : []).map((QQ => QQ.why)), ...Ou(QQ.before, QQ.after)]
```

#### 646. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12129` → after: `L12129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12129) · [Before (L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12129)

```diff
-           pd = dd > 6e3 ? dd : nN;
+           LQ = QQ > 6e3 ? QQ : Kq;
```

#### 647. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12143-L12145` → after: `L12143-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12143-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12143-L12145) · [Before (L12143-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12143-L12145)

```diff
-   const pd = Jd && null !== (kd = dd[Jd]) && void 0 !== kd ? kd : [],
-     Nd = pd.length >= 2 ? pd : Object.values(dd).flat();
-   return Nd.length < 2 ? "Usually under a minute." : `Usually ${function(dd){const Jd=Math.max(5,5*Math.round(dd/5e3));if(Jd<60)return`about ${Jd} seconds`;const kd=10*Math.round(dd/1e4),pd=Math.floor(kd/60),Nd=kd%60,Wd=`${pd} ${1===pd?"minute":"minutes"}`;return 0===Nd?`about ${ … [truncated]
+   const LQ = FQ && null !== (wQ = QQ[FQ]) && void 0 !== wQ ? wQ : [],
+     qQ = LQ.length >= 2 ? LQ : Object.values(QQ).flat();
+   return qQ.length < 2 ? "Usually under a minute." : `Usually ${function(QQ){const FQ=Math.max(5,5*Math.round(QQ/5e3));if(FQ<60)return`about ${FQ} seconds`;const wQ=10*Math.round(QQ/1e4),LQ=Math.floor(wQ/60),qQ=wQ%60,oQ=`${LQ} ${1===LQ?"minute":"minutes"}`;return 0===qQ?`about ${ … [truncated]
```

#### 648. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12147` → after: `L12147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12147) · [Before (L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12147)

```diff
- var bK = kd(37091);
+ var Tu = wQ(36540);
```

#### 649. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12164` → after: `L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12164) · [Before (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12164)

```diff
-   return `Moving to ${dd} code\u2026`
+   return `Moving to ${QQ} code\u2026`
```

#### 650. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12168` → after: `L12168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12168) · [Before (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12168)

```diff
-   return dd.fromLine === dd.toLine ? `line ${dd.fromLine}` : `lines ${dd.fromLine}-${dd.toLine}`
+   return QQ.fromLine === QQ.toLine ? `line ${QQ.fromLine}` : `lines ${QQ.fromLine}-${QQ.toLine}`
```

#### 651. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12172-L12173` → after: `L12172-L12173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12172-L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12172-L12173) · [Before (L12172-L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12172-L12173)

```diff
-   const Jd = dd.text.length > 4e3 ? `${dd.text.slice(0,4e3)}\n...` : dd.text;
-   return `The part I picked (${dd.path}, ${fK(dd)}):\n\`\`\`\n${Jd}\n\`\`\``
+   const FQ = QQ.text.length > 4e3 ? `${QQ.text.slice(0,4e3)}\n...` : QQ.text;
+   return `The part I picked (${QQ.path}, ${ju(QQ)}):\n\`\`\`\n${FQ}\n\`\`\``
```

#### 652. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12180` → after: `L12180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12180) · [Before (L12180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12180)

```diff
-       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${nK(dd)}`;
+       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${au(QQ)}`;
```

#### 653. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12182` → after: `L12182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12182) · [Before (L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12182)

```diff
-       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${nK(dd)}`;
+       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${au(QQ)}`;
```

#### 654. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12184` → after: `L12184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12184) · [Before (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12184)

```diff
-       return `${Jd.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${nK(dd)}`
+       return `${FQ.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${au(QQ)}`
```

#### 655. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12193` → after: `L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12193) · [Before (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12193)

```diff
-       return `Explain ${kd}`;
+       return `Explain ${wQ}`;
```

#### 656. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12195` → after: `L12195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12195) · [Before (L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12195)

```diff
-       return `Fix ${kd}`;
+       return `Fix ${wQ}`;
```

#### 657. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12197` → after: `L12197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12197) · [Before (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12197)

```diff
-       return `${Jd.trim()} (${kd})`
+       return `${FQ.trim()} (${wQ})`
```

#### 658. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12200-L12204` → after: `L12200-L12204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12200-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12200-L12204) · [Before (L12200-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12200-L12204)

```diff
- var DK = kd(41359),
-   TK = kd(4636),
-   EK = kd(41340),
-   cK = kd(41351),
-   hK = kd(41347);
+ var Vu = wQ(40778),
+   hu = wQ(4610),
+   Ju = wQ(40759),
+   Eu = wQ(40770),
+   nu = wQ(40764);
```

#### 659. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12222` → after: `L12222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12222) · [Before (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12222)

```diff
-         ["/globals.d.ts", EK.b],
+         ["/globals.d.ts", Ju.d],
```

#### 660. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12230` → after: `L12230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12230) · [Before (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12230)

```diff
-     kd = DK.d(DK.b(Nd), [...Nd.keys()], ad(), {
+     wQ = Vu.h(Vu.d(qQ), [...qQ.keys()], WQ(), {
```

#### 661. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12252` → after: `L12252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12252) · [Before (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12252)

```diff
-   return Nd(dd), pd && uk(pd, dd) ? pd : void 0
+   return qQ(QQ), LQ && Ew(LQ, QQ) ? LQ : void 0
```

#### 662. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12271` → after: `L12271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12271) · [Before (L12271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12271)

```diff
-   if (pd) return `"${pd}"`;
+   if (LQ) return `"${LQ}"`;
```

#### 663. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12276` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12276) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12276)

```diff
-   if (Nd.length > 0) return Nd.slice(0, 2).map((dd => `"${dd}"`)).join(" or ");
+   if (qQ.length > 0) return qQ.slice(0, 2).map((QQ => `"${QQ}"`)).join(" or ");
```

#### 664. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12286` → after: `L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12286) · [Before (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12286)

```diff
-   return Pd ? `"${Pd.option}"` : void 0
+   return DQ ? `"${DQ.option}"` : void 0
```

#### 665. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12312-L12313` → after: `L12312-L12313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12312-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12312-L12313) · [Before (L12312-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12312-L12313)

```diff
-       kd = null !== (Kd = null === (od = dd.split("\n")[Jd]) || void 0 === od ? void 0 : od.trim()) && void 0 !== Kd ? Kd : "",
-       pd = kd.length > 40 ? `${kd.slice(0,37)}...` : kd,
+       wQ = null !== (uQ = null === (HQ = QQ.split("\n")[FQ]) || void 0 === HQ ? void 0 : HQ.trim()) && void 0 !== uQ ? uQ : "",
+       LQ = wQ.length > 40 ? `${wQ.slice(0,37)}...` : wQ,
```

#### 666. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12315` → after: `L12315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12315) · [Before (L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12315)

```diff
-     gd.add(`Line ${Jd+1} stops all of this code from running: "${pd}" (${Nd}).`)
+     vQ.add(`Line ${FQ+1} stops all of this code from running: "${LQ}" (${qQ}).`)
```

#### 667. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12323-L12325` → after: `L12323-L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12323-L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12323-L12325) · [Before (L12323-L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12323-L12325)

```diff
-         kd = null !== (qd = null === (sd = dd.split("\n")[Jd]) || void 0 === sd ? void 0 : sd.trim()) && void 0 !== qd ? qd : "",
-         pd = kd.length > 40 ? `${kd.slice(0,37)}...` : kd;
-       gd.add(`Line ${Jd+1} never runs: "${pd}" comes after a return, which ends the function first.`);
+         wQ = null !== (CQ = null === (iQ = QQ.split("\n")[FQ]) || void 0 === iQ ? void 0 : iQ.trim()) && void 0 !== CQ ? CQ : "",
+         LQ = wQ.length > 40 ? `${wQ.slice(0,37)}...` : wQ;
+       vQ.add(`Line ${FQ+1} never runs: "${LQ}" comes after a return, which ends the function first.`);
```

#### 668. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12330` → after: `L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12330) · [Before (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12330)

```diff
-       const Jd = yd.start + (null !== (Md = yd.length) && void 0 !== Md ? Md : 0),
+       const FQ = jQ.start + (null !== (RQ = jQ.length) && void 0 !== RQ ? RQ : 0),
```

#### 669. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12333` → after: `L12333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12333) · [Before (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12333)

```diff
-         Nd = new RegExp(`^${kd.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(dd),
+         qQ = new RegExp(`^${wQ.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(QQ),
```

#### 670. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12336-L12337` → after: `L12336-L12337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12336-L12337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12336-L12337) · [Before (L12336-L12337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12336-L12337)

```diff
-         Kd = new RegExp(`//\\s*(?:const|let|var)\\s+${kd.replaceAll("$","\\$")}\\b`).test(dd),
-         od = new RegExp(`typeof\\s+${kd.replaceAll("$","\\$")}\\b`).test(dd);
+         uQ = new RegExp(`//\\s*(?:const|let|var)\\s+${wQ.replaceAll("$","\\$")}\\b`).test(QQ),
+         HQ = new RegExp(`typeof\\s+${wQ.replaceAll("$","\\$")}\\b`).test(QQ);
```

#### 671. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12342` → after: `L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12342) · [Before (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12342)

```diff
-       gd.add(Ld ? `Line ${Qd+1} uses "${kd}", which is never set, so it throws there. Did you mean "${Ld}"?` : `Line ${Qd+1} uses "${kd}", which isn't set there, so it throws when that line runs.`);
+       vQ.add(xQ ? `Line ${YQ+1} uses "${wQ}", which is never set, so it throws there. Did you mean "${xQ}"?` : `Line ${YQ+1} uses "${wQ}", which isn't set there, so it throws when that line runs.`);
```

#### 672. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12348` → after: `L12348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12348) · [Before (L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12348)

```diff
-     const kd = yd.start + (null !== (Qd = yd.length) && void 0 !== Qd ? Qd : 0),
+     const wQ = jQ.start + (null !== (YQ = jQ.length) && void 0 !== YQ ? YQ : 0),
```

#### 673. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12355` → after: `L12355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12355) · [Before (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12355)

```diff
-       Dd = od.length > 40 ? `${od.slice(0,37)}...` : od;
+       aQ = HQ.length > 40 ? `${HQ.slice(0,37)}...` : HQ;
```

#### 674. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12359-L12361` → after: `L12359-L12361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12359-L12361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12359-L12361) · [Before (L12359-L12361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12359-L12361)

```diff
-         kd = null !== (Yd = null === dd || void 0 === dd || null === (md = dd[1]) || void 0 === md ? void 0 : md.replace("-", " to ")) && void 0 !== Yd ? Yd : "a different number of",
-         Nd = Number(null !== (bd = null === dd || void 0 === dd ? void 0 : dd[2]) && void 0 !== bd ? bd : pd.arguments.length);
-       gd.add(`${Wd} needs ${kd} ${"1"===kd?"value":"values"}, but this line gives it ${Nd}.`);
+         wQ = null !== (sQ = null === QQ || void 0 === QQ || null === (rQ = QQ[1]) || void 0 === rQ ? void 0 : rQ.replace("-", " to ")) && void 0 !== sQ ? sQ : "a different number of",
+         qQ = Number(null !== (IQ = null === QQ || void 0 === QQ ? void 0 : QQ[2]) && void 0 !== IQ ? IQ : LQ.arguments.length);
+       vQ.add(`${oQ} needs ${wQ} ${"1"===wQ?"value":"values"}, but this line gives it ${qQ}.`);
```

#### 675. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12370` → after: `L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12370) · [Before (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12370)

```diff
-         Cd = (null !== (Sd = null === dd || void 0 === dd ? void 0 : dd.properties) && void 0 !== Sd ? Sd : []).flatMap((dd => dd.name && (ad().isIdentifier(dd.name) || ad().isStringLiteral(dd.name)) ? [{
+         mQ = (null !== (UQ = null === QQ || void 0 === QQ ? void 0 : QQ.properties) && void 0 !== UQ ? UQ : []).flatMap((QQ => QQ.name && (WQ().isIdentifier(QQ.name) || WQ().isStringLiteral(QQ.name)) ? [{
```

#### 676. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12374` → after: `L12374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12374) · [Before (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12374)

```diff
-         Kd = null !== (jd = null === (Xd = Jd.match(/'([^']*)' does not exist/)) || void 0 === Xd ? void 0 : Xd[1]) && void 0 !== jd ? jd : Dd,
+         uQ = null !== (NQ = null === (TQ = FQ.match(/'([^']*)' does not exist/)) || void 0 === TQ ? void 0 : TQ[1]) && void 0 !== NQ ? NQ : aQ,
```

#### 677. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12376)

```diff
-         ld = od.length > 0 ? od : [{
+         bQ = HQ.length > 0 ? HQ : [{
```

#### 678. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12380` → after: `L12380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12380) · [Before (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12380)

```diff
-         Qd = kd ? ` It takes ${zk(Zd,kd)}.` : " Check Show Docs for its settings.";
+         YQ = wQ ? ` It takes ${Pw(kQ,wQ)}.` : " Check Show Docs for its settings.";
```

#### 679. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12386-L12387` → after: `L12386-L12387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12386-L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12386-L12387) · [Before (L12386-L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12386-L12387)

```diff
-         const dd = (0, Bd.d)(nZ, Jd),
-           kd = void 0 !== dd && Pd.includes(dd) && !Cd.some((kd => kd.name === dd || kd.name !== Jd && (0, Bd.d)(nZ, kd.name) === dd));
+         const QQ = (0, SQ.b)(jk, FQ),
+           wQ = void 0 !== QQ && DQ.includes(QQ) && !mQ.some((wQ => wQ.name === QQ || wQ.name !== FQ && (0, SQ.b)(jk, wQ.name) === QQ));
```

#### 680. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12389` → after: `L12389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12389) · [Before (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12389)

```diff
-         void 0 !== Nd && Zd.getTypeAtLocation(Nd).getCallSignatures().length > 0 || Pd.includes(Jd) || (pd = kd ? `"${dd}"` : ko(Jd, Pd)), gd.add(`${Wd} has no setting called "${Jd}".${pd?` Did you mean ${pd}?`:Qd}`)
+         void 0 !== qQ && kQ.getTypeAtLocation(qQ).getCallSignatures().length > 0 || DQ.includes(FQ) || (LQ = wQ ? `"${QQ}"` : LH(FQ, DQ)), vQ.add(`${oQ} has no setting called "${FQ}".${LQ?` Did you mean ${LQ}?`:YQ}`)
```

#### 681. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12393` → after: `L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12393) · [Before (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12393)

```diff
-     const Td = null !== (Ld = null === Kd || void 0 === Kd ? void 0 : Kd.initializer) && void 0 !== Ld ? Ld : Nd,
+     const XQ = null !== (xQ = null === uQ || void 0 === uQ ? void 0 : uQ.initializer) && void 0 !== xQ ? xQ : qQ,
```

#### 682. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12397` → after: `L12397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12397) · [Before (L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12397)

```diff
-       rd = null !== (Od = null === Td || void 0 === Td ? void 0 : Td.getText(Pd)) && void 0 !== Od ? Od : od,
+       JQ = null !== (AQ = null === XQ || void 0 === XQ ? void 0 : XQ.getText(DQ)) && void 0 !== AQ ? AQ : HQ,
```

#### 683. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12401` → after: `L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12401) · [Before (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12401)

```diff
-       const Jd = null === (fd = new RegExp(`(?:^|[{,])\\s*${ud.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(dd)) || void 0 === fd ? void 0 : fd[2];
+       const FQ = null === (KQ = new RegExp(`(?:^|[{,])\\s*${EQ.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(QQ)) || void 0 === KQ ? void 0 : KQ[2];
```

#### 684. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12404` → after: `L12404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12404) · [Before (L12404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12404)

```diff
-         gd.add(`${Wd} has no ${hd} called "${Jd}" (${rd}).${dd?` Did you mean ${dd}?`:""}`)
+         vQ.add(`${oQ} has no ${hQ} called "${FQ}" (${JQ}).${QQ?` Did you mean ${QQ}?`:""}`)
```

#### 685. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12410` → after: `L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12410) · [Before (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12410)

```diff
-       const dd = Td && ad().isStringLiteral(Td) ? Td : void 0,
+       const QQ = XQ && WQ().isStringLiteral(XQ) ? XQ : void 0,
```

#### 686. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12412-L12413` → after: `L12412-L12413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12412-L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12412-L12413) · [Before (L12412-L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12412-L12413)

```diff
-         kd = dd && !Kd ? `${Wd} has no ${hd} called ${nd=Dd,nd.startsWith('"')?nd:`"${nd}"`}.` : `${Wd} can't take ${Dd} there.`;
-       gd.add(`${kd}${Jd?` Did you mean ${Jd}?`:" Check Show Docs for what it takes."}`);
+         wQ = QQ && !uQ ? `${oQ} has no ${hQ} called ${zQ=aQ,zQ.startsWith('"')?zQ:`"${zQ}"`}.` : `${oQ} can't take ${aQ} there.`;
+       vQ.add(`${wQ}${FQ?` Did you mean ${FQ}?`:" Check Show Docs for what it takes."}`);
```

#### 687. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12418` → after: `L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12418) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12418)

```diff
-       gd.add(`${Wd} needs ${td} in ${Dd}: it takes ${zk(Zd,Ed)}.`);
+       vQ.add(`${oQ} needs ${nQ} in ${aQ}: it takes ${Pw(kQ,fQ)}.`);
```

#### 688. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12422` → after: `L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12422) · [Before (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12422)

```diff
-       gd.add(`${Wd} can't take ${Dd} there: it takes ${zk(Zd,Ed)}.`);
+       vQ.add(`${oQ} can't take ${aQ} there: it takes ${Pw(kQ,fQ)}.`);
```

#### 689. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12428` → after: `L12428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12428) · [Before (L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12428)

```diff
-       gd.add(`${Wd} needs settings in { } there${dd?`, like ${dd}`:""}, not ${Dd}.`);
+       vQ.add(`${oQ} needs settings in { } there${QQ?`, like ${QQ}`:""}, not ${aQ}.`);
```

#### 690. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12433` → after: `L12433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12433) · [Before (L12433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12433)

```diff
-       wd = null !== (Gd = null === (vd = Zd.getResolvedSignature(pd)) || void 0 === vd || null === (xd = vd.parameters[Hd]) || void 0 === xd ? void 0 : xd.name) && void 0 !== Gd ? Gd : "that part",
+       yQ = null !== (GQ = null === (pQ = kQ.getResolvedSignature(LQ)) || void 0 === pQ || null === (cQ = pQ.parameters[ZQ]) || void 0 === cQ ? void 0 : cQ.name) && void 0 !== GQ ? GQ : "that part",
```

#### 691. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12436)

```diff
-     "string" === zd ? gd.add(`${Wd} needs ${wd} as text, but ${Dd} is ${dJ} here.`) : "number" === zd ? gd.add(`${Wd} needs ${wd} as a number, but ${Dd} is ${dJ} here.`) : gd.add(`${Wd} can't take ${Dd} there${Ed?`: it takes ${zk(Zd,Ed)}`:". Check Show Docs for what it takes"}.`)
+     "string" === PQ ? vQ.add(`${oQ} needs ${yQ} as text, but ${aQ} is ${dQ} here.`) : "number" === PQ ? vQ.add(`${oQ} needs ${yQ} as a number, but ${aQ} is ${dQ} here.`) : vQ.add(`${oQ} can't take ${aQ} there${fQ?`: it takes ${Pw(kQ,fQ)}`:". Check Show Docs for what it takes"}.`)
```

#### 692. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12451` → after: `L12451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12451) · [Before (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12451)

```diff
-       Wd = null !== (kd = null === dd || void 0 === dd ? void 0 : dd[1]) && void 0 !== kd ? kd : null === dd || void 0 === dd ? void 0 : dd[2];
+       oQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ[1]) && void 0 !== wQ ? wQ : null === QQ || void 0 === QQ ? void 0 : QQ[2];
```

#### 693. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12453` → after: `L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12453) · [Before (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12453)

```diff
-     if (Wd) Jd.set(Wd, (null !== (pd = Jd.get(Wd)) && void 0 !== pd ? pd : 0) + 1)
+     if (oQ) FQ.set(oQ, (null !== (LQ = FQ.get(oQ)) && void 0 !== LQ ? LQ : 0) + 1)
```

#### 694. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12457` → after: `L12457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12457) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12457)

```diff
-     return kd > 1 ? [`${Jd} is in the code ${kd} times, so only the last one runs. Put them together in one ${Jd}.`] : []
+     return wQ > 1 ? [`${FQ} is in the code ${wQ} times, so only the last one runs. Put them together in one ${FQ}.`] : []
```

#### 695. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12466)

```diff
-       const pd = null !== (Jd = null === (kd = Pd[dd]) || void 0 === kd ? void 0 : kd.trim()) && void 0 !== Jd ? Jd : "";
+       const LQ = null !== (FQ = null === (wQ = DQ[QQ]) || void 0 === wQ ? void 0 : wQ.trim()) && void 0 !== FQ ? FQ : "";
```

#### 696. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12469` → after: `L12469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12469) · [Before (L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12469)

```diff
-         text: pd.length > 50 ? `${pd.slice(0,47)}...` : pd
+         text: LQ.length > 50 ? `${LQ.slice(0,47)}...` : LQ
```

#### 697. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12477` → after: `L12477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12477) · [Before (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12477)

```diff
-       Jd = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${dd}\\s*\\(|^${dd}\\s*=`),
+       FQ = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${QQ}\\s*\\(|^${QQ}\\s*=`),
```

#### 698. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12481` → after: `L12481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12481) · [Before (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12481)

```diff
-   const Kd = null !== (kd = null === (pd = /"([^"]+)"/.exec(dd)) || void 0 === pd ? void 0 : pd[1]) && void 0 !== kd ? kd : null === (Nd = /^api\.[\w$]+/.exec(dd)) || void 0 === Nd ? void 0 : Nd[0];
+   const uQ = null !== (wQ = null === (LQ = /"([^"]+)"/.exec(QQ)) || void 0 === LQ ? void 0 : LQ[1]) && void 0 !== wQ ? wQ : null === (qQ = /^api\.[\w$]+/.exec(QQ)) || void 0 === qQ ? void 0 : qQ[0];
```

#### 699. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12485` → after: `L12485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12485) · [Before (L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12485)

```diff
-     Qd = null !== (Wd = ld.find((dd => !od.has(Pd[dd])))) && void 0 !== Wd ? Wd : ld[0];
+     YQ = null !== (oQ = bQ.find((QQ => !HQ.has(DQ[QQ])))) && void 0 !== oQ ? oQ : bQ[0];
```

#### 700. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12530` → after: `L12530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12530) · [Before (L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12530)

```diff
-     return [`Line ${Jd.getLineAndCharacterOfPosition(dd.at).line+1} uses "CONFIG.${dd.name}", but CONFIG has no ${dd.name}, so it is undefined there. Add ${dd.name} to CONFIG.`]
+     return [`Line ${FQ.getLineAndCharacterOfPosition(QQ.at).line+1} uses "CONFIG.${QQ.name}", but CONFIG has no ${QQ.name}, so it is undefined there. Add ${QQ.name} to CONFIG.`]
```

#### 701. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12570` → after: `L12570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12570) · [Before (L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12570)

```diff
-           kd(null !== (dd = Nd.error) && void 0 !== dd ? dd : new Error("IndexedDB didn't open"))
+           wQ(null !== (QQ = qQ.error) && void 0 !== QQ ? QQ : new Error("IndexedDB didn't open"))
```

#### 702. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12619` → after: `L12619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12619) · [Before (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12619)

```diff
-           gd = kd(void 0 === Cd.result ? pd : Cd.result), Zd.put(gd, Jd)
+           vQ = wQ(void 0 === mQ.result ? LQ : mQ.result), kQ.put(vQ, FQ)
```

#### 703. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12623` → after: `L12623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12623) · [Before (L12623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12623)

```diff
-   }(cW.f),
+   }(Vo.h),
```

#### 704. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12626` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12626) · [Before (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12626)

```diff
-       this.store = dd, this.signal = Jd, this.qQ = new Map
+       this.store = QQ, this.signal = FQ, this.iY = new Map
```

#### 705. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12633-L12634` → after: `L12633-L12634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12633-L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12633-L12634) · [Before (L12633-L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12633-L12634)

```diff
-         this.qQ.set(dd, pd), pd.then(Jd)
-       }))) && void 0 !== kd ? kd : () => {}
+         this.iY.set(QQ, LQ), LQ.then(FQ)
+       }))) && void 0 !== wQ ? wQ : () => {}
```

#### 706. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12663` → after: `L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12663) · [Before (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12663)

```diff
-       this.qQ.set(dd, Pd.then((dd => {
+       this.iY.set(QQ, DQ.then((QQ => {
```

#### 707. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12682` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12682) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12682)

```diff
-       this.qQ.set(dd, pd.then((dd => {
+       this.iY.set(QQ, LQ.then((QQ => {
```

#### 708. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12699` → after: `L12699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12699) · [Before (L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12699)

```diff
-           snapshots: await this.store.update(this.storeKey(dd), (dd => Jd(eC(dd) ? dd : null))),
+           snapshots: await this.store.update(this.storeKey(QQ), (QQ => FQ(Mm(QQ) ? QQ : null))),
```

#### 709. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12710` → after: `L12710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12710) · [Before (L12710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12710)

```diff
-       return this.store.getItem(this.storeKey(dd)).then((dd => eC(dd) ? dd : null)).catch((() => null))
+       return this.store.getItem(this.storeKey(QQ)).then((QQ => Mm(QQ) ? QQ : null)).catch((() => null))
```

#### 710. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12713-L12714` → after: `L12713-L12714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12713-L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12713-L12714) · [Before (L12713-L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12713-L12714)

```diff
-       let Jd = this.qQ.get(dd);
-       return Jd || (Jd = this.store.getItem(this.storeKey(dd)).then((dd => eC(dd) ? dd : [])).catch((() => [])), this.qQ.set(dd, Jd)), Jd
+       let FQ = this.iY.get(QQ);
+       return FQ || (FQ = this.store.getItem(this.storeKey(QQ)).then((QQ => Mm(QQ) ? QQ : [])).catch((() => [])), this.iY.set(QQ, FQ)), FQ
```

#### 711. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12717` → after: `L12717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12717) · [Before (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12717)

```diff
-       return `worldCodeAiHistory:${dd}`
+       return `worldCodeAiHistory:${QQ}`
```

#### 712. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12722` → after: `L12722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12722) · [Before (L12722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12722)

```diff
-       this.store = dd, this.signal = Jd, this.qQ = new Map
+       this.store = QQ, this.signal = FQ, this.iY = new Map
```

#### 713. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12730` → after: `L12730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12730) · [Before (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12730)

```diff
-           return null !== (kd = await this.read(dd)) && void 0 !== kd ? kd : Jd
+           return null !== (wQ = await this.read(QQ)) && void 0 !== wQ ? wQ : FQ
```

#### 714. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12732-L12733` → after: `L12732-L12733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12732-L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12732-L12733) · [Before (L12732-L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12732-L12733)

```diff
-         this.qQ.set(dd, pd), pd.then(Jd)
-       }))) && void 0 !== kd ? kd : () => {}
+         this.iY.set(QQ, LQ), LQ.then(FQ)
+       }))) && void 0 !== wQ ? wQ : () => {}
```

#### 715. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12739` → after: `L12739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12739) · [Before (L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12739)

```diff
-       return this.update(dd, (dd => dd.includes(Jd) || dd.length >= 8 ? dd : [...dd, Jd]))
+       return this.update(QQ, (QQ => QQ.includes(FQ) || QQ.length >= 8 ? QQ : [...QQ, FQ]))
```

#### 716. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12751` → after: `L12751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12751) · [Before (L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12751)

```diff
-         const Nd = Jd(null !== (pd = await this.read(dd)) && void 0 !== pd ? pd : kd);
+         const qQ = FQ(null !== (LQ = await this.read(QQ)) && void 0 !== LQ ? LQ : wQ);
```

#### 717. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12754` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12754) · [Before (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12754)

```diff
-       this.qQ.set(dd, pd);
+       this.iY.set(QQ, LQ);
```

#### 718. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12762-L12763` → after: `L12762-L12763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12762-L12763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12762-L12763) · [Before (L12762-L12763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12762-L12763)

```diff
-       let Jd = this.qQ.get(dd);
-       return Jd || (Jd = this.read(dd).then((dd => null !== dd && void 0 !== dd ? dd : [])), this.qQ.set(dd, Jd)), Jd
+       let FQ = this.iY.get(QQ);
+       return FQ || (FQ = this.read(QQ).then((QQ => null !== QQ && void 0 !== QQ ? QQ : [])), this.iY.set(QQ, FQ)), FQ
```

#### 719. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12766` → after: `L12766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12766) · [Before (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12766)

```diff
-       return `worldCodeAiNotes:${dd}`
+       return `worldCodeAiNotes:${QQ}`
```

#### 720. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12775` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12775) · [Before (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12775)

```diff
-     const Nd = dd => Qd.e.find((Jd => Jd.id === dd)),
+     const qQ = QQ => YQ.c.find((FQ => FQ.id === QQ)),
```

#### 721. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12778` → after: `L12778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12778) · [Before (L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12778)

```diff
-         return null !== (Jd = null === (kd = Nd(dd)) || void 0 === kd ? void 0 : kd.content) && void 0 !== Jd ? Jd : ""
+         return null !== (FQ = null === (wQ = qQ(QQ)) || void 0 === wQ ? void 0 : wQ.content) && void 0 !== FQ ? FQ : ""
```

#### 722. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12786-L12787` → after: `L12786-L12787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12786-L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12786-L12787) · [Before (L12786-L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12786-L12787)

```diff
-       itemNames: null !== (dd = null === (Jd = Nd("itemNames")) || void 0 === Jd ? void 0 : Jd.raw) && void 0 !== dd ? dd : "",
-       blockNames: null !== (kd = null === (pd = Nd("blockNames")) || void 0 === pd ? void 0 : pd.raw) && void 0 !== kd ? kd : "",
+       itemNames: null !== (QQ = null === (FQ = qQ("itemNames")) || void 0 === FQ ? void 0 : FQ.raw) && void 0 !== QQ ? QQ : "",
+       blockNames: null !== (wQ = null === (LQ = qQ("blockNames")) || void 0 === LQ ? void 0 : LQ.raw) && void 0 !== wQ ? wQ : "",
```

#### 723. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12829` → after: `L12829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12829) · [Before (L12829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12829)

```diff
-       ...sg.e,
+       ...Wv.g,
```

#### 724. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12870` → after: `L12870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12870) · [Before (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12870)

```diff
-   return Object.entries(null !== (kd = dd.leftFiles) && void 0 !== kd ? kd : {}).every((dd => {
+   return Object.entries(null !== (wQ = QQ.leftFiles) && void 0 !== wQ ? wQ : {}).every((QQ => {
```

#### 725. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12873` → after: `L12873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12873) · [Before (L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12873)

```diff
-     return (null !== (kd = Jd[pd]) && void 0 !== kd ? kd : "") === Nd
+     return (null !== (wQ = FQ[LQ]) && void 0 !== wQ ? wQ : "") === qQ
```

#### 726. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12882-L12883` → after: `L12882-L12883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12882-L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12882-L12883) · [Before (L12882-L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12882-L12883)

```diff
-     return kd.length > 0 && kd.every((dd => void 0 !== dd && (void 0 === Jd || Jd.some((Jd => qg(Jd, [dd]) !== Jd))))) ? kd : void 0
-   }(null !== (Jd = dd.warnings) && void 0 !== Jd ? Jd : [], dd.changes.map((dd => dd.after)))
+     return wQ.length > 0 && wQ.every((QQ => void 0 !== QQ && (void 0 === FQ || FQ.some((FQ => Sv(FQ, [QQ]) !== FQ))))) ? wQ : void 0
+   }(null !== (FQ = QQ.warnings) && void 0 !== FQ ? FQ : [], QQ.changes.map((QQ => QQ.after)))
```

#### 727. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12909` → after: `L12909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12909) · [Before (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12909)

```diff
-     Xd = null !== (Jd = ld.warnings) && void 0 !== Jd ? Jd : [],
+     TQ = null !== (FQ = bQ.warnings) && void 0 !== FQ ? FQ : [],
```

#### 728. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12912` → after: `L12912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12912) · [Before (L12912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12912)

```diff
-     Ud = null !== (kd = null === (Nd = ld.swappedTo) || void 0 === Nd ? void 0 : Nd[0]) && void 0 !== kd ? kd : fd ? null !== (gd = null === (Cd = /"([^"]+)"/.exec(Xd[0])) || void 0 === Cd ? void 0 : Cd[1]) && void 0 !== gd ? gd : null === (Kd = /^api\.[\w$]+/.exec(Xd[0])) || voi … [truncated]
+     lQ = null !== (wQ = null === (qQ = bQ.swappedTo) || void 0 === qQ ? void 0 : qQ[0]) && void 0 !== wQ ? wQ : KQ ? null !== (vQ = null === (mQ = /"([^"]+)"/.exec(TQ[0])) || void 0 === mQ ? void 0 : mQ[1]) && void 0 !== vQ ? vQ : null === (uQ = /^api\.[\w$]+/.exec(TQ[0])) || voi … [truncated]
```

#### 729. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12917` → after: `L12917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12917) · [Before (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12917)

```diff
-       return new Map((null !== (dd = ld.warnings) && void 0 !== dd ? dd : []).map((dd => [dd, 1 === ld.changes.length && Jd ? Zo(dd, Jd) : void 0])))
+       return new Map((null !== (QQ = bQ.warnings) && void 0 !== QQ ? QQ : []).map((QQ => [QQ, 1 === bQ.changes.length && FQ ? vH(QQ, FQ) : void 0])))
```

#### 730. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12921` → after: `L12921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12921) · [Before (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12921)

```diff
-       return null !== (Jd = null === (kd = Dd.get(dd)) || void 0 === kd ? void 0 : kd.line) && void 0 !== Jd ? Jd : dd
+       return null !== (FQ = null === (wQ = aQ.get(QQ)) || void 0 === wQ ? void 0 : wQ.line) && void 0 !== FQ ? FQ : QQ
```

#### 731. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12930` → after: `L12930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12930) · [Before (L12930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12930)

```diff
-     rd((dd => 0 === dd.size ? dd : new Set))
+     JQ((QQ => 0 === QQ.size ? QQ : new Set))
```

#### 732. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12942` → after: `L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12942) · [Before (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12942)

```diff
-         const kd = new Set((null !== (Jd = Vd.get(dd.path)) && void 0 !== Jd ? Jd : []).filter((Jd => !hd.has(`${dd.path}:${Jd.index}`))).map((dd => dd.index))),
+         const wQ = new Set((null !== (FQ = gQ.get(QQ.path)) && void 0 !== FQ ? FQ : []).filter((FQ => !hQ.has(`${QQ.path}:${FQ.index}`))).map((QQ => QQ.index))),
```

#### 733. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12948` → after: `L12948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12948) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12948)

```diff
-             return `${pd.join("\n")}${Nd}`
+             return `${LQ.join("\n")}${qQ}`
```

#### 734. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12970` → after: `L12970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12970) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12970)

```diff
-       title: NJ ? `Editing code: ${WJ}` : `Code change: ${WJ}`,
+       title: LF ? `Editing code: ${qF}` : `Code change: ${qF}`,
```

#### 735. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12990` → after: `L12990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12990) · [Before (L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12990)

```diff
-           }(kJ ? null !== (Jd = kJ.find((Jd => Jd.path === dd.path))) && void 0 !== Jd ? Jd : {
+           }(FF ? null !== (FQ = FF.find((FQ => FQ.path === QQ.path))) && void 0 !== FQ ? FQ : {
```

#### 736. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L12993` → after: `L12993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R12993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L12993) · [Before (L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L12993)

```diff
-           } : dd), Wd = null !== (kd = Vd.get(dd.path)) && void 0 !== kd ? kd : [], Zd = "offered" !== Yd && "applied" !== Yd || "" === dd.before ? [] : function(dd, Jd) {
+           } : QQ), oQ = null !== (wQ = gQ.get(QQ.path)) && void 0 !== wQ ? wQ : [], kQ = "offered" !== sQ && "applied" !== sQ || "" === QQ.before ? [] : function(QQ, FQ) {
```

#### 737. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13006` → after: `L13006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13006) · [Before (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13006)

```diff
-                 children: 1 === pd ? "1 line added" : `${pd} lines added`
+                 children: 1 === LQ ? "1 line added" : `${LQ} lines added`
```

#### 738. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13014-L13016` → after: `L13014-L13016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13014-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13014-L13016) · [Before (L13014-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13014-L13016)

```diff
-                 const kd = `${dd.path}:${Jd.index}`,
-                   pd = [Jd.added.length > 0 ? `+${Jd.added.length}` : "", Jd.removed.length > 0 ? `\u2212${Jd.removed.length}` : ""].filter(Boolean).join(" "),
-                   Nd = [Jd.added.length > 0 ? `${Jd.added.length} ${1===Jd.added.length?"line":"lines"} added` : "", Jd.removed.length > 0 ? `${Jd.removed.length} taken out` : ""].filter(Boolean).join(", ");
+                 const wQ = `${QQ.path}:${FQ.index}`,
+                   LQ = [FQ.added.length > 0 ? `+${FQ.added.length}` : "", FQ.removed.length > 0 ? `\u2212${FQ.removed.length}` : ""].filter(Boolean).join(" "),
+                   qQ = [FQ.added.length > 0 ? `${FQ.added.length} ${1===FQ.added.length?"line":"lines"} added` : "", FQ.removed.length > 0 ? `${FQ.removed.length} taken out` : ""].filter(Boolean).join(", ");
```

#### 739. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13042` → after: `L13042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13042) · [Before (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13042)

```diff
-                       children: `${pd} ${Jd.added.length+Jd.removed.length===1?"line":"lines"}`
+                       children: `${LQ} ${FQ.added.length+FQ.removed.length===1?"line":"lines"}`
```

#### 740. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13058` → after: `L13058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13058) · [Before (L13058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13058)

```diff
-               children: wd ? `Hide the ${Wd.length} parts` : `Show the ${Wd.length} parts that went in`
+               children: yQ ? `Hide the ${oQ.length} parts` : `Show the ${oQ.length} parts that went in`
```

#### 741. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13071` → after: `L13071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13071) · [Before (L13071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13071)

```diff
-               }, `${dd.path}:${Jd.index}`)))
+               }, `${QQ.path}:${FQ.index}`)))
```

#### 742. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13081` → after: `L13081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13081) · [Before (L13081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13081)

```diff
-                 const kd = null !== (Jd = tC(dd)) && void 0 !== Jd ? Jd : PK(dd);
+                 const wQ = null !== (FQ = Zm(QQ)) && void 0 !== FQ ? FQ : vu(QQ);
```

#### 743. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13083` → after: `L13083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13083) · [Before (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13083)

```diff
-               })).join(", "), Zd.length > 6 ? ` and ${Zd.length-6} more` : "", ".", " ", (0, Pd.jsx)("code", {
+               })).join(", "), kQ.length > 6 ? ` and ${kQ.length-6} more` : "", ".", " ", (0, DQ.jsx)("code", {
```

#### 744. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13108-L13109` → after: `L13108-L13109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13108-L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13108-L13109) · [Before (L13108-L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13108-L13109)

```diff
-           children: yd ? 1 === Td ? `${Ed?`Line ${Ed.line}`:"This line"} ${nd?"will":"would"} never work:` : `${Td} lines ${nd?"will":"would"} never work:` : 1 === Td ? `${Ed?`Line ${Ed.line}`:"This line"} ${nd?"will":"would"} break:` : `${Td} lines ${nd?"will":"would"} break:`
-         }), (Sd ? Xd : Xd.slice(0, 1)).map(((dd, Jd, kd) => {
+           children: jQ ? 1 === XQ ? `${fQ?`Line ${fQ.line}`:"This line"} ${zQ?"will":"would"} never work:` : `${XQ} lines ${zQ?"will":"would"} never work:` : 1 === XQ ? `${fQ?`Line ${fQ.line}`:"This line"} ${zQ?"will":"would"} break:` : `${XQ} lines ${zQ?"will":"would"} break:`
+         }), (UQ ? TQ : TQ.slice(0, 1)).map(((QQ, FQ, wQ) => {
```

#### 745. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13116` → after: `L13116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13116) · [Before (L13116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13116)

```diff
-               children: [Td > 1 && `Line ${Wd.line}: `, (0, Pd.jsx)("code", {
+               children: [XQ > 1 && `Line ${oQ.line}: `, (0, DQ.jsx)("code", {
```

#### 746. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13120` → after: `L13120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13120) · [Before (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13120)

```diff
-               children: !Wd || 1 !== Td && Co(dd) ? dd : Ko(dd)
+               children: !oQ || 1 !== XQ && uH(QQ) ? QQ : HH(QQ)
```

#### 747. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13131` → after: `L13131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13131) · [Before (L13131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13131)

```diff
-         ...cd ? {} : sg.e,
+         ...VQ ? {} : Wv.g,
```

#### 748. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13143` → after: `L13143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13143) · [Before (L13143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13143)

```diff
-         children: Md ? Md.codeBlock ? "Apply in that code block" : "Apply in World Code" : Hd && JJ < zd ? `Apply ${JJ} of ${zd} changes` : fd ? "Apply anyway" : "Apply to my code"
+         children: RQ ? RQ.codeBlock ? "Apply in that code block" : "Apply in World Code" : ZQ && QF < PQ ? `Apply ${QF} of ${PQ} changes` : KQ ? "Apply anyway" : "Apply to my code"
```

#### 749. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13157` → after: `L13157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13157) · [Before (L13157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13157)

```diff
-           ...sg.e,
+           ...Wv.g,
```

#### 750. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13258` → after: `L13258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13258) · [Before (L13258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13258)

```diff
-       title: pd ? "That change didn't work, so your code is the same." : 1 === kd.length ? "One part didn't work, so it's left out." : `${kd.length} parts didn't work, so they're left out.`,
+       title: LQ ? "That change didn't work, so your code is the same." : 1 === wQ.length ? "One part didn't work, so it's left out." : `${wQ.length} parts didn't work, so they're left out.`,
```

#### 751. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13266` → after: `L13266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13266) · [Before (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13266)

```diff
-           children: Cd.text.split("\n").length > 4 ? `${Cd.text.split("\n").slice(0,4).join("\n")}\n\u2026` : Cd.text
+           children: mQ.text.split("\n").length > 4 ? `${mQ.text.split("\n").slice(0,4).join("\n")}\n\u2026` : mQ.text
```

#### 752. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13274` → after: `L13274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13274) · [Before (L13274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13274)

```diff
-         ...sg.e,
+         ...Wv.g,
```

#### 753. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13312` → after: `L13312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13312) · [Before (L13312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13312)

```diff
-   return `Add this to my World Code:\n\`\`\`js\n${dd.join("\n").replace(/\s*$/,"\n")}\`\`\``
+   return `Add this to my World Code:\n\`\`\`js\n${QQ.join("\n").replace(/\s*$/,"\n")}\`\`\``
```

#### 754. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13317` → after: `L13317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13317) · [Before (L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13317)

```diff
-   return `${Math.floor(Jd/60)}:${String(Jd%60).padStart(2,"0")}`
+   return `${Math.floor(FQ/60)}:${String(FQ%60).padStart(2,"0")}`
```

#### 755. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13329` → after: `L13329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13329) · [Before (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13329)

```diff
-   const pd = (Nd = kd.phase, Zd = null !== (Jd = kd.reasoningChars) && void 0 !== Jd ? Jd : 0, "screening" === Nd ? 3 : "writing" === Nd ? 2 : "thinking" === Nd && Zd >= 400 ? 1 : 0);
+   const LQ = (qQ = wQ.phase, kQ = null !== (FQ = wQ.reasoningChars) && void 0 !== FQ ? FQ : 0, "screening" === qQ ? 3 : "writing" === qQ ? 2 : "thinking" === qQ && kQ >= 400 ? 1 : 0);
```

#### 756. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13333` → after: `L13333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13333) · [Before (L13333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13333)

```diff
-     children: (gd = !kd.skipsSafetyCheck, gd ? qK : qK.filter((dd => "Safety check" !== dd))).map(((dd, Jd) => (0, Pd.jsx)("li", {
+     children: (vQ = !wQ.skipsSafetyCheck, vQ ? iu : iu.filter((QQ => "Safety check" !== QQ))).map(((QQ, FQ) => (0, DQ.jsx)("li", {
```

#### 757. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13335` → after: `L13335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13335) · [Before (L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13335)

```diff
-       children: Jd < pd ? `\u2713 ${dd}` : dd
+       children: FQ < LQ ? `\u2713 ${QQ}` : QQ
```

#### 758. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13380` → after: `L13380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13380) · [Before (L13380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13380)

```diff
-         const Jd = "function" === typeof dd ? dd : () => dd;
+         const FQ = "function" === typeof QQ ? QQ : () => QQ;
```

#### 759. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13386` → after: `L13386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13386) · [Before (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13386)

```diff
-     const [oJ, lJ] = (0, pd.useState)(null), [QJ, LJ] = (0, pd.useState)([]), [OJ, eJ] = (0, pd.useState)(!1), [RJ, IJ] = (0, pd.useState)([]), [GJ, vJ] = (0, pd.useState)(!1), [xJ, qJ] = (0, pd.useState)(!1), [BJ, sJ] = (0, pd.useState)(null), [iJ, aJ] = (0, pd.useState)(!1), [M … [truncated]
+     const [uF, HF] = (0, LQ.useState)(null), [bF, YF] = (0, LQ.useState)([]), [xF, AF] = (0, LQ.useState)(!1), [tF, eF] = (0, LQ.useState)([]), [MF, GF] = (0, LQ.useState)(!1), [pF, cF] = (0, LQ.useState)(!1), [CF, SF] = (0, LQ.useState)(null), [iF, WF] = (0, LQ.useState)(!1), [R … [truncated]
```

#### 760. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13389` → after: `L13389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13389) · [Before (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13389)

```diff
-         const Jd = JSON.parse(null !== (dd = localStorage.getItem(YK)) && void 0 !== dd ? dd : "{}");
+         const FQ = JSON.parse(null !== (QQ = localStorage.getItem(Uu)) && void 0 !== QQ ? QQ : "{}");
```

#### 761. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13406` → after: `L13406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13406) · [Before (L13406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13406)

```diff
-       [VJ, zJ] = (0, pd.useState)(null !== (Jd = WJ.dismissedErrorCounts.get(Ed.key)) && void 0 !== Jd ? Jd : 0),
+       [gF, PF] = (0, LQ.useState)(null !== (FQ = qF.dismissedErrorCounts.get(fQ.key)) && void 0 !== FQ ? FQ : 0),
```

#### 762. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13414-L13415` → after: `L13414-L13415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13414-L13415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13414-L13415) · [Before (L13414-L13415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13414-L13415)

```diff
-       gk = (0, QC.o)(cd),
-       Ck = null !== Pk && void 0 !== Pk ? Pk : null === gk || void 0 === gk ? void 0 : gk.entryId,
+       kw = (0, Am.v)(VQ),
+       vw = null !== ow && void 0 !== ow ? ow : null === kw || void 0 === kw ? void 0 : kw.entryId,
```

#### 763. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13467` → after: `L13467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13467) · [Before (L13467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13467)

```diff
-           Nd = Math.max(Nd, Math.min(Pd, Jd ? pd(Jd) - kd : pd(gd)))
+           qQ = Math.max(qQ, Math.min(DQ, FQ ? LQ(FQ) - wQ : LQ(vQ)))
```

#### 764. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13528` → after: `L13528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13528) · [Before (L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13528)

```diff
-     const ik = null !== (Nd = null === (Qd = ZJ.findLast((dd => dd.target.key === Ed.key))) || void 0 === Qd ? void 0 : Qd.retryAt) && void 0 !== Nd ? Nd : 0,
+     const iw = null !== (qQ = null === (YQ = DF.findLast((QQ => QQ.target.key === fQ.key))) || void 0 === YQ ? void 0 : YQ.retryAt) && void 0 !== qQ ? qQ : 0,
```

#### 765. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13558` → after: `L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13558) · [Before (L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13558)

```diff
-         return null !== (kd = pd) && void 0 !== kd ? kd : Wg(dd)
+         return null !== (wQ = LQ) && void 0 !== wQ ? wQ : Dv(QQ)
```

#### 766. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13597` → after: `L13597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13597) · [Before (L13597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13597)

```diff
-           about: Wd = (null !== Jd && void 0 !== Jd ? Jd : dd.trim()),
+           about: oQ = (null !== FQ && void 0 !== FQ ? FQ : QQ.trim()),
```

#### 767. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13621` → after: `L13621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13621) · [Before (L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13621)

```diff
-             } = await Promise.resolve().then((() => kd(1371)));
+             } = await Promise.resolve().then((() => wQ(1362)));
```

#### 768. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13636` → after: `L13636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13636) · [Before (L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13636)

```diff
-         const Md = null !== ld && void 0 !== ld ? ld : iJ && !Kd && void 0 === Qd && void 0 === ed;
+         const RQ = null !== bQ && void 0 !== bQ ? bQ : iF && !uQ && void 0 === YQ && void 0 === tQ;
```

#### 769. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13640` → after: `L13640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13640) · [Before (L13640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13640)

```diff
-         const Fd = null !== Bd && void 0 !== Bd ? Bd : Sd;
+         const OQ = null !== SQ && void 0 !== SQ ? SQ : UQ;
```

#### 770. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13645` → after: `L13645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13645) · [Before (L13645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13645)

```diff
-           fd = bd && !Ld.e.get(),
+           KQ = IQ && !xQ.f.get(),
```

#### 771. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13655` → after: `L13655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13655) · [Before (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13655)

```diff
-           cd = (Ed < 0 ? ZJ : ZJ.slice(0, Ed)).filter((dd => !dd.isNotice && !dd.leftOut && bk(dd) && (fd || !dd.isUnchecked))).slice(-4).map((dd => ({
+           VQ = (fQ < 0 ? DF : DF.slice(0, fQ)).filter((QQ => !QQ.isNotice && !QQ.leftOut && Iw(QQ) && (KQ || !QQ.isUnchecked))).slice(-4).map((QQ => ({
```

#### 772. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13657` → after: `L13657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13657) · [Before (L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13657)

```diff
-             text: dd.question ? `${dd.text}\n${dd.question.question}` : dd.text
+             text: QQ.question ? `${QQ.text}\n${QQ.question.question}` : QQ.text
```

#### 773. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13660` → after: `L13660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13660) · [Before (L13660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13660)

```diff
-           ud = void 0 === gd ? void 0 === Jd ? ad : void 0 : null !== gd && void 0 !== gd ? gd : void 0,
+           EQ = void 0 === vQ ? void 0 === FQ ? WQ : void 0 : null !== vQ && void 0 !== vQ ? vQ : void 0,
```

#### 774. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13675` → after: `L13675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13675) · [Before (L13675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13675)

```diff
-             text: dd ? ad : null !== Jd && void 0 !== Jd ? Jd : ad,
+             text: QQ ? WQ : null !== FQ && void 0 !== FQ ? FQ : WQ,
```

#### 775. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13748` → after: `L13748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13748) · [Before (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13748)

```diff
-               if (!Ud && !md || fd) return null !== sd && void 0 !== sd ? sd : ad;
+               if (!lQ && !rQ || KQ) return null !== iQ && void 0 !== iQ ? iQ : WQ;
```

#### 776. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13790` → after: `L13790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13790) · [Before (L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13790)

```diff
-           let ld = Dd ? null !== sd && void 0 !== sd ? sd : ad : await gd();
+           let bQ = aQ ? null !== iQ && void 0 !== iQ ? iQ : WQ : await vQ();
```

#### 777. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13811` → after: `L13811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13811) · [Before (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13811)

```diff
-                 outline: (LJ = PJ(Ld, new Set(so().callbackNames())), [LJ.callbacks.length > 0 ? `Callbacks: ${LJ.callbacks.join(", ")}` : "", LJ.commands.length > 0 ? `Commands: ${LJ.commands.join(", ")}` : "", LJ.functions.length > 0 ? `Functions: ${LJ.functions.join(", ")}` :  … [truncated]
+                 outline: (YF = oF(xQ, new Set(iH().callbackNames())), [YF.callbacks.length > 0 ? `Callbacks: ${YF.callbacks.join(", ")}` : "", YF.commands.length > 0 ? `Commands: ${YF.commands.join(", ")}` : "", YF.functions.length > 0 ? `Functions: ${YF.functions.join(", ")}` :  … [truncated]
```

#### 778. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13818-L13819` → after: `L13818-L13819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13818-L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13818-L13819) · [Before (L13818-L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13818-L13819)

```diff
-               const kd = `${dd.format} ${dd.nativeTools}`,
-                 pd = null !== (Jd = Sd.get(kd)) && void 0 !== Jd ? Jd : sN(so(), Yd, dd);
+               const wQ = `${QQ.format} ${QQ.nativeTools}`,
+                 LQ = null !== (FQ = UQ.get(wQ)) && void 0 !== FQ ? FQ : Cq(iH(), sQ, QQ);
```

#### 779. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13884` → after: `L13884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13884) · [Before (L13884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13884)

```diff
-                 gd || console.warn(`World Code AI: ${CW.name} couldn't be reached`, od)
+                 vQ || console.warn(`World Code AI: ${ko.name} couldn't be reached`, HQ)
```

#### 780. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13932` → after: `L13932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13932) · [Before (L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13932)

```diff
-           }, BJ = (QJ = null === (OJ = lZ.getState().status) || void 0 === OJ ? void 0 : OJ.provider, ZZ[null !== QJ && void 0 !== QJ ? QJ : "ovh"]), sJ = dd => {
+           }, CF = (bF = null === (xF = Yk.getState().status) || void 0 === xF ? void 0 : xF.provider, vk[null !== bF && void 0 !== bF ? bF : "ovh"]), SF = QQ => {
```

#### 781. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13952` → after: `L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13952) · [Before (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13952)

```diff
-             const pd = Ed < 0 ? ZJ : ZJ.slice(0, Ed),
+             const LQ = fQ < 0 ? DF : DF.slice(0, fQ),
```

#### 782. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13964` → after: `L13964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13964) · [Before (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13964)

```diff
-                 rO: sN(so(), Yd, od, {
+                 Ft: Cq(iH(), sQ, HQ, {
```

#### 783. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13966` → after: `L13966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13966) · [Before (L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13966)

```diff
-                   rO: !0
+                   Ft: !0
```

#### 784. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13968` → after: `L13968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13968) · [Before (L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13968)

```diff
-                 toolResults: [...(null !== Cd && void 0 !== Cd ? Cd : []).flatMap((dd => dd.call ? [{
+                 toolResults: [...(null !== mQ && void 0 !== mQ ? mQ : []).flatMap((QQ => QQ.call ? [{
```

#### 785. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13971` → after: `L13971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13971) · [Before (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13971)

```diff
-                 }] : [])), ...(null !== (dd = Yd.lookups) && void 0 !== dd ? dd : []).flatMap((dd => dd.call ? [{
+                 }] : [])), ...(null !== (QQ = sQ.lookups) && void 0 !== QQ ? QQ : []).flatMap((QQ => QQ.call ? [{
```

#### 786. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13973` → after: `L13973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13973) · [Before (L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13973)

```diff
-                   text: `${dd.about}:\n${dd.text}`
+                   text: `${QQ.about}:\n${QQ.text}`
```

#### 787. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13981` → after: `L13981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13981) · [Before (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13981)

```diff
-                   rO: Pd,
+                   Ft: DQ,
```

#### 788. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L13990` → after: `L13990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R13990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L13990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L13990) · [Before (L13990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L13990)

```diff
-                   Ld = null !== Pd && void 0 !== Pd ? Pd : Jd[Jd.length - 1],
+                   xQ = null !== DQ && void 0 !== DQ ? DQ : FQ[FQ.length - 1],
```

#### 789. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14087` → after: `L14087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L14087) · [Before (L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L14087)

```diff
-               content: (CJ = null === Vd || void 0 === Vd || null === (eJ = Vd.cutShort) || void 0 === eJ ? void 0 : eJ.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
+               content: (vF = null === gQ || void 0 === gQ || null === (AF = gQ.cutShort) || void 0 === AF ? void 0 : AF.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
```

#### 790. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L14113` → after: `L14113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/89.js#L14113) · [Before (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/89.js#L14113)

```diff
-                 model: md.name ? `${md.name} \xb7 ${md.model.name}` : md.model.name
+                 model: rQ.name ? `${rQ.name} \xb7 ${rQ.model.name}` : rQ.model.name
```
